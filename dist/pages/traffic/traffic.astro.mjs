/* empty css                                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Traffic = createComponent(($$result, $$props, $$slots) => {
  const title = "Leading Dahua CCTV Solutions for Traffic Management in Saudi Arabia \u2013 Advanced Road Safety Monitoring";
  const description = "As a top distributor of Dahua CCTV solutions for traffic management in Saudi Arabia, we provide state-of-the-art surveillance systems designed to enhance road safety and efficiency. Dahua\u2019s intelligent traffic monitoring cameras are equipped with AI-powered analytics and HD video capturing, ensuring real-time tracking and clear imaging even in low-light conditions. Our advanced CCTV systems seamlessly integrate with traffic control platforms, helping to reduce congestion, monitor vehicle speeds, and detect violations with precision. Whether managing busy intersections or highways, Dahua\u2019s cutting-edge technology offers reliable, 24/7 monitoring for smarter, safer transportation across Saudi Arabia\u2019s urban and highway infrastructure.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-yyfui6vi": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative min-h-[80vh] bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 overflow-hidden" data-astro-cid-yyfui6vi> <div class="absolute inset-0 bg-[url('/src/assets/patterns/traffic-pattern.svg')] opacity-5" data-astro-cid-yyfui6vi></div> <div class="container mx-auto px-4 h-full flex items-center" data-astro-cid-yyfui6vi> <div class="max-w-4xl mx-auto text-center" data-astro-cid-yyfui6vi> <span class="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-200 text-sm font-medium rounded-full mb-6 animate-fade-in" data-astro-cid-yyfui6vi>
Smart Traffic Solutions
</span> <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up" data-astro-cid-yyfui6vi> <span class="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent" data-astro-cid-yyfui6vi>
Intelligent Traffic Management
</span> </h1> <p class="text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100" data-astro-cid-yyfui6vi>
Advanced solutions for safer roads and smarter cities
</p> </div> </div> </section>  <section class="py-24 bg-white" data-astro-cid-yyfui6vi> <div class="container mx-auto px-4" data-astro-cid-yyfui6vi> <div class="max-w-6xl mx-auto" data-astro-cid-yyfui6vi> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-astro-cid-yyfui6vi> <!-- Feature Cards --> ${[
    {
      icon: "\u{1F6A6}",
      title: "Traffic Monitoring",
      description: "Real-time monitoring with AI-powered analytics",
      color: "blue"
    },
    {
      icon: "\u{1F693}",
      title: "Violation Detection",
      description: "Automatic detection of traffic violations",
      color: "red"
    },
    {
      icon: "\u{1F4CA}",
      title: "Data Analytics",
      description: "Comprehensive traffic flow analysis",
      color: "green"
    }
  ].map((feature) => renderTemplate`<div${addAttribute(`bg-${feature.color}-50 rounded-2xl p-8 border border-${feature.color}-100 hover:shadow-xl transition-all duration-300`, "class")} data-astro-cid-yyfui6vi> <span class="text-4xl mb-4 block" data-astro-cid-yyfui6vi>${feature.icon}</span> <h3 class="text-xl font-semibold mb-3 text-gray-800" data-astro-cid-yyfui6vi>${feature.title}</h3> <p class="text-gray-600" data-astro-cid-yyfui6vi>${feature.description}</p> </div>`)} </div> <!-- Statistics Section --> <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white" data-astro-cid-yyfui6vi> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" data-astro-cid-yyfui6vi> ${[
    { value: "95%", label: "Accuracy Rate" },
    { value: "24/7", label: "Monitoring" },
    { value: "50%", label: "Accident Reduction" }
  ].map((stat) => renderTemplate`<div data-astro-cid-yyfui6vi> <div class="text-4xl font-bold mb-2" data-astro-cid-yyfui6vi>${stat.value}</div> <div class="text-blue-100" data-astro-cid-yyfui6vi>${stat.label}</div> </div>`)} </div> </div> <!-- CTA Section --> <div class="mt-16 text-center" data-astro-cid-yyfui6vi> <h2 class="text-3xl font-bold mb-6" data-astro-cid-yyfui6vi>Ready to Transform Traffic Management?</h2> <a href="/Traffic/traffic-details" class="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" data-astro-cid-yyfui6vi>
Explore Solutions
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yyfui6vi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-yyfui6vi></path> </svg> </a> </div> </div> </div> </section>  ` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/Traffic/traffic.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/Traffic/traffic.astro";
const $$url = "/Traffic/traffic";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Traffic,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
