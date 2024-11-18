import { z } from 'zod';

const createProps = callback => {
  const schema = z.object(callback(z));
  return props => {
    return schema.parse(props);
  };
};

export default createProps;
