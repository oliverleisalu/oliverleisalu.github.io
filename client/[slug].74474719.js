import{S as t,i as s,s as a,C as e,k as n,l as o,w as r,d as c,o as i,p as l,f as u,q as f,r as p,u as $,v as h,j as m,t as d,c as g,b as v,m as w,e as x,g as j,z as y}from"./client.f34198a7.js";function E(t){let s,a,e,o,r=t[0].title+"",l=t[0].html+"";return{c(){s=m("h1"),a=d(r),e=n(),o=m("div"),this.h()},l(t){s=g(t,"H1",{});var n=v(s);a=w(n,r),n.forEach(c),e=i(t),o=g(t,"DIV",{class:!0}),v(o).forEach(c),this.h()},h(){x(o,"class","content")},m(t,n){u(t,s,n),j(s,a),u(t,e,n),u(t,o,n),o.innerHTML=l},p(t,s){1&s&&r!==(r=t[0].title+"")&&y(a,r),1&s&&l!==(l=t[0].html+"")&&(o.innerHTML=l)},d(t){t&&c(s),t&&c(e),t&&c(o)}}}function H(t){let s,a,m;document.title=s=t[0].title;const d=new e({props:{class:"pt-4",$$slots:{default:[E]},$$scope:{ctx:t}}});return{c(){a=n(),o(d.$$.fragment)},l(t){r('[data-svelte="svelte-iu3vwn"]',document.head).forEach(c),a=i(t),l(d.$$.fragment,t)},m(t,s){u(t,a,s),f(d,t,s),m=!0},p(t,[a]){(!m||1&a)&&s!==(s=t[0].title)&&(document.title=s);const e={};3&a&&(e.$$scope={dirty:a,ctx:t}),d.$set(e)},i(t){m||(p(d.$$.fragment,t),m=!0)},o(t){$(d.$$.fragment,t),m=!1},d(t){t&&c(a),h(d,t)}}}async function b({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function q(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,q,H,a,{post:0})}}export{b as preload};
