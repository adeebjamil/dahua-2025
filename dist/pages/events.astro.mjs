/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR_sO45i.mjs';
export { renderers } from '../renderers.mjs';

const $$Events = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Events" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4"> <!-- Hero Section --> <div class="relative"> <img src="/src/assets/WIreless/heroimg0.png" alt="Events Banner" class="w-full h-[500px] object-cover"> </div> <!-- Tab Navigation --> <div class="mb-8 border-b mt-2"> <div class="flex"> <button class="px-6 py-3 bg-blue-600 text-white">Exhibition</button> <button class="px-6 py-3 text-gray-600">Other Events</button> </div> </div> <!-- Events Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"> <!-- Intersec --> <div class="bg-white p-6 shadow-lg rounded-lg"> <img src="/images/intersec-logo.png" alt="Intersec" class="mb-4 w-full"> <h3 class="text-xl font-semibold">Intersec</h3> <p class="text-gray-600">Jan.19 - 21, 2020</p> <p class="text-gray-600">Dubai</p> <p class="text-gray-600">Booth: S1-G12</p> </div> <!-- SICUR --> <div class="bg-white p-6 shadow-lg rounded-lg"> <img src="/images/sicur-logo.png" alt="SICUR" class="mb-4 w-full"> <h3 class="text-xl font-semibold">SICUR</h3> <p class="text-gray-600">Feb.25 - 28, 2020</p> <p class="text-gray-600">Madrid</p> </div> <!-- ISC WEST --> <div class="bg-white p-6 shadow-lg rounded-lg"> <img src="/images/isc-west-logo.png" alt="ISC WEST" class="mb-4 w-full"> <h3 class="text-xl font-semibold">ISC WEST</h3> <p class="text-gray-600">Mar.18 - 20, 2020</p> <p class="text-gray-600">Las Vegas</p> <p class="text-gray-600">Booth: 14039</p> </div> <!-- SECON --> <div class="bg-white p-6 shadow-lg rounded-lg"> <img src="/images/secon-logo.png" alt="SECON" class="mb-4 w-full"> <h3 class="text-xl font-semibold">SECON</h3> <p class="text-gray-600">Mar.18 - 20, 2020</p> <p class="text-gray-600">Seoul</p> <p class="text-gray-600">Booth: G49</p> </div> <!-- Securika Moscow --> <div class="bg-white p-6 shadow-lg rounded-lg"> <img src="/images/securika-moscow-logo.png" alt="Securika Moscow" class="mb-4 w-full"> <h3 class="text-xl font-semibold">Securika Moscow</h3> <p class="text-gray-600">Apr.13 - 16, 2020</p> <p class="text-gray-600">Moscow</p> </div> <!-- Securex Poland --> <div class="bg-white p-6 shadow-lg rounded-lg"> <img src="/images/securex-poland-logo.png" alt="Securex Poland" class="mb-4 w-full"> <h3 class="text-xl font-semibold">Securex Poland</h3> <p class="text-gray-600">Apr.21 - 23, 2020</p> <p class="text-gray-600">Poznan</p> </div> <!-- IFSEC International --> <div class="bg-white p-6 shadow-lg rounded-lg"> <img src="/images/ifsec-logo.png" alt="IFSEC International" class="mb-4 w-full"> <h3 class="text-xl font-semibold">IFSEC International</h3> <p class="text-gray-600">May.19 - 21, 2020</p> <p class="text-gray-600">London</p> <p class="text-gray-600">Booth: IF2120</p> </div> <!-- Security Exhibition & Conference --> <div class="bg-white p-6 shadow-lg rounded-lg"> <img src="/images/security-exhibition-logo.png" alt="Security Exhibition & Conference" class="mb-4 w-full"> <h3 class="text-xl font-semibold">Security Exhibition & Conference</h3> <p class="text-gray-600">Jul.22 - 24, 2020</p> <p class="text-gray-600">Melbourne</p> <p class="text-gray-600">Booth: H38</p> </div> <!-- Security Essen --> <div class="bg-white p-6 shadow-lg rounded-lg"> <img src="/images/security-essen-logo.png" alt="Security Essen" class="mb-4 w-full"> <h3 class="text-xl font-semibold">Security Essen</h3> <p class="text-gray-600">Sep.22 - 25, 2020</p> <p class="text-gray-600">Essen</p> </div> </div> </main> ` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/events.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/events.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
