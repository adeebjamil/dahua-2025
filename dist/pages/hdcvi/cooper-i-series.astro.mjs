/* empty css                                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$CooperISeries = createComponent(($$result, $$props, $$slots) => {
  const products = [
    {
      category: "Cooper-I Series",
      items: [
        {
          id: "XVR1B16H-I",
          name: "16CH Penta-brid 5MP Value/1080P Compact 1U 1HDD WizSense Digital Video",
          image: "/src/assets/Hdcvi/XVR1B16H-I.png",
          features: [
            "16 Channel Input",
            "5MP/1080P Resolution",
            "Compact 1U Design",
            "1 HDD Support",
            "WizSense Technology"
          ]
        },
        {
          id: "XVR1B08-I",
          name: "8CH Penta-brid 1080N/720P Cooper 1U 1HDD WizSense Digital Video Recorder",
          image: "/src/assets/Hdcvi/XVR1B08-I.png",
          features: [
            "8 Channel Input",
            "1080N/720P Resolution",
            "Cooper 1U Design",
            "1 HDD Support",
            "WizSense Technology"
          ]
        },
        {
          id: "XVR1B04-I",
          name: "4CH Penta-brid 1080N/720P Cooper 1U 1HDD WizSense Digital Video Recorder",
          image: "/src/assets/Hdcvi/XVR1B04-I.png",
          features: [
            "4 Channel Input",
            "1080N/720P Resolution",
            "Cooper 1U Design",
            "1 HDD Support",
            "WizSense Technology"
          ]
        }
      ]
    }
  ];
  return renderTemplate`// Rest of the template remains same as reference, just update:
${renderComponent($$result, "Layout", $$Layout, { "title": "5MP Value/1080P Series | HDCVI Recorders", "data-astro-cid-7qan7ceq": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="bg-gray-50" data-astro-cid-7qan7ceq><!-- Hero Section --><section class="relative h-[80vh] flex items-center overflow-hidden" data-astro-cid-7qan7ceq><div class="absolute inset-0" data-astro-cid-7qan7ceq><img src="/src/assets/Carousel/imag5.jpg" alt="4K Series" class="w-full h-full object-cover scale-105 transform transition-transform duration-[3s] hover:scale-110" data-astro-cid-7qan7ceq><div class="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/40 to-purple-900/30" data-astro-cid-7qan7ceq></div></div><div class="container mx-auto px-4 relative z-10" data-astro-cid-7qan7ceq><div class="text-center text-white" data-astro-cid-7qan7ceq><h1 class="text-4xl font-bold mb-4" data-astro-cid-7qan7ceq>4K Series</h1><p class="text-lg" data-astro-cid-7qan7ceq>High Definition Composite Video Interface</p></div></div><div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-astro-cid-7qan7ceq><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-7qan7ceq><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-7qan7ceq></path></svg></div></section><!-- Products Section --><section id="products" class="py-16 bg-gradient-to-br from-gray-50 to-gray-100" data-astro-cid-7qan7ceq><div class="max-w-7xl mx-auto px-4" data-astro-cid-7qan7ceq>${products.map((category) => renderTemplate`<div class="mb-16 animate-fade-in" data-astro-cid-7qan7ceq><!-- Category Header --><div class="text-center mb-8" data-astro-cid-7qan7ceq><span class="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2 block" data-astro-cid-7qan7ceq>${category.category}</span><h2 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" data-astro-cid-7qan7ceq>${category.category}</h2><div class="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-3" data-astro-cid-7qan7ceq></div></div><!-- Product Grid --><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-7qan7ceq>${category.items.map((product) => renderTemplate`<div class="group relative bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-astro-cid-7qan7ceq><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-7qan7ceq></div><div class="p-4 relative z-10" data-astro-cid-7qan7ceq><!-- Product Image --><div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 mb-4" data-astro-cid-7qan7ceq><img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="w-full h-36 object-contain transform group-hover:scale-105 transition-transform duration-300" data-astro-cid-7qan7ceq></div><!-- Product Name and ID --><div class="mb-3" data-astro-cid-7qan7ceq><h3 class="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300" data-astro-cid-7qan7ceq>${product.name}</h3><p class="font-mono text-sm text-blue-500 mt-1" data-astro-cid-7qan7ceq>Model: ${product.id}</p></div><!-- Features List --><ul class="space-y-1.5 mb-4 text-sm" data-astro-cid-7qan7ceq>${product.features.map((feature) => renderTemplate`<li class="flex items-center text-gray-600" data-astro-cid-7qan7ceq><span class="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-2" data-astro-cid-7qan7ceq><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-7qan7ceq><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" data-astro-cid-7qan7ceq></path></svg></span>${feature}</li>`)}</ul><!-- Learn More Button --><a${addAttribute(`/products/${product.id}`, "href")} class="group inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25" data-astro-cid-7qan7ceq><span class="relative z-10" data-astro-cid-7qan7ceq>Learn More</span><svg class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-7qan7ceq><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-7qan7ceq></path></svg></a></div></div>`)}</div></div>`)}</div></section></main>` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/hdcvi/cooper-i-series.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/hdcvi/cooper-i-series.astro";
const $$url = "/hdcvi/cooper-i-series";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CooperISeries,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
