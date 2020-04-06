import crypto from 'crypto';

import Dev from '../models/Dev';
import Mail from '../../lib/Mail';

class ForgotPassowrdController {
  async edit(req, res) {
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
    // text: `${process.env.APP_URL}/resetPassword/${reset_password_token}`,
    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Reset Password',
      template: 'resetPassword',
      context: {
        dev: name,
        link: `${process.env.APP_URL}/resetPassword/${reset_password_token}`,
      },
    });

    res
      .status(200)
      .json({ message: `A reset email has been sent to ${email}.` });
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

    // TODO add route to reset password page
    res.redirect(200, `http://localhost:3000?passwd_token=${passwd_token}`);
  }

  async update(req, res) {
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

      await Mail.sendMail({
        to: `${name} <${email}>`,
        subject: 'Your password has been changed',
        template: 'confirmResetPassword',
        context: {
          dev: name,
          email,
        },
      });
    } else {
      return res.status(422).json({
        error: 'Passwords do not match',
      });
    }

    return res.status(200).json({ message: 'Your password has been updated.' });
  }
}

export default new ForgotPassowrdController();
