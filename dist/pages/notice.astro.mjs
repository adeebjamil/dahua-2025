/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR_sO45i.mjs';
export { renderers } from '../renderers.mjs';

const $$Notice = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Notice" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4"> <!-- Hero Section --> <div class="relative"> <img src="/src/assets/Wireless/heroimg0.png" alt="Notice Banner" class="w-full h-[500px] object-cover"> </div> <!-- Notice Table --> <div class="mt-8"> <div class="bg-gray-200 grid grid-cols-2 p-4"> <div class="font-medium">Name</div> <div class="font-medium text-right">Date</div> </div> <div class="divide-y"> <div class="grid grid-cols-2 p-4 hover:bg-gray-50"> <div class="text-blue-800">DAHUA's SRDP CONTEST – 2024 (01Jan-31Dec' 2024)</div> <div class="text-right">January 13,2025</div> </div> <div class="grid grid-cols-2 p-4 hover:bg-gray-50"> <div class="text-blue-800">DAHUA GLOBAL SUPER INSTALLER CONTEST 2024</div> <div class="text-right">September 10,2024</div> </div> <div class="grid grid-cols-2 p-4 hover:bg-gray-50"> <div class="text-blue-800">DAHUA SUPER INSTALLER CONTEST 2023</div> <div class="text-right">July 18,2023</div> </div> <div class="grid grid-cols-2 p-4 hover:bg-gray-50"> <div class="text-blue-800">2023 DAHUA SRDP Contest</div> <div class="text-right">March 14,2023</div> </div> <div class="grid grid-cols-2 p-4 hover:bg-gray-50"> <div class="text-blue-800">2022 H2 DAHUA SRDP Contest</div> <div class="text-right">December 15,2022</div> </div> <div class="grid grid-cols-2 p-4 hover:bg-gray-50"> <div class="text-blue-800">DAHUA'S INSTALLER LUCKY DRAW CONTEST</div> <div class="text-right">September 30,2022</div> </div> <div class="grid grid-cols-2 p-4 hover:bg-gray-50"> <div class="text-blue-800">Dahua Product Privacy Policy</div> <div class="text-right">April 19,2018</div> </div> <div class="grid grid-cols-2 p-4 hover:bg-gray-50"> <div class="text-blue-800">Discontinuation of DahuaDDNS/QuickDDNS</div> <div class="text-right">June 13,2017</div> </div> </div> </div> </main> ` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/notice.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/notice.astro";
const $$url = "/notice";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Notice,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
