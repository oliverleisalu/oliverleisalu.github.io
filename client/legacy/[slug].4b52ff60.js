import{I as t,J as n,_ as s,a,b as e,c as r,i as c,s as i,d as o,S as u,C as f,q as l,r as p,B as h,h as m,v,w as $,k as d,x,n as g,y as w,z as y,A as b,p as j,t as k,f as E,g as H,u as q,j as I,l as L,G as M}from"./client.9548dd65.js";function T(t){var n,s,a,e,r=t[0].title+"",c=t[0].html+"";return{c:function(){n=j("h1"),s=k(r),a=l(),e=j("div"),this.h()},l:function(t){n=E(t,"H1",{});var c=H(n);s=q(c,r),c.forEach(m),a=v(t),e=E(t,"DIV",{class:!0}),H(e).forEach(m),this.h()},h:function(){I(e,"class","content")},m:function(t,r){d(t,n,r),L(n,s),d(t,a,r),d(t,e,r),e.innerHTML=c},p:function(t,n){1&n&&r!==(r=t[0].title+"")&&M(s,r),1&n&&c!==(c=t[0].html+"")&&(e.innerHTML=c)},d:function(t){t&&m(n),t&&m(a),t&&m(e)}}}function z(t){var n,s,a;document.title=n=t[0].title;var e=new f({props:{class:"pt-4",$$slots:{default:[T]},$$scope:{ctx:t}}});return{c:function(){s=l(),p(e.$$.fragment)},l:function(t){h('[data-svelte="svelte-iu3vwn"]',document.head).forEach(m),s=v(t),$(e.$$.fragment,t)},m:function(t,n){d(t,s,n),x(e,t,n),a=!0},p:function(t,s){var r=g(s,1)[0];(!a||1&r)&&n!==(n=t[0].title)&&(document.title=n);var c={};3&r&&(c.$$scope={dirty:r,ctx:t}),e.$set(c)},i:function(t){a||(w(e.$$.fragment,t),a=!0)},o:function(t){y(e.$$.fragment,t),a=!1},d:function(t){t&&m(s),b(e,t)}}}function A(t){return B.apply(this,arguments)}function B(){return(B=t(n.mark((function t(s){var a,e,r;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.params,s.query,t.next=3,this.fetch("blog/".concat(a.slug,".json"));case 3:return e=t.sent,t.next=6,e.json();case 6:if(r=t.sent,200!==e.status){t.next=11;break}return t.abrupt("return",{post:r});case 11:this.error(e.status,r.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function C(t,n,s){var a=n.post;return t.$set=function(t){"post"in t&&s(0,a=t.post)},[a]}var D=function(t){function n(t){var s;return a(this,n),s=e(this,r(n).call(this)),c(o(s),t,C,z,i,{post:0}),s}return s(n,u),n}();export default D;export{A as preload};
