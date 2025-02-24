/* empty css                                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
export { renderers } from '../../renderers.mjs';

const $$SecurityAiSummit2024 = createComponent(($$result, $$props, $$slots) => {
  const eventDetails = {
    date: "March 15, 2024",
    time: "9:00 AM - 5:00 PM",
    highlights: [
      "Keynote presentations from AI security experts",
      "Live demonstrations of WizMind 2.0 technology",
      "Interactive workshops on perimeter protection",
      "Networking opportunities with industry leaders",
      "Exclusive previews of upcoming Dahua products"
    ],
    schedule: [
      {
        time: "09:00 - 09:30",
        title: "Registration & Welcome Coffee"
      },
      {
        time: "09:30 - 10:30",
        title: "Keynote: The Future of AI in Security"
      },
      {
        time: "11:00 - 12:30",
        title: "WizMind 2.0 Technology Showcase"
      },
      {
        time: "14:00 - 15:30",
        title: "Interactive Solution Demonstrations"
      },
      {
        time: "16:00 - 17:00",
        title: "Networking Session & Closing Remarks"
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Security AI Solutions Summit 2024 | Dahua", "description": "Join us for Dahua's premier security technology event showcasing the latest AI innovations in security solutions." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="fixed top-4 right-4 z-50"> <div class="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="font-semibold">Event Ended</span> </div> </div>  <div class="bg-red-500 text-white py-3 px-4"> <div class="container mx-auto text-center"> <div class="flex items-center justify-center gap-2"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="font-medium">This event has ended. Please check our upcoming events.</span> </div> </div> </div>  <section class="relative h-[60vh] min-h-[600px] flex items-center justify-center overflow-hidden"> <div class="absolute inset-0"> <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" alt="AI Summit Conference Hall" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70"></div> </div> <div class="relative container mx-auto px-4 text-center text-white"> <span class="inline-block px-6 py-2 bg-blue-500/20 text-blue-200 text-sm font-medium rounded-full mb-8 backdrop-blur-sm">
March 15, 2024 | Riyadh
</span> <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
Security AI Solutions
<span class="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
Summit 2024
</span> </h1> <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
Experience the future of security with Dahua's latest AI-powered solutions
</p> <a href="#register" class="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
Register Now
</a> </div> </section>  <section class="py-20 bg-white"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> <div> <h2 class="text-4xl font-bold mb-8">Event Highlights</h2> <ul class="space-y-4"> ${eventDetails.highlights.map((highlight) => renderTemplate`<li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="text-lg text-gray-700">${highlight}</span> </li>`)} </ul> </div> <div class="relative"> <img src="https://images.unsplash.com/photo-1515187029135-18a5b692df49?auto=format&fit=crop&q=80" alt="AI Technology Demo" class="rounded-2xl shadow-2xl"> <div class="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-2xl shadow-xl"> <div class="text-3xl font-bold">${eventDetails.time}</div> <div class="text-blue-100">${eventDetails.date}</div> </div> </div> </div> </div> </section>  <section class="py-20 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-4xl font-bold text-center mb-16">Event Schedule</h2> <div class="max-w-3xl mx-auto"> ${eventDetails.schedule.map((item, index) => renderTemplate`<div class="flex items-start space-x-8 mb-12 group"> <div class="w-32 text-right"> <div class="text-lg font-semibold text-blue-500">${item.time}</div> </div> <div class="flex-1 bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"> <h3 class="text-xl font-bold text-gray-900">${item.title}</h3> </div> </div>`)} </div> </div> </section>  <section id="register" class="py-20 bg-gradient-to-br from-blue-900 to-black text-white"> <div class="container mx-auto px-4"> <div class="max-w-2xl mx-auto text-center"> <h2 class="text-4xl font-bold mb-8">Register Now</h2> <p class="text-lg text-blue-200 mb-12">Secure your spot at the most anticipated security technology event of the year</p> <form class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <input type="text" placeholder="First Name" class="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60"> <input type="text" placeholder="Last Name" class="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60"> </div> <input type="email" placeholder="Email Address" class="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60"> </form> </div> </div> </section> ` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/events/security-ai-summit-2024.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/events/security-ai-summit-2024.astro";
const $$url = "/events/security-ai-summit-2024";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SecurityAiSummit2024,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
