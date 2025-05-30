import{S as d,i as g}from"./assets/vendor-De63neY_.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function y(r){const i=new URLSearchParams({key:"50578458-599512b8a758686bbac6d0702",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i.toString()}`).then(t=>{if(!t.ok)throw new Error(`Failed to fetch images. Status: ${t.status}`);return t.json()}).then(t=>t.hits)}const p=document.querySelector(".loader"),n=document.querySelector(".gallery"),h=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function c(r){p.classList[r?"add":"remove"]("visible")}function v(){n.innerHTML=""}function b(r){const i=r.map(({webformatURL:t,largeImageURL:s,tags:e,likes:o,views:a,comments:m,downloads:u})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img class="gallery-image" src="${t}" alt="${e}" loading="lazy" />
        <div class="gallery-item-info">
          <div class="gallery-item-info-item">
            <p class="gallery-item-info-title">Likes</p>
            <p class="gallery-item-info-value">${o}</p>
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
    `).join("");n.insertAdjacentHTML("beforeend",i),n.scrollIntoView({behavior:"smooth",block:"end"}),h.refresh()}function l(r){g.error({message:r,position:"topRight",class:"error-message",messageColor:"#fff",iconColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",maxWidth:432})}function L(r){const{search:i}=Object.fromEntries(new FormData(r));return i.trim()}const f=document.querySelector(".search-form");function S(r){r.preventDefault();const i=L(r.currentTarget);if(!i){l("The search query can not be empty!");return}f.reset(),v(),c(!0),y(i).then(t=>{if(!t.length){l("Sorry, there are no images matching your search query. Please, try again!");return}b(t)}).catch(t=>{l(t.message||"Failed to fetch images. Please, try again later!"),console.error(t)}).finally(()=>c(!1))}f.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
