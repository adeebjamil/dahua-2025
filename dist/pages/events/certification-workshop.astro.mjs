/* empty css                                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
export { renderers } from '../../renderers.mjs';

const $$CertificationWorkshop = createComponent(($$result, $$props, $$slots) => {
  const workshopDetails = {
    date: "March 20, 2024",
    duration: "3 Days",
    location: "Dahua Training Center, Riyadh",
    price: "1,500 SAR",
    modules: [
      {
        day: "Day 1",
        topics: [
          "Introduction to Dahua Security Systems",
          "Network Camera Configuration",
          "Video Management Software"
        ]
      },
      {
        day: "Day 2",
        topics: [
          "Advanced Analytics Setup",
          "AI-Powered Features",
          "System Integration"
        ]
      },
      {
        day: "Day 3",
        topics: [
          "Troubleshooting Techniques",
          "Best Practices",
          "Certification Exam"
        ]
      }
    ],
    benefits: [
      "Official Dahua Certification",
      "Hands-on practical experience",
      "Expert-led training sessions",
      "Complete course materials",
      "Post-training support"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dahua Certification Workshop | Professional Training", "description": "Join our comprehensive certification program for security professionals on Dahua's latest surveillance systems" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="fixed top-4 right-4 z-50"> <div class="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="font-semibold">Event Ended</span> </div> </div>  <div class="bg-red-500 text-white py-3 px-4"> <div class="container mx-auto text-center"> <div class="flex items-center justify-center gap-2"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="font-medium">This event has ended. Please check our upcoming events.</span> </div> </div> </div>  <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden"> <div class="absolute inset-0"> <img src="/src/assets/workshop-hero.jpg" alt="Training Center" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-blue-900/80"></div> </div> <div class="relative container mx-auto px-4 py-20 text-center"> <span class="inline-block px-6 py-2 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-8 backdrop-blur-sm">
Professional Training Program
</span> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
Dahua Certification
<span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
Workshop
</span> </h1> <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
Master Dahua security systems with our comprehensive certification program
</p> <div class="flex flex-wrap justify-center gap-6"> <div class="flex items-center gap-2 text-white"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <span>${workshopDetails.date}</span> </div> <div class="flex items-center gap-2 text-white"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>${workshopDetails.duration}</span> </div> <div class="flex items-center gap-2 text-white"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>${workshopDetails.location}</span> </div> </div> </div> </section>  <section class="py-20 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-4xl font-bold text-center mb-16">Course Modules</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${workshopDetails.modules.map((module) => renderTemplate`<div class="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"> <h3 class="text-2xl font-bold text-blue-600 mb-6">${module.day}</h3> <ul class="space-y-4"> ${module.topics.map((topic) => renderTemplate`<li class="flex items-start gap-3"> <svg class="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="text-gray-700">${topic}</span> </li>`)} </ul> </div>`)} </div> </div> </section>  <section class="py-20 bg-gray-50"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> <div> <h2 class="text-4xl font-bold mb-8">Workshop Benefits</h2> <ul class="space-y-4"> ${workshopDetails.benefits.map((benefit) => renderTemplate`<li class="flex items-center gap-3"> <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-lg text-gray-700">${benefit}</span> </li>`)} </ul> <div class="mt-12"> <h3 class="text-2xl font-bold mb-2">Workshop Fee</h3> <p class="text-4xl font-bold text-blue-600">${workshopDetails.price}</p> <p class="text-gray-600 mt-2">Includes all materials and certification</p> </div> </div> <div class="bg-white p-8 rounded-2xl shadow-xl"> <h3 class="text-2xl font-bold mb-6">Register for Workshop</h3> <form class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <input type="text" placeholder="First Name" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"> <input type="text" placeholder="Last Name" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"> </div> <input type="email" placeholder="Email Address" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"> <input type="tel" placeholder="Phone Number" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"> <input type="text" placeholder="Company Name" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"> <button type="submit" class="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
Submit Registration
</button> </form> </div> </div> </div> </section> ` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/events/certification-workshop.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/events/certification-workshop.astro";
const $$url = "/events/certification-workshop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CertificationWorkshop,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
