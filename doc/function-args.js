const { createFunction } = _CreateProps;

const doSomething = createFunction((z) => {
  return {
    args: [z.string(), z.number()], returns: z.void()
  };
}, '示例方法')((arg1, arg2, arg3) => {
  console.log(arg1, arg2, arg3);
});

const BaseExample = () => {
  return <div onClick={() => {
    doSomething('xxxx', 10, 20);
  }}>
    点击
  </div>;
};

render(<BaseExample name="linzp" description={void 0} />);
