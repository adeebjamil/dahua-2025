/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR_sO45i.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$CallCenter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Call Center", "data-astro-cid-cwrba4ya": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-20 mt-20 " data-astro-cid-cwrba4ya> <div class="container mx-auto px-4" data-astro-cid-cwrba4ya> <div class="grid md:grid-cols-3 gap-8" data-astro-cid-cwrba4ya> ${[
    {
      icon: "\u{1F4DE}",
      title: "Call Support",
      status: "Available",
      description: "24/7 Phone Support",
      action: "Call Now",
      color: "bg-green-500"
    },
    {
      icon: "\u{1F4AC}",
      title: "Live Chat",
      status: "Online",
      description: "Instant Messaging",
      action: "Start Chat",
      color: "bg-blue-500"
    },
    {
      icon: "\u2709\uFE0F",
      title: "Email Support",
      status: "24h Response",
      description: "Detailed Assistance",
      action: "Send Email",
      color: "bg-purple-500"
    }
  ].map((channel) => renderTemplate`<div class="support-card group" data-astro-cid-cwrba4ya> <div class="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-astro-cid-cwrba4ya> <div${addAttribute(`absolute -top-4 -right-4 w-20 h-20 ${channel.color} rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-300`, "class")} data-astro-cid-cwrba4ya></div> <div class="relative" data-astro-cid-cwrba4ya> <div class="text-4xl mb-4" data-astro-cid-cwrba4ya>${channel.icon}</div> <h3 class="text-xl font-bold mb-2" data-astro-cid-cwrba4ya>${channel.title}</h3> <div class="flex items-center gap-2 mb-4" data-astro-cid-cwrba4ya> <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" data-astro-cid-cwrba4ya></span> <span class="text-sm text-gray-600" data-astro-cid-cwrba4ya>${channel.status}</span> </div> <p class="text-gray-600 mb-6" data-astro-cid-cwrba4ya>${channel.description}</p> <button class="w-full py-3 bg-gray-50 text-gray-900 rounded-xl font-semibold group-hover:bg-blue-600 group-hover:text-white transition-all duration-300" data-astro-cid-cwrba4ya> ${channel.action} </button> </div> </div> </div>`)} </div> </div> </section>  <section class="py-20 bg-gray-50" data-astro-cid-cwrba4ya> <div class="container mx-auto px-4" data-astro-cid-cwrba4ya> <div class="text-center mb-16" data-astro-cid-cwrba4ya> <h2 class="text-4xl font-bold mb-4" data-astro-cid-cwrba4ya>Global Support Network</h2> <p class="text-xl text-gray-600" data-astro-cid-cwrba4ya>Available in multiple languages across different time zones</p> </div> <div class="grid lg:grid-cols-2 gap-12" data-astro-cid-cwrba4ya> <!-- Support Stats --> <div class="grid grid-cols-2 gap-6" data-astro-cid-cwrba4ya> ${[
    { number: "99.9%", label: "Uptime", icon: "\u26A1" },
    { number: "<2min", label: "Response Time", icon: "\u23F1" },
    { number: "150+", label: "Support Experts", icon: "\u{1F465}" },
    { number: "24/7", label: "Availability", icon: "\u{1F30D}" }
  ].map((stat) => renderTemplate`<div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1" data-astro-cid-cwrba4ya> <div class="text-3xl mb-2" data-astro-cid-cwrba4ya>${stat.icon}</div> <div class="text-3xl font-bold text-blue-600" data-astro-cid-cwrba4ya>${stat.number}</div> <div class="text-gray-600" data-astro-cid-cwrba4ya>${stat.label}</div> </div>`)} </div> <!-- Support Statistics --> <div class="relative" data-astro-cid-cwrba4ya> <div class="bg-white rounded-2xl shadow-lg p-8 h-full" data-astro-cid-cwrba4ya> <h3 class="text-2xl font-bold text-gray-900 mb-8" data-astro-cid-cwrba4ya>Global Support Impact</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-cwrba4ya> <!-- Support Resolution Rate --> <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white" data-astro-cid-cwrba4ya> <div class="absolute top-0 right-0 -mt-4 -mr-4" data-astro-cid-cwrba4ya> <svg class="w-24 h-24 opacity-10" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-cwrba4ya> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-cwrba4ya></path> </svg> </div> <h4 class="text-3xl font-bold mb-2" data-astro-cid-cwrba4ya>98%</h4> <p class="text-blue-100" data-astro-cid-cwrba4ya>Resolution Rate</p> </div> <!-- Average Response Time --> <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white" data-astro-cid-cwrba4ya> <div class="absolute top-0 right-0 -mt-4 -mr-4" data-astro-cid-cwrba4ya> <svg class="w-24 h-24 opacity-10" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-cwrba4ya> <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-cwrba4ya></path> </svg> </div> <h4 class="text-3xl font-bold mb-2" data-astro-cid-cwrba4ya>${"<2h"}</h4> <p class="text-green-100" data-astro-cid-cwrba4ya>Response Time</p> </div> <!-- Global Coverage --> <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white" data-astro-cid-cwrba4ya> <div class="absolute top-0 right-0 -mt-4 -mr-4" data-astro-cid-cwrba4ya> <svg class="w-24 h-24 opacity-10" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-cwrba4ya> <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-cwrba4ya></path> </svg> </div> <h4 class="text-3xl font-bold mb-2" data-astro-cid-cwrba4ya>150+</h4> <p class="text-purple-100" data-astro-cid-cwrba4ya>Countries Covered</p> </div> </div> <!-- Support Features --> <div class="grid grid-cols-2 gap-4 mt-8" data-astro-cid-cwrba4ya> <div class="flex items-center gap-3" data-astro-cid-cwrba4ya> <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-cwrba4ya> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-cwrba4ya></path> </svg> <span class="text-gray-600" data-astro-cid-cwrba4ya>24/7 Support</span> </div> <div class="flex items-center gap-3" data-astro-cid-cwrba4ya> <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-cwrba4ya> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-cwrba4ya></path> </svg> <span class="text-gray-600" data-astro-cid-cwrba4ya>Multi-lingual Teams</span> </div> <div class="flex items-center gap-3" data-astro-cid-cwrba4ya> <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-cwrba4ya> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" data-astro-cid-cwrba4ya></path> </svg> <span class="text-gray-600" data-astro-cid-cwrba4ya>Live Chat Support</span> </div> <div class="flex items-center gap-3" data-astro-cid-cwrba4ya> <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-cwrba4ya> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-cwrba4ya></path> </svg> <span class="text-gray-600" data-astro-cid-cwrba4ya>Technical Expertise</span> </div> </div> </div> </div> </div> </div> </section> ` })} `;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/call-center.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/call-center.astro";
const $$url = "/call-center";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CallCenter,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
