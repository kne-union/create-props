const { createFunction } = _CreateProps;

const argTypes = createFunction((z) => {
  return {
    args: [z.string(), z.number()], returns: z.void()
  };
}, '示例方法');

const doSomething = (...args) => {
  const [arg1, arg2, arg3] = argTypes(...args);
  console.log(arg1, arg2, arg3);
};

const BaseExample = () => {
  return <div onClick={() => {
    doSomething('xxxx', 10, 20);
  }}>
    点击
  </div>;
};

render(<BaseExample name="linzp" description={void 0} />);
