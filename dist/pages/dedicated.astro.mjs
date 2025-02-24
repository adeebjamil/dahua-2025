/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR_sO45i.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Dedicated = createComponent(($$result, $$props, $$slots) => {
  const title = "Leading Distributor of Dahua CCTV Solutions in Saudi Arabia \u2013 Advanced Security & Surveillance Systems";
  const description = "As the dedicated distributor of Dahua CCTV products in Saudi Arabia, we provide top-tier video surveillance solutions that guarantee superior security for residential, commercial, and industrial environments. Our extensive range includes cutting-edge IP cameras, HDCVI recorders, and intelligent video management systems tailored to meet the demands of modern surveillance. With Dahua\u2019s advanced AI-powered technology and 24/7 monitoring capabilities, we ensure enhanced security coverage, real-time detection, and improved situational awareness. Our solutions prioritize scalability and adaptability, delivering robust protection that meets the growing needs of smart cities and high-security establishments. Trust us for comprehensive Dahua CCTV systems, built for the future of surveillance.";
  const products = [
    {
      title: "Project Exclusive",
      description: "Comprehensive security solutions tailored for your specific needs",
      image: "https://images.unsplash.com/photo-1557264322-b44d383a2906?auto=format&fit=crop&q=80",
      features: ["Custom Integration", "24/7 Support", "Advanced Analytics"],
      link: "/project-exclusive"
    },
    {
      title: "Recorder Server",
      description: "High-performance recording solutions with advanced features",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
      features: ["4K Recording", "AI-Powered", "Cloud Backup"],
      link: "/recorder-server"
    }
  ];
  const features = [
    {
      icon: "shield-check",
      title: "Enterprise Security",
      description: "Advanced protection for mission-critical environments"
    },
    {
      icon: "cpu-chip",
      title: "Smart Processing",
      description: "AI-powered analysis and real-time monitoring"
    },
    {
      icon: "cloud",
      title: "Cloud Integration",
      description: "Seamless connectivity and remote access"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-eqyysk26": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-eqyysk26> <!-- Hero Section --> <section class="relative h-[80vh] overflow-hidden" data-astro-cid-eqyysk26> <div class="absolute inset-0" data-astro-cid-eqyysk26> <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" alt="Dedicated Solutions" class="w-full h-full object-cover transform scale-105 animate-slow-zoom" data-astro-cid-eqyysk26> <div class="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-900/85 to-transparent" data-astro-cid-eqyysk26></div> <div class="absolute inset-0 bg-[url('/src/assets/patterns/grid.svg')] opacity-10" data-astro-cid-eqyysk26></div> </div> <div class="relative container mx-auto px-4 h-full flex items-center" data-astro-cid-eqyysk26> <div class="max-w-2xl text-white space-y-8" data-astro-cid-eqyysk26> <span class="inline-flex items-center px-5 py-2.5 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium backdrop-blur-sm animate-fade-in-up" data-astro-cid-eqyysk26> <span class="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" data-astro-cid-eqyysk26></span>
Dedicated Solutions
</span> <h1 class="text-6xl font-bold leading-tight animate-fade-in-up" data-astro-cid-eqyysk26>
Enterprise-Grade
<span class="block mt-2 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent" data-astro-cid-eqyysk26>
Security Solutions
</span> </h1> <p class="text-xl text-blue-100/90 animate-fade-in-up delay-200 max-w-xl leading-relaxed" data-astro-cid-eqyysk26>
Customized security infrastructure for large-scale operations
</p> </div> </div> </section> <!-- Products Grid --> <section class="py-24 bg-gradient-to-b from-white to-gray-50" data-astro-cid-eqyysk26> <div class="container mx-auto px-4" data-astro-cid-eqyysk26> <div class="text-center max-w-3xl mx-auto mb-16" data-astro-cid-eqyysk26> <h2 class="text-4xl font-bold mb-4" data-astro-cid-eqyysk26>Our Solutions</h2> <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full" data-astro-cid-eqyysk26></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-12" data-astro-cid-eqyysk26> ${products.map((product) => renderTemplate`<div class="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" data-astro-cid-eqyysk26> <div class="aspect-16/9 overflow-hidden" data-astro-cid-eqyysk26> <img${addAttribute(product.image, "src")}${addAttribute(product.title, "alt")} class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" data-astro-cid-eqyysk26> </div> <div class="p-6" data-astro-cid-eqyysk26> <h3 class="text-2xl font-semibold text-gray-800 mb-3" data-astro-cid-eqyysk26> ${product.title} </h3> <p class="text-gray-600 mb-4" data-astro-cid-eqyysk26> ${product.description} </p> <ul class="text-gray-600 space-y-2" data-astro-cid-eqyysk26> ${product.features.map((feature) => renderTemplate`<li class="flex items-center" data-astro-cid-eqyysk26> <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-eqyysk26> <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-astro-cid-eqyysk26></path> </svg> ${feature} </li>`)} </ul> </div> </div>`)} </div> </div> </section> <!-- Features Section --> <section class="bg-gray-50 py-16" data-astro-cid-eqyysk26> <div class="container mx-auto px-4" data-astro-cid-eqyysk26> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-eqyysk26> ${features.map((feature) => renderTemplate`<div class="text-center p-6" data-astro-cid-eqyysk26> <div class="text-blue-600 mb-4" data-astro-cid-eqyysk26> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto" data-astro-cid-eqyysk26> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(`M${feature.icon}`, "d")} data-astro-cid-eqyysk26></path> </svg> </div> <h3 class="text-xl font-semibold mb-2" data-astro-cid-eqyysk26>${feature.title}</h3> <p class="text-gray-600" data-astro-cid-eqyysk26>${feature.description}</p> </div>`)} </div> </div> </section> </main> ` })} `;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/dedicated.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/dedicated.astro";
const $$url = "/dedicated";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dedicated,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
