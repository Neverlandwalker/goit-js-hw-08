function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),m=Object.prototype.toString,d=Math.max,s=Math.min,v=function(){return l.Date.now()};function b(e,t,n){var r,o,i,f,u,a,c=0,l=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function E(e){return c=e,u=setTimeout(T,t),l?y(e):f}function S(e){var n=e-a;return void 0===a||n>=t||n<0||m&&e-c>=i}function T(){var e=v();if(S(e))return x(e);u=setTimeout(T,function(e){var n=t-(e-a);return m?s(n,i-(e-c)):n}(e))}function x(e){return u=void 0,b&&r?y(e):(r=o=void 0,f)}function j(){var e=v(),n=S(e);if(r=arguments,o=this,a=e,n){if(void 0===u)return E(a);if(m)return u=setTimeout(T,t),y(a)}return void 0===u&&(u=setTimeout(T,t)),f}return t=g(t)||0,p(n)&&(l=!!n.leading,i=(m="maxWait"in n)?d(g(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),j.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=a=o=u=void 0},j.flush=function(){return void 0===u?f:x(v())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};const y={},E={formEl:document.querySelector(".feedback-form"),formEmail:document.querySelector(".feedback-form input"),formText:document.querySelector(".feedback-form textarea"),formSubmit:document.querySelector(".feedback-form button")};E.formEl.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),y={}})),E.formEmail.addEventListener("input",(function(e){})),E.formText.addEventListener("input",e(t)((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),1e3)),E.formSubmit.addEventListener("click",onSubmitClick),localStorage.getItem("feedback-form-state")&&(E.formText.value=y.message||"",E.formEmail.value=y.email||"");
//# sourceMappingURL=03-feedback.1682f735.js.map
