/* empty css                                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$EmergencyAlarm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Emergency Alarm", "data-astro-cid-lltzopup": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="hero-section" data-astro-cid-lltzopup> <div class="container mx-auto px-4 py-20" data-astro-cid-lltzopup> <img src="/src/assets/alarm/heroimg.jpg" alt="Wireless Alarm Systems" class="w-full h-[400px] object-conatin rounded-lg shadow-lg" data-astro-cid-lltzopup> </div></section>  <section id="overview" class="relative py-32 overflow-hidden" data-astro-cid-lltzopup> <div class="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50" data-astro-cid-lltzopup></div> <div class="absolute inset-0 bg-[url('/patterns/emergency.svg')] opacity-5 animate-pulse" data-astro-cid-lltzopup></div> <div class="container mx-auto px-4 relative z-10" data-astro-cid-lltzopup> <div class="max-w-5xl mx-auto" data-astro-cid-lltzopup> <div class="text-center mb-16 space-y-6" data-astro-cid-lltzopup> <span class="inline-block px-4 py-1.5 bg-red-100/80 backdrop-blur-sm text-red-600 font-semibold text-sm tracking-wider uppercase rounded-full" data-astro-cid-lltzopup>
Emergency Response
</span> <h2 class="text-5xl font-bold mb-6 bg-gradient-to-r from-red-700 to-red-500 bg-clip-text" data-astro-cid-lltzopup>
Rapid Response Emergency Systems
</h2> <div class="w-24 h-1.5 bg-gradient-to-r from-red-700 to-red-500 mx-auto rounded-full mb-8" data-astro-cid-lltzopup></div> <p class="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto" data-astro-cid-lltzopup>
Our emergency alarm systems provide immediate response capabilities with advanced detection and notification features for critical situations.
</p> </div> <!-- Feature Cards --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-lltzopup> ${[
    { value: "<2s", label: "Response Time", icon: "\u26A1" },
    { value: "24/7", label: "Monitoring", icon: "\u{1F441}\uFE0F" },
    { value: "99.99%", label: "Reliability", icon: "\u{1F6E1}\uFE0F" }
  ].map((stat) => renderTemplate`<div class="relative group" data-astro-cid-lltzopup> <div class="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 rounded-2xl blur transform group-hover:scale-105 transition-transform duration-300 opacity-20" data-astro-cid-lltzopup></div> <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 relative transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-red-100" data-astro-cid-lltzopup> <div class="text-4xl mb-2" data-astro-cid-lltzopup>${stat.icon}</div> <div class="text-4xl font-bold text-red-600 mb-3" data-astro-cid-lltzopup>${stat.value}</div> <div class="text-gray-700 font-medium" data-astro-cid-lltzopup>${stat.label}</div> </div> </div>`)} </div> </div> </div> </section>  <section class="py-24 bg-white" data-astro-cid-lltzopup> <div class="container mx-auto px-4" data-astro-cid-lltzopup> <h2 class="text-4xl font-bold text-center mb-16" data-astro-cid-lltzopup>Key Features</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-lltzopup> ${[
    {
      title: "Instant Alert System",
      description: "Immediate notification system with multi-channel alerts including sirens, strobes, and mobile notifications.",
      image: "/src/assets/alarm/emergency-feature1.jpg"
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance and immediate response coordination with emergency services.",
      image: "/src/assets/alarm/emergency-feature2.jpg"
    }
    // Add more features as needed
  ].map((feature) => renderTemplate`<div class="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300" data-astro-cid-lltzopup> <div class="relative h-64" data-astro-cid-lltzopup> <img${addAttribute(feature.image, "src")}${addAttribute(feature.title, "alt")} class="w-full h-full object-cover" data-astro-cid-lltzopup> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" data-astro-cid-lltzopup></div> <div class="absolute bottom-0 p-6 text-white" data-astro-cid-lltzopup> <h3 class="text-2xl font-bold mb-2" data-astro-cid-lltzopup>${feature.title}</h3> <p class="text-gray-200" data-astro-cid-lltzopup>${feature.description}</p> </div> </div> </div>`)} </div> </div> </section>  ` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/alarms/emergency-alarm.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/alarms/emergency-alarm.astro";
const $$url = "/alarms/emergency-alarm";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EmergencyAlarm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
