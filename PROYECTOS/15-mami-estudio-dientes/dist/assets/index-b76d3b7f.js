(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Uk(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var B0={exports:{}},Wc={},z0={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pu=Symbol.for("react.element"),Vk=Symbol.for("react.portal"),Bk=Symbol.for("react.fragment"),zk=Symbol.for("react.strict_mode"),jk=Symbol.for("react.profiler"),qk=Symbol.for("react.provider"),Gk=Symbol.for("react.context"),Wk=Symbol.for("react.forward_ref"),Kk=Symbol.for("react.suspense"),Hk=Symbol.for("react.memo"),Qk=Symbol.for("react.lazy"),Oy=Symbol.iterator;function Yk(t){return t===null||typeof t!="object"?null:(t=Oy&&t[Oy]||t["@@iterator"],typeof t=="function"?t:null)}var j0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q0=Object.assign,G0={};function oo(t,e,n){this.props=t,this.context=e,this.refs=G0,this.updater=n||j0}oo.prototype.isReactComponent={};oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function W0(){}W0.prototype=oo.prototype;function qp(t,e,n){this.props=t,this.context=e,this.refs=G0,this.updater=n||j0}var Gp=qp.prototype=new W0;Gp.constructor=qp;q0(Gp,oo.prototype);Gp.isPureReactComponent=!0;var Ly=Array.isArray,K0=Object.prototype.hasOwnProperty,Wp={current:null},H0={key:!0,ref:!0,__self:!0,__source:!0};function Q0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)K0.call(e,r)&&!H0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:pu,type:t,key:s,ref:o,props:i,_owner:Wp.current}}function Xk(t,e){return{$$typeof:pu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kp(t){return typeof t=="object"&&t!==null&&t.$$typeof===pu}function Jk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var My=/\/+/g;function id(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jk(""+t.key):e.toString(36)}function Tl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pu:case Vk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+id(o,0):r,Ly(i)?(n="",t!=null&&(n=t.replace(My,"$&/")+"/"),Tl(i,e,n,"",function(l){return l})):i!=null&&(Kp(i)&&(i=Xk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(My,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ly(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+id(s,a);o+=Tl(s,e,n,u,i)}else if(u=Yk(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+id(s,a++),o+=Tl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hu(t,e,n){if(t==null)return t;var r=[],i=0;return Tl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Zk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},kl={transition:null},eC={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:kl,ReactCurrentOwner:Wp};H.Children={map:Hu,forEach:function(t,e,n){Hu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Hu(t,function(){e++}),e},toArray:function(t){return Hu(t,function(e){return e})||[]},only:function(t){if(!Kp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=oo;H.Fragment=Bk;H.Profiler=jk;H.PureComponent=qp;H.StrictMode=zk;H.Suspense=Kk;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eC;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=q0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)K0.call(e,u)&&!H0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:pu,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:Gk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qk,_context:t},t.Consumer=t};H.createElement=Q0;H.createFactory=function(t){var e=Q0.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:Wk,render:t}};H.isValidElement=Kp;H.lazy=function(t){return{$$typeof:Qk,_payload:{_status:-1,_result:t},_init:Zk}};H.memo=function(t,e){return{$$typeof:Hk,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=kl.transition;kl.transition={};try{t()}finally{kl.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return yt.current.useCallback(t,e)};H.useContext=function(t){return yt.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};H.useEffect=function(t,e){return yt.current.useEffect(t,e)};H.useId=function(){return yt.current.useId()};H.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return yt.current.useMemo(t,e)};H.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};H.useRef=function(t){return yt.current.useRef(t)};H.useState=function(t){return yt.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return yt.current.useTransition()};H.version="18.2.0";z0.exports=H;var hn=z0.exports;const yr=Uk(hn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tC=hn,nC=Symbol.for("react.element"),rC=Symbol.for("react.fragment"),iC=Object.prototype.hasOwnProperty,sC=tC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oC={key:!0,ref:!0,__self:!0,__source:!0};function Y0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iC.call(e,r)&&!oC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nC,type:t,key:s,ref:o,props:i,_owner:sC.current}}Wc.Fragment=rC;Wc.jsx=Y0;Wc.jsxs=Y0;B0.exports=Wc;var W=B0.exports,nf={},X0={exports:{}},Ft={},J0={exports:{}},Z0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,j){var q=L.length;L.push(j);e:for(;0<q;){var Se=q-1>>>1,$e=L[Se];if(0<i($e,j))L[Se]=j,L[q]=$e,q=Se;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var j=L[0],q=L.pop();if(q!==j){L[0]=q;e:for(var Se=0,$e=L.length,Wu=$e>>>1;Se<Wu;){var ei=2*(Se+1)-1,rd=L[ei],ti=ei+1,Ku=L[ti];if(0>i(rd,q))ti<$e&&0>i(Ku,rd)?(L[Se]=Ku,L[ti]=q,Se=ti):(L[Se]=rd,L[ei]=q,Se=ei);else if(ti<$e&&0>i(Ku,q))L[Se]=Ku,L[ti]=q,Se=ti;else break e}}return j}function i(L,j){var q=L.sortIndex-j.sortIndex;return q!==0?q:L.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,d=3,p=!1,y=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var j=n(l);j!==null;){if(j.callback===null)r(l);else if(j.startTime<=L)r(l),j.sortIndex=j.expirationTime,e(u,j);else break;j=n(l)}}function I(L){if(w=!1,g(L),!y)if(n(u)!==null)y=!0,td(C);else{var j=n(l);j!==null&&nd(I,j.startTime-L)}}function C(L,j){y=!1,w&&(w=!1,m(M),M=-1),p=!0;var q=d;try{for(g(j),h=n(u);h!==null&&(!(h.expirationTime>j)||L&&!Qt());){var Se=h.callback;if(typeof Se=="function"){h.callback=null,d=h.priorityLevel;var $e=Se(h.expirationTime<=j);j=t.unstable_now(),typeof $e=="function"?h.callback=$e:h===n(u)&&r(u),g(j)}else r(u);h=n(u)}if(h!==null)var Wu=!0;else{var ei=n(l);ei!==null&&nd(I,ei.startTime-j),Wu=!1}return Wu}finally{h=null,d=q,p=!1}}var A=!1,D=null,M=-1,re=5,G=-1;function Qt(){return!(t.unstable_now()-G<re)}function ko(){if(D!==null){var L=t.unstable_now();G=L;var j=!0;try{j=D(!0,L)}finally{j?Co():(A=!1,D=null)}}else A=!1}var Co;if(typeof f=="function")Co=function(){f(ko)};else if(typeof MessageChannel<"u"){var by=new MessageChannel,Fk=by.port2;by.port1.onmessage=ko,Co=function(){Fk.postMessage(null)}}else Co=function(){N(ko,0)};function td(L){D=L,A||(A=!0,Co())}function nd(L,j){M=N(function(){L(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,td(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var q=d;d=j;try{return L()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,j){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=d;d=L;try{return j()}finally{d=q}},t.unstable_scheduleCallback=function(L,j,q){var Se=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Se+q:Se):q=Se,L){case 1:var $e=-1;break;case 2:$e=250;break;case 5:$e=1073741823;break;case 4:$e=1e4;break;default:$e=5e3}return $e=q+$e,L={id:c++,callback:j,priorityLevel:L,startTime:q,expirationTime:$e,sortIndex:-1},q>Se?(L.sortIndex=q,e(l,L),n(u)===null&&L===n(l)&&(w?(m(M),M=-1):w=!0,nd(I,q-Se))):(L.sortIndex=$e,e(u,L),y||p||(y=!0,td(C))),L},t.unstable_shouldYield=Qt,t.unstable_wrapCallback=function(L){var j=d;return function(){var q=d;d=j;try{return L.apply(this,arguments)}finally{d=q}}}})(Z0);J0.exports=Z0;var aC=J0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_=hn,Lt=aC;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t_=new Set,Ea={};function Gi(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(Ea[t]=e,t=0;t<e.length;t++)t_.add(e[t])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rf=Object.prototype.hasOwnProperty,uC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$y={},Fy={};function lC(t){return rf.call(Fy,t)?!0:rf.call($y,t)?!1:uC.test(t)?Fy[t]=!0:($y[t]=!0,!1)}function cC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hC(t,e,n,r){if(e===null||typeof e>"u"||cC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hp=/[\-:]([a-z])/g;function Qp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hp,Qp);et[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hp,Qp);et[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hp,Qp);et[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yp(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hC(e,n,i,r)&&(n=null),r||i===null?lC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yn=e_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qu=Symbol.for("react.element"),ls=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),Xp=Symbol.for("react.strict_mode"),sf=Symbol.for("react.profiler"),n_=Symbol.for("react.provider"),r_=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),af=Symbol.for("react.suspense_list"),Zp=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),i_=Symbol.for("react.offscreen"),Uy=Symbol.iterator;function No(t){return t===null||typeof t!="object"?null:(t=Uy&&t[Uy]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,sd;function Wo(t){if(sd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sd=e&&e[1]||""}return`
`+sd+t}var od=!1;function ad(t,e){if(!t||od)return"";od=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{od=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wo(t):""}function dC(t){switch(t.tag){case 5:return Wo(t.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return t=ad(t.type,!1),t;case 11:return t=ad(t.type.render,!1),t;case 1:return t=ad(t.type,!0),t;default:return""}}function uf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cs:return"Fragment";case ls:return"Portal";case sf:return"Profiler";case Xp:return"StrictMode";case of:return"Suspense";case af:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case r_:return(t.displayName||"Context")+".Consumer";case n_:return(t._context.displayName||"Context")+".Provider";case Jp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zp:return e=t.displayName||null,e!==null?e:uf(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return uf(t(e))}catch{}}return null}function fC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uf(e);case 8:return e===Xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pC(t){var e=s_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yu(t){t._valueTracker||(t._valueTracker=pC(t))}function o_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=s_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lf(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a_(t,e){e=e.checked,e!=null&&Yp(t,"checked",e,!1)}function cf(t,e){a_(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&hf(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function By(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hf(t,e,n){(e!=="number"||Hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ko=Array.isArray;function Ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function df(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Ko(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function u_(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function l_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ff(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?l_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xu,c_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xu=Xu||document.createElement("div"),Xu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mC=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){mC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function h_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function d_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=h_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gC=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pf(t,e){if(e){if(gC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gf=null;function em(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yf=null,ks=null,Cs=null;function qy(t){if(t=yu(t)){if(typeof yf!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Xc(e),yf(t.stateNode,t.type,e))}}function f_(t){ks?Cs?Cs.push(t):Cs=[t]:ks=t}function p_(){if(ks){var t=ks,e=Cs;if(Cs=ks=null,qy(t),e)for(t=0;t<e.length;t++)qy(e[t])}}function m_(t,e){return t(e)}function g_(){}var ud=!1;function y_(t,e,n){if(ud)return t(e,n);ud=!0;try{return m_(t,e,n)}finally{ud=!1,(ks!==null||Cs!==null)&&(g_(),p_())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var r=Xc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var vf=!1;if(jn)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){vf=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{vf=!1}function yC(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var ia=!1,Ql=null,Yl=!1,wf=null,vC={onError:function(t){ia=!0,Ql=t}};function wC(t,e,n,r,i,s,o,a,u){ia=!1,Ql=null,yC.apply(vC,arguments)}function _C(t,e,n,r,i,s,o,a,u){if(wC.apply(this,arguments),ia){if(ia){var l=Ql;ia=!1,Ql=null}else throw Error(T(198));Yl||(Yl=!0,wf=l)}}function Wi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gy(t){if(Wi(t)!==t)throw Error(T(188))}function IC(t){var e=t.alternate;if(!e){if(e=Wi(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gy(i),t;if(s===r)return Gy(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function w_(t){return t=IC(t),t!==null?__(t):null}function __(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=__(t);if(e!==null)return e;t=t.sibling}return null}var I_=Lt.unstable_scheduleCallback,Wy=Lt.unstable_cancelCallback,EC=Lt.unstable_shouldYield,SC=Lt.unstable_requestPaint,Te=Lt.unstable_now,TC=Lt.unstable_getCurrentPriorityLevel,tm=Lt.unstable_ImmediatePriority,E_=Lt.unstable_UserBlockingPriority,Xl=Lt.unstable_NormalPriority,kC=Lt.unstable_LowPriority,S_=Lt.unstable_IdlePriority,Kc=null,Sn=null;function CC(t){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Kc,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:xC,NC=Math.log,AC=Math.LN2;function xC(t){return t>>>=0,t===0?32:31-(NC(t)/AC|0)|0}var Ju=64,Zu=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ho(a):(s&=o,s!==0&&(r=Ho(s)))}else o=n&~i,o!==0?r=Ho(o):s!==0&&(r=Ho(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),i=1<<n,r|=t[n],e&=~i;return r}function DC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-tn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=DC(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function _f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function T_(){var t=Ju;return Ju<<=1,!(Ju&4194240)&&(Ju=64),t}function ld(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function PC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function nm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function k_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var C_,rm,N_,A_,x_,If=!1,el=[],vr=null,wr=null,_r=null,ka=new Map,Ca=new Map,lr=[],bC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ky(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function xo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=yu(e),e!==null&&rm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function OC(t,e,n,r,i){switch(e){case"focusin":return vr=xo(vr,t,e,n,r,i),!0;case"dragenter":return wr=xo(wr,t,e,n,r,i),!0;case"mouseover":return _r=xo(_r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ka.set(s,xo(ka.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ca.set(s,xo(Ca.get(s)||null,t,e,n,r,i)),!0}return!1}function D_(t){var e=di(t.target);if(e!==null){var n=Wi(e);if(n!==null){if(e=n.tag,e===13){if(e=v_(n),e!==null){t.blockedOn=e,x_(t.priority,function(){N_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ef(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);gf=r,n.target.dispatchEvent(r),gf=null}else return e=yu(n),e!==null&&rm(e),t.blockedOn=n,!1;e.shift()}return!0}function Hy(t,e,n){Cl(t)&&n.delete(e)}function LC(){If=!1,vr!==null&&Cl(vr)&&(vr=null),wr!==null&&Cl(wr)&&(wr=null),_r!==null&&Cl(_r)&&(_r=null),ka.forEach(Hy),Ca.forEach(Hy)}function Do(t,e){t.blockedOn===e&&(t.blockedOn=null,If||(If=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,LC)))}function Na(t){function e(i){return Do(i,t)}if(0<el.length){Do(el[0],t);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vr!==null&&Do(vr,t),wr!==null&&Do(wr,t),_r!==null&&Do(_r,t),ka.forEach(e),Ca.forEach(e),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)D_(n),n.blockedOn===null&&lr.shift()}var Ns=Yn.ReactCurrentBatchConfig,Zl=!0;function MC(t,e,n,r){var i=te,s=Ns.transition;Ns.transition=null;try{te=1,im(t,e,n,r)}finally{te=i,Ns.transition=s}}function $C(t,e,n,r){var i=te,s=Ns.transition;Ns.transition=null;try{te=4,im(t,e,n,r)}finally{te=i,Ns.transition=s}}function im(t,e,n,r){if(Zl){var i=Ef(t,e,n,r);if(i===null)wd(t,e,r,ec,n),Ky(t,r);else if(OC(i,t,e,n,r))r.stopPropagation();else if(Ky(t,r),e&4&&-1<bC.indexOf(t)){for(;i!==null;){var s=yu(i);if(s!==null&&C_(s),s=Ef(t,e,n,r),s===null&&wd(t,e,r,ec,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wd(t,e,r,null,n)}}var ec=null;function Ef(t,e,n,r){if(ec=null,t=em(r),t=di(t),t!==null)if(e=Wi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ec=t,null}function R_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TC()){case tm:return 1;case E_:return 4;case Xl:case kC:return 16;case S_:return 536870912;default:return 16}default:return 16}}var fr=null,sm=null,Nl=null;function P_(){if(Nl)return Nl;var t,e=sm,n=e.length,r,i="value"in fr?fr.value:fr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Nl=i.slice(t,1<r?1-r:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Qy(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:Qy,this.isPropagationStopped=Qy,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},om=Ut(ao),gu=ye({},ao,{view:0,detail:0}),FC=Ut(gu),cd,hd,Ro,Hc=ye({},gu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:am,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(cd=t.screenX-Ro.screenX,hd=t.screenY-Ro.screenY):hd=cd=0,Ro=t),cd)},movementY:function(t){return"movementY"in t?t.movementY:hd}}),Yy=Ut(Hc),UC=ye({},Hc,{dataTransfer:0}),VC=Ut(UC),BC=ye({},gu,{relatedTarget:0}),dd=Ut(BC),zC=ye({},ao,{animationName:0,elapsedTime:0,pseudoElement:0}),jC=Ut(zC),qC=ye({},ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GC=Ut(qC),WC=ye({},ao,{data:0}),Xy=Ut(WC),KC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QC[t])?!!e[t]:!1}function am(){return YC}var XC=ye({},gu,{key:function(t){if(t.key){var e=KC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:am,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JC=Ut(XC),ZC=ye({},Hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jy=Ut(ZC),eN=ye({},gu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:am}),tN=Ut(eN),nN=ye({},ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),rN=Ut(nN),iN=ye({},Hc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sN=Ut(iN),oN=[9,13,27,32],um=jn&&"CompositionEvent"in window,sa=null;jn&&"documentMode"in document&&(sa=document.documentMode);var aN=jn&&"TextEvent"in window&&!sa,b_=jn&&(!um||sa&&8<sa&&11>=sa),Zy=String.fromCharCode(32),ev=!1;function O_(t,e){switch(t){case"keyup":return oN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function uN(t,e){switch(t){case"compositionend":return L_(e);case"keypress":return e.which!==32?null:(ev=!0,Zy);case"textInput":return t=e.data,t===Zy&&ev?null:t;default:return null}}function lN(t,e){if(hs)return t==="compositionend"||!um&&O_(t,e)?(t=P_(),Nl=sm=fr=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return b_&&e.locale!=="ko"?null:e.data;default:return null}}var cN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cN[t.type]:e==="textarea"}function M_(t,e,n,r){f_(r),e=tc(e,"onChange"),0<e.length&&(n=new om("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var oa=null,Aa=null;function hN(t){K_(t,0)}function Qc(t){var e=ps(t);if(o_(e))return t}function dN(t,e){if(t==="change")return e}var $_=!1;if(jn){var fd;if(jn){var pd="oninput"in document;if(!pd){var nv=document.createElement("div");nv.setAttribute("oninput","return;"),pd=typeof nv.oninput=="function"}fd=pd}else fd=!1;$_=fd&&(!document.documentMode||9<document.documentMode)}function rv(){oa&&(oa.detachEvent("onpropertychange",F_),Aa=oa=null)}function F_(t){if(t.propertyName==="value"&&Qc(Aa)){var e=[];M_(e,Aa,t,em(t)),y_(hN,e)}}function fN(t,e,n){t==="focusin"?(rv(),oa=e,Aa=n,oa.attachEvent("onpropertychange",F_)):t==="focusout"&&rv()}function pN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qc(Aa)}function mN(t,e){if(t==="click")return Qc(e)}function gN(t,e){if(t==="input"||t==="change")return Qc(e)}function yN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rn=typeof Object.is=="function"?Object.is:yN;function xa(t,e){if(rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rf.call(e,i)||!rn(t[i],e[i]))return!1}return!0}function iv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sv(t,e){var n=iv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iv(n)}}function U_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?U_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function V_(){for(var t=window,e=Hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hl(t.document)}return e}function lm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vN(t){var e=V_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&U_(n.ownerDocument.documentElement,n)){if(r!==null&&lm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sv(n,s);var o=sv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wN=jn&&"documentMode"in document&&11>=document.documentMode,ds=null,Sf=null,aa=null,Tf=!1;function ov(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tf||ds==null||ds!==Hl(r)||(r=ds,"selectionStart"in r&&lm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),aa&&xa(aa,r)||(aa=r,r=tc(Sf,"onSelect"),0<r.length&&(e=new om("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ds)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fs={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},md={},B_={};jn&&(B_=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Yc(t){if(md[t])return md[t];if(!fs[t])return t;var e=fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in B_)return md[t]=e[n];return t}var z_=Yc("animationend"),j_=Yc("animationiteration"),q_=Yc("animationstart"),G_=Yc("transitionend"),W_=new Map,av="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){W_.set(t,e),Gi(e,[t])}for(var gd=0;gd<av.length;gd++){var yd=av[gd],_N=yd.toLowerCase(),IN=yd[0].toUpperCase()+yd.slice(1);jr(_N,"on"+IN)}jr(z_,"onAnimationEnd");jr(j_,"onAnimationIteration");jr(q_,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(G_,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EN=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function uv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_C(r,e,void 0,t),t.currentTarget=null}function K_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;uv(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;uv(i,a,l),s=u}}}if(Yl)throw t=wf,Yl=!1,wf=null,t}function oe(t,e){var n=e[xf];n===void 0&&(n=e[xf]=new Set);var r=t+"__bubble";n.has(r)||(H_(e,t,2,!1),n.add(r))}function vd(t,e,n){var r=0;e&&(r|=4),H_(n,t,r,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Da(t){if(!t[rl]){t[rl]=!0,t_.forEach(function(n){n!=="selectionchange"&&(EN.has(n)||vd(n,!1,t),vd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,vd("selectionchange",!1,e))}}function H_(t,e,n,r){switch(R_(e)){case 1:var i=MC;break;case 4:i=$C;break;default:i=im}n=i.bind(null,e,n,t),i=void 0,!vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function wd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=di(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}y_(function(){var l=s,c=em(n),h=[];e:{var d=W_.get(t);if(d!==void 0){var p=om,y=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":p=JC;break;case"focusin":y="focus",p=dd;break;case"focusout":y="blur",p=dd;break;case"beforeblur":case"afterblur":p=dd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Yy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=VC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=tN;break;case z_:case j_:case q_:p=jC;break;case G_:p=rN;break;case"scroll":p=FC;break;case"wheel":p=sN;break;case"copy":case"cut":case"paste":p=GC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jy}var w=(e&4)!==0,N=!w&&t==="scroll",m=w?d!==null?d+"Capture":null:d;w=[];for(var f=l,g;f!==null;){g=f;var I=g.stateNode;if(g.tag===5&&I!==null&&(g=I,m!==null&&(I=Ta(f,m),I!=null&&w.push(Ra(f,I,g)))),N)break;f=f.return}0<w.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==gf&&(y=n.relatedTarget||n.fromElement)&&(di(y)||y[qn]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=l,y=y?di(y):null,y!==null&&(N=Wi(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=l),p!==y)){if(w=Yy,I="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Jy,I="onPointerLeave",m="onPointerEnter",f="pointer"),N=p==null?d:ps(p),g=y==null?d:ps(y),d=new w(I,f+"leave",p,n,c),d.target=N,d.relatedTarget=g,I=null,di(c)===l&&(w=new w(m,f+"enter",y,n,c),w.target=g,w.relatedTarget=N,I=w),N=I,p&&y)t:{for(w=p,m=y,f=0,g=w;g;g=ts(g))f++;for(g=0,I=m;I;I=ts(I))g++;for(;0<f-g;)w=ts(w),f--;for(;0<g-f;)m=ts(m),g--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=ts(w),m=ts(m)}w=null}else w=null;p!==null&&lv(h,d,p,w,!1),y!==null&&N!==null&&lv(h,N,y,w,!0)}}e:{if(d=l?ps(l):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=dN;else if(tv(d))if($_)C=gN;else{C=pN;var A=fN}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=mN);if(C&&(C=C(t,l))){M_(h,C,n,c);break e}A&&A(t,d,l),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&hf(d,"number",d.value)}switch(A=l?ps(l):window,t){case"focusin":(tv(A)||A.contentEditable==="true")&&(ds=A,Sf=l,aa=null);break;case"focusout":aa=Sf=ds=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,ov(h,n,c);break;case"selectionchange":if(wN)break;case"keydown":case"keyup":ov(h,n,c)}var D;if(um)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else hs?O_(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(b_&&n.locale!=="ko"&&(hs||M!=="onCompositionStart"?M==="onCompositionEnd"&&hs&&(D=P_()):(fr=c,sm="value"in fr?fr.value:fr.textContent,hs=!0)),A=tc(l,M),0<A.length&&(M=new Xy(M,t,null,n,c),h.push({event:M,listeners:A}),D?M.data=D:(D=L_(n),D!==null&&(M.data=D)))),(D=aN?uN(t,n):lN(t,n))&&(l=tc(l,"onBeforeInput"),0<l.length&&(c=new Xy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=D))}K_(h,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ta(t,n),s!=null&&r.unshift(Ra(t,s,i)),s=Ta(t,e),s!=null&&r.push(Ra(t,s,i))),t=t.return}return r}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=Ta(n,s),u!=null&&o.unshift(Ra(n,u,a))):i||(u=Ta(n,s),u!=null&&o.push(Ra(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var SN=/\r\n?/g,TN=/\u0000|\uFFFD/g;function cv(t){return(typeof t=="string"?t:""+t).replace(SN,`
`).replace(TN,"")}function il(t,e,n){if(e=cv(e),cv(t)!==e&&n)throw Error(T(425))}function nc(){}var kf=null,Cf=null;function Nf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Af=typeof setTimeout=="function"?setTimeout:void 0,kN=typeof clearTimeout=="function"?clearTimeout:void 0,hv=typeof Promise=="function"?Promise:void 0,CN=typeof queueMicrotask=="function"?queueMicrotask:typeof hv<"u"?function(t){return hv.resolve(null).then(t).catch(NN)}:Af;function NN(t){setTimeout(function(){throw t})}function _d(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Na(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Na(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),dn="__reactFiber$"+uo,Pa="__reactProps$"+uo,qn="__reactContainer$"+uo,xf="__reactEvents$"+uo,AN="__reactListeners$"+uo,xN="__reactHandles$"+uo;function di(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dv(t);t!==null;){if(n=t[dn])return n;t=dv(t)}return e}t=n,n=t.parentNode}return null}function yu(t){return t=t[dn]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Xc(t){return t[Pa]||null}var Df=[],ms=-1;function qr(t){return{current:t}}function le(t){0>ms||(t.current=Df[ms],Df[ms]=null,ms--)}function ie(t,e){ms++,Df[ms]=t.current,t.current=e}var xr={},lt=qr(xr),Ct=qr(!1),Ni=xr;function Us(t,e){var n=t.type.contextTypes;if(!n)return xr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function rc(){le(Ct),le(lt)}function fv(t,e,n){if(lt.current!==xr)throw Error(T(168));ie(lt,e),ie(Ct,n)}function Q_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,fC(t)||"Unknown",i));return ye({},n,r)}function ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,Ni=lt.current,ie(lt,t),ie(Ct,Ct.current),!0}function pv(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=Q_(t,e,Ni),r.__reactInternalMemoizedMergedChildContext=t,le(Ct),le(lt),ie(lt,t)):le(Ct),ie(Ct,n)}var bn=null,Jc=!1,Id=!1;function Y_(t){bn===null?bn=[t]:bn.push(t)}function DN(t){Jc=!0,Y_(t)}function Gr(){if(!Id&&bn!==null){Id=!0;var t=0,e=te;try{var n=bn;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bn=null,Jc=!1}catch(i){throw bn!==null&&(bn=bn.slice(t+1)),I_(tm,Gr),i}finally{te=e,Id=!1}}return null}var gs=[],ys=0,sc=null,oc=0,Vt=[],Bt=0,Ai=null,On=1,Ln="";function ri(t,e){gs[ys++]=oc,gs[ys++]=sc,sc=t,oc=e}function X_(t,e,n){Vt[Bt++]=On,Vt[Bt++]=Ln,Vt[Bt++]=Ai,Ai=t;var r=On;t=Ln;var i=32-tn(r)-1;r&=~(1<<i),n+=1;var s=32-tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-tn(e)+i|n<<i|r,Ln=s+t}else On=1<<s|n<<i|r,Ln=t}function cm(t){t.return!==null&&(ri(t,1),X_(t,1,0))}function hm(t){for(;t===sc;)sc=gs[--ys],gs[ys]=null,oc=gs[--ys],gs[ys]=null;for(;t===Ai;)Ai=Vt[--Bt],Vt[Bt]=null,Ln=Vt[--Bt],Vt[Bt]=null,On=Vt[--Bt],Vt[Bt]=null}var Ot=null,Pt=null,de=!1,Zt=null;function J_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,Pt=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ai!==null?{id:On,overflow:Ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,Pt=null,!0):!1;default:return!1}}function Rf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pf(t){if(de){var e=Pt;if(e){var n=e;if(!mv(t,e)){if(Rf(t))throw Error(T(418));e=Ir(n.nextSibling);var r=Ot;e&&mv(t,e)?J_(r,n):(t.flags=t.flags&-4097|2,de=!1,Ot=t)}}else{if(Rf(t))throw Error(T(418));t.flags=t.flags&-4097|2,de=!1,Ot=t}}}function gv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function sl(t){if(t!==Ot)return!1;if(!de)return gv(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nf(t.type,t.memoizedProps)),e&&(e=Pt)){if(Rf(t))throw Z_(),Error(T(418));for(;e;)J_(t,e),e=Ir(e.nextSibling)}if(gv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Ot?Ir(t.stateNode.nextSibling):null;return!0}function Z_(){for(var t=Pt;t;)t=Ir(t.nextSibling)}function Vs(){Pt=Ot=null,de=!1}function dm(t){Zt===null?Zt=[t]:Zt.push(t)}var RN=Yn.ReactCurrentBatchConfig;function Xt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ac=qr(null),uc=null,vs=null,fm=null;function pm(){fm=vs=uc=null}function mm(t){var e=ac.current;le(ac),t._currentValue=e}function bf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function As(t,e){uc=t,fm=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Wt(t){var e=t._currentValue;if(fm!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(uc===null)throw Error(T(308));vs=t,uc.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var fi=null;function gm(t){fi===null?fi=[t]:fi.push(t)}function eI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gn(t,r)}function Gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function ym(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gn(t,n)}return i=r.interleaved,i===null?(e.next=e,gm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gn(t,n)}function xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nm(t,n)}}function yv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,r){var i=t.updateQueue;ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(d=e,p=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=ye({},h,d);break e;case 2:ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=p,u=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Di|=o,t.lanes=o,t.memoizedState=h}}function vv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var nI=new e_.Component().refs;function Of(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?Wi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=pt(),i=Tr(t),s=Vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(nn(e,t,i,r),xl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=pt(),i=Tr(t),s=Vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(nn(e,t,i,r),xl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pt(),r=Tr(t),i=Vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Er(t,i,r),e!==null&&(nn(e,t,r,n),xl(e,t,r))}};function wv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xa(n,r)||!xa(i,s):!0}function rI(t,e,n){var r=!1,i=xr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(i=Nt(e)?Ni:lt.current,r=e.contextTypes,s=(r=r!=null)?Us(t,i):xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _v(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function Lf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=nI,ym(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Wt(s):(s=Nt(e)?Ni:lt.current,i.context=Us(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Of(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zc.enqueueReplaceState(i,i.state,null),lc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===nI&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Iv(t){var e=t._init;return e(t._payload)}function iI(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=kr(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,I){return f===null||f.tag!==6?(f=Ad(g,m.mode,I),f.return=m,f):(f=i(f,g),f.return=m,f)}function u(m,f,g,I){var C=g.type;return C===cs?c(m,f,g.props.children,I,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ar&&Iv(C)===f.type)?(I=i(f,g.props),I.ref=Po(m,f,g),I.return=m,I):(I=Ll(g.type,g.key,g.props,null,m.mode,I),I.ref=Po(m,f,g),I.return=m,I)}function l(m,f,g,I){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=xd(g,m.mode,I),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,I,C){return f===null||f.tag!==7?(f=Ii(g,m.mode,I,C),f.return=m,f):(f=i(f,g),f.return=m,f)}function h(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ad(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qu:return g=Ll(f.type,f.key,f.props,null,m.mode,g),g.ref=Po(m,null,f),g.return=m,g;case ls:return f=xd(f,m.mode,g),f.return=m,f;case ar:var I=f._init;return h(m,I(f._payload),g)}if(Ko(f)||No(f))return f=Ii(f,m.mode,g,null),f.return=m,f;ol(m,f)}return null}function d(m,f,g,I){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(m,f,""+g,I);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qu:return g.key===C?u(m,f,g,I):null;case ls:return g.key===C?l(m,f,g,I):null;case ar:return C=g._init,d(m,f,C(g._payload),I)}if(Ko(g)||No(g))return C!==null?null:c(m,f,g,I,null);ol(m,g)}return null}function p(m,f,g,I,C){if(typeof I=="string"&&I!==""||typeof I=="number")return m=m.get(g)||null,a(f,m,""+I,C);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Qu:return m=m.get(I.key===null?g:I.key)||null,u(f,m,I,C);case ls:return m=m.get(I.key===null?g:I.key)||null,l(f,m,I,C);case ar:var A=I._init;return p(m,f,g,A(I._payload),C)}if(Ko(I)||No(I))return m=m.get(g)||null,c(f,m,I,C,null);ol(f,I)}return null}function y(m,f,g,I){for(var C=null,A=null,D=f,M=f=0,re=null;D!==null&&M<g.length;M++){D.index>M?(re=D,D=null):re=D.sibling;var G=d(m,D,g[M],I);if(G===null){D===null&&(D=re);break}t&&D&&G.alternate===null&&e(m,D),f=s(G,f,M),A===null?C=G:A.sibling=G,A=G,D=re}if(M===g.length)return n(m,D),de&&ri(m,M),C;if(D===null){for(;M<g.length;M++)D=h(m,g[M],I),D!==null&&(f=s(D,f,M),A===null?C=D:A.sibling=D,A=D);return de&&ri(m,M),C}for(D=r(m,D);M<g.length;M++)re=p(D,m,M,g[M],I),re!==null&&(t&&re.alternate!==null&&D.delete(re.key===null?M:re.key),f=s(re,f,M),A===null?C=re:A.sibling=re,A=re);return t&&D.forEach(function(Qt){return e(m,Qt)}),de&&ri(m,M),C}function w(m,f,g,I){var C=No(g);if(typeof C!="function")throw Error(T(150));if(g=C.call(g),g==null)throw Error(T(151));for(var A=C=null,D=f,M=f=0,re=null,G=g.next();D!==null&&!G.done;M++,G=g.next()){D.index>M?(re=D,D=null):re=D.sibling;var Qt=d(m,D,G.value,I);if(Qt===null){D===null&&(D=re);break}t&&D&&Qt.alternate===null&&e(m,D),f=s(Qt,f,M),A===null?C=Qt:A.sibling=Qt,A=Qt,D=re}if(G.done)return n(m,D),de&&ri(m,M),C;if(D===null){for(;!G.done;M++,G=g.next())G=h(m,G.value,I),G!==null&&(f=s(G,f,M),A===null?C=G:A.sibling=G,A=G);return de&&ri(m,M),C}for(D=r(m,D);!G.done;M++,G=g.next())G=p(D,m,M,G.value,I),G!==null&&(t&&G.alternate!==null&&D.delete(G.key===null?M:G.key),f=s(G,f,M),A===null?C=G:A.sibling=G,A=G);return t&&D.forEach(function(ko){return e(m,ko)}),de&&ri(m,M),C}function N(m,f,g,I){if(typeof g=="object"&&g!==null&&g.type===cs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Qu:e:{for(var C=g.key,A=f;A!==null;){if(A.key===C){if(C=g.type,C===cs){if(A.tag===7){n(m,A.sibling),f=i(A,g.props.children),f.return=m,m=f;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ar&&Iv(C)===A.type){n(m,A.sibling),f=i(A,g.props),f.ref=Po(m,A,g),f.return=m,m=f;break e}n(m,A);break}else e(m,A);A=A.sibling}g.type===cs?(f=Ii(g.props.children,m.mode,I,g.key),f.return=m,m=f):(I=Ll(g.type,g.key,g.props,null,m.mode,I),I.ref=Po(m,f,g),I.return=m,m=I)}return o(m);case ls:e:{for(A=g.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=xd(g,m.mode,I),f.return=m,m=f}return o(m);case ar:return A=g._init,N(m,f,A(g._payload),I)}if(Ko(g))return y(m,f,g,I);if(No(g))return w(m,f,g,I);ol(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=Ad(g,m.mode,I),f.return=m,m=f),o(m)):n(m,f)}return N}var Bs=iI(!0),sI=iI(!1),vu={},Tn=qr(vu),ba=qr(vu),Oa=qr(vu);function pi(t){if(t===vu)throw Error(T(174));return t}function vm(t,e){switch(ie(Oa,e),ie(ba,t),ie(Tn,vu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ff(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ff(e,t)}le(Tn),ie(Tn,e)}function zs(){le(Tn),le(ba),le(Oa)}function oI(t){pi(Oa.current);var e=pi(Tn.current),n=ff(e,t.type);e!==n&&(ie(ba,t),ie(Tn,n))}function wm(t){ba.current===t&&(le(Tn),le(ba))}var me=qr(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ed=[];function _m(){for(var t=0;t<Ed.length;t++)Ed[t]._workInProgressVersionPrimary=null;Ed.length=0}var Dl=Yn.ReactCurrentDispatcher,Sd=Yn.ReactCurrentBatchConfig,xi=0,ge=null,be=null,Ue=null,hc=!1,ua=!1,La=0,PN=0;function rt(){throw Error(T(321))}function Im(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rn(t[n],e[n]))return!1;return!0}function Em(t,e,n,r,i,s){if(xi=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?MN:$N,t=n(r,i),ua){s=0;do{if(ua=!1,La=0,25<=s)throw Error(T(301));s+=1,Ue=be=null,e.updateQueue=null,Dl.current=FN,t=n(r,i)}while(ua)}if(Dl.current=dc,e=be!==null&&be.next!==null,xi=0,Ue=be=ge=null,hc=!1,e)throw Error(T(300));return t}function Sm(){var t=La!==0;return La=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ge.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Kt(){if(be===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Ue===null?ge.memoizedState:Ue.next;if(e!==null)Ue=e,be=t;else{if(t===null)throw Error(T(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ue===null?ge.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function Ma(t,e){return typeof e=="function"?e(t):e}function Td(t){var e=Kt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((xi&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,ge.lanes|=c,Di|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,rn(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Di|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kd(t){var e=Kt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);rn(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function aI(){}function uI(t,e){var n=ge,r=Kt(),i=e(),s=!rn(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,Tm(hI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,$a(9,cI.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(T(349));xi&30||lI(n,e,i)}return i}function lI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cI(t,e,n,r){e.value=n,e.getSnapshot=r,dI(e)&&fI(t)}function hI(t,e,n){return n(function(){dI(e)&&fI(t)})}function dI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rn(t,n)}catch{return!0}}function fI(t){var e=Gn(t,1);e!==null&&nn(e,t,1,-1)}function Ev(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},e.queue=t,t=t.dispatch=LN.bind(null,ge,t),[e.memoizedState,t]}function $a(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pI(){return Kt().memoizedState}function Rl(t,e,n,r){var i=cn();ge.flags|=t,i.memoizedState=$a(1|e,n,void 0,r===void 0?null:r)}function eh(t,e,n,r){var i=Kt();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&Im(r,o.deps)){i.memoizedState=$a(e,n,s,r);return}}ge.flags|=t,i.memoizedState=$a(1|e,n,s,r)}function Sv(t,e){return Rl(8390656,8,t,e)}function Tm(t,e){return eh(2048,8,t,e)}function mI(t,e){return eh(4,2,t,e)}function gI(t,e){return eh(4,4,t,e)}function yI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vI(t,e,n){return n=n!=null?n.concat([t]):null,eh(4,4,yI.bind(null,e,t),n)}function km(){}function wI(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Im(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _I(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Im(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function II(t,e,n){return xi&21?(rn(n,e)||(n=T_(),ge.lanes|=n,Di|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function bN(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=Sd.transition;Sd.transition={};try{t(!1),e()}finally{te=n,Sd.transition=r}}function EI(){return Kt().memoizedState}function ON(t,e,n){var r=Tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},SI(t))TI(e,n);else if(n=eI(t,e,n,r),n!==null){var i=pt();nn(n,t,r,i),kI(n,e,r)}}function LN(t,e,n){var r=Tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(SI(t))TI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,rn(a,o)){var u=e.interleaved;u===null?(i.next=i,gm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=eI(t,e,i,r),n!==null&&(i=pt(),nn(n,t,r,i),kI(n,e,r))}}function SI(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function TI(t,e){ua=hc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nm(t,n)}}var dc={readContext:Wt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},MN={readContext:Wt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:Sv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,yI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ON.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:Ev,useDebugValue:km,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=Ev(!1),e=t[0];return t=bN.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=cn();if(de){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Be===null)throw Error(T(349));xi&30||lI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sv(hI.bind(null,r,s,t),[t]),r.flags|=2048,$a(9,cI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=Be.identifierPrefix;if(de){var n=Ln,r=On;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=La++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$N={readContext:Wt,useCallback:wI,useContext:Wt,useEffect:Tm,useImperativeHandle:vI,useInsertionEffect:mI,useLayoutEffect:gI,useMemo:_I,useReducer:Td,useRef:pI,useState:function(){return Td(Ma)},useDebugValue:km,useDeferredValue:function(t){var e=Kt();return II(e,be.memoizedState,t)},useTransition:function(){var t=Td(Ma)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:aI,useSyncExternalStore:uI,useId:EI,unstable_isNewReconciler:!1},FN={readContext:Wt,useCallback:wI,useContext:Wt,useEffect:Tm,useImperativeHandle:vI,useInsertionEffect:mI,useLayoutEffect:gI,useMemo:_I,useReducer:kd,useRef:pI,useState:function(){return kd(Ma)},useDebugValue:km,useDeferredValue:function(t){var e=Kt();return be===null?e.memoizedState=t:II(e,be.memoizedState,t)},useTransition:function(){var t=kd(Ma)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:aI,useSyncExternalStore:uI,useId:EI,unstable_isNewReconciler:!1};function js(t,e){try{var n="",r=e;do n+=dC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Cd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UN=typeof WeakMap=="function"?WeakMap:Map;function CI(t,e,n){n=Vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pc||(pc=!0,Wf=r),Mf(t,e)},n}function NI(t,e,n){n=Vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mf(t,e),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new UN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ZN.bind(null,t,e,n),e.then(t,t))}function kv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vn(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var VN=Yn.ReactCurrentOwner,Et=!1;function ct(t,e,n,r){e.child=t===null?sI(e,null,n,r):Bs(e,t.child,n,r)}function Nv(t,e,n,r,i){n=n.render;var s=e.ref;return As(e,i),r=Em(t,e,n,r,s,i),n=Sm(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(de&&n&&cm(e),e.flags|=1,ct(t,e,r,i),e.child)}function Av(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,AI(t,e,s,r,i)):(t=Ll(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xa,n(o,r)&&t.ref===e.ref)return Wn(t,e,i)}return e.flags|=1,t=kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function AI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xa(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Wn(t,e,i)}return $f(t,e,n,r,i)}function xI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(_s,Dt),Dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(_s,Dt),Dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(_s,Dt),Dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ie(_s,Dt),Dt|=r;return ct(t,e,i,n),e.child}function DI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $f(t,e,n,r,i){var s=Nt(n)?Ni:lt.current;return s=Us(e,s),As(e,i),n=Em(t,e,n,r,s,i),r=Sm(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(de&&r&&cm(e),e.flags|=1,ct(t,e,n,i),e.child)}function xv(t,e,n,r,i){if(Nt(n)){var s=!0;ic(e)}else s=!1;if(As(e,i),e.stateNode===null)Pl(t,e),rI(e,n,r),Lf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Wt(l):(l=Nt(n)?Ni:lt.current,l=Us(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&_v(e,o,r,l),ur=!1;var d=e.memoizedState;o.state=d,lc(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Ct.current||ur?(typeof c=="function"&&(Of(e,n,c,r),u=e.memoizedState),(a=ur||wv(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tI(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Xt(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Wt(u):(u=Nt(n)?Ni:lt.current,u=Us(e,u));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&_v(e,o,r,u),ur=!1,d=e.memoizedState,o.state=d,lc(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Ct.current||ur?(typeof p=="function"&&(Of(e,n,p,r),y=e.memoizedState),(l=ur||wv(e,n,l,r,d,y,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Ff(t,e,n,r,s,i)}function Ff(t,e,n,r,i,s){DI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&pv(e,n,!1),Wn(t,e,s);r=e.stateNode,VN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,a,s)):ct(t,e,a,s),e.memoizedState=r.state,i&&pv(e,n,!0),e.child}function RI(t){var e=t.stateNode;e.pendingContext?fv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fv(t,e.context,!1),vm(t,e.containerInfo)}function Dv(t,e,n,r,i){return Vs(),dm(i),e.flags|=256,ct(t,e,n,r),e.child}var Uf={dehydrated:null,treeContext:null,retryLane:0};function Vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function PI(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ie(me,i&1),t===null)return Pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rh(o,r,0,null),t=Ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vf(n),e.memoizedState=Uf,t):Cm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return BN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=kr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=kr(a,s):(s=Ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Uf,r}return s=t.child,t=s.sibling,r=kr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cm(t,e){return e=rh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,r){return r!==null&&dm(r),Bs(e,t.child,null,n),t=Cm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function BN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Cd(Error(T(422))),al(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=rh({mode:"visible",children:r.children},i,0,null),s=Ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bs(e,t.child,null,o),e.child.memoizedState=Vf(o),e.memoizedState=Uf,s);if(!(e.mode&1))return al(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=Cd(s,r,void 0),al(t,e,o,r)}if(a=(o&t.childLanes)!==0,Et||a){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gn(t,i),nn(r,t,i,-1))}return Pm(),r=Cd(Error(T(421))),al(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=Ir(i.nextSibling),Ot=e,de=!0,Zt=null,t!==null&&(Vt[Bt++]=On,Vt[Bt++]=Ln,Vt[Bt++]=Ai,On=t.id,Ln=t.overflow,Ai=e),e=Cm(e,r.children),e.flags|=4096,e)}function Rv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bf(t.return,e,n)}function Nd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function bI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rv(t,n,e);else if(t.tag===19)Rv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Nd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Nd(e,!0,n,null,s);break;case"together":Nd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Di|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zN(t,e,n){switch(e.tag){case 3:RI(e),Vs();break;case 5:oI(e);break;case 1:Nt(e.type)&&ic(e);break;case 4:vm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ie(ac,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?PI(t,e,n):(ie(me,me.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);ie(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return bI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,xI(t,e,n)}return Wn(t,e,n)}var OI,Bf,LI,MI;OI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bf=function(){};LI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pi(Tn.current);var s=null;switch(n){case"input":i=lf(t,i),r=lf(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=df(t,i),r=df(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nc)}pf(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ea.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&oe("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};MI=function(t,e,n,r){n!==r&&(e.flags|=4)};function bo(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function jN(t,e,n){var r=e.pendingProps;switch(hm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return Nt(e.type)&&rc(),it(e),null;case 3:return r=e.stateNode,zs(),le(Ct),le(lt),_m(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zt!==null&&(Qf(Zt),Zt=null))),Bf(t,e),it(e),null;case 5:wm(e);var i=pi(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)LI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return it(e),null}if(t=pi(Tn.current),sl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dn]=e,r[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<Qo.length;i++)oe(Qo[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Vy(r,s),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},oe("invalid",r);break;case"textarea":zy(r,s),oe("invalid",r)}pf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&il(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&il(r.textContent,a,t),i=["children",""+a]):Ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":Yu(r),By(r,s,!0);break;case"textarea":Yu(r),jy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=l_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[Pa]=r,OI(t,e,!1,!1),e.stateNode=t;e:{switch(o=mf(n,r),n){case"dialog":oe("cancel",t),oe("close",t),i=r;break;case"iframe":case"object":case"embed":oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qo.length;i++)oe(Qo[i],t);i=r;break;case"source":oe("error",t),i=r;break;case"img":case"image":case"link":oe("error",t),oe("load",t),i=r;break;case"details":oe("toggle",t),i=r;break;case"input":Vy(t,r),i=lf(t,r),oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),oe("invalid",t);break;case"textarea":zy(t,r),i=df(t,r),oe("invalid",t);break;default:i=r}pf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?d_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&c_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Sa(t,u):typeof u=="number"&&Sa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ea.hasOwnProperty(s)?u!=null&&s==="onScroll"&&oe("scroll",t):u!=null&&Yp(t,s,u,o))}switch(n){case"input":Yu(t),By(t,r,!1);break;case"textarea":Yu(t),jy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)MI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=pi(Oa.current),pi(Tn.current),sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(s=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return it(e),null;case 13:if(le(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&Pt!==null&&e.mode&1&&!(e.flags&128))Z_(),Vs(),e.flags|=98560,s=!1;else if(s=sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[dn]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),s=!1}else Zt!==null&&(Qf(Zt),Zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Oe===0&&(Oe=3):Pm())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return zs(),Bf(t,e),t===null&&Da(e.stateNode.containerInfo),it(e),null;case 10:return mm(e.type._context),it(e),null;case 17:return Nt(e.type)&&rc(),it(e),null;case 19:if(le(me),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bo(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cc(t),o!==null){for(e.flags|=128,bo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>qs&&(e.flags|=128,r=!0,bo(s,!1),e.lanes=4194304)}else{if(!r)if(t=cc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return it(e),null}else 2*Te()-s.renderingStartTime>qs&&n!==1073741824&&(e.flags|=128,r=!0,bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=me.current,ie(me,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return Rm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Dt&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function qN(t,e){switch(hm(e),e.tag){case 1:return Nt(e.type)&&rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),le(Ct),le(lt),_m(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wm(e),null;case 13:if(le(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(me),null;case 4:return zs(),null;case 10:return mm(e.type._context),null;case 22:case 23:return Rm(),null;case 24:return null;default:return null}}var ul=!1,ot=!1,GN=typeof WeakSet=="function"?WeakSet:Set,O=null;function ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function zf(t,e,n){try{n()}catch(r){we(t,e,r)}}var Pv=!1;function WN(t,e){if(kf=Zl,t=V_(),lm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cf={focusedElem:t,selectionRange:n},Zl=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,N=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Xt(e.type,w),N);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(I){we(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return y=Pv,Pv=!1,y}function la(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zf(e,n,s)}i=i.next}while(i!==r)}}function th(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $I(t){var e=t.alternate;e!==null&&(t.alternate=null,$I(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[Pa],delete e[xf],delete e[AN],delete e[xN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function FI(t){return t.tag===5||t.tag===3||t.tag===4}function bv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||FI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nc));else if(r!==4&&(t=t.child,t!==null))for(qf(t,e,n),t=t.sibling;t!==null;)qf(t,e,n),t=t.sibling}function Gf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}var Ke=null,Jt=!1;function nr(t,e,n){for(n=n.child;n!==null;)UI(t,e,n),n=n.sibling}function UI(t,e,n){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Kc,n)}catch{}switch(n.tag){case 5:ot||ws(n,e);case 6:var r=Ke,i=Jt;Ke=null,nr(t,e,n),Ke=r,Jt=i,Ke!==null&&(Jt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Jt?(t=Ke,n=n.stateNode,t.nodeType===8?_d(t.parentNode,n):t.nodeType===1&&_d(t,n),Na(t)):_d(Ke,n.stateNode));break;case 4:r=Ke,i=Jt,Ke=n.stateNode.containerInfo,Jt=!0,nr(t,e,n),Ke=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zf(n,e,o),i=i.next}while(i!==r)}nr(t,e,n);break;case 1:if(!ot&&(ws(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,e,a)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,nr(t,e,n),ot=r):nr(t,e,n);break;default:nr(t,e,n)}}function Ov(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new GN),e.forEach(function(r){var i=tA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ke=a.stateNode,Jt=!1;break e;case 3:Ke=a.stateNode.containerInfo,Jt=!0;break e;case 4:Ke=a.stateNode.containerInfo,Jt=!0;break e}a=a.return}if(Ke===null)throw Error(T(160));UI(s,o,i),Ke=null,Jt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){we(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)VI(e,t),e=e.sibling}function VI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yt(e,t),ln(t),r&4){try{la(3,t,t.return),th(3,t)}catch(w){we(t,t.return,w)}try{la(5,t,t.return)}catch(w){we(t,t.return,w)}}break;case 1:Yt(e,t),ln(t),r&512&&n!==null&&ws(n,n.return);break;case 5:if(Yt(e,t),ln(t),r&512&&n!==null&&ws(n,n.return),t.flags&32){var i=t.stateNode;try{Sa(i,"")}catch(w){we(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&a_(i,s),mf(a,o);var l=mf(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?d_(i,h):c==="dangerouslySetInnerHTML"?c_(i,h):c==="children"?Sa(i,h):Yp(i,c,h,l)}switch(a){case"input":cf(i,s);break;case"textarea":u_(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ts(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ts(i,!!s.multiple,s.defaultValue,!0):Ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[Pa]=s}catch(w){we(t,t.return,w)}}break;case 6:if(Yt(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){we(t,t.return,w)}}break;case 3:if(Yt(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(w){we(t,t.return,w)}break;case 4:Yt(e,t),ln(t);break;case 13:Yt(e,t),ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xm=Te())),r&4&&Ov(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(l=ot)||c,Yt(e,t),ot=l):Yt(e,t),ln(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(h=O=c;O!==null;){switch(d=O,p=d.child,d.tag){case 0:case 11:case 14:case 15:la(4,d,d.return);break;case 1:ws(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){we(r,n,w)}}break;case 5:ws(d,d.return);break;case 22:if(d.memoizedState!==null){Mv(h);continue}}p!==null?(p.return=d,O=p):Mv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=h_("display",o))}catch(w){we(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(w){we(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yt(e,t),ln(t),r&4&&Ov(t);break;case 21:break;default:Yt(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(FI(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sa(i,""),r.flags&=-33);var s=bv(t);Gf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=bv(t);qf(t,a,o);break;default:throw Error(T(161))}}catch(u){we(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KN(t,e,n){O=t,BI(t)}function BI(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ul;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ot;a=ul;var l=ot;if(ul=o,(ot=u)&&!l)for(O=i;O!==null;)o=O,u=o.child,o.tag===22&&o.memoizedState!==null?$v(i):u!==null?(u.return=o,O=u):$v(i);for(;s!==null;)O=s,BI(s),s=s.sibling;O=i,ul=a,ot=l}Lv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Lv(t)}}function Lv(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||th(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Na(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}ot||e.flags&512&&jf(e)}catch(d){we(e,e.return,d)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Mv(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function $v(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{th(4,e)}catch(u){we(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){we(e,i,u)}}var s=e.return;try{jf(e)}catch(u){we(e,s,u)}break;case 5:var o=e.return;try{jf(e)}catch(u){we(e,o,u)}}}catch(u){we(e,e.return,u)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var HN=Math.ceil,fc=Yn.ReactCurrentDispatcher,Nm=Yn.ReactCurrentOwner,Gt=Yn.ReactCurrentBatchConfig,J=0,Be=null,Re=null,Xe=0,Dt=0,_s=qr(0),Oe=0,Fa=null,Di=0,nh=0,Am=0,ca=null,It=null,xm=0,qs=1/0,Pn=null,pc=!1,Wf=null,Sr=null,ll=!1,pr=null,mc=0,ha=0,Kf=null,bl=-1,Ol=0;function pt(){return J&6?Te():bl!==-1?bl:bl=Te()}function Tr(t){return t.mode&1?J&2&&Xe!==0?Xe&-Xe:RN.transition!==null?(Ol===0&&(Ol=T_()),Ol):(t=te,t!==0||(t=window.event,t=t===void 0?16:R_(t.type)),t):1}function nn(t,e,n,r){if(50<ha)throw ha=0,Kf=null,Error(T(185));mu(t,n,r),(!(J&2)||t!==Be)&&(t===Be&&(!(J&2)&&(nh|=n),Oe===4&&cr(t,Xe)),At(t,r),n===1&&J===0&&!(e.mode&1)&&(qs=Te()+500,Jc&&Gr()))}function At(t,e){var n=t.callbackNode;RC(t,e);var r=Jl(t,t===Be?Xe:0);if(r===0)n!==null&&Wy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wy(n),e===1)t.tag===0?DN(Fv.bind(null,t)):Y_(Fv.bind(null,t)),CN(function(){!(J&6)&&Gr()}),n=null;else{switch(k_(r)){case 1:n=tm;break;case 4:n=E_;break;case 16:n=Xl;break;case 536870912:n=S_;break;default:n=Xl}n=QI(n,zI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zI(t,e){if(bl=-1,Ol=0,J&6)throw Error(T(327));var n=t.callbackNode;if(xs()&&t.callbackNode!==n)return null;var r=Jl(t,t===Be?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gc(t,r);else{e=r;var i=J;J|=2;var s=qI();(Be!==t||Xe!==e)&&(Pn=null,qs=Te()+500,_i(t,e));do try{XN();break}catch(a){jI(t,a)}while(1);pm(),fc.current=s,J=i,Re!==null?e=0:(Be=null,Xe=0,e=Oe)}if(e!==0){if(e===2&&(i=_f(t),i!==0&&(r=i,e=Hf(t,i))),e===1)throw n=Fa,_i(t,0),cr(t,r),At(t,Te()),n;if(e===6)cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!QN(i)&&(e=gc(t,r),e===2&&(s=_f(t),s!==0&&(r=s,e=Hf(t,s))),e===1))throw n=Fa,_i(t,0),cr(t,r),At(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:ii(t,It,Pn);break;case 3:if(cr(t,r),(r&130023424)===r&&(e=xm+500-Te(),10<e)){if(Jl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Af(ii.bind(null,t,It,Pn),e);break}ii(t,It,Pn);break;case 4:if(cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HN(r/1960))-r,10<r){t.timeoutHandle=Af(ii.bind(null,t,It,Pn),r);break}ii(t,It,Pn);break;case 5:ii(t,It,Pn);break;default:throw Error(T(329))}}}return At(t,Te()),t.callbackNode===n?zI.bind(null,t):null}function Hf(t,e){var n=ca;return t.current.memoizedState.isDehydrated&&(_i(t,e).flags|=256),t=gc(t,e),t!==2&&(e=It,It=n,e!==null&&Qf(e)),t}function Qf(t){It===null?It=t:It.push.apply(It,t)}function QN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~Am,e&=~nh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function Fv(t){if(J&6)throw Error(T(327));xs();var e=Jl(t,0);if(!(e&1))return At(t,Te()),null;var n=gc(t,e);if(t.tag!==0&&n===2){var r=_f(t);r!==0&&(e=r,n=Hf(t,r))}if(n===1)throw n=Fa,_i(t,0),cr(t,e),At(t,Te()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ii(t,It,Pn),At(t,Te()),null}function Dm(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(qs=Te()+500,Jc&&Gr())}}function Ri(t){pr!==null&&pr.tag===0&&!(J&6)&&xs();var e=J;J|=1;var n=Gt.transition,r=te;try{if(Gt.transition=null,te=1,t)return t()}finally{te=r,Gt.transition=n,J=e,!(J&6)&&Gr()}}function Rm(){Dt=_s.current,le(_s)}function _i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kN(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(hm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rc();break;case 3:zs(),le(Ct),le(lt),_m();break;case 5:wm(r);break;case 4:zs();break;case 13:le(me);break;case 19:le(me);break;case 10:mm(r.type._context);break;case 22:case 23:Rm()}n=n.return}if(Be=t,Re=t=kr(t.current,null),Xe=Dt=e,Oe=0,Fa=null,Am=nh=Di=0,It=ca=null,fi!==null){for(e=0;e<fi.length;e++)if(n=fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fi=null}return t}function jI(t,e){do{var n=Re;try{if(pm(),Dl.current=dc,hc){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hc=!1}if(xi=0,Ue=be=ge=null,ua=!1,La=0,Nm.current=null,n===null||n.return===null){Oe=1,Fa=e,Re=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Xe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=kv(o);if(p!==null){p.flags&=-257,Cv(p,o,a,s,e),p.mode&1&&Tv(s,l,e),e=p,u=l;var y=e.updateQueue;if(y===null){var w=new Set;w.add(u),e.updateQueue=w}else y.add(u);break e}else{if(!(e&1)){Tv(s,l,e),Pm();break e}u=Error(T(426))}}else if(de&&a.mode&1){var N=kv(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Cv(N,o,a,s,e),dm(js(u,a));break e}}s=u=js(u,a),Oe!==4&&(Oe=2),ca===null?ca=[s]:ca.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=CI(s,u,e);yv(s,m);break e;case 1:a=u;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Sr===null||!Sr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=NI(s,a,e);yv(s,I);break e}}s=s.return}while(s!==null)}WI(n)}catch(C){e=C,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(1)}function qI(){var t=fc.current;return fc.current=dc,t===null?dc:t}function Pm(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Be===null||!(Di&268435455)&&!(nh&268435455)||cr(Be,Xe)}function gc(t,e){var n=J;J|=2;var r=qI();(Be!==t||Xe!==e)&&(Pn=null,_i(t,e));do try{YN();break}catch(i){jI(t,i)}while(1);if(pm(),J=n,fc.current=r,Re!==null)throw Error(T(261));return Be=null,Xe=0,Oe}function YN(){for(;Re!==null;)GI(Re)}function XN(){for(;Re!==null&&!EC();)GI(Re)}function GI(t){var e=HI(t.alternate,t,Dt);t.memoizedProps=t.pendingProps,e===null?WI(t):Re=e,Nm.current=null}function WI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qN(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Re=null;return}}else if(n=jN(n,e,Dt),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);Oe===0&&(Oe=5)}function ii(t,e,n){var r=te,i=Gt.transition;try{Gt.transition=null,te=1,JN(t,e,n,r)}finally{Gt.transition=i,te=r}return null}function JN(t,e,n,r){do xs();while(pr!==null);if(J&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(PC(t,s),t===Be&&(Re=Be=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,QI(Xl,function(){return xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gt.transition,Gt.transition=null;var o=te;te=1;var a=J;J|=4,Nm.current=null,WN(t,n),VI(n,t),vN(Cf),Zl=!!kf,Cf=kf=null,t.current=n,KN(n),SC(),J=a,te=o,Gt.transition=s}else t.current=n;if(ll&&(ll=!1,pr=t,mc=i),s=t.pendingLanes,s===0&&(Sr=null),CC(n.stateNode),At(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pc)throw pc=!1,t=Wf,Wf=null,t;return mc&1&&t.tag!==0&&xs(),s=t.pendingLanes,s&1?t===Kf?ha++:(ha=0,Kf=t):ha=0,Gr(),null}function xs(){if(pr!==null){var t=k_(mc),e=Gt.transition,n=te;try{if(Gt.transition=null,te=16>t?16:t,pr===null)var r=!1;else{if(t=pr,pr=null,mc=0,J&6)throw Error(T(331));var i=J;for(J|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(O=l;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:la(8,c,s)}var h=c.child;if(h!==null)h.return=c,O=h;else for(;O!==null;){c=O;var d=c.sibling,p=c.return;if($I(c),c===l){O=null;break}if(d!==null){d.return=p,O=d;break}O=p}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:la(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var f=t.current;for(O=f;O!==null;){o=O;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,O=g;else e:for(o=f;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:th(9,a)}}catch(C){we(a,a.return,C)}if(a===o){O=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,O=I;break e}O=a.return}}if(J=i,Gr(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Kc,t)}catch{}r=!0}return r}finally{te=n,Gt.transition=e}}return!1}function Uv(t,e,n){e=js(n,e),e=CI(t,e,1),t=Er(t,e,1),e=pt(),t!==null&&(mu(t,1,e),At(t,e))}function we(t,e,n){if(t.tag===3)Uv(t,t,n);else for(;e!==null;){if(e.tag===3){Uv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){t=js(n,t),t=NI(e,t,1),e=Er(e,t,1),t=pt(),e!==null&&(mu(e,1,t),At(e,t));break}}e=e.return}}function ZN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=pt(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Xe&n)===n&&(Oe===4||Oe===3&&(Xe&130023424)===Xe&&500>Te()-xm?_i(t,0):Am|=n),At(t,e)}function KI(t,e){e===0&&(t.mode&1?(e=Zu,Zu<<=1,!(Zu&130023424)&&(Zu=4194304)):e=1);var n=pt();t=Gn(t,e),t!==null&&(mu(t,e,n),At(t,n))}function eA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),KI(t,n)}function tA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),KI(t,n)}var HI;HI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,zN(t,e,n);Et=!!(t.flags&131072)}else Et=!1,de&&e.flags&1048576&&X_(e,oc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pl(t,e),t=e.pendingProps;var i=Us(e,lt.current);As(e,n),i=Em(null,e,r,t,i,n);var s=Sm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,ic(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ym(e),i.updater=Zc,e.stateNode=i,i._reactInternals=e,Lf(e,r,t,n),e=Ff(null,e,r,!0,s,n)):(e.tag=0,de&&s&&cm(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rA(r),t=Xt(r,t),i){case 0:e=$f(null,e,r,t,n);break e;case 1:e=xv(null,e,r,t,n);break e;case 11:e=Nv(null,e,r,t,n);break e;case 14:e=Av(null,e,r,Xt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),$f(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),xv(t,e,r,i,n);case 3:e:{if(RI(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,tI(t,e),lc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=js(Error(T(423)),e),e=Dv(t,e,r,n,i);break e}else if(r!==i){i=js(Error(T(424)),e),e=Dv(t,e,r,n,i);break e}else for(Pt=Ir(e.stateNode.containerInfo.firstChild),Ot=e,de=!0,Zt=null,n=sI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),r===i){e=Wn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return oI(e),t===null&&Pf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Nf(r,i)?o=null:s!==null&&Nf(r,s)&&(e.flags|=32),DI(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Pf(e),null;case 13:return PI(t,e,n);case 4:return vm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bs(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Nv(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ie(ac,r._currentValue),r._currentValue=o,s!==null)if(rn(s.value,o)){if(s.children===i.children&&!Ct.current){e=Wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Vn(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),bf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,As(e,n),i=Wt(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Xt(r,e.pendingProps),i=Xt(r.type,i),Av(t,e,r,i,n);case 15:return AI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Pl(t,e),e.tag=1,Nt(r)?(t=!0,ic(e)):t=!1,As(e,n),rI(e,r,i),Lf(e,r,i,n),Ff(null,e,r,!0,t,n);case 19:return bI(t,e,n);case 22:return xI(t,e,n)}throw Error(T(156,e.tag))};function QI(t,e){return I_(t,e)}function nA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new nA(t,e,n,r)}function bm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rA(t){if(typeof t=="function")return bm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jp)return 11;if(t===Zp)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cs:return Ii(n.children,i,s,e);case Xp:o=8,i|=8;break;case sf:return t=jt(12,n,e,i|2),t.elementType=sf,t.lanes=s,t;case of:return t=jt(13,n,e,i),t.elementType=of,t.lanes=s,t;case af:return t=jt(19,n,e,i),t.elementType=af,t.lanes=s,t;case i_:return rh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n_:o=10;break e;case r_:o=9;break e;case Jp:o=11;break e;case Zp:o=14;break e;case ar:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ii(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function rh(t,e,n,r){return t=jt(22,t,r,e),t.elementType=i_,t.lanes=n,t.stateNode={isHidden:!1},t}function Ad(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function xd(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ld(0),this.expirationTimes=ld(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ld(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Om(t,e,n,r,i,s,o,a,u){return t=new iA(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ym(s),t}function sA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function YI(t){if(!t)return xr;t=t._reactInternals;e:{if(Wi(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(Nt(n))return Q_(t,n,e)}return e}function XI(t,e,n,r,i,s,o,a,u){return t=Om(n,r,!0,t,i,s,o,a,u),t.context=YI(null),n=t.current,r=pt(),i=Tr(n),s=Vn(r,i),s.callback=e??null,Er(n,s,i),t.current.lanes=i,mu(t,i,r),At(t,r),t}function ih(t,e,n,r){var i=e.current,s=pt(),o=Tr(i);return n=YI(n),e.context===null?e.context=n:e.pendingContext=n,e=Vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(i,e,o),t!==null&&(nn(t,i,o,s),xl(t,i,o)),o}function yc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lm(t,e){Vv(t,e),(t=t.alternate)&&Vv(t,e)}function oA(){return null}var JI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mm(t){this._internalRoot=t}sh.prototype.render=Mm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));ih(t,e,null,null)};sh.prototype.unmount=Mm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ri(function(){ih(null,t,null,null)}),e[qn]=null}};function sh(t){this._internalRoot=t}sh.prototype.unstable_scheduleHydration=function(t){if(t){var e=A_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&D_(t)}};function $m(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bv(){}function aA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=yc(o);s.call(l)}}var o=XI(e,r,t,0,null,!1,!1,"",Bv);return t._reactRootContainer=o,t[qn]=o.current,Da(t.nodeType===8?t.parentNode:t),Ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=yc(u);a.call(l)}}var u=Om(t,0,!1,null,null,!1,!1,"",Bv);return t._reactRootContainer=u,t[qn]=u.current,Da(t.nodeType===8?t.parentNode:t),Ri(function(){ih(e,u,n,r)}),u}function ah(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=yc(o);a.call(u)}}ih(e,o,t,i)}else o=aA(n,e,t,i,r);return yc(o)}C_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(nm(e,n|1),At(e,Te()),!(J&6)&&(qs=Te()+500,Gr()))}break;case 13:Ri(function(){var r=Gn(t,1);if(r!==null){var i=pt();nn(r,t,1,i)}}),Lm(t,1)}};rm=function(t){if(t.tag===13){var e=Gn(t,134217728);if(e!==null){var n=pt();nn(e,t,134217728,n)}Lm(t,134217728)}};N_=function(t){if(t.tag===13){var e=Tr(t),n=Gn(t,e);if(n!==null){var r=pt();nn(n,t,e,r)}Lm(t,e)}};A_=function(){return te};x_=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};yf=function(t,e,n){switch(e){case"input":if(cf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xc(r);if(!i)throw Error(T(90));o_(r),cf(r,i)}}}break;case"textarea":u_(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};m_=Dm;g_=Ri;var uA={usingClientEntryPoint:!1,Events:[yu,ps,Xc,f_,p_,Dm]},Oo={findFiberByHostInstance:di,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lA={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w_(t),t===null?null:t.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||oA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Kc=cl.inject(lA),Sn=cl}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uA;Ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$m(e))throw Error(T(200));return sA(t,e,null,n)};Ft.createRoot=function(t,e){if(!$m(t))throw Error(T(299));var n=!1,r="",i=JI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Om(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,Da(t.nodeType===8?t.parentNode:t),new Mm(e)};Ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=w_(e),t=t===null?null:t.stateNode,t};Ft.flushSync=function(t){return Ri(t)};Ft.hydrate=function(t,e,n){if(!oh(e))throw Error(T(200));return ah(null,t,e,!0,n)};Ft.hydrateRoot=function(t,e,n){if(!$m(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=JI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=XI(e,null,t,1,n??null,i,!1,s,o),t[qn]=e.current,Da(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sh(e)};Ft.render=function(t,e,n){if(!oh(e))throw Error(T(200));return ah(null,t,e,!1,n)};Ft.unmountComponentAtNode=function(t){if(!oh(t))throw Error(T(40));return t._reactRootContainer?(Ri(function(){ah(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};Ft.unstable_batchedUpdates=Dm;Ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!oh(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return ah(t,e,n,!1,r)};Ft.version="18.2.0-next-9e3b772b8-20220608";function ZI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ZI)}catch(t){console.error(t)}}ZI(),X0.exports=Ft;var cA=X0.exports,zv=cA;nf.createRoot=zv.createRoot,nf.hydrateRoot=zv.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},t1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;u||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(e1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new dA;const d=s<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fA=function(t){const e=e1(t);return t1.encodeByteArray(e,!0)},vc=function(t){return fA(t).replace(/\./g,"")},n1=function(t){try{return t1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function wc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pA(n)||(t[n]=wc(t[n],e[n]));return t}function pA(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=()=>mA().__FIREBASE_DEFAULTS__,yA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&n1(t[1]);return e&&JSON.parse(e)},Fm=()=>{try{return gA()||yA()||vA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},r1=()=>{var t;return(t=Fm())===null||t===void 0?void 0:t.config},wA=t=>{var e;return(e=Fm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[vc(JSON.stringify(n)),vc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function EA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function Um(){var t;const e=(t=Fm())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SA(){return typeof self=="object"&&self.self===self}function i1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function s1(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TA(){return!Um()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ua(){try{return typeof indexedDB=="object"}catch{return!1}}function kA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="FirebaseError";class mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CA,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ki.prototype.create)}}class Ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?NA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mt(i,a,r)}}function NA(t,e){return t.replace(AA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const AA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qv(s)&&qv(o)){if(!Yf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Is(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Yo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function o1(t,e){const n=new DA(t,e);return n.subscribe.bind(n)}class DA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Dd),i.error===void 0&&(i.error=Dd),i.complete===void 0&&(i.complete=Dd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _A;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OA(e))try{this.getOrInitializeService({instanceIdentifier:si})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=si){return this.instances.has(e)}getOptions(e=si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=si){return this.component?this.component.multipleInstances?e:si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bA(t){return t===si?void 0:t}function OA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=[];var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const a1={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},MA=Y.INFO,$A={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},FA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$A[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uh{constructor(e){this.name=e,this._logLevel=MA,this._logHandler=FA,this._userLogHandler=null,Bm.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?a1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}function UA(t){Bm.forEach(e=>{e.setLogLevel(t)})}function VA(t,e){for(const n of Bm){let r=null;e&&e.level&&(r=a1[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:Y[s].toLowerCase(),message:a,args:o,type:i.name})}}}const BA=(t,e)=>e.some(n=>t instanceof n);let Gv,Wv;function zA(){return Gv||(Gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jA(){return Wv||(Wv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u1=new WeakMap,Xf=new WeakMap,l1=new WeakMap,Rd=new WeakMap,zm=new WeakMap;function qA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&u1.set(n,t)}).catch(()=>{}),zm.set(e,t),e}function GA(t){if(Xf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xf.set(t,e)}let Jf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||l1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WA(t){Jf=t(Jf)}function KA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pd(this),e,...n);return l1.set(r,e.sort?e.sort():[e]),Cr(r)}:jA().includes(t)?function(...e){return t.apply(Pd(this),e),Cr(u1.get(this))}:function(...e){return Cr(t.apply(Pd(this),e))}}function HA(t){return typeof t=="function"?KA(t):(t instanceof IDBTransaction&&GA(t),BA(t,zA())?new Proxy(t,Jf):t)}function Cr(t){if(t instanceof IDBRequest)return qA(t);if(Rd.has(t))return Rd.get(t);const e=HA(t);return e!==t&&(Rd.set(t,e),zm.set(e,t)),e}const Pd=t=>zm.get(t);function QA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Cr(o.result),u.oldVersion,u.newVersion,Cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const YA=["get","getKey","getAll","getAllKeys","count"],XA=["put","add","delete","clear"],bd=new Map;function Kv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bd.get(e))return bd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||YA.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return bd.set(e,s),s}WA(t=>({...t,get:(e,n,r)=>Kv(e,n)||t.get(e,n,r),has:(e,n)=>!!Kv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zf="@firebase/app",Hv="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new uh("@firebase/app"),ex="@firebase/app-compat",tx="@firebase/analytics-compat",nx="@firebase/analytics",rx="@firebase/app-check-compat",ix="@firebase/app-check",sx="@firebase/auth",ox="@firebase/auth-compat",ax="@firebase/database",ux="@firebase/database-compat",lx="@firebase/functions",cx="@firebase/functions-compat",hx="@firebase/installations",dx="@firebase/installations-compat",fx="@firebase/messaging",px="@firebase/messaging-compat",mx="@firebase/performance",gx="@firebase/performance-compat",yx="@firebase/remote-config",vx="@firebase/remote-config-compat",wx="@firebase/storage",_x="@firebase/storage-compat",Ix="@firebase/firestore",Ex="@firebase/firestore-compat",Sx="firebase",Tx="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]",kx={[Zf]:"fire-core",[ex]:"fire-core-compat",[nx]:"fire-analytics",[tx]:"fire-analytics-compat",[ix]:"fire-app-check",[rx]:"fire-app-check-compat",[sx]:"fire-auth",[ox]:"fire-auth-compat",[ax]:"fire-rtdb",[ux]:"fire-rtdb-compat",[lx]:"fire-fn",[cx]:"fire-fn-compat",[hx]:"fire-iid",[dx]:"fire-iid-compat",[fx]:"fire-fcm",[px]:"fire-fcm-compat",[mx]:"fire-perf",[gx]:"fire-perf-compat",[yx]:"fire-rc",[vx]:"fire-rc-compat",[wx]:"fire-gcs",[_x]:"fire-gcs-compat",[Ix]:"fire-fst",[Ex]:"fire-fst-compat","fire-js":"fire-js",[Sx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Map,Va=new Map;function _c(t,e){try{t.container.addComponent(e)}catch(n){Pi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function c1(t,e){t.container.addOrOverwriteComponent(e)}function Pr(t){const e=t.name;if(Va.has(e))return Pi.debug(`There were multiple attempts to register component ${e}.`),!1;Va.set(e,t);for(const n of Rr.values())_c(n,t);return!0}function h1(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Cx(t,e,n=Dr){h1(t,e).clearInstance(n)}function Nx(){Va.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bn=new Ki("app","Firebase",Ax);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xx=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=Tx;function jm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Bn.create("bad-app-name",{appName:String(i)});if(n||(n=r1()),!n)throw Bn.create("no-options");const s=Rr.get(i);if(s){if(Yf(n,s.options)&&Yf(r,s.config))return s;throw Bn.create("duplicate-app",{appName:i})}const o=new LA(i);for(const u of Va.values())o.addComponent(u);const a=new xx(n,r,o);return Rr.set(i,a),a}function Dx(t=Dr){const e=Rr.get(t);if(!e&&t===Dr&&r1())return jm();if(!e)throw Bn.create("no-app",{appName:t});return e}function Rx(){return Array.from(Rr.values())}async function d1(t){const e=t.name;Rr.has(e)&&(Rr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function kn(t,e,n){var r;let i=(r=kx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pi.warn(a.join(" "));return}Pr(new An(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function f1(t,e){if(t!==null&&typeof t!="function")throw Bn.create("invalid-log-argument");VA(t,e)}function p1(t){UA(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px="firebase-heartbeat-database",bx=1,Ba="firebase-heartbeat-store";let Od=null;function m1(){return Od||(Od=QA(Px,bx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ba)}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),Od}async function Ox(t){try{return await(await m1()).transaction(Ba).objectStore(Ba).get(g1(t))}catch(e){if(e instanceof mt)Pi.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pi.warn(n.message)}}}async function Qv(t,e){try{const r=(await m1()).transaction(Ba,"readwrite");await r.objectStore(Ba).put(e,g1(t)),await r.done}catch(n){if(n instanceof mt)Pi.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pi.warn(r.message)}}}function g1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=1024,Mx=30*24*60*60*1e3;class $x{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ux(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Mx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yv(),{heartbeatsToSend:n,unsentEntries:r}=Fx(this._heartbeatsCache.heartbeats),i=vc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Yv(){return new Date().toISOString().substring(0,10)}function Fx(t,e=Lx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ux{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ua()?kA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ox(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xv(t){return vc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t){Pr(new An("platform-logger",e=>new JA(e),"PRIVATE")),Pr(new An("heartbeat",e=>new $x(e),"PRIVATE")),kn(Zf,Hv,t),kn(Zf,Hv,"esm2017"),kn("fire-js","")}Vx("");const Bx=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:mt,SDK_VERSION:Wr,_DEFAULT_ENTRY_NAME:Dr,_addComponent:_c,_addOrOverwriteComponent:c1,_apps:Rr,_clearComponents:Nx,_components:Va,_getProvider:h1,_registerComponent:Pr,_removeServiceInstance:Cx,deleteApp:d1,getApp:Dx,getApps:Rx,initializeApp:jm,onLog:f1,registerVersion:kn,setLogLevel:p1},Symbol.toStringTag,{value:"Module"}));function qm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Lo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ns={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function y1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jx=zx,qx=y1,v1=new Ki("auth","Firebase",y1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new uh("@firebase/auth");function Gx(t,...e){Ic.logLevel<=Y.WARN&&Ic.warn(`Auth (${Wr}): ${t}`,...e)}function Ml(t,...e){Ic.logLevel<=Y.ERROR&&Ic.error(`Auth (${Wr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t,...e){throw Gm(t,...e)}function Je(t,...e){return Gm(t,...e)}function w1(t,e,n){const r=Object.assign(Object.assign({},qx()),{[e]:n});return new Ki("auth","Firebase",r).create(e,{appName:t.name})}function co(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tt(t,"argument-error"),w1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return v1.create(t,...e)}function k(t,e,...n){if(!t)throw Gm(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ml(e),new Error(e)}function sn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wm(){return Jv()==="http:"||Jv()==="https:"}function Jv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wm()||i1()||"connection"in navigator)?navigator.onLine:!0}function Kx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=EA()||Vm()}get(){return Wx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=new wu(3e4,6e4);function Pe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Me(t,e,n,r,i={}){return I1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=lo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),_1.fetch()(E1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function I1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Hx),e);try{const i=new Yx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xo(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Xo(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Xo(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw w1(t,c,l);tt(t,c)}}catch(i){if(i instanceof mt)throw i;tt(t,"network-request-failed",{message:String(i)})}}async function Xn(t,e,n,r,i={}){const s=await Me(t,e,n,r,i);return"mfaPendingCredential"in s&&tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function E1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Km(t.config,i):`${t.config.apiScheme}://${i}`}class Yx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),Qx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Je(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xx(t,e){return Me(t,"POST","/v1/accounts:delete",e)}async function Jx(t,e){return Me(t,"POST","/v1/accounts:update",e)}async function Zx(t,e){return Me(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eD(t,e=!1){const n=U(t),r=await n.getIdToken(e),i=lh(r);k(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:da(Ld(i.auth_time)),issuedAtTime:da(Ld(i.iat)),expirationTime:da(Ld(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ld(t){return Number(t)*1e3}function lh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ml("JWT malformed, contained fewer than 3 sections"),null;try{const i=n1(n);return i?JSON.parse(i):(Ml("Failed to decode base64 JWT payload"),null)}catch(i){return Ml("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function tD(t){const e=lh(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mt&&nD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=da(this.lastLoginAt),this.creationTime=da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Kn(t,Zx(n,{idToken:r}));k(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?oD(s.providerUserInfo):[],a=sD(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new S1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function iD(t){const e=U(t);await ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function oD(t){return t.map(e=>{var{providerId:n}=e,r=qm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aD(t,e){const n=await I1(t,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=E1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qa;return r&&(k(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(k(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(k(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qa,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ei{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new S1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Kn(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eD(this,e)}reload(){return iD(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kn(this,Xx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,m=(l=n.createdAt)!==null&&l!==void 0?l:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:I,isAnonymous:C,providerData:A,stsTokenManager:D}=n;k(g&&D,e,"internal-error");const M=qa.fromJSON(this.name,D);k(typeof g=="string",e,"internal-error"),rr(h,e.name),rr(d,e.name),k(typeof I=="boolean",e,"internal-error"),k(typeof C=="boolean",e,"internal-error"),rr(p,e.name),rr(y,e.name),rr(w,e.name),rr(N,e.name),rr(m,e.name),rr(f,e.name);const re=new Ei({uid:g,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:C,photoURL:y,phoneNumber:p,tenantId:w,stsTokenManager:M,createdAt:m,lastLoginAt:f});return A&&Array.isArray(A)&&(re.providerData=A.map(G=>Object.assign({},G))),N&&(re._redirectEventId=N),re}static async _fromIdTokenResponse(e,n,r=!1){const i=new qa;i.updateFromServerResponse(n);const s=new Ei({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ja(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=new Map;function bt(t){sn(t instanceof Function,"Expected a class definition");let e=Zv.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}T1.type="NONE";const Gs=T1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t,e,n){return`firebase:${t}:${e}:${n}`}class Ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Si(this.userKey,i.apiKey,s),this.fullPersistenceKey=Si("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ds(bt(Gs),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||bt(Gs);const o=Si(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=Ei._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ds(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ds(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(k1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(A1(e))return"Blackberry";if(x1(e))return"Webos";if(Hm(e))return"Safari";if((e.includes("chrome/")||C1(e))&&!e.includes("edge/"))return"Chrome";if(_u(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function k1(t=ve()){return/firefox\//i.test(t)}function Hm(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function C1(t=ve()){return/crios\//i.test(t)}function N1(t=ve()){return/iemobile/i.test(t)}function _u(t=ve()){return/android/i.test(t)}function A1(t=ve()){return/blackberry/i.test(t)}function x1(t=ve()){return/webos/i.test(t)}function ho(t=ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uD(t=ve()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function lD(t=ve()){var e;return ho(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cD(){return s1()&&document.documentMode===10}function D1(t=ve()){return ho(t)||_u(t)||x1(t)||A1(t)||/windows phone/i.test(t)||N1(t)}function hD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(t,e=[]){let n;switch(t){case"Browser":n=ew(ve());break;case"Worker":n=`${ew(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(t){return(await Me(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function P1(t,e){return Me(t,"GET","/v2/recaptchaConfig",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t){return t!==void 0&&t.getResponse!==void 0}function nw(t){return t!==void 0&&t.enterprise!==void 0}class b1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Qm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Je("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",fD().appendChild(r)})}function O1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pD="https://www.google.com/recaptcha/enterprise.js?render=",mD="recaptcha-enterprise",gD="NO_RECAPTCHA";class L1{constructor(e){this.type=mD,this.auth=Ae(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{P1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new b1(u);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;nw(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(gD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&nw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Qm(pD+a).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function br(t,e,n,r=!1){const i=new L1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rw(this),this.idTokenSubscription=new rw(this),this.beforeStateQueue=new yD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?U(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}async initializeRecaptchaConfig(){const e=await P1(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new b1(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new L1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bt(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return k(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=R1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ae(t){return U(t)}class rw{constructor(e){this.auth=e,this.observer=null,this.addObserver=o1(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function wD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _D(t,e,n){const r=Ae(t);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=M1(e),{host:o,port:a}=ID(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ED()}function M1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ID(t){const e=M1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:iw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:iw(o)}}}function iw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ED(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t,e){return Me(t,"POST","/v1/accounts:resetPassword",Pe(t,e))}async function F1(t,e){return Me(t,"POST","/v1/accounts:update",e)}async function SD(t,e){return Me(t,"POST","/v1/accounts:update",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Md(t,e){return Xn(t,"POST","/v1/accounts:signInWithPassword",Pe(t,e))}async function ch(t,e){return Me(t,"POST","/v1/accounts:sendOobCode",Pe(t,e))}async function TD(t,e){return ch(t,e)}async function $d(t,e){return ch(t,e)}async function Fd(t,e){return ch(t,e)}async function kD(t,e){return ch(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CD(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}async function ND(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends fo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ga(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ga(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await br(e,r,"signInWithPassword");return Md(e,i)}else return Md(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await br(e,r,"signInWithPassword");return Md(e,s)}else return Promise.reject(i)});case"emailLink":return CD(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return F1(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ND(e,{idToken:n,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(t,e){return Xn(t,"POST","/v1/accounts:signInWithIdp",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD="http://localhost";class xn extends fo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}buildRequest(){const e={requestUri:AD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xD(t,e){return Me(t,"POST","/v1/accounts:sendVerificationCode",Pe(t,e))}async function DD(t,e){return Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,e))}async function RD(t,e){const n=await Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,e));if(n.temporaryProof)throw Xo(t,"account-exists-with-different-credential",n);return n}const PD={USER_NOT_FOUND:"user-not-found"};async function bD(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,n),PD)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends fo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ti({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ti({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return DD(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return RD(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return bD(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ti({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LD(t){const e=Is(Yo(t)).link,n=e?Is(Yo(e)).deep_link_id:null,r=Is(Yo(t)).deep_link_id;return(r?Is(Yo(r)).link:null)||r||n||e||t}class hh{constructor(e){var n,r,i,s,o,a;const u=Is(Yo(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=OD((i=u.mode)!==null&&i!==void 0?i:null);k(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=LD(e);try{return new hh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.providerId=Kr.PROVIDER_ID}static credential(e,n){return Ga._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=hh.parseLink(n);return k(r,"argument-error"),Ga._fromEmailAndCode(e,r.code,r.tenantId)}}Kr.PROVIDER_ID="password";Kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends Jn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Rs extends po{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return k("providerId"in n&&"signInMethod"in n,"argument-error"),xn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),xn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Rs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Rs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Rs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends po{constructor(){super("facebook.com")}static credential(e){return xn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends po{constructor(){super("github.com")}static credential(e){return xn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD="http://localhost";class Ws extends fo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Ws(r,s)}static _create(e,n){return new Ws(e,n)}buildRequest(){return{requestUri:MD,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D="saml.";class Ec extends Jn{constructor(e){k(e.startsWith($D),"argument-error"),super(e)}static credentialFromResult(e){return Ec.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ec.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Ws.fromJSON(e);return k(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Ws._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends po{constructor(){super("twitter.com")}static credential(e,n){return xn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(t,e){return Xn(t,"POST","/v1/accounts:signUp",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ei._fromIdTokenResponse(e,r,i),o=sw(r);return new Ht({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sw(r);return new Ht({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FD(t){var e;const n=Ae(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ht({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await $l(n,{returnSecureToken:!0}),i=await Ht._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc extends mt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Sc(e,n,r,i)}}function U1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(t,e){const n=U(t);await dh(!0,n,e);const{providerUserInfo:r}=await Jx(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=V1(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ym(t,e,n=!1){const r=await Kn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ht._forOperation(t,"link",r)}async function dh(t,e,n){await ja(e);const r=V1(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";k(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Kn(t,U1(r,i,e,t),n);k(s.idToken,r,"internal-error");const o=lh(s.idToken);k(o,r,"internal-error");const{sub:a}=o;return k(t.uid===a,r,"user-mismatch"),Ht._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(t,e,n=!1){const r="signIn",i=await U1(t,r,e),s=await Ht._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function fh(t,e){return z1(Ae(t),e)}async function j1(t,e){const n=U(t);return await dh(!1,n,e.providerId),Ym(n,e)}async function q1(t,e){return B1(U(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(t,e){return Xn(t,"POST","/v1/accounts:signInWithCustomToken",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BD(t,e){const n=Ae(t),r=await VD(n,{token:e,returnSecureToken:!0}),i=await Ht._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Xm._fromServerResponse(e,n):"totpInfo"in n?Jm._fromServerResponse(e,n):tt(e,"internal-error")}}class Xm extends Iu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Xm(n)}}class Jm extends Iu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Jm(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t,e,n){var r;k(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),k(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zD(t,e,n){var r;const i=Ae(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await br(i,s,"getOobCode",!0);n&&Ps(i,o,n),await $d(i,o)}else n&&Ps(i,s,n),await $d(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await br(i,s,"getOobCode",!0);n&&Ps(i,a,n),await $d(i,a)}else return Promise.reject(o)})}async function jD(t,e,n){await $1(U(t),{oobCode:e,newPassword:n})}async function qD(t,e){await SD(U(t),{oobCode:e})}async function G1(t,e){const n=U(t),r=await $1(n,{oobCode:e}),i=r.requestType;switch(k(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(r.mfaInfo,n,"internal-error");default:k(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Iu._fromServerResponse(Ae(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function GD(t,e){const{data:n}=await G1(U(t),e);return n.email}async function WD(t,e,n){var r;const i=Ae(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await br(i,s,"signUpPassword");o=$l(i,l)}else o=$l(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await br(i,s,"signUpPassword");return $l(i,c)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),u=await Ht._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(u.user),u}function KD(t,e,n){return fh(U(t),Kr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HD(t,e,n){var r;const i=Ae(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,u){k(u.handleCodeInApp,i,"argument-error"),u&&Ps(i,a,u)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await br(i,s,"getOobCode",!0);o(a,n),await Fd(i,a)}else o(s,n),await Fd(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const u=await br(i,s,"getOobCode",!0);o(u,n),await Fd(i,u)}else return Promise.reject(a)})}function QD(t,e){const n=hh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function YD(t,e,n){const r=U(t),i=Kr.credentialWithLink(e,n||za());return k(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),fh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XD(t,e){return Me(t,"POST","/v1/accounts:createAuthUri",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(t,e){const n=Wm()?za():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await XD(U(t),r);return i||[]}async function ZD(t,e){const n=U(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Ps(n.auth,i,e);const{email:s}=await TD(n.auth,i);s!==t.email&&await t.reload()}async function eR(t,e,n){const r=U(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Ps(r.auth,s,n);const{email:o}=await kD(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(t,e){return Me(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=U(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Kn(r,tR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function rR(t,e){return W1(U(t),e,null)}function iR(t,e){return W1(U(t),null,e)}async function W1(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Kn(t,F1(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=lh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new bs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new oR(s,i);case"github.com":return new aR(s,i);case"google.com":return new uR(s,i);case"twitter.com":return new lR(s,i,t.screenName||null);case"custom":case"anonymous":return new bs(s,null);default:return new bs(s,r,i)}}class bs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class K1 extends bs{constructor(e,n,r,i){super(e,n,r),this.username=i}}class oR extends bs{constructor(e,n){super(e,"facebook.com",n)}}class aR extends K1{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class uR extends bs{constructor(e,n){super(e,"google.com",n)}}class lR extends K1{constructor(e,n,r){super(e,"twitter.com",n,r)}}function cR(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:sR(n)}function hR(t,e,n,r){return U(t).onAuthStateChanged(e,n,r)}class mi{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new mi("enroll",e,n)}static _fromMfaPendingCredential(e){return new mi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return mi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return mi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ae(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Iu._fromServerResponse(r,a));k(i.mfaPendingCredential,r,"internal-error");const o=mi._fromMfaPendingCredential(i.mfaPendingCredential);return new Zm(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await Ht._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return k(n.user,r,"internal-error"),Ht._forOperation(n.user,n.operationType,l);default:tt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function dR(t,e){var n;const r=U(t),i=e;return k(e.customData.operationType,r,"argument-error"),k((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Zm._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(t,e){return Me(t,"POST","/v2/accounts/mfaEnrollment:start",Pe(t,e))}function pR(t,e){return Me(t,"POST","/v2/accounts/mfaEnrollment:finalize",Pe(t,e))}function mR(t,e){return Me(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Pe(t,e))}class eg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Iu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new eg(e)}async getSession(){return mi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Kn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Kn(this.user,mR(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Ud=new WeakMap;function gR(t){const e=U(t);return Ud.has(e)||Ud.set(e,eg._fromUser(e)),Ud.get(e)}const Tc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tc,"1"),this.storage.removeItem(Tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(){const t=ve();return Hm(t)||ho(t)}const vR=1e3,wR=10;class Q1 extends H1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yR()&&hD(),this.fallbackToPolling=D1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);cD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Q1.type="LOCAL";const tg=Q1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1 extends H1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Y1.type="SESSION";const bi=Y1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ph(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await _R(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ph.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Eu("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return window}function ER(t){De().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(){return typeof De().WorkerGlobalScope<"u"&&typeof De().importScripts=="function"}async function SR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kR(){return ng()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="firebaseLocalStorageDb",CR=1,kc="firebaseLocalStorage",J1="fbase_key";class Su{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mh(t,e){return t.transaction([kc],e?"readwrite":"readonly").objectStore(kc)}function NR(){const t=indexedDB.deleteDatabase(X1);return new Su(t).toPromise()}function ep(){const t=indexedDB.open(X1,CR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kc,{keyPath:J1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kc)?e(r):(r.close(),await NR(),e(await ep()))})})}async function ow(t,e,n){const r=mh(t,!0).put({[J1]:e,value:n});return new Su(r).toPromise()}async function AR(t,e){const n=mh(t,!1).get(e),r=await new Su(n).toPromise();return r===void 0?null:r.value}function aw(t,e){const n=mh(t,!0).delete(e);return new Su(n).toPromise()}const xR=800,DR=3;class Z1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ep(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ng()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ph._getInstance(kR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SR(),!this.activeServiceWorker)return;this.sender=new IR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ep();return await ow(e,Tc,"1"),await aw(e,Tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ow(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>aw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=mh(i,!1).getAll();return new Su(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Z1.type="LOCAL";const Wa=Z1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(t,e){return Me(t,"POST","/v2/accounts/mfaSignIn:start",Pe(t,e))}function PR(t,e){return Me(t,"POST","/v2/accounts/mfaSignIn:finalize",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=500,OR=6e4,hl=1e12;class LR{constructor(e){this.auth=e,this.counter=hl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new MR(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||hl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||hl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||hl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class MR{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;k(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=$R(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},OR)},bR))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function $R(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=O1("rcb"),FR=new wu(3e4,6e4),UR="https://www.google.com/recaptcha/api.js?";class VR{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=De().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return k(BR(n),e,"argument-error"),this.shouldResolveImmediately(n)&&tw(De().grecaptcha)?Promise.resolve(De().grecaptcha):new Promise((r,i)=>{const s=De().setTimeout(()=>{i(Je(e,"network-request-failed"))},FR.get());De()[Vd]=()=>{De().clearTimeout(s),delete De()[Vd];const a=De().grecaptcha;if(!a||!tw(a)){i(Je(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${UR}?${lo({onload:Vd,render:"explicit",hl:n})}`;Qm(o).catch(()=>{clearTimeout(s),i(Je(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=De().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function BR(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class zR{async load(e){return new LR(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="recaptcha",jR={theme:"light",type:"image"};let qR=class{constructor(e,n=Object.assign({},jR),r){this.parameters=n,this.type=eE,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ae(r),this.isInvisible=this.parameters.size==="invisible",k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;k(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new zR:new VR,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=De()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(Wm()&&!ng(),this.auth,"internal-error"),await GR(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await dD(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function GR(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ti._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function WR(t,e,n){const r=Ae(t),i=await gh(r,e,U(n));return new rg(i,s=>fh(r,s))}async function KR(t,e,n){const r=U(t);await dh(!1,r,"phone");const i=await gh(r.auth,e,U(n));return new rg(i,s=>j1(r,s))}async function HR(t,e,n){const r=U(t),i=await gh(r.auth,e,U(n));return new rg(i,s=>q1(r,s))}async function gh(t,e,n){var r;const i=await n.verify();try{k(typeof i=="string",t,"argument-error"),k(n.type===eE,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return k(o.type==="enroll",t,"internal-error"),(await fR(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{k(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return k(a,t,"missing-multi-factor-info"),(await RR(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await xD(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function QR(t,e){await Ym(U(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi=class Fl{constructor(e){this.providerId=Fl.PROVIDER_ID,this.auth=Ae(e)}verifyPhoneNumber(e,n){return gh(this.auth,e,U(n))}static credential(e,n){return Ti._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Fl.credentialFromTaggedObject(n)}static credentialFromError(e){return Fl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ti._fromTokenResponse(n,r):null}};Oi.PROVIDER_ID="phone";Oi.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e){return e?bt(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig extends fo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YR(t){return z1(t.auth,new ig(t),t.bypassAuthState)}function XR(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),B1(n,new ig(t),t.bypassAuthState)}async function JR(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),Ym(n,new ig(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YR;case"linkViaPopup":case"linkViaRedirect":return JR;case"reauthViaPopup":case"reauthViaRedirect":return XR;default:tt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=new wu(2e3,1e4);async function eP(t,e,n){const r=Ae(t);co(t,e,Jn);const i=Hi(r,n);return new Mn(r,"signInViaPopup",e,i).executeNotNull()}async function tP(t,e,n){const r=U(t);co(r.auth,e,Jn);const i=Hi(r.auth,n);return new Mn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function nP(t,e,n){const r=U(t);co(r.auth,e,Jn);const i=Hi(r.auth,n);return new Mn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Mn extends tE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZR.get())};e()}}Mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP="pendingRedirect",fa=new Map;class iP extends tE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fa.get(this.auth._key());if(!e){try{const r=await sP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fa.set(this.auth._key(),e)}return this.bypassAuthState||fa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sP(t,e){const n=rE(e),r=nE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function sg(t,e){return nE(t)._set(rE(e),"true")}function oP(){fa.clear()}function og(t,e){fa.set(t._key(),e)}function nE(t){return bt(t._redirectPersistence)}function rE(t){return Si(rP,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(t,e,n){return uP(t,e,n)}async function uP(t,e,n){const r=Ae(t);co(t,e,Jn),await r._initializationPromise;const i=Hi(r,n);return await sg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function lP(t,e,n){return cP(t,e,n)}async function cP(t,e,n){const r=U(t);co(r.auth,e,Jn),await r.auth._initializationPromise;const i=Hi(r.auth,n);await sg(i,r.auth);const s=await iE(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function hP(t,e,n){return dP(t,e,n)}async function dP(t,e,n){const r=U(t);co(r.auth,e,Jn),await r.auth._initializationPromise;const i=Hi(r.auth,n);await dh(!1,r,e.providerId),await sg(i,r.auth);const s=await iE(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function fP(t,e){return await Ae(t)._initializationPromise,yh(t,e,!1)}async function yh(t,e,n=!1){const r=Ae(t),i=Hi(r,e),o=await new iP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function iE(t){const e=Eu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=10*60*1e3;class sE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pP&&this.cachedEventUids.clear(),this.cachedEventUids.has(uw(e))}saveEventToCache(e){this.cachedEventUids.add(uw(e)),this.lastProcessedEventTime=Date.now()}}function uw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(t,e={}){return Me(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yP=/^https?/;async function vP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aE(t);for(const n of e)try{if(wP(n))return}catch{}tt(t,"unauthorized-domain")}function wP(t){const e=za(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yP.test(n))return!1;if(gP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=new wu(3e4,6e4);function lw(){const t=De().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IP(t){return new Promise((e,n)=>{var r,i,s;function o(){lw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lw(),n(Je(t,"network-request-failed"))},timeout:_P.get()})}if(!((i=(r=De().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=De().gapi)===null||s===void 0)&&s.load)o();else{const a=O1("iframefcb");return De()[a]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},Qm(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Ul=null,e})}let Ul=null;function EP(t){return Ul=Ul||IP(t),Ul}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=new wu(5e3,15e3),TP="__/auth/iframe",kP="emulator/auth/iframe",CP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AP(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Km(e,kP):`https://${t.config.authDomain}/${TP}`,r={apiKey:e.apiKey,appName:t.name,v:Wr},i=NP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${lo(r).slice(1)}`}async function xP(t){const e=await EP(t),n=De().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:AP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=De().setTimeout(()=>{s(o)},SP.get());function u(){De().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RP=500,PP=600,bP="_blank",OP="http://localhost";class cw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LP(t,e,n,r=RP,i=PP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},DP),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ve().toLowerCase();n&&(a=C1(l)?bP:n),k1(l)&&(e=e||OP,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(lD(l)&&a!=="_self")return MP(e||"",a),new cw(null);const h=window.open(e||"",a,c);k(h,t,"popup-blocked");try{h.focus()}catch{}return new cw(h)}function MP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P="__/auth/handler",FP="emulator/auth/handler",UP=encodeURIComponent("fac");async function tp(t,e,n,r,i,s){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Wr,eventId:i};if(e instanceof Jn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof po){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const u=await t._getAppCheckToken(),l=u?`#${UP}=${encodeURIComponent(u)}`:"";return`${VP(t)}?${lo(a).slice(1)}${l}`}function VP({config:t}){return t.emulator?Km(t,FP):`https://${t.authDomain}/${$P}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="webStorageSupport";class BP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bi,this._completeRedirectFn=yh,this._overrideRedirectResult=og}async _openPopup(e,n,r,i){var s;sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await tp(e,n,r,za(),i);return LP(e,o,Eu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await tp(e,n,r,za(),i);return ER(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xP(e),r=new sE(e);return n.register("authEvent",i=>(k(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bd,{type:Bd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bd];o!==void 0&&n(!!o),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return D1()||Hm()||ho()}}const zP=BP;class jP{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return vn("unexpected MultiFactorSessionType")}}}class ag extends jP{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ag(e)}_finalizeEnroll(e,n,r){return pR(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return PR(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class uE{constructor(){}static assertion(e){return ag._fromCredential(e)}}uE.FACTOR_ID="phone";var hw="@firebase/auth",dw="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function WP(t){Pr(new An("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;k(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:R1(t)},l=new vD(r,i,s,u);return wD(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pr(new An("auth-internal",e=>{const n=Ae(e.getProvider("auth").getImmediate());return(r=>new qP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(hw,dw,GP(t)),kn(hw,dw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=5*60;wA("authIdTokenMaxAge");WP("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function HP(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{l(r.next(c))}catch(h){o(h)}}function u(c){try{l(r.throw(c))}catch(h){o(h)}}function l(c){c.done?s(c.value):i(c.value).then(a,u)}l((r=r.apply(t,e||[])).next())})}function QP(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Es=function(){return Es=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Es.apply(this,arguments)},lE=function(t){return{loading:t==null,value:t}},YP=function(){return function(t,e){switch(e.type){case"error":return Es(Es({},t),{error:e.error,loading:!1,value:void 0});case"reset":return lE(e.defaultValue);case"value":return Es(Es({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},XP=function(t){var e=t?t():void 0,n=hn.useReducer(YP(),lE(e)),r=n[0],i=n[1],s=hn.useCallback(function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},[t]),o=hn.useCallback(function(u){i({type:"error",error:u})},[]),a=hn.useCallback(function(u){i({type:"value",value:u})},[]);return hn.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},JP=function(t,e){var n=XP(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return hn.useEffect(function(){var u=hR(t,function(l){return HP(void 0,void 0,void 0,function(){var c;return QP(this,function(h){switch(h.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,e.onUserChanged(l)];case 2:return h.sent(),[3,4];case 3:return c=h.sent(),s(c),[3,4];case 4:return o(l),[2]}})})},s);return function(){u()}},[t]),[a,i,r]};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n){this._delegate=e,this.firebase=n,_c(e,new An("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),d1(this._delegate)))}_getService(e,n=Dr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Dr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){_c(this._delegate,e)}_addOrOverwriteComponent(e){c1(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},fw=new Ki("app-compat","Firebase",eb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:kn,setLogLevel:p1,onLog:f1,apps:null,SDK_VERSION:Wr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:Bx}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Dr,!jv(e,l))throw fw.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=jm(l,c);if(jv(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(Pr(l)&&l.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw fw.create("invalid-app-argument",{appName:c});return p[h]()};l.serviceProps!==void 0&&wc(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...p){return this._getService.bind(this,c).apply(this,l.multipleInstances?p:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(){const t=tb(ZP);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:cE,extendNamespace:e,createSubscribe:o1,ErrorFactory:Ki,deepExtend:wc});function e(n){wc(t,n)}return t}const nb=cE();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=new uh("@firebase/app-compat"),rb="@firebase/app-compat",ib="0.2.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){kn(rb,ib,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(SA()&&self.firebase!==void 0){pw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&pw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const on=nb;sb();var ob="firebase",ab="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.registerVersion(ob,ab,"app-compat");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=2e3;async function lb(t,e,n){var r;const{BuildInfo:i}=Li();sn(e.sessionId,"AuthEvent did not contain a session ID");const s=await pb(e.sessionId),o={};return ho()?o.ibi=i.packageName:_u()?o.apn=i.packageName:tt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,tp(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function cb(t){const{BuildInfo:e}=Li(),n={};ho()?n.iosBundleId=e.packageName:_u()?n.androidPackageName=e.packageName:tt(t,"operation-not-supported-in-this-environment"),await aE(t,n)}function hb(t){const{cordova:e}=Li();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,uD()?"_blank":"_system","location=yes"),n(i)})})}async function db(t,e,n){const{cordova:r}=Li();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Je(t,"redirect-cancelled-by-user"))},ub))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),_u()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function fb(t){var e,n,r,i,s,o,a,u,l,c;const h=Li();k(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),k(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),k(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function pb(t){const e=mb(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function mb(t){if(sn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=20;class yb extends sE{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function vb(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:Ib(),postBody:null,tenantId:t.tenantId,error:Je(t,"no-auth-event")}}function wb(t,e){return np()._set(rp(t),e)}async function mw(t){const e=await np()._get(rp(t));return e&&await np()._remove(rp(t)),e}function _b(t,e){var n,r;const i=Sb(e);if(i.includes("/__/auth/callback")){const s=Vl(i),o=s.firebaseError?Eb(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Je(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function Ib(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<gb;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function np(){return bt(tg)}function rp(t){return Si("authEvent",t.config.apiKey,t.name)}function Eb(t){try{return JSON.parse(t)}catch{return null}}function Sb(t){const e=Vl(t),n=e.link?decodeURIComponent(e.link):void 0,r=Vl(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Vl(i).link||i||r||n||t}function Vl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Is(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=500;class kb{constructor(){this._redirectPersistence=bi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=yh,this._overrideRedirectResult=og}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new yb(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){tt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){fb(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),oP(),await this._originValidation(e);const o=vb(e,r,i);await wb(e,o);const a=await lb(e,o,n),u=await hb(a);return db(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cb(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Li(),o=setTimeout(async()=>{await mw(e),n.onEvent(gw())},Tb),a=async c=>{clearTimeout(o);const h=await mw(e);let d=null;h&&(c!=null&&c.url)&&(d=_b(h,c.url)),n.onEvent(d||gw())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;Li().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const Cb=kb;function gw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Je("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t,e){Ae(t)._logFramework(e)}var Ab="@firebase/auth-compat",xb="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=1e3;function pa(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function Rb(){return pa()==="http:"||pa()==="https:"}function hE(t=ve()){return!!((pa()==="file:"||pa()==="ionic:"||pa()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function Pb(){return Vm()||Um()}function bb(){return s1()&&(document==null?void 0:document.documentMode)===11}function Ob(t=ve()){return/Edge\/\d+/.test(t)}function Lb(t=ve()){return bb()||Ob(t)}function dE(){try{const t=self.localStorage,e=Eu();if(t)return t.setItem(e,"1"),t.removeItem(e),Lb()?Ua():!0}catch{return ug()&&Ua()}return!1}function ug(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function zd(){return(Rb()||i1()||hE())&&!Pb()&&dE()&&!ug()}function fE(){return hE()&&typeof document<"u"}async function Mb(){return fE()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},Db);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function $b(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt={LOCAL:"local",NONE:"none",SESSION:"session"},Mo=k,pE="persistence";function Fb(t,e){if(Mo(Object.values(Rt).includes(e),t,"invalid-persistence-type"),Vm()){Mo(e!==Rt.SESSION,t,"unsupported-persistence-type");return}if(Um()){Mo(e===Rt.NONE,t,"unsupported-persistence-type");return}if(ug()){Mo(e===Rt.NONE||e===Rt.LOCAL&&Ua(),t,"unsupported-persistence-type");return}Mo(e===Rt.NONE||dE(),t,"unsupported-persistence-type")}async function ip(t){await t._initializationPromise;const e=mE(),n=Si(pE,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function Ub(t,e){const n=mE();if(!n)return[];const r=Si(pE,t,e);switch(n.getItem(r)){case Rt.NONE:return[Gs];case Rt.LOCAL:return[Wa,bi];case Rt.SESSION:return[bi];default:return[]}}function mE(){var t;try{return((t=$b())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=k;class mr{constructor(){this.browserResolver=bt(zP),this.cordovaResolver=bt(Cb),this.underlyingResolver=null,this._redirectPersistence=bi,this._completeRedirectFn=yh,this._overrideRedirectResult=og}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return fE()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Vb(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Mb();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t){return t.unwrap()}function Bb(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t){return yE(t)}function jb(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new qb(t,dR(t,e))}else if(r){const i=yE(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function yE(t){const{_tokenResponse:e}=t instanceof mt?t.customData:t;if(!e)return null;if(!(t instanceof mt)&&"temporaryProof"in e&&"phoneNumber"in e)return Oi.credentialFromResult(t);const n=e.providerId;if(!n||n===Lo.PASSWORD)return null;let r;switch(n){case Lo.GOOGLE:r=pn;break;case Lo.FACEBOOK:r=fn;break;case Lo.GITHUB:r=mn;break;case Lo.TWITTER:r=gn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Ws._create(n,a):xn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Rs(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof mt?r.credentialFromError(t):r.credentialFromResult(t)}function wt(t,e){return e.catch(n=>{throw n instanceof mt&&jb(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:zb(n),additionalUserInfo:cR(n),user:$n.getOrCreate(i)}})}async function sp(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>wt(t,n.confirm(r))}}class qb{constructor(e,n){this.resolver=n,this.auth=Bb(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return wt(gE(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this._delegate=e,this.multiFactor=gR(e)}static getOrCreate(e){return $n.USER_MAP.has(e)||$n.USER_MAP.set(e,new $n(e)),$n.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return wt(this.auth,j1(this._delegate,e))}async linkWithPhoneNumber(e,n){return sp(this.auth,KR(this._delegate,e,n))}async linkWithPopup(e){return wt(this.auth,nP(this._delegate,e,mr))}async linkWithRedirect(e){return await ip(Ae(this.auth)),hP(this._delegate,e,mr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return wt(this.auth,q1(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return sp(this.auth,HR(this._delegate,e,n))}reauthenticateWithPopup(e){return wt(this.auth,tP(this._delegate,e,mr))}async reauthenticateWithRedirect(e){return await ip(Ae(this.auth)),lP(this._delegate,e,mr)}sendEmailVerification(e){return ZD(this._delegate,e)}async unlink(e){return await UD(this._delegate,e),this}updateEmail(e){return rR(this._delegate,e)}updatePassword(e){return iR(this._delegate,e)}updatePhoneNumber(e){return QR(this._delegate,e)}updateProfile(e){return nR(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return eR(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}$n.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=k;class op{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;$o(r,"invalid-api-key",{appName:e.name}),$o(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?mr:void 0;this._delegate=n.initialize({options:{persistence:Gb(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(jx),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?$n.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){_D(this._delegate,e,n)}applyActionCode(e){return qD(this._delegate,e)}checkActionCode(e){return G1(this._delegate,e)}confirmPasswordReset(e,n){return jD(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return wt(this._delegate,WD(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return JD(this._delegate,e)}isSignInWithEmailLink(e){return QD(this._delegate,e)}async getRedirectResult(){$o(zd(),this._delegate,"operation-not-supported-in-this-environment");const e=await fP(this._delegate,mr);return e?wt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Nb(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=yw(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=yw(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return HD(this._delegate,e,n)}sendPasswordResetEmail(e,n){return zD(this._delegate,e,n||void 0)}async setPersistence(e){Fb(this._delegate,e);let n;switch(e){case Rt.SESSION:n=bi;break;case Rt.LOCAL:n=await bt(Wa)._isAvailable()?Wa:tg;break;case Rt.NONE:n=Gs;break;default:return tt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return wt(this._delegate,FD(this._delegate))}signInWithCredential(e){return wt(this._delegate,fh(this._delegate,e))}signInWithCustomToken(e){return wt(this._delegate,BD(this._delegate,e))}signInWithEmailAndPassword(e,n){return wt(this._delegate,KD(this._delegate,e,n))}signInWithEmailLink(e,n){return wt(this._delegate,YD(this._delegate,e,n))}signInWithPhoneNumber(e,n){return sp(this._delegate,WR(this._delegate,e,n))}async signInWithPopup(e){return $o(zd(),this._delegate,"operation-not-supported-in-this-environment"),wt(this._delegate,eP(this._delegate,e,mr))}async signInWithRedirect(e){return $o(zd(),this._delegate,"operation-not-supported-in-this-environment"),await ip(this._delegate),aP(this._delegate,e,mr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return GD(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}op.Persistence=Rt;function yw(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&$n.getOrCreate(o)),error:e,complete:n}}function Gb(t,e){const n=Ub(t,e);if(typeof self<"u"&&!n.includes(Wa)&&n.push(Wa),typeof window<"u")for(const r of[tg,bi])n.includes(r)||n.push(r);return n.includes(Gs)||n.push(Gs),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.providerId="phone",this._delegate=new Oi(gE(on.auth()))}static credential(e,n){return Oi.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}lg.PHONE_SIGN_IN_METHOD=Oi.PHONE_SIGN_IN_METHOD;lg.PROVIDER_ID=Oi.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=k;class Kb{constructor(e,n,r=on.app()){var i;Wb((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new qR(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb="auth-compat";function Qb(t){t.INTERNAL.registerComponent(new An(Hb,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new op(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ns.EMAIL_SIGNIN,PASSWORD_RESET:ns.PASSWORD_RESET,RECOVER_EMAIL:ns.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ns.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ns.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ns.VERIFY_EMAIL}},EmailAuthProvider:Kr,FacebookAuthProvider:fn,GithubAuthProvider:mn,GoogleAuthProvider:pn,OAuthProvider:Rs,SAMLAuthProvider:Ec,PhoneAuthProvider:lg,PhoneMultiFactorGenerator:uE,RecaptchaVerifier:Kb,TwitterAuthProvider:gn,Auth:op,AuthCredential:fo,Error:mt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(Ab,xb)}Qb(on);var Yb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,cg=cg||{},V=Yb||self;function vh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Tu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Xb(t){return Object.prototype.hasOwnProperty.call(t,jd)&&t[jd]||(t[jd]=++Jb)}var jd="closure_uid_"+(1e9*Math.random()>>>0),Jb=0;function Zb(t,e,n){return t.call.apply(t.bind,arguments)}function eO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function at(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=Zb:at=eO,at.apply(null,arguments)}function dl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Hr(){this.s=this.s,this.o=this.o}var tO=0;Hr.prototype.s=!1;Hr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),tO!=0)&&Xb(this)};Hr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function vw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(vh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var nO=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",()=>{},e),V.removeEventListener("test",()=>{},e)}catch{}return t}();function Ka(t){return/^[\s\xa0]*$/.test(t)}function wh(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function yn(t){return wh().indexOf(t)!=-1}function dg(t){return dg[" "](t),t}dg[" "]=function(){};function rO(t,e){var n=QO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var iO=yn("Opera"),Ks=yn("Trident")||yn("MSIE"),wE=yn("Edge"),ap=wE||Ks,_E=yn("Gecko")&&!(wh().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge"))&&!(yn("Trident")||yn("MSIE"))&&!yn("Edge"),sO=wh().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge");function IE(){var t=V.document;return t?t.documentMode:void 0}var up;e:{var qd="",Gd=function(){var t=wh();if(_E)return/rv:([^\);]+)(\)|;)/.exec(t);if(wE)return/Edge\/([\d\.]+)/.exec(t);if(Ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(sO)return/WebKit\/(\S+)/.exec(t);if(iO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Gd&&(qd=Gd?Gd[1]:""),Ks){var Wd=IE();if(Wd!=null&&Wd>parseFloat(qd)){up=String(Wd);break e}}up=qd}var lp;if(V.document&&Ks){var ww=IE();lp=ww||parseInt(up,10)||void 0}else lp=void 0;var oO=lp;function Ha(t,e){if(ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(_E){e:{try{dg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:aO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ha.$.h.call(this)}}qe(Ha,ut);var aO={2:"touch",3:"pen",4:"mouse"};Ha.prototype.h=function(){Ha.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ku="closure_listenable_"+(1e6*Math.random()|0),uO=0;function lO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++uO,this.fa=this.ia=!1}function _h(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function fg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function cO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function EE(t){const e={};for(const n in t)e[n]=t[n];return e}const _w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function SE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<_w.length;s++)n=_w[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ih(t){this.src=t,this.g={},this.h=0}Ih.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=hp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new lO(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function cp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=vE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(_h(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var pg="closure_lm_"+(1e6*Math.random()|0),Kd={};function TE(t,e,n,r,i){if(r&&r.once)return CE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)TE(t,e[s],n,r,i);return null}return n=yg(n),t&&t[ku]?t.O(e,n,Tu(r)?!!r.capture:!!r,i):kE(t,e,n,!1,r,i)}function kE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Tu(i)?!!i.capture:!!i,a=gg(t);if(a||(t[pg]=a=new Ih(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=hO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(AE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hO(){function t(n){return e.call(t.src,t.listener,n)}const e=dO;return t}function CE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)CE(t,e[s],n,r,i);return null}return n=yg(n),t&&t[ku]?t.P(e,n,Tu(r)?!!r.capture:!!r,i):kE(t,e,n,!0,r,i)}function NE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)NE(t,e[s],n,r,i);else r=Tu(r)?!!r.capture:!!r,n=yg(n),t&&t[ku]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=hp(s,n,r,i),-1<n&&(_h(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=gg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hp(e,n,r,i)),(n=-1<t?e[t]:null)&&mg(n))}function mg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ku])cp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(AE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=gg(e))?(cp(n,t),n.h==0&&(n.src=null,e[pg]=null)):_h(t)}}}function AE(t){return t in Kd?Kd[t]:Kd[t]="on"+t}function dO(t,e){if(t.fa)t=!0;else{e=new Ha(e,this);var n=t.listener,r=t.la||t.src;t.ia&&mg(t),t=n.call(r,e)}return t}function gg(t){return t=t[pg],t instanceof Ih?t:null}var Hd="__closure_events_fn_"+(1e9*Math.random()>>>0);function yg(t){return typeof t=="function"?t:(t[Hd]||(t[Hd]=function(e){return t.handleEvent(e)}),t[Hd])}function je(){Hr.call(this),this.i=new Ih(this),this.S=this,this.J=null}qe(je,Hr);je.prototype[ku]=!0;je.prototype.removeEventListener=function(t,e,n,r){NE(this,t,e,n,r)};function Ze(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ut(e,t);else if(e instanceof ut)e.target=e.target||t;else{var i=e;e=new ut(r,t),SE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=fl(o,r,!0,e)&&i}if(o=e.g=t,i=fl(o,r,!0,e)&&i,i=fl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=fl(o,r,!1,e)&&i}je.prototype.N=function(){if(je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)_h(n[r]);delete t.g[e],t.h--}}this.J=null};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function fl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&cp(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var vg=V.JSON.stringify;class fO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function pO(){var t=wg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mO{constructor(){this.h=this.g=null}add(e,n){const r=xE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var xE=new fO(()=>new gO,t=>t.reset());class gO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function vO(t){V.setTimeout(()=>{throw t},0)}let Qa,Ya=!1,wg=new mO,DE=()=>{const t=V.Promise.resolve(void 0);Qa=()=>{t.then(wO)}};var wO=()=>{for(var t;t=pO();){try{t.h.call(t.g)}catch(n){vO(n)}var e=xE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ya=!1};function Eh(t,e){je.call(this),this.h=t||1,this.g=e||V,this.j=at(this.qb,this),this.l=Date.now()}qe(Eh,je);P=Eh.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ze(this,"tick"),this.ga&&(_g(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _g(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){Eh.$.N.call(this),_g(this),delete this.g};function Ig(t,e,n){if(typeof t=="function")n&&(t=at(t,n));else if(t&&typeof t.handleEvent=="function")t=at(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function RE(t){t.g=Ig(()=>{t.g=null,t.i&&(t.i=!1,RE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _O extends Hr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:RE(this)}N(){super.N(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xa(t){Hr.call(this),this.h=t,this.g={}}qe(Xa,Hr);var Iw=[];function PE(t,e,n,r){Array.isArray(n)||(n&&(Iw[0]=n.toString()),n=Iw);for(var i=0;i<n.length;i++){var s=TE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function bE(t){fg(t.g,function(e,n){this.g.hasOwnProperty(n)&&mg(e)},t),t.g={}}Xa.prototype.N=function(){Xa.$.N.call(this),bE(this)};Xa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sh(){this.g=!0}Sh.prototype.Ea=function(){this.g=!1};function IO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function EO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ss(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+TO(t,n)+(r?" "+r:"")})}function SO(t,e){t.info(function(){return"TIMEOUT: "+e})}Sh.prototype.info=function(){};function TO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return vg(n)}catch{return e}}var Qi={},Ew=null;function Th(){return Ew=Ew||new je}Qi.Ta="serverreachability";function OE(t){ut.call(this,Qi.Ta,t)}qe(OE,ut);function Ja(t){const e=Th();Ze(e,new OE(e))}Qi.STAT_EVENT="statevent";function LE(t,e){ut.call(this,Qi.STAT_EVENT,t),this.stat=e}qe(LE,ut);function ft(t){const e=Th();Ze(e,new LE(e,t))}Qi.Ua="timingevent";function ME(t,e){ut.call(this,Qi.Ua,t),this.size=e}qe(ME,ut);function Cu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var kh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},$E={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Eg(){}Eg.prototype.h=null;function Sw(t){return t.h||(t.h=t.i())}function FE(){}var Nu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Sg(){ut.call(this,"d")}qe(Sg,ut);function Tg(){ut.call(this,"c")}qe(Tg,ut);var dp;function Ch(){}qe(Ch,Eg);Ch.prototype.g=function(){return new XMLHttpRequest};Ch.prototype.i=function(){return{}};dp=new Ch;function Au(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Xa(this),this.P=kO,t=ap?125:void 0,this.V=new Eh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new UE}function UE(){this.i=null,this.g="",this.h=!1}var kO=45e3,fp={},Cc={};P=Au.prototype;P.setTimeout=function(t){this.P=t};function pp(t,e,n){t.L=1,t.v=Ah(Hn(e)),t.s=n,t.S=!0,VE(t,null)}function VE(t,e){t.G=Date.now(),xu(t),t.A=Hn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),HE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new UE,t.g=mS(t.l,n?e:null,!t.s),0<t.O&&(t.M=new _O(at(t.Pa,t,t.g),t.O)),PE(t.U,t.g,"readystatechange",t.nb),e=t.I?EE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ja(),IO(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&wn(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const c=wn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||ap||this.g&&(this.h.h||this.g.ja()||Nw(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ja(3):Ja(2)),Nh(this);var n=this.g.da();this.ca=n;t:if(BE(this)){var r=Nw(this.g);t="";var i=r.length,s=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gi(this),ma(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,EO(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ka(a)){var l=a;break t}}l=null}if(n=l)Ss(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mp(this,n);else{this.i=!1,this.o=3,ft(12),gi(this),ma(this);break e}}this.S?(zE(this,c,o),ap&&this.i&&c==3&&(PE(this.U,this.V,"tick",this.mb),this.V.start())):(Ss(this.j,this.m,o,null),mp(this,o)),c==4&&gi(this),this.i&&!this.J&&(c==4?hS(this.l,this):(this.i=!1,xu(this)))}else WO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),gi(this),ma(this)}}}catch{}finally{}};function BE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function zE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=CO(t,n),i==Cc){e==4&&(t.o=4,ft(14),r=!1),Ss(t.j,t.m,null,"[Incomplete Response]");break}else if(i==fp){t.o=4,ft(15),Ss(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ss(t.j,t.m,i,null),mp(t,i);BE(t)&&i!=Cc&&i!=fp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ft(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dg(e),e.M=!0,ft(11))):(Ss(t.j,t.m,n,"[Invalid Chunked Response]"),gi(t),ma(t))}P.mb=function(){if(this.g){var t=wn(this.g),e=this.g.ja();this.C<e.length&&(Nh(this),zE(this,t,e),this.i&&t!=4&&xu(this))}};function CO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Cc:(n=Number(e.substring(n,r)),isNaN(n)?fp:(r+=1,r+n>e.length?Cc:(e=e.slice(r,r+n),t.C=r+n,e)))}P.cancel=function(){this.J=!0,gi(this)};function xu(t){t.Y=Date.now()+t.P,jE(t,t.P)}function jE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Cu(at(t.lb,t),e)}function Nh(t){t.B&&(V.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(SO(this.j,this.A),this.L!=2&&(Ja(),ft(17)),gi(this),this.o=2,ma(this)):jE(this,this.Y-t)};function ma(t){t.l.H==0||t.J||hS(t.l,t)}function gi(t){Nh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,_g(t.V),bE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function mp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||gp(n.i,t))){if(!t.K&&gp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)xc(n),Rh(n);else break e;xg(n),ft(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Cu(at(n.ib,n),6e3));if(1>=XE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else yi(n,11)}else if((t.K||n.g==t)&&xc(n),!Ka(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const c=l[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(kg(s,s.h),s.h=null))}if(r.F){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,ae(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=pS(r,r.J?r.pa:null,r.Y),o.K){JE(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(Nh(a),xu(a)),r.g=o}else lS(r);0<n.j.length&&Ph(n)}else l[0]!="stop"&&l[0]!="close"||yi(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?yi(n,7):Ag(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ja(4)}catch{}}function NO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(vh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function AO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(vh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function qE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=AO(t),r=NO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var GE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ki(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ki){this.h=t.h,Nc(this,t.j),this.s=t.s,this.g=t.g,Ac(this,t.m),this.l=t.l;var e=t.i,n=new Za;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Tw(this,n),this.o=t.o}else t&&(e=String(t).match(GE))?(this.h=!1,Nc(this,e[1]||"",!0),this.s=Jo(e[2]||""),this.g=Jo(e[3]||"",!0),Ac(this,e[4]),this.l=Jo(e[5]||"",!0),Tw(this,e[6]||"",!0),this.o=Jo(e[7]||"")):(this.h=!1,this.i=new Za(null,this.h))}ki.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zo(e,kw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zo(e,kw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zo(n,n.charAt(0)=="/"?PO:RO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zo(n,OO)),t.join("")};function Hn(t){return new ki(t)}function Nc(t,e,n){t.j=n?Jo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ac(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Tw(t,e,n){e instanceof Za?(t.i=e,LO(t.i,t.h)):(n||(e=Zo(e,bO)),t.i=new Za(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function Ah(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Jo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,DO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function DO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kw=/[#\/\?@]/g,RO=/[#\?:]/g,PO=/[#\?]/g,bO=/[#\?@]/g,OO=/#/g;function Za(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qr(t){t.g||(t.g=new Map,t.h=0,t.i&&xO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Za.prototype;P.add=function(t,e){Qr(this),this.i=null,t=mo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function WE(t,e){Qr(t),e=mo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function KE(t,e){return Qr(t),e=mo(t,e),t.g.has(e)}P.forEach=function(t,e){Qr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};P.ta=function(){Qr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};P.Z=function(t){Qr(this);let e=[];if(typeof t=="string")KE(this,t)&&(e=e.concat(this.g.get(mo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Qr(this),this.i=null,t=mo(this,t),KE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function HE(t,e,n){WE(t,e),0<n.length&&(t.i=null,t.g.set(mo(t,e),hg(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function mo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function LO(t,e){e&&!t.j&&(Qr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(WE(this,r),HE(this,i,n))},t)),t.j=e}var MO=class{constructor(t,e){this.g=t,this.map=e}};function QE(t){this.l=t||$O,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ka&&V.g.Ka()&&V.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $O=10;function YE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function XE(t){return t.h?1:t.g?t.g.size:0}function gp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function kg(t,e){t.g?t.g.add(e):t.h=e}function JE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}QE.prototype.cancel=function(){if(this.i=ZE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ZE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return hg(t.i)}var FO=class{stringify(t){return V.JSON.stringify(t,void 0)}parse(t){return V.JSON.parse(t,void 0)}};function UO(){this.g=new FO}function VO(t,e,n){const r=n||"";try{qE(t,function(i,s){let o=i;Tu(i)&&(o=vg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function BO(t,e){const n=new Sh;if(V.Image){const r=new Image;r.onload=dl(pl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=dl(pl,n,r,"TestLoadImage: error",!1,e),r.onabort=dl(pl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=dl(pl,n,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function pl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Du(t){this.l=t.fc||null,this.j=t.ob||!1}qe(Du,Eg);Du.prototype.g=function(){return new xh(this.l,this.j)};Du.prototype.i=function(t){return function(){return t}}({});function xh(t,e){je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Cg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(xh,je);var Cg=0;P=xh.prototype;P.open=function(t,e){if(this.readyState!=Cg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,eu(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||V).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ru(this)),this.readyState=Cg};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,eu(this)),this.g&&(this.readyState=3,eu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function eS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ru(this):eu(this),this.readyState==3&&eS(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,Ru(this))};P.Ya=function(t){this.g&&(this.response=t,Ru(this))};P.ka=function(){this.g&&Ru(this)};function Ru(t){t.readyState=4,t.l=null,t.j=null,t.A=null,eu(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function eu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var zO=V.JSON.parse;function Ie(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tS,this.L=this.M=!1}qe(Ie,je);var tS="",jO=/^https?$/i,qO=["POST","PUT"];P=Ie.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dp.g(),this.C=this.u?Sw(this.u):Sw(dp),this.g.onreadystatechange=at(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Cw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=V.FormData&&t instanceof V.FormData,!(0<=vE(qO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{iS(this),0<this.B&&((this.L=GO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.ua,this)):this.A=Ig(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Cw(this,s)}};function GO(t){return Ks&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof cg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function Cw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nS(t),Dh(t)}function nS(t){t.F||(t.F=!0,Ze(t,"complete"),Ze(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ze(this,"complete"),Ze(this,"abort"),Dh(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dh(this,!0)),Ie.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?rS(this):this.kb())};P.kb=function(){rS(this)};function rS(t){if(t.h&&typeof cg<"u"&&(!t.C[1]||wn(t)!=4||t.da()!=2)){if(t.v&&wn(t)==4)Ig(t.La,0,t);else if(Ze(t,"readystatechange"),wn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(GE)[1]||null;!i&&V.self&&V.self.location&&(i=V.self.location.protocol.slice(0,-1)),r=!jO.test(i?i.toLowerCase():"")}n=r}if(n)Ze(t,"complete"),Ze(t,"success");else{t.m=6;try{var s=2<wn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",nS(t)}}finally{Dh(t)}}}}function Dh(t,e){if(t.g){iS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function iS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function wn(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),zO(e)}};function Nw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case tS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function WO(t){const e={};t=(t.g&&2<=wn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ka(t[r]))continue;var n=yO(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}cO(e,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sS(t){let e="";return fg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ng(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=sS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function Fo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function oS(t){this.Ga=0,this.j=[],this.l=new Sh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Fo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Fo("baseRetryDelayMs",5e3,t),this.hb=Fo("retryDelaySeedMs",1e4,t),this.eb=Fo("forwardChannelMaxRetries",2,t),this.xa=Fo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new QE(t&&t.concurrentRequestLimit),this.Ja=new UO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=oS.prototype;P.ra=8;P.H=1;function Ag(t){if(aS(t),t.H==3){var e=t.W++,n=Hn(t.I);if(ae(n,"SID",t.K),ae(n,"RID",e),ae(n,"TYPE","terminate"),Pu(t,n),e=new Au(t,t.l,e),e.L=2,e.v=Ah(Hn(n)),n=!1,V.navigator&&V.navigator.sendBeacon)try{n=V.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=mS(e.l,null),e.g.ha(e.v)),e.G=Date.now(),xu(e)}fS(t)}function Rh(t){t.g&&(Dg(t),t.g.cancel(),t.g=null)}function aS(t){Rh(t),t.u&&(V.clearTimeout(t.u),t.u=null),xc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function Ph(t){if(!YE(t.i)&&!t.m){t.m=!0;var e=t.Na;Qa||DE(),Ya||(Qa(),Ya=!0),wg.add(e,t),t.C=0}}function KO(t,e){return XE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Cu(at(t.Na,t,e),dS(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Au(this,this.l,t);let s=this.s;if(this.U&&(s?(s=EE(s),SE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=uS(this,i,e),n=Hn(this.I),ae(n,"RID",t),ae(n,"CVER",22),this.F&&ae(n,"X-HTTP-Session-Id",this.F),Pu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(sS(s)))+"&"+e:this.o&&Ng(n,this.o,s)),kg(this.i,i),this.bb&&ae(n,"TYPE","init"),this.P?(ae(n,"$req",e),ae(n,"SID","null"),i.aa=!0,pp(i,n,null)):pp(i,n,e),this.H=2}}else this.H==3&&(t?Aw(this,t):this.j.length==0||YE(this.i)||Aw(this))};function Aw(t,e){var n;e?n=e.m:n=t.W++;const r=Hn(t.I);ae(r,"SID",t.K),ae(r,"RID",n),ae(r,"AID",t.V),Pu(t,r),t.o&&t.s&&Ng(r,t.o,t.s),n=new Au(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=uS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),kg(t.i,n),pp(n,r,e)}function Pu(t,e){t.na&&fg(t.na,function(n,r){ae(e,r,n)}),t.h&&qE({},function(n,r){ae(e,r,n)})}function uS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?at(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].g;const c=i[u].map;if(l-=s,0>l)s=Math.max(0,i[u].g-100),a=!1;else try{VO(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function lS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Qa||DE(),Ya||(Qa(),Ya=!0),wg.add(e,t),t.A=0}}function xg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Cu(at(t.Ma,t),dS(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,cS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Cu(at(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ft(10),Rh(this),cS(this))};function Dg(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function cS(t){t.g=new Au(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Hn(t.wa);ae(e,"RID","rpc"),ae(e,"SID",t.K),ae(e,"AID",t.V),ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ae(e,"TO",t.qa),ae(e,"TYPE","xmlhttp"),Pu(t,e),t.o&&t.s&&Ng(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ah(Hn(e)),n.s=null,n.S=!0,VE(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Rh(this),xg(this),ft(19))};function xc(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function hS(t,e){var n=null;if(t.g==e){xc(t),Dg(t),t.g=null;var r=2}else if(gp(t.i,e))n=e.F,JE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Th(),Ze(r,new ME(r,n)),Ph(t)}else lS(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&KO(t,e)||r==2&&xg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:yi(t,5);break;case 4:yi(t,10);break;case 3:yi(t,6);break;default:yi(t,2)}}}function dS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function yi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=at(t.pb,t);n||(n=new ki("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||Nc(n,"https"),Ah(n)),BO(n.toString(),r)}else ft(2);t.H=0,t.h&&t.h.za(e),fS(t),aS(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ft(2)):(this.l.info("Failed to ping google.com"),ft(1))};function fS(t){if(t.H=0,t.ma=[],t.h){const e=ZE(t.i);(e.length!=0||t.j.length!=0)&&(vw(t.ma,e),vw(t.ma,t.j),t.i.i.length=0,hg(t.j),t.j.length=0),t.h.ya()}}function pS(t,e,n){var r=n instanceof ki?Hn(n):new ki(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ac(r,r.m);else{var i=V.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ki(null);r&&Nc(s,r),e&&(s.g=e),i&&Ac(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ae(r,n,e),ae(r,"VER",t.ra),Pu(t,r),r}function mS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ie(new Du({ob:!0})):new Ie(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function gS(){}P=gS.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function Dc(){if(Ks&&!(10<=Number(oO)))throw Error("Environmental error: no available transport.")}Dc.prototype.g=function(t,e){return new Mt(t,e)};function Mt(t,e){je.call(this),this.g=new oS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ka(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ka(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new go(this)}qe(Mt,je);Mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ft(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=pS(t,null,t.Y),Ph(t)};Mt.prototype.close=function(){Ag(this.g)};Mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=vg(t),t=n);e.j.push(new MO(e.fb++,t)),e.H==3&&Ph(e)};Mt.prototype.N=function(){this.g.h=null,delete this.j,Ag(this.g),delete this.g,Mt.$.N.call(this)};function yS(t){Sg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(yS,Sg);function vS(){Tg.call(this),this.status=1}qe(vS,Tg);function go(t){this.g=t}qe(go,gS);go.prototype.Ba=function(){Ze(this.g,"a")};go.prototype.Aa=function(t){Ze(this.g,new yS(t))};go.prototype.za=function(t){Ze(this.g,new vS)};go.prototype.ya=function(){Ze(this.g,"b")};function HO(){this.blockSize=-1}function an(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}qe(an,HO);an.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Qd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}an.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Qd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Qd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Qd(this,r),i=0;break}}this.h=i,this.i+=e};an.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ne(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var QO={};function Rg(t){return-128<=t&&128>t?rO(t,function(e){return new ne([e|0],0>e?-1:0)}):new ne([t|0],0>t?-1:0)}function _n(t){if(isNaN(t)||!isFinite(t))return Os;if(0>t)return Qe(_n(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=yp;return new ne(e,0)}function wS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Qe(wS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=_n(Math.pow(e,8)),r=Os,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=_n(Math.pow(e,s)),r=r.R(s).add(_n(o))):(r=r.R(n),r=r.add(_n(o)))}return r}var yp=4294967296,Os=Rg(0),vp=Rg(1),xw=Rg(16777216);P=ne.prototype;P.ea=function(){if(zt(this))return-Qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:yp+r)*e,e*=yp}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Fn(this))return"0";if(zt(this))return"-"+Qe(this).toString(t);for(var e=_n(Math.pow(t,6)),n=this,r="";;){var i=Pc(n,e).g;n=Rc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Fn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Fn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function zt(t){return t.h==-1}P.X=function(t){return t=Rc(this,t),zt(t)?-1:Fn(t)?0:1};function Qe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ne(n,~t.h).add(vp)}P.abs=function(){return zt(this)?Qe(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ne(n,n[n.length-1]&-2147483648?-1:0)};function Rc(t,e){return t.add(Qe(e))}P.R=function(t){if(Fn(this)||Fn(t))return Os;if(zt(this))return zt(t)?Qe(this).R(Qe(t)):Qe(Qe(this).R(t));if(zt(t))return Qe(this.R(Qe(t)));if(0>this.X(xw)&&0>t.X(xw))return _n(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,u=t.D(i)&65535;n[2*r+2*i]+=o*u,ml(n,2*r+2*i),n[2*r+2*i+1]+=s*u,ml(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ml(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ml(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ne(n,0)};function ml(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Uo(t,e){this.g=t,this.h=e}function Pc(t,e){if(Fn(e))throw Error("division by zero");if(Fn(t))return new Uo(Os,Os);if(zt(t))return e=Pc(Qe(t),e),new Uo(Qe(e.g),Qe(e.h));if(zt(e))return e=Pc(t,Qe(e)),new Uo(Qe(e.g),e.h);if(30<t.g.length){if(zt(t)||zt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=vp,r=e;0>=r.X(t);)n=Dw(n),r=Dw(r);var i=rs(n,1),s=rs(r,1);for(r=rs(r,2),n=rs(n,2);!Fn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=rs(r,1),n=rs(n,1)}return e=Rc(t,i.R(e)),new Uo(i,e)}for(i=Os;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=_n(n),o=s.R(e);zt(o)||0<o.X(t);)n-=r,s=_n(n),o=s.R(e);Fn(s)&&(s=vp),i=i.add(s),t=Rc(t,o)}return new Uo(i,t)}P.gb=function(t){return Pc(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ne(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ne(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ne(n,this.h^t.h)};function Dw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ne(n,t.h)}function rs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ne(i,t.h)}Dc.prototype.createWebChannel=Dc.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;kh.NO_ERROR=0;kh.TIMEOUT=8;kh.HTTP_ERROR=6;$E.COMPLETE="complete";FE.EventType=Nu;Nu.OPEN="a";Nu.CLOSE="b";Nu.ERROR="c";Nu.MESSAGE="d";je.prototype.listen=je.prototype.O;Ie.prototype.listenOnce=Ie.prototype.P;Ie.prototype.getLastError=Ie.prototype.Sa;Ie.prototype.getLastErrorCode=Ie.prototype.Ia;Ie.prototype.getStatus=Ie.prototype.da;Ie.prototype.getResponseJson=Ie.prototype.Wa;Ie.prototype.getResponseText=Ie.prototype.ja;Ie.prototype.send=Ie.prototype.ha;Ie.prototype.setWithCredentials=Ie.prototype.Oa;an.prototype.digest=an.prototype.l;an.prototype.reset=an.prototype.reset;an.prototype.update=an.prototype.j;ne.prototype.add=ne.prototype.add;ne.prototype.multiply=ne.prototype.R;ne.prototype.modulo=ne.prototype.gb;ne.prototype.compare=ne.prototype.X;ne.prototype.toNumber=ne.prototype.ea;ne.prototype.toString=ne.prototype.toString;ne.prototype.getBits=ne.prototype.D;ne.fromNumber=_n;ne.fromString=wS;var YO=function(){return new Dc},XO=function(){return Th()},Yd=kh,JO=$E,ZO=Qi,Rw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},e2=Du,gl=FE,t2=Ie,n2=an,Ls=ne;const Pw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo="9.22.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new uh("@firebase/firestore");function wp(){return Or.logLevel}function r2(t){Or.setLogLevel(t)}function S(t,...e){if(Or.logLevel<=Y.DEBUG){const n=e.map(Pg);Or.debug(`Firestore (${yo}): ${t}`,...n)}}function ke(t,...e){if(Or.logLevel<=Y.ERROR){const n=e.map(Pg);Or.error(`Firestore (${yo}): ${t}`,...n)}}function un(t,...e){if(Or.logLevel<=Y.WARN){const n=e.map(Pg);Or.warn(`Firestore (${yo}): ${t}`,...n)}}function Pg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${yo}) INTERNAL ASSERTION FAILED: `+t;throw ke(e),new Error(e)}function F(t,e){t||b()}function i2(t,e){t||b()}function R(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ve.UNAUTHENTICATED))}shutdown(){}}class o2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class a2{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ze;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ze,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ze)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new _S(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new Ve(e)}}class u2{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class l2{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new u2(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class c2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class h2{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,S("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(F(typeof n.token=="string"),this.T=n.token,new c2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=d2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function B(t,e){return t<e?-1:t>e?1:0}function Hs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function ES(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new E(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new E(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new pe(0,0))}static max(){return new $(new pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class X extends tu{construct(e,n,r){return new X(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new E(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new X(n)}static emptyPath(){return new X([])}}const f2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ce extends tu{construct(e,n,r){return new Ce(e,n,r)}static isValidIdentifier(e){return f2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ce(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new E(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new E(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new E(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new E(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ce(n)}static emptyPath(){return new Ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(X.fromString(e))}static fromName(e){return new x(X.fromString(e).popFirst(5))}static empty(){return new x(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return X.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new X(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function _p(t){return t.fields.find(e=>e.kind===2)}function oi(t){return t.fields.filter(e=>e.kind!==2)}SS.UNKNOWN_ID=-1;class p2{constructor(e,n){this.fieldPath=e,this.kind=n}}class bc{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new bc(0,$t.min())}}function TS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new $t(i,x.empty(),e)}function kS(t){return new $t(t.readTime,t.key,-1)}class $t{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $t($.min(),x.empty(),-1)}static max(){return new $t($.max(),x.empty(),-1)}}function bg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=x.comparator(t.documentKey,e.documentKey),n!==0?n:B(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==CS)throw t;S("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new v((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):v.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):v.reject(n)}static resolve(e){return new v((n,r)=>{n(e)})}static reject(e){return new v((n,r)=>{r(e)})}static waitFor(e){return new v((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=v.resolve(!1);for(const r of e)n=n.next(i=>i?v.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new v((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new v((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.v=new ze,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{n.error?this.v.reject(new ga(e,n.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=Og(r.target.error);this.v.reject(new ga(e,i))}}static open(e,n,r,i){try{return new bh(n,e.transaction(i,r))}catch(s){throw new ga(n,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(S("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new g2(n)}}class en{constructor(e,n,r){this.name=e,this.version=n,this.V=r,en.S(ve())===12.2&&ke("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return S("SimpleDb","Removing database:",e),ai(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Ua())return!1;if(en.C())return!0;const e=ve(),n=en.S(e),r=0<n&&n<10,i=en.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(S("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ga(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new E(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new E(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ga(e,o))},i.onupgradeneeded=s=>{S("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{S("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=bh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.P(),l)).catch(l=>(a.abort(l),v.reject(l))).toPromise();return u.catch(()=>{}),await a.R,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(S("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class m2{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return ai(this.L.delete())}}class ga extends E{constructor(e,n){super(_.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Xr(t){return t.name==="IndexedDbTransactionError"}class g2{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(S("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(S("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ai(r)}add(e){return S("SimpleDb","ADD",this.store.name,e,e),ai(this.store.add(e))}get(e){return ai(this.store.get(e)).next(n=>(n===void 0&&(n=null),S("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return S("SimpleDb","DELETE",this.store.name,e),ai(this.store.delete(e))}count(){return S("SimpleDb","COUNT",this.store.name),ai(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new v((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new v((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){S("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Z(e){const n=this.cursor({});return new v((r,i)=>{n.onerror=s=>{const o=Og(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new v((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new m2(a),l=n(a.primaryKey,a.value,u);if(l instanceof v){const c=l.catch(h=>(u.done(),v.reject(h)));r.push(c)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>v.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ai(t){return new v((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Og(r.target.error);n(i)}})}let bw=!1;function Og(t){const e=en.S(ve());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return bw||(bw=!0,setTimeout(()=>{throw r},0)),r}}return t}class y2{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){S("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{S("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){Xr(n)?S("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Yr(n)}await this.et(6e4)})}}class v2{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return v.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return S("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(S("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=kS(s);bg(o,r)>0&&(r=o)}),new $t(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}St.ct=-1;function bu(t){return t==null}function nu(t){return t===0&&1/t==-1/0}function AS(t){return typeof t=="number"&&Number.isInteger(t)&&!nu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ow(e)),e=w2(t.get(n),e);return Ow(e)}function w2(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Ow(t){return t+""}function In(t){const e=t.length;if(F(e>=2),e===2)return F(t.charAt(0)===""&&t.charAt(1)===""),X.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&b(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:b()}s=o+2}return new X(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t,e){return[t,gt(e)]}function xS(t,e,n){return[t,gt(e),n]}const _2={},I2=["prefixPath","collectionGroup","readTime","documentId"],E2=["prefixPath","collectionGroup","documentId"],S2=["collectionGroup","readTime","prefixPath","documentId"],T2=["canonicalId","targetId"],k2=["targetId","path"],C2=["path","targetId"],N2=["collectionId","parent"],A2=["indexId","uid"],x2=["uid","sequenceNumber"],D2=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],R2=["indexId","uid","orderedDocumentKey"],P2=["userId","collectionPath","documentId"],b2=["userId","collectionPath","largestBatchId"],O2=["userId","collectionGroup","largestBatchId"],DS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],L2=[...DS,"documentOverlays"],RS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],PS=RS,M2=[...PS,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip extends NS{constructor(e,n){super(),this.ht=e,this.currentSequenceNumber=n}}function Ge(t,e){const n=R(t);return en.M(n.ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yl(this.root,e,this.comparator,!1)}getReverseIterator(){return new yl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yl(this.root,e,this.comparator,!0)}}class yl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,r,i){return this}insert(t,e,n){return new He(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $w(this.data.getIterator())}getIteratorFrom(e){return new $w(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ce(this.comparator);return n.data=e,n}}class $w{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function is(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.fields=e,e.sort(Ce.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new ce(Ce.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new OS("Invalid base64 string: "+i):i}}(e);return new Le(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Le(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const F2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(F(!!t),typeof t=="string"){let e=0;const n=F2.exec(t);if(F(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mr(t){return typeof t=="string"?Le.fromBase64String(t):Le.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lg(t){const e=t.mapValue.fields.__previous_value__;return Oh(e)?Lg(e):e}function ru(t){const e=Lr(t.mapValue.fields.__local_write_time__.timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n,r,i,s,o,a,u,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class $r{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $r&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},zl={nullValue:"NULL_VALUE"};function Mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Oh(t)?4:LS(t)?9007199254740991:10:b()}function Dn(t,e){if(t===e)return!0;const n=Mi(t);if(n!==Mi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ru(t).isEqual(ru(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Lr(r.timestampValue),o=Lr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Mr(r.bytesValue).isEqual(Mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return _e(r.geoPointValue.latitude)===_e(i.geoPointValue.latitude)&&_e(r.geoPointValue.longitude)===_e(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return _e(r.integerValue)===_e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=_e(r.doubleValue),o=_e(i.doubleValue);return s===o?nu(s)===nu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Hs(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Mw(s)!==Mw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Dn(s[a],o[a])))return!1;return!0}(t,e);default:return b()}}function iu(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function Fr(t,e){if(t===e)return 0;const n=Mi(t),r=Mi(e);if(n!==r)return B(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return B(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=_e(i.integerValue||i.doubleValue),a=_e(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Fw(t.timestampValue,e.timestampValue);case 4:return Fw(ru(t),ru(e));case 5:return B(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Mr(i),a=Mr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=B(o[u],a[u]);if(l!==0)return l}return B(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=B(_e(i.latitude),_e(s.latitude));return o!==0?o:B(_e(i.longitude),_e(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Fr(o[u],a[u]);if(l)return l}return B(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===gr.mapValue&&s===gr.mapValue)return 0;if(i===gr.mapValue)return 1;if(s===gr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=B(a[c],l[c]);if(h!==0)return h;const d=Fr(o[a[c]],u[l[c]]);if(d!==0)return d}return B(a.length,l.length)}(t.mapValue,e.mapValue);default:throw b()}}function Fw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return B(t,e);const n=Lr(t),r=Lr(e),i=B(n.seconds,r.seconds);return i!==0?i:B(n.nanos,r.nanos)}function Qs(t){return Ep(t)}function Ep(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Lr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,x.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ep(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ep(r.fields[a])}`;return s+"}"}(t.mapValue):b();var e,n}function $i(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sp(t){return!!t&&"integerValue"in t}function su(t){return!!t&&"arrayValue"in t}function Uw(t){return!!t&&"nullValue"in t}function Vw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jl(t){return!!t&&"mapValue"in t}function ya(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ya(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ya(t.arrayValue.values[n]);return e}return Object.assign({},t)}function LS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function V2(t){return"nullValue"in t?zl:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?$i($r.empty(),x.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:b()}function B2(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?$i($r.empty(),x.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?gr:b()}function Bw(t,e){const n=Fr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function zw(t,e){const n=Fr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.value=e}static empty(){return new Ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!jl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ya(n)}setAll(e){let n=Ce.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ya(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());jl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];jl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ye(ya(this.value))}}function MS(t){const e=[];return Yi(t.fields,(n,r)=>{const i=new Ce([n]);if(jl(r)){const s=MS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ue(e,0,$.min(),$.min(),$.min(),Ye.empty(),0)}static newFoundDocument(e,n,r,i){return new ue(e,1,n,$.min(),r,i,0)}static newNoDocument(e,n){return new ue(e,2,n,$.min(),$.min(),Ye.empty(),0)}static newUnknownDocument(e,n){return new ue(e,3,n,$.min(),$.min(),Ye.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){this.position=e,this.inclusive=n}}function jw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),n.key):r=Fr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function qw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n="asc"){this.field=e,this.dir=n}}function z2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{}class K extends $S{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new j2(e,n,r):n==="array-contains"?new W2(e,r):n==="in"?new jS(e,r):n==="not-in"?new K2(e,r):n==="array-contains-any"?new H2(e,r):new K(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new q2(e,r):new G2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fr(n,this.value)):n!==null&&Mi(this.value)===Mi(n)&&this.matchesComparison(Fr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ee extends $S{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new ee(e,n)}matches(e){return Ys(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ys(t){return t.op==="and"}function Tp(t){return t.op==="or"}function Mg(t){return FS(t)&&Ys(t)}function FS(t){for(const e of t.filters)if(e instanceof ee)return!1;return!0}function kp(t){if(t instanceof K)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(Mg(t))return t.filters.map(e=>kp(e)).join(",");{const e=t.filters.map(n=>kp(n)).join(",");return`${t.op}(${e})`}}function US(t,e){return t instanceof K?function(n,r){return r instanceof K&&n.op===r.op&&n.field.isEqual(r.field)&&Dn(n.value,r.value)}(t,e):t instanceof ee?function(n,r){return r instanceof ee&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&US(s,r.filters[o]),!0):!1}(t,e):void b()}function VS(t,e){const n=t.filters.concat(e);return ee.create(n,t.op)}function BS(t){return t instanceof K?function(e){return`${e.field.canonicalString()} ${e.op} ${Qs(e.value)}`}(t):t instanceof ee?function(e){return e.op.toString()+" {"+e.getFilters().map(BS).join(" ,")+"}"}(t):"Filter"}class j2 extends K{constructor(e,n,r){super(e,n,r),this.key=x.fromName(r.referenceValue)}matches(e){const n=x.comparator(e.key,this.key);return this.matchesComparison(n)}}class q2 extends K{constructor(e,n){super(e,"in",n),this.keys=zS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class G2 extends K{constructor(e,n){super(e,"not-in",n),this.keys=zS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>x.fromName(r.referenceValue))}class W2 extends K{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return su(n)&&iu(n.arrayValue,this.value)}}class jS extends K{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&iu(this.value.arrayValue,n)}}class K2 extends K{constructor(e,n){super(e,"not-in",n)}matches(e){if(iu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!iu(this.value.arrayValue,n)}}class H2 extends K{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!su(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>iu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Cp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Q2(t,e,n,r,i,s,o)}function Fi(t){const e=R(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),bu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),e.dt=n}return e.dt}function Ou(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!z2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!US(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qw(t.startAt,e.startAt)&&qw(t.endAt,e.endAt)}function Oc(t){return x.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Lc(t,e){return t.filters.filter(n=>n instanceof K&&n.field.isEqual(e))}function Gw(t,e,n){let r=zl,i=!0;for(const s of Lc(t,e)){let o=zl,a=!0;switch(s.op){case"<":case"<=":o=V2(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=zl}Bw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Bw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Ww(t,e,n){let r=gr,i=!0;for(const s of Lc(t,e)){let o=gr,a=!0;switch(s.op){case">=":case">":o=B2(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=gr}zw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];zw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function qS(t,e,n,r,i,s,o,a){return new Zn(t,e,n,r,i,s,o,a)}function vo(t){return new Zn(t)}function Kw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $g(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Lh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Fg(t){return t.collectionGroup!==null}function Ci(t){const e=R(t);if(e.wt===null){e.wt=[];const n=Lh(e),r=$g(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Ms(n)),e.wt.push(new Ms(Ce.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ms(Ce.keyField(),s))}}}return e.wt}function xt(t){const e=R(t);if(!e._t)if(e.limitType==="F")e._t=Cp(e.path,e.collectionGroup,Ci(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ci(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ms(s.field,o))}const r=e.endAt?new Ur(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ur(e.startAt.position,e.startAt.inclusive):null;e._t=Cp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Np(t,e){e.getFirstInequalityField(),Lh(t);const n=t.filters.concat([e]);return new Zn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Mc(t,e,n){return new Zn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lu(t,e){return Ou(xt(t),xt(e))&&t.limitType===e.limitType}function GS(t){return`${Fi(xt(t))}|lt:${t.limitType}`}function Ap(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>BS(r)).join(", ")}]`),bu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),`Target(${n})`}(xt(t))}; limitType=${t.limitType})`}function Mu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):x.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ci(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=jw(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ci(n),r)||n.endAt&&!function(i,s,o){const a=jw(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ci(n),r))}(t,e)}function WS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function KS(t){return(e,n)=>{let r=!1;for(const i of Ci(t)){const s=Y2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Y2(t,e,n){const r=t.field.isKeyField()?x.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Fr(a,u):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return bS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=new se(x.comparator);function kt(){return X2}const HS=new se(x.comparator);function ea(...t){let e=HS;for(const n of t)e=e.insert(n.key,n);return e}function QS(t){let e=HS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function En(){return va()}function YS(){return va()}function va(){return new Jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const J2=new se(x.comparator),Z2=new ce(x.comparator);function z(...t){let e=Z2;for(const n of t)e=e.add(n);return e}const eL=new ce(B);function Ug(){return eL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nu(e)?"-0":e}}function JS(t){return{integerValue:""+t}}function ZS(t,e){return AS(e)?JS(e):XS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this._=void 0}}function tL(t,e,n){return t instanceof Xs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Oh(i)&&(i=Lg(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ui?tT(t,e):t instanceof Vi?nT(t,e):function(r,i){const s=eT(r,i),o=Hw(s)+Hw(r.gt);return Sp(s)&&Sp(r.gt)?JS(o):XS(r.serializer,o)}(t,e)}function nL(t,e,n){return t instanceof Ui?tT(t,e):t instanceof Vi?nT(t,e):n}function eT(t,e){return t instanceof Js?Sp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Xs extends Mh{}class Ui extends Mh{constructor(e){super(),this.elements=e}}function tT(t,e){const n=rT(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Vi extends Mh{constructor(e){super(),this.elements=e}}function nT(t,e){let n=rT(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class Js extends Mh{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Hw(t){return _e(t.integerValue||t.doubleValue)}function rT(t){return su(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.field=e,this.transform=n}}function rL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ui&&r instanceof Ui||n instanceof Vi&&r instanceof Vi?Hs(n.elements,r.elements,Dn):n instanceof Js&&r instanceof Js?Dn(n.gt,r.gt):n instanceof Xs&&r instanceof Xs}(t.transform,e.transform)}class iL{constructor(e,n){this.version=e,this.transformResults=n}}class fe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fe}static exists(e){return new fe(void 0,e)}static updateTime(e){return new fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $h{}function iT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _o(t.key,fe.none()):new wo(t.key,t.data,fe.none());{const n=t.data,r=Ye.empty();let i=new ce(Ce.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new er(t.key,r,new Tt(i.toArray()),fe.none())}}function sL(t,e,n){t instanceof wo?function(r,i,s){const o=r.value.clone(),a=Yw(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof er?function(r,i,s){if(!ql(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Yw(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(sT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function wa(t,e,n,r){return t instanceof wo?function(i,s,o,a){if(!ql(i.precondition,s))return o;const u=i.value.clone(),l=Xw(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof er?function(i,s,o,a){if(!ql(i.precondition,s))return o;const u=Xw(i.fieldTransforms,a,s),l=s.data;return l.setAll(sT(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ql(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function oL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=eT(r.transform,i||null);s!=null&&(n===null&&(n=Ye.empty()),n.set(r.field,s))}return n||null}function Qw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Hs(n,r,(i,s)=>rL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wo extends $h{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class er extends $h{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yw(t,e,n){const r=new Map;F(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,nL(o,a,n[i]))}return r}function Xw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tL(s,o,e))}return r}class _o extends $h{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vg extends $h{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=YS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=iT(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),z())}isEqual(e){return this.batchId===e.batchId&&Hs(this.mutations,e.mutations,(n,r)=>Qw(n,r))&&Hs(this.baseMutations,e.baseMutations,(n,r)=>Qw(n,r))}}class zg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){F(e.mutations.length===r.length);let i=J2;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new zg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,Q;function oT(t){switch(t){default:return b();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function aT(t){if(t===void 0)return ke("GRPC error has no .code"),_.UNKNOWN;switch(t){case xe.OK:return _.OK;case xe.CANCELLED:return _.CANCELLED;case xe.UNKNOWN:return _.UNKNOWN;case xe.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case xe.INTERNAL:return _.INTERNAL;case xe.UNAVAILABLE:return _.UNAVAILABLE;case xe.UNAUTHENTICATED:return _.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case xe.NOT_FOUND:return _.NOT_FOUND;case xe.ALREADY_EXISTS:return _.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return _.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case xe.ABORTED:return _.ABORTED;case xe.OUT_OF_RANGE:return _.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return _.UNIMPLEMENTED;case xe.DATA_LOSS:return _.DATA_LOSS;default:return b()}}(Q=xe||(xe={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return vl}static getOrCreateInstance(){return vl===null&&(vl=new qg),vl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let vl=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL=new Ls([4294967295,4294967295],0);function Jw(t){const e=uT().encode(t),n=new n2;return n.update(e),new Uint8Array(n.digest())}function Zw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ls([n,r],0),new Ls([i,s],0)]}class Gg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ta(`Invalid padding: ${n}`);if(r<0)throw new ta(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ta(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ta(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Ls.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Ls.fromNumber(r)));return i.compare(uL)===1&&(i=new Ls([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Jw(e),[r,i]=Zw(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Gg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Jw(e),[r,i]=Zw(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ta extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Uu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fu($.min(),i,new se(B),kt(),z())}}class Uu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Uu(r,n,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class lT{constructor(e,n){this.targetId=e,this.Vt=n}}class cT{constructor(e,n,r=Le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class e0{constructor(){this.St=0,this.Dt=n0(),this.Ct=Le.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=z(),n=z(),r=z();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new Uu(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=n0()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class lL{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=kt(),this.zt=t0(),this.Wt=new se(B)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Oc(o))if(i===0){const a=new x(o.path);this.Yt(r,a,ue.newNoDocument(a,$.min()))}else F(i===1);else{const a=this.ie(r);if(a!==i){const u=this.re(e,a);if(u!==0){this.ee(r);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,l)}(n=qg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,c,h){var d,p,y,w,N,m;const f={localCacheCount:c,existenceFilterCount:h.count},g=h.unchangedNames;return g&&(f.bloomFilter={applied:l===0,hashCount:(d=g==null?void 0:g.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(w=(y=(p=g==null?void 0:g.bits)===null||p===void 0?void 0:p.bitmap)===null||y===void 0?void 0:y.length)!==null&&w!==void 0?w:0,padding:(m=(N=g==null?void 0:g.bits)===null||N===void 0?void 0:N.padding)!==null&&m!==void 0?m:0}),f}(u,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let u,l;try{u=Mr(s).toUint8Array()}catch(c){if(c instanceof OS)return un("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{l=new Gg(u,o,a)}catch(c){return un(c instanceof ta?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return l.It===0?1:i!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Oc(a.target)){const u=new x(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,ue.newNoDocument(u,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=z();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.se(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Fu(e,n,this.Wt,this.jt,r);return this.jt=kt(),this.zt=t0(),this.Wt=new se(B),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new e0,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new ce(B),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||S("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new e0),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function t0(){return new se(x.comparator)}function n0(){return new se(x.comparator)}const cL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),dL=(()=>({and:"AND",or:"OR"}))();class fL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xp(t,e){return t.useProto3Json||bu(e)?e:{value:e}}function Zs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pL(t,e){return Zs(t,e.toTimestamp())}function Ne(t){return F(!!t),$.fromTimestamp(function(e){const n=Lr(e);return new pe(n.seconds,n.nanos)}(t))}function Wg(t,e){return function(n){return new X(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function dT(t){const e=X.fromString(t);return F(IT(e)),e}function ou(t,e){return Wg(t.databaseId,e.path)}function Cn(t,e){const n=dT(e);if(n.get(1)!==t.databaseId.projectId)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new x(pT(n))}function Dp(t,e){return Wg(t.databaseId,e)}function fT(t){const e=dT(t);return e.length===4?X.emptyPath():pT(e)}function au(t){return new X(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pT(t){return F(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function r0(t,e,n){return{name:ou(t,e),fields:n.value.mapValue.fields}}function mT(t,e,n){const r=Cn(t,e.name),i=Ne(e.updateTime),s=e.createTime?Ne(e.createTime):$.min(),o=new Ye({mapValue:{fields:e.fields}}),a=ue.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function mL(t,e){return"found"in e?function(n,r){F(!!r.found),r.found.name,r.found.updateTime;const i=Cn(n,r.found.name),s=Ne(r.found.updateTime),o=r.found.createTime?Ne(r.found.createTime):$.min(),a=new Ye({mapValue:{fields:r.found.fields}});return ue.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){F(!!r.missing),F(!!r.readTime);const i=Cn(n,r.missing),s=Ne(r.readTime);return ue.newNoDocument(i,s)}(t,e):b()}function gL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(F(l===void 0||typeof l=="string"),Le.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),Le.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?_.UNKNOWN:aT(u.code);return new E(l,u.message||"")}(o);n=new cT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cn(t,r.document.name),s=Ne(r.document.updateTime),o=r.document.createTime?Ne(r.document.createTime):$.min(),a=new Ye({mapValue:{fields:r.document.fields}}),u=ue.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new Gl(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cn(t,r.document),s=r.readTime?Ne(r.readTime):$.min(),o=ue.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Gl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cn(t,r.document),s=r.removedTargetIds||[];n=new Gl([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new aL(i,s),a=r.targetId;n=new lT(a,o)}}return n}function uu(t,e){let n;if(e instanceof wo)n={update:r0(t,e.key,e.value)};else if(e instanceof _o)n={delete:ou(t,e.key)};else if(e instanceof er)n={update:r0(t,e.key,e.data),updateMask:EL(e.fieldMask)};else{if(!(e instanceof Vg))return b();n={verify:ou(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Xs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ui)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Vi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Js)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:pL(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(t,e.precondition)),n}function Rp(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?fe.updateTime(Ne(i.updateTime)):i.exists!==void 0?fe.exists(i.exists):fe.none()}(e.currentDocument):fe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)F(o.setToServerValue==="REQUEST_TIME"),a=new Xs;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Ui(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Vi(l)}else"increment"in o?a=new Js(s,o.increment):b();const u=Ce.fromServerFormat(o.fieldPath);return new $u(u,a)}(t,i)):[];if(e.update){e.update.name;const i=Cn(t,e.update.name),s=new Ye({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Tt(u.map(l=>Ce.fromServerFormat(l)))}(e.updateMask);return new er(i,s,o,n,r)}return new wo(i,s,n,r)}if(e.delete){const i=Cn(t,e.delete);return new _o(i,n)}if(e.verify){const i=Cn(t,e.verify);return new Vg(i,n)}return b()}function yL(t,e){return t&&t.length>0?(F(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ne(r.updateTime):Ne(i);return s.isEqual($.min())&&(s=Ne(i)),new iL(s,r.transformResults||[])}(n,e))):[]}function gT(t,e){return{documents:[Dp(t,e.path)]}}function yT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Dp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Dp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return _T(ee.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:os(c.field),direction:wL(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=xp(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function vT(t){let e=fT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){F(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=wT(c);return h instanceof ee&&Mg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ms(as(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,bu(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new Ur(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new Ur(d,h)}(n.endAt)),qS(e,i,o,s,a,"F",u,l)}function vL(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function wT(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=as(e.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=as(e.unaryFilter.field);return K.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=as(e.unaryFilter.field);return K.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=as(e.unaryFilter.field);return K.create(s,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(e){return K.create(as(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ee.create(e.compositeFilter.filters.map(n=>wT(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return b()}}(e.compositeFilter.op))}(t):b()}function wL(t){return cL[t]}function _L(t){return hL[t]}function IL(t){return dL[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return Ce.fromServerFormat(t.fieldPath)}function _T(t){return t instanceof K?function(e){if(e.op==="=="){if(Vw(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NAN"}};if(Uw(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vw(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NOT_NAN"}};if(Uw(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(e.field),op:_L(e.op),value:e.value}}}(t):t instanceof ee?function(e){const n=e.getFilters().map(r=>_T(r));return n.length===1?n[0]:{compositeFilter:{op:IL(e.op),filters:n}}}(t):b()}function EL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function IT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r,i,s=$.min(),o=$.min(),a=Le.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.fe=e}}function SL(t,e){let n;if(e.document)n=mT(t.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=x.fromSegments(e.noDocument.path),i=zi(e.noDocument.readTime);n=ue.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return b();{const r=x.fromSegments(e.unknownDocument.path),i=zi(e.unknownDocument.version);n=ue.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new pe(r[0],r[1]);return $.fromTimestamp(i)}(e.readTime)),n}function i0(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:$c(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:ou(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Zs(i,s.version.toTimestamp()),createTime:Zs(i,s.createTime.toTimestamp())}}(t.fe,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Bi(e.version)};else{if(!e.isUnknownDocument())return b();r.unknownDocument={path:n.path.toArray(),version:Bi(e.version)}}return r}function $c(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Bi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function zi(t){const e=new pe(t.seconds,t.nanoseconds);return $.fromTimestamp(e)}function ui(t,e){const n=(e.baseMutations||[]).map(s=>Rp(t.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Rp(t.fe,s)),i=pe.fromMillis(e.localWriteTimeMs);return new Bg(e.batchId,i,n,r)}function na(t){const e=zi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?zi(t.lastLimboFreeSnapshotVersion):$.min();let r;var i;return t.query.documents!==void 0?(F((i=t.query).documents.length===1),r=xt(vo(fT(i.documents[0])))):r=function(s){return xt(vT(s))}(t.query),new Un(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Le.fromBase64String(t.resumeToken))}function ST(t,e){const n=Bi(e.snapshotVersion),r=Bi(e.lastLimboFreeSnapshotVersion);let i;i=Oc(e.target)?gT(t.fe,e.target):yT(t.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Fi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Kg(t){const e=vT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mc(e,e.limit,"L"):e}function Xd(t,e){return new jg(e.largestBatchId,Rp(t.fe,e.overlayMutation))}function s0(t,e){const n=e.path.lastSegment();return[t,gt(e.path.popLast()),n]}function o0(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Bi(r.readTime),documentKey:gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{getBundleMetadata(e,n){return a0(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:zi(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return a0(e).put({bundleId:(r=n).id,createTime:Bi(Ne(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return u0(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Kg(i.bundledQuery),readTime:zi(i.readTime)};var i})}saveNamedQuery(e,n){return u0(e).put(function(r){return{name:r.name,readTime:Bi(Ne(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function a0(t){return Ge(t,"bundles")}function u0(t){return Ge(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n){this.serializer=e,this.userId=n}static de(e,n){const r=n.uid||"";return new Fh(e,r)}getOverlay(e,n){return Vo(e).get(s0(this.userId,n)).next(r=>r?Xd(this.serializer,r):null)}getOverlays(e,n){const r=En();return v.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new jg(n,o);i.push(this.we(e,a))}),v.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(gt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Vo(e).J("collectionPathOverlayIndex",a))}),v.waitFor(s)}getOverlaysForCollection(e,n,r){const i=En(),s=gt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Vo(e).j("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=Xd(this.serializer,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=En();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Vo(e).X({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const h=Xd(this.serializer,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}we(e,n){return Vo(e).put(function(r,i,s){const[o,a,u]=s0(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:u,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:uu(r.fe,s.mutation)}}(this.serializer,this.userId,n))}}function Vo(t){return Ge(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){}_e(e,n){this.me(e,n),n.ge()}me(e,n){if("nullValue"in e)this.ye(n,5);else if("booleanValue"in e)this.ye(n,10),n.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(n,15),n.pe(_e(e.integerValue));else if("doubleValue"in e){const r=_e(e.doubleValue);isNaN(r)?this.ye(n,13):(this.ye(n,15),nu(r)?n.pe(0):n.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(n,20),typeof r=="string"?n.Ie(r):(n.Ie(`${r.seconds||""}`),n.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,n),this.Ee(n);else if("bytesValue"in e)this.ye(n,30),n.Ae(Mr(e.bytesValue)),this.Ee(n);else if("referenceValue"in e)this.ve(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(n,45),n.pe(r.latitude||0),n.pe(r.longitude||0)}else"mapValue"in e?LS(e)?this.ye(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Ee(n)):"arrayValue"in e?(this.Pe(e.arrayValue,n),this.Ee(n)):b()}Te(e,n){this.ye(n,25),this.be(e,n)}be(e,n){n.Ie(e)}Re(e,n){const r=e.fields||{};this.ye(n,55);for(const i of Object.keys(r))this.Te(i,n),this.me(r[i],n)}Pe(e,n){const r=e.values||[];this.ye(n,50);for(const i of r)this.me(i,n)}ve(e,n){this.ye(n,37),x.fromName(e).path.forEach(r=>{this.ye(n,60),this.be(r,n)})}ye(e,n){e.pe(n)}Ee(e){e.pe(2)}}li.Ve=new li;function kL(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function l0(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=kL(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class CL{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.De(r.value),r=n.next();this.Ce()}xe(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ne(r.value),r=n.next();this.ke()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=n.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=n.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const n=this.Fe(e),r=l0(n);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Le(e){const n=this.Fe(e),r=l0(n);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}De(e){const n=255&e;n===0?(this.Ue(0),this.Ue(255)):n===255?(this.Ue(255),this.Ue(0)):this.Ue(n)}Ne(e){const n=255&e;n===0?(this.Ge(0),this.Ge(255)):n===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class NL{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class AL{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class Bo{constructor(){this.je=new CL,this.ze=new NL(this.je),this.We=new AL(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ci(this.indexId,this.documentKey,this.arrayValue,r)}}function ir(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=c0(t.arrayValue,e.arrayValue),n!==0?n:(n=c0(t.directionalValue,e.directionalValue),n!==0?n:x.comparator(t.documentKey,e.documentKey)))}function c0(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const n of e.filters){const r=n;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){F(e.collectionGroup===this.collectionId);const n=_p(e);if(n!==void 0&&!this.en(n))return!1;const r=oi(e);let i=0,s=0;for(;i<r.length&&this.en(r[i]);++i);if(i===r.length)return!0;if(this.Ze!==void 0){const o=r[i];if(!this.nn(this.Ze,o)||!this.sn(this.Ye[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ye.length||!this.sn(this.Ye[s++],o))return!1}return!0}en(e){for(const n of this.Xe)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t){var e,n;if(F(t instanceof K||t instanceof ee),t instanceof K){if(t instanceof jS){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>K.create(t.field,"==",s)))||[];return ee.create(i,"or")}return t}const r=t.filters.map(i=>TT(i));return ee.create(r,t.op)}function DL(t){if(t.getFilters().length===0)return[];const e=Op(TT(t));return F(kT(e)),Pp(e)||bp(e)?[e]:e.getFilters()}function Pp(t){return t instanceof K}function bp(t){return t instanceof ee&&Mg(t)}function kT(t){return Pp(t)||bp(t)||function(e){if(e instanceof ee&&Tp(e)){for(const n of e.getFilters())if(!Pp(n)&&!bp(n))return!1;return!0}return!1}(t)}function Op(t){if(F(t instanceof K||t instanceof ee),t instanceof K)return t;if(t.filters.length===1)return Op(t.filters[0]);const e=t.filters.map(r=>Op(r));let n=ee.create(e,t.op);return n=Fc(n),kT(n)?n:(F(n instanceof ee),F(Ys(n)),F(n.filters.length>1),n.filters.reduce((r,i)=>Hg(r,i)))}function Hg(t,e){let n;return F(t instanceof K||t instanceof ee),F(e instanceof K||e instanceof ee),n=t instanceof K?e instanceof K?function(r,i){return ee.create([r,i],"and")}(t,e):h0(t,e):e instanceof K?h0(e,t):function(r,i){if(F(r.filters.length>0&&i.filters.length>0),Ys(r)&&Ys(i))return VS(r,i.getFilters());const s=Tp(r)?r:i,o=Tp(r)?i:r,a=s.filters.map(u=>Hg(u,o));return ee.create(a,"or")}(t,e),Fc(n)}function h0(t,e){if(Ys(e))return VS(e,t.getFilters());{const n=e.filters.map(r=>Hg(t,r));return ee.create(n,"or")}}function Fc(t){if(F(t instanceof K||t instanceof ee),t instanceof K)return t;const e=t.getFilters();if(e.length===1)return Fc(e[0]);if(FS(t))return t;const n=e.map(i=>Fc(i)),r=[];return n.forEach(i=>{i instanceof K?r.push(i):i instanceof ee&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ee.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(){this.rn=new Qg}addToCollectionParentIndex(e,n){return this.rn.add(n),v.resolve()}getCollectionParents(e,n){return v.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return v.resolve()}deleteFieldIndex(e,n){return v.resolve()}getDocumentsMatchingTarget(e,n){return v.resolve(null)}getIndexType(e,n){return v.resolve(0)}getFieldIndexes(e,n){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,n){return v.resolve($t.min())}getMinOffsetFromCollectionGroup(e,n){return v.resolve($t.min())}updateCollectionGroup(e,n,r){return v.resolve()}updateIndexEntries(e,n){return v.resolve()}}class Qg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ce(X.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ce(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new Uint8Array(0);class PL{constructor(e,n){this.user=e,this.databaseId=n,this.on=new Qg,this.un=new Jr(r=>Fi(r),(r,i)=>Ou(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const s={collectionId:r,parent:gt(i)};return d0(e).put(s)}return v.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[ES(n),""],!1,!0);return d0(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(In(o.parent))}return r})}addFieldIndex(e,n){const r=_l(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=jo(e);return s.next(a=>{o.put(o0(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=_l(e),i=jo(e),s=zo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=zo(e);let i=!0;const s=new Map;return v.forEach(this.cn(n),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=z();const a=[];return v.forEach(s,(u,l)=>{var c;S("IndexedDbIndexManager",`Using index ${c=u,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(g=>`${g.fieldPath}:${g.kind}`).join(",")}`} to execute ${Fi(n)}`);const h=function(g,I){const C=_p(I);if(C===void 0)return null;for(const A of Lc(g,C.fieldPath))switch(A.op){case"array-contains-any":return A.value.arrayValue.values||[];case"array-contains":return[A.value]}return null}(l,u),d=function(g,I){const C=new Map;for(const A of oi(I))for(const D of Lc(g,A.fieldPath))switch(D.op){case"==":case"in":C.set(A.fieldPath.canonicalString(),D.value);break;case"not-in":case"!=":return C.set(A.fieldPath.canonicalString(),D.value),Array.from(C.values())}return null}(l,u),p=function(g,I){const C=[];let A=!0;for(const D of oi(I)){const M=D.kind===0?Gw(g,D.fieldPath,g.startAt):Ww(g,D.fieldPath,g.startAt);C.push(M.value),A&&(A=M.inclusive)}return new Ur(C,A)}(l,u),y=function(g,I){const C=[];let A=!0;for(const D of oi(I)){const M=D.kind===0?Ww(g,D.fieldPath,g.endAt):Gw(g,D.fieldPath,g.endAt);C.push(M.value),A&&(A=M.inclusive)}return new Ur(C,A)}(l,u),w=this.hn(u,l,p),N=this.hn(u,l,y),m=this.ln(u,l,d),f=this.fn(u.indexId,h,w,p.inclusive,N,y.inclusive,m);return v.forEach(f,g=>r.H(g,n.limit).next(I=>{I.forEach(C=>{const A=x.fromSegments(C.documentKey);o.has(A)||(o=o.add(A),a.push(A))})}))}).next(()=>a)}return v.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=DL(ee.create(e.filters,"and")).map(r=>Cp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}fn(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let h=0;h<u;++h){const d=n?this.dn(n[h/l]):wl,p=this.wn(e,d,r[h%l],i),y=this._n(e,d,s[h%l],o),w=a.map(N=>this.wn(e,d,N,!0));c.push(...this.createRange(p,y,w))}return c}wn(e,n,r,i){const s=new ci(e,x.empty(),n,r);return i?s:s.Je()}_n(e,n,r,i){const s=new ci(e,x.empty(),n,r);return i?s.Je():s}an(e,n){const r=new xL(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return v.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let u=new ce(Ce.comparator),l=!1;for(const c of a.filters)for(const h of c.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:u=u.add(h.field));for(const c of a.orderBy)c.field.isKeyField()||(u=u.add(c.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}mn(e,n){const r=new Bo;for(const i of oi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);li.Ve._e(s,o)}return r.Qe()}dn(e){const n=new Bo;return li.Ve._e(e,n.He(0)),n.Qe()}gn(e,n){const r=new Bo;return li.Ve._e($i(this.databaseId,n),r.He(function(i){const s=oi(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,n,r){if(r===null)return[];let i=[];i.push(new Bo);let s=0;for(const o of oi(e)){const a=r[s++];for(const u of i)if(this.yn(n,o.fieldPath)&&su(a))i=this.pn(i,o,a);else{const l=u.He(o.kind);li.Ve._e(a,l)}}return this.In(i)}hn(e,n,r){return this.ln(e,n,r.position)}In(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Qe();return n}pn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Bo;u.seed(a.Qe()),li.Ve._e(o,u.He(n.kind)),s.push(u)}return s}yn(e,n){return!!e.filters.find(r=>r instanceof K&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=_l(e),i=jo(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return v.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,c){const h=c?new bc(c.sequenceNumber,new $t(zi(c.readTime),new x(In(c.documentKey)),c.largestBatchId)):bc.empty(),d=l.fields.map(([p,y])=>new p2(Ce.fromServerFormat(p),y));return new SS(l.indexId,l.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:B(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=_l(e),s=jo(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>v.forEach(a,u=>s.put(o0(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return v.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?v.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),v.forEach(a,u=>this.En(e,i,u).next(l=>{const c=this.An(s,u);return l.isEqual(c)?v.resolve():this.vn(e,s,u,l,c)}))))})}Rn(e,n,r,i){return zo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,n.key),documentKey:n.key.path.toArray()})}Pn(e,n,r,i){return zo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,n.key),n.key.path.toArray()])}En(e,n,r){const i=zo(e);let s=new ce(ir);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,n)])},(o,a)=>{s=s.add(new ci(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,n){let r=new ce(ir);const i=this.mn(n,e);if(i==null)return r;const s=_p(n);if(s!=null){const o=e.data.field(s.fieldPath);if(su(o))for(const a of o.arrayValue.values||[])r=r.add(new ci(n.indexId,e.key,this.dn(a),i))}else r=r.add(new ci(n.indexId,e.key,wl,i));return r}vn(e,n,r,i,s){S("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,u,l,c,h){const d=a.getIterator(),p=u.getIterator();let y=is(d),w=is(p);for(;y||w;){let N=!1,m=!1;if(y&&w){const f=l(y,w);f<0?m=!0:f>0&&(N=!0)}else y!=null?m=!0:N=!0;N?(c(w),w=is(p)):m?(h(y),y=is(d)):(y=is(d),w=is(p))}}(i,s,ir,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.Pn(e,n,r,a))}),v.waitFor(o)}Tn(e){let n=1;return jo(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ir(o,a)).filter((o,a,u)=>!a||ir(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ir(o,e),u=ir(o,n);if(a===0)i[0]=e.Je();else if(a>0&&u<0)i.push(o),i.push(o.Je());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,wl,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,wl,[]];s.push(IDBKeyRange.bound(a,u))}return s}bn(e,n){return ir(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(f0)}getMinOffset(e,n){return v.mapArray(this.cn(n),r=>this.an(e,r).next(i=>i||b())).next(f0)}}function d0(t){return Ge(t,"collectionParents")}function zo(t){return Ge(t,"indexEntries")}function _l(t){return Ge(t,"indexConfiguration")}function jo(t){return Ge(t,"indexState")}function f0(t){F(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;bg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new $t(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class _t{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new _t(e,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.X({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{F(a===1)}));const l=[];for(const c of n.mutations){const h=xS(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return v.waitFor(s).next(()=>l)}function Uc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw b();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(41943040,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);class Uh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,n,r,i){F(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Uh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return sr(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=us(e),o=sr(e);return o.add({}).next(a=>{F(typeof a=="number");const u=new Bg(a,n,r,i),l=function(d,p,y){const w=y.baseMutations.map(m=>uu(d.fe,m)),N=y.mutations.map(m=>uu(d.fe,m));return{userId:p,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:w,mutations:N}}(this.serializer,this.userId,u),c=[];let h=new ce((d,p)=>B(d.canonicalString(),p.canonicalString()));for(const d of i){const p=xS(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(p,_2))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=u.keys()}),v.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return sr(e).get(n).next(r=>r?(F(r.userId===this.userId),ui(this.serializer,r)):null)}Sn(e,n){return this.Vn[n]?v.resolve(this.Vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Vn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return sr(e).X({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(F(a.batchId>=r),s=ui(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return sr(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return sr(e).j("userMutationsIndex",n).next(r=>r.map(i=>ui(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Bl(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return us(e).X({range:i},(o,a,u)=>{const[l,c,h]=o,d=In(c);if(l===this.userId&&n.path.isEqual(d))return sr(e).get(h).next(p=>{if(!p)throw b();F(p.userId===this.userId),s.push(ui(this.serializer,p))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ce(B);const i=[];return n.forEach(s=>{const o=Bl(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=us(e).X({range:a},(l,c,h)=>{const[d,p,y]=l,w=In(p);d===this.userId&&s.path.isEqual(w)?r=r.add(y):h.done()});i.push(u)}),v.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Bl(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ce(B);return us(e).X({range:o},(u,l,c)=>{const[h,d,p]=u,y=In(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(p)):c.done()}).next(()=>this.Dn(e,a))}Dn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(sr(e).get(s).next(o=>{if(o===null)throw b();F(o.userId===this.userId),r.push(ui(this.serializer,o))}))}),v.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return CT(e.ht,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),v.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return v.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return us(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=In(s[1]);i.push(u)}else a.done()}).next(()=>{F(i.length===0)})})}containsKey(e,n){return NT(e,this.userId,n)}xn(e){return AT(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function NT(t,e,n){const r=Bl(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return us(t).X({range:s,Y:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function sr(t){return Ge(t,"mutations")}function us(t){return Ge(t,"documentMutations")}function AT(t){return Ge(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new ji(0)}static Mn(){return new ji(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.$n(e).next(n=>{const r=new ji(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(n=>$.fromTimestamp(new pe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.On(e,i)))}addTargetData(e,n){return this.Fn(e,n).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.Fn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ss(e).delete(n.targetId)).next(()=>this.$n(e)).next(r=>(F(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ss(e).X((o,a)=>{const u=na(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>v.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ss(e).X((r,i)=>{const s=na(i);n(s)})}$n(e){return m0(e).get("targetGlobalKey").next(n=>(F(n!==null),n))}On(e,n){return m0(e).put("targetGlobalKey",n)}Fn(e,n){return ss(e).put(ST(this.serializer,n))}Bn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Fi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ss(e).X({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=na(a);Ou(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=hr(e);return n.forEach(o=>{const a=gt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),v.waitFor(i)}removeMatchingKeys(e,n,r){const i=hr(e);return v.forEach(n,s=>{const o=gt(s.path);return v.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=hr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=hr(e);let s=z();return i.X({range:r,Y:!0},(o,a,u)=>{const l=In(o[1]),c=new x(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=gt(n.path),i=IDBKeyRange.bound([r],[ES(r)],!1,!0);let s=0;return hr(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}le(e,n){return ss(e).get(n).next(r=>r?na(r):null)}}function ss(t){return Ge(t,"targets")}function m0(t){return Ge(t,"targetGlobal")}function hr(t){return Ge(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0([t,e],[n,r]){const i=B(t,n);return i===0?B(e,r):i}class OL{constructor(e){this.Ln=e,this.buffer=new ce(g0),this.qn=0}Un(){return++this.qn}Kn(e){const n=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();g0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class LL{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){S("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Xr(n)?S("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Yr(n)}await this.Qn(3e5)})}}class ML{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return v.resolve(St.ct);const r=new OL(n);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(S("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(p0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(S("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),p0):this.Hn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(S("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),wp()<=Y.DEBUG&&S("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function $L(t,e){return new ML(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e,n){this.db=e,this.garbageCollector=$L(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.Wn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Wn(e,n){return this.Yn(e,(r,i)=>n(i))}addReference(e,n,r){return Il(e,r)}removeReference(e,n,r){return Il(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Il(e,n)}Xn(e,n){return function(r,i){let s=!1;return AT(r).Z(o=>NT(r,o,i).next(a=>(a&&(s=!0),v.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=n){const u=this.Xn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,$.min()),hr(e).delete([0,gt(o.path)])))});i.push(u)}}).next(()=>v.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Il(e,n)}Yn(e,n){const r=hr(e);let i,s=St.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==St.ct&&n(new x(In(i)),s),s=l,i=u):s=St.ct}).next(()=>{s!==St.ct&&n(new x(In(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Il(t,e){return hr(t).put(function(n,r){return{targetId:0,path:gt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(){this.changes=new Jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ni(e).put(r)}removeEntry(e,n,r){return ni(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],$c(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Zn(e,r)))}getEntry(e,n){let r=ue.newInvalidDocument(n);return ni(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(qo(n))},(i,s)=>{r=this.ts(n,s)}).next(()=>r)}es(e,n){let r={size:0,document:ue.newInvalidDocument(n)};return ni(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(qo(n))},(i,s)=>{r={document:this.ts(n,s),size:Uc(s)}}).next(()=>r)}getEntries(e,n){let r=kt();return this.ns(e,n,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,n){let r=kt(),i=new se(x.comparator);return this.ns(e,n,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,Uc(o))}).next(()=>({documents:r,rs:i}))}ns(e,n,r){if(n.isEmpty())return v.resolve();let i=new ce(w0);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(qo(i.first()),qo(i.last())),o=i.getIterator();let a=o.getNext();return ni(e).X({index:"documentKeyIndex",range:s},(u,l,c)=>{const h=x.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&w0(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.G(qo(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),$c(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ni(e).j(IDBKeyRange.bound(o,a,!0)).next(u=>{let l=kt();for(const c of u){const h=this.ts(x.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);h.isFoundDocument()&&(Mu(n,h)||i.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,n,r,i){let s=kt();const o=v0(n,r),a=v0(n,$t.max());return ni(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const h=this.ts(x.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new VL(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return y0(e).get("remoteDocumentGlobalKey").next(n=>(F(!!n),n))}Zn(e,n){return y0(e).put("remoteDocumentGlobalKey",n)}ts(e,n){if(n){const r=SL(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual($.min())))return r}return ue.newInvalidDocument(e)}}function DT(t){return new UL(t)}class VL extends xT{constructor(e,n){super(),this.os=e,this.trackRemovals=n,this.us=new Jr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ce((s,o)=>B(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(n.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=i0(this.os.serializer,o);i=i.add(s.path.popLast());const l=Uc(u);r+=l-a.size,n.push(this.os.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=i0(this.os.serializer,o.convertToNoDocument($.min()));n.push(this.os.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.os.updateMetadata(e,r)),v.waitFor(n)}getFromCache(e,n){return this.os.es(e,n).next(r=>(this.us.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.os.ss(e,n).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function y0(t){return Ge(t,"remoteDocumentGlobal")}function ni(t){return Ge(t,"remoteDocumentsV14")}function qo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function v0(t,e){const n=e.documentKey.path.toArray();return[t,$c(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function w0(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=B(n[s],r[s]),i)return i;return i=B(n.length,r.length),i||(i=B(n[n.length-2],r[r.length-2]),i||B(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&wa(r.mutation,i,Tt.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=z()){const i=En();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ea();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=En();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=kt();const o=va(),a=va();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof er)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),wa(c.mutation,l,c.mutation.getFieldMask(),pe.now())):o.set(l.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new BL(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=va();let i=new se((o,a)=>o-a),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||Tt.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||z()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=YS();c.forEach(d=>{if(!s.has(d)){const p=iT(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return x.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):v.resolve(En());let a=-1,u=s;return o.next(l=>v.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?v.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,z())).next(c=>({batchId:a,changes:QS(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new x(n)).next(r=>{let i=ea();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ea();return this.indexManager.getCollectionParents(e,i).next(o=>v.forEach(o,a=>{const u=function(l,c){return new Zn(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,u)=>{const l=u.getKey();s.get(l)===null&&(s=s.insert(l,ue.newInvalidDocument(l)))});let o=ea();return s.forEach((a,u)=>{const l=i.get(a);l!==void 0&&wa(l.mutation,u,Tt.empty(),pe.now()),Mu(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return v.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Ne(r.createTime)}),v.resolve()}getNamedQuery(e,n){return v.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:Kg(r.bundledQuery),readTime:Ne(r.readTime)}}(n)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(){this.overlays=new se(x.comparator),this.ls=new Map}getOverlay(e,n){return v.resolve(this.overlays.get(n))}getOverlays(e,n){const r=En();return v.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),v.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),v.resolve()}getOverlaysForCollection(e,n,r){const i=En(),s=n.length+1,o=new x(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return v.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new se((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=En(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=En(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return v.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jg(n,r));let s=this.ls.get(n);s===void 0&&(s=z(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.fs=new ce(Fe.ds),this.ws=new ce(Fe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Fe(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new x(new X([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new x(new X([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=z();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return x.comparator(e.key,n.key)||B(e.As,n.As)}static _s(e,n){return B(e.As,n.As)||x.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new ce(Fe.ds)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bg(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Fe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,n){return v.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return v.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),v.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ce(B);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),v.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;x.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new x(s),0);let a=new ce(B);return this.Rs.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.As)),!0)},o),v.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){F(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return v.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Fe(n,0),i=this.Rs.firstAfterOrEqual(r);return v.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e){this.Ds=e,this.docs=new se(x.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():ue.newInvalidDocument(n))}getEntries(e,n){let r=kt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ue.newInvalidDocument(i))}),v.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=kt();const o=n.path,a=new x(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||bg(kS(c),r)<=0||(i.has(c.key)||Mu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(e,n,r,i){b()}Cs(e,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WL(this)}getSize(e){return v.resolve(this.size)}}class WL extends xT{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),v.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e){this.persistence=e,this.xs=new Jr(n=>Fi(n),Ou),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Yg,this.targetCount=0,this.Ms=ji.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),v.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new ji(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,v.resolve()}updateTargetData(e,n){return this.Fn(n),v.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),v.waitFor(s).next(()=>i)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return v.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),v.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),v.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),v.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return v.resolve(r)}containsKey(e,n){return v.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n){this.$s={},this.overlays={},this.Os=new St(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new KL(this),this.indexManager=new RL,this.remoteDocumentCache=function(r){return new GL(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new ET(n),this.qs=new zL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new qL(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){S("MemoryPersistence","Starting transaction:",e);const i=new HL(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return v.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class HL extends NS{constructor(e){super(),this.currentSequenceNumber=e}}class Vh{constructor(e){this.persistence=e,this.Qs=new Yg,this.js=null}static zs(e){return new Vh(e)}get Ws(){if(this.js)return this.js;throw b()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),v.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),v.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),v.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Ws,r=>{const i=x.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,$.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return v.or([()=>v.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e){this.serializer=e}O(e,n,r,i){const s=new bh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Lw,{unique:!0}),a.createObjectStore("documentMutations")}(e),_0(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=v.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),_0(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:$.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").j().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Lw,{unique:!0});const c=u.store("mutations"),h=l.map(d=>c.put(d));return v.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:P2});u.createIndex("collectionPathOverlayIndex",b2,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",O2,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:I2});u.createIndex("documentKeyIndex",E2),u.createIndex("collectionGroupIndex",S2)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:A2}).createIndex("sequenceNumberIndex",x2,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:D2}).createIndex("documentKeyIndex",R2,{unique:!1})}(e))),o}Xs(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=Uc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>v.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>v.forEach(a,u=>{F(u.userId===s.userId);const l=ui(this.serializer,u);return CT(e,s.userId,l).next(()=>{})}))}))}Zs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const u=new X(o),l=function(c){return[0,gt(c)]}(u);s.push(n.get(l).next(c=>c?v.resolve():(h=>n.put({targetId:0,path:gt(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>v.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:N2});const r=n.store("collectionParents"),i=new Qg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:gt(u)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const u=new X(o);return s(u.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,u],l)=>{const c=In(a);return s(c.popLast())}))}ei(e){const n=e.store("targets");return n.X((r,i)=>{const s=na(i),o=ST(this.serializer,s);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),u=(l=o,l.document?new x(X.fromString(l.document.name).popFirst(5)):l.noDocument?x.fromSegments(l.noDocument.path):l.unknownDocument?x.fromSegments(l.unknownDocument.path):b()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>v.waitFor(i))}si(e,n){const r=n.store("mutations"),i=DT(this.serializer),s=new PT(Vh.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:z();ui(this.serializer,u).keys().forEach(h=>c=c.add(h)),a.set(u.userId,c)}),v.forEach(a,(u,l)=>{const c=new Ve(l),h=Fh.de(this.serializer,c),d=s.getIndexManager(c),p=Uh.de(c,this.serializer,d,s.referenceDelegate);return new RT(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Ip(n,St.ct),u).next()})})}}function _0(t){t.createObjectStore("targetDocuments",{keyPath:k2}).createIndex("documentTargetsIndex",C2,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",T2,{unique:!0}),t.createObjectStore("targetGlobal")}const Jd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Xg{constructor(e,n,r,i,s,o,a,u,l,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=l,this.oi=c,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!Xg.D())throw new E(_.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new FL(this,i),this.di=n+"main",this.serializer=new ET(u),this.wi=new en(this.di,this.ui,new QL(this.serializer)),this.Bs=new bL(this.referenceDelegate,this.serializer),this.remoteDocumentCache=DT(this.serializer),this.qs=new TL,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,c===!1&&ke("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(_.FAILED_PRECONDITION,Jd);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new St(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>El(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(n=>this.isPrimary&&!n?this.Ai(e).next(()=>!1):!!n&&this.vi(e).next(()=>!0))).catch(e=>{if(Xr(e))return S("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return S("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return Go(e).get("owner").next(n=>v.resolve(this.Ri(n)))}Pi(e){return El(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Ge(n,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return v.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Di(n.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?v.resolve(!0):Go(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new E(_.FAILED_PRECONDITION,Jd);return!1}}return!(!this.networkEnabled||!this.inForeground)||El(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&S("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Ip(e,St.ct);return this.Ai(n).next(()=>this.Pi(n))}),this.wi.close(),this.Mi()}Si(e,n){return e.filter(r=>this.Vi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>El(e).j().next(n=>this.Si(n,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,n){return Uh.de(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new PL(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Fh.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,n,r){S("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?M2:o===14?PS:o===13?RS:o===12?L2:o===11?DS:void b();var o;let a;return this.wi.runTransaction(e,i,s,u=>(a=new Ip(u,this.Os?this.Os.next():St.ct),n==="readwrite-primary"?this.Ti(a).next(l=>!!l||this.Ei(a)).next(l=>{if(!l)throw ke(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new E(_.FAILED_PRECONDITION,CS);return r(a)}).next(l=>this.vi(a).next(()=>l)):this.Oi(a).next(()=>r(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Oi(e){return Go(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.Ri(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new E(_.FAILED_PRECONDITION,Jd)})}vi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Go(e).put("owner",n)}static D(){return en.D()}Ai(e){const n=Go(e);return n.get("owner").next(r=>this.Ri(r)?(S("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):v.resolve())}Vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(ke(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;TA()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Di(e)))!==null;return S("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ke("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){ke("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Go(t){return Ge(t,"owner")}function El(t){return Ge(t,"clientMetadata")}function Jg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=z(),i=z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Zg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(Kw(n))return v.resolve(null);let r=xt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Mc(n,null,"F"),r=xt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=z(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.ji(n,a);return this.zi(n,l,o,u.readTime)?this.Ki(e,Mc(n,null,"F")):this.Wi(e,l,n,u)}))})))}Gi(e,n,r,i){return Kw(n)||i.isEqual($.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(wp()<=Y.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ap(n)),this.Wi(e,o,n,TS(i,-1)))})}ji(e,n){let r=new ce(KS(e));return n.forEach((i,s)=>{Mu(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return wp()<=Y.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",Ap(n)),this.Ui.getDocumentsMatchingQuery(e,n,$t.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new se(B),this.Yi=new Jr(s=>Fi(s),Ou),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RT(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function OT(t,e,n,r){return new YL(t,e,n,r)}async function LT(t,e){const n=R(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=z();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function XL(t,e){const n=R(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=v.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(y=>{const w=u.docVersions.get(p);F(w!==null),y.version.compareTo(w)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=z();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function MT(t){const e=R(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function JL(t,e){const n=R(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Le.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,w,N){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(d,p,c)&&a.push(n.Bs.updateTargetData(s,p))});let u=kt(),l=z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push($T(s,o,e.documentUpdates).next(c=>{u=c.nr,l=c.sr})),!r.isEqual($.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return v.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Ji=i,s))}function $T(t,e,n){let r=z(),i=z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=kt();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual($.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):S("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{nr:o,sr:i}})}function ZL(t,e){const n=R(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eo(t,e){const n=R(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,v.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Un(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function to(t,e,n){const r=R(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xr(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Vc(t,e,n){const r=R(t);let i=$.min(),s=z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=R(a),h=c.Yi.get(l);return h!==void 0?v.resolve(c.Ji.get(h)):c.Bs.getTargetData(u,l)}(r,o,xt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:$.min(),n?s:z())).next(a=>(VT(r,WS(e),a),{documents:a,ir:s})))}function FT(t,e){const n=R(t),r=R(n.Bs),i=n.Ji.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function UT(t,e){const n=R(t),r=n.Xi.get(e)||$.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Zi.getAllFromCollectionGroup(i,e,TS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(VT(n,e,i),i))}function VT(t,e,n){let r=t.Xi.get(e)||$.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}async function eM(t,e,n,r){const i=R(t);let s=z(),o=kt();for(const l of n){const c=e.rr(l.metadata.name);l.document&&(s=s.add(c));const h=e.ur(l);h.setReadTime(e.cr(l.metadata.readTime)),o=o.insert(c,h)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),u=await eo(i,function(l){return xt(vo(X.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>$T(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.Bs.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.Bs.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.nr,c.sr)).next(()=>c.nr)))}async function tM(t,e,n=z()){const r=await eo(t,xt(Kg(e.bundledQuery))),i=R(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ne(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(Le.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,n,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function I0(t,e){return`firestore_clients_${t}_${e}`}function E0(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Zd(t,e){return`firestore_targets_${t}_${e}`}class Bc{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static ar(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new E(i.error.code,i.error.message))),o?new Bc(e,n,i.state,s):(ke("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class _a{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static ar(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new E(r.error.code,r.error.message))),s?new _a(e,r.state,i):(ke("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class zc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static ar(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Ug();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=AS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new zc(e,s):(ke("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class ey{constructor(e,n){this.clientId=e,this.onlineState=n}static ar(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new ey(n.clientId,n.onlineState):(ke("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Lp{constructor(){this.activeTargetIds=Ug()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ef{constructor(e,n,r,i,s){this.window=e,this.ii=n,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new se(B),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=I0(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new Lp),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(I0(this.persistenceKey,r));if(i){const s=zc.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const n=this.storage.getItem(this.vr);if(n){const r=this.br(n);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let n=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,n,r){this.Dr(e,n,r),this.Cr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Zd(this.persistenceKey,e));if(r){const i=_a.ar(e,r);i&&(n=i.state)}}return this.Nr.lr(e),this.Pr(),n}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Zd(this.persistenceKey,e))}updateQueryState(e,n,r){this.kr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return S("SharedClientState","READ",e,n),n}setItem(e,n){S("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){S("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const n=e;if(n.storageArea===this.storage){if(S("SharedClientState","EVENT",n.key,n.newValue),n.key===this.pr)return void ke("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Tr.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.Fr(r,null)}{const r=this.Br(n.key,n.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.Lr(n.key,n.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(n.key)){if(n.newValue!==null){const r=this.Ur(n.key,n.newValue);if(r)return this.Kr(r)}}else if(n.key===this.vr){if(n.newValue!==null){const r=this.br(n.newValue);if(r)return this.Vr(r)}}else if(n.key===this.Ir){const r=function(i){let s=St.ct;if(i!=null)try{const o=JSON.parse(i);F(typeof o=="number"),s=o}catch(o){ke("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==St.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Gr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(n)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,n,r){const i=new Bc(this.currentUser,e,n,r),s=E0(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const n=E0(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Mr(e){const n={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(n))}kr(e,n,r){const i=Zd(this.persistenceKey,e),s=new _a(e,n,r);this.setItem(i,s.hr())}$r(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Tr.exec(e);return n?n[1]:null}Br(e,n){const r=this.Or(e);return zc.ar(r,n)}Lr(e,n){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Bc.ar(new Ve(s),i,n)}Ur(e,n){const r=this.Ar.exec(e),i=Number(r[1]);return _a.ar(i,n)}br(e){return ey.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);S("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,n){const r=n?this.gr.insert(e,n):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let n=Ug();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class BT{constructor(){this.Hr=new Lp,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Lp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl=null;function tf(){return Sl===null?Sl=268435456+Math.round(2147483648*Math.random()):Sl++,"0x"+Sl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class sM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=tf(),a=this.To(e,n);S("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const u={};return this.Eo(u,i,s),this.Ao(e,a,u,r).then(l=>(S("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw un("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+yo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=rM[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=tf();return new Promise((o,a)=>{const u=new t2;u.setWithCredentials(!0),u.listenOnce(JO.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Yd.NO_ERROR:const c=u.getResponseJson();S(st,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Yd.TIMEOUT:S(st,`RPC '${e}' ${s} timed out`),a(new E(_.DEADLINE_EXCEEDED,"Request time out"));break;case Yd.HTTP_ERROR:const h=u.getStatus();if(S(st,`RPC '${e}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(w){const N=w.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(N)>=0?N:_.UNKNOWN}(p.status);a(new E(y,p.message))}else a(new E(_.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new E(_.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{S(st,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);S(st,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",l,r,15)})}Ro(e,n,r){const i=tf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=YO(),a=XO(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.xmlHttpFactory=new e2({})),this.Eo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=s.join("");S(st,`Creating RPC '${e}' stream ${i}: ${c}`,u);const h=o.createWebChannel(c,u);let d=!1,p=!1;const y=new iM({ro:N=>{p?S(st,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(d||(S(st,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),S(st,`RPC '${e}' stream ${i} sending:`,N),h.send(N))},oo:()=>h.close()}),w=(N,m,f)=>{N.listen(m,g=>{try{f(g)}catch(I){setTimeout(()=>{throw I},0)}})};return w(h,gl.EventType.OPEN,()=>{p||S(st,`RPC '${e}' stream ${i} transport opened.`)}),w(h,gl.EventType.CLOSE,()=>{p||(p=!0,S(st,`RPC '${e}' stream ${i} transport closed`),y.wo())}),w(h,gl.EventType.ERROR,N=>{p||(p=!0,un(st,`RPC '${e}' stream ${i} transport errored:`,N),y.wo(new E(_.UNAVAILABLE,"The operation could not be completed")))}),w(h,gl.EventType.MESSAGE,N=>{var m;if(!p){const f=N.data[0];F(!!f);const g=f,I=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(I){S(st,`RPC '${e}' stream ${i} received error:`,I);const C=I.status;let A=function(M){const re=xe[M];if(re!==void 0)return aT(re)}(C),D=I.message;A===void 0&&(A=_.INTERNAL,D="Unknown error status: "+C+" with message "+I.message),p=!0,y.wo(new E(A,D)),h.close()}else S(st,`RPC '${e}' stream ${i} received:`,f),y._o(f)}}),w(a,ZO.STAT_EVENT,N=>{N.stat===Rw.PROXY?S(st,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Rw.NOPROXY&&S(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(){return typeof window<"u"?window:null}function Wl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t){return new fL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&S("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,r,i,s,o,a,u){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new ty(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(ke(n.toString()),ke("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new E(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return S("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oM extends jT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=gL(this.serializer,e),r=function(i){if(!("targetChange"in i))return $.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?$.min():s.readTime?Ne(s.readTime):$.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=au(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Oc(a)?{documents:gT(i,a)}:{query:yT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=hT(i,s.resumeToken);const u=xp(i,s.expectedCount);u!==null&&(o.expectedCount=u)}else if(s.snapshotVersion.compareTo($.min())>0){o.readTime=Zs(i,s.snapshotVersion.toTimestamp());const u=xp(i,s.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,e);const r=vL(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=au(this.serializer),n.removeTarget=e,this.Wo(n)}}class aM extends jT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=yL(e.writeResults,e.commitTime),r=Ne(e.commitTime);return this.listener.cu(r,n)}return F(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=au(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uu(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(_.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(_.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class lM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ke(n),this.mu=!1):S("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Zr(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=R(a);u.vu.add(4),await Io(u),u.bu.set("Unknown"),u.vu.delete(4),await Bu(u)}(this))})}),this.bu=new lM(r,i)}}async function Bu(t){if(Zr(t))for(const e of t.Ru)await e(!0)}async function Io(t){for(const e of t.Ru)await e(!1)}function Bh(t,e){const n=R(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),iy(n)?ry(n):So(n).Ko()&&ny(n,e))}function lu(t,e){const n=R(t),r=So(n);n.Au.delete(e),r.Ko()&&qT(n,e),n.Au.size===0&&(r.Ko()?r.jo():Zr(n)&&n.bu.set("Unknown"))}function ny(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}So(t).su(e)}function qT(t,e){t.Vu.qt(e),So(t).iu(e)}function ry(t){t.Vu=new lL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),So(t).start(),t.bu.gu()}function iy(t){return Zr(t)&&!So(t).Uo()&&t.Au.size>0}function Zr(t){return R(t).vu.size===0}function GT(t){t.Vu=void 0}async function hM(t){t.Au.forEach((e,n)=>{ny(t,e)})}async function dM(t,e){GT(t),iy(t)?(t.bu.Iu(e),ry(t)):t.bu.set("Unknown")}async function fM(t,e,n){if(t.bu.set("Online"),e instanceof cT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){S("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jc(t,r)}else if(e instanceof Gl?t.Vu.Ht(e):e instanceof lT?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual($.min()))try{const r=await MT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Au.get(u);l&&i.Au.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,u)=>{const l=i.Au.get(a);if(!l)return;i.Au.set(a,l.withResumeToken(Le.EMPTY_BYTE_STRING,l.snapshotVersion)),qT(i,a);const c=new Un(l.target,a,u,l.sequenceNumber);ny(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){S("RemoteStore","Failed to raise snapshot:",r),await jc(t,r)}}async function jc(t,e,n){if(!Xr(e))throw e;t.vu.add(1),await Io(t),t.bu.set("Offline"),n||(n=()=>MT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Bu(t)})}function WT(t,e){return e().catch(n=>jc(t,n,e))}async function Eo(t){const e=R(t),n=Vr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;pM(e);)try{const i=await ZL(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,mM(e,i)}catch(i){await jc(e,i)}KT(e)&&HT(e)}function pM(t){return Zr(t)&&t.Eu.length<10}function mM(t,e){t.Eu.push(e);const n=Vr(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function KT(t){return Zr(t)&&!Vr(t).Uo()&&t.Eu.length>0}function HT(t){Vr(t).start()}async function gM(t){Vr(t).hu()}async function yM(t){const e=Vr(t);for(const n of t.Eu)e.uu(n.mutations)}async function vM(t,e,n){const r=t.Eu.shift(),i=zg.from(r,e,n);await WT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Eo(t)}async function wM(t,e){e&&Vr(t).ou&&await async function(n,r){if(i=r.code,oT(i)&&i!==_.ABORTED){const s=n.Eu.shift();Vr(n).Qo(),await WT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Eo(n)}var i}(t,e),KT(t)&&HT(t)}async function T0(t,e){const n=R(t);n.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const r=Zr(n);n.vu.add(3),await Io(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Bu(n)}async function Mp(t,e){const n=R(t);e?(n.vu.delete(2),await Bu(n)):e||(n.vu.add(2),await Io(n),n.bu.set("Unknown"))}function So(t){return t.Su||(t.Su=function(e,n,r){const i=R(e);return i.fu(),new oM(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:hM.bind(null,t),ao:dM.bind(null,t),nu:fM.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),iy(t)?ry(t):t.bu.set("Unknown")):(await t.Su.stop(),GT(t))})),t.Su}function Vr(t){return t.Du||(t.Du=function(e,n,r){const i=R(e);return i.fu(),new aM(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:gM.bind(null,t),ao:wM.bind(null,t),au:yM.bind(null,t),cu:vM.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Eo(t)):(await t.Du.stop(),t.Eu.length>0&&(S("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new sy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function To(t,e){if(ke("AsyncQueue",`${e}: ${t}`),Xr(t))return new E(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||x.comparator(n.key,r.key):(n,r)=>x.comparator(n.key,r.key),this.keyedMap=ea(),this.sortedSet=new se(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(){this.Cu=new se(x.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):b():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class no{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new no(e,n,$s.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(){this.Nu=void 0,this.listeners=[]}}class IM{constructor(){this.queries=new Jr(e=>GS(e),Lu),this.onlineState="Unknown",this.ku=new Set}}async function oy(t,e){const n=R(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new _M),i)try{s.Nu=await n.onListen(r)}catch(o){const a=To(o,`Initialization of query '${Ap(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&uy(n)}async function ay(t,e){const n=R(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function EM(t,e){const n=R(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&uy(n)}function SM(t,e,n){const r=R(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function uy(t){t.ku.forEach(e=>{e.next()})}class ly{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new no(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=no.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(e,n){this.Gu=e,this.byteLength=n}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){this.serializer=e}rr(e){return Cn(this.serializer,e)}ur(e){return e.metadata.exists?mT(this.serializer,e.document,!1):ue.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Ne(e)}}class kM{constructor(e,n,r){this.ju=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=QT(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++n;const r=X.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Wu(e){const n=new Map,r=new C0(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||z()).add(s);n.set(o,a)}}return n}async complete(){const e=await eM(this.localStore,new C0(this.serializer),this.documents,this.ju.id),n=this.Wu(this.documents);for(const r of this.queries)await tM(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function QT(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.key=e}}class XT{constructor(e){this.key=e}}class JT{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=z(),this.mutatedKeys=z(),this.tc=KS(e),this.ec=new $s(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new k0,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Mu(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let N=!1;d&&p?d.data.isEqual(p.data)?y!==w&&(r.track({type:3,doc:p}),N=!0):this.rc(d,p)||(r.track({type:2,doc:p}),N=!0,(u&&this.tc(p,u)>0||l&&this.tc(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),N=!0):d&&!p&&(r.track({type:1,doc:d}),N=!0,(u||l)&&(a=!0)),N&&(p?(o=o.add(p),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((l,c)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return p(h)-p(d)}(l.type,c.type)||this.tc(l.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,s.length!==0||u?{snapshot:new no(this.query,e.ec,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new k0,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=z(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new XT(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new YT(r))}),n}hc(e){this.Yu=e.ir,this.Zu=z();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return no.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class CM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NM{constructor(e){this.key=e,this.fc=!1}}class AM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Jr(a=>GS(a),Lu),this._c=new Map,this.mc=new Set,this.gc=new se(x.comparator),this.yc=new Map,this.Ic=new Yg,this.Tc={},this.Ec=new Map,this.Ac=ji.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function xM(t,e){const n=py(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await eo(n.localStore,xt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await cy(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Bh(n.remoteStore,o)}return i}async function cy(t,e,n,r,i){t.Rc=(h,d,p)=>async function(y,w,N,m){let f=w.view.sc(N);f.zi&&(f=await Vc(y.localStore,w.query,!1).then(({documents:C})=>w.view.sc(C,f)));const g=m&&m.targetChanges.get(w.targetId),I=w.view.applyChanges(f,y.isPrimaryClient,g);return $p(y,w.targetId,I.cc),I.snapshot}(t,h,d,p);const s=await Vc(t.localStore,e,!0),o=new JT(e,s.ir),a=o.sc(s.documents),u=Uu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);$p(t,n,l.cc);const c=new CM(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function DM(t,e){const n=R(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Lu(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await to(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),lu(n.remoteStore,r.targetId),ro(n,r.targetId)}).catch(Yr)):(ro(n,r.targetId),await to(n.localStore,r.targetId,!0))}async function RM(t,e,n){const r=my(t);try{const i=await function(s,o){const a=R(s),u=pe.now(),l=o.reduce((d,p)=>d.add(p.key),z());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=kt(),y=z();return a.Zi.getEntries(d,l).next(w=>{p=w,p.forEach((N,m)=>{m.isValidDocument()||(y=y.add(N))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(w=>{c=w;const N=[];for(const m of o){const f=oL(m,c.get(m.key).overlayedDocument);f!=null&&N.push(new er(m.key,f,MS(f.value.mapValue),fe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,N,o)}).next(w=>{h=w;const N=w.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,w.batchId,N)})}).then(()=>({batchId:h.batchId,changes:QS(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Tc[s.currentUser.toKey()];u||(u=new se(B)),u=u.insert(o,a),s.Tc[s.currentUser.toKey()]=u}(r,i.batchId,n),await tr(r,i.changes),await Eo(r.remoteStore)}catch(i){const s=To(i,"Failed to persist write");n.reject(s)}}async function ZT(t,e){const n=R(t);try{const r=await JL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?F(o.fc):i.removedDocuments.size>0&&(F(o.fc),o.fc=!1))}),await tr(n,r,e)}catch(r){await Yr(r)}}function N0(t,e,n){const r=R(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=R(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.Mu(o)&&(u=!0)}),u&&uy(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PM(t,e,n){const r=R(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new se(x.comparator);o=o.insert(s,ue.newNoDocument(s,$.min()));const a=z().add(s),u=new Fu($.min(),new Map,new se(B),o,a);await ZT(r,u),r.gc=r.gc.remove(s),r.yc.delete(e),fy(r)}else await to(r.localStore,e,!1).then(()=>ro(r,e,n)).catch(Yr)}async function bM(t,e){const n=R(t),r=e.batch.batchId;try{const i=await XL(n.localStore,e);dy(n,r,null),hy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tr(n,i)}catch(i){await Yr(i)}}async function OM(t,e,n){const r=R(t);try{const i=await function(s,o){const a=R(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(F(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);dy(r,e,n),hy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await tr(r,i)}catch(i){await Yr(i)}}async function LM(t,e){const n=R(t);Zr(n.remoteStore)||S("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=R(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ec.get(r)||[];i.push(e),n.Ec.set(r,i)}catch(r){const i=To(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function hy(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function dy(t,e,n){const r=R(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function ro(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||ek(t,r)})}function ek(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(lu(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),fy(t))}function $p(t,e,n){for(const r of n)r instanceof YT?(t.Ic.addReference(r.key,e),MM(t,r)):r instanceof XT?(S("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||ek(t,r.key)):b()}function MM(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(S("SyncEngine","New document in limbo: "+n),t.mc.add(r),fy(t))}function fy(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new x(X.fromString(e)),r=t.Ac.next();t.yc.set(r,new NM(n)),t.gc=t.gc.insert(n,r),Bh(t.remoteStore,new Un(xt(vo(n.path)),r,"TargetPurposeLimboResolution",St.ct))}}async function tr(t,e,n){const r=R(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,u)=>{o.push(r.Rc(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Zg.Li(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,u){const l=R(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>v.forEach(u,h=>v.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>v.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Xr(c))throw c;S("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Ji.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);l.Ji=l.Ji.insert(h,y)}}}(r.localStore,s))}async function $M(t,e){const n=R(t);if(!n.currentUser.isEqual(e)){S("SyncEngine","User change. New user:",e.toKey());const r=await LT(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new E(_.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tr(n,r.er)}}function FM(t,e){const n=R(t),r=n.yc.get(e);if(r&&r.fc)return z().add(r.key);{let i=z();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function UM(t,e){const n=R(t),r=await Vc(n.localStore,e.query,!0),i=e.view.hc(r);return n.isPrimaryClient&&$p(n,e.targetId,i.cc),i}async function VM(t,e){const n=R(t);return UT(n.localStore,e).then(r=>tr(n,r))}async function BM(t,e,n,r){const i=R(t),s=await function(o,a){const u=R(o),l=R(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Sn(c,a).next(h=>h?u.localDocuments.getDocuments(c,h):v.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Eo(i.remoteStore):n==="acknowledged"||n==="rejected"?(dy(i,e,r||null),hy(i,e),function(o,a){R(R(o).mutationQueue).Cn(a)}(i.localStore,e)):b(),await tr(i,s)):S("SyncEngine","Cannot apply mutation batch with id: "+e)}async function zM(t,e){const n=R(t);if(py(n),my(n),e===!0&&n.vc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await A0(n,r.toArray());n.vc=!0,await Mp(n.remoteStore,!0);for(const s of i)Bh(n.remoteStore,s)}else if(e===!1&&n.vc!==!1){const r=[];let i=Promise.resolve();n._c.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ro(n,o),to(n.localStore,o,!0))),lu(n.remoteStore,o)}),await i,await A0(n,r),function(s){const o=R(s);o.yc.forEach((a,u)=>{lu(o.remoteStore,u)}),o.Ic.Ts(),o.yc=new Map,o.gc=new se(x.comparator)}(n),n.vc=!1,await Mp(n.remoteStore,!1)}}async function A0(t,e,n){const r=R(t),i=[],s=[];for(const o of e){let a;const u=r._c.get(o);if(u&&u.length!==0){a=await eo(r.localStore,xt(u[0]));for(const l of u){const c=r.wc.get(l),h=await UM(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await FT(r.localStore,o);a=await eo(r.localStore,l),await cy(r,tk(l),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function tk(t){return qS(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function jM(t){const e=R(t);return R(R(e.localStore).persistence).$i()}async function qM(t,e,n,r){const i=R(t);if(i.vc)return void S("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await UT(i.localStore,WS(s[0])),a=Fu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Le.EMPTY_BYTE_STRING);await tr(i,o,a);break}case"rejected":await to(i.localStore,e,!0),ro(i,e,r);break;default:b()}}async function GM(t,e,n){const r=py(t);if(r.vc){for(const i of e){if(r._c.has(i)){S("SyncEngine","Adding an already active target "+i);continue}const s=await FT(r.localStore,i),o=await eo(r.localStore,s);await cy(r,tk(s),o.targetId,!1,o.resumeToken),Bh(r.remoteStore,o)}for(const i of n)r._c.has(i)&&await to(r.localStore,i,!1).then(()=>{lu(r.remoteStore,i),ro(r,i)}).catch(Yr)}}function py(t){const e=R(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PM.bind(null,e),e.dc.nu=EM.bind(null,e.eventManager),e.dc.Pc=SM.bind(null,e.eventManager),e}function my(t){const e=R(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OM.bind(null,e),e}function WM(t,e,n){const r=R(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=R(h),y=Ne(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",w=>p.qs.getBundleMetadata(w,d.id)).then(w=>!!w&&w.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(QT(a));const u=new kM(a,i.localStore,s.serializer);let l=await s.bc();for(;l;){const h=await u.zu(l);h&&o._updateProgress(h),l=await s.bc()}const c=await u.complete();return await tr(i,c.Ju,void 0),await function(h,d){const p=R(h);return p.persistence.runTransaction("Save bundle","readwrite",y=>p.qs.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Hu)}catch(a){return un("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Fp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Vu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return OT(this.persistence,new bT,e.initialUser,this.serializer)}createPersistence(e){return new PT(Vh.zs,this.serializer)}createSharedClientState(e){return new BT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nk extends Fp{constructor(e,n,r){super(),this.Vc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await my(this.Vc.syncEngine),await Eo(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return OT(this.persistence,new bT,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new LL(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new v2(n,this.persistence);return new y2(e.asyncQueue,r)}createPersistence(e){const n=Jg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new Xg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,zT(),Wl(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new BT}}class KM extends nk{constructor(e,n){super(e,n,!1),this.Vc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Vc.syncEngine;this.sharedClientState instanceof ef&&(this.sharedClientState.syncEngine={jr:BM.bind(null,n),zr:qM.bind(null,n),Wr:GM.bind(null,n),$i:jM.bind(null,n),Qr:VM.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await zM(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=zT();if(!ef.D(n))throw new E(_.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Jg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ef(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class gy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>N0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$M.bind(null,this.syncEngine),await Mp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new IM}createDatastore(e){const n=Vu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new sM(i));var i;return function(s,o,a,u){return new uM(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>N0(this.syncEngine,a,0),o=S0.D()?new S0:new nM,new cM(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new AM(r,i,s,o,a,u);return l&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=R(e);S("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Io(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ke("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e,n){this.Cc=e,this.serializer=n,this.metadata=new ze,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const n=this.xc.decode(e),r=Number(n);isNaN(r)&&this.Mc(`length string (${n}) is not valid number`);const i=await this.$c(r);return new TM(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const n=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(_.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=R(r),o=au(s.serializer)+"/documents",a={documents:i.map(h=>ou(s.serializer,h))},u=await s.vo("BatchGetDocuments",o,a,i.length),l=new Map;u.forEach(h=>{const d=mL(s.serializer,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());F(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new _o(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=x.fromPath(r);this.mutations.push(new Vg(i,this.precondition(i)))}),await async function(n,r){const i=R(n),s=au(i.serializer)+"/documents",o={writes:r.map(a=>uu(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw b();n=$.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new E(_.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual($.min())?fe.exists(!1):fe.updateTime(n):fe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual($.min()))throw new E(_.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return fe.updateTime(n)}return fe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new ty(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new QM(this.datastore),n=this.qc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const n=this.updateFunction(e);return!bu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!oT(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ve.UNAUTHENTICATED,this.clientId=IS.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{S("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(S("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=To(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kl(t,e){t.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await LT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Up(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yy(t);S("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>T0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>T0(e.remoteStore,s)),t._onlineComponents=e}function rk(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function yy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){S("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!rk(n))throw n;un("Error using user provided cache. Falling back to memory cache: "+n),await Kl(t,new Fp)}}else S("FirestoreClient","Using default OfflineComponentProvider"),await Kl(t,new Fp);return t._offlineComponents}async function jh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(S("FirestoreClient","Using user provided OnlineComponentProvider"),await Up(t,t._uninitializedComponentsProvider._online)):(S("FirestoreClient","Using default OnlineComponentProvider"),await Up(t,new gy))),t._onlineComponents}function ik(t){return yy(t).then(e=>e.persistence)}function vy(t){return yy(t).then(e=>e.localStore)}function sk(t){return jh(t).then(e=>e.remoteStore)}function wy(t){return jh(t).then(e=>e.syncEngine)}function JM(t){return jh(t).then(e=>e.datastore)}async function io(t){const e=await jh(t),n=e.eventManager;return n.onListen=xM.bind(null,e.syncEngine),n.onUnlisten=DM.bind(null,e.syncEngine),n}function ZM(t){return t.asyncQueue.enqueue(async()=>{const e=await ik(t),n=await sk(t);return e.setNetworkEnabled(!0),function(r){const i=R(r);return i.vu.delete(0),Bu(i)}(n)})}function e$(t){return t.asyncQueue.enqueue(async()=>{const e=await ik(t),n=await sk(t);return e.setNetworkEnabled(!1),async function(r){const i=R(r);i.vu.add(0),await Io(i),i.bu.set("Offline")}(n)})}function t$(t,e){const n=new ze;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=R(a);return l.persistence.runTransaction("read document","readonly",c=>l.localDocuments.getDocument(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new E(_.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=To(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await vy(t),e,n)),n.promise}function ok(t,e,n={}){const r=new ze;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new zh({next:h=>{s.enqueueAndForget(()=>ay(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new E(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new E(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new ly(vo(o.path),l,{includeMetadataChanges:!0,Ku:!0});return oy(i,c)}(await io(t),t.asyncQueue,e,n,r)),r.promise}function n$(t,e){const n=new ze;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Vc(r,i,!0),a=new JT(i,o.ir),u=a.sc(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=To(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await vy(t),e,n)),n.promise}function ak(t,e,n={}){const r=new ze;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new zh({next:h=>{s.enqueueAndForget(()=>ay(i,c)),h.fromCache&&a.source==="server"?u.reject(new E(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new ly(o,l,{includeMetadataChanges:!0,Ku:!0});return oy(i,c)}(await io(t),t.asyncQueue,e,n,r)),r.promise}function r$(t,e){const n=new zh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){R(r).ku.add(i),i.next()}(await io(t),n)),()=>{n.Dc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){R(r).ku.delete(i)}(await io(t),n))}}function i$(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?uT().encode(s):s,function(u,l){return new HM(u,l)}(function(u,l){if(u instanceof Uint8Array)return x0(u,l);if(u instanceof ArrayBuffer)return x0(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Vu(e));t.asyncQueue.enqueueAndForget(async()=>{WM(await wy(t),i,r)})}function s$(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=R(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await vy(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t,e,n){if(!n)throw new E(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lk(t,e,n,r){if(e===!0&&r===!0)throw new E(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function R0(t){if(!x.isDocumentKey(t))throw new E(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function P0(t){if(x.isDocumentKey(t))throw new E(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function Z(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qh(t);throw new E(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ck(t,e){if(e<=0)throw new E(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new E(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uk((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class zu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new b0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new b0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new s2;switch(n.type){case"firstParty":return new l2(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new E(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=D0.get(e);n&&(S("ComponentProvider","Removing Datastore"),D0.delete(e),n.terminate())}(this),Promise.resolve()}}function o$(t,e,n,r={}){var i;const s=(t=Z(t,zu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&un("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ve.MOCK_USER;else{o=IA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new E(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ve(u)}t._authCredentials=new o2(new _S(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new he(this.firestore,e,this._key)}}class nt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nt(this.firestore,e,this._query)}}class Nn extends nt{constructor(e,n,r){super(e,n,vo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new he(this.firestore,null,new x(e))}withConverter(e){return new Nn(this.firestore,e,this._path)}}function hk(t,e,...n){if(t=U(t),_y("collection","path",e),t instanceof zu){const r=X.fromString(e,...n);return P0(r),new Nn(t,null,r)}{if(!(t instanceof he||t instanceof Nn))throw new E(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(X.fromString(e,...n));return P0(r),new Nn(t.firestore,null,r)}}function a$(t,e){if(t=Z(t,zu),_y("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new E(_.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new nt(t,null,function(n){return new Zn(X.emptyPath(),n)}(e))}function qc(t,e,...n){if(t=U(t),arguments.length===1&&(e=IS.A()),_y("doc","path",e),t instanceof zu){const r=X.fromString(e,...n);return R0(r),new he(t,null,new x(r))}{if(!(t instanceof he||t instanceof Nn))throw new E(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(X.fromString(e,...n));return R0(r),new he(t.firestore,t instanceof Nn?t.converter:null,new x(r))}}function dk(t,e){return t=U(t),e=U(e),(t instanceof he||t instanceof Nn)&&(e instanceof he||e instanceof Nn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function fk(t,e){return t=U(t),e=U(e),t instanceof nt&&e instanceof nt&&t.firestore===e.firestore&&Lu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u${constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new ty(this,"async_queue_retry"),this.Xc=()=>{const n=Wl();n&&S("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Wl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Wl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new ze;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Xr(e))throw e;S("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ke("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=sy.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&b()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Vp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class l${constructor(){this._progressObserver={},this._taskCompletionResolver=new ze,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c$=-1;class Ee extends zu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new u$,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pk(this),this._firestoreClient.terminate()}}function We(t){return t._firestoreClient||pk(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pk(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,u,l){return new U2(o,a,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,uk(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new XM(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function h$(t,e){gk(t=Z(t,Ee));const n=We(t);if(n._uninitializedComponentsProvider)throw new E(_.FAILED_PRECONDITION,"SDK cache is already specified.");un("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new gy;return mk(n,i,new nk(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function d$(t){gk(t=Z(t,Ee));const e=We(t);if(e._uninitializedComponentsProvider)throw new E(_.FAILED_PRECONDITION,"SDK cache is already specified.");un("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new gy;return mk(e,r,new KM(r,n.cacheSizeBytes))}function mk(t,e,n){const r=new ze;return t.asyncQueue.enqueue(async()=>{try{await Kl(t,n),await Up(t,e),r.resolve()}catch(i){const s=i;if(!rk(s))throw s;un("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function f$(t){if(t._initialized&&!t._terminated)throw new E(_.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ze;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!en.D())return Promise.resolve();const r=n+"main";await en.delete(r)}(Jg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function p$(t){return function(e){const n=new ze;return e.asyncQueue.enqueueAndForget(async()=>LM(await wy(e),n)),n.promise}(We(t=Z(t,Ee)))}function m$(t){return ZM(We(t=Z(t,Ee)))}function g$(t){return e$(We(t=Z(t,Ee)))}function y$(t,e){const n=We(t=Z(t,Ee)),r=new l$;return i$(n,t._databaseId,e,r),r}function v$(t,e){return s$(We(t=Z(t,Ee)),e).then(n=>n?new nt(t,null,n.query):null)}function gk(t){if(t._initialized||t._terminated)throw new E(_.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rn(Le.fromBase64String(e))}catch(n){throw new E(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rn(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new E(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new E(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new E(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w$=/^__.*__$/;class _${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new er(e,this.data,this.fieldMask,n,this.fieldTransforms):new wo(e,this.data,n,this.fieldTransforms)}}class yk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vk(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Wh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Wh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Gc(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(vk(this.ca)&&w$.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class I${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vu(e)}ya(e,n,r,i=!1){return new Wh({ca:e,methodName:n,ga:r,path:Ce.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ji(t){const e=t._freezeSettings(),n=Vu(t._databaseId);return new I$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Kh(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Ty("Data must be an object, but it was:",o,r);const a=Ik(r,o);let u,l;if(s.merge)u=new Tt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Bp(e,h,n);if(!o.contains(d))throw new E(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Sk(c,d)||c.push(d)}u=new Tt(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new _$(new Ye(a),u,l)}class ju extends Xi{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ju}}function wk(t,e,n){return new Wh({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Iy extends Xi{_toFieldTransform(e){return new $u(e.path,new Xs)}isEqual(e){return e instanceof Iy}}class E$ extends Xi{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=wk(this,e,!0),r=this.pa.map(s=>Zi(s,n)),i=new Ui(r);return new $u(e.path,i)}isEqual(e){return this===e}}class S$ extends Xi{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=wk(this,e,!0),r=this.pa.map(s=>Zi(s,n)),i=new Vi(r);return new $u(e.path,i)}isEqual(e){return this===e}}class T$ extends Xi{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new Js(e.serializer,ZS(e.serializer,this.Ia));return new $u(e.path,n)}isEqual(e){return this===e}}function Ey(t,e,n,r){const i=t.ya(1,e,n);Ty("Data must be an object, but it was:",i,r);const s=[],o=Ye.empty();Yi(r,(u,l)=>{const c=ky(e,u,n);l=U(l);const h=i.da(c);if(l instanceof ju)s.push(c);else{const d=Zi(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Tt(s);return new yk(o,a,i.fieldTransforms)}function Sy(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[Bp(e,r,n)],u=[i];if(s.length%2!=0)throw new E(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Bp(e,s[d])),u.push(s[d+1]);const l=[],c=Ye.empty();for(let d=a.length-1;d>=0;--d)if(!Sk(l,a[d])){const p=a[d];let y=u[d];y=U(y);const w=o.da(p);if(y instanceof ju)l.push(p);else{const N=Zi(y,w);N!=null&&(l.push(p),c.set(p,N))}}const h=new Tt(l);return new yk(c,h,o.fieldTransforms)}function _k(t,e,n,r=!1){return Zi(n,t.ya(r?4:3,e))}function Zi(t,e){if(Ek(t=U(t)))return Ty("Unsupported field value:",e,t),Ik(t,e);if(t instanceof Xi)return function(n,r){if(!vk(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Zi(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=U(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ZS(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=pe.fromDate(n);return{timestampValue:Zs(r.serializer,i)}}if(n instanceof pe){const i=new pe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Zs(r.serializer,i)}}if(n instanceof Gh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Rn)return{bytesValue:hT(r.serializer,n._byteString)};if(n instanceof he){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${qh(n)}`)}(t,e)}function Ik(t,e){const n={};return bS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yi(t,(r,i)=>{const s=Zi(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ek(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof Gh||t instanceof Rn||t instanceof he||t instanceof Xi)}function Ty(t,e,n){if(!Ek(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=qh(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Bp(t,e,n){if((e=U(e))instanceof Br)return e._internalPath;if(typeof e=="string")return ky(t,e);throw Gc("Field path arguments must be of type string or ",t,!1,void 0,n)}const k$=new RegExp("[~\\*/\\[\\]]");function ky(t,e,n){if(e.search(k$)>=0)throw Gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Br(...e.split("."))._internalPath}catch{throw Gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new E(_.INVALID_ARGUMENT,a+t+u)}function Sk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new C$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class C$ extends cu{data(){return super.data()}}function Hh(t,e){return typeof e=="string"?ky(t,e):e instanceof Br?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new E(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cy{}class qu extends Cy{}function or(t,e,...n){let r=[];e instanceof Cy&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Ny).length,o=i.filter(a=>a instanceof Qh).length;if(s>1||s>0&&o>0)throw new E(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Qh extends qu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Qh(e,n,r)}_apply(e){const n=this._parse(e);return Ck(e._query,n),new nt(e.firestore,e.converter,Np(e._query,n))}_parse(e){const n=Ji(e.firestore);return function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new E(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){L0(c,l);const d=[];for(const p of c)d.push(O0(a,i,p));h={arrayValue:{values:d}}}else h=O0(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||L0(c,l),h=_k(o,s,c,l==="in"||l==="not-in");return K.create(u,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function N$(t,e,n){const r=e,i=Hh("where",t);return Qh._create(i,r,n)}class Ny extends Cy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ny(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ee.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Ck(s,a),s=Np(s,a)}(e._query,n),new nt(e.firestore,e.converter,Np(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ay extends qu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ay(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new E(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new E(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ms(i,s);return function(a,u){if($g(a)===null){const l=Lh(a);l!==null&&Nk(a,l,u.field)}}(r,o),o}(e._query,this._field,this._direction);return new nt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Zn(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function A$(t,e="asc"){const n=e,r=Hh("orderBy",t);return Ay._create(r,n)}class Yh extends qu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Yh(e,n,r)}_apply(e){return new nt(e.firestore,e.converter,Mc(e._query,this._limit,this._limitType))}}function x$(t){return ck("limit",t),Yh._create("limit",t,"F")}function D$(t){return ck("limitToLast",t),Yh._create("limitToLast",t,"L")}class Xh extends qu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Xh(e,n,r)}_apply(e){const n=kk(e,this.type,this._docOrFields,this._inclusive);return new nt(e.firestore,e.converter,function(r,i){return new Zn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function R$(...t){return Xh._create("startAt",t,!0)}function P$(...t){return Xh._create("startAfter",t,!1)}class Jh extends qu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Jh(e,n,r)}_apply(e){const n=kk(e,this.type,this._docOrFields,this._inclusive);return new nt(e.firestore,e.converter,function(r,i){return new Zn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function b$(...t){return Jh._create("endBefore",t,!1)}function O$(...t){return Jh._create("endAt",t,!0)}function kk(t,e,n,r){if(n[0]=U(n[0]),n[0]instanceof cu)return function(i,s,o,a,u){if(!a)throw new E(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of Ci(i))if(c.field.isKeyField())l.push($i(s,a.key));else{const h=a.data.field(c.field);if(Oh(h))throw new E(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new E(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Ur(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ji(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new E(_.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<l.length;p++){const y=l[p];if(h[p].field.isKeyField()){if(typeof y!="string")throw new E(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!Fg(s)&&y.indexOf("/")!==-1)throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const w=s.path.child(X.fromString(y));if(!x.isDocumentKey(w))throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const N=new x(w);d.push($i(o,N))}else{const w=_k(a,u,y);d.push(w)}}return new Ur(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function O0(t,e,n){if(typeof(n=U(n))=="string"){if(n==="")throw new E(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fg(e)&&n.indexOf("/")!==-1)throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(X.fromString(n));if(!x.isDocumentKey(r))throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $i(t,new x(r))}if(n instanceof he)return $i(t,n._key);throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qh(n)}.`)}function L0(t,e){if(!Array.isArray(t)||t.length===0)throw new E(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ck(t,e){if(e.isInequality()){const r=Lh(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new E(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=$g(t);s!==null&&Nk(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new E(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Nk(t,e,n){if(!n.isEqual(e))throw new E(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class xy{convertValue(e,n="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Yi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Gh(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Lg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ru(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=X.fromString(e);F(IT(r));const i=new $r(r.get(1),r.get(3)),s=new x(r.popFirst(5));return i.isEqual(n)||ke(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class L$ extends xy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qn extends cu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ia(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ia extends Qn{data(e={}){return super.data(e)}}class zr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new vi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ia(this._firestore,this._userDataWriter,r.key,r,new vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ia(r._firestore,r._userDataWriter,o.doc.key,o.doc,new vi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ia(r._firestore,r._userDataWriter,o.doc.key,o.doc,new vi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:M$(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function M$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}function Ak(t,e){return t instanceof Qn&&e instanceof Qn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof zr&&e instanceof zr&&t._firestore===e._firestore&&fk(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $$(t){t=Z(t,he);const e=Z(t.firestore,Ee);return ok(We(e),t._key).then(n=>Dy(e,t,n))}class es extends xy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,n)}}function F$(t){t=Z(t,he);const e=Z(t.firestore,Ee),n=We(e),r=new es(e);return t$(n,t._key).then(i=>new Qn(e,r,t._key,i,new vi(i!==null&&i.hasLocalMutations,!0),t.converter))}function U$(t){t=Z(t,he);const e=Z(t.firestore,Ee);return ok(We(e),t._key,{source:"server"}).then(n=>Dy(e,t,n))}function V$(t){t=Z(t,nt);const e=Z(t.firestore,Ee),n=We(e),r=new es(e);return Tk(t._query),ak(n,t._query).then(i=>new zr(e,r,t,i))}function B$(t){t=Z(t,nt);const e=Z(t.firestore,Ee),n=We(e),r=new es(e);return n$(n,t._query).then(i=>new zr(e,r,t,i))}function z$(t){t=Z(t,nt);const e=Z(t.firestore,Ee),n=We(e),r=new es(e);return ak(n,t._query,{source:"server"}).then(i=>new zr(e,r,t,i))}function M0(t,e,n){t=Z(t,he);const r=Z(t.firestore,Ee),i=Zh(t.converter,e,n);return Gu(r,[Kh(Ji(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,fe.none())])}function $0(t,e,n,...r){t=Z(t,he);const i=Z(t.firestore,Ee),s=Ji(i);let o;return o=typeof(e=U(e))=="string"||e instanceof Br?Sy(s,"updateDoc",t._key,e,n,r):Ey(s,"updateDoc",t._key,e),Gu(i,[o.toMutation(t._key,fe.exists(!0))])}function j$(t){return Gu(Z(t.firestore,Ee),[new _o(t._key,fe.none())])}function q$(t,e){const n=Z(t.firestore,Ee),r=qc(t),i=Zh(t.converter,e);return Gu(n,[Kh(Ji(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,fe.exists(!1))]).then(()=>r)}function xk(t,...e){var n,r,i;t=U(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Vp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof he)l=Z(t.firestore,Ee),c=vo(t._key.path),u={next:h=>{e[o]&&e[o](Dy(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Z(t,nt);l=Z(h.firestore,Ee),c=h._query;const d=new es(l);u={next:p=>{e[o]&&e[o](new zr(l,d,h,p))},error:e[o+1],complete:e[o+2]},Tk(t._query)}return function(h,d,p,y){const w=new zh(y),N=new ly(d,w,p);return h.asyncQueue.enqueueAndForget(async()=>oy(await io(h),N)),()=>{w.Dc(),h.asyncQueue.enqueueAndForget(async()=>ay(await io(h),N))}}(We(l),c,a,u)}function G$(t,e){return r$(We(t=Z(t,Ee)),Vp(e)?e:{next:e})}function Gu(t,e){return function(n,r){const i=new ze;return n.asyncQueue.enqueueAndForget(async()=>RM(await wy(n),r,i)),i.promise}(We(t),e)}function Dy(t,e,n){const r=n.docs.get(e._key),i=new es(t);return new Qn(t,i,e._key,r,new vi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W$={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K${constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ji(e)}set(e,n,r){this._verifyNotCommitted();const i=dr(e,this._firestore),s=Zh(i.converter,n,r),o=Kh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,fe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=dr(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof Br?Sy(this._dataReader,"WriteBatch.update",s._key,n,r,i):Ey(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,fe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=dr(e,this._firestore);return this._mutations=this._mutations.concat(new _o(n._key,fe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(_.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function dr(t,e){if((t=U(t)).firestore!==e)throw new E(_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H$ extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ji(e)}get(e){const n=dr(e,this._firestore),r=new L$(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return b();const s=i[0];if(s.isFoundDocument())return new cu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new cu(this._firestore,r,n._key,null,n.converter);throw b()})}set(e,n,r){const i=dr(e,this._firestore),s=Zh(i.converter,n,r),o=Kh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=dr(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof Br?Sy(this._dataReader,"Transaction.update",s._key,n,r,i):Ey(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=dr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=dr(e,this._firestore),r=new es(this._firestore);return super.get(e).then(i=>new Qn(this._firestore,r,n._key,i._document,new vi(!1,!1),n.converter))}}function Q$(t,e,n){t=Z(t,Ee);const r=Object.assign(Object.assign({},W$),n);return function(i){if(i.maxAttempts<1)throw new E(_.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new ze;return i.asyncQueue.enqueueAndForget(async()=>{const u=await JM(i);new YM(i.asyncQueue,u,o,s,a).run()}),a.promise}(We(t),i=>e(new H$(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y$(){return new ju("deleteField")}function X$(){return new Iy("serverTimestamp")}function J$(...t){return new E$("arrayUnion",t)}function Z$(...t){return new S$("arrayRemove",t)}function eF(t){return new T$("increment",t)}(function(t,e=!0){(function(n){yo=n})(Wr),Pr(new An("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ee(new a2(n.getProvider("auth-internal")),new h2(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new E(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),kn(Pw,"3.12.1",t),kn(Pw,"3.12.1","esm2017")})();const tF="@firebase/firestore-compat",nF="0.3.10";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new E("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(){if(typeof Uint8Array>"u")throw new E("unimplemented","Uint8Arrays are not available in this environment.")}function U0(){if(!$2())throw new E("unimplemented","Blobs are unavailable in Firestore in this environment.")}class hu{constructor(e){this._delegate=e}static fromBase64String(e){return U0(),new hu(Rn.fromBase64String(e))}static fromUint8Array(e){return F0(),new hu(Rn.fromUint8Array(e))}toBase64(){return U0(),this._delegate.toBase64()}toUint8Array(){return F0(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t){return rF(t,["next","error","complete"])}function rF(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{enableIndexedDbPersistence(e,n){return h$(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return d$(e._delegate)}clearIndexedDbPersistence(e){return f$(e._delegate)}}class Dk{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof $r||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&un("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){o$(this._delegate,e,n,r)}enableNetwork(){return m$(this._delegate)}disableNetwork(){return g$(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,lk("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return p$(this._delegate)}onSnapshotsInSync(e){return G$(this._delegate,e)}get app(){if(!this._appCompat)throw new E("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new so(this,hk(this._delegate,e))}catch(n){throw dt(n,"collection()","Firestore.collection()")}}doc(e){try{return new qt(this,qc(this._delegate,e))}catch(n){throw dt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ht(this,a$(this._delegate,e))}catch(n){throw dt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Q$(this._delegate,n=>e(new Rk(this,n)))}batch(){return We(this._delegate),new Pk(new K$(this._delegate,e=>Gu(this._delegate,e)))}loadBundle(e){return y$(this._delegate,e)}namedQuery(e){return v$(this._delegate,e).then(n=>n?new ht(this,n):null)}}class ed extends xy{constructor(e){super(),this.firestore=e}convertBytes(e){return new hu(new Rn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return qt.forKey(n,this.firestore,null)}}function sF(t){r2(t)}class Rk{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new ed(e)}get(e){const n=wi(e);return this._delegate.get(n).then(r=>new du(this._firestore,new Qn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=wi(e);return r?(Ry("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=wi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=wi(e);return this._delegate.delete(n),this}}class Pk{constructor(e){this._delegate=e}set(e,n,r){const i=wi(e);return r?(Ry("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=wi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=wi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class qi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ia(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new fu(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=qi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new qi(e,new ed(e),n),i.set(n,s)),s}}qi.INSTANCES=new WeakMap;class qt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ed(e)}static forPath(e,n,r){if(e.length%2!==0)throw new E("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new qt(n,new he(n._delegate,r,new x(e)))}static forKey(e,n,r){return new qt(n,new he(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new so(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new so(this.firestore,hk(this._delegate,e))}catch(n){throw dt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=U(e),e instanceof he?dk(this._delegate,e):!1}set(e,n){n=Ry("DocumentReference.set",n);try{return n?M0(this._delegate,e,n):M0(this._delegate,e)}catch(r){throw dt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?$0(this._delegate,e):$0(this._delegate,e,n,...r)}catch(i){throw dt(i,"updateDoc()","DocumentReference.update()")}}delete(){return j$(this._delegate)}onSnapshot(...e){const n=bk(e),r=Ok(e,i=>new du(this.firestore,new Qn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return xk(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=F$(this._delegate):(e==null?void 0:e.source)==="server"?n=U$(this._delegate):n=$$(this._delegate),n.then(r=>new du(this.firestore,new Qn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new qt(this.firestore,e?this._delegate.withConverter(qi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function dt(t,e,n){return t.message=t.message.replace(e,n),t}function bk(t){for(const e of t)if(typeof e=="object"&&!zp(e))return e;return{}}function Ok(t,e){var n,r;let i;return zp(t[0])?i=t[0]:zp(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class du{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new qt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return Ak(this._delegate,e._delegate)}}class fu extends du{data(e){const n=this._delegate.data(e);return i2(n!==void 0),n}}class ht{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ed(e)}where(e,n,r){try{return new ht(this.firestore,or(this._delegate,N$(e,n,r)))}catch(i){throw dt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new ht(this.firestore,or(this._delegate,A$(e,n)))}catch(r){throw dt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ht(this.firestore,or(this._delegate,x$(e)))}catch(n){throw dt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new ht(this.firestore,or(this._delegate,D$(e)))}catch(n){throw dt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ht(this.firestore,or(this._delegate,R$(...e)))}catch(n){throw dt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ht(this.firestore,or(this._delegate,P$(...e)))}catch(n){throw dt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ht(this.firestore,or(this._delegate,b$(...e)))}catch(n){throw dt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ht(this.firestore,or(this._delegate,O$(...e)))}catch(n){throw dt(n,"endAt()","Query.endAt()")}}isEqual(e){return fk(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=B$(this._delegate):(e==null?void 0:e.source)==="server"?n=z$(this._delegate):n=V$(this._delegate),n.then(r=>new jp(this.firestore,new zr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=bk(e),r=Ok(e,i=>new jp(this.firestore,new zr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return xk(this._delegate,n,r)}withConverter(e){return new ht(this.firestore,e?this._delegate.withConverter(qi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class oF{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new fu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class jp{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new ht(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new fu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new oF(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new fu(this._firestore,r))})}isEqual(e){return Ak(this._delegate,e._delegate)}}class so extends ht{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new qt(this.firestore,e):null}doc(e){try{return e===void 0?new qt(this.firestore,qc(this._delegate)):new qt(this.firestore,qc(this._delegate,e))}catch(n){throw dt(n,"doc()","CollectionReference.doc()")}}add(e){return q$(this._delegate,e).then(n=>new qt(this.firestore,n))}isEqual(e){return dk(this._delegate,e._delegate)}withConverter(e){return new so(this.firestore,e?this._delegate.withConverter(qi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function wi(t){return Z(t,he)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(...e){this._delegate=new Br(...e)}static documentId(){return new Py(Ce.keyField().canonicalString())}isEqual(e){return e=U(e),e instanceof Br?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this._delegate=e}static serverTimestamp(){const e=X$();return e._methodName="FieldValue.serverTimestamp",new hi(e)}static delete(){const e=Y$();return e._methodName="FieldValue.delete",new hi(e)}static arrayUnion(...e){const n=J$(...e);return n._methodName="FieldValue.arrayUnion",new hi(n)}static arrayRemove(...e){const n=Z$(...e);return n._methodName="FieldValue.arrayRemove",new hi(n)}static increment(e){const n=eF(e);return n._methodName="FieldValue.increment",new hi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aF={Firestore:Dk,GeoPoint:Gh,Timestamp:pe,Blob:hu,Transaction:Rk,WriteBatch:Pk,DocumentReference:qt,DocumentSnapshot:du,Query:ht,QueryDocumentSnapshot:fu,QuerySnapshot:jp,CollectionReference:so,FieldPath:Py,FieldValue:hi,setLogLevel:sF,CACHE_SIZE_UNLIMITED:c$};function uF(t,e){t.INTERNAL.registerComponent(new An("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},aF)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lF(t){uF(t,(e,n)=>new Dk(e,n,new iF)),t.registerVersion(tF,nF)}lF(on);const cF=()=>{const t=()=>{const e=new on.auth.GoogleAuthProvider;on.auth().signInWithPopup(e)};return W.jsx("button",{className:"border text-lg font-semibold  bg-blue-200 p-3 px-8 m-4 rounded-lg",onClick:t,children:"Sign In with Google"})};var Lk={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},V0=yr.createContext&&yr.createContext(Lk),Nr=globalThis&&globalThis.__assign||function(){return Nr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Nr.apply(this,arguments)},hF=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Mk(t){return t&&t.map(function(e,n){return yr.createElement(e.tag,Nr({key:n},e.attr),Mk(e.child))})}function $k(t){return function(e){return yr.createElement(dF,Nr({attr:Nr({},t.attr)},e),Mk(t.child))}}function dF(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=hF(t,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),yr.createElement("svg",Nr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Nr(Nr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&yr.createElement("title",null,s),t.children)};return V0!==void 0?yr.createElement(V0.Consumer,null,function(n){return e(n)}):e(Lk)}function fF(t){return $k({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"}}]}]})(t)}function pF(t){return $k({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"}}]}]})(t)}const mF=()=>{const[t,e]=hn.useState(!1),n=()=>{e(!t)};return W.jsx("nav",{className:"bg-gray-800",children:W.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[W.jsxs("div",{className:"flex items-center justify-between h-16",children:[W.jsx("div",{className:"flex-shrink-0",children:W.jsx("span",{className:"h-8 w-8 text-white",children:"Nuria Casals"})}),W.jsx("div",{className:"md:hidden",children:W.jsx("button",{onClick:n,className:"text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-xl",children:t?W.jsx(fF,{}):W.jsx(pF,{})})}),W.jsx("div",{className:"hidden md:block",children:W.jsxs("div",{className:"ml-10 flex items-baseline space-x-4",children:[W.jsx("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium",children:"Inicio"}),W.jsx("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium",children:"Acerca de"}),W.jsx("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium",children:"Servicios"}),W.jsx("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium",children:"Contacto"})]})})]}),t&&W.jsx("div",{className:"md:hidden flex items-center justify-center",children:W.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[W.jsx("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium",children:"Inicio"}),W.jsx("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium",children:"Acerca de"}),W.jsx("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium",children:"Servicios"}),W.jsx("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium",children:"Contacto"})]})})]})})},gF=()=>{const t=()=>{on.auth().signOut()};return W.jsx("button",{className:"border text-lg font-semibold  bg-blue-200 p-3 px-8 m-4 rounded-lg",onClick:t,children:"Sign Out"})};function yF({user:t}){return W.jsxs("div",{className:"h-full flex flex-col justify-center items-center",children:[W.jsxs("h1",{className:"text-xl m-4 font-semibold",children:["Bienvenido ",t.displayName,"!"]}),W.jsx("div",{className:"absolute top-16 right-0",children:W.jsx(gF,{})})]})}const vF={apiKey:"AIzaSyABIBkupqUd2C-jr3eEzoTAuuZtIoNWnQU",authDomain:"nuria-casals-estudio-dientes.firebaseapp.com",projectId:"nuria-casals-estudio-dientes",storageBucket:"nuria-casals-estudio-dientes.appspot.com",messagingSenderId:"930987286988",appId:"1:930987286988:web:2e2de06bc6e3a9befe7d69"};on.initializeApp(vF);on.firestore();function wF(){const[t]=JP(on.auth());return W.jsxs("div",{className:"w-screen",children:[W.jsx(mF,{}),W.jsx("section",{className:"h-screen",children:t?W.jsx(yF,{user:t}):W.jsxs("div",{className:"h-screen flex flex-col justify-center items-center",children:[W.jsx("h1",{className:"text-xl m-4 font-semibold",children:"Inicia sesión para registrar tu progreso!"}),W.jsx(cF,{})]})})]})}nf.createRoot(document.getElementById("root")).render(W.jsx(yr.StrictMode,{children:W.jsx(wF,{})}));
