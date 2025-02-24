/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR_sO45i.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Whiteboards = createComponent(($$result, $$props, $$slots) => {
  const title = "Leading Distributor of Dahua Smart Whiteboards in Saudi Arabia \u2013 Revolutionize Education & Business Collaboration";
  const description = "As the premier distributor of Dahua smart whiteboards in Saudi Arabia, we provide advanced interactive solutions designed to transform classrooms, boardrooms, and collaborative workspaces. Dahua\u2019s smart whiteboards offer seamless integration with powerful features such as multi-touch interaction, real-time collaboration, and wireless connectivity. Perfect for educational institutions and corporate environments, these digital whiteboards enhance presentations, encourage team engagement, and streamline communication. With cutting-edge technology and superior display quality, Dahua\u2019s interactive whiteboards deliver a dynamic and immersive experience, making them an essential tool for modern learning and business growth. Transform the way you communicate and collaborate with Dahua's innovative whiteboard solutions!";
  const images = {
    hero: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80",
    products: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-gvamk7ca": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative h-[80vh] overflow-hidden" data-astro-cid-gvamk7ca> <div class="absolute inset-0" data-astro-cid-gvamk7ca> <img${addAttribute(images.hero, "src")} alt="Modern Interactive Whiteboard in Educational Setting" class="w-full h-full object-cover" data-astro-cid-gvamk7ca> <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" data-astro-cid-gvamk7ca></div> </div> <div class="relative container mx-auto px-4 h-full flex items-center" data-astro-cid-gvamk7ca> <div class="max-w-2xl text-white space-y-6" data-astro-cid-gvamk7ca> <h1 class="text-5xl font-bold leading-tight animate-fade-in" data-astro-cid-gvamk7ca>
Interactive Whiteboards
</h1> <p class="text-xl opacity-90 animate-fade-in-delay" data-astro-cid-gvamk7ca>
Transform your learning and collaboration spaces with Dahua's innovative touch solutions
</p> <button class="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors" data-astro-cid-gvamk7ca>
Explore Solutions
</button> </div> </div> </section>  <section class="py-20" data-astro-cid-gvamk7ca> <div class="container mx-auto px-4" data-astro-cid-gvamk7ca> <h2 class="text-3xl font-bold text-center mb-16" data-astro-cid-gvamk7ca>Our Products</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-gvamk7ca> ${[
    {
      name: "LU86-LT400",
      image: images.products[0],
      features: ['86" 4K Display', "40-point touch", "Built-in Android"]
    },
    {
      name: "LU75-LT300",
      image: images.products[1],
      features: ['75" 4K Display', "20-point touch", "Wireless presentation"]
    },
    {
      name: "LU65-LT200",
      image: images.products[2],
      features: ['65" 4K Display', "10-point touch", "Smart whiteboarding"]
    }
  ].map((product) => renderTemplate`<div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow" data-astro-cid-gvamk7ca> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="w-full h-64 object-cover" loading="lazy" data-astro-cid-gvamk7ca> <div class="p-6" data-astro-cid-gvamk7ca> <h3 class="text-xl font-semibold mb-4" data-astro-cid-gvamk7ca>${product.name}</h3> <ul class="space-y-2" data-astro-cid-gvamk7ca> ${product.features.map((feature) => renderTemplate`<li class="flex items-center" data-astro-cid-gvamk7ca> <span class="text-blue-600 mr-2" data-astro-cid-gvamk7ca>✓</span> ${feature} </li>`)} </ul> </div> </div>`)} </div> </div> </section> ` })} `;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/whiteboards.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/whiteboards.astro";
const $$url = "/whiteboards";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Whiteboards,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
