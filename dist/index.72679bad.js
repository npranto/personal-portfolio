!function(){var e=document.querySelectorAll("#menu-links > li > a"),t=document.querySelectorAll("#menu-tabs > a"),n=document.querySelector("#read-more-btn"),a=document.querySelector("#collapse-read-more-btn"),r=document.querySelector("#read-more-content"),o=document.querySelector("#lexia-input"),l=document.querySelector("#newfold-input"),d=document.querySelector("#regexer-input"),i=document.querySelector("#logtrade-input"),s=document.querySelector("#portfolio-v2-input"),c=document.querySelector("#contact-form"),u=document.querySelector('#contact-form input[name="name"]'),m=document.querySelector('#contact-form input[name="email"]'),v=document.querySelector('#contact-form textarea[name="message"]'),g=document.querySelector("#contact-form #name-error"),f=document.querySelector("#contact-form #email-error"),h=document.querySelector("#contact-form #message-error");function L(){e&&null!==e&&e.forEach((function(e){var t,n,a=(e||{}).hash;a&&(null===window||void 0===window||null===(t=window.location)||void 0===t||null===(n=t.href)||void 0===n?void 0:n.includes(a))?e.classList.add("text-gray-800","bg-gray-100","font-semibold","-translate-x-2","px-1"):e.classList.remove("text-gray-800","bg-gray-100","font-semibold","-translate-x-2","px-1")}))}function y(){t&&null!==e&&t.forEach((function(e){var t,n,a=(e||{}).hash;a&&(null===window||void 0===window||null===(t=window.location)||void 0===t||null===(n=t.href)||void 0===n?void 0:n.includes(a))?(e.classList.replace("bg-gray-100","bg-gray-800"),e.classList.replace("text-black","text-slate-50")):(e.classList.replace("bg-gray-800","bg-gray-100"),e.classList.replace("text-slate-50","text-black"))}))}function b(e){var t,n,a=null==e||null===(t=e.target)||void 0===t?void 0:t.checked,r=null==e||null===(n=e.target)||void 0===n?void 0:n.value,o=document.querySelector("#".concat(r));o&&a?o.classList.remove("hidden"):o&&!a&&o.classList.add("hidden")}window.addEventListener("DOMContentLoaded",(function(){window.innerWidth<640?y():L()})),window.addEventListener("hashchange",(function(){window.innerWidth<640?y():L()})),n.addEventListener("click",(function(){n.classList.add("hidden"),a.classList.remove("hidden"),r.classList.remove("hidden")})),a.addEventListener("click",(function(){n.classList.remove("hidden"),a.classList.add("hidden"),r.classList.add("hidden")})),o.addEventListener("change",b),l.addEventListener("change",b),d.addEventListener("change",b),i.addEventListener("change",b),s.addEventListener("change",b),c.addEventListener("submit",(function(e){var t,n,a,r,o,l;e.preventDefault();var d=null==c||null===(t=c.elements)||void 0===t||null===(n=t.name)||void 0===n?void 0:n.value,i=null==c||null===(a=c.elements)||void 0===a||null===(r=a.email)||void 0===r?void 0:r.value,s=null==c||null===(o=c.elements)||void 0===o||null===(l=o.message)||void 0===l?void 0:l.value;g.textContent="",g.classList.add("hidden"),u.classList.replace("border-red-500","border-gray-500"),f.textContent="",f.classList.add("hidden"),m.classList.replace("border-red-500","border-gray-500"),h.textContent="",h.classList.add("hidden"),v.classList.replace("border-red-500","border-gray-500");var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,n=e.email,a=e.message,r=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,o=function(){return"string"==typeof n&&n.length>0&&r.test(n.toLowerCase())},l=function(){return"string"==typeof a&&a.length>0&&a.length<=500};return"string"==typeof t&&t.length>0&&t.length<=63?o()?l()?{isValid:!0,error:null,field:null}:{isValid:!1,field:"message",error:"Please enter a valid message"}:{isValid:!1,field:"email",error:"Please enter a valid email"}:{isValid:!1,field:"name",error:"Please enter a valid name"}}({name:d,email:i,message:s}),y=L.isValid,b=L.error,p=L.field;if(y){var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,n=e.email,a=e.message;return{name:t,email:n.toLowerCase(),message:a}}({name:d,email:i,message:s}),x="Urgent: Message from ".concat(w.name),q=encodeURIComponent(w.message);window.open("mailto:".concat("npranto@gmail.com","?subject=").concat(x,"&body=").concat(q))}else!function(e,t){"name"===t?(g.textContent=e,g.classList.remove("hidden"),u.classList.replace("border-gray-500","border-red-500")):"email"===t?(f.textContent=e,f.classList.remove("hidden"),m.classList.replace("border-gray-500","border-red-500")):"message"===t&&(h.textContent=e,h.classList.remove("hidden"),v.classList.replace("border-gray-500","border-red-500"))}(b,p)}))}();
//# sourceMappingURL=index.72679bad.js.map
