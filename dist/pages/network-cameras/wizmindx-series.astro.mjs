/* empty css                                              */
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$WizMindXSeries = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "WizMind X Series | Network Cameras", "data-astro-cid-ddqzbib3": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-20 bg-gradient-to-b from-green-50 to-white" data-astro-cid-ddqzbib3> <div class="container mx-auto px-4" data-astro-cid-ddqzbib3> <div class="max-w-6xl mx-auto" data-astro-cid-ddqzbib3> <h1 class="text-4xl font-bold text-gray-900 mb-8" data-astro-cid-ddqzbib3>WizMind X Series</h1> <!-- Header Image Section --> <div class="w-full mb-12 rounded-lg overflow-hidden shadow-lg" data-astro-cid-ddqzbib3> <img src="/src/assets/WizMindX/heroimg.jpg" alt="WizMind X Series Surveillance" class="w-full h-[400px] object-cover" data-astro-cid-ddqzbib3> </div> <!-- Overview Section --> <div class="mb-12 space-y-6" data-astro-cid-ddqzbib3> <p class="text-gray-700" data-astro-cid-ddqzbib3>Driven by deep learning algorithms, Dahua WizMind X Series network camera supports various intelligent functions, meeting the requirements of a wide variety of scenes. The camera can accurately recognize people, motor vehicles and non-motor vehicles. It also supports face recognition, PPE detection, smart sound detection, privacy protection, ANPR, and parking space management. 2 intelligent functions can be enabled at the same time. The camera adopts advanced image processing AI-Powered Image technology, has a high frame rate and the Deeplight night vision effect, and works with ultra-low streams. It is also dustproof, waterproof and vandal-proof, and is certified as IP67 and IK10 (the type of protection varies depending on the model).</p> </div> <!-- Product Categories Tabs --> <div class="mb-12" data-astro-cid-ddqzbib3> <div class="flex flex-wrap space-x-4 border-b border-gray-200" data-astro-cid-ddqzbib3> ${["12MP", "8MP", "4MP"].map((category, index) => renderTemplate`<button${addAttribute(`category-btn px-6 py-3 text-sm font-medium transition-colors duration-200 ${index === 0 ? "text-green-600 border-b-2 border-green-600" : "text-gray-600 hover:text-green-600"}`, "class")}${addAttribute(category, "data-category")} onclick="showCategory(event)" data-astro-cid-ddqzbib3> ${category} </button>`)} </div> </div> <!-- Product Grid --> <div class="product-grid flex flex-wrap gap-4 justify-center" data-astro-cid-ddqzbib3></div> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/network-cameras/WizMindX-Series.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/network-cameras/WizMindX-Series.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/network-cameras/WizMindX-Series.astro";
const $$url = "/network-cameras/WizMindX-Series";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WizMindXSeries,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
