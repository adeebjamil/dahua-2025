/* empty css                                              */
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
/* empty css                                             */
export { renderers } from '../../renderers.mjs';

const $$SpecialSeries = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Special Series | Network Cameras", "data-astro-cid-zyvgksnn": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-20 bg-gradient-to-b from-teal-50 to-white" data-astro-cid-zyvgksnn> <div class="container mx-auto px-4" data-astro-cid-zyvgksnn> <div class="max-w-6xl mx-auto" data-astro-cid-zyvgksnn> <h1 class="text-4xl font-bold text-gray-900 mb-8" data-astro-cid-zyvgksnn>Special Series</h1> <!-- Header Image Section --> <div class="w-full mb-12 rounded-lg overflow-hidden shadow-lg" data-astro-cid-zyvgksnn> <img src="/src/assets/proSeries/heroimg.jpg" alt="Special Series Surveillance" class="w-full h-[400px] object-cover" data-astro-cid-zyvgksnn> </div> <!-- Product Description Section --> <div class="mb-12 space-y-6" data-astro-cid-zyvgksnn> <div class="space-y-4" data-astro-cid-zyvgksnn> <h2 class="text-2xl font-semibold text-gray-900" data-astro-cid-zyvgksnn>Special Series - Advanced Surveillance Solutions</h2> <p class="text-gray-700" data-astro-cid-zyvgksnn>Our Special Series cameras offer advanced features and functionality, providing high-quality surveillance solutions for various applications. These cameras are designed with cutting-edge technology to deliver superior performance and reliability.</p> <p class="text-gray-700" data-astro-cid-zyvgksnn>With features like intelligent video analysis, high-definition imaging, and robust build quality, the Special Series cameras are ideal for professional security needs.</p> <p class="text-gray-700" data-astro-cid-zyvgksnn>Explore our range of Special Series cameras and find the perfect solution for your surveillance requirements.</p> </div> </div> <!-- Main Category Tabs --> <div class="mb-12" data-astro-cid-zyvgksnn> <div class="flex flex-wrap space-x-4 border-b border-gray-200" data-astro-cid-zyvgksnn> <button class="main-category-btn px-6 py-3 text-sm font-medium transition-colors duration-200 text-teal-600 border-b-2 border-teal-600" data-category="Pinhole Series" onclick="showMainCategory(event)" data-astro-cid-zyvgksnn>
Pinhole Series
</button> </div> </div> <!-- Subcategory Tabs --> <div class="mb-12 subcategory-tabs" data-astro-cid-zyvgksnn> <div class="flex flex-wrap space-x-4 border-b border-gray-200" data-astro-cid-zyvgksnn> ${["4 MP", "2 MP", "Macro Reading"].map((subcategory, index) => renderTemplate`<button${addAttribute(`subcategory-btn px-6 py-3 text-sm font-medium transition-colors duration-200 ${index === 0 ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-600 hover:text-teal-600"}`, "class")}${addAttribute(subcategory, "data-subcategory")} onclick="showSubcategory(event)" data-astro-cid-zyvgksnn> ${subcategory} </button>`)} </div> </div> <!-- Product Grid --> <div class="product-grid flex flex-wrap gap-4 justify-center" data-astro-cid-zyvgksnn></div> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/network-cameras/Special-Series.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/network-cameras/Special-Series.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/network-cameras/Special-Series.astro";
const $$url = "/network-cameras/Special-Series";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SpecialSeries,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
