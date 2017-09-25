/*! vue-ydui v0.9.5 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="/dist/",t(0)}({0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CheckBoxGroup=t.CheckBox=void 0;var r=o(65),c=n(r),i=o(64),a=n(i);t.CheckBox=c.default,t.CheckBoxGroup=a.default},1:function(e,t){e.exports=function(e,t,o,n){var r,c=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,c=e.default);var a="function"==typeof c?c.options:c;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),o&&(a._scopeId=o),n){var s=a.computed||(a.computed={});Object.keys(n).forEach(function(e){var t=n[e];s[e]=function(){return t}})}return{esModule:r,exports:c,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var c=this[r][0];"number"==typeof c&&(n[c]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&n[i[0]]||(o&&!i[2]?i[2]=o:o&&(i[2]="("+i[2]+") and ("+o+")"),e.push(i))}},e}},3:function(e,t,o){function n(e){for(var t=0;t<e.length;t++){var o=e[t],n=l[o.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](o.parts[r]);for(;r<o.parts.length;r++)n.parts.push(c(o.parts[r]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var i=[],r=0;r<o.parts.length;r++)i.push(c(o.parts[r]));l[o.id]={id:o.id,refs:1,parts:i}}}}function r(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function c(e){var t,o,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(h)return v;n.parentNode.removeChild(n)}if(m){var c=p++;n=f||(f=r()),t=i.bind(null,n,c,!1),o=i.bind(null,n,c,!0)}else n=r(),t=a.bind(null,n),o=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}function i(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var c=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(c,i[t]):e.appendChild(c)}}function a(e,t){var o=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),r&&(o+="\n/*# sourceURL="+r.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var s="undefined"!=typeof document,d=o(4),l={},u=s&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,o){h=o;var r=d(e,t);return n(r),function(t){for(var o=[],c=0;c<r.length;c++){var i=r[c],a=l[i.id];a.refs--,o.push(a)}t?(r=d(e,t),n(r)):r=[];for(var c=0;c<o.length;c++){var a=o[c];if(0===a.refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete l[a.id]}}}};var b=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var o=[],n={},r=0;r<t.length;r++){var c=t[r],i=c[0],a=c[1],s=c[2],d=c[3],l={id:e+":"+r,css:a,media:s,sourceMap:d};n[i]?n[i].parts.push(l):o.push(n[i]={id:i,parts:[l]})}return o}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(o){t||(t=!0,(o||document).addEventListener("touchmove",e))},unlock:function(o){t=!1,(o||document).removeEventListener("touchmove",e)}}}(),n=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),r=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,o=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||o.test(e)||n.test(e)},c=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var o=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===o||"auto"===o)return t;t=t.parentNode}return window},i=function(e,t){var o=e==window?document.body.offsetHeight:e.offsetHeight,n=e===window?0:e.getBoundingClientRect().top,r=t.getBoundingClientRect().top-n,c=r+t.offsetHeight;return r>=0&&r<o||c>0&&c<=o},a=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){a(e,t)||(e.className=""==e.className?t:e.className+" "+t)},d=function(e,t){if(a(e,t)){for(var o=" "+e.className.replace(/[\t\r\n]/g,"")+" ";o.indexOf(" "+t+" ")>=0;)o=o.replace(" "+t+" "," ");e.className=o.replace(/^\s+|\s+$/g,"")}},l=function(e){function t(o,n,r){if(o!==n){var c=o+r>n?n:o+r;o>n&&(c=o-r<n?n:o-r),e===window?window.scrollTo(c,c):e.scrollTop=c,window.requestAnimationFrame(function(){return t(c,n,r)})}}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var c=Math.abs(o-n),i=Math.ceil(c/r*50);t(o,n,i)};t.pageScroll=o,t.isIOS=n,t.isColor=r,t.getScrollview=c,t.checkInview=i,t.addClass=s,t.removeClass=d,t.scrollTop=l},49:function(e,t,o){t=e.exports=o(2)(),t.push([e.id,'.yd-checkbox{display:inline-block;padding-right:10px}.yd-checkbox>input[type=checkbox]{position:absolute;left:-9999em}.yd-checkbox>input[type=checkbox]:checked+.yd-checkbox-icon{background-color:currentColor;border-color:currentColor}.yd-checkbox>input[type=checkbox]:checked+.yd-checkbox-icon>i{-webkit-transform:translate(-50%,-50%) rotate(45deg) scale(1);transform:translate(-50%,-50%) rotate(45deg) scale(1);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.yd-checkbox>input[type=checkbox]:disabled~.yd-checkbox-text{color:#ccc}.yd-checkbox>input[type=checkbox]:disabled+.yd-checkbox-icon{border-color:#ccc;background-color:#f3f3f3}.yd-checkbox>input[type=checkbox]:disabled+.yd-checkbox-icon>i{border-color:#ccc}.yd-checkbox-icon{border:1px solid #ccc;border-radius:2px;display:inline-block;position:relative;z-index:10;vertical-align:bottom;pointer-events:none}.yd-checkbox-icon>i{content:"";position:absolute;top:45%;left:50%;border:2px solid #fff;border-top:0;border-left:0;-webkit-transform:translate(-50%,-50%) rotate(45deg) scale(0);transform:translate(-50%,-50%) rotate(45deg) scale(0)}.yd-checkbox-text{margin-left:1px;font-size:15px;color:#666;pointer-events:none}.yd-checkbox-circle .yd-checkbox-icon{border-radius:50%}',""])},64:function(e,t,o){var n=o(1)(o(225),o(138),null,null);e.exports=n.exports},65:function(e,t,o){o(208);var n=o(1)(o(226),o(163),null,null);e.exports=n.exports},138:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._t("default")],2)},staticRenderFns:[]}},163:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{staticClass:"yd-checkbox",class:"circle"==e.shape?"yd-checkbox-circle":""},[e.group?[o("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],attrs:{type:"checkbox",disabled:e.disabled},domProps:{value:e.val,checked:Array.isArray(e.model)?e._i(e.model,e.val)>-1:e.model},on:{change:e.changeHandler,__c:function(t){var o=e.model,n=t.target,r=!!n.checked;if(Array.isArray(o)){var c=e.val,i=e._i(o,c);n.checked?i<0&&(e.model=o.concat(c)):i>-1&&(e.model=o.slice(0,i).concat(o.slice(i+1)))}else e.model=r}}})]:[o("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{__c:function(t){var o=e.checked,n=t.target,r=!!n.checked;if(Array.isArray(o)){var c=null,i=e._i(o,c);n.checked?i<0&&(e.checked=o.concat(c)):i>-1&&(e.checked=o.slice(0,i).concat(o.slice(i+1)))}else e.checked=r}}})],e._v(" "),o("span",{staticClass:"yd-checkbox-icon",style:e.iconStyles()},[o("i",{style:e.checkIconStyles()})]),e._v(" "),e.$slots.default?[o("span",{staticClass:"yd-checkbox-text"},[e._t("default")],2)]:[o("span",{staticClass:"yd-checkbox-text"},[e._v(e._s(e.val))])]],2)},staticRenderFns:[]}},208:function(e,t,o){var n=o(49);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);o(3)("6ee6857a",n,!0)},225:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(5);t.default={name:"yd-checkbox-group",props:{value:{type:Array,default:[]},color:{validator:function(e){return!e||(0,n.isColor)(e)},default:"#4CD864"},size:{validator:function(e){return/^([1-9]\d*)$/.test(e)},default:20}},methods:{updateValue:function(){var e=this.value;this.childrens=this.$children.filter(function(e){return"yd-checkbox"===e.$options.name}),this.childrens&&this.childrens.forEach(function(t){t.model=e})},change:function(e){this.$emit("input",e)}},watch:{value:function(){this.updateValue()}},mounted:function(){this.$nextTick(this.updateValue)}}},226:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(5);t.default={name:"yd-checkbox",data:function(){return{model:[],group:!1,checked:this.value}},props:{value:{type:Boolean,default:!1},val:{type:[Boolean,String,Number]},disabled:{type:Boolean,default:!1},color:{validator:function(e){return!e||(0,n.isColor)(e)},default:"#4CD864"},size:{validator:function(e){return/^([1-9]\d*)$/.test(e)},default:20},shape:{validator:function(e){return["square","circle"].indexOf(e)>-1},default:"square"}},methods:{changeHandler:function(){var e=this;this.disabled||setTimeout(function(){e.$parent.change(e.model)},0)},iconStyles:function(){var e=(this.group?this.$parent.size:this.size)+"px",t=this.group?this.$parent.color:this.color;return{width:e,height:e,color:t}},checkIconStyles:function(){var e=this.group?this.$parent.size:this.size;return{width:Math.round(e/3.2)+"px",height:Math.round(e/1.7)+"px"}}},watch:{checked:function(e){this.$emit("input",e)},value:function(e){this.checked=e}},created:function(){this.$parent.color&&(this.group=!0)}}}})});