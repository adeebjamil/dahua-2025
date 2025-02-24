/* empty css                                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
export { renderers } from '../../renderers.mjs';

const $$Electricity = createComponent(($$result, $$props, $$slots) => {
  const title = "Dahua CCTV Solutions for Saudi Arabia's Electricity Department \u2013 Advanced Surveillance for Critical Infrastructure";
  const description = "As a trusted distributor of Dahua CCTV solutions in Saudi Arabia...";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden"> <div class="absolute inset-0"> <img src="https://img.freepik.com/free-photo/male-security-guard-doing-his-job-shift_52683-111765.jpg?ga=GA1.1.441471641.1730191836&semt=ais_hybrid" alt="Electricity Infrastructure" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/50 to-black/80"></div> </div> <div class="relative container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center text-white"> <span class="inline-block px-6 py-2 bg-blue-500/20 text-blue-200 text-sm font-medium rounded-full mb-8 backdrop-blur-sm">
Advanced Surveillance Solutions
</span> <h1 class="text-6xl md:text-7xl font-bold mb-6 leading-tight">
Securing Power <br> <span class="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
Infrastructure
</span> </h1> <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
Comprehensive CCTV solutions for protecting critical electrical facilities
</p> <div class="flex flex-wrap gap-4 justify-center"> <a href="#solutions" class="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
Explore Solutions
</a> <a href="/contact" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300">
Contact Us
</a> </div> </div> </div> </section>  <section id="solutions" class="py-24 bg-gradient-to-b from-gray-900 to-blue-900"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Surveillance Solutions</h2> <p class="text-xl text-blue-200 max-w-3xl mx-auto">
Protecting electrical infrastructure with advanced monitoring systems
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${[
    {
      title: "Substation Monitoring",
      description: "24/7 surveillance of electrical substations with AI-powered analytics",
      image: "https://img.freepik.com/free-photo/workers-control-room_1359-317.jpg?ga=GA1.1.441471641.1730191836&semt=ais_hybrid",
      features: ["Night Vision", "Motion Detection", "Remote Access"]
    },
    {
      title: "Perimeter Security",
      description: "Advanced perimeter protection for critical infrastructure facilities",
      image: "https://img.freepik.com/free-photo/security-camera-electric-pole_1150-12090.jpg?w=1380",
      features: ["Thermal Imaging", "Intrusion Detection", "Real-time Alerts"]
    },
    {
      title: "Control Room Solutions",
      description: "Integrated monitoring systems for centralized surveillance",
      image: "https://img.freepik.com/free-vector/home-security-service-isometric-elements-set_98292-3229.jpg?ga=GA1.1.441471641.1730191836&semt=ais_hybrid",
      features: ["HD Display", "Smart Analytics", "System Integration"]
    }
  ].map((solution) => renderTemplate`<div class="group relative rounded-2xl overflow-hidden shadow-xl"> <img${addAttribute(solution.image, "src")}${addAttribute(solution.title, "alt")} class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"> <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div> <div class="absolute bottom-0 left-0 p-8"> <h3 class="text-2xl font-bold text-white mb-2">${solution.title}</h3> <p class="text-gray-300 mb-4">${solution.description}</p> <ul class="flex flex-wrap gap-2"> ${solution.features.map((feature) => renderTemplate`<li class="px-3 py-1 bg-yellow-500/30 rounded-full text-sm text-yellow-200 backdrop-blur-sm"> ${feature} </li>`)} </ul> </div> </div>`)} </div> </div> </div> </section>  ` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/Critical-Infrastructure/electricity.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/Critical-Infrastructure/electricity.astro";
const $$url = "/Critical-Infrastructure/electricity";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Electricity,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
