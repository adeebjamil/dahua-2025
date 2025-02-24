/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR_sO45i.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Subscribe to Our Newsletter", "data-astro-cid-og54zrcn": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" data-astro-cid-og54zrcn> <div class="container mx-auto px-4 py-20" data-astro-cid-og54zrcn> <div class="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl" data-astro-cid-og54zrcn> <h1 class="text-5xl font-bold text-white mb-6 text-center" data-astro-cid-og54zrcn>
Stay Ahead of the Curve
</h1> <p class="text-xl text-white/90 text-center mb-12" data-astro-cid-og54zrcn>
Join our newsletter and get weekly insights on the latest tech trends, design inspiration, and exclusive updates.
</p> <form class="space-y-6" onsubmit="event.preventDefault()" data-astro-cid-og54zrcn> <div class="flex flex-col md:flex-row gap-4" data-astro-cid-og54zrcn> <input type="email" placeholder="Enter your email" class="flex-1 px-6 py-4 rounded-full bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition" data-astro-cid-og54zrcn> <button class="px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-opacity-90 transition transform hover:scale-105" data-astro-cid-og54zrcn>
Subscribe Now
</button> </div> </form> <div class="mt-16" data-astro-cid-og54zrcn> <p class="text-white/80 text-center mb-6" data-astro-cid-og54zrcn>Trusted by innovative teams worldwide</p> <div class="flex justify-center items-center gap-8 flex-wrap" data-astro-cid-og54zrcn> <div class="w-16 h-16 bg-white/20 rounded-full animate-pulse" data-astro-cid-og54zrcn></div> <div class="w-16 h-16 bg-white/20 rounded-full animate-pulse delay-100" data-astro-cid-og54zrcn></div> <div class="w-16 h-16 bg-white/20 rounded-full animate-pulse delay-200" data-astro-cid-og54zrcn></div> </div> </div> <div class="mt-12 border-t border-white/20 pt-8" data-astro-cid-og54zrcn> <div class="flex flex-col gap-4 text-center" data-astro-cid-og54zrcn> <p class="text-white/90" data-astro-cid-og54zrcn>✨ Weekly curated insights</p> <p class="text-white/90" data-astro-cid-og54zrcn>🔒 No spam, unsubscribe anytime</p> <p class="text-white/90" data-astro-cid-og54zrcn>🎯 Tailored to your interests</p> </div> </div> </div> </div> </main> ` })} `;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/newsletter.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/newsletter.astro";
const $$url = "/newsletter";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Newsletter,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
