(self.webpackChunk_kne_components_create_props=self.webpackChunk_kne_components_create_props||[]).push([[414],{5764:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=5764,e.exports=n},9666:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var r=t(9090);const o={name:"create-props",summary:'<h1>create-props</h1>\n<h3>\u63cf\u8ff0</h3>\n<p>\u9a8c\u8bc1\u5e76\u683c\u5f0f\u5316props.</p>\n<h3>\u5b89\u88c5</h3>\n<pre><code class="language-shell">npm i --save @kne/create-props\n</code></pre>',description:"\u9a8c\u8bc1\u5e76\u683c\u5f0f\u5316props.",packageName:"@kne/create-props",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>",example:{isFull:!1,className:"create_props_90e68",style:".create_props_90e68 .ant-card {\n  border-color: black;\n  text-align: center;\n  width: 200px;\n}",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const { default: createProps } = _CreateProps;\n\nconst propTypes = createProps((z) => {\n  return [{\n    name: z.string().default('name'), age: z.number().default(10), description: z.string().default('description')\n  }];\n}, '\u793a\u4f8b\u7ec4\u4ef6');\n\nconst BaseExample = (p) => {\n  const props = propTypes(p);\n  return <div>\n    {JSON.stringify(props, null, 2)}\n  </div>;\n};\n\nrender(<BaseExample name=\"linzp\" description={void 0} />);\n\n",scope:[{name:"_CreateProps",packageName:"@kne/current-lib_create-props",importStatement:'import * as _CreateProps from "@kne/create-props"',component:r}]},{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const { createFunction } = _CreateProps;\n\nconst doSomething = createFunction((z) => {\n  return {\n    args: [z.string(), z.number()], returns: z.void()\n  };\n}, '\u793a\u4f8b\u65b9\u6cd5')((arg1, arg2, arg3) => {\n  console.log(arg1, arg2, arg3);\n});\n\nconst BaseExample = () => {\n  return <div onClick={() => {\n    doSomething('xxxx', 10, 20);\n  }}>\n    \u70b9\u51fb\n  </div>;\n};\n\nrender(<BaseExample name=\"linzp\" description={void 0} />);\n\n",scope:[{name:"_CreateProps",packageName:"@kne/current-lib_create-props",importStatement:'import * as _CreateProps from "@kne/create-props"',component:r}]}]}}},1448:(e,n,t)=>{"use strict";var r=t(4922),o=t.n(r),a=t(7558),s=t(5199),p=t(9946),c=t.n(p),d=t(3050),i=t(1488),l=t.n(i),m=t(9261);window.PUBLIC_URL="/create-props";const u={url:"https://uc.fatalent.cn",tpl:"{{url}}/packages/@kne-components/{{remote}}/{{version}}/build"},h={...u,remote:"components-core",defaultVersion:"0.2.65"};(0,d.preset)({remotes:{default:h,"components-core":h,"components-iconfont":{...u,remote:"components-iconfont",defaultVersion:"0.1.8"},"create-props":{...u,remote:"create-props",defaultVersion:"0.1.6"}}});const g=(()=>{const e=c().create({validateStatus:function(){return!0}});return n=>n.hasOwnProperty("loader")&&"function"===typeof n.loader?Promise.resolve(n.loader(l()(n,["loader"]))).then((e=>({data:{code:0,data:e}}))).catch((e=>(s.message.error(e.message||"\u8bf7\u6c42\u53d1\u751f\u9519\u8bef"),{data:{code:500,msg:e.message}}))):e(n)})();(0,a.preset)({ajax:g,loading:(0,m.jsx)(s.Spin,{delay:500,style:{position:"absolute",left:"50%",padding:"10px",transform:"translateX(-50%)"}}),error:null,empty:(0,m.jsx)(s.Empty,{}),transformResponse:e=>{const{data:n}=e;return e.data={code:0===n.code?200:n.code,msg:n.msg,results:n.data},e}});var f=t(5457),k=t(4679),_=t(4152),x=t.n(_),y=(t(1296),t(6446));const v=x().ExampleRoutes,b=e=>{let{preset:n,themeToken:t,...r}=e;return(0,m.jsx)(k.HashRouter,{children:(0,m.jsx)(v,{...r,paths:[{key:"components",path:"/",title:"\u9996\u9875"}],preset:n,themeToken:t,readme:y.default,pageProps:{menu:null}})})};f.createRoot(document.getElementById("root")).render((0,m.jsx)(o().StrictMode,{children:(0,m.jsx)(b,{preset:{ajax:g},themeToken:{colorPrimary:"#4F185A"}})}))}}]);
//# sourceMappingURL=414.d0b789b9.chunk.js.map