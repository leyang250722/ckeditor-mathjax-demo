!function(e){function t(t){for(var a,i,l=t[0],u=t[1],s=t[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(c&&c(t);d.length;)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=u;o.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("70c9")},7037:function(e,t){e.exports=React},"70c9":function(e,t,n){"use strict";n.r(t);var a=n("9cd9"),r=n.n(a),o=n("970b"),i=n.n(o),l=n("5bc3"),u=n.n(l),s=n("ed6d"),c=n.n(s),f=n("6b58"),d=n.n(f),m=n("36c6"),h=n.n(m),p=n("7037"),v=n.n(p),y=n("2ef0"),g=n("3fc7"),w=n.n(g),b=n("a559"),x=n.n(b),_=n("7dac"),M=n.n(_),k=n("a23c");n.n(k)()("http://cdncs.101.com/v0.1/static/dist_learningobjectives_editor/mubiao-static/lib/MathJax/MathJax.js?config=TeX-AMS-MML_SVG-full,local/local");function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var j=function(e){return function(t){c()(r,t);var n,a=(n=r,function(){var e,t=h()(n);if(R()){var a=h()(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return d()(this,e)});function r(e){var t;return i()(this,r),(t=a.call(this,e)).dom=v.a.createRef(),t}return u()(r,[{key:"componentDidMount",value:function(){this.renderMathJax()}},{key:"componentDidUpdate",value:function(){this.renderMathJax()}},{key:"renderMathJax",value:function(){var e;e=M.a.findDOMNode(this.dom.current),window.MathJax&&MathJax.Hub.Queue(["Typeset",MathJax.Hub,e])}},{key:"render",value:function(){return v.a.createElement(e,x()({ref:this.dom},this.props))}}]),r}(p.Component)};function J(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var D=function(e){c()(a,e);var t,n=(t=a,function(){var e,n=h()(t);if(J()){var a=h()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return d()(this,e)});function a(e){var t;return i()(this,a),(t=n.call(this,e)).state={},t}return u()(a,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.mentions,a=e.handleTextChange,r=e.width,o=e.height;return v.a.createElement(w.a,{data:t,onChange:function(e){var t=e.editor.getData();a(t)},config:{contentsCss:["http://cdn.ckeditor.com/4.14.0/full-all/contents.css"],mathJaxLib:"//cdncs.101.com/v0.1/static/dist_learningobjectives_editor/mubiao-static/lib/MathJax/MathJax.js?config=TeX-AMS-MML_SVG-full,local/local",width:r,height:o,allowedContent:!0,extraAllowedContent:"*(*);*{*}",extraPlugins:"mathjax,mentions,emoji,basicstyles,undo,link,wysiwygarea,toolbar",enableContextMenu:!1,fillEmptyBlocks:!1,language:"en",toolbarLocation:"top",title:!1,mentions:n}})}}]),a}(p.Component);D.defaultProps={text:"",mentions:[],height:300,width:"auto",handleTextChange:y.noop};var S=j(D);function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var P=j(function(e){c()(a,e);var t,n=(t=a,function(){var e,n=h()(t);if(O()){var a=h()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return d()(this,e)});function a(){return i()(this,a),n.apply(this,arguments)}return u()(a,[{key:"render",value:function(){var e=this.props.text;return v.a.createElement("p",{dangerouslySetInnerHTML:{__html:e}})}}]),a}(p.Component));window.RichInput=S,window.MathjaxViewer=P,window.mentions=[{id:1,avatar:"m_1",fullname:"Charles Flores",username:"cflores"},{id:2,avatar:"m_2",fullname:"Gerald Jackson",username:"gjackson"},{id:3,avatar:"m_3",fullname:"Wayne Reed",username:"wreed"},{id:4,avatar:"m_4",fullname:"Louis Garcia",username:"lgarcia"},{id:5,avatar:"m_5",fullname:"Roy Wilson",username:"rwilson"},{id:6,avatar:"m_6",fullname:"Matthew Nelson",username:"mnelson"},{id:7,avatar:"m_7",fullname:"Randy Williams",username:"rwilliams"},{id:8,avatar:"m_8",fullname:"Albert Johnson",username:"ajohnson"},{id:9,avatar:"m_9",fullname:"Steve Roberts",username:"sroberts"},{id:10,avatar:"m_10",fullname:"Kevin Evans",username:"kevans"},{id:11,avatar:"w_1",fullname:"Mildred Wilson",username:"mwilson"},{id:12,avatar:"w_2",fullname:"Melissa Nelson",username:"mnelson"},{id:13,avatar:"w_3",fullname:"Kathleen Allen",username:"kallen"},{id:14,avatar:"w_4",fullname:"Mary Young",username:"myoung"},{id:15,avatar:"w_5",fullname:"Ashley Rogers",username:"arogers"},{id:16,avatar:"w_6",fullname:"Debra Griffin",username:"dgriffin"},{id:17,avatar:"w_7",fullname:"Denise Williams",username:"dwilliams"},{id:18,avatar:"w_8",fullname:"Amy James",username:"ajames"},{id:19,avatar:"w_9",fullname:"Ruby Anderson",username:"randerson"},{id:20,avatar:"w_10",fullname:"Wanda Lee",username:"wlee"}],window.topics=["american","asian","baking","breakfast","cake","caribbean","chinese","chocolate","cooking","dairy","delicious","delish","dessert","desserts","dinner","eat","eating","eggs","fish","food","foodgasm","foodie","foodporn","foods","french","fresh","fusion","glutenfree","greek","grilling","halal","homemade","hot","hungry","icecream","indian","italian","japanese","keto","korean","lactosefree","lunch","meat","mediterranean","mexican","moroccan","nom","nomnom","paleo","poultry","snack","spanish","sugarfree","sweet","sweettooth","tasty","thai","vegan","vegetarian","vietnamese","yum","yummy"],window.$docsify=r()({name:"Document",repo:"https://github.com/FerrisLee-180505/ckeditor-mathjax-demo",plugins:[]})},"7dac":function(e,t){e.exports=ReactDOM}});