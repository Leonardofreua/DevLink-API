import Bee from 'bee-queue';
import ForgotPasswordMail from '../app/jobs/ForgotPasswordMail';
import ConfirmPasswordMail from '../app/jobs/ConfirmPasswordMail';
import redisConfig from '../config/redis';

const jobs = [ForgotPasswordMail, ConfirmPasswordMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.process(handle);
    });
  }
}

export default new Queue();
