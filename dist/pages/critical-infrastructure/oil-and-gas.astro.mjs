/* empty css                                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
export { renderers } from '../../renderers.mjs';

const $$OilAndGas = createComponent(($$result, $$props, $$slots) => {
  const title = "Dahua CCTV Surveillance Solutions for Oil & Gas Factories in Saudi Arabia \u2013 Reliable, Safe, and Industry-Compliant";
  const description = "As a trusted leader in CCTV distribution, Dahua offers state-of-the-art surveillance solutions specifically designed for oil and gas factories in Saudi Arabia. Our explosion-proof cameras and advanced monitoring systems ensure safety and compliance in high-risk environments. Featuring real-time monitoring, HD video capture, and robust weather resistance, Dahua CCTV systems provide unmatched reliability for securing critical operations. With industry-leading technology such as AI analytics and thermal imaging, our solutions enhance security protocols, reduce risks, and promote operational efficiency. Tailored to the unique needs of the oil and gas sector, Dahua CCTV guarantees maximum safety, visibility, and control, ensuring round-the-clock surveillance for industrial facilities.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden"> <video class="absolute inset-0 w-full h-full object-cover" autoplay loop muted playsinline> <source src="/videos/oil-gas-bg.mp4" type="video/mp4"> </video> <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/50 to-black/80"></div> <div class="relative container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center text-white"> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm mb-8"> <span class="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span> <span class="text-blue-200 text-sm font-medium">Industry-Leading Security Solutions</span> </div> <h1 class="text-7xl font-bold mb-8 leading-tight">
Protecting the
<span class="relative"> <span class="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
Energy Sector
</span> <svg class="absolute -bottom-4 left-0 w-full" viewBox="0 0 300 12" fill="none"> <path d="M2 10C50 4 150 4 298 10" stroke="url(#paint0_linear)" stroke-width="3" stroke-linecap="round"></path> <defs> <linearGradient id="paint0_linear" x1="2" y1="10" x2="298" y2="10" gradientUnits="userSpaceOnUse"> <stop stop-color="#60A5FA"></stop> <stop offset="0.5" stop-color="#2DD4BF"></stop> <stop offset="1" stop-color="#34D399"></stop> </linearGradient> </defs> </svg> </span> </h1> <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
Advanced surveillance and security solutions protecting critical infrastructure across Saudi Arabia
</p> <div class="flex flex-wrap gap-6 justify-center"> <a href="#solutions" class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transition-transform duration-500 group-hover:translate-y-full"></div> <span class="relative text-white font-semibold">Explore Solutions</span> </a> <a href="#contact" class="group px-8 py-4 border border-white/30 rounded-xl hover:bg-white/10 transition-colors"> <span class="text-white font-semibold">Contact Sales</span> </a> </div> </div> </div> </section>  <section id="solutions" class="py-24 bg-white"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${[
    {
      title: "Explosion-Proof CCTV",
      description: "Industry-certified explosion-proof cameras designed specifically for hazardous oil & gas environments",
      image: "https://img.freepik.com/free-photo/ai-powered-device-concept_23-2151924126.jpg?ga=GA1.1.441471641.1730191836&semt=ais_hybrid",
      features: ["ATEX certified", "4K resolution", "Harsh environment rated"]
    },
    {
      title: "Thermal Monitoring",
      description: "Advanced thermal imaging systems for early detection of equipment issues and safety hazards",
      image: "https://img.freepik.com/free-photo/people-colorful-thermal-scan-with-celsius-degree-temperature_23-2149170133.jpg?ga=GA1.1.441471641.1730191836&semt=ais_hybrid",
      features: ["Heat detection", "Night vision", "AI analytics"]
    },
    {
      title: "Integrated Security",
      description: "Comprehensive monitoring solution with AI-powered analytics for 24/7 facility protection",
      image: "https://img.freepik.com/free-photo/female-scientist-white_53876-89029.jpg?ga=GA1.1.441471641.1730191836&semt=ais_hybrid",
      features: ["Real-time alerts", "Weather resistant", "Remote access"]
    }
  ].map((solution) => renderTemplate`<div class="group relative rounded-2xl overflow-hidden shadow-xl"> <img${addAttribute(solution.image, "src")}${addAttribute(solution.title, "alt")} class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"> <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div> <div class="absolute bottom-0 left-0 p-8"> <h3 class="text-2xl font-bold text-white mb-2">${solution.title}</h3> <p class="text-gray-300 mb-4">${solution.description}</p> <ul class="flex flex-wrap gap-2"> ${solution.features.map((feature) => renderTemplate`<li class="px-3 py-1 bg-blue-600/30 rounded-full text-sm text-blue-200 backdrop-blur-sm"> ${feature} </li>`)} </ul> </div> </div>`)} </div> </div> </div> </section>  <section id="contact" class="relative py-24 overflow-hidden bg-gray-900"> <div class="absolute inset-0"> <div class="absolute inset-0 bg-blue-900 opacity-50"></div> <div class="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-20"></div> </div> <div class="relative container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center text-white"> <h2 class="text-4xl font-bold mb-8">Ready to Secure Your Infrastructure?</h2> <p class="text-xl text-blue-200 mb-12">
Get in touch with our security experts to discuss your requirements
</p> <a href="/contact" class="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-xl hover:bg-blue-50 transition-all duration-300">
Schedule Consultation
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </section> ` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/Critical-Infrastructure/oil-and-gas.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/Critical-Infrastructure/oil-and-gas.astro";
const $$url = "/Critical-Infrastructure/oil-and-gas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OilAndGas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
