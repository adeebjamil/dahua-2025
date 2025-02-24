/* empty css                                           */
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR_sO45i.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Video = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Video Gallery", "data-astro-cid-mnpmyww2": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-br from-gray-900 to-blue-900 py-20" data-astro-cid-mnpmyww2> <div class="container mx-auto px-4" data-astro-cid-mnpmyww2> <h1 class="text-4xl md:text-5xl font-bold text-white text-center mb-8" data-astro-cid-mnpmyww2>Video Gallery</h1> <div class="max-w-xl mx-auto" data-astro-cid-mnpmyww2> <div class="relative" data-astro-cid-mnpmyww2> <input type="search" placeholder="Search videos..." class="w-full px-6 py-4 bg-white/10 backdrop-blur-md rounded-full text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500" data-astro-cid-mnpmyww2> <button class="absolute right-4 top-1/2 -translate-y-1/2" data-astro-cid-mnpmyww2> <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mnpmyww2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-mnpmyww2></path> </svg> </button> </div> </div> </div> </section>  <section class="py-8 bg-gray-100" data-astro-cid-mnpmyww2> <div class="container mx-auto px-4" data-astro-cid-mnpmyww2> <div class="flex overflow-x-auto gap-4 pb-4" data-astro-cid-mnpmyww2> ${["All Videos", "Product Tutorials", "Installation Guides", "Tech Updates", "Case Studies"].map((category) => renderTemplate`<button class="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all whitespace-nowrap" data-astro-cid-mnpmyww2> ${category} </button>`)} </div> </div> </section>  <section class="py-16" data-astro-cid-mnpmyww2> <div class="container mx-auto px-4" data-astro-cid-mnpmyww2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-mnpmyww2> ${[
    {
      title: "Network Camera Installation Guide",
      thumbnail: "/videos/thumbnails/install-guide.jpg",
      duration: "15:24",
      views: "2.5K",
      date: "2024-01-15",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1"
    },
    {
      title: "HDCVI System Setup Tutorial",
      thumbnail: "/videos/thumbnails/hdcvi-setup.jpg",
      duration: "08:45",
      views: "1.8K",
      date: "2024-01-10",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2"
    },
    {
      title: "Smart IoT Solutions Overview",
      thumbnail: "/videos/thumbnails/iot-overview.jpg",
      duration: "12:30",
      views: "3.2K",
      date: "2024-01-05",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3"
    }
  ].map((video) => renderTemplate`<div class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all" data-astro-cid-mnpmyww2> <div class="relative" data-astro-cid-mnpmyww2> <img${addAttribute(video.thumbnail, "src")}${addAttribute(video.title, "alt")} class="w-full aspect-video object-cover" data-astro-cid-mnpmyww2> <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" data-astro-cid-mnpmyww2> <button class="p-4 bg-white/20 rounded-full backdrop-blur-sm transform hover:scale-110 transition-transform"${addAttribute(`openVideo('${video.videoUrl}')`, "onclick")} data-astro-cid-mnpmyww2> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mnpmyww2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" data-astro-cid-mnpmyww2></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-mnpmyww2></path> </svg> </button> </div> <span class="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-sm rounded" data-astro-cid-mnpmyww2> ${video.duration} </span> </div> <div class="p-4" data-astro-cid-mnpmyww2> <h3 class="text-lg font-semibold mb-2" data-astro-cid-mnpmyww2>${video.title}</h3> <div class="flex items-center justify-between text-sm text-gray-600" data-astro-cid-mnpmyww2> <span data-astro-cid-mnpmyww2>${video.views} views</span> <span data-astro-cid-mnpmyww2>${new Date(video.date).toLocaleDateString()}</span> </div> </div> </div>`)} </div> </div> </section>  <div id="videoModal" class="fixed inset-0 bg-black/90 hidden z-50" data-astro-cid-mnpmyww2> <div class="absolute top-4 right-4" data-astro-cid-mnpmyww2> <button onclick="closeVideo()" class="text-white hover:text-gray-300" data-astro-cid-mnpmyww2> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mnpmyww2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-mnpmyww2></path> </svg> </button> </div> <div class="container mx-auto px-4 h-full flex items-center justify-center" data-astro-cid-mnpmyww2> <div class="w-full max-w-4xl aspect-video" data-astro-cid-mnpmyww2> <iframe id="videoPlayer" class="w-full h-full" frameborder="0" allowfullscreen data-astro-cid-mnpmyww2></iframe> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/video.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/video.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/video.astro";
const $$url = "/video";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Video,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
