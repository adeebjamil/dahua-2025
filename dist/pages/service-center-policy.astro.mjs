/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR_sO45i.mjs';
export { renderers } from '../renderers.mjs';

const $$ServiceCenterPolicy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Service Center Policy" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"> <div class="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-10"></div> <div class="container mx-auto px-4"> <div class="max-w-3xl mx-auto text-center text-white"> <h1 class="text-4xl md:text-5xl font-bold mb-6">Service Center Locator</h1> <p class="text-xl text-blue-200">Find authorized service centers across India</p> </div> </div> </section>  <section class="py-16"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <table class="w-full"> <thead class="bg-gray-50"> <tr> <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">State</th> <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service Center</th> <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Contact</th> <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Address</th> </tr> </thead> <tbody class="divide-y divide-gray-200"> ${[
    {
      state: "Haryana",
      name: "Dahua Gurugram Repair Center",
      contact: "0124 4250 321",
      address: "Plot No #128, Ground floor, Institutional Area, Sector 44, Gurugram"
    },
    {
      state: "Maharashtra",
      name: "Dahua Mumbai Repair Center",
      contact: "022 62778234",
      address: "Office: No. 609, 6th Floor, ATL Corporate Park, Powai, Mumbai"
    }
    // Add more service centers here
  ].map((center) => renderTemplate`<tr class="hover:bg-gray-50"> <td class="px-6 py-4 text-sm text-gray-900">${center.state}</td> <td class="px-6 py-4 text-sm text-gray-900">${center.name}</td> <td class="px-6 py-4 text-sm text-gray-900">${center.contact}</td> <td class="px-6 py-4 text-sm text-gray-900">${center.address}</td> </tr>`)} </tbody> </table> </div> </div> </div> </section>  <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold mb-8">Warranty Policy</h2> <div class="grid gap-6"> ${[
    {
      product: "Network Camera",
      warranty: "36 months",
      notes: "EZ-IP series and wearing parts: 12 months"
    },
    {
      product: "HDCVI Camera",
      warranty: "36 months",
      notes: "COOPER series: 24 months"
    }
    // Add more warranty items
  ].map((item) => renderTemplate`<div class="bg-white p-6 rounded-xl shadow-sm"> <h3 class="text-lg font-semibold mb-2">${item.product}</h3> <p class="text-gray-600">Warranty Period: ${item.warranty}</p> <p class="text-sm text-gray-500 mt-2">${item.notes}</p> </div>`)} </div> </div> </div> </section>  <section class="py-16"> <div class="container mx-auto px-4 text-center"> <h2 class="text-3xl font-bold mb-8">Download Policy Documents</h2> <div class="inline-flex gap-4"> <a href="#" class="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all inline-flex items-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg>
Download Warranty Policy
</a> <a href="#" class="px-8 py-3 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition-all inline-flex items-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path> </svg>
RMA Form
</a> </div> </div> </section> ` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/service-center-policy.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/service-center-policy.astro";
const $$url = "/service-center-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ServiceCenterPolicy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
