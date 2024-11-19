const { default: createProps } = _CreateProps;

const propTypes = createProps((z) => {
  return {
    name: z.string().default('name'), age: z.number().default(10), description: z.string().default('description')
  };
}, '示例组件');

const BaseExample = (p) => {
  const props = propTypes(p);
  return <div>
    {JSON.stringify(props, null, 2)}
  </div>;
};

render(<BaseExample name="linzp" description={void 0} />);
