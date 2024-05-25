import"./assets/vendor-b20c67ea.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c="44069289-55a8aa963762c475e8ab93eb8",l="https://pixabay.com/api/",u=(s="")=>{const r=new URLSearchParams({key:c,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${l}?${r}`).then(o=>{if(!o.ok)throw new Error;return o.json()})},f=s=>s.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:i,downloads:a})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${n}"
              width = "360"
              height = "200"
            />
            <ul class="image-info">
              <li class="item-info">Likes <span>${e}</span></li>
              <li class="item-info">Views <span>${t}</span></li>
              <li class="item-info">Comments <span>${i}</span></li>
              <li class="item-info">Downloads <span>${a}</span></li>
            </ul>
          </a>
        </li>
    `).join(""),m=document.querySelector(".search-btn");document.querySelector(".form-input");m.addEventListener("click",s=>{s.preventDefault()});u().then(s=>{const r=f(s.results);console.log("markup: ",r)});
//# sourceMappingURL=commonHelpers.js.map
