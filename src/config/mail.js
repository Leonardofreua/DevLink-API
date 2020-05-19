export default {
  host: 'smtp.mailtrap.io',
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: 'cbb4520192ac67',
    pass: '04cc1cb5b06dac',
  },
  default: {
    from: 'DevLink <no-reply@devlink.com>',
  },
};
