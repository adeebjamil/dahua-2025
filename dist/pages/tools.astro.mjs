/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR_sO45i.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Tools = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tools - Project Design Tool", "data-astro-cid-mlc4vpxg": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden" data-astro-cid-mlc4vpxg> <div class="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-5" data-astro-cid-mlc4vpxg></div> <div class="container mx-auto px-4 py-20" data-astro-cid-mlc4vpxg> <div class="flex flex-col lg:flex-row justify-between items-center gap-12" data-astro-cid-mlc4vpxg> <div class="max-w-2xl" data-astro-cid-mlc4vpxg> <h1 class="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text" data-astro-cid-mlc4vpxg>
Project Design Tool
</h1> <h2 class="text-3xl text-gray-600 mb-12" data-astro-cid-mlc4vpxg>More Than Design</h2> <div class="grid grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-mlc4vpxg> ${[
    {
      icon: "\u{1F3AF}",
      title: "Intelligent Selection"
    },
    {
      icon: "\u26A1",
      title: "Professional Design"
    },
    {
      icon: "\u{1F4CA}",
      title: "Diversified Reporting"
    },
    {
      icon: "\u{1F310}",
      title: "Online Operation"
    }
  ].map((feature) => renderTemplate`<div class="feature-card group" data-astro-cid-mlc4vpxg> <div class="relative p-6 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-astro-cid-mlc4vpxg> <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" data-astro-cid-mlc4vpxg> ${feature.icon} </div> <h3 class="text-blue-600 font-medium" data-astro-cid-mlc4vpxg>${feature.title}</h3> </div> </div>`)} </div> </div> <div class="relative w-full lg:w-1/2 aspect-square" data-astro-cid-mlc4vpxg> <img src="/src/assets/tools/3d-illustration.png" alt="Project Design Tool Illustration" class="w-full h-full object-contain animate-float" data-astro-cid-mlc4vpxg> </div> </div> </div> </section>  <section class="py-24 bg-gradient-to-b from-white to-blue-50" data-astro-cid-mlc4vpxg> <div class="container mx-auto px-4" data-astro-cid-mlc4vpxg> <h2 class="text-4xl lg:text-5xl font-bold text-center mb-16" data-astro-cid-mlc4vpxg>
We'll help you every step of the way
</h2> <div class="grid md:grid-cols-3 gap-8" data-astro-cid-mlc4vpxg> ${[
    {
      image: "/src/assets/tools/step1.jpg",
      title: "Select products",
      description: "Choose from our wide range of products"
    },
    {
      image: "/src/assets/tools/step2.jpg",
      title: "Configure settings",
      description: "Customize according to your needs"
    },
    {
      image: "/src/assets/tools/step3.jpg",
      title: "Deploy solution",
      description: "Implement your designed system"
    }
  ].map((step, index) => renderTemplate`<div class="group relative overflow-hidden rounded-2xl shadow-lg" data-astro-cid-mlc4vpxg> <img${addAttribute(step.image, "src")}${addAttribute(step.title, "alt")} class="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-500" data-astro-cid-mlc4vpxg> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" data-astro-cid-mlc4vpxg></div> <div class="absolute bottom-0 left-0 p-8" data-astro-cid-mlc4vpxg> <h3 class="text-2xl font-bold text-white mb-2" data-astro-cid-mlc4vpxg>${step.title}</h3> <p class="text-gray-200 mb-4" data-astro-cid-mlc4vpxg>${step.description}</p> <a href="#" class="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300" data-astro-cid-mlc4vpxg>
Learn More
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mlc4vpxg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-mlc4vpxg></path> </svg> </a> </div> </div>`)} </div> </div> </section>  <section class="py-24 bg-white" data-astro-cid-mlc4vpxg> <div class="container mx-auto px-4" data-astro-cid-mlc4vpxg> <h2 class="text-4xl lg:text-5xl font-bold text-center mb-16" data-astro-cid-mlc4vpxg>Popular Tools</h2> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-mlc4vpxg> ${[
    {
      icon: "/src/assets/tools/tool1.png",
      title: "Project Design Tool",
      description: "Complete solution design platform"
    },
    {
      icon: "/src/assets/tools/tool2.png",
      title: "ConfigTool",
      description: "Easy device configuration"
    },
    {
      icon: "/src/assets/tools/tool3.png",
      title: "SmartPSS Lite",
      description: "Professional surveillance software"
    },
    {
      icon: "/src/assets/tools/tool4.png",
      title: "SmartPlayer",
      description: "Advanced video playback tool"
    }
  ].map((tool) => renderTemplate`<div class="group" data-astro-cid-mlc4vpxg> <div class="p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300" data-astro-cid-mlc4vpxg> <img${addAttribute(tool.icon, "src")}${addAttribute(tool.title, "alt")} class="w-24 h-24 mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300" data-astro-cid-mlc4vpxg> <h3 class="text-xl font-bold text-center mb-4" data-astro-cid-mlc4vpxg>${tool.title}</h3> <p class="text-gray-600 text-center mb-6" data-astro-cid-mlc4vpxg>${tool.description}</p> <div class="text-center" data-astro-cid-mlc4vpxg> <a href="#" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium" data-astro-cid-mlc4vpxg>
Learn More
<svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mlc4vpxg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-mlc4vpxg></path> </svg> </a> </div> </div> </div>`)} </div> </div> </section> ` })} `;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/tools.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/tools.astro";
const $$url = "/tools";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tools,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
