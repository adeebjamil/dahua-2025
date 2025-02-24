const g=[{id:"IPC-HFW2230M-AS-LED-B",name:"2MP Lite Full-color Fixed-focal Bullet Network Camera",image:"/src/assets/LightSeries/IPC-HFW2230M-AS-LED-B.png",category:"Full-color"},{id:"IPC-HFW2439M-AS-LED-B-S2",name:"4MP Lite Full-color Fixed-focal Bullet Network Camera",image:"/src/assets/LightSeries/IPC-HFW2439M-AS-LED-B-S2.png",category:"Full-color"},{id:"IPC-HFW2239S-SA-LED-S2",name:"2MP Lite Full-color Fixed-focal Bullet Network Camera",image:"/src/assets/LightSeries/IPC-HFW2239S-SA-LED-S2.png",category:"Full-color"},{id:"IPC-HFW2239M-AS-LED-B-S2",name:"2MP Lite Full-color Fixed-focal Bullet Network Camera",image:"/src/assets/LightSeries/IPC-HFW2239M-AS-LED-B-S2.png",category:"Full-color"},{id:"IPC-HDW2439T-AS-LED-S2",name:"4MP Lite Full-color Fixed-focal Eyeball Network Camera",image:"/src/assets/LightSeries/IPC-HDW2439T-AS-LED-S2.png",category:"Full-color"},{id:"IPC-HDW2239T-AS-LED-S2",name:"2MP Lite Full-color Fixed-focal Eyeball Network Camera",image:"/src/assets/LightSeries/IPC-HDW2239T-AS-LED-S2.png",category:"Full-color"},{id:"IPC-HDBW2831R-ZAS-S2",name:"8MP Lite IR Vari-focal Dome Network Camera",image:"/src/assets/LightSeries/IPC-HDBW2831R-ZAS-S2.png",category:"8MP"},{id:"IPC-HFW2831T-ZS-S2",name:"8MP Lite IR Vari-focal Bullet Network Camera",image:"/src/assets/LightSeries/IPC-HFW2831T-ZS-S2.png",category:"8MP"},{id:"IPC-HFW2831T-ZAS-S2",name:"8MP Lite IR Vari-focal Bullet Network Camera",image:"/src/assets/LightSeries/IPC-HFW2831T-ZAS-S2.png",category:"8MP"},{id:"IPC-HFW2831T-AS-S2",name:"8MP Lite IR Fixed-focal Bullet Network Camera",image:"/src/assets/LightSeries/IPC-HFW2831T-AS-S2.png",category:"8MP"},{id:"IPC-HFW2541T-ZS",name:"5MP IR Vari-focal Bullet WizSense Network Camera",image:"/src/assets/LightSeries/IPC-HFW2541T-ZS.png",category:"5MP"},{id:"IPC-HDBW2541R-ZAS",name:"5MP IR Vari-focal Dome WizSense Network Camera",image:"/src/assets/LightSeries/IPC-HDBW2541R-ZAS.png",category:"5MP"},{id:"IPC-HDBW2541E-S",name:"5MP IR Fixed-focal Dome WizSense Network Camera",image:"/src/assets/LightSeries/IPC-HDBW2541E-S.png",category:"5MP"},{id:"IPC-HFW2531T-ZS-S2",name:"5MP Lite IR Vari-focal Bullet Network Camera",image:"/src/assets/LightSeries/IPC-HFW2531T-ZS-S2.png",category:"5MP"},{id:"IPC-HFW2531T-ZAS-S2",name:"5MP Lite IR Vari-focal Bullet Network Camera",image:"/src/assets/LightSeries/IPC-HFW2531T-ZAS-S2.png",category:"5MP"},{id:"IPC-HFW2531T-AS-S2",name:"5MP Lite IR Fixed-focal Bullet Network Camera",image:"/src/assets/LightSeries/IPC-HFW2531T-AS-S2.png",category:"5MP"},{id:"DH-IPC-HDW1430T2-A",name:"4MP Entry IR Fixed-focal Eyeball Network Camera",image:"/src/assets/LightSeries/DH-IPC-HDW1430T2-A.png",category:"4MP"},{id:"DH-IPC-HFW1430TL2-A",name:"4MP Entry IR Fixed-focal Bullet Network Camera",image:"/src/assets/LightSeries/DH-IPC-HFW1430TL2-A.png",category:"4MP"},{id:"DH-IPC-HFW1449S1-A-IL",name:"4MP Smart Dual Light Fixed-focal Bullet Network Camera",image:"/src/assets/LightSeries/DH-IPC-HFW1449S1-A-IL.png",category:"4MP"},{id:"DH-IPC-HDW1439V-PV",name:"4MP Dual Light Fixed-focal Eyeball Network Camera",image:"/src/assets/LightSeries/DH-IPC-HDW1439V-PV.png",category:"4MP"},{id:"DH-IPC-HFW1439TL2-A-IL",name:"4MP Dual Light Fixed-focal Bullet Network Camera",image:"/src/assets/LightSeries/DH-IPC-HFW1439TL2-A-IL.png",category:"4MP"},{id:"DH-IPC-HFW1439TL2-A-LED",name:"4MP Entry Full-color Fixed-focal Bullet Network Camera",image:"/src/assets/LightSeries/DH-IPC-HFW1439TL2-A-LED.png",category:"4MP"},{id:"DH-IPC-HDW1239T2-A-IL",name:"2MP Dual Light Fixed-focal Eyeball Network Camera",image:"/src/assets/LightSeries/DH-IPC-HDW1239T2-A-IL.png",category:"2MP"},{id:"DH-IPC-HFW1239TL2-A-IL",name:"2MP Dual Light Fixed-focal Bullet Network Camera",image:"/src/assets/LightSeries/DH-IPC-HFW1239TL2-A-IL.png",category:"2MP"},{id:"DH-IPC-HFW1249S1-A-IL",name:"2MP Smart Dual Light Fixed-focal Bullet Network Camera",image:"/src/assets/LightSeries/DH-IPC-HFW1249S1-A-IL.png",category:"2MP"},{id:"DH-IPC-HDW1249T1-A-IL",name:"2MP Smart Dual Light Fixed-focal Eyeball Network Camera",image:"/src/assets/LightSeries/DH-IPC-HDW1249T1-A-IL.png",category:"2MP"},{id:"DH-IPC-HFW1239TL-A-IL",name:"2MP Dual Light Fixed-focal Bullet Network Camera",image:"/src/assets/LightSeries/DH-IPC-HFW1239TL-A-IL.png",category:"2MP"}];function d(a){const e=a.target;if(!e)return;const t=e.dataset.category;t&&(n=t,s=1),document.querySelectorAll(".category-btn").forEach(i=>{i.classList.remove("text-blue-600","border-b-2","border-blue-600"),i.classList.add("text-gray-600")}),e.classList.add("text-blue-600","border-b-2","border-blue-600"),c()}function P(a){const e=a.target;if(!e)return;const t=parseInt(e.dataset.page||"0");t&&(s=t),c()}window.showCategory=d;window.showPage=P;let n="Full-color",s=1;const l=10;function c(){const a=g.filter(r=>r.category===n),e=Math.ceil(a.length/l),t=(s-1)*l,i=t+l,o=a.slice(t,i);m(o),S(e)}function m(a){const e=document.querySelector(".product-grid");e&&(e.innerHTML=a.map(t=>`
        <div class="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 relative">
          <!-- CCTV Icon -->
          <div class="absolute top-2 right-2 flex gap-1.5">
            <Icon name="cctv" class="w-5 h-5" />
          </div>
          
          <div class="p-4">
            <div class="aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center">
              <img 
                src="${t.image}" 
                alt="${t.name}"
                class="object-contain h-40 w-40 hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-bold text-gray-900">${t.id}</h3>
              <p class="text-gray-600 text-sm line-clamp-3">${t.name}</p>
              <a 
                href="/products/${t.id}"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mt-2 group"
              >
                View Details
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      `).join(""))}function S(a){const e=document.querySelector(".pagination-numbers"),t=document.querySelector(".prev-btn"),i=document.querySelector(".next-btn");if(!e)return;t.disabled=s===1,i.disabled=s===a;let o=[];for(let r=1;r<=a;r++)o.push(`
        <button
          class="page-btn ${r===s?"active":""}"
          data-page="${r}"
          onclick="showPage(event)"
        >
          ${r}
        </button>
      `);e.innerHTML=o.join("")}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".category-btn").forEach(a=>{a.addEventListener("click",e=>window.showCategory(e))}),c()});
