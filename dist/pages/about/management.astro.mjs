/* empty css                                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Management = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Management Team", "data-astro-cid-x3xuqqon": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden" data-astro-cid-x3xuqqon> <div class="absolute inset-0" data-astro-cid-x3xuqqon> <img src="https://source.unsplash.com/1600x900/?management,leadership" alt="Leadership" class="w-full h-full object-cover" data-astro-cid-x3xuqqon> <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" data-astro-cid-x3xuqqon></div> </div> <div class="relative container mx-auto px-4 text-center text-white" data-astro-cid-x3xuqqon> <h1 class="text-5xl md:text-6xl font-bold mb-4 animate-fade-in" data-astro-cid-x3xuqqon>
Our Leadership
</h1> <p class="text-xl md:text-2xl mb-8 animate-fade-in-delay max-w-3xl mx-auto" data-astro-cid-x3xuqqon>
Driving innovation and excellence through visionary leadership
</p> </div> </section>  <section class="py-20 bg-gradient-to-b from-gray-50 to-white" data-astro-cid-x3xuqqon> <div class="container mx-auto px-4" data-astro-cid-x3xuqqon> <div class="text-center mb-16" data-astro-cid-x3xuqqon> <h2 class="text-4xl font-bold text-gray-900 mb-4" data-astro-cid-x3xuqqon>Executive Leadership</h2> <div class="w-24 h-1 bg-blue-600 mx-auto" data-astro-cid-x3xuqqon></div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-12" data-astro-cid-x3xuqqon> ${[
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      description: "Leading strategic vision and company growth",
      linkedin: "#",
      twitter: "#",
      icon: renderTemplate`<svg class="w-24 h-24 text-blue-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-x3xuqqon> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(1.5, "stroke-width")} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-x3xuqqon></path> </svg>`
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      description: "Driving technological innovation",
      linkedin: "#",
      twitter: "#",
      icon: renderTemplate`<svg class="w-24 h-24 text-blue-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-x3xuqqon> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(1.5, "stroke-width")} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-astro-cid-x3xuqqon></path> </svg>`
    },
    {
      name: "David Smith",
      position: "Chief Operations Officer",
      description: "Optimizing operational efficiency",
      linkedin: "#",
      twitter: "#",
      icon: renderTemplate`<svg class="w-24 h-24 text-blue-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-x3xuqqon> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(1.5, "stroke-width")} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-x3xuqqon></path> </svg>`
    }
  ].map((executive) => renderTemplate`<div class="group" data-astro-cid-x3xuqqon> <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-astro-cid-x3xuqqon> ${executive.icon} <div class="text-center" data-astro-cid-x3xuqqon> <h3 class="text-2xl font-bold text-gray-900 mb-2" data-astro-cid-x3xuqqon>${executive.name}</h3> <p class="text-blue-600 font-medium mb-4" data-astro-cid-x3xuqqon>${executive.position}</p> <p class="text-gray-600 mb-6" data-astro-cid-x3xuqqon>${executive.description}</p> <!-- Social Links --> <div class="flex justify-center space-x-4" data-astro-cid-x3xuqqon> <a${addAttribute(executive.linkedin, "href")} class="text-gray-400 hover:text-blue-600 transition-colors" data-astro-cid-x3xuqqon> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-x3xuqqon> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" data-astro-cid-x3xuqqon></path> </svg> </a> <a${addAttribute(executive.twitter, "href")} class="text-gray-400 hover:text-blue-400 transition-colors" data-astro-cid-x3xuqqon> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-x3xuqqon> <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" data-astro-cid-x3xuqqon></path> </svg> </a> </div> </div> </div> </div>`)} </div> </div> </section>  <section class="py-20 bg-white" data-astro-cid-x3xuqqon> <div class="container mx-auto px-4" data-astro-cid-x3xuqqon> <h2 class="text-4xl font-bold text-center mb-16" data-astro-cid-x3xuqqon>Organization Structure</h2> <div class="max-w-5xl mx-auto" data-astro-cid-x3xuqqon> <div class="grid grid-cols-1 md:grid-cols-4 gap-8" data-astro-cid-x3xuqqon> ${[
    {
      title: "Research & Development",
      icon: renderTemplate`<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-x3xuqqon> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" data-astro-cid-x3xuqqon></path> </svg>`,
      items: ["Product Innovation", "Technology Research", "Quality Control"]
    },
    {
      title: "Operations",
      icon: renderTemplate`<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-x3xuqqon> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" data-astro-cid-x3xuqqon></path> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-x3xuqqon></path> </svg>`,
      items: ["Manufacturing", "Supply Chain", "Logistics"]
    },
    {
      title: "Sales & Marketing",
      icon: renderTemplate`<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-x3xuqqon> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-astro-cid-x3xuqqon></path> </svg>`,
      items: ["Global Sales", "Marketing Strategy", "Brand Development"]
    },
    {
      title: "Customer Support",
      icon: renderTemplate`<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-x3xuqqon> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" data-astro-cid-x3xuqqon></path> </svg>`,
      items: ["Technical Support", "Customer Service", "Training"]
    }
  ].map((department) => renderTemplate`<div class="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300" data-astro-cid-x3xuqqon> <div class="mb-4" data-astro-cid-x3xuqqon>${department.icon}</div> <h3 class="text-xl font-bold mb-4" data-astro-cid-x3xuqqon>${department.title}</h3> <ul class="space-y-2 text-gray-600" data-astro-cid-x3xuqqon> ${department.items.map((item) => renderTemplate`<li data-astro-cid-x3xuqqon>${item}</li>`)} </ul> </div>`)} </div> </div> </div> </section>  ` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/about/management.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/about/management.astro";
const $$url = "/about/management";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Management,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
