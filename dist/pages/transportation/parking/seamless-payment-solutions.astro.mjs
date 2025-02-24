/* empty css                                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_BR_sO45i.mjs';
/* empty css                                                            */
export { renderers } from '../../../renderers.mjs';

const $$SeamlessPaymentSolutions = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Seamless Payment Solutions", "data-astro-cid-25smib4b": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative min-h-[80vh] bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center" data-astro-cid-25smib4b> <div class="absolute inset-0 bg-grid-pattern opacity-10" data-astro-cid-25smib4b></div> <div class="container mx-auto px-4 py-20" data-astro-cid-25smib4b> <div class="flex flex-col md:flex-row items-center gap-12" data-astro-cid-25smib4b> <div class="md:w-1/2 space-y-6" data-astro-cid-25smib4b> <h1 class="text-5xl font-bold text-white leading-tight" data-astro-cid-25smib4b>
Seamless Payment <span class="text-purple-400" data-astro-cid-25smib4b>Solutions</span> </h1> <p class="text-xl text-gray-300" data-astro-cid-25smib4b>
Transform your parking experience with our advanced payment systems
</p> <button class="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2" data-astro-cid-25smib4b>
Get Started
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-25smib4b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-25smib4b></path> </svg> </button> </div> <div class="md:w-1/2" data-astro-cid-25smib4b> <img src="/src/assets/parking/payment-hero.png" alt="Payment Solutions" class="rounded-lg shadow-2xl" data-astro-cid-25smib4b> </div> </div> </div> </section>  <section class="py-20 bg-gray-50" data-astro-cid-25smib4b> <div class="container mx-auto px-4" data-astro-cid-25smib4b> <h2 class="text-3xl font-bold text-center mb-12" data-astro-cid-25smib4b>Payment Features</h2> <div class="grid md:grid-cols-3 gap-8" data-astro-cid-25smib4b> ${[
    {
      title: "Multiple Payment Options",
      description: "Support for credit cards, mobile payments, and digital wallets",
      icon: "credit-card"
    },
    {
      title: "Real-time Processing",
      description: "Instant payment verification and confirmation",
      icon: "clock"
    },
    {
      title: "Secure Transactions",
      description: "End-to-end encryption and PCI compliance",
      icon: "shield"
    }
  ].map((feature) => renderTemplate`<div class="feature-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-astro-cid-25smib4b> <div class="text-purple-600 mb-4" data-astro-cid-25smib4b> ${feature.icon === "credit-card" ? renderTemplate`<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-25smib4b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 6h18M3 14h18M3 18h18" data-astro-cid-25smib4b></path> </svg>` : feature.icon === "clock" ? renderTemplate`<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-25smib4b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" data-astro-cid-25smib4b></path> </svg>` : feature.icon === "shield" ? renderTemplate`<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-25smib4b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l8 4v6a8 8 0 01-16 0V6l8-4z" data-astro-cid-25smib4b></path> </svg>` : null} </div> <h3 class="text-xl font-bold mb-4" data-astro-cid-25smib4b>${feature.title}</h3> <p class="text-gray-600" data-astro-cid-25smib4b>${feature.description}</p> </div>`)} </div> </div> </section>  <section class="py-20 bg-white" data-astro-cid-25smib4b> <div class="container mx-auto px-4" data-astro-cid-25smib4b> <h2 class="text-3xl font-bold text-center mb-12" data-astro-cid-25smib4b>How It Works</h2> <div class="max-w-4xl mx-auto" data-astro-cid-25smib4b> <div class="grid md:grid-cols-4 gap-6" data-astro-cid-25smib4b> ${[
    {
      step: 1,
      title: "Park Vehicle",
      description: "Enter parking space"
    },
    {
      step: 2,
      title: "Select Payment",
      description: "Choose payment method"
    },
    {
      step: 3,
      title: "Process Payment",
      description: "Secure transaction"
    },
    {
      step: 4,
      title: "Exit Parking",
      description: "Automated barrier control"
    }
  ].map((step) => renderTemplate`<div class="relative" data-astro-cid-25smib4b> <div class="bg-purple-100 rounded-xl p-6 text-center" data-astro-cid-25smib4b> <div class="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4" data-astro-cid-25smib4b> ${step.step} </div> <h3 class="font-bold mb-2" data-astro-cid-25smib4b>${step.title}</h3> <p class="text-sm text-gray-600" data-astro-cid-25smib4b>${step.description}</p> </div> ${step.step < 4 && renderTemplate`<div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2" data-astro-cid-25smib4b> <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-25smib4b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-25smib4b></path> </svg> </div>`} </div>`)} </div> </div> </div> </section>  <section class="py-20 bg-purple-900 text-white" data-astro-cid-25smib4b> <div class="container mx-auto px-4" data-astro-cid-25smib4b> <h2 class="text-3xl font-bold text-center mb-12" data-astro-cid-25smib4b>Benefits</h2> <div class="grid md:grid-cols-4 gap-8" data-astro-cid-25smib4b> ${[
    {
      stat: "100%",
      label: "Secure"
    },
    {
      stat: "24/7",
      label: "Available"
    },
    {
      stat: "<2s",
      label: "Processing"
    },
    {
      stat: "99.9%",
      label: "Uptime"
    }
  ].map((stat) => renderTemplate`<div class="text-center transform hover:scale-105 transition-transform" data-astro-cid-25smib4b> <div class="text-4xl font-bold mb-2" data-astro-cid-25smib4b>${stat.stat}</div> <div class="text-purple-300" data-astro-cid-25smib4b>${stat.label}</div> </div>`)} </div> </div> </section> ` })} `;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/transportation/parking/seamless-payment-solutions.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/transportation/parking/seamless-payment-solutions.astro";
const $$url = "/transportation/parking/seamless-payment-solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SeamlessPaymentSolutions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
