/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR_sO45i.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Training = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Training Academy", "data-astro-cid-biusjqlr": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-16 bg-white" data-astro-cid-biusjqlr> <div class="container mx-auto px-4" data-astro-cid-biusjqlr> <div class="grid grid-cols-2 md:grid-cols-4 gap-8" data-astro-cid-biusjqlr> ${[
    { number: "1000+", label: "Certified Professionals" },
    { number: "50+", label: "Training Programs" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ].map((stat) => renderTemplate`<div class="text-center" data-astro-cid-biusjqlr> <div class="text-4xl font-bold text-blue-600 mb-2" data-astro-cid-biusjqlr>${stat.number}</div> <div class="text-gray-600" data-astro-cid-biusjqlr>${stat.label}</div> </div>`)} </div> </div> </section>  <section class="py-20 bg-gray-50" data-astro-cid-biusjqlr> <div class="container mx-auto px-4" data-astro-cid-biusjqlr> <h2 class="text-4xl font-bold text-center mb-16" data-astro-cid-biusjqlr>Featured Courses</h2> <div class="grid md:grid-cols-3 gap-8" data-astro-cid-biusjqlr> ${[
    {
      title: "Network Security",
      level: "Advanced",
      duration: "8 Weeks",
      image: "/courses/network.jpg"
    },
    {
      title: "CCTV Installation",
      level: "Intermediate",
      duration: "6 Weeks",
      image: "/courses/cctv.jpg"
    },
    {
      title: "System Integration",
      level: "Expert",
      duration: "12 Weeks",
      image: "/courses/integration.jpg"
    }
  ].map((course) => renderTemplate`<div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-astro-cid-biusjqlr> <div class="relative h-48 overflow-hidden" data-astro-cid-biusjqlr> <img${addAttribute(course.image, "src")}${addAttribute(course.title, "alt")} class="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500" data-astro-cid-biusjqlr> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" data-astro-cid-biusjqlr></div> </div> <div class="p-6" data-astro-cid-biusjqlr> <h3 class="text-xl font-bold mb-2" data-astro-cid-biusjqlr>${course.title}</h3> <div class="flex justify-between text-sm text-gray-600 mb-4" data-astro-cid-biusjqlr> <span data-astro-cid-biusjqlr>${course.level}</span> <span data-astro-cid-biusjqlr>${course.duration}</span> </div> <button class="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all" data-astro-cid-biusjqlr>
Starting Soon!
</button> </div> </div>`)} </div> </div> </section> ` })} `;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/training.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/training.astro";
const $$url = "/training";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Training,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
