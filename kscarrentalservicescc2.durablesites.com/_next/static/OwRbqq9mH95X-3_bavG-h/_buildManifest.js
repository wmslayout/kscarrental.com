self.__BUILD_MANIFEST = function(s, c, e, t, a) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/:nextInternalLocale(en|de|es|fr|it|nl|pt)/robots.txt",
                destination: "/:nextInternalLocale/api/robots"
            }, {
                source: "/:nextInternalLocale(en|de|es|fr|it|nl|pt)/sitemap",
                destination: "/:nextInternalLocale/api/sitemap"
            }],
            fallback: []
        },
        "/404": ["static/chunks/pages/404-05b27410f3eae19c.js"],
        "/_error": ["static/chunks/pages/_error-4b040d3f3b1d21a7.js"],
        "/blog": [s, t, c, e, "static/chunks/pages/blog-bebe6a127d571842.js"],
        "/blog/[slug]": [s, t, c, e, "static/chunks/pages/blog/[slug]-aaf78408b32d9725.js"],
        "/checkout/[...idInvoice]": [s, t, c, e, "static/chunks/pages/checkout/[...idInvoice]-c3a4c85f5eb1f7ef.js"],
        "/contact-form": [s, t, "static/css/26a1a5c22ee4e247.css", "static/chunks/5676-a1560051dc3b6202.js", a, "static/chunks/9198-eab6c1a5f82738be.js", c, e, "static/chunks/pages/contact-form-c82faf9e4808e891.js"],
        "/error/404": [s, c, e, "static/chunks/pages/error/404-2feb60d86a925f34.js"],
        "/error/500": [s, c, e, "static/chunks/pages/error/500-09269527a29744e3.js"],
        "/invoice/print/[idInvoice]": ["static/chunks/65291039-051d022aac3405c9.js", "static/chunks/13b8a98b-a3f7f569f0b8daf8.js", "static/chunks/48c79778-05ed96f4e42f4830.js", s, t, a, "static/chunks/8419-500edb9815f9d2ab.js", c, e, "static/chunks/pages/invoice/print/[idInvoice]-b4b1cca23b278691.js"],
        "/invoice/[idInvoice]": [s, t, c, e, "static/chunks/pages/invoice/[idInvoice]-478752874acadbfe.js"],
        "/unpublished": [s, c, e, "static/chunks/pages/unpublished-cfe68df18a27136b.js"],
        "/[[...slug]]": [s, c, e, "static/chunks/pages/[[...slug]]-5e2f6f948c3fe435.js"],
        sortedPages: ["/404", "/_app", "/_error", "/blog", "/blog/[slug]", "/checkout/[...idInvoice]", "/contact-form", "/error/404", "/error/500", "/invoice/print/[idInvoice]", "/invoice/[idInvoice]", "/unpublished", "/[[...slug]]"]
    }
}("static/chunks/4590-8e7742d8552824fb.js", "static/chunks/1942-0be84c831e7820e2.js", "static/css/6ad5f70cb56137d7.css", "static/chunks/120-9aa0e12b8112f0af.js", "static/chunks/7333-34cd0b2f6075c93f.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();