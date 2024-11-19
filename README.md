
# create-props


### 描述

验证并格式化props.


### 安装

```shell
npm i --save @kne/create-props
```

### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _CreateProps(@kne/current-lib_create-props)[import * as _CreateProps from "@kne/create-props"]

```jsx
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

```


### API

| 属性名 | 说明 | 类型 | 默认值 |
|-----|----|----|-----|
|     |    |    |     |

