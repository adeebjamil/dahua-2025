/* empty css                                              */
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$ProSeries = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pro Series | Network Cameras", "data-astro-cid-ds2fpi7i": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-20 bg-gradient-to-b from-green-50 to-white" data-astro-cid-ds2fpi7i> <div class="container mx-auto px-4" data-astro-cid-ds2fpi7i> <div class="max-w-6xl mx-auto" data-astro-cid-ds2fpi7i> <h1 class="text-4xl font-bold text-gray-900 mb-8" data-astro-cid-ds2fpi7i>Pro Series</h1> <!-- Header Image Section --> <div class="w-full mb-12 rounded-lg overflow-hidden shadow-lg" data-astro-cid-ds2fpi7i> <img src="/src/assets/ProSeries/heroimg.jpg" alt="Pro Series Surveillance" class="w-full h-[400px] object-cover" data-astro-cid-ds2fpi7i> </div> <!-- Product Description Section --> <div class="mb-12 space-y-6" data-astro-cid-ds2fpi7i> <div class="space-y-4" data-astro-cid-ds2fpi7i> <h2 class="text-2xl font-semibold text-gray-900" data-astro-cid-ds2fpi7i>Pro Series - Advanced Surveillance Solutions</h2> <p class="text-gray-700" data-astro-cid-ds2fpi7i>Our Pro Series cameras offer advanced features and functionality, providing high-quality surveillance solutions for various applications. These cameras are designed with cutting-edge technology to deliver superior performance and reliability.</p> <p class="text-gray-700" data-astro-cid-ds2fpi7i>With features like intelligent video analysis, high-definition imaging, and robust build quality, the Pro Series cameras are ideal for professional security needs.</p> <p class="text-gray-700" data-astro-cid-ds2fpi7i>Explore our range of Pro Series cameras and find the perfect solution for your surveillance requirements.</p> </div> </div> <!-- Product Categories Tabs --> <div class="mb-12" data-astro-cid-ds2fpi7i> <div class="flex flex-wrap space-x-4 border-b border-gray-200" data-astro-cid-ds2fpi7i> ${["8MP", "4MP", "2MP"].map((category, index) => renderTemplate`<button${addAttribute(`category-btn px-6 py-3 text-sm font-medium transition-colors duration-200 ${index === 0 ? "text-green-600 border-b-2 border-green-600" : "text-gray-600 hover:text-green-600"}`, "class")}${addAttribute(category, "data-category")} onclick="showCategory(event)" data-astro-cid-ds2fpi7i> ${category} </button>`)} </div> </div> <!-- Product Grid --> <div class="product-grid flex flex-wrap gap-4 justify-center" data-astro-cid-ds2fpi7i></div> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/network-cameras/Pro-Series.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/network-cameras/Pro-Series.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/network-cameras/Pro-Series.astro";
const $$url = "/network-cameras/Pro-Series";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProSeries,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
