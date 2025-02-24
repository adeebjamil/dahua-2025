/* empty css                                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

const $$CooperSeries = createComponent(($$result, $$props, $$slots) => {
  const products = [
    {
      category: "H.265 1080P Series",
      items: [
        {
          id: "DH-XVR4B08-V2",
          name: "8 Channel Penta-brid 1080N/720p Cooper 1U 1HDD Digital Video Recorder",
          image: "/src/assets/Hdcvi/DH-XVR4B08-V2.png",
          features: [
            "8 Channel Input",
            "H.265 Compression",
            "1080N Resolution",
            "1U 1HDD Design"
          ]
        },
        {
          id: "DH-XVR4B04-V2",
          name: "4 Channel Penta-brid 1080N/720p Cooper 1U 1HDD Digital Video Recorder",
          image: "/src/assets/Hdcvi/DH-XVR4B04-V2.png",
          features: [
            "4 Channel Input",
            "H.265 Compression",
            "1080N Resolution",
            "1U 1HDD Design"
          ]
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cooper Series | HDCVI Recorders", "data-astro-cid-xvkebpz3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-gray-50" data-astro-cid-xvkebpz3> <!-- Hero Section with Enhanced Parallax --> <section class="relative h-[80vh] flex items-center overflow-hidden" data-astro-cid-xvkebpz3> <!-- Background Image with Advanced Effects --> <div class="absolute inset-0" data-astro-cid-xvkebpz3> <img src="/src/assets/Carousel/imag5.jpg" alt="Cooper Series" class="w-full h-full object-cover scale-105 transform transition-transform duration-[3s] hover:scale-110" data-astro-cid-xvkebpz3> <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/40 to-purple-900/30" data-astro-cid-xvkebpz3></div> </div> <!-- Content Container --> <!-- Scroll Indicator --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-astro-cid-xvkebpz3> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-xvkebpz3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-xvkebpz3></path> </svg> </div> </section>  <!-- Product Name and ID --> <section id="products" class="py-16 bg-gradient-to-br from-gray-50 to-gray-100" data-astro-cid-xvkebpz3> <div class="max-w-5xl mx-auto px-4" data-astro-cid-xvkebpz3> ${products.map((category) => renderTemplate`<div class="mb-16 animate-fade-in" data-astro-cid-xvkebpz3> <!-- Category Header --> <div class="text-center mb-8" data-astro-cid-xvkebpz3> <span class="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2 block" data-astro-cid-xvkebpz3> ${category.category} </span> <h2 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" data-astro-cid-xvkebpz3> ${category.category} </h2> <div class="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-3" data-astro-cid-xvkebpz3></div> </div> <!-- Product Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" data-astro-cid-xvkebpz3> ${category.items.map((product) => renderTemplate`<div class="group relative bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-astro-cid-xvkebpz3> <div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-xvkebpz3></div> <div class="p-5 relative z-10" data-astro-cid-xvkebpz3> <!-- Product Image --> <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 mb-4" data-astro-cid-xvkebpz3> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-300" data-astro-cid-xvkebpz3> </div> <!-- Product Name and ID --> <div class="mb-4" data-astro-cid-xvkebpz3> <h3 class="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300" data-astro-cid-xvkebpz3> ${product.name} </h3> <p class="font-mono text-sm text-blue-500 mt-1" data-astro-cid-xvkebpz3>Model: ${product.id}</p> </div> <!-- Features List --> <ul class="space-y-2 mb-4 text-sm" data-astro-cid-xvkebpz3> ${product.features.map((feature) => renderTemplate`<li class="flex items-center text-gray-600" data-astro-cid-xvkebpz3> <span class="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-2" data-astro-cid-xvkebpz3> <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-xvkebpz3> <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" data-astro-cid-xvkebpz3></path> </svg> </span> ${feature} </li>`)} </ul> <!-- Learn More Button --> <a${addAttribute(`/products/${product.id}`, "href")} class="group inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25" data-astro-cid-xvkebpz3> <span class="relative z-10" data-astro-cid-xvkebpz3>Learn More</span> <svg class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-xvkebpz3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-xvkebpz3></path> </svg> </a> </div> </div>`)} </div> </div>`)} </div> </section> </main> ` })} `;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/hdcvi/cooper-series.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/hdcvi/cooper-series.astro";
const $$url = "/hdcvi/cooper-series";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CooperSeries,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
