import{r as _,g as m}from"./index-DVXBtNgz.js";var f={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=_,y=Symbol.for("react.element"),v=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,j=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function u(n,t,s){var o,i={},e=null,r=null;s!==void 0&&(e=""+s),t.key!==void 0&&(e=""+t.key),t.ref!==void 0&&(r=t.ref);for(o in t)h.call(t,o)&&!O.hasOwnProperty(o)&&(i[o]=t[o]);if(n&&n.defaultProps)for(o in t=n.defaultProps,t)i[o]===void 0&&(i[o]=t[o]);return{$$typeof:y,type:n,key:e,ref:r,props:i,_owner:j.current}}c.Fragment=v;c.jsx=u;c.jsxs=u;f.exports=c;var p=f.exports,l={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var t={}.hasOwnProperty;function s(){for(var e="",r=0;r<arguments.length;r++){var a=arguments[r];a&&(e=i(e,o(a)))}return e}function o(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var a in e)t.call(e,a)&&e[a]&&(r=i(r,a));return r}function i(e,r){return r?e?e+" "+r:e+r:e}n.exports?(s.default=s,n.exports=s):window.classNames=s})()})(l);var E=l.exports;const d=m(E),N="_container_canqi_1",S={container:N},b=({className:n,children:t,...s})=>p.jsx("div",{className:d(S.container,n),...s,children:t});b.__docgenInfo={description:"",methods:[],displayName:"Container"};const g="_heading_norbb_1",R={heading:g},w=({children:n,className:t,...s})=>p.jsx("h2",{className:d(R.heading,t),...s,children:n});w.__docgenInfo={description:"",methods:[],displayName:"Heading"};const I=n=>p.jsx("p",{...n});I.__docgenInfo={description:"",methods:[],displayName:"Text"};export{b as C,w as H,I as T,d as c,p as j};
