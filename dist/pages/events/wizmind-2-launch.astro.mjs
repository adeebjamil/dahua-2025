/* empty css                                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
export { renderers } from '../../renderers.mjs';

const $$Wizmind2Launch = createComponent(($$result, $$props, $$slots) => {
  const productDetails = {
    features: [
      {
        title: "Enhanced Face Recognition",
        description: "Advanced deep learning algorithms for superior accuracy in varying conditions",
        icon: "face"
      },
      {
        title: "Perimeter Protection",
        description: "AI-powered intrusion detection with reduced false alarms",
        icon: "shield"
      },
      {
        title: "Smart Tracking",
        description: "Intelligent object tracking with automatic zoom and focus",
        icon: "target"
      },
      {
        title: "Business Intelligence",
        description: "Advanced analytics for retail and business insights",
        icon: "chart"
      }
    ]};
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "WizMind 2.0 Technology Launch | Dahua", "description": "Discover Dahua's next-generation AI technology with enhanced perimeter protection and facial recognition capabilities." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black"> <div class="absolute inset-0 opacity-20"> <div class="absolute inset-0 bg-[url('/src/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> </div> <div class="relative container mx-auto px-4 py-32"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> <div class="text-white space-y-8"> <span class="inline-block px-6 py-2 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full backdrop-blur-sm">
New Product Launch
</span> <h1 class="text-5xl md:text-7xl font-bold leading-tight">
WizMind
<span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">2.0</span> </h1> <p class="text-xl text-gray-300 max-w-xl">
Experience the next evolution in AI-powered security with enhanced analytics and intelligent features.
</p> <div class="flex flex-wrap gap-4"> <a href="#features" class="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300">
Explore Features
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> <a href="#demo" class="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-sm transition-all duration-300">
Watch Demo
</a> </div> </div> <div class="relative"> <div class="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20"> <img src="https://img.freepik.com/free-psd/highdefinition-dome-security-camera-advanced-surveillance-technology_191095-79300.jpg?ga=GA1.1.441471641.1730191836&semt=ais_hybrid" alt="WizMind 2.0 Interface" class="w-[550px] h-[450px]"> </div> <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl opacity-20 -z-10"></div> </div> </div> </div> </section>  <section id="features" class="py-32 bg-white"> <div class="container mx-auto px-4"> <div class="text-center max-w-3xl mx-auto mb-20"> <h2 class="text-4xl font-bold mb-6">Advanced Features</h2> <p class="text-xl text-gray-600">Discover the powerful capabilities of our next-generation AI technology</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${productDetails.features.map((feature) => renderTemplate`<div class="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"> <div class="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center mb-6"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-2xl font-bold mb-4">${feature.title}</h3> <p class="text-gray-600">${feature.description}</p> </div>`)} </div> </div> </section> ` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/events/wizmind-2-launch.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/events/wizmind-2-launch.astro";
const $$url = "/events/wizmind-2-launch";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Wizmind2Launch,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
