/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR_sO45i.mjs';
/* empty css                                               */
export { renderers } from '../renderers.mjs';

const $$TechnologyPartners = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Technology Partners", "data-astro-cid-xdp6ajpe": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900" data-astro-cid-xdp6ajpe> <div class="container mx-auto px-4" data-astro-cid-xdp6ajpe> <div class="text-center mb-16" data-astro-cid-xdp6ajpe> <h2 class="text-4xl font-bold text-white mb-4" data-astro-cid-xdp6ajpe>Our Technology Ecosystem</h2> <p class="text-xl text-blue-200" data-astro-cid-xdp6ajpe>Partnering with industry leaders to deliver excellence</p> </div> <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8" data-astro-cid-xdp6ajpe> ${[
    {
      tier: "Diamond",
      description: "Strategic Global Partners",
      benefits: ["24/7 Priority Support", "Custom Solutions", "Joint Marketing"],
      color: "from-blue-400 to-blue-600",
      partners: 12
    },
    {
      tier: "Platinum",
      description: "Technology Alliance",
      benefits: ["Advanced Integration", "Partner Portal", "Technical Support"],
      color: "from-purple-400 to-purple-600",
      partners: 25
    },
    {
      tier: "Gold",
      description: "Solution Partners",
      benefits: ["API Access", "Training Programs", "Partner Events"],
      color: "from-amber-400 to-amber-600",
      partners: 50
    },
    {
      tier: "Silver",
      description: "Integration Partners",
      benefits: ["Basic Integration", "Documentation", "Email Support"],
      color: "from-gray-400 to-gray-600",
      partners: 100
    }
  ].map((tier) => renderTemplate`<div class="group relative" data-astro-cid-xdp6ajpe> <div${addAttribute(`absolute inset-0 bg-gradient-to-br ${tier.color} rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300`, "class")} data-astro-cid-xdp6ajpe></div> <div class="relative bg-gray-900 rounded-2xl p-8 h-full border border-white/10 backdrop-blur-sm" data-astro-cid-xdp6ajpe> <div class="flex items-center justify-between mb-6" data-astro-cid-xdp6ajpe> <h3 class="text-2xl font-bold text-white" data-astro-cid-xdp6ajpe>${tier.tier}</h3> <span class="text-sm text-blue-200" data-astro-cid-xdp6ajpe>${tier.partners}+ Partners</span> </div> <p class="text-gray-300 mb-6" data-astro-cid-xdp6ajpe>${tier.description}</p> <ul class="space-y-3 mb-8" data-astro-cid-xdp6ajpe> ${tier.benefits.map((benefit) => renderTemplate`<li class="flex items-center text-gray-300" data-astro-cid-xdp6ajpe> <svg class="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-xdp6ajpe> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-xdp6ajpe></path> </svg> ${benefit} </li>`)} </ul> <button class="w-full py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors duration-300" data-astro-cid-xdp6ajpe>
Thank You
</button> </div> </div>`)} </div> </div> </section>   <section class="py-20 bg-gray-50" data-astro-cid-xdp6ajpe> <div class="container mx-auto px-4" data-astro-cid-xdp6ajpe> <h2 class="text-3xl font-bold text-center mb-16" data-astro-cid-xdp6ajpe>Our Featured Partners</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-8" data-astro-cid-xdp6ajpe> ${[
    {
      name: "Tech Partner 1",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400",
      alt: "Technology company office with modern workspace"
    },
    {
      name: "Tech Partner 2",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400",
      alt: "Business team collaborating in modern office"
    },
    {
      name: "Tech Partner 3",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=400",
      alt: "Technology development team meeting"
    },
    {
      name: "Tech Partner 4",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400",
      alt: "Modern tech company workspace"
    },
    {
      name: "Tech Partner 5",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400",
      alt: "Software development environment"
    },
    {
      name: "Tech Partner 6",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400",
      alt: "Corporate office building"
    },
    {
      name: "Tech Partner 7",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400",
      alt: "Technology team collaboration"
    },
    {
      name: "Tech Partner 8",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=400",
      alt: "Modern tech company interior"
    }
  ].map((partner) => renderTemplate`<div class="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300" data-astro-cid-xdp6ajpe> <img${addAttribute(partner.image, "src")}${addAttribute(partner.alt, "alt")} class="w-full h-40 object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-300" data-astro-cid-xdp6ajpe> <h3 class="mt-4 text-center text-gray-700 font-medium" data-astro-cid-xdp6ajpe>${partner.name}</h3> </div>`)} </div> </div> </section>  <section class="py-20" data-astro-cid-xdp6ajpe> <div class="container mx-auto px-4" data-astro-cid-xdp6ajpe> <div class="max-w-4xl mx-auto" data-astro-cid-xdp6ajpe> <h2 class="text-3xl font-bold text-center mb-16" data-astro-cid-xdp6ajpe>Partnership Benefits</h2> <div class="grid md:grid-cols-2 gap-8" data-astro-cid-xdp6ajpe> ${[
    {
      title: "Technical Support",
      description: "Access to dedicated technical support and resources"
    },
    {
      title: "Marketing Support",
      description: "Joint marketing initiatives and promotional activities"
    },
    {
      title: "Training Programs",
      description: "Comprehensive training and certification programs"
    },
    {
      title: "Product Integration",
      description: "Seamless integration with our product ecosystem"
    }
  ].map((benefit) => renderTemplate`<div class="flex gap-4" data-astro-cid-xdp6ajpe> <div class="flex-shrink-0" data-astro-cid-xdp6ajpe> <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600" data-astro-cid-xdp6ajpe> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-xdp6ajpe> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-xdp6ajpe></path> </svg> </div> </div> <div data-astro-cid-xdp6ajpe> <h3 class="text-xl font-bold mb-2" data-astro-cid-xdp6ajpe>${benefit.title}</h3> <p class="text-gray-600" data-astro-cid-xdp6ajpe>${benefit.description}</p> </div> </div>`)} </div> </div> </div> </section> ` })} `;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/technology-partners.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/technology-partners.astro";
const $$url = "/technology-partners";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TechnologyPartners,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
