import{_ as d,R as _,a as m,m as b,b as p,r as n,o as u,c as h,d as t,e as s,w as e,F as g,f,g as o,t as v}from"./index-8033c36b.js";import{c as l}from"./cart-2f56ae55.js";const i="/vite-final-week8/assets/Logo-8994c063.jpg",x={components:{RouterView:_,RouterLink:m},computed:{...b(l,["carts"])},methods:{...p(l,["getCart"])},mounted(){this.getCart()}},k={class:"d-flex flex-column bg-light"},w={class:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},y={class:"container"},C=t("img",{src:i,alt:""},null,-1),R=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),S={class:"collapse navbar-collapse",id:"navbarSupportedContent"},V={class:"navbar-nav mb-2 mb-lg-0 d-flex ms-auto fs-4 fw-bold"},L={class:"nav-item ms-5"},N={class:"nav-item ms-5"},$={class:"nav-item ms-5"},j={class:"nav-item ms-5"},B=t("i",{class:"bi bi-bag-check"},null,-1),F={class:"position-absolute translate-middle badge rounded-pill bg-danger"},T={class:"bg-light py-3"},q={class:"container"},z=f('<div class="d-flex align-items-center justify-content-between mb-4"><ul class="d-flex list-unstyled mb-0 h3"><li><a href="https://www.instagram.com/" class="text-dark me-4"><i class="bi bi-instagram"></i></a></li><li><a href="https://www.facebook.com/" class="text-dark me-4"><i class="bi bi-facebook"></i></a></li><li><a href="https://line.me/zh-hant/" class="text-dark me-4"><i class="bi bi-line"></i></a></li></ul></div>',1),A={class:"d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-dark"},D=t("div",{class:"mb-md-0 mb-1"},[t("p",{class:"mb-0"}," 02-3456-7890"),t("p",{class:"mb-0"}," service@mail.com")],-1),E=t("p",{class:"mb-0"},"無商業用途，僅供學習需要",-1),G=t("img",{src:i,alt:""},null,-1);function H(c,I,J,K,M,O){const a=n("RouterLink"),r=n("RouterView");return u(),h(g,null,[t("header",k,[t("nav",w,[t("div",y,[s(a,{class:"navbar-brand",to:"/"},{default:e(()=>[C]),_:1}),R,t("div",S,[t("ul",V,[t("li",L,[s(a,{class:"nav-link",to:"/products"},{default:e(()=>[o("有機蔬果")]),_:1})]),t("li",N,[s(a,{class:"nav-link",to:"/menu"},{default:e(()=>[o("有機食譜")]),_:1})]),t("li",$,[s(a,{class:"nav-link",to:"/question"},{default:e(()=>[o("常見問題")]),_:1})]),t("li",j,[s(a,{class:"nav-link position-relative",to:"/cart"},{default:e(()=>[B,t("span",F,v(c.carts.length),1)]),_:1})])])])])])]),s(r),t("footer",T,[t("div",q,[z,t("div",A,[D,E,s(a,{to:"/login",class:"mb-0"},{default:e(()=>[G]),_:1})])])])],64)}const U=d(x,[["render",H]]);export{U as default};
