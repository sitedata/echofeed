!function t(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.tinyToast=o():e.tinyToast=o()}(this,function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}return o.m=t,o.c=e,o.p="",o(0)}([function(t,e){"use strict";function o(){n&&(document.body.removeChild(n),n=null)}var n,r={show:function t(e){var o;return o=e,function t(){if(n)return n;let e=function t(){let e="tinyToast",o=function t(){let e=document.createElement("style");return document.head.appendChild(e),e.sheet}();return function t(e,o,n){Object.keys(n).forEach(t=>{let r=n[t];o.insertRule(`.${e} { ${t}: ${r} }`,0)})}(e,o,{color:"#333",position:"fixed",bottom:"0em",right:"1em","background-color":"#7FFFD4","border-radius":"5px","border-width":"1px","border-color":"#73E1BC","border-style":"solid",padding:"1em 2em","z-index":1e3}),e}();return(n=document.createElement("h3")).classList.add(e),document.body.appendChild(n),n}().textContent=o,r},hide:function t(e){var n,r;n=o,(r=e)?setTimeout(n,r):n()}};t.exports=r}])});