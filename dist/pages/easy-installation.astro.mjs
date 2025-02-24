/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR_sO45i.mjs';
/* empty css                                             */
export { renderers } from '../renderers.mjs';

const $$EasyInstallation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Easy Installation Guide", "data-astro-cid-siszelq5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100" data-astro-cid-siszelq5> <!-- Hero Section --> <section class="relative py-20 overflow-hidden" data-astro-cid-siszelq5> <div class="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-5" data-astro-cid-siszelq5></div> <div class="container mx-auto px-4" data-astro-cid-siszelq5> <div class="text-center mb-16 opacity-0 animate-fade-in" data-astro-cid-siszelq5> <h1 class="text-4xl md:text-6xl font-bold text-slate-800 mb-6" data-astro-cid-siszelq5>
Quick & Easy Installation
</h1> <p class="text-xl text-slate-600 max-w-2xl mx-auto" data-astro-cid-siszelq5>
Get up and running in minutes with our streamlined installation process
</p> </div> </div> </section> <!-- Installation Steps --> <section class="py-16" data-astro-cid-siszelq5> <div class="container mx-auto px-4" data-astro-cid-siszelq5> <div class="grid md:grid-cols-3 gap-8 mb-16" data-astro-cid-siszelq5> ${[1, 2, 3].map((step) => renderTemplate`<div class="installation-card" data-astro-cid-siszelq5> <div class="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-astro-cid-siszelq5> <div class="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold" data-astro-cid-siszelq5> ${step} </div> <h3 class="text-xl font-semibold mb-4 mt-4" data-astro-cid-siszelq5> ${step === 1 ? "Download Package" : step === 2 ? "Configure Settings" : "Start Building"} </h3> <p class="text-slate-600 mb-4" data-astro-cid-siszelq5> ${step === 1 ? "Simple download process with npm or yarn. Get started with just a single command in your terminal." : step === 2 ? "Quick configuration with our intuitive setup wizard. Customize your project settings with ease." : "Begin creating your project right away. Access comprehensive documentation and examples."} </p> </div> </div>`)} </div> </div> </section> <!-- Features Section --> <section class="py-16 bg-white" data-astro-cid-siszelq5> <div class="container mx-auto px-4" data-astro-cid-siszelq5> <h2 class="text-3xl font-bold text-center mb-12" data-astro-cid-siszelq5>Why Choose Our Solution?</h2> <div class="grid md:grid-cols-4 gap-8" data-astro-cid-siszelq5> ${[
    {
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>`,
      title: "Quick Setup",
      description: "Install and configure in minutes"
    },
    {
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>`,
      title: "Secure",
      description: "Built-in security features"
    },
    {
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                    </svg>`,
      title: "Documentation",
      description: "Comprehensive guides available"
    },
    {
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>`,
      title: "Support",
      description: "24/7 technical assistance"
    }
  ].map((feature) => renderTemplate`<div class="feature-card p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300" data-astro-cid-siszelq5> <div class="text-blue-600 mb-4" data-astro-cid-siszelq5>${unescapeHTML(feature.icon)}</div> <h3 class="text-lg font-semibold mb-2" data-astro-cid-siszelq5>${feature.title}</h3> <p class="text-slate-600" data-astro-cid-siszelq5>${feature.description}</p> </div>`)} </div> </div> </section> <!-- Installation Demo --> <section class="py-16" data-astro-cid-siszelq5> <div class="container mx-auto px-4" data-astro-cid-siszelq5> <div class="grid md:grid-cols-2 gap-12 items-center" data-astro-cid-siszelq5> <div data-astro-cid-siszelq5> <h2 class="text-3xl font-bold mb-6" data-astro-cid-siszelq5>See How It Works</h2> <div class="prose prose-slate" data-astro-cid-siszelq5> <p class="mb-4" data-astro-cid-siszelq5>Watch our quick installation guide to get started:</p> <ul class="space-y-2" data-astro-cid-siszelq5> <li data-astro-cid-siszelq5>✓ Step-by-step setup process</li> <li data-astro-cid-siszelq5>✓ Configuration tips</li> <li data-astro-cid-siszelq5>✓ Best practices</li> <li data-astro-cid-siszelq5>✓ Troubleshooting guide</li> </ul> </div> </div> <div class="aspect-video bg-slate-800 rounded-xl overflow-hidden shadow-2xl" data-astro-cid-siszelq5> <img src="/src/assets/installation-demo.jpg" alt="Installation Demo" class="w-full h-full object-cover" data-astro-cid-siszelq5> </div> </div> </div> </section> <!-- CTA Section --> <section class="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white" data-astro-cid-siszelq5> <div class="container mx-auto px-4 text-center" data-astro-cid-siszelq5> <h2 class="text-3xl font-bold mb-6" data-astro-cid-siszelq5>Ready to Get Started?</h2> <p class="text-xl mb-8 text-blue-100" data-astro-cid-siszelq5>Begin your installation journey today</p> <a href="/documentation" class="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300" data-astro-cid-siszelq5>
View Documentation
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-siszelq5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-siszelq5></path> </svg> </a> </div> </section> </main> ` })} `;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/easy-installation.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/easy-installation.astro";
const $$url = "/easy-installation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EasyInstallation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
