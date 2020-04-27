import * as Yup from 'yup';
import crypto from 'crypto';

import Dev from '../models/Dev';

import ForgotPassowrdMail from '../jobs/ForgotPasswordMail';
import ConfirmPasswordMail from '../jobs/ConfirmPasswordMail';
import Queue from '../../lib/Queue';

class ForgotPassowrdController {
  async edit(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
    });

    if (await schema.isValid(req.body)) {
      const { email } = req.body;

      const dev = await Dev.findOne({ email });

      if (!dev) {
        return res.status(401).json({
          error: 'This email address is not associate with any account.',
        });
      }

      const { _id, name } = dev;

      const reset_password_token = crypto.randomBytes(20).toString('hex');

      const reset_password_expires = Date.now() + 3600000; // expires in an hour

      await Dev.findByIdAndUpdate(
        { _id },
        {
          reset_password_token,
          reset_password_expires,
        },
        {
          upsert: true,
          new: true,
        }
      );

      await Queue.add(ForgotPassowrdMail.key, {
        name,
        email,
        reset_password_token,
      });

      return res
        .status(200)
        .json({ message: `A reset email has been sent to ${email}.` });
    }
    return res.status(400).json({ error: 'Validation fails' });
  }

  async redirectToResetPassword(req, res) {
    const { passwd_token } = req.params;

    const dev = await Dev.findOne({
      reset_password_token: passwd_token,
      reset_password_expires: { $gt: Date.now() },
    });

    if (!dev) {
      return res
        .status(401)
        .json({ message: 'Password reset token is invalid or has expired.' });
    }

    res.redirect(
      `http://localhost:3000/resetPassword?passwd_token=${passwd_token}`
    );
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      newPassword: Yup.string()
        .min(6)
        .required(),
      confirmPassword: Yup.string().when('newPassword', (newPassword, field) =>
        newPassword ? field.required().oneOf([Yup.ref('newPassword')]) : field
      ),
    });

    if (await schema.isValid(req.body)) {
      const { passwd_token } = req.query;

      const dev = await Dev.findOne({
        reset_password_token: passwd_token,
        reset_password_expires: { $gt: Date.now() },
      });

      if (!dev) {
        return res
          .status(401)
          .json({ message: 'Password reset token is invalid or has expired.' });
      }

      if (req.body.newPassword === req.body.confirmPassword) {
        const { name, email } = dev;

        dev.password = req.body.newPassword;
        dev.reset_password_token = undefined;
        dev.reset_password_expires = undefined;

        await dev.save();

        await Queue.add(ConfirmPasswordMail.key, {
          name,
          email,
        });
      } else {
        return res.status(422).json({
          error: 'Passwords do not match',
        });
      }

      return res
        .status(200)
        .json({ message: 'Your password has been updated.' });
    }
    return res.status(400).json({ error: 'Validation fails' });
  }
}

export default new ForgotPassowrdController();
