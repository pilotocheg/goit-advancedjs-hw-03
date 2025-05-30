import{a as d,S as p,i as g}from"./assets/vendor-CKDIytP8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function y(t){return d.get("https://pixabay.com/api/",{headers:{"Content-Type":"application/json"},params:{key:"50578458-599512b8a758686bbac6d0702",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data.hits)}const h=document.querySelector(".loader"),n=document.querySelector(".gallery"),v=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function c(t){h.classList[t?"add":"remove"]("visible")}function b(){n.innerHTML=""}function L(t){const o=t.map(({webformatURL:i,largeImageURL:s,tags:e,likes:r,views:a,comments:m,downloads:u})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img class="gallery-image" src="${i}" alt="${e}" loading="lazy" />
        <div class="gallery-item-info">
          <div class="gallery-item-info-item">
            <p class="gallery-item-info-title">Likes</p>
            <p class="gallery-item-info-value">${r}</p>
          </div>
          <div class="gallery-item-info-item">
            <p class="gallery-item-info-title">Views</p>
            <p class="gallery-item-info-value">${a}</p>
          </div>
          <div class="gallery-item-info-item">
            <p class="gallery-item-info-title">Comments</p>
            <p class="gallery-item-info-value">${m}</p>
          </div>
          <div class="gallery-item-info-item">
            <p class="gallery-item-info-title">Downloads</p>
            <p class="gallery-item-info-value">${u}</p>
          </div>
        </div>
        </a>
      </li>
    `).join("");n.insertAdjacentHTML("beforeend",o),n.scrollIntoView({behavior:"smooth",block:"end"}),v.refresh()}function l(t){g.error({message:t,position:"topRight",class:"error-message",messageColor:"#fff",iconColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",maxWidth:432})}function S(t){const{search:o}=Object.fromEntries(new FormData(t));return o.trim()}const f=document.querySelector(".form");function w(t){t.preventDefault();const o=S(t.currentTarget);if(!o){l("The search query can not be empty!");return}f.reset(),b(),c(!0),y(o).then(i=>{if(!i.length){l("Sorry, there are no images matching your search query. Please, try again!");return}L(i)}).catch(i=>{l(i.message||"Failed to fetch images. Please, try again later!"),console.error(i)}).finally(()=>c(!1))}f.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
