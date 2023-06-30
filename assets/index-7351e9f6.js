(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function M(){}const Re=e=>e;function Ae(e){return e()}function pe(){return Object.create(null)}function x(e){e.forEach(Ae)}function ae(e){return typeof e=="function"}function Q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function He(e){return Object.keys(e).length===0}function ge(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const Ke=typeof window<"u";let je=Ke?()=>window.performance.now():()=>Date.now(),ue=Ke?e=>requestAnimationFrame(e):M;const B=new Set;function De(e){B.forEach(t=>{t.c(e)||(B.delete(t),t.f())}),B.size!==0&&ue(De)}function Be(e){let t;return B.size===0&&ue(De),{promise:new Promise(n=>{B.add(t={c:e,f:n})}),abort(){B.delete(t)}}}function p(e,t){e.appendChild(t)}function Se(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function qe(e){const t=g("style");return ze(Se(e),t),t.sheet}function ze(e,t){return p(e.head||e,t),t.sheet}function I(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function oe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function se(e){return document.createTextNode(e)}function N(){return se(" ")}function xe(){return se("")}function D(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ee(e){return e===""?null:+e}function Ue(e){return Array.from(e.childNodes)}function Ve(e,t){t=""+t,e.data!==t&&(e.data=t)}function Y(e,t){e.value=t??""}function ve(e,t,n){for(let i=0;i<e.options.length;i+=1){const s=e.options[i];if(s.__value===t){s.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Ge(e){const t=e.querySelector(":checked");return t&&t.__value}function Je(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,i,t),s}function be(e,t){return new e(t)}const te=new Map;let ne=0;function Qe(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function We(e,t){const n={stylesheet:qe(t),rules:{}};return te.set(e,n),n}function Xe(e,t,n,i,s,l,a,f=0){const u=16.666/i;let o=`{
`;for(let y=0;y<=1;y+=u){const b=t+(n-t)*l(y);o+=y*100+`%{${a(b,1-b)}}
`}const m=o+`100% {${a(n,1-n)}}
}`,r=`__svelte_${Qe(m)}_${f}`,d=Se(e),{stylesheet:c,rules:_}=te.get(d)||We(d,e);_[r]||(_[r]=!0,c.insertRule(`@keyframes ${r} ${m}`,c.cssRules.length));const E=e.style.animation||"";return e.style.animation=`${E?`${E}, `:""}${r} ${i}ms linear ${s}ms 1 both`,ne+=1,r}function $e(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?l=>l.indexOf(t)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(e.style.animation=i.join(", "),ne-=s,ne||Ye())}function Ye(){ue(()=>{ne||(te.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&w(t)}),te.clear())})}let fe;function V(e){fe=e}const j=[],ye=[];let q=[];const we=[],Ze=Promise.resolve();let ce=!1;function et(){ce||(ce=!0,Ze.then(Fe))}function z(e){q.push(e)}const re=new Set;let H=0;function Fe(){if(H!==0)return;const e=fe;do{try{for(;H<j.length;){const t=j[H];H++,V(t),tt(t.$$)}}catch(t){throw j.length=0,H=0,t}for(V(null),j.length=0,H=0;ye.length;)ye.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];re.has(n)||(re.add(n),n())}q.length=0}while(j.length);for(;we.length;)we.pop()();ce=!1,re.clear(),V(e)}function tt(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}function nt(e){const t=[],n=[];q.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),q=t}let U;function it(){return U||(U=Promise.resolve(),U.then(()=>{U=null})),U}function ke(e,t,n){e.dispatchEvent(Je(`${t?"intro":"outro"}${n}`))}const Z=new Set;let S;function de(){S={r:0,c:[],p:S}}function me(){S.r||x(S.c),S=S.p}function O(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function C(e,t,n,i){if(e&&e.o){if(Z.has(e))return;Z.add(e),S.c.push(()=>{Z.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const st={duration:0};function lt(e,t,n){const i={direction:"in"};let s=t(e,n,i),l=!1,a,f,u=0;function o(){a&&$e(e,a)}function m(){const{delay:d=0,duration:c=300,easing:_=Re,tick:E=M,css:y}=s||st;y&&(a=Xe(e,0,1,c,d,_,y,u++)),E(0,1);const b=je()+d,A=b+c;f&&f.abort(),l=!0,z(()=>ke(e,!0,"start")),f=Be(P=>{if(l){if(P>=A)return E(1,0),ke(e,!0,"end"),o(),l=!1;if(P>=b){const K=_((P-b)/c);E(K,1-K)}}return l})}let r=!1;return{start(){r||(r=!0,$e(e),ae(s)?(s=s(i),it().then(m)):m())},invalidate(){r=!1},end(){l&&(o(),l=!1)}}}function ie(e){e&&e.c()}function G(e,t,n,i){const{fragment:s,after_update:l}=e.$$;s&&s.m(t,n),i||z(()=>{const a=e.$$.on_mount.map(Ae).filter(ae);e.$$.on_destroy?e.$$.on_destroy.push(...a):x(a),e.$$.on_mount=[]}),l.forEach(z)}function J(e,t){const n=e.$$;n.fragment!==null&&(nt(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(e,t){e.$$.dirty[0]===-1&&(j.push(e),et(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,n,i,s,l,a,f=[-1]){const u=fe;V(e);const o=e.$$={fragment:null,ctx:[],props:l,update:M,not_equal:s,bound:pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:pe(),dirty:f,skip_bound:!1,root:t.target||u.$$.root};a&&a(o.root);let m=!1;if(o.ctx=n?n(e,t.props||{},(r,d,...c)=>{const _=c.length?c[0]:d;return o.ctx&&s(o.ctx[r],o.ctx[r]=_)&&(!o.skip_bound&&o.bound[r]&&o.bound[r](_),m&&rt(e,r)),d}):[],o.update(),m=!0,x(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){const r=Ue(t.target);o.fragment&&o.fragment.l(r),r.forEach(w)}else o.fragment&&o.fragment.c();t.intro&&O(e.$$.fragment),G(e,t.target,t.anchor,t.customElement),Fe()}V(u)}class X{$destroy(){J(this,1),this.$destroy=M}$on(t,n){if(!ae(n))return M;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!He(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ot(e){let t;return{c(){t=g("nav"),t.innerHTML='<div class="navbar-brand"><span class="navbar-item"><h1 class="subtitle has-text-white">Runcalc</h1></span></div>',h(t,"class","navbar is-info has-shadow"),h(t,"aria-label","main navigation")},m(n,i){I(n,t,i)},p:M,i:M,o:M,d(n){n&&w(t)}}}class ct extends X{constructor(t){super(),W(this,t,null,ot,Q,{})}}function at(e){const t=e-1;return t*t*t+1}function ut(e,{delay:t=0,duration:n=400,easing:i=at,x:s=0,y:l=0,opacity:a=0}={}){const f=getComputedStyle(e),u=+f.opacity,o=f.transform==="none"?"":f.transform,m=u*(1-a),[r,d]=ge(s),[c,_]=ge(l);return{delay:t,duration:n,easing:i,css:(E,y)=>`
			transform: ${o} translate(${(1-E)*r}${d}, ${(1-E)*c}${_});
			opacity: ${u-m*y}`}}function Me(e,t,n){const i=e.slice();return i[5]=t[n],i}function Ee(e,t,n){const i=e.slice();return i[5]=t[n],i}function Ie(e){let t,n,i;return{c(){t=g("span"),n=g("i"),h(n,"class",i=e[5].icon),h(n,"aria-hidden","true"),h(t,"class","icon is-small")},m(s,l){I(s,t,l),p(t,n)},p(s,l){l&2&&i!==(i=s[5].icon)&&h(n,"class",i)},d(s){s&&w(t)}}}function Ne(e){let t,n,i,s=e[5].label+"",l,a,f,u,o,m=e[5].icon&&Ie(e);function r(){return e[4](e[5])}return{c(){t=g("li"),n=g("a"),m&&m.c(),i=N(),l=se(s),a=N(),h(t,"class",f=e[0]===e[5].value?"is-active":"")},m(d,c){I(d,t,c),p(t,n),m&&m.m(n,null),p(n,i),p(n,l),p(t,a),u||(o=D(n,"click",r),u=!0)},p(d,c){e=d,e[5].icon?m?m.p(e,c):(m=Ie(e),m.c(),m.m(n,i)):m&&(m.d(1),m=null),c&2&&s!==(s=e[5].label+"")&&Ve(l,s),c&3&&f!==(f=e[0]===e[5].value?"is-active":"")&&h(t,"class",f)},d(d){d&&w(t),m&&m.d(),u=!1,o()}}}function Oe(e){let t,n,i,s,l;var a=e[5].component;function f(u){return{}}return a&&(n=be(a,f())),{c(){t=g("div"),n&&ie(n.$$.fragment),i=N(),h(t,"class","container")},m(u,o){I(u,t,o),n&&G(n,t,null),p(t,i),l=!0},p(u,o){if(e=u,o&2&&a!==(a=e[5].component)){if(n){de();const m=n;C(m.$$.fragment,1,0,()=>{J(m,1)}),me()}a?(n=be(a,f()),ie(n.$$.fragment),O(n.$$.fragment,1),G(n,t,i)):n=null}},i(u){l||(n&&O(n.$$.fragment,u),s||z(()=>{s=lt(t,ut,{x:e[2]*50,duration:200}),s.start()}),l=!0)},o(u){n&&C(n.$$.fragment,u),l=!1},d(u){u&&w(t),n&&J(n)}}}function Te(e){let t,n,i=e[0]===e[5].value&&Oe(e);return{c(){i&&i.c(),t=xe()},m(s,l){i&&i.m(s,l),I(s,t,l),n=!0},p(s,l){s[0]===s[5].value?i?(i.p(s,l),l&3&&O(i,1)):(i=Oe(s),i.c(),O(i,1),i.m(t.parentNode,t)):i&&(de(),C(i,1,1,()=>{i=null}),me())},i(s){n||(O(i),n=!0)},o(s){C(i),n=!1},d(s){i&&i.d(s),s&&w(t)}}}function ft(e){let t,n,i,s,l,a=e[1],f=[];for(let r=0;r<a.length;r+=1)f[r]=Ne(Ee(e,a,r));let u=e[1],o=[];for(let r=0;r<u.length;r+=1)o[r]=Te(Me(e,u,r));const m=r=>C(o[r],1,1,()=>{o[r]=null});return{c(){t=g("div"),n=g("ul");for(let r=0;r<f.length;r+=1)f[r].c();i=N(),s=g("section");for(let r=0;r<o.length;r+=1)o[r].c();h(t,"class","tabs is-centered is-large"),h(s,"class","section")},m(r,d){I(r,t,d),p(t,n);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(n,null);I(r,i,d),I(r,s,d);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(s,null);l=!0},p(r,[d]){if(d&11){a=r[1];let c;for(c=0;c<a.length;c+=1){const _=Ee(r,a,c);f[c]?f[c].p(_,d):(f[c]=Ne(_),f[c].c(),f[c].m(n,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=a.length}if(d&3){u=r[1];let c;for(c=0;c<u.length;c+=1){const _=Me(r,u,c);o[c]?(o[c].p(_,d),O(o[c],1)):(o[c]=Te(_),o[c].c(),O(o[c],1),o[c].m(s,null))}for(de(),c=u.length;c<o.length;c+=1)m(c);me()}},i(r){if(!l){for(let d=0;d<u.length;d+=1)O(o[d]);l=!0}},o(r){o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)C(o[d]);l=!1},d(r){r&&w(t),oe(f,r),r&&w(i),r&&w(s),oe(o,r)}}}function dt(e,t,n){let{tabItems:i=[]}=t,{activeTab:s=0}=t,l=1;const a=u=>{n(2,l=u>s?1:-1),n(0,s=u)},f=u=>a(u.value);return e.$$set=u=>{"tabItems"in u&&n(1,i=u.tabItems),"activeTab"in u&&n(0,s=u.activeTab)},[s,i,l,a,f]}class mt extends X{constructor(t){super(),W(this,t,dt,ft,Q,{tabItems:1,activeTab:0})}}function Le(e,t,n){const i=e.slice();return i[14]=t[n],i}function Pe(e){let t,n=e[14].name+"",i,s;return{c(){t=g("option"),i=se(n),s=N(),t.__value=e[14],t.value=t.__value},m(l,a){I(l,t,a),p(t,i),p(t,s)},p:M,d(l){l&&w(t)}}}function ht(e){let t,n,i,s,l,a,f,u,o,m,r,d,c,_,E,y,b,A,P,K,T,F,le,he,R=e[6],k=[];for(let v=0;v<R.length;v+=1)k[v]=Pe(Le(e,R,v));return{c(){t=g("div"),n=g("div"),i=g("div"),s=g("span"),l=g("input"),a=N(),f=g("span"),f.innerHTML='<a class="button is-static is-medium">km</a>',u=N(),o=g("div"),o.innerHTML='<span class="tag is-large"><strong>=</strong></span>',m=N(),r=g("div"),d=g("div"),c=g("span"),_=g("input"),E=N(),y=g("span"),y.innerHTML='<a class="button is-static is-medium">mi</a>',b=N(),A=g("div"),P=g("div"),K=g("div"),T=g("select"),F=g("option"),F.textContent="Popular distances";for(let v=0;v<k.length;v+=1)k[v].c();h(l,"type","number"),h(l,"class","input is-medium"),h(l,"placeholder","km"),h(s,"class","control is-expanded"),h(f,"class","control"),h(i,"class","field has-addons"),h(n,"class",Ce),h(o,"class","is-hidden-mobile"),h(_,"class","input is-medium"),h(_,"type","number"),h(_,"placeholder","mi"),h(c,"class","control is-expanded"),h(y,"class","control"),h(d,"class","field has-addons"),h(r,"class",Ce),h(t,"class","columns is-mobile is-multiline is-centered is-vcentered"),F.__value="",F.value=F.__value,e[2]===void 0&&z(()=>e[11].call(T)),h(K,"class","select is-fullwidth"),h(P,"class","column is-narrow"),h(A,"class","columns is-centered")},m(v,L){I(v,t,L),p(t,n),p(n,i),p(i,s),p(s,l),Y(l,e[0]),p(i,a),p(i,f),p(t,u),p(t,o),p(t,m),p(t,r),p(r,d),p(d,c),p(c,_),Y(_,e[1]),p(d,E),p(d,y),I(v,b,L),I(v,A,L),p(A,P),p(P,K),p(K,T),p(T,F);for(let $=0;$<k.length;$+=1)k[$]&&k[$].m(T,null);ve(T,e[2],!0),le||(he=[D(l,"input",e[7]),D(l,"input",e[8]),D(_,"input",e[9]),D(_,"input",e[10]),D(T,"change",e[11]),D(T,"change",e[5])],le=!0)},p(v,[L]){if(L&1&&ee(l.value)!==v[0]&&Y(l,v[0]),L&2&&ee(_.value)!==v[1]&&Y(_,v[1]),L&64){R=v[6];let $;for($=0;$<R.length;$+=1){const _e=Le(v,R,$);k[$]?k[$].p(_e,L):(k[$]=Pe(_e),k[$].c(),k[$].m(T,null))}for(;$<k.length;$+=1)k[$].d(1);k.length=R.length}L&68&&ve(T,v[2])},i:M,o:M,d(v){v&&w(t),v&&w(b),v&&w(A),oe(k,v),le=!1,x(he)}}}const Ce="column is-one-quarter-desktop is-one-third-tablet is-full-mobile";function _t(e,t,n){const i=b=>b*.6213712,s=b=>b*1.609344;let l=5,a=3.1;const f=b=>{n(0,l=+b),n(1,a=+i(+b).toFixed(2))},u=b=>{n(0,l=+s(+b).toFixed(2)),n(1,a=+b)};let o;const m=()=>{o.distance?f(o.distance):o.distanceInMi&&u(o.distanceInMi)},r=[{distance:5,name:"5K"},{distance:10,name:"10K"},{distanceInMi:13.1,name:"Half Marathon"},{distance:25,name:"25K"},{distance:30,name:"30K"},{distanceInMi:26.2,name:"Marathon"},{distance:100,name:"100K"}];function d(){l=ee(this.value),n(0,l)}const c=b=>f(b.target.valueAsNumber);function _(){a=ee(this.value),n(1,a)}const E=b=>u(b.target.valueAsNumber);function y(){o=Ge(this),n(2,o),n(6,r)}return[l,a,o,f,u,m,r,d,c,_,E,y]}class pt extends X{constructor(t){super(),W(this,t,_t,ht,Q,{})}}function gt(e){let t;return{c(){t=g("table"),t.innerHTML=`<thead><tr><th>Distance</th> 
            <th>Pace (Mi)</th> 
            <th>Pace (KM)</th></tr></thead> 
    <tbody><tr><th>Mile</th> 
            <td>10:00</td> 
            <td>10:00</td></tr> 
        <tr><th>Mile</th> 
            <td>10:00</td> 
            <td>10:00</td></tr> 
        <tr><th>Mile</th> 
            <td>10:00</td> 
            <td>10:00</td></tr> 
        <tr><th>Mile</th> 
            <td>10:00</td> 
            <td>10:00</td></tr></tbody>`,h(t,"class","table is-bordered")},m(n,i){I(n,t,i)},p:M,i:M,o:M,d(n){n&&w(t)}}}function vt(e){return[]}class bt extends X{constructor(t){super(),W(this,t,vt,gt,Q,{})}}function $t(e){let t,n,i,s;return t=new ct({}),i=new mt({props:{tabItems:e[0]}}),{c(){ie(t.$$.fragment),n=N(),ie(i.$$.fragment)},m(l,a){G(t,l,a),I(l,n,a),G(i,l,a),s=!0},p:M,i(l){s||(O(t.$$.fragment,l),O(i.$$.fragment,l),s=!0)},o(l){C(t.$$.fragment,l),C(i.$$.fragment,l),s=!1},d(l){J(t,l),l&&w(n),J(i,l)}}}function yt(e){return[[{label:"Pace",value:0,component:bt},{label:"Distance",value:1,component:pt}]]}class wt extends X{constructor(t){super(),W(this,t,yt,$t,Q,{})}}new wt({target:document.getElementById("app")});
