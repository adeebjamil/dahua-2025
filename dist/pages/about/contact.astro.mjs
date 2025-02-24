/* empty css                                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us", "data-astro-cid-bhtx34az": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900" data-astro-cid-bhtx34az> <!-- Hero Section --> <section class="relative py-20" data-astro-cid-bhtx34az> <div class="container mx-auto px-6" data-astro-cid-bhtx34az> <h1 class="text-6xl font-bold text-center text-white mb-8" data-astro-cid-bhtx34az>Get in Touch</h1> <p class="text-xl text-gray-300 text-center max-w-2xl mx-auto" data-astro-cid-bhtx34az>
Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
</p> </div> </section> <!-- Contact Grid --> <section class="relative py-12" data-astro-cid-bhtx34az> <div class="container mx-auto px-6" data-astro-cid-bhtx34az> <div class="grid lg:grid-cols-2 gap-12" data-astro-cid-bhtx34az> <!-- Contact Form --> <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl" data-astro-cid-bhtx34az> <form class="space-y-6" data-astro-cid-bhtx34az> <div class="relative" data-astro-cid-bhtx34az> <input type="text" id="name" class="w-full bg-white/5 border border-gray-400/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" placeholder=" " data-astro-cid-bhtx34az> <label for="name" class="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none" data-astro-cid-bhtx34az>
Your Name
</label> </div> <div class="relative" data-astro-cid-bhtx34az> <input type="email" id="email" class="w-full bg-white/5 border border-gray-400/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" placeholder=" " data-astro-cid-bhtx34az> <label for="email" class="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none" data-astro-cid-bhtx34az>
Email Address
</label> </div> <div class="relative" data-astro-cid-bhtx34az> <textarea id="message" rows="5" class="w-full bg-white/5 border border-gray-400/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" placeholder=" " data-astro-cid-bhtx34az></textarea> <label for="message" class="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none" data-astro-cid-bhtx34az>
Your Message
</label> </div> <button class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105" data-astro-cid-bhtx34az>
Send Message
</button> </form> </div> <!-- Contact Info --> <div class="space-y-8" data-astro-cid-bhtx34az> ${[
    {
      title: "Office Location",
      content: "123 Innovation Street, Tech Valley, CA 94043",
      icon: "\u{1F3E2}"
    },
    {
      title: "Email Us",
      content: "hello@company.com",
      icon: "\u{1F4E7}"
    },
    {
      title: "Call Us",
      content: "+1 (555) 123-4567",
      icon: "\u{1F4F1}"
    }
  ].map((item) => renderTemplate`<div class="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300" data-astro-cid-bhtx34az> <span class="text-4xl mb-4 block" data-astro-cid-bhtx34az>${item.icon}</span> <h3 class="text-xl font-bold text-white mb-2" data-astro-cid-bhtx34az>${item.title}</h3> <p class="text-gray-300" data-astro-cid-bhtx34az>${item.content}</p> </div>`)} <!-- Social Links --> <div class="flex justify-start space-x-4 mt-8" data-astro-cid-bhtx34az> ${[
    { icon: "fab fa-twitter", url: "#" },
    { icon: "fab fa-linkedin", url: "#" },
    { icon: "fab fa-github", url: "#" },
    { icon: "fab fa-instagram", url: "#" }
  ].map((social) => renderTemplate`<a${addAttribute(social.url, "href")} class="text-white hover:text-purple-400 transition-colors" data-astro-cid-bhtx34az> <i${addAttribute(`${social.icon} text-2xl`, "class")} data-astro-cid-bhtx34az></i> </a>`)} </div> </div> </div> </div> </section> </main> ` })}  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/about/contact.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/about/contact.astro";
const $$url = "/about/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
