import { z } from 'zod';

const createProps = (...args) => {
  const { name, callback, description } =
    typeof args[0] === 'string'
      ? {
          name: args[0],
          callback: args[1],
          description: args[2]
        }
      : {
          callback: args[0],
          description: args[1]
        };
  const schema = z.object(callback(z)).describe(description || '');
  const output = props => {
    return schema.parse(props);
  };
  output.identifier = name;
  output.schema = schema;
  return output;
};

export default createProps;
