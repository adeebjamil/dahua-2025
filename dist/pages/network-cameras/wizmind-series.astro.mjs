/* empty css                                              */
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
/* empty css                                             */
export { renderers } from '../../renderers.mjs';

const $$WizMindSeries = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "WizMind Series | Network Cameras", "data-astro-cid-spnqufrm": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-20 bg-gradient-to-b from-blue-50 to-white" data-astro-cid-spnqufrm> <div class="container mx-auto px-4" data-astro-cid-spnqufrm> <div class="max-w-6xl mx-auto" data-astro-cid-spnqufrm> <h1 class="text-4xl font-bold text-gray-900 mb-8" data-astro-cid-spnqufrm>WizMind Series</h1> <!-- Header Image Section --> <div class="w-full mb-12 rounded-lg overflow-hidden shadow-lg" data-astro-cid-spnqufrm> <img src="/src/assets/WizMind/heroimg.jpg" alt="WizMind Series Surveillance" class="w-full h-[400px] object-cover" data-astro-cid-spnqufrm> </div> <!-- Added Product Description Section --> <div class="mb-12 space-y-6" data-astro-cid-spnqufrm> <div class="space-y-4" data-astro-cid-spnqufrm> <h2 class="text-2xl font-semibold text-gray-900" data-astro-cid-spnqufrm>WizMind - AI-Powered Surveillance Solutions</h2> <p class="text-gray-700" data-astro-cid-spnqufrm>Launched by Dahua Technology, WizMind offers industry-leading deep learning algorithms for IPC, NVR, PTZ, XVR, thermal cameras and software platforms. Our solutions provide:</p> <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4" data-astro-cid-spnqufrm> <li data-astro-cid-spnqufrm><span class="font-medium" data-astro-cid-spnqufrm>Reliable:</span> Strict component selection and thorough testing ensure high product reliability</li> <li data-astro-cid-spnqufrm><span class="font-medium" data-astro-cid-spnqufrm>Precise:</span> Accurate detection and recognition of humans and vehicles</li> <li data-astro-cid-spnqufrm><span class="font-medium" data-astro-cid-spnqufrm>Comprehensive:</span> Multiple applications including face recognition, privacy protection, and video metadata</li> </ul> </div> </div> <!-- Product Categories Tabs --> <div class="mb-12" data-astro-cid-spnqufrm> <div class="flex flex-wrap space-x-4 border-b border-gray-200" data-astro-cid-spnqufrm> ${["Panoramic Series", "8 Series", "7 Series", "5 Series", "Special Series"].map((series, index) => renderTemplate`<button${addAttribute(`series-btn px-6 py-3 text-sm font-medium transition-colors duration-200 ${index === 0 ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`, "class")}${addAttribute(series, "data-series")} data-astro-cid-spnqufrm> ${series} </button>`)} </div> </div> <!-- Product Series Categories --> <div class="subcategory-container grid md:grid-cols-4 gap-6 mb-12" data-astro-cid-spnqufrm> ${["Hubble Series", "Multi-Sensor 180\xB0 Series", "Multi-Directional Series", "Fisheye Series"].map((subcategory) => renderTemplate`<button class="subcategory-btn px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"${addAttribute(subcategory, "data-subcategory")} data-astro-cid-spnqufrm> ${subcategory} </button>`)} </div> <!-- Product Grid --> <div class="product-grid flex flex-wrap gap-4 justify-center" data-astro-cid-spnqufrm> ${[
    { id: "IPC-HDW8441X-BV-3D", name: "4MP WizMind Dual-Lens Stereo Analysis Network Camera", image: "@/assets/NetworkCameras/camera1.png" },
    { id: "DH-IPC-HDW8341XP-3D-S2", name: "3MP WizMind Dual-Lens Network Camera", image: "@/assets/NetworkCameras/camera2.png" },
    { id: "DH-IPC-HDW8441XP-3D", name: "4MP WizMind Dual-Lens Network Camera", image: "@/assets/NetworkCameras/camera3.png" },
    { id: "DH-IPC-HDW8341XP-BV-3D", name: "3MP WizMind Dual-Lens Network Camera", image: "@/assets/NetworkCameras/camera4.png" }
  ].map((product) => renderTemplate`<div class="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 relative" data-astro-cid-spnqufrm> <!-- Color circles --> <div class="absolute top-2 right-2 flex gap-1.5" data-astro-cid-spnqufrm> <div class="w-2.5 h-2.5 rounded-full bg-red-500" data-astro-cid-spnqufrm></div> <div class="w-2.5 h-2.5 rounded-full bg-green-500" data-astro-cid-spnqufrm></div> <div class="w-2.5 h-2.5 rounded-full bg-blue-500" data-astro-cid-spnqufrm></div> </div> <div class="p-4" data-astro-cid-spnqufrm> <div class="aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center" data-astro-cid-spnqufrm> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="object-contain h-40 w-40 hover:scale-110 transition-transform duration-500" data-astro-cid-spnqufrm> </div> <div class="space-y-2" data-astro-cid-spnqufrm> <h3 class="text-lg font-bold text-gray-900" data-astro-cid-spnqufrm>${product.id}</h3> <p class="text-gray-600 text-sm line-clamp-3" data-astro-cid-spnqufrm>${product.name}</p> <a${addAttribute(`/products/${product.id}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mt-2 group" data-astro-cid-spnqufrm>
View Details
<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-spnqufrm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-spnqufrm></path> </svg> </a> </div> </div> </div>`)} </div> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/network-cameras/WizMind-Series.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/network-cameras/WizMind-Series.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/network-cameras/WizMind-Series.astro";
const $$url = "/network-cameras/WizMind-Series";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WizMindSeries,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
