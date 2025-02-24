/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR_sO45i.mjs';
export { renderers } from '../renderers.mjs';

const $$HdcviRecorders = createComponent(($$result, $$props, $$slots) => {
  const title = "Leading Dahua HDCVI Recorders Wholesale Distributor in Saudi Arabia - Unmatched Power & Security Solutions";
  const description = "As the top wholesale distributor of Dahua HDCVI recorders in Saudi Arabia, we provide the most reliable and trending security solutions to ensure maximum protection for businesses. Our advanced HDCVI recorders deliver unmatched power, offering high-definition video recording and seamless integration with cutting-edge surveillance technology. Partner with us for bulk distribution of Dahua\u2019s industry-leading security equipment, built for performance and trusted across Saudi Arabia. Stay ahead with our wholesale prices, fast delivery, and expert support, empowering you to secure your premises with the latest innovations in video surveillance technology.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"> <!-- Hero Section --> <div class="relative h-[400px] mt-16 rounded-xl overflow-hidden"> <img src="/src/assets/explosion-proof/heroimg.jpg" alt="HDCVI Security Systems" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"> <h1 class="text-4xl md:text-5xl text-white font-bold text-center">
HDCVI Recorders
</h1> </div> </div> <!-- Navigation Tabs --> <div class="mt-10 border-b border-gray-200"> <nav class="flex space-x-8" aria-label="Tabs"> <button class="border-b-2 border-blue-500 py-4 px-1 text-blue-600 font-medium">
Overview
</button> <button class="border-b-2 border-transparent py-4 px-1 text-gray-500 hover:text-gray-700 font-medium">
HDCVI Technology
</button> </nav> </div> <!-- Content Section --> <section class="py-16 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid md:grid-cols-2 gap-12 items-center"> <!-- Text Content --> <div class="space-y-6"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
Advanced Security Solutions
</h2> <div class="space-y-4"> <p class="text-lg text-gray-600">
Dahua HDCVI (High Definition Composite Video Interface) Recorders include the Ultra, Pro, and Lite Series to fit various applications. Ultra Series recorders offer the best performance and highest quality. Pro Series devices are perfect for mid-large size businesses and projects which require a balance between performance and budget.
</p> <p class="text-lg text-gray-600">
Lite Series recorders are designed for optimum cost performance with Dahua quality assurance standard. HDCVI Recorders, as a part of an HDCVI system, are widely used in applications where existing infrastructure is available.
</p> </div> </div> <!-- Image Content --> <div class="relative"> <img src="/src/assets/Hdcvi/hdcvi1.png" alt="HDCVI Recorder Stack" class="w-full h-[400px] object-contain"> </div> </div> </div> </section> <!-- Products Grid --> <section class="mt-20"> <h2 class="text-3xl font-bold text-gray-900 mb-10">Our Products</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${[
    {
      name: "Cooper Series",
      image: "/src/assets/Hdcvi/cooper.png",
      slug: "/hdcvi/cooper-series"
    },
    {
      name: "4K series",
      image: "/src/assets/Hdcvi/4k.png",
      slug: "/hdcvi/4k-series"
    },
    {
      name: "4K Value/5MP Series",
      image: "/src/assets/Hdcvi/4k-value.png",
      slug: "/hdcvi/4k-value-5mp-series"
    },
    {
      name: "5MP Value/1080p Series",
      image: "/src/assets/Hdcvi/5mp.png",
      slug: "/hdcvi/5mp-value-1080p-series"
    },
    {
      name: "1080N/720p Series",
      image: "/src/assets/Hdcvi/1080n.png",
      slug: "/hdcvi/1080n-720p-series"
    },
    {
      name: "Cooper-I Series",
      image: "/src/assets/Hdcvi/cooper-i.png",
      slug: "/hdcvi/cooper-i-series"
    }
  ].map((series) => renderTemplate`<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"> <div class="p-6"> <img${addAttribute(series.image, "src")}${addAttribute(series.name, "alt")} class="w-full h-48 object-contain mb-4"> <h3 class="text-xl font-semibold text-gray-900 mb-4">${series.name}</h3> <a${addAttribute(series.slug, "href")} class="group inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-medium rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"> <span>Learn More</span> <svg class="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </a> </div> </div>`)} </div> </section> </main> ` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/hdcvi-recorders.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/hdcvi-recorders.astro";
const $$url = "/hdcvi-recorders";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HdcviRecorders,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
