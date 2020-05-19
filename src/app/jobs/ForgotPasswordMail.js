import Mail from '../../lib/Mail';

class ForgotPasswordMail {
  get key() {
    return 'ForgotPassowrdMail';
  }

  async handle({ data }) {
    const { name, email, reset_password_token } = data;

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Reset Password',
      template: 'resetPassword',
      context: {
        dev: name,
        link: `http://localhost:3333/resetPassword/${reset_password_token}`,
      },
    });
  }
}

export default new ForgotPasswordMail();
