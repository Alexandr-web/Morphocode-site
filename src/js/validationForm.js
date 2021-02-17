import { Valval } from 'valval';

const options = {
  email: {
    required: true,
    mail: true
  }
};

export default new Valval().start(options);