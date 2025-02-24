/* empty css                                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cm_g7ecK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR_sO45i.mjs';
export { renderers } from '../../renderers.mjs';

const $$Company = createComponent(($$result, $$props, $$slots) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://lovosis.com/#organization",
        name: NAME,
        url: SITE.baseURL
      },
      {
        "@type": "WebSite",
        "@id": "https://lovosis.com/#website",
        url: SITE.baseURL,
        name: NAME,
        publisher: { "@id": "https://lovosis.com/#organization" },
        inLanguage: "en-US"
      },
      {
        "@type": "ImageObject",
        "@id": IMAGE,
        url: IMAGE,
        width: "200",
        height: "200",
        inLanguage: "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://lovosis.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: { "@id": SITE.baseURL, name: "Home" }
          },
          {
            "@type": "ListItem",
            position: 2,
            item: { "@id": SITE.baseURL, name: "About" }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://lovosis.com/#webpage",
        url: URL,
        name: NAME,
        datePublished: "2025-02-05T11:26:39+00:00",
        dateModified: "2025-12-12T19:17:19+00:00",
        about: { "@id": "https://lovosis.com/#organization" },
        isPartOf: { "@id": "https://lovosis.com/#website" },
        primaryImageOfPage: { "@id": IMAGE },
        inLanguage: "en-US"
      },
      {
        "@type": "Person",
        "@id": URL,
        name: "Lovosis",
        url: URL,
        image: {
          "@type": "ImageObject",
          "@id": URL,
          url: URL,
          caption: NAME,
          inLanguage: "en-US"
        },
        sameAs: [URL],
        worksFor: { "@id": "https://lovosis.com/#organization" }
      },
      {
        "@type": "Article",
        headline: title,
        keywords: "",
        datePublished: "2024-02-05T11:26:39+00:00",
        dateModified: "2025-12-12T19:17:19+00:00",
        author: { "@id": URL, name: "Johns Abraham" },
        publisher: { "@id": "https://lovosis.com/#organization" },
        description: "",
        name: NAME,
        "@id": "https://totaleng.in/#richSnippet",
        isPartOf: { "@id": "https://lovosis.com/#webpage" },
        image: { "@id": IMAGE },
        inLanguage: "en-US",
        mainEntityOfPage: { "@id": "https://lovosis.com=/#webpage" }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Company Profile", "sd": structuredData }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- Hero Section --> <div class="relative h-screen bg-gradient-to-br from-yellow-400 via-blue-500 to-blue-800"> <div class="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div> <div class="container mx-auto px-4 h-full flex flex-col justify-center relative z-10"> <div class="max-w-4xl"> <h1 class="text-6xl font-bold text-white mb-6 leading-tight">Shaping the Future of <span class="text-blue-300">Security Technology</span></h1> <p class="text-xl text-blue-100 max-w-2xl leading-relaxed">Pioneering innovative security solutions since 2001, we're committed to creating a safer world through cutting-edge technology and exceptional service.</p> </div> </div> </div> <!-- Mission & Vision --> <section class="py-24"> <div class="container mx-auto px-4"> <div class="grid md:grid-cols-2 gap-12"> <div class="group"> <div class="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"> <div class="mb-6"> <span class="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">Our Mission</span> </div> <p class="text-gray-700 leading-relaxed text-lg">
To provide innovative and reliable security solutions that protect people, properties, and assets while delivering exceptional value to our customers through cutting-edge technology and superior service.
</p> </div> </div> <div class="group"> <div class="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"> <div class="mb-6"> <span class="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">Our Vision</span> </div> <p class="text-gray-700 leading-relaxed text-lg">
To be the global leader in security technology, setting industry standards for innovation, reliability, and customer satisfaction while contributing to a safer and more secure world.
</p> </div> </div> </div> </div> </section> <!-- Core Values --> <section class="py-24 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-4xl font-bold text-center mb-4">Our Core Values</h2> <p class="text-gray-600 text-center mb-16 max-w-2xl mx-auto">The principles that guide everything we do</p> <div class="grid md:grid-cols-4 gap-8"> ${[
    {
      title: "Innovation",
      icon: "\u{1F680}",
      description: "Constantly pushing boundaries to create cutting-edge solutions"
    },
    {
      title: "Integrity",
      icon: "\u{1F91D}",
      description: "Operating with honesty and transparency in all we do"
    },
    {
      title: "Excellence",
      icon: "\u2B50",
      description: "Striving for the highest quality in every aspect"
    },
    {
      title: "Reliability",
      icon: "\u{1F3AF}",
      description: "Delivering consistent and dependable solutions"
    }
  ].map((value) => renderTemplate`<div class="bg-white p-8 rounded-2xl shadow-lg hover:bg-gradient-to-br hover:from-yellow-400 hover:via-blue-500 hover:to-blue-800 hover:text-white transition-all duration-300 group"> <div class="text-4xl mb-4">${value.icon}</div> <h3 class="text-xl font-bold mb-3 group-hover:text-white">${value.title}</h3> <p class="text-gray-600 group-hover:text-blue-50">${value.description}</p> </div>`)} </div> </div> </section> <!-- Global Presence --> <section class="py-24"> <div class="container mx-auto px-4"> <div class="max-w-3xl mx-auto text-center mb-16"> <h2 class="text-4xl font-bold mb-6">Global Presence</h2> <p class="text-gray-600 text-lg">
With offices and partners across the globe, we provide comprehensive security solutions to clients worldwide, ensuring local support with global expertise.
</p> </div> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg"> <h3 class="text-2xl font-bold mb-6 text-blue-900">Regional Offices</h3> <ul class="space-y-4"> ${[
    "North America - New York, USA",
    "Europe - London, UK",
    "Asia Pacific - Singapore",
    "Middle East - Dubai, UAE"
  ].map((office) => renderTemplate`<li class="flex items-center space-x-3"> <span class="w-2 h-2 bg-blue-500 rounded-full"></span> <span class="text-gray-700">${office}</span> </li>`)} </ul> </div> <div class="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg"> <h3 class="text-2xl font-bold mb-6 text-blue-900">Support Centers</h3> <ul class="space-y-4"> ${[
    "Technical Support Hub - California, USA",
    "R&D Center - Tokyo, Japan",
    "Manufacturing Facility - Shenzhen, China",
    "Customer Service Center - Berlin, Germany"
  ].map((center) => renderTemplate`<li class="flex items-center space-x-3"> <span class="w-2 h-2 bg-blue-500 rounded-full"></span> <span class="text-gray-700">${center}</span> </li>`)} </ul> </div> </div> </div> </section> <!-- Contact CTA --> <section class="py-24 bg-gradient-to-br from-blue-900 to-blue-800"> <div class="container mx-auto px-4 text-center"> <h2 class="text-4xl font-bold text-white mb-6">Ready to Secure Your Future?</h2> <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
Let's discuss how we can help protect what matters most to you.
</p> <a href="/contact" class="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-900 font-bold hover:bg-blue-50 transition-all duration-300">
Get Started
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> </section> </main> ` })}`;
}, "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/about/company.astro", void 0);

const $$file = "C:/Users/Adeeb/Downloads/dahua-2025-main/dahua-2025-main/src/pages/about/company.astro";
const $$url = "/about/company";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Company,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
