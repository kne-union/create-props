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
  const propTypes = callback(z);
  const { props, required } = Array.isArray(propTypes)
    ? {
        props: propTypes[0],
        required: propTypes[1]
      }
    : { props: propTypes, required: void 0 };
  const schema = z
    .object(props)
    .required(required)
    .describe(description || '');
  const output = props => {
    return schema.passthrough().parse(props);
  };
  output.identifier = name;
  output.schema = schema;
  return output;
};

export const createFunction = (...args) => {
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
  const { args: functionArgs, returns } = callback(z);

  const schema = z.function().args(...functionArgs);
  returns ? schema.returns(returns) : null;
  schema.describe(description || '');
  const output = targetFunction => {
    return schema.parse(targetFunction);
  };

  output.identifier = name;
  output.schema = schema;

  return output;
};

export const createConst = (...args) => {
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
  const schema = callback(z).describe(description || '');

  const output = target => {
    return schema.passthrough().parse(target);
  };

  output.identifier = name;
  output.schema = schema;

  return output;
};

export default createProps;
