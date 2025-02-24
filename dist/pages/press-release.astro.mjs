/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as renderScript, b as addAttribute } from '../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR_sO45i.mjs';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const $$PressRelease = createComponent(($$result, $$props, $$slots) => {
  const pressReleases = [
    {
      title: "DAHUA PREMIER LEAGUE",
      date: "2024-01-15",
      category: "Events",
      subCategory: "Sports",
      image: "/images/cricket.jpg",
      description: "The game 'Cricket' is not just a mere sport in India but it is a feeling..."
    },
    {
      title: "Built for Digital Education: Dahua launches DeepHub",
      date: "2023-06-27",
      category: "Product Launch",
      subCategory: "Education",
      image: "/images/deephub.jpg",
      description: "Dahua Technology launches the Dahua DeepHub Smart Classroom Solution..."
    }
    // Add more press releases...
  ];
  const years = [...new Set(pressReleases.map((pr) => new Date(pr.date).getFullYear()))].sort().reverse();
  const categories = [...new Set(pressReleases.map((pr) => pr.category))];
  const subCategories = [...new Set(pressReleases.map((pr) => pr.subCategory))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Press Releases", "data-astro-cid-qbux5bww": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative w-full h-[400px] mb-12" data-astro-cid-qbux5bww> <img src="/src/assets/Wireless/heroimg0.png" alt="Press Releases" class="w-full h-full object-cover" data-astro-cid-qbux5bww> <div class="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" data-astro-cid-qbux5bww></div> <div class="absolute inset-0 flex items-center justify-center" data-astro-cid-qbux5bww> <div class="text-center" data-astro-cid-qbux5bww> <h1 class="text-5xl font-bold text-white mb-4" data-astro-cid-qbux5bww>Press Releases</h1> <p class="text-xl text-gray-300" data-astro-cid-qbux5bww>Stay updated with Dahua's latest announcements and news</p> </div> </div> </div> <div class="container mx-auto px-4 py-12 max-w-7xl" data-astro-cid-qbux5bww> <!-- Filter Section --> <div class="bg-white rounded-2xl shadow-lg p-8 mb-12" data-astro-cid-qbux5bww> <!-- Year Filter --> <div class="mb-8" data-astro-cid-qbux5bww> <h3 class="text-xl font-bold mb-4 text-gray-800" data-astro-cid-qbux5bww>Filter by Year</h3> <div class="flex flex-wrap gap-2" data-astro-cid-qbux5bww> <button class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 active" data-filter="year" data-value="all" data-astro-cid-qbux5bww>
All Years
</button> ${years.map((year) => renderTemplate`<button class="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300" data-filter="year"${addAttribute(year, "data-value")} data-astro-cid-qbux5bww> ${year} </button>`)} </div> </div> <!-- Category Filters --> <div class="grid md:grid-cols-2 gap-8" data-astro-cid-qbux5bww> <div data-astro-cid-qbux5bww> <h3 class="text-xl font-bold mb-4 text-gray-800" data-astro-cid-qbux5bww>Categories</h3> <div class="flex flex-wrap gap-3" data-astro-cid-qbux5bww> <button class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 active" data-filter="category" data-value="all" data-astro-cid-qbux5bww>
All Categories
</button> ${categories.map((category) => renderTemplate`<button class="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300" data-filter="category"${addAttribute(category, "data-value")} data-astro-cid-qbux5bww> ${category} </button>`)} </div> </div> <div data-astro-cid-qbux5bww> <h3 class="text-xl font-bold mb-4 text-gray-800" data-astro-cid-qbux5bww>Sub Categories</h3> <div class="flex flex-wrap gap-3" data-astro-cid-qbux5bww> <button class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 active" data-filter="subCategory" data-value="all" data-astro-cid-qbux5bww>
All Sub Categories
</button> ${subCategories.map((subCategory) => renderTemplate`<button class="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300" data-filter="subCategory"${addAttribute(subCategory, "data-value")} data-astro-cid-qbux5bww> ${subCategory} </button>`)} </div> </div> </div> </div> <!-- Press Release Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-qbux5bww> ${pressReleases.map((release) => renderTemplate`<article class="press-release-card group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"${addAttribute(new Date(release.date).getFullYear(), "data-year")}${addAttribute(release.category, "data-category")}${addAttribute(release.subCategory, "data-subcategory")} data-astro-cid-qbux5bww> <div class="relative overflow-hidden" data-astro-cid-qbux5bww> <img${addAttribute(release.image, "src")}${addAttribute(release.title, "alt")} class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" data-astro-cid-qbux5bww> <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4" data-astro-cid-qbux5bww> <span class="text-white text-sm" data-astro-cid-qbux5bww> ${new Date(release.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </span> </div> </div> <div class="p-6" data-astro-cid-qbux5bww> <h2 class="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors" data-astro-cid-qbux5bww> ${release.title} </h2> <p class="text-gray-600 mb-6 line-clamp-3" data-astro-cid-qbux5bww>${release.description}</p> <button class="read-more-btn w-full px-6 py-3 bg-gray-100 text-gray-800 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"${addAttribute(release.title, "data-title")}${addAttribute(release.date, "data-date")}${addAttribute(release.category, "data-category")}${addAttribute(release.subCategory, "data-subcategory")}${addAttribute(release.description, "data-description")}${addAttribute(release.image, "data-image")} data-astro-cid-qbux5bww>
Read More
</button> </div> </article>`)} </div> <!-- Modal Component --> <div id="pressReleaseModal" class="fixed inset-0 bg-black/50 hidden z-50" data-astro-cid-qbux5bww> <div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white rounded-2xl shadow-2xl" data-astro-cid-qbux5bww> <div class="relative p-6 max-h-[90vh] overflow-y-auto" data-astro-cid-qbux5bww> <!-- Close Button --> <button class="close-modal absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10" data-astro-cid-qbux5bww> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qbux5bww> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-qbux5bww></path> </svg> </button> <!-- Modal Content --> <div class="space-y-6" data-astro-cid-qbux5bww> <h2 id="modalTitle" class="text-3xl font-bold text-gray-900" data-astro-cid-qbux5bww></h2> <div class="relative h-80" data-astro-cid-qbux5bww> <img id="modalImage" src="" alt="" class="w-full h-full object-cover rounded-xl" data-astro-cid-qbux5bww> </div> <div class="flex items-center gap-4 text-sm" data-astro-cid-qbux5bww> <span id="modalDate" class="text-gray-600" data-astro-cid-qbux5bww></span> <span id="modalCategory" class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full" data-astro-cid-qbux5bww></span> <span id="modalSubCategory" class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full" data-astro-cid-qbux5bww></span> </div> <p id="modalDescription" class="text-gray-700 leading-relaxed" data-astro-cid-qbux5bww></p> </div> </div> </div> </div> </div> ${renderScript($$result2, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/press-release.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/press-release.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/press-release.astro";
const $$url = "/press-release";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PressRelease,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
