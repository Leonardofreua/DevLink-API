import Mail from '../../lib/Mail';

class ConfirmPasswordMail {
  get key() {
    return 'ConfirmPasswordMail';
  }

  async handle({ data }) {
    const { name, email } = data;

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Your password has been changed',
      template: 'confirmResetPassword',
      context: {
        dev: name,
        email,
      },
    });
  }
}

export default new ConfirmPasswordMail();
