(function(t){function e(e){for(var l,r,c=e[0],i=e[1],u=e[2],m=0,d=[];m<c.length;m++)r=c[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l]);b&&b(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],l=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(l=!1)}l&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var l={},a={app:0},o=[];function r(e){if(l[e])return l[e].exports;var n=l[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=l,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)r.d(n,l,function(e){return t[e]}.bind(null,l));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var b=i;o.push([1,"chunk-vendors"]),n()})({0:function(t,e){},"0093":function(t){t.exports=JSON.parse('{"title":{"text":"","show":true,"left":"left","top":"top","textStyle":{"fontWeight":"bold","fontStyle":"normal","fontSize":18}},"tooltip":{},"legend":{"data":[],"show":true,"selectedMode":true,"textStyle":{"fontWeight":"normal","fontStyle":"normal","fontSize":12}},"xAxis":{"data":[],"nameLocation":"end","nameGap":25,"nameTextStyle":{"fontWeight":"normal","fontStyle":"normal","fontSize":12}},"yAxis":{"nameLocation":"end","nameGap":15,"nameTextStyle":{"fontWeight":"normal","fontStyle":"normal","fontSize":12}},"series":[]}')},1:function(t,e,n){t.exports=n("cd49")},2:function(t,e){},"2d89":function(t,e,n){"use strict";n("ebcd")},3:function(t,e){},"74c5":function(t,e,n){"use strict";n("f6a6")},9049:function(t,e,n){},bc66:function(t,e,n){"use strict";n("e1f5")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var l=n("7a23");function a(t,e,n,a,o,r){var c=Object(l["K"])("MainPanel");return Object(l["D"])(),Object(l["i"])(c)}var o={id:"main-container"};function r(t,e,n,a,r,c){var i=Object(l["K"])("Chart"),u=Object(l["K"])("el-tab-pane"),b=Object(l["K"])("el-tabs"),m=Object(l["K"])("MenuPanel"),d=Object(l["K"])("Sheet"),s=Object(l["K"])("DataTable");return Object(l["D"])(),Object(l["i"])("div",o,[Object(l["m"])(b,{type:"border-card",stretch:"",class:"sub-container",id:"chart-container"},{default:Object(l["Z"])((function(){return[Object(l["m"])(u,{label:"Chart"},{default:Object(l["Z"])((function(){return[Object(l["m"])(i)]})),_:1})]})),_:1}),Object(l["m"])(b,{type:"border-card",stretch:"",class:"sub-container",id:"data-container"},{default:Object(l["Z"])((function(){return[Object(l["m"])(u,{label:"Style"},{default:Object(l["Z"])((function(){return[Object(l["m"])(m)]})),_:1}),Object(l["m"])(u,{label:"Data"},{default:Object(l["Z"])((function(){return[Object(l["m"])(d),Object(l["m"])(s)]})),_:1})]})),_:1})])}var c=n("5502"),i={id:"echarts"};function u(t,e,n,a,o,r){return Object(l["D"])(),Object(l["i"])("div",i)}n("94b1"),n("e057"),n("007d"),n("d28f"),n("627c");var b=n("3eba");function m(t,e,n){try{e.clearFlag&&(t.clear(),n()),t.setOption(e)}catch(l){console.error("Error happens, render the chart"),console.error(l),t.clear(),t.dispose(),t=b["init"](document.getElementById("echarts")),t.setOption(e)}}var d=Object(l["n"])({name:"chart",setup:function(){var t=Object(c["b"])(),e=function(){t.dispatch("turnOffClear")},n={};Object(l["A"])((function(){n=b["init"](document.getElementById("echarts")),n.setOption(t.getters.option),Object(l["Y"])((function(){m(n,t.getters.option,e)}))}))}});n("def7");d.render=u;var s=d,f=(n("b0c0"),{id:"menu-container"}),p=Object(l["m"])("h2",null,"Title:",-1),O=Object(l["m"])("label",null,"Text:",-1),j=Object(l["m"])("label",null,"Show:",-1),h=Object(l["m"])("label",null,"Horizontal Location:",-1),v=Object(l["m"])("option",null,"left",-1),y=Object(l["m"])("option",null,"center",-1),g=Object(l["m"])("option",null,"right",-1),x=Object(l["m"])("label",null,"Vertival Location:",-1),S=Object(l["m"])("option",null,"top",-1),D=Object(l["m"])("option",null,"middle",-1),w=Object(l["m"])("option",null,"bottom",-1),A=Object(l["m"])("h2",null,"Legend:",-1),V=Object(l["m"])("label",null,"Show:",-1),U=Object(l["m"])("h2",null,"X Axis:",-1),C=Object(l["m"])("label",null,"Text:",-1),F=Object(l["m"])("label",null,"Location:",-1),_=Object(l["m"])("option",null,"start",-1),I=Object(l["m"])("option",null,"center",-1),k=Object(l["m"])("option",null,"end",-1),L=Object(l["m"])("label",null,"gap:",-1),P=Object(l["m"])("h2",null,"Y Axis:",-1),T=Object(l["m"])("label",null,"Text:",-1),z=Object(l["m"])("label",null,"Location:",-1),K=Object(l["m"])("option",null,"start",-1),M=Object(l["m"])("option",null,"center",-1),W=Object(l["m"])("option",null,"end",-1),E=Object(l["m"])("label",null,"gap:",-1),N=Object(l["m"])("h2",null,"Series:",-1),B=Object(l["m"])("label",null,"Name:",-1),Z=Object(l["m"])("hr",null,null,-1);function J(t,e,n,a,o,r){var c=Object(l["K"])("FontStyle");return Object(l["D"])(),Object(l["i"])("div",f,[Object(l["m"])("form",null,[Object(l["m"])("div",null,[p,Object(l["m"])("div",null,[O,Object(l["ab"])(Object(l["m"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.model.title.text=e})},null,512),[[l["V"],t.model.title.text]])]),Object(l["m"])("div",null,[j,Object(l["ab"])(Object(l["m"])("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.model.title.show=e})},null,512),[[l["S"],t.model.title.show]])]),Object(l["m"])("div",null,[h,Object(l["ab"])(Object(l["m"])("select",{"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.model.title.left=e})},[v,y,g],512),[[l["U"],t.model.title.left]])]),Object(l["m"])("div",null,[x,Object(l["ab"])(Object(l["m"])("select",{"onUpdate:modelValue":e[4]||(e[4]=function(e){return t.model.title.top=e})},[S,D,w],512),[[l["U"],t.model.title.top]])]),Object(l["m"])(c,{"text-style":t.model.title.textStyle},null,8,["text-style"])]),Object(l["m"])("div",null,[A,Object(l["m"])("div",null,[V,Object(l["ab"])(Object(l["m"])("input",{type:"checkbox","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.model.legend.show=e})},null,512),[[l["S"],t.model.legend.show]])]),Object(l["m"])("div",null,[Object(l["m"])(c,{"text-style":t.model.legend.textStyle},null,8,["text-style"])])]),Object(l["m"])("div",null,[U,Object(l["m"])("div",null,[C,Object(l["ab"])(Object(l["m"])("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=function(e){return t.model.xAxis.name=e})},null,512),[[l["V"],t.model.xAxis.name]])]),Object(l["m"])("div",null,[F,Object(l["ab"])(Object(l["m"])("select",{"onUpdate:modelValue":e[7]||(e[7]=function(e){return t.model.xAxis.nameLocation=e})},[_,I,k],512),[[l["U"],t.model.xAxis.nameLocation]])]),Object(l["m"])("div",null,[L,Object(l["ab"])(Object(l["m"])("input",{type:"number","onUpdate:modelValue":e[8]||(e[8]=function(e){return t.model.xAxis.nameGap=e}),min:"0",max:"50"},null,512),[[l["V"],t.model.xAxis.nameGap]])]),Object(l["m"])(c,{"text-style":t.model.xAxis.nameTextStyle},null,8,["text-style"])]),Object(l["m"])("div",null,[P,Object(l["m"])("div",null,[T,Object(l["ab"])(Object(l["m"])("input",{type:"text","onUpdate:modelValue":e[9]||(e[9]=function(e){return t.model.yAxis.name=e})},null,512),[[l["V"],t.model.yAxis.name]])]),Object(l["m"])("div",null,[z,Object(l["ab"])(Object(l["m"])("select",{"onUpdate:modelValue":e[10]||(e[10]=function(e){return t.model.yAxis.nameLocation=e})},[K,M,W],512),[[l["U"],t.model.yAxis.nameLocation]])]),Object(l["m"])("div",null,[E,Object(l["ab"])(Object(l["m"])("input",{type:"number","onUpdate:modelValue":e[11]||(e[11]=function(e){return t.model.yAxis.nameGap=e}),min:"0",max:"50"},null,512),[[l["V"],t.model.yAxis.nameGap]])]),Object(l["m"])(c,{"text-style":t.model.yAxis.nameTextStyle},null,8,["text-style"])]),Object(l["m"])("div",null,[N,(Object(l["D"])(!0),Object(l["i"])(l["b"],null,Object(l["I"])(t.model.series,(function(e,n){return Object(l["D"])(),Object(l["i"])("div",{key:n},[B,Object(l["ab"])(Object(l["m"])("input",{"onUpdate:modelValue":function(t){return e.name=t},onInput:function(l){return t.model.legend.data[n]=e.name},type:"text"},null,40,["onUpdate:modelValue","onInput"]),[[l["V"],e.name]]),Object(l["ab"])(Object(l["m"])("input",{"onUpdate:modelValue":function(t){return e.itemStyle.color=t},type:"color"},null,8,["onUpdate:modelValue"]),[[l["V"],e.itemStyle.color]]),Z])})),128))])])])}var G=Object(l["m"])("label",null,[Object(l["m"])("b",null,"Font: ")],-1),Y=Object(l["l"])("B"),H=Object(l["l"])("I");function q(t,e){var n=Object(l["K"])("el-input-number"),a=Object(l["K"])("el-button");return Object(l["D"])(),Object(l["i"])("div",null,[Object(l["m"])("div",null,[G,Object(l["m"])(n,{style:{"margin-right":"10px"},modelValue:t.style.fontSize,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.style.fontSize=e}),min:1,max:100,size:"small"},null,8,["modelValue"]),Object(l["m"])(a,{title:"Bold",style:{width:"35px",padding:"8px"},type:"normal"==t.style.fontWeight?"default":"info",onClick:e[2]||(e[2]=function(e){return t.toggleFontWeight(t.style)})},{default:Object(l["Z"])((function(){return[Y]})),_:1},8,["type"]),Object(l["m"])(a,{title:"Italic",style:{width:"35px",padding:"8px"},type:"normal"==t.style.fontStyle?"default":"info",onClick:e[3]||(e[3]=function(e){return t.toggleFontStyle(t.style)})},{default:Object(l["Z"])((function(){return[H]})),_:1},8,["type"])])])}var R=Object(l["n"])({name:"font-style",props:{textStyle:{type:Object,required:!0}},watch:{textStyle:function(t){this.style=t}},setup:function(t){var e=function(t){"normal"!==t.fontWeight?"bold"!==t.fontWeight||(t.fontWeight="normal"):t.fontWeight="bold"},n=function(t){"normal"!==t.fontStyle?"italic"!==t.fontStyle||(t.fontStyle="normal"):t.fontStyle="italic"},l=function(t){var e=t.target;"SPAN"===e.nodeName?e.parentElement.blur():e.blur()};return{style:t.textStyle,toggleFontWeight:e,toggleFontStyle:n,blurHtml:l}}});R.render=q;var X=R,$=Object(l["n"])({name:"menu-panel",components:{FontStyle:X},setup:function(){var t=Object(c["b"])(),e=t.getters.option;return{model:e}}});$.render=J;var Q=$,tt={id:"table"};function et(t,e){return Object(l["D"])(),Object(l["i"])("div",tt)}var nt=n("e325"),lt=(n("2bd6"),function(t){var e="";if(t<0)return e;t++;while(t>0){var n=(t-1)%26;e=String.fromCharCode(65+n)+e,t=Math.floor((t-1)/26)}return e}),at=function(t){for(var e=0,n=0;n<t.length;n++)e=26*e+t.charCodeAt(n)-64;return e-1},ot=function(t){var e=0;for(var n in t)Array.isArray(t[n])&&(e=Math.max(t[n].length,e));return e},rt=function(t){for(var e=[],n=0;n<t.length;n++){for(var l=[],a=0;a<t[n].length;a++)l.push(t[n][a]);e.push(l)}return e};function ct(t){for(var e=rt(t),n=ot(e),l=[{title:"",field:"",width:40,resizable:!1,frozen:!0,formatter:function(t){return t.getElement().style.backgroundColor="#e6e6e6",t.getValue()}}],a=0;a<n;a++)l.push({title:lt(a),field:lt(a),editor:"input"});for(var o=[],r=0;r<e.length;r++){var c={"":r};o.push(c);for(var i=0;i<e[r].length;i++)c[lt(i)]=e[r][i]}return{columns:l,tableData:o}}function it(t,e){var n=ct(t);return new nt["a"](document.getElementById("table"),{data:n.tableData,layout:"fitColumns",columns:n.columns,headerVisible:!1,cellEdited:function(t){var n=t.getData()[""],l=at(t.getColumn().getField()),a=t.getValue();e(n,l,a)}})}function ut(t,e){t.setColumns(e.columns),t.replaceData(e.tableData)}var bt=Object(l["n"])({name:"data-table",setup:function(){var t=Object(c["b"])(),e=function(e,n,l){t.dispatch("updateChartData",{row:e,col:n,value:l})};Object(l["A"])((function(){var n=it(t.getters.chartData,e);Object(l["Y"])((function(){ut(n,ct(t.getters.chartData))}))}))}});bt.render=et;var mt=bt,dt={style:{display:"none"},type:"file",id:"file",ref:"file"},st=Object(l["l"])(" Upload File "),ft={key:0},pt={key:1},Ot=Object(l["m"])("hr",null,null,-1);function jt(t,e,n,a,o,r){var c=Object(l["K"])("el-button");return Object(l["D"])(),Object(l["i"])("div",null,[Object(l["m"])("input",dt,null,512),Object(l["m"])("div",null,[Object(l["m"])(c,{size:"small",type:"primary",onClick:e[1]||(e[1]=function(e){return t.$refs.file.click()})},{default:Object(l["Z"])((function(){return[st]})),_:1}),Object(l["m"])("div",null,[t.fileUpload.file?(Object(l["D"])(),Object(l["i"])("span",ft," File: "+Object(l["O"])(t.fileUpload.file.name),1)):(Object(l["D"])(),Object(l["i"])("span",pt,"No file chosen (Support xls/xlsx/csv format)"))])]),Ot])}n("4160"),n("159b");var ht=n("1146"),vt=n.n(ht),yt=function(t){var e={};return t.SheetNames.forEach((function(n){var l=vt.a.utils.sheet_to_json(t.Sheets[n],{header:1});l.length&&(e[n]=l)})),e},gt=Object(l["n"])({name:"sheet",components:{},setup:function(){var t=Object(c["b"])(),e=Object(l["F"])({file:null}),n=function(n){var l=n.target.files[0];if(e.file=l,l){var a=new FileReader;a.onload=function(e){var n=e.target.result,l=vt.a.read(n,{type:"binary"}),a=yt(l),o=[];for(var r in a)o.push(r);t.dispatch("setSheets",o),t.dispatch("setFileData",a)},a.readAsBinaryString(l)}};return Object(l["A"])((function(){var t=document.getElementById("file");t.addEventListener("change",n,!1)})),{fileUpload:e}}});n("bc66");gt.render=jt;var xt=gt,St=n("e7f1"),Dt=Object(l["n"])({name:"main-panel",components:{Chart:s,MenuPanel:Q,DataTable:mt,Sheet:xt},setup:function(){var t=Object(c["b"])();t.dispatch("setChartData",St)}});n("2d89");Dt.render=r;var wt=Dt,At=Object(l["n"])({name:"app",components:{MainPanel:wt}});n("74c5");At.render=a;var Vt=At,Ut=n("0093"),Ct=n("e1a9"),Ft=function(t){return t>=Ct.length&&(t%=Ct.length),Ct[t]},_t=function(t){for(var e=JSON.parse(JSON.stringify(Ut)),n=1;n<t[0].length;n++)e.xAxis.data.push(t[0][n]);for(var l=e.legend.data,a=1;a<t.length;a++){l.push(t[a][0]);var o={type:"bar",data:[],itemStyle:{}};e.series.push(o),o.name=t[a][0],o.itemStyle.color=Ft(a-1);for(var r=1;r<t[a].length;r++)o.data.push(t[a][r])}return e},It=function(t,e){var n=e.row,l=e.col,a=e.value;0===n&&0===l||(0===n?t.xAxis.data[l-1]=a:0===l?(t.legend.data[n-1]=a,t.series[n-1].name=a):t.series[n-1].data[l-1]=a)},kt=[],Lt={},Pt=Object(c["a"])({state:{chartData:kt,option:Lt,fileData:{},sheets:[]},mutations:{setOption:function(t,e){Object.assign(t.option,e)},setChartData:function(t,e){t.chartData=e},updateChartData:function(t,e){var n=e.row,l=e.col,a=e.value;t.chartData[n][l]=a},setFileData:function(t,e){t.fileData=e},setSheets:function(t,e){t.sheets=e}},getters:{option:function(t){return t.option},chartData:function(t){return t.chartData},fileData:function(t){return t.fileData},sheets:function(t){return t.sheets}},actions:{setOption:function(t,e){var n=t.commit;n("setOption",e)},setChartData:function(t,e){var n=t.commit;n("setChartData",e);var l=_t(e);l.clearFlag=!0,n("setOption",l)},updateChartData:function(t,e){t.commit;var n=t.state,l=e.row,a=e.col,o=e.value;n.chartData[l][a]=o,It(n.option,{row:l,col:a,value:o})},setFileData:function(t,e){var n=t.commit,l=t.dispatch,a=t.state;n("setFileData",e),l("setChartData",e[a.sheets[0]])},setSheets:function(t,e){var n=t.commit;n("setSheets",e)},turnOffClear:function(t){t.commit;var e=t.state;e.option.clearFlag=!1}}}),Tt=n("3fd4"),zt=(n("7dd6"),Object(l["h"])(Vt));zt.use(Pt),zt.use(Tt["a"]),zt.mount("#app")},def7:function(t,e,n){"use strict";n("9049")},e1a9:function(t){t.exports=JSON.parse('["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"]')},e1f5:function(t,e,n){},e7f1:function(t){t.exports=JSON.parse('[["","Item 1","Item 2","Item 3","Item 4","Item 5"],["Series A",10,15,20,25,50],["Series B",30,25,20,15,10]]')},ebcd:function(t,e,n){},f6a6:function(t,e,n){}});
//# sourceMappingURL=app.0ed2108b.js.map