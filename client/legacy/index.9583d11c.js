import{_ as t,a as n,i as r,s as e,b as o,S as s,C as c,q as a,r as f,B as u,f as i,v as l,w as h,h as p,x as v,l as g,y as m,z as $,A as d,m as y,o as R,p as x,t as b,d as E,e as j,u as q,g as w,j as A,G as B,H as D}from"./client.b1ed9564.js";function H(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function L(t,n,r){var e=t.slice();return e[1]=n[r],e}function S(t){var n,r,e,o,s=t[1].title+"";return{c:function(){n=x("li"),r=x("a"),e=b(s),this.h()},l:function(t){n=E(t,"LI",{});var o=j(n);r=E(o,"A",{rel:!0,href:!0});var c=j(r);e=q(c,s),c.forEach(i),o.forEach(i),this.h()},h:function(){w(r,"rel","prefetch"),w(r,"href",o="blog/"+t[1].slug)},m:function(t,o){p(t,n,o),A(n,r),A(r,e)},p:function(t,n){1&n&&s!==(s=t[1].title+"")&&B(e,s),1&n&&o!==(o="blog/"+t[1].slug)&&w(r,"href",o)},d:function(t){t&&i(n)}}}function z(t){for(var n,r,e,o,s=t[0],c=[],f=0;f<s.length;f+=1)c[f]=S(L(t,s,f));return{c:function(){n=x("h1"),r=b("Recent posts"),e=a(),o=x("ul");for(var t=0;t<c.length;t+=1)c[t].c()},l:function(t){n=E(t,"H1",{});var s=j(n);r=q(s,"Recent posts"),s.forEach(i),e=l(t),o=E(t,"UL",{});for(var a=j(o),f=0;f<c.length;f+=1)c[f].l(a);a.forEach(i)},m:function(t,s){p(t,n,s),A(n,r),p(t,e,s),p(t,o,s);for(var a=0;a<c.length;a+=1)c[a].m(o,null)},p:function(t,n){if(1&n){var r;for(s=t[0],r=0;r<s.length;r+=1){var e=L(t,s,r);c[r]?c[r].p(e,n):(c[r]=S(e),c[r].c(),c[r].m(o,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=s.length}},d:function(t){t&&i(n),t&&i(e),t&&i(o),D(c,t)}}}function C(t){var n,r,e=new c({props:{class:"pt-4",$$slots:{default:[z]},$$scope:{ctx:t}}});return{c:function(){n=a(),f(e.$$.fragment),this.h()},l:function(t){u('[data-svelte="svelte-hfp9t8"]',document.head).forEach(i),n=l(t),h(e.$$.fragment,t),this.h()},h:function(){document.title="Blog"},m:function(t,o){p(t,n,o),v(e,t,o),r=!0},p:function(t,n){var r=g(n,1)[0],o={};17&r&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i:function(t){r||(m(e.$$.fragment,t),r=!0)},o:function(t){$(e.$$.fragment,t),r=!1},d:function(t){t&&i(n),d(e,t)}}}function G(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function I(t,n,r){var e=n.posts;return t.$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var P=function(c){t(u,s);var a,f=(a=u,function(){var t,n=y(a);if(H()){var r=y(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return R(this,t)});function u(t){var s;return n(this,u),s=f.call(this),r(o(s),t,I,C,e,{posts:0}),s}return u}();export default P;export{G as preload};
