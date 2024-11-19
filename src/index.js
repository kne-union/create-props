import { z } from 'zod';

const createProps = (...args) => {
  const { name, callback } =
    typeof args[0] === 'string'
      ? {
          name: args[0],
          callback: args[1]
        }
      : {
          callback: args[0]
        };
  const schema = z.object(callback(z));
  const output = props => {
    return schema.parse(props);
  };
  output.identifier = name;
  output.schema = schema;
  return output;
};

export default createProps;
