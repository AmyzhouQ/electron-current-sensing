(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26fcacb7"],{"314d":function(e,t,o){"use strict";o("a561")},"4a19":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app-base-system-launch"}},[o("div",{staticClass:"one-block-2"},[o("a-list",{staticClass:"set-auto",attrs:{itemLayout:"horizontal"}},[o("a-list-item",{staticStyle:{"text-align":"left"},scopedSlots:e._u([{key:"actions",fn:function(){return[o("a-switch",{attrs:{checkedChildren:"开",unCheckedChildren:"关"},on:{change:function(t){return e.autoLaunchChange()}},model:{value:e.autoLaunchChecked,callback:function(t){e.autoLaunchChecked=t},expression:"autoLaunchChecked"}})]},proxy:!0}])},[o("a-list-item-meta",{scopedSlots:e._u([{key:"title",fn:function(){return[o("a",[e._v("启动")])]},proxy:!0},{key:"description",fn:function(){return[o("span",[e._v(" 开机自动启动 ")])]},proxy:!0}])})],1)],1)],1)])},n=[],r=o("a358"),l={data:function(){return{autoLaunchChecked:!1}},mounted:function(){this.init()},methods:{init:function(){var e=this,t=this;t.$ipcCall(r["a"].autoLaunch,"check").then((function(t){console.log("[ipcRenderer] [autoLaunch] result:",t),e.autoLaunchChecked=t.status}))},autoLaunchChange:function(e){console.log("[ipcRenderer] [autoLaunch] self.autoLaunchChecked:",this.autoLaunchChecked)}}},c=l,i=(o("314d"),o("2877")),s=Object(i["a"])(c,a,n,!1,null,"59a6529a",null);t["default"]=s.exports},a358:function(e,t,o){"use strict";o.d(t,"b",(function(){return c})),o.d(t,"a",(function(){return r})),o.d(t,"c",(function(){return l}));var a=o("b775"),n={uploadFile:"/api/example/uploadFile",openSoftware:"/api/example/openSoftware",messageShow:"/api/example/messageShow",messageShowConfirm:"/api/example/messageShowConfirm",dbOperation:"/api/example/dbOperation",test1:"/api/example/test1"},r={messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",socketMessageStart:"controller.example.socketMessageStart",socketMessageStop:"controller.example.socketMessageStop",hello:"controller.example.hello",executeJS:"controller.example.executeJS",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp"},l={appUpdater:"app.updater"},c=function(e,t){return Object(a["b"])({url:n[e],method:"post",data:t})}},a561:function(e,t,o){}}]);
//# sourceMappingURL=chunk-26fcacb7.cfbe169b.js.map