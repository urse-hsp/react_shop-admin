(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{EdlB:function(e,t,a){e.exports={area_code:"area_code___2LS8F",phone_number:"phone_number___1PO0T"}},KWSo:function(e,t,a){e.exports={main:"main___2yGev",leftMenu:"leftMenu___179-W",right:"right___2jdGg",title:"title___3cGwa"}},O4pj:function(e,t,a){"use strict";a.r(t);var n=a("fWQN"),i=a("mtLc"),c=a("yKVA"),r=a("879j"),s=(a("lUTK"),a("BvKs")),o=a("q1tI"),l=a.n(o),d=a("9kvl"),u=a("Hx5s"),m=(a("y8nQ"),a("Vl3Y")),g=(a("5NDa"),a("5rEg")),p=(a("miYZ"),a("tsqr")),v=(a("DZo9"),a("8z0m")),b=(a("+L6B"),a("2/Rp")),f=(a("OaEy"),a("2fM7")),h=a("z7Xi"),y=(a("T2oS"),a("W9HT")),E=a("zPRt"),O=a.n(E),j=f["a"].Option,w={label:"",value:"",key:""},_=function(e){Object(c["a"])(a,e);var t=Object(r["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return e=t.call.apply(t,[this].concat(c)),e.componentDidMount=function(){var t=e.props.dispatch;t&&t({type:"accountAndsettings/fetchProvince"})},e.getCityOption=function(){var t=e.props.city;return t?e.getOption(t):[]},e.getOption=function(e){return!e||e.length<1?l.a.createElement(j,{key:0,value:0},"\u6ca1\u6709\u627e\u5230\u9009\u9879"):e.map((function(e){return l.a.createElement(j,{key:e.id,value:e.id},e.name)}))},e.selectProvinceItem=function(t){var a=e.props,n=a.dispatch,i=a.onChange;n&&n({type:"accountAndsettings/fetchCity",payload:t.key}),i&&i({province:t,city:w})},e.selectCityItem=function(t){var a=e.props,n=a.value,i=a.onChange;n&&i&&i({province:n.province,city:t})},e}return Object(i["a"])(a,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.dispatch,n=t.value;!e.value&&n&&n.province&&a&&a({type:"accountAndsettings/fetchCity",payload:n.province.key})}},{key:"getProvinceOption",value:function(){var e=this.props.province;return e?this.getOption(e):[]}},{key:"conversionObject",value:function(){var e=this.props.value;if(!e)return{province:w,city:w};var t=e.province,a=e.city;return{province:t||w,city:a||w}}},{key:"render",value:function(){var e=this.conversionObject(),t=e.province,a=e.city,n=this.props.loading;return l.a.createElement(y["a"],{spinning:n,wrapperClassName:O.a.row},l.a.createElement(f["a"],{className:O.a.item,value:t,labelInValue:!0,showSearch:!0,onSelect:this.selectProvinceItem},this.getProvinceOption()),l.a.createElement(f["a"],{className:O.a.item,value:a,labelInValue:!0,showSearch:!0,onSelect:this.selectCityItem},this.getCityOption()))}}]),a}(o["Component"]),M=Object(d["c"])((function(e){var t=e.accountAndsettings,a=e.loading,n=t.province,i=t.city;return{province:n,city:i,loading:a.models.accountAndsettings}}))(_),k=a("EdlB"),C=a.n(k),I=function(e){var t=e.value,a=e.onChange,n=["",""];return t&&(n=t.split("-")),l.a.createElement(l.a.Fragment,null,l.a.createElement(g["a"],{className:C.a.area_code,value:n[0],onChange:function(e){a&&a("".concat(e.target.value,"-").concat(n[1]))}}),l.a.createElement(g["a"],{className:C.a.phone_number,onChange:function(e){a&&a("".concat(n[0],"-").concat(e.target.value))},value:n[1]}))},N=I,z=a("YHME"),S=a.n(z),B=f["a"].Option,A=function(e){var t=e.avatar;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:S.a.avatar_title},l.a.createElement(d["a"],{id:"accountandsettings.basic.avatar",defaultMessage:"Avatar"})),l.a.createElement("div",{className:S.a.avatar},l.a.createElement("img",{src:t,alt:"avatar"})),l.a.createElement(v["a"],{showUploadList:!1},l.a.createElement("div",{className:S.a.button_view},l.a.createElement(b["a"],null,l.a.createElement(h["a"],null),l.a.createElement(d["a"],{id:"accountandsettings.basic.change-avatar",defaultMessage:"Change avatar"})))))},V=function(e,t,a){var n=t.province,i=t.city;n.key||a("Please input your province!"),i.key||a("Please input your city!"),a()},U=function(e,t,a){var n=t.split("-");n[0]||a("Please input your area code!"),n[1]||a("Please input your phone number!"),a()},D=function(e){Object(c["a"])(a,e);var t=Object(r["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return e=t.call.apply(t,[this].concat(c)),e.view=void 0,e.getViewDom=function(t){e.view=t},e.handleFinish=function(){p["a"].success(Object(d["d"])({id:"accountandsettings.basic.update.success"}))},e}return Object(i["a"])(a,[{key:"getAvatarURL",value:function(){var e=this.props.currentUser;if(e){if(e.avatar)return e.avatar;var t="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";return t}return""}},{key:"render",value:function(){var e=this.props.currentUser;return l.a.createElement("div",{className:S.a.baseView,ref:this.getViewDom},l.a.createElement("div",{className:S.a.left},l.a.createElement(m["a"],{layout:"vertical",onFinish:this.handleFinish,initialValues:e,hideRequiredMark:!0},l.a.createElement(m["a"].Item,{name:"email",label:Object(d["d"])({id:"accountandsettings.basic.email"}),rules:[{required:!0,message:Object(d["d"])({id:"accountandsettings.basic.email-message"},{})}]},l.a.createElement(g["a"],null)),l.a.createElement(m["a"].Item,{name:"name",label:Object(d["d"])({id:"accountandsettings.basic.nickname"}),rules:[{required:!0,message:Object(d["d"])({id:"accountandsettings.basic.nickname-message"},{})}]},l.a.createElement(g["a"],null)),l.a.createElement(m["a"].Item,{name:"profile",label:Object(d["d"])({id:"accountandsettings.basic.profile"}),rules:[{required:!0,message:Object(d["d"])({id:"accountandsettings.basic.profile-message"},{})}]},l.a.createElement(g["a"].TextArea,{placeholder:Object(d["d"])({id:"accountandsettings.basic.profile-placeholder"}),rows:4})),l.a.createElement(m["a"].Item,{name:"country",label:Object(d["d"])({id:"accountandsettings.basic.country"}),rules:[{required:!0,message:Object(d["d"])({id:"accountandsettings.basic.country-message"},{})}]},l.a.createElement(f["a"],{style:{maxWidth:220}},l.a.createElement(B,{value:"China"},"\u4e2d\u56fd"))),l.a.createElement(m["a"].Item,{name:"geographic",label:Object(d["d"])({id:"accountandsettings.basic.geographic"}),rules:[{required:!0,message:Object(d["d"])({id:"accountandsettings.basic.geographic-message"},{})},{validator:V}]},l.a.createElement(M,null)),l.a.createElement(m["a"].Item,{name:"address",label:Object(d["d"])({id:"accountandsettings.basic.address"}),rules:[{required:!0,message:Object(d["d"])({id:"accountandsettings.basic.address-message"},{})}]},l.a.createElement(g["a"],null)),l.a.createElement(m["a"].Item,{name:"phone",label:Object(d["d"])({id:"accountandsettings.basic.phone"}),rules:[{required:!0,message:Object(d["d"])({id:"accountandsettings.basic.phone-message"},{})},{validator:U}]},l.a.createElement(N,null)),l.a.createElement(m["a"].Item,null,l.a.createElement(b["a"],{htmlType:"submit",type:"primary"},l.a.createElement(d["a"],{id:"accountandsettings.basic.update",defaultMessage:"Update Information"}))))),l.a.createElement("div",{className:S.a.right},l.a.createElement(A,{avatar:this.getAvatarURL()})))}}]),a}(o["Component"]),q=Object(d["c"])((function(e){var t=e.accountAndsettings;return{currentUser:t.currentUser}}))(D),x=(a("Mwp2"),a("VXEj")),L={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168.5 273.7a68.7 68.7 0 10137.4 0 68.7 68.7 0 10-137.4 0zm730 79.2s-23.7-184.4-426.9-70.1c17.3-30 25.6-49.5 25.6-49.5L396.4 205s-40.6 132.6-113 194.4c0 0 70.1 40.6 69.4 39.4 20.1-20.1 38.2-40.6 53.7-60.4 16.1-7 31.5-13.6 46.7-19.8-18.6 33.5-48.7 83.8-78.8 115.6l42.4 37s28.8-27.7 60.4-61.2h36v61.8H372.9v49.5h140.3v118.5c-1.7 0-3.6 0-5.4-.2-15.4-.7-39.5-3.3-49-18.2-11.5-18.1-3-51.5-2.4-71.9h-97l-3.4 1.8s-35.5 159.1 102.3 155.5c129.1 3.6 203-36 238.6-63.1l14.2 52.6 79.6-33.2-53.9-131.9-64.6 20.1 12.1 45.2c-16.6 12.4-35.6 21.7-56.2 28.4V561.3h137.1v-49.5H628.1V450h137.6v-49.5H521.3c17.6-21.4 31.5-41.1 35-53.6l-42.5-11.6c182.8-65.5 284.5-54.2 283.6 53.2v282.8s10.8 97.1-100.4 90.1l-60.2-12.9-14.2 57.1S882.5 880 903.7 680.2c21.3-200-5.2-327.3-5.2-327.3zm-707.4 18.3l-45.4 69.7 83.6 52.1s56 28.5 29.4 81.9C233.8 625.5 112 736.3 112 736.3l109 68.1c75.4-163.7 70.5-142 89.5-200.7 19.5-60.1 23.7-105.9-9.4-139.1-42.4-42.6-47-46.6-110-93.4z"}}]},name:"taobao",theme:"outlined"},F=L,K=a("6VBw"),R=function(e,t){return o["createElement"](K["a"],Object.assign({},e,{ref:t,icon:F}))};R.displayName="TaobaoOutlined";var W=o["forwardRef"](R),H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M789 610.3c-38.7-12.9-90.7-32.7-148.5-53.6 34.8-60.3 62.5-129 80.7-203.6H530.5v-68.6h233.6v-38.3H530.5V132h-95.4c-16.7 0-16.7 16.5-16.7 16.5v97.8H182.2v38.3h236.3v68.6H223.4v38.3h378.4a667.18 667.18 0 01-54.5 132.9c-122.8-40.4-253.8-73.2-336.1-53-52.6 13-86.5 36.1-106.5 60.3-91.4 111-25.9 279.6 167.2 279.6C386 811.2 496 747.6 581.2 643 708.3 704 960 808.7 960 808.7V659.4s-31.6-2.5-171-49.1zM253.9 746.6c-150.5 0-195-118.3-120.6-183.1 24.8-21.9 70.2-32.6 94.4-35 89.4-8.8 172.2 25.2 269.9 72.8-68.8 89.5-156.3 145.3-243.7 145.3z"}}]},name:"alipay",theme:"outlined"},P=H,T=function(e,t){return o["createElement"](K["a"],Object.assign({},e,{ref:t,icon:P}))};T.displayName="AlipayOutlined";var G=o["forwardRef"](T),Y=a("UBYk"),J=function(e){Object(c["a"])(a,e);var t=Object(r["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return e=t.call.apply(t,[this].concat(c)),e.getData=function(){return[{title:Object(d["d"])({id:"accountandsettings.binding.taobao"},{}),description:Object(d["d"])({id:"accountandsettings.binding.taobao-description"},{}),actions:[l.a.createElement("a",{key:"Bind"},l.a.createElement(d["a"],{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:l.a.createElement(W,{className:"taobao"})},{title:Object(d["d"])({id:"accountandsettings.binding.alipay"},{}),description:Object(d["d"])({id:"accountandsettings.binding.alipay-description"},{}),actions:[l.a.createElement("a",{key:"Bind"},l.a.createElement(d["a"],{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:l.a.createElement(G,{className:"alipay"})},{title:Object(d["d"])({id:"accountandsettings.binding.dingding"},{}),description:Object(d["d"])({id:"accountandsettings.binding.dingding-description"},{}),actions:[l.a.createElement("a",{key:"Bind"},l.a.createElement(d["a"],{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:l.a.createElement(Y["a"],{className:"dingding"})}]},e}return Object(i["a"])(a,[{key:"render",value:function(){return l.a.createElement(o["Fragment"],null,l.a.createElement(x["b"],{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return l.a.createElement(x["b"].Item,{actions:e.actions},l.a.createElement(x["b"].Item.Meta,{avatar:e.avatar,title:e.title,description:e.description}))}}))}}]),a}(o["Component"]),X=J,Q=(a("BoS7"),a("Sdc0")),Z=function(e){Object(c["a"])(a,e);var t=Object(r["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return e=t.call.apply(t,[this].concat(c)),e.getData=function(){var e=l.a.createElement(Q["a"],{checkedChildren:Object(d["d"])({id:"accountandsettings.settings.open"}),unCheckedChildren:Object(d["d"])({id:"accountandsettings.settings.close"}),defaultChecked:!0});return[{title:Object(d["d"])({id:"accountandsettings.notification.password"},{}),description:Object(d["d"])({id:"accountandsettings.notification.password-description"},{}),actions:[e]},{title:Object(d["d"])({id:"accountandsettings.notification.messages"},{}),description:Object(d["d"])({id:"accountandsettings.notification.messages-description"},{}),actions:[e]},{title:Object(d["d"])({id:"accountandsettings.notification.todo"},{}),description:Object(d["d"])({id:"accountandsettings.notification.todo-description"},{}),actions:[e]}]},e}return Object(i["a"])(a,[{key:"render",value:function(){var e=this.getData();return l.a.createElement(o["Fragment"],null,l.a.createElement(x["b"],{itemLayout:"horizontal",dataSource:e,renderItem:function(e){return l.a.createElement(x["b"].Item,{actions:e.actions},l.a.createElement(x["b"].Item.Meta,{title:e.title,description:e.description}))}}))}}]),a}(o["Component"]),$=Z,ee={strong:l.a.createElement("span",{className:"strong"},l.a.createElement(d["a"],{id:"accountandsettings.security.strong",defaultMessage:"Strong"})),medium:l.a.createElement("span",{className:"medium"},l.a.createElement(d["a"],{id:"accountandsettings.security.medium",defaultMessage:"Medium"})),weak:l.a.createElement("span",{className:"weak"},l.a.createElement(d["a"],{id:"accountandsettings.security.weak",defaultMessage:"Weak"}),"Weak")},te=function(e){Object(c["a"])(a,e);var t=Object(r["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return e=t.call.apply(t,[this].concat(c)),e.getData=function(){return[{title:Object(d["d"])({id:"accountandsettings.security.password"},{}),description:l.a.createElement(l.a.Fragment,null,Object(d["d"])({id:"accountandsettings.security.password-description"}),"\uff1a",ee.strong),actions:[l.a.createElement("a",{key:"Modify"},l.a.createElement(d["a"],{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:Object(d["d"])({id:"accountandsettings.security.phone"},{}),description:"".concat(Object(d["d"])({id:"accountandsettings.security.phone-description"},{}),"\uff1a138****8293"),actions:[l.a.createElement("a",{key:"Modify"},l.a.createElement(d["a"],{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:Object(d["d"])({id:"accountandsettings.security.question"},{}),description:Object(d["d"])({id:"accountandsettings.security.question-description"},{}),actions:[l.a.createElement("a",{key:"Set"},l.a.createElement(d["a"],{id:"accountandsettings.security.set",defaultMessage:"Set"}))]},{title:Object(d["d"])({id:"accountandsettings.security.email"},{}),description:"".concat(Object(d["d"])({id:"accountandsettings.security.email-description"},{}),"\uff1aant***sign.com"),actions:[l.a.createElement("a",{key:"Modify"},l.a.createElement(d["a"],{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:Object(d["d"])({id:"accountandsettings.security.mfa"},{}),description:Object(d["d"])({id:"accountandsettings.security.mfa-description"},{}),actions:[l.a.createElement("a",{key:"bind"},l.a.createElement(d["a"],{id:"accountandsettings.security.bind",defaultMessage:"Bind"}))]}]},e}return Object(i["a"])(a,[{key:"render",value:function(){var e=this.getData();return l.a.createElement(l.a.Fragment,null,l.a.createElement(x["b"],{itemLayout:"horizontal",dataSource:e,renderItem:function(e){return l.a.createElement(x["b"].Item,{actions:e.actions},l.a.createElement(x["b"].Item.Meta,{title:e.title,description:e.description}))}}))}}]),a}(o["Component"]),ae=te,ne=a("KWSo"),ie=a.n(ne),ce=s["a"].Item,re=function(e){Object(c["a"])(a,e);var t=Object(r["a"])(a);function a(e){var i;Object(n["a"])(this,a),i=t.call(this,e),i.main=void 0,i.getMenu=function(){var e=i.state.menuMap;return Object.keys(e).map((function(t){return l.a.createElement(ce,{key:t},e[t])}))},i.getRightTitle=function(){var e=i.state,t=e.selectKey,a=e.menuMap;return a[t]},i.selectKey=function(e){i.setState({selectKey:e})},i.resize=function(){i.main&&requestAnimationFrame((function(){if(i.main){var e="inline",t=i.main.offsetWidth;i.main.offsetWidth<641&&t>400&&(e="horizontal"),window.innerWidth<768&&t>400&&(e="horizontal"),i.setState({mode:e})}}))},i.renderChildren=function(){var e=i.state.selectKey;switch(e){case"base":return l.a.createElement(q,null);case"security":return l.a.createElement(ae,null);case"binding":return l.a.createElement(X,null);case"notification":return l.a.createElement($,null);default:break}return null};var c={base:l.a.createElement(d["a"],{id:"accountandsettings.menuMap.basic",defaultMessage:"Basic Settings"}),security:l.a.createElement(d["a"],{id:"accountandsettings.menuMap.security",defaultMessage:"Security Settings"}),binding:l.a.createElement(d["a"],{id:"accountandsettings.menuMap.binding",defaultMessage:"Account Binding"}),notification:l.a.createElement(d["a"],{id:"accountandsettings.menuMap.notification",defaultMessage:"New Message Notification"})};return i.state={mode:"inline",menuMap:c,selectKey:"base"},i}return Object(i["a"])(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"accountAndsettings/fetchCurrent"}),window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.props.currentUser;if(!t.userid)return"";var a=this.state,n=a.mode,i=a.selectKey;return l.a.createElement(u["b"],null,l.a.createElement("div",{className:ie.a.main,ref:function(t){t&&(e.main=t)}},l.a.createElement("div",{className:ie.a.leftMenu},l.a.createElement(s["a"],{mode:n,selectedKeys:[i],onClick:function(t){var a=t.key;return e.selectKey(a)}},this.getMenu())),l.a.createElement("div",{className:ie.a.right},l.a.createElement("div",{className:ie.a.title},this.getRightTitle()),this.renderChildren())))}}]),a}(o["Component"]);t["default"]=Object(d["c"])((function(e){var t=e.accountAndsettings;return{currentUser:t.currentUser}}))(re)},UBYk:function(e,t,a){"use strict";var n=a("q1tI"),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M573.7 252.5C422.5 197.4 201.3 96.7 201.3 96.7c-15.7-4.1-17.9 11.1-17.9 11.1-5 61.1 33.6 160.5 53.6 182.8 19.9 22.3 319.1 113.7 319.1 113.7S326 357.9 270.5 341.9c-55.6-16-37.9 17.8-37.9 17.8 11.4 61.7 64.9 131.8 107.2 138.4 42.2 6.6 220.1 4 220.1 4s-35.5 4.1-93.2 11.9c-42.7 5.8-97 12.5-111.1 17.8-33.1 12.5 24 62.6 24 62.6 84.7 76.8 129.7 50.5 129.7 50.5 33.3-10.7 61.4-18.5 85.2-24.2L565 743.1h84.6L603 928l205.3-271.9H700.8l22.3-38.7c.3.5.4.8.4.8S799.8 496.1 829 433.8l.6-1h-.1c5-10.8 8.6-19.7 10-25.8 17-71.3-114.5-99.4-265.8-154.5z"}}]},name:"dingding",theme:"outlined"},c=i,r=a("6VBw"),s=function(e,t){return n["createElement"](r["a"],Object.assign({},e,{ref:t,icon:c}))};s.displayName="DingdingOutlined";t["a"]=n["forwardRef"](s)},YHME:function(e,t,a){e.exports={baseView:"baseView___3sRG3",left:"left___GavW0",right:"right___3-EXe",avatar_title:"avatar_title___13ztg",avatar:"avatar___1GisI",button_view:"button_view___o9apF"}},zPRt:function(e,t,a){e.exports={row:"row___J_FI0",item:"item___2gpD9"}}}]);