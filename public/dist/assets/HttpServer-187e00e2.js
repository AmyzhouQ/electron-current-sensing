import{i as t}from"./main-ce25b28f.js";import{i as e}from"./ipcRenderer-5e19eaee.js";import{a as s}from"./index-9a8e575f.js";import{s as o}from"./store2-5a46c4a6.js";import{_ as r,r as n,o as a,b as i,g as l,t as c,e as u,a as d,w as p,p as h,f as m}from"./index-265ac112.js";const v={data:()=>({currentStatus:"关闭",servicAddress:"无"}),mounted(){this.init()},methods:{init(){e.invoke(t.checkHttpServer,{}).then((t=>{t.enable&&(this.currentStatus="开启",this.servicAddress=t.server,o.set("httpServiceConfig",t))}))},sendRequest(e){"关闭"!=this.currentStatus?this.requestHttp(t.doHttpRequest,{id:e}).then((t=>{})):this.$message.error("http服务未开启")},requestHttp(t,e){const r=o.get("httpServiceConfig").server||"http://localhost:7071";let n=t.split(".").join("/");return n=r+"/"+n,console.log("url:",n),s({url:n,method:"post",data:e,timeout:6e4})},backendRequest(){console.log("GO_URL:","http://www.test.com");s({baseURL:"http://www.test.com",method:"get",url:"/hello",timeout:6e4}).then((t=>{console.log("res:",t);const e=t.data||null;this.$message.info(`go服务返回: ${e}`)}))}}},f=t=>(h("data-v-3508e997"),t=t(),m(),t),b={id:"app-base-httpserver"},g=f((()=>l("div",{class:"one-block-1"},[l("span",null," 1. 使用http与主进程通信 ")],-1))),k={class:"one-block-2"},w=f((()=>l("div",{class:"one-block-1"},[l("span",null," 2. 使用http与服务端通信 ")],-1))),R={class:"one-block-2"};const q=r(v,[["render",function(t,e,s,o,r,h){const m=n("a-button");return a(),i("div",b,[g,l("div",k,[l("p",null,"* 状态："+c(r.currentStatus),1),l("p",null,"* 地址："+c(r.servicAddress),1),l("p",null,[u("* 发送请求： "),d(m,{onClick:e[0]||(e[0]=t=>h.sendRequest("pictures"))},{default:p((()=>[u(" 打开【我的图片】 ")])),_:1})])]),w,l("div",R,[l("p",null,[d(m,{onClick:e[1]||(e[1]=t=>h.backendRequest())},{default:p((()=>[u(" 发送请求 ")])),_:1}),u(" （请自行创建服务） ")])])])}],["__scopeId","data-v-3508e997"]]);export{q as default};
