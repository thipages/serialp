var serialp=function(){"use strict";function e(e,n,r,t,a,u,c){try{var i=e[u](c),o=i.value}catch(e){return void r(e)}i.done?n(o):Promise.resolve(o).then(t,a)}return function(){var n,r=(n=regeneratorRuntime.mark((function e(n){var r,t,a,u,c,i,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!(o.length>1&&void 0!==o[1])||o[1],t=function(e,n,t,a){return"function"==typeof r?r(e,n,t,a):r},a=[],u=0;case 4:if(!(u<n.length)){e.next=30;break}return c=void 0,i=void 0,e.prev=6,e.next=9,n[u]();case 9:c=e.sent,i=!0,e.next=17;break;case 13:e.prev=13,e.t0=e.catch(6),c=e.t0,i=!1;case 17:if(a.push([i,c]),"AsyncFunction"!==r.constructor.name){e.next=25;break}return e.next=21,t(u,i,c,a);case 21:if(e.sent){e.next=23;break}return e.abrupt("break",30);case 23:e.next=27;break;case 25:if(t(u,i,c,a)){e.next=27;break}return e.abrupt("break",30);case 27:u++,e.next=4;break;case 30:return e.abrupt("return",a);case 31:case"end":return e.stop()}}),e,null,[[6,13]])})),function(){var r=this,t=arguments;return new Promise((function(a,u){var c=n.apply(r,t);function i(n){e(c,a,u,i,o,"next",n)}function o(n){e(c,a,u,i,o,"throw",n)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}()}();
