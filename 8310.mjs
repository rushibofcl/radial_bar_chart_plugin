(self.webpackChunkradial_bar_chart_plugin=self.webpackChunkradial_bar_chart_plugin||[]).push([[8310],{15600:e=>{var t=Math.max,l=Math.min;e.exports=function(e,n,a){return e>=l(n,a)&&e<t(n,a)}},18674:e=>{e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},40098:e=>{var t=Math.ceil,l=Math.max;e.exports=function(e,n,a,i){for(var s=-1,o=l(t((n-e)/(a||1)),0),r=Array(o);o--;)r[i?o:++s]=e,e+=a;return r}},47445:(e,t,l)=>{var n=l(40098),a=l(16612),i=l(18601);e.exports=function(e){return function(t,l,s){return s&&"number"!=typeof s&&a(t,l,s)&&(l=s=void 0),t=i(t),void 0===l?(l=t,t=0):l=i(l),s=void 0===s?t<l?1:-1:i(s),n(t,l,s,e)}}},89464:(e,t,l)=>{var n=l(18674)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});e.exports=n},83729:(e,t,l)=>{var n=l(18674)({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});e.exports=n},7187:(e,t,l)=>{var n=l(89464),a=l(79833),i=/[&<>"']/g,s=RegExp(i.source);e.exports=function(e){return(e=a(e))&&s.test(e)?e.replace(i,n):e}},91175:e=>{e.exports=function(e){return e&&e.length?e[0]:void 0}},94174:(e,t,l)=>{var n=l(15600),a=l(18601),i=l(14841);e.exports=function(e,t,l){return t=a(t),void 0===l?(l=t,t=0):l=a(l),e=i(e),n(e,t,l)}},53131:(e,t,l)=>{var n=l(5976),a=l(97727),i=l(20893),s=l(46460),o=n((function(e,t){var l=s(t,i(o));return a(e,32,void 0,t,l)}));o.placeholder={},e.exports=o},96026:(e,t,l)=>{var n=l(47445)();e.exports=n},23493:(e,t,l)=>{var n=l(23279),a=l(13218);e.exports=function(e,t,l){var i=!0,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return a(l)&&(i="leading"in l?!!l.leading:i,s="trailing"in l?!!l.trailing:s),n(e,t,{leading:i,maxWait:t,trailing:s})}},27955:(e,t,l)=>{var n=l(79833),a=l(83729),i=/&(?:amp|lt|gt|quot|#39);/g,s=RegExp(i.source);e.exports=function(e){return(e=n(e))&&s.test(e)?e.replace(i,a):e}},80961:(e,t,l)=>{l.d(t,{l:()=>a});var n=l(35967);class a extends n.eH{createColorAssignment(e,t,l,a,i){const s=a||l;return{fullColorAssignment:(0,n.O1)(s,e,t,i)}}}},35967:(e,t,l)=>{l.d(t,{HY:()=>o,O1:()=>r,eH:()=>s});var n=l(88216),a=l(16576),i=l(45578);class s{palette;fullColorAssignment;outputColorAssignment;theme;constructor(e,t,l,n,a,i){this.theme=i;const{fullColorAssignment:s,outputColorAssignment:o}=this.createColorAssignment(e,t,l,n,a);this.fullColorAssignment=s,this.outputColorAssignment=o||s,this.palette=this.createPalette(e,this.fullColorAssignment,l,n)}getColorByIndex(e){return this.palette[e]}getColorAssignment(){return this.outputColorAssignment}getFullColorAssignment(){return this.fullColorAssignment}createPalette(e,t,l,i){return t.map(((t,l)=>{const i=(0,n.isColorFromPalette)(t.color)?(0,a.ju)(e,t.color.value,l):t.color.value;return(0,a.yx)(i)}))}}function o(e,t){return!!e&&("guid"!==e.type||function(e,t){return t.some((t=>"guid"===e.type&&e.value===t.guid))}(e,t))}function r(e,t,l,n){let s=0;return i(e.items,"attributeHeaderItem.uri").map((e=>{const i=(0,a.gG)(e,l,n),r=i&&o(i,t)?i:{type:"guid",value:t[s%t.length].guid};return s++,{headerItem:e,color:r}}))}},16576:(e,t,l)=>{l.d(t,{CW:()=>w,D4:()=>d,EK:()=>p,NK:()=>m,Yt:()=>g,c0:()=>c,gG:()=>u,i5:()=>f,ju:()=>b,m:()=>y,ob:()=>r,yx:()=>h,z:()=>x});var n=l(88216),a=l(4400),i=l(18446),s=l(41609);function o(e,t){const l=t<0?0:255,n=Math.abs(t);return Math.round((l-e)*n)+e}function r(e){const t=e.split(",");return{R:parseInt(t[0].slice(4),10),G:parseInt(t[1],10),B:parseInt(t[2],10)}}function d(e,t){const{R:l,G:n,B:a}=r(e);return`rgb(${o(l,t)},${o(n,t)},${o(a,t)})`}function c(e,t){const{r:l,g:n,b:a}=e;return{r:o(l,t),g:o(n,t),b:o(a,t)}}function p(e){return"string"!=typeof e?e:"rgb"===e.slice(0,3)?e.replace(/\s/g,""):function(e){if(4===e.length){const[t,l,n]=e.split("").slice(1);return"#"+t+t+l+l+n+n}return e}(e).replace(/#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i,((e,t,l,n)=>`rgb(${[t,l,n].map((e=>parseInt(e,16).toString(10))).join(",")})`))}function y(e){try{return e.map(((e,t)=>{const{R:l,G:n,B:a}=r(p(e));if(isNaN(l)||isNaN(n)||isNaN(a))throw Error;return{guid:String(t),fill:{r:l,g:n,b:a}}}))}catch(e){return a.DefaultColorPalette}}function g(e){return!i(e,a.DefaultColorPalette)}function u(e,t,l){if(!t)return;const n=t.find((t=>t.predicate(e,{dv:l})));return n?.color}function b(e,t,l){const n=e.find((e=>e.guid===t));return n?n.fill:e[l%e.length].fill}function h(e){return`rgb(${e.r},${e.g},${e.b})`}function x(e){const t=p(e),l=/rgb\((.*)\)/.exec(t);if(null===l)return null;const n=l[1],[a,i,s]=n.split(",").map((e=>parseInt(e)));return{r:a,g:i,b:s}}function m(e){return t=>{if((0,n.isResultAttributeHeader)(t))return!(!e&&null!==e&&""!==e)&&e===t.attributeHeaderItem.uri;if((0,n.isAttributeDescriptor)(t))return!!e&&(e===t.attributeHeader.uri||e===t.attributeHeader.identifier);if((0,n.isColorDescriptor)(t))return!!e&&e===t.colorHeaderItem.id;const l=(0,a.getMappingHeaderLocalIdentifier)(t);return!!l&&l===e}}function w(e,t){return t&&!s(t)?t:e&&!s(e)?y(e):a.DefaultColorPalette}const f={getColorByGuid:b,getColorMappingPredicate:m}},33805:(e,t,l)=>{l.d(t,{n6:()=>p});var n=l(59882),a=l(94184),i=l(39430),s=l(21034);function o(e){const{labels:t}=e;return n.createElement("div",{className:"labels","aria-label":"Color labels"},t.map((e=>{const{key:t,label:l,style:a}=e;return n.createElement("span",{key:t,style:a},l)})))}function r(e){const{boxes:t}=e;return n.createElement("div",{className:"boxes","aria-label":"Color boxes"},t.map((e=>{const t=a("box",e.class),{key:l,style:i}=e;return n.createElement("span",{className:t,key:l,style:i})})))}function d({renderLabelsFirst:e,boxes:t,labels:l}){return n.createElement(n.Fragment,null,e?n.createElement(o,{labels:l}):null,n.createElement(r,{boxes:t}),!e&&n.createElement(o,{labels:l}))}function c(e){const{title:t,position:l,children:i}=e,o=l===s.GS||l===s.D,r=a("heatmap-legend-with-title",{horizontal:o});return n.createElement("div",{className:r},n.createElement("div",{className:"heatmap-legend-title"},`${t}:`),n.createElement("div",{className:"heatmap-legend-boxes"},i))}const p=(0,l(25972).Zz)((e=>{const{title:t,data:l,format:o,numericSymbols:r,size:p="large",position:y,theme:g}=e;if(!l.length)return null;const u=(0,i.sD)(l,o,r,p,y,g),b=a(...u.classes),h=u.position===s.GS,{boxes:x,labels:m}=u;return n.createElement("div",{className:b,"aria-label":"Color legend"},t?n.createElement(c,{title:t,position:y},n.createElement(d,{renderLabelsFirst:h,boxes:x,labels:m})):n.createElement(d,{renderLabelsFirst:h,boxes:x,labels:m}))}))},75131:(e,t,l)=>{l.d(t,{a:()=>r});var n=l(59882),a=l(94184),i=l(50308),s=l(29111),o=l(39430);class r extends n.PureComponent{state={showAll:!1};toggleShowAll=()=>{this.setState({showAll:!this.state.showAll})};renderSeries=(e,t)=>{const{series:l,onItemClick:a=i,enableBorderRadius:o}=this.props,r=this.state.showAll?l.length:t,d=l.slice(0,r);return n.createElement("div",{className:"series"},n.createElement(s.I,{enableBorderRadius:o,series:d,onItemClick:a,width:e}))};renderPaging=()=>{const e=a("gd-button-link","gd-button-icon-only","paging-button",{"gd-icon-chevron-up":this.state.showAll,"gd-icon-chevron-down":!this.state.showAll});return n.createElement("div",{className:"paging"},n.createElement("button",{className:e,onClick:this.toggleShowAll}))};render(){const{series:e,containerWidth:t}=this.props,{itemWidth:l,hasPaging:a,visibleItemsCount:i}=(0,o.gz)(e.length,t);return n.createElement("div",{className:"viz-legend fluid"},this.renderSeries(l,i),a?this.renderPaging():null)}}},55415:(e,t,l)=>{l.d(t,{a:()=>a});var n=l(59882);const a=e=>{const{label:t}=e;return t?n.createElement("div",{className:"series-item"},n.createElement("div",{className:"series-name"},`${t}:`)):null}},29111:(e,t,l)=>{l.d(t,{I:()=>u});var n=l(59882),a=l(27955),i=l(25972);class s extends n.Component{render(){const{item:e,width:t,enableBorderRadius:l=!1,theme:i}=this.props,s=i?.palette?.complementary?.c5??"#CCCCCC",o={borderRadius:l?"50%":"0",backgroundColor:e.isVisible?e.color:s},r=e.isVisible?{}:{color:s},d=t?{width:`${t}px`}:{};return n.createElement("div",{style:d,className:"series-item",onClick:()=>this.props.onItemClick(e),"aria-label":"Legend item"},n.createElement("div",{className:"series-icon",style:o}),n.createElement("div",{className:"series-name",style:r,title:a(e.name)},e.name))}}const o=(0,i.Zz)(s);var r=l(74806);const d=(0,l(50049).vU)({top:{id:"visualizations.legend.text.top"},bottom:{id:"visualizations.legend.text.bottom"},left:{id:"visualizations.legend.text.left"},right:{id:"visualizations.legend.text.right"},colon:{id:"visualizations.legend.text.colon"},column:{id:"visualizations.legend.text.column"},line:{id:"visualizations.legend.text.line"},area:{id:"visualizations.legend.text.area"},combo:{id:"visualizations.legend.text.combo"}});class c extends n.PureComponent{render(){const{labelKey:e,width:t,data:l,intl:a}=this.props,i=t?{width:`${t}px`}:{},s=(l||[]).reduce(((e,t,l)=>(e[l]=a.formatMessage(d[t]),e)),{});return n.createElement("div",{style:i,className:"series-axis-indicator","aria-label":"Legend axis indicator"},n.createElement("div",{className:"series-text"},a.formatMessage(d[e],s),a.formatMessage(d.colon)))}}const p=(0,r.ZP)(c);var y=l(39430);const g=()=>n.createElement("div",{className:"legend-separator","aria-label":"Legend separator"});class u extends n.PureComponent{render(){const{series:e,enableBorderRadius:t,onItemClick:l,width:a}=this.props;return e.map(((e,i)=>{const{type:s,labelKey:r,data:d}=e,c=function(e,t=!1){return"function"==typeof t?t(e):t}(e,t);return s===y.Yr?n.createElement(p,{key:i,labelKey:r,data:d,width:a}):s===y.kU?n.createElement(g,{key:i}):n.createElement(o,{enableBorderRadius:c,key:i,item:e,width:a,onItemClick:l})}))}}},85932:(e,t,l)=>{l.d(t,{P:()=>o});var n=l(59882),a=l(44012),i=l(94184);function s(e,t,l,a){const s=i("gd-button-link","gd-button-icon-only",`gd-icon-chevron-${function(e,t){return"prev"===e?"upDown"===t?"up":"left":"next"===e?"upDown"===t?"down":"right":void 0}(e,t)}`,"paging-button");return n.createElement("button",{className:s,onClick:()=>{l()},disabled:a})}const o=e=>{const{page:t,pagesCount:l,buttonsOrientation:i="upDown",showNextPage:o,showPrevPage:r}=e;return n.createElement("div",{className:"paging","aria-label":"Paging"},s("prev",i,r,1===t),n.createElement(a.Z,{id:"visualizations.of",tagName:"span",values:{page:n.createElement("strong",null,t),pagesCount:l}}),s("next",i,o,t===l))}},19679:(e,t,l)=>{l.d(t,{a:()=>x});var n=l(59882),a=l(86896),i=l(72666),s=l(6829);const o=[{align:"tr tl",offset:{x:18,y:0}},{align:"tl tr",offset:{x:-18,y:0}},{align:"br bl",offset:{x:18,y:0}},{align:"bl br",offset:{x:-18,y:0}},{align:"bc tc",offset:{x:0,y:18}},{align:"cc cr",offset:{x:-200,y:0}}],r=[{align:"bc tc",offset:{x:0,y:-40}},{align:"tc bc",offset:{x:0,y:-18}},{align:"cc tc",offset:{x:0,y:0}}],d=({children:e})=>e((0,s.useMediaQuery)("<sm")),c=e=>{const{title:t,onCloseDialog:l,children:a}=e;return n.createElement("div",{className:"legend-popup-dialog legend-popup-dialog-content"},n.createElement("div",{className:"legend-header"},n.createElement("div",{className:"legend-header-title"},t),n.createElement("div",{className:"s-legend-close legend-close gd-icon-cross gd-button-link gd-button-icon-only",onClick:e=>{e.preventDefault(),l()}})),n.createElement("div",{className:"legend-content"},a))},p=e=>{const{name:t,children:l,isOpen:a,alignTo:i,onCloseDialog:p}=e;return a?n.createElement(d,null,(e=>n.createElement(s.Overlay,{alignTo:i,alignPoints:e?r:o,closeOnOutsideClick:!e,onClose:p,className:"kpi-alert-dialog-overlay"},n.createElement(c,{title:t,onCloseDialog:p},l)))):null};var y=l(94184),g=l(55415),u=l(29111);const b=e=>{const{isVisible:t,isActive:l,onIconClick:a}=e;if(!t)return null;const i=y("legend-popup-icon s-legend-popup-icon",{"legend-popup-icon-active":l});return n.createElement("div",{className:"legend-popup-button"},n.createElement("div",{onClick:e=>{e.stopPropagation(),e.preventDefault(),a()},className:i},n.createElement(s.Icon.LegendMenu,null)))},h=e=>{const{series:t,maxRowsCount:l=1,legendLabel:a,enableBorderRadius:i,onDialogIconClick:s,onLegendItemClick:o,isActive:r=!1}=e,[d,c,p]=(()=>{const[e,t]=(0,n.useState)(!1),[l,a]=(0,n.useState)(1);return[e,l,e=>{if(!e)return;const{clientHeight:l,scrollHeight:n}=e;t(n>l);const i=(e=>Math.ceil((e-10)/20))(l);a(i)}]})(),y=20*l+10,h=1===c?"flex-end":"flex-start";return n.createElement("div",{className:"legend-popup-row",style:{maxHeight:y}},n.createElement("div",{className:"viz-legend static position-row"},n.createElement("div",{className:"series",style:{justifyContent:h},ref:e=>{p(e)}},n.createElement(g.a,{label:a}),n.createElement(u.I,{enableBorderRadius:i,series:t,onItemClick:o}))),n.createElement(b,{isActive:r,isVisible:d,onIconClick:s}))},x=e=>{const{name:t,maxRows:l,enableBorderRadius:s,series:o,onLegendItemClick:r,containerId:d,customComponent:c,customComponentName:y}=e,g=(0,a.Z)(),[u,b]=(0,n.useState)(!1),[x,m]=(0,n.useState)(1),w=1===x&&y||t||g.formatMessage({id:"properties.legend.title"});return n.createElement("div",{"aria-label":"Pop up legend"},n.createElement(h,{legendLabel:t,maxRowsCount:l,series:[...o],onDialogIconClick:()=>{b((e=>!e))},onLegendItemClick:r,enableBorderRadius:s,isActive:u}),n.createElement(p,{name:w,alignTo:`.${d}`,isOpen:u,onCloseDialog:()=>{b(!1),m(1)}},n.createElement(i.M,{containerHeight:260,series:[...o],position:"dialog",buttonOrientation:"leftRight",onItemClick:r,shouldFillAvailableSpace:!1,enableBorderRadius:s,paginationHeight:34,customComponent:c,onPageChanged:m})))}},90297:(e,t,l)=>{l.d(t,{$:()=>o});var n=l(21034);const a=610,i=194,s=274;function o(e,t,l){return"autoPositionWithPopup"!==t?function(e,t,l,a){let i=e;return a&&(i=Boolean(t&&l)?e===n.GS?n.GS:n.D:e||n.pX),{position:i,renderPopUp:!1}}(e,t,l.showFluidLegend,l.isHeatmap):function(e,t,l){const o=t?.client?.width,r=t?.client?.height;if(!o||!r)return null;const d=l?{name:l}:{};if(o<a){const e=r<s?1:2;return{...d,position:n.GS,renderPopUp:!0,maxRows:e}}{const t="top"===e||"bottom"===e;if(r<i)return{...d,position:n.pX,renderPopUp:!1};{const l=r<s?1:2;return{...d,position:e,renderPopUp:t,maxRows:t?l:void 0}}}}(e,l.contentRect,l.legendLabel)}},21034:(e,t,l)=>{l.d(t,{D:()=>s,GS:()=>i,RL:()=>n,pX:()=>a});const n="left",a="right",i="top",s="bottom"},72666:(e,t,l)=>{l.d(t,{M:()=>y});var n=l(59882),a=l(94184),i=l(50308),s=l(14293),o=l(29111),r=l(85932),d=l(21034),c=l(39430),p=l(55415);class y extends n.PureComponent{static defaultProps={buttonOrientation:"upDown",paginationHeight:c.Q$,onPageChanged:i};state={page:1};showNextPage=()=>{const e=this.state.page+1;this.props.onPageChanged(e),this.setState({page:e})};showPrevPage=()=>{const e=this.state.page-1;this.props.onPageChanged(e),this.setState({page:e})};renderPaging=e=>{const{page:t}=this.state,{buttonOrientation:l}=this.props;return n.createElement(r.P,{page:t,pagesCount:e,showNextPage:this.showNextPage,showPrevPage:this.showPrevPage,buttonsOrientation:l})};render(){const{enableBorderRadius:e,containerHeight:t,onItemClick:l=i,position:s,series:r,shouldFillAvailableSpace:y=!0,label:b,paginationHeight:h,customComponent:x}=this.props,{page:m}=this.state,w=a("viz-legend","static",`position-${s}`);if(s===d.GS||s===d.D)return n.createElement("div",{className:w},n.createElement("div",{className:"series"},n.createElement(o.I,{enableBorderRadius:e,series:r,onItemClick:l})));const f="dialog"===s?2:1,I=b?c.Lu:0,v=b?n.createElement(p.a,{label:b}):null,A=t-I,C=r.length,{hasPaging:E,visibleItemsCount:P}=(0,c.pP)(C,A,f,h),N=E||x,k=P/f*c.Lu,$=Math.min(P/f,C)*c.Lu,R=(y?k:$)+I,M=1===m&&this.hasCustomComponent(),D=this.getPagesCount(r.length,P);if(M)return n.createElement("div",{className:w},n.createElement("div",{className:"series",style:{height:R}},v,x),N?this.renderPaging(D):null);const[S,z]=g(m,P,r.length,this.hasCustomComponent()),H=r.slice(S,z),L=u(P,f,H.length),B=a(w,{"no-width":L});return n.createElement("div",{className:B},n.createElement("div",{className:"series",style:{height:R}},v,n.createElement(o.I,{enableBorderRadius:e,series:H,onItemClick:l})),N?this.renderPaging(D):null)}getPagesCount(e,t){const l=Math.ceil(e/t);return this.hasCustomComponent()?l+1:l}hasCustomComponent(){return!s(this.props.customComponent)}}const g=(e,t,l,n)=>[n?(e-2)*t:(e-1)*t,n?Math.min(t*(e-1),l):Math.min(t*e,l)],u=(e,t,l)=>e/t>=l},39430:(e,t,l)=>{l.d(t,{Lu:()=>b,N5:()=>W,Q$:()=>m,Yr:()=>F,gz:()=>z,kU:()=>T,nf:()=>_,pP:()=>L,sD:()=>G});var n=l(96026),a=l(91175),i=l(10928),s=l(94174),o=l(18446),r=l(21034),d=l(18608),c=l(16576);const p=200,y=2,g=30,u=12,b=20,h="...",x=" ",m=44,w="left",f="right",I="center",v=10,A={height:30,textAlign:w,lineHeight:"30px"},C=[{type:"label",labelIndex:0,style:{height:15,textAlign:w,lineHeight:"11px"}},{type:"label",labelIndex:1,style:A},{type:"label",labelIndex:2,style:A},{type:"label",labelIndex:3,style:A},{type:"label",labelIndex:4,style:A},{type:"label",labelIndex:5,style:A},{type:"label",labelIndex:6,style:A},{type:"label",labelIndex:7,style:{height:15,textAlign:w,lineHeight:"20px"}}],E={width:40,textAlign:I},P=[[{type:"label",labelIndex:0,style:{width:175,textAlign:w}},{type:"label",labelIndex:7,style:{width:175,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:145,textAlign:w}},{type:"dots"},{type:"space",style:{width:40}},{type:"dots"},{type:"label",labelIndex:7,style:{width:145,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:95,textAlign:w}},{type:"dots"},{type:"space",style:{width:40}},{type:"dots"},{type:"space",style:{width:40}},{type:"dots"},{type:"space",style:{width:40}},{type:"dots"},{type:"label",labelIndex:7,style:{width:95,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:55,textAlign:w}},{type:"label",labelIndex:2,style:{width:90,textAlign:I}},{type:"dots"},{type:"space",style:{width:40}},{type:"dots"},{type:"label",labelIndex:5,style:{width:90,textAlign:I}},{type:"label",labelIndex:7,style:{width:55,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:45,textAlign:w}},{type:"dots"},{type:"label",labelIndex:2,style:{width:90,textAlign:I}},{type:"dots"},{type:"space",style:{width:40}},{type:"dots"},{type:"label",labelIndex:5,style:{width:90,textAlign:I}},{type:"dots"},{type:"label",labelIndex:7,style:{width:45,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:30,textAlign:w}},{type:"label",labelIndex:1,style:E},{type:"space",style:{width:10}},{type:"label",labelIndex:2,style:E},{type:"space",style:{width:10}},{type:"label",labelIndex:3,style:E},{type:"space",style:{width:10}},{type:"label",labelIndex:4,style:E},{type:"space",style:{width:10}},{type:"label",labelIndex:5,style:E},{type:"space",style:{width:10}},{type:"label",labelIndex:6,style:E},{type:"label",labelIndex:7,style:{width:30,textAlign:f}}]],N=[[{type:"label",labelIndex:0,style:{width:175,textAlign:w}},{type:"label",labelIndex:6,style:{width:175,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:145,textAlign:w}},{type:"dots"},{type:"space",style:{width:40}},{type:"dots"},{type:"label",labelIndex:6,style:{width:145,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:95,textAlign:w}},{type:"dots"},{type:"space",style:{width:40}},{type:"dots"},{type:"space",style:{width:40}},{type:"dots"},{type:"space",style:{width:40}},{type:"dots"},{type:"label",labelIndex:6,style:{width:95,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:55,textAlign:w}},{type:"label",labelIndex:2,style:{width:90,textAlign:I}},{type:"dots"},{type:"space",style:{width:40}},{type:"dots"},{type:"label",labelIndex:4,style:{width:90,textAlign:I}},{type:"label",labelIndex:6,style:{width:55,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:45,textAlign:w}},{type:"dots"},{type:"label",labelIndex:2,style:{width:90,textAlign:I}},{type:"dots"},{type:"space",style:{width:40}},{type:"dots"},{type:"label",labelIndex:4,style:{width:90,textAlign:I}},{type:"dots"},{type:"label",labelIndex:6,style:{width:45,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:30,textAlign:w}},{type:"label",labelIndex:1,style:E},{type:"space",style:{width:10}},{type:"label",labelIndex:2,style:E},{type:"space",style:{width:10}},{type:"label",labelIndex:3,style:E},{type:"space",style:{width:10}},{type:"label",labelIndex:4,style:E},{type:"space",style:{width:10}},{type:"label",labelIndex:5,style:E},{type:"label",labelIndex:6,style:{width:30,textAlign:f}}]],k={width:40,textAlign:I},$=[[{type:"label",labelIndex:0,style:{width:63,textAlign:w}},{type:"label",labelIndex:7,style:{width:63,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:63,textAlign:w}},{type:"label",labelIndex:7,style:{width:63,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:63,textAlign:w}},{type:"label",labelIndex:7,style:{width:63,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:63,textAlign:w}},{type:"label",labelIndex:7,style:{width:63,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:33,textAlign:w}},{type:"label",labelIndex:3,style:{width:42,textAlign:I}},{type:"label",labelIndex:7,style:{width:51,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:33,textAlign:w}},{type:"label",labelIndex:3,style:{width:42,textAlign:I}},{type:"label",labelIndex:7,style:{width:51,textAlign:f}}]],R=[[{type:"label",labelIndex:0,style:{width:54,textAlign:w}},{type:"label",labelIndex:6,style:{width:54,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:54,textAlign:w}},{type:"label",labelIndex:6,style:{width:54,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:54,textAlign:w}},{type:"label",labelIndex:6,style:{width:54,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:54,textAlign:w}},{type:"label",labelIndex:6,style:{width:54,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:24,textAlign:w}},{type:"label",labelIndex:4,style:{width:32,textAlign:I}},{type:"label",labelIndex:6,style:{width:52,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:24,textAlign:w}},{type:"label",labelIndex:4,style:{width:32,textAlign:I}},{type:"label",labelIndex:6,style:{width:52,textAlign:f}}]],M=[[{type:"label",labelIndex:0,style:{width:138,textAlign:w}},{type:"label",labelIndex:7,style:{width:138,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:115,textAlign:w}},{type:"dots"},{type:"space",style:{width:26}},{type:"dots"},{type:"label",labelIndex:7,style:{width:115,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:75,textAlign:w}},{type:"dots"},{type:"space",style:{width:30}},{type:"dots"},{type:"space",style:{width:26}},{type:"dots"},{type:"space",style:{width:30}},{type:"dots"},{type:"label",labelIndex:7,style:{width:75,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:45,textAlign:w}},{type:"label",labelIndex:2,style:{width:70,textAlign:I}},{type:"dots"},{type:"space",style:{width:26}},{type:"dots"},{type:"label",labelIndex:5,style:{width:70,textAlign:I}},{type:"label",labelIndex:7,style:{width:45,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:35,textAlign:w}},{type:"dots"},{type:"label",labelIndex:2,style:{width:70,textAlign:I}},{type:"dots"},{type:"space",style:{width:26}},{type:"dots"},{type:"label",labelIndex:5,style:{width:70,textAlign:I}},{type:"dots"},{type:"label",labelIndex:7,style:{width:35,textAlign:f}}],[{type:"label",labelIndex:0,style:{width:20,textAlign:w}},{type:"label",labelIndex:1,style:k},{type:"label",labelIndex:2,style:k},{type:"label",labelIndex:3,style:{width:38,textAlign:I}},{type:"label",labelIndex:4,style:{width:38,textAlign:I}},{type:"label",labelIndex:5,style:k},{type:"label",labelIndex:6,style:k},{type:"label",labelIndex:7,style:{width:20,textAlign:f}}]];const D={large:[5,8,10,15,18],medium:[4,7,9,13,15],small:[2,5,8,10,12]};function S(e,t,l){const n=e.length,o=a(e)?.length??0,r=i(e)?.length??0,d=o>r?o:r,c=D[t],p=l?C:function(e,t,l,n){const a=function(e,t){let l;return l=s(t,0,e[0])?5:s(t,e[0],e[1])?4:s(t,e[1],e[2])?3:s(t,e[2],e[3])?2:s(t,e[3],e[4])?1:0,l}(e,t);return"small"===l?7==n?R[a]:$[a]:"medium"===l?M[a]:8===n?P[a]:N[a]}(c,d,t,n);return y=e,p.map(((e,t)=>{switch(e.type){case"label":return{label:y[e.labelIndex],style:e.style,key:`${e.type}-${t}`};case"space":return function(e,t){return{key:`empty-${t}`,label:x,style:e}}(e.style,t);case"dots":return function(e){return{key:`dots-${e}`,label:h,style:(t=v,l=I,{width:t,textAlign:l})};var t,l}(t);default:return null}})).filter((e=>null!==e));var y}function z(e,t){const l=t-2*u-1;if(e<=2)return{hasPaging:!1,itemWidth:l/e,visibleItemsCount:e};let n=Math.floor(l/p),a=l/n,i=!1;if(Math.ceil(e/n)>y){const e=l-g;n=Math.floor(e/p),a=e/n,i=!0}return{itemWidth:a,hasPaging:i,visibleItemsCount:n*y}}function H(e,t,l,n){const a=e-(l?n:0);return Math.floor(a/b)*t}function L(e,t,l=1,n=m){if(t<b)return{hasPaging:!1,visibleItemsCount:0};const a=H(t,l,!1,n);return a>=e?{hasPaging:!1,visibleItemsCount:a}:{hasPaging:!0,visibleItemsCount:H(t,l,!0,n)}}const B=3;function O(e,t){const l=t?.chart?.backgroundColor??t?.palette?.complementary?.c0??"#fff",n=t?.palette?.complementary?.c4??"#ccc";return e.map(((e,t)=>{const a=(e=>({backgroundColor:e.color,border:o((0,c.z)(e.color),(0,c.z)(l))?`1px solid ${n}`:"none"}))(e);return{class:t===B?"middle":null,key:`item-${t}`,style:a}}))}function G(e,t,l,s,o,d){const c=function(e,t,l){const s=a(e)?.range?.from??0,o=(i(e)?.range?.to??0)-s;return n(e.length+1).map((n=>{let a;return a=0===n?e[0]?.range?.from??0:n===e.length?e[n-1]?.range?.to??0:e[n]?.range?.from??0,W(a,t,o,l)}))}(e,t,l);return{classes:["viz-legend","color-legend",`position-${o}`,s],labels:S(c,s,o===r.RL||o===r.pX),boxes:O(e,d),position:o}}const F="legendAxisIndicator",T="legendSeparator";function U(e,t){return d.X.formatValue(e,t).formattedValue}function W(e,t,l,n){if(t?.includes("%"))return U(e,"#,#0%");const a=-1===Math.sign(e)?"-":"",i=Math.abs(e);let s="";return l<10&&(s+="[<1]0.00;[<10]#.#;[<100]#.#;"),s+=(l<1e4?"[<999500]0;":`[<1000]0;[<10000]#.#,${n[0]};[<999500]#,${n[0]};`)+`[<10000000]#.#,,${n[1]};[<999500000]#,,${n[1]};`+`[<10000000000]#.#,,,${n[2]};[<999500000000]#,,,${n[2]};`+`[<10000000000000]#.#,,,${n[3]};[>=10000000000000]#,,,${n[3]}`,a+U(i,s)}const V=768;function _(e){return!!e&&e.documentElement.clientWidth<V}},17096:(e,t,l)=>{l.d(t,{Ug:()=>i,nB:()=>a,tV:()=>n});const n={LEFT:"left",RIGHT:"right",TOP:"top",BOTTOM:"bottom",AUTO:"auto"},a=["left","right","top","bottom"],i={enabled:!0,position:n.TOP}}}]);