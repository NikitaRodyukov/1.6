!function(e){var r={};function t(o){if(r[o])return r[o].exports;var i=r[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(o,i,function(r){return e[r]}.bind(null,i));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){e.exports=t(2)},function(e,r,t){},function(e,r,t){"use strict";t.r(r);t(1);var o,i,a=window.matchMedia("(min-width:768px)"),n=function(){return a.matches?(void 0!==o&&o.destroy(!0,!0),void(void 0!==i&&i.destroy(!0,!0))):a.matches?void 0:s()},s=function(){i=new Swiper(".services__service",{slidesPerView:"auto",spaceBetween:16,keyboardControl:!0,pagination:{el:".swiper-pagination",clickable:!0}}),o=new Swiper(".repair-block__items",{slidesPerView:"auto",spaceBetween:16,keyboardControl:!0,pagination:{el:".swiper-pagination",clickable:!0}})};a.addListener(n),n();var c=document.querySelector(".items__wrapper"),l=document.querySelector(".repair-block__expand"),d=l.querySelector(".repair-block__expand__icon"),p=document.querySelectorAll(".items__block"),_=document.querySelector(".repair-block"),u=l.querySelector(".repair-block__expand__text"),f=window.matchMedia("(min-width:1366px)");if(f.matches)for(var m=0;m<8;m++)p[m].classList.add("items__block--show");else if(a.matches)for(var b=0;b<6;b++)p[b].classList.add("items__block--show");l.addEventListener("click",(function(){if(l.classList.contains("repair-block__expand--false")){if(f.matches)for(var e=8;e<p.length;e++)p[e].classList.add("items__block--show");else if(a.matches)for(var r=6;r<p.length;r++)p[r].classList.add("items__block--show");l.classList.remove("repair-block__expand--false"),l.classList.add("repair-block__expand--expanded"),c.classList.add("items__wrapper--expanded"),d.classList.add("repair-block__expand__icon--rotated"),u.innerHTML="Скрыть"}else l.classList.contains("repair-block__expand--expanded")&&(_.classList.remove("repair-block__expand--expanded"),l.classList.add("repair-block__expand--false"),c.classList.remove("items__wrapper--expanded"),u.innerHTML="Показать все",d.classList.remove("repair-block__expand__icon--rotated"),setTimeout(v,940))}));var v=function(){if(f.matches)for(var e=8;e<p.length;e++)p[e].classList.remove("items__block--show");else if(a.matches)for(var r=6;r<p.length;r++)p[r].classList.remove("items__block--show")};console.log("Works!")}]);
//# sourceMappingURL=bundle.js.map