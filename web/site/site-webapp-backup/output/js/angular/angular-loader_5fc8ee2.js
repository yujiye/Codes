!function(){"use strict";function r(r,e){return e=e||Error,function(){var n,t,o=arguments[0],i="["+(r?r+":":"")+o+"] ",u=arguments[1],a=arguments;for(n=i+u.replace(/\{\d+\}/g,function(r){var e=+r.slice(1,-1);return e+2<a.length?toDebugString(a[e+2]):r}),n=n+"\nhttp://errors.angularjs.org/1.3.7/"+(r?r+"/":"")+o,t=2;t<arguments.length;t++)n=n+(2==t?"?":"&")+"p"+(t-2)+"="+encodeURIComponent(toDebugString(arguments[t]));return new e(n)}}function e(e){function n(r,e,n){return r[e]||(r[e]=n())}var t=r("$injector"),o=r("ng"),i=n(e,"angular",Object);return i.$$minErr=i.$$minErr||r,n(i,"module",function(){var r={};return function(e,i,u){var a=function(r,e){if("hasOwnProperty"===r)throw o("badname","hasOwnProperty is not a valid {0} name",e)};return a(e,"module"),i&&r.hasOwnProperty(e)&&(r[e]=null),n(r,e,function(){function r(r,e,t,o){return o||(o=n),function(){return o[t||"push"]([r,e,arguments]),c}}if(!i)throw t("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",e);var n=[],o=[],a=[],s=r("$injector","invoke","push",o),c={_invokeQueue:n,_configBlocks:o,_runBlocks:a,requires:i,name:e,provider:r("$provide","provider"),factory:r("$provide","factory"),service:r("$provide","service"),value:r("$provide","value"),constant:r("$provide","constant","unshift"),animation:r("$animateProvider","register"),filter:r("$filterProvider","register"),controller:r("$controllerProvider","register"),directive:r("$compileProvider","directive"),config:s,run:function(r){return a.push(r),this}};return u&&s(u),c})}})}e(window)}(window),angular.Module;