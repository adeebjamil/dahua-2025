/* empty css                                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
/* empty css                                                */
export { renderers } from '../../renderers.mjs';

const $$1080N720PSeries = createComponent(($$result, $$props, $$slots) => {
  const products = [
    {
      category: "1080N/720P Series",
      items: [
        {
          id: "XVR4232AN-I",
          name: "32CH Penta-brid 1080N/720P 1U 2HDDs WizSense Digital Video Recorder",
          image: "/src/assets/Hdcvi/XVR4232AN-I.png",
          features: [
            "32 Channel Input",
            "1080N/720P Resolution",
            "1U Design",
            "2 HDDs Support",
            "WizSense Technology"
          ]
        },
        {
          id: "XVR4108HS-I",
          name: "8 Channels Penta-brid 1080N/720P Compact 1U 1HDD WizSense Digital Video",
          image: "/src/assets/Hdcvi/XVR4108HS-I.png",
          features: [
            "8 Channel Input",
            "1080N/720P Resolution",
            "Compact 1U Design",
            "1 HDD Support",
            "WizSense Technology"
          ]
        },
        {
          id: "XVR4108C-I",
          name: "8 Channels Penta-brid 1080N/720p Smart 1U 1HDD WizSense Digital Video Recorder",
          image: "/src/assets/Hdcvi/XVR4108C-I.png",
          features: [
            "8 Channel Input",
            "1080N/720P Resolution",
            "Smart 1U Design",
            "1 HDD Support",
            "WizSense Technology"
          ]
        },
        {
          id: "XVR4216AN-I",
          name: "16 Channels Penta-brid 720P 1U 2HDDs WizSense Digital Video Recorder",
          image: "/src/assets/Hdcvi/XVR4216AN-I.png",
          features: [
            "16 Channel Input",
            "720P Resolution",
            "1U Design",
            "2 HDDs Support",
            "WizSense Technology"
          ]
        },
        {
          id: "XVR4116HS-I",
          name: "16 Channels Penta-brid 720P Compact 1U 1HDD WizSense Digital Video Recorder",
          image: "/src/assets/Hdcvi/XVR4116HS-I.png",
          features: [
            "16 Channel Input",
            "720P Resolution",
            "Compact 1U Design",
            "1 HDD Support",
            "WizSense Technology"
          ]
        }
      ]
    }
  ];
  return renderTemplate`// Rest of the template remains same as reference, just update:
${renderComponent($$result, "Layout", $$Layout, { "title": "5MP Value/1080P Series | HDCVI Recorders", "data-astro-cid-wbet6olk": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="bg-gray-50" data-astro-cid-wbet6olk><!-- Hero Section --><section class="relative h-[80vh] flex items-center overflow-hidden" data-astro-cid-wbet6olk><div class="absolute inset-0" data-astro-cid-wbet6olk><img src="/src/assets/Carousel/imag5.jpg" alt="4K Series" class="w-full h-full object-cover scale-105 transform transition-transform duration-[3s] hover:scale-110" data-astro-cid-wbet6olk><div class="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/40 to-purple-900/30" data-astro-cid-wbet6olk></div></div><div class="container mx-auto px-4 relative z-10" data-astro-cid-wbet6olk><div class="text-center text-white" data-astro-cid-wbet6olk><h1 class="text-4xl font-bold mb-4" data-astro-cid-wbet6olk>4K Series</h1><p class="text-lg" data-astro-cid-wbet6olk>High Definition Composite Video Interface</p></div></div><div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-astro-cid-wbet6olk><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-wbet6olk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-wbet6olk></path></svg></div></section><!-- Products Section --><section id="products" class="py-16 bg-gradient-to-br from-gray-50 to-gray-100" data-astro-cid-wbet6olk><div class="max-w-7xl mx-auto px-4" data-astro-cid-wbet6olk>${products.map((category) => renderTemplate`<div class="mb-16 animate-fade-in" data-astro-cid-wbet6olk><!-- Category Header --><div class="text-center mb-8" data-astro-cid-wbet6olk><span class="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2 block" data-astro-cid-wbet6olk>${category.category}</span><h2 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" data-astro-cid-wbet6olk>${category.category}</h2><div class="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-3" data-astro-cid-wbet6olk></div></div><!-- Product Grid --><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-wbet6olk>${category.items.map((product) => renderTemplate`<div class="group relative bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-astro-cid-wbet6olk><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-wbet6olk></div><div class="p-4 relative z-10" data-astro-cid-wbet6olk><!-- Product Image --><div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 mb-4" data-astro-cid-wbet6olk><img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="w-full h-36 object-contain transform group-hover:scale-105 transition-transform duration-300" data-astro-cid-wbet6olk></div><!-- Product Name and ID --><div class="mb-3" data-astro-cid-wbet6olk><h3 class="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300" data-astro-cid-wbet6olk>${product.name}</h3><p class="font-mono text-sm text-blue-500 mt-1" data-astro-cid-wbet6olk>Model: ${product.id}</p></div><!-- Features List --><ul class="space-y-1.5 mb-4 text-sm" data-astro-cid-wbet6olk>${product.features.map((feature) => renderTemplate`<li class="flex items-center text-gray-600" data-astro-cid-wbet6olk><span class="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-2" data-astro-cid-wbet6olk><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-wbet6olk><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" data-astro-cid-wbet6olk></path></svg></span>${feature}</li>`)}</ul><!-- Learn More Button --><a${addAttribute(`/products/${product.id}`, "href")} class="group inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25" data-astro-cid-wbet6olk><span class="relative z-10" data-astro-cid-wbet6olk>Learn More</span><svg class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-wbet6olk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-wbet6olk></path></svg></a></div></div>`)}</div></div>`)}</div></section></main>` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/hdcvi/1080n-720p-series.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/hdcvi/1080n-720p-series.astro";
const $$url = "/hdcvi/1080n-720p-series";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$1080N720PSeries,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
