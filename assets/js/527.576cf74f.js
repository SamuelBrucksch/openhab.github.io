(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{841:function(e,t,n){"use strict";n.r(t);var o=n(1),a=Object(o.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("p",[e._v("Let me start by saying a word about this new blog: this post is going to break away from announcements invariably made by Kai 😄 - in fact, it's not even about home automation at all... and that's fine! This space is also for you, the community, and is aimed at providing a new front-and-center communication tool besides "),n("a",{attrs:{href:"http://community.openhab.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("community.openhab.org"),n("OutboundLink")],1),e._v(" for anything openHAB-related which might be worthwhile or interesting to share. There is an easy-to-use editor to help guests write content even if they don't have a GitHub account or aren't familiar with Git; so if you want to contribute a post, just get in touch and we'll make it happen!")]),e._v(" "),n("p",[e._v("I'm thrilled to kickstart this new influx of content by giving you an overview of this new website, how it's done (I'll try to keep it interesting if you're not into web development!) and how it came to be.")]),e._v(" "),e._m(0),e._v(" "),n("p",[e._v("The discussion started in February among the openHAB Foundation members and was originally about a website redesign for the main home page, to give openHAB a fresh and modern appeal to newcomers. It quickly evolved into a debate about which kinds of web technologies to use - there are indeed many possible approaches these days:")]),e._v(" "),n("ul",[n("li",[e._v("Pages rendered by a server using technologies like PHP or servlets (openHAB's "),n("router-link",{attrs:{to:"/docs/configuration/ui/basic/"}},[e._v("Basic UI")]),e._v(" or traditional CMS like WordPress or Joomla are examples of this architecture). Having dynamic client-side features are possible with this approach but need to be added on top with another JavaScript framework and/or plugins;")],1),e._v(" "),n("li",[e._v("A "),n("em",[e._v("Single Page Application")]),e._v(" or SPA where most or all of the rendering is done in the browser using a modern web application framework like Angular, React or Vue.js - for example, GMail, "),n("router-link",{attrs:{to:"/docs/configuration/paperui.html"}},[e._v("Paper UI")]),e._v(" and "),n("router-link",{attrs:{to:"/docs/configuration/habpanel.html"}},[e._v("HABPanel")]),e._v(" are SPAs. These feel usually very snappy and \"app-like\", not requiring page reloads, and allow more dynamic and interactive features... but they're not optimal for websites because they doesn't play well with search engines, since the initial page is an empty shell until the JavaScript app is fully loaded (Google and others can interpret JavaScript when indexing now, but it's still kind of hit-and-miss);")],1),e._v(" "),e._m(1),e._v(" "),n("li",[e._v("A static site generator like "),n("a",{attrs:{href:"https://gohugo.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hugo"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://hexo.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hexo"),n("OutboundLink")],1),e._v(" or "),n("a",{attrs:{href:"https://jekyllrb.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jekyll"),n("OutboundLink")],1),e._v(", the latter being used in GitHub Pages powering the venerable "),n("a",{attrs:{href:"http://docs.openhab.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("docs.openhab.org"),n("OutboundLink")],1),e._v(" and the former website, prebuilds all pages from markup and templates; these are great for content-centric websites like documentation, load fast since nothing is dynamically-rendered, and don't require any kind of backend application server so they can be hosted on a content delivery network (CDN);")]),e._v(" "),n("li",[e._v("A relatively new trend is to combine both advantages of a server-less static site generators and isomorphic rendering by prerendering all pages as static files with the initial content at build time with the SSR capability of a web framework, and load the same web framework on the client to take over once the page is loaded to allow dynamic web app components and single-page navigation. This is implemented by "),n("a",{attrs:{href:"https://nextjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Next.js"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nuxt.js"),n("OutboundLink")],1),e._v(" or "),n("a",{attrs:{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gatsby"),n("OutboundLink")],1),e._v(", among others.")])]),e._v(" "),n("p",[e._v("Then, about one month and a half ago, as we were discussing Nuxt, I learned about "),n("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),n("OutboundLink")],1),e._v(" and suggested considering it as well.")]),e._v(" "),n("img",{staticClass:"img-responsive",attrs:{src:"/uploads/vuepress-idea.png",alt:""}}),e._v(" "),n("p",[e._v("VuePress was started just a few weeks before by Evan You, the Vue.js project founder, with the intent to create a simple new generator for their own subprojects' documentation. Despite being literally days old, it was already gaining traction and popularity very quickly, and rightly so: it has a great responsive default theme for technical documentation - you might recognize it here since only minor modifications were made - as well as a good feature set with convincing "),n("a",{attrs:{href:"https://vuepress.vuejs.org/guide/#why-not",target:"_blank",rel:"noopener noreferrer"}},[e._v("advantages"),n("OutboundLink")],1),e._v(' over the abovementioned alternatives. Most interestingly, it seemed it could easily allow killing two birds with one stone: being able to give openHAB a modern new "marketing" front, and easily giving the documentation pages\' a fresh look in the process too, improving the navigation and giving them the new coat of paint they needed - all with the same tool.')]),e._v(" "),n("p",[e._v("I was immediately convinced and hacked together a proof-of-concept in a few hours to check whether it could handle the 400+ pages of the sizeable openHAB documentation... and it actually went very well. The go-ahead came shortly after: the new website was going to be built with VuePress.")]),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("The openHAB documentation has its own "),n("a",{attrs:{href:"https://github.com/openhab/openhab-docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("repository"),n("OutboundLink")],1),e._v(", with a carefully crafted process to gather them from about half a dozen other repositories - Eclipse SmartHome, openHAB 1 & 2 addons, and repositories for specific add-ons or integrations like the Z-Wave binding or the Alexa skill - to be combined into a single site, which is far from trivial and no small feat. It was out of the question to disrupt this process (while it's not perfect, it works, and "),n("a",{attrs:{href:"https://github.com/openhab/openhab-docs/issues/665",target:"_blank",rel:"noopener noreferrer"}},[e._v("will be made better"),n("OutboundLink")],1),e._v(") to accomodate the new website. Instead, my approach was to take the content out of the openhab-docs repository as is, keeping the documentation workflow oblivious of the website, and manipulate it to include it in VuePress as a separate subsequent step - improvements and streamlining of this resulting 2-step process would be made afterwards.")]),e._v(" "),n("p",[e._v("This is the purpose of the "),n("a",{attrs:{href:"https://github.com/openhab/website/blob/master/prepare-docs.rb",target:"_blank",rel:"noopener noreferrer"}},[e._v("prepare-docs"),n("OutboundLink")],1),e._v(" script, run as part of every build before the actual compile phase generating the web app and static files: this script clones the docs repository in a temporary location, moves the content into the final structure, removes Jekyll-specific things, fixes some links & content, and takes care of incompatibilities between Jekyll's and VuePress' Markdown renderers; it also determines the original location of the documents (for valid "),n("em",[e._v("Edit on GitHub")]),e._v(" links to the source), and adds logos & deprecation warnings to pages, among other things. Finally, it enumerates the add-on pages by type, creating files included by the main config file in order to build the sidebar navigation.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("One of the great strengths of VuePress is that it allows leveraging Vue.js by either taking over the whole layout of a page, like the home page or the blog, or rather embedding components inside Markdown content, giving pages some dynamic features where needed, like on the "),n("router-link",{attrs:{to:"/download/"}},[e._v("Download")]),e._v(" and "),n("router-link",{attrs:{to:"/addons/"}},[e._v("Add-ons")]),e._v(" pages.")],1),e._v(" "),n("p",[e._v("Vue.js is certainly one of the most trending web app frameworks today, and like its competitors it includes a component system where pages are a composition of increasingly specialized, self-contained "),n("a",{attrs:{href:"https://github.com/openhab/website/blob/master/.vuepress/components/",target:"_blank",rel:"noopener noreferrer"}},[e._v("components"),n("OutboundLink")],1),e._v(". For example, the source of the "),n("a",{attrs:{href:"https://github.com/openhab/website/blob/master/.vuepress/components/HomePage.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("home page"),n("OutboundLink")],1),e._v(' is basically a stack of sub-components, one for each section - making it trivial to move them around or inserting a new one -, and those sections may also in turn include other components (like the animated icons in the "Why openHAB" section or the Twitter timeline).')]),e._v(" "),n("p",[e._v("I have only months of experience with Vue, but what I like the most about it is the ability to combine the markup template, styling and scripting of a component inside a single "),n("em",[e._v(".vue")]),e._v(" file, while keeping the three aspects separate - each "),n("em",[e._v("Component.vue")]),e._v(" file has a distinct "),n("code",[e._v("<template>")]),e._v(" section, a "),n("code",[e._v("<style>")]),e._v(" section and a "),n("code",[e._v("<script>")]),e._v(" section. It's a very clean design, and the syntax is concise too: for example, a popular feature of this website is the "),n("router-link",{attrs:{to:"/about/showcase.html"}},[e._v("Showcase & How-tos")]),e._v(" page, and the "),n("a",{attrs:{href:"https://github.com/openhab/website/blob/master/.vuepress/components/CommunityTutorials.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("component behind it"),n("OutboundLink")],1),e._v(" is not that complex really - if you take out the styling, it's actually only 15 lines of markup and about 30 lines of scripting.")],1),e._v(" "),n("p",[e._v("There's also a great devtools extension to help figuring out what's happening while you're developing:")]),e._v(" "),n("img",{staticClass:"img-responsive",attrs:{src:"/uploads/vue-devtools.png",alt:""}}),e._v(" "),n("p",[e._v('Worth mentioning is, VuePress makes the metadata (including "front matter") on all the pages of the site available to all components: this makes it easy to filter and manipulate collections of pages - the '),n("a",{attrs:{href:"https://github.com/openhab/website/blob/master/.vuepress/components/BlogPostList.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog post index"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://github.com/openhab/website/blob/master/.vuepress/components/AddonSearch.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("add-ons browser"),n("OutboundLink")],1),e._v(" or even the "),n("a",{attrs:{href:"https://raw.githubusercontent.com/openhab/website/master/about/events.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("event list"),n("OutboundLink")],1),e._v(" (which is not a component but simply "),n("a",{attrs:{href:"https://v1.vuejs.org/guide/list.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("v-for")]),n("OutboundLink")],1),e._v(" loops in the actual page) rely on this ability.")]),e._v(" "),e._m(5),e._v(" "),n("p",[e._v("Thanks to various new techniques, the performance of modern web frameworks has improved a great deal in the last generation, and Vue.js already produces applications which are very fast on their own.")]),e._v(" "),n("p",[e._v("As mentioned before, all pages are pre-rendered in two versions: first, a full static page, so that when you initially land on a particular page, its actual content will already be there as pre-rendered HTML, providing fast initial loading and giving search engine bots something to index. When you navigate away from that first page with a Javascript-capable browser though, Vue.js running on the client will download another version of the new page's content, a small .js file - a webpack bundle technically -, and execute it to replace only the relevant area.")]),e._v(" "),n("p",[e._v("On top of that, browsers are nowadays expected to be fairly up-to-date, and they pack all kinds of more of less recent technologies which all come into play with this new website to give you the best possible navigation experience.")]),e._v(" "),n("p",[e._v("One of them is "),n("a",{attrs:{href:"https://w3c.github.io/resource-hints/",target:"_blank",rel:"noopener noreferrer"}},[e._v("resource hinting"),n("OutboundLink")],1),e._v(": when you land on one of the site's pages, meta tags will inform your browser of both essential styles and scripts to "),n("strong",[e._v("preload")]),e._v(" early with high priority, but also tell it to "),n("strong",[e._v("prefetch")]),e._v(" the text of "),n("em",[e._v("all")]),e._v(" the pages of the site, meaning it will schedule them to load with the lowest priority ("),n("a",{attrs:{href:"https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf",target:"_blank",rel:"noopener noreferrer"}},[e._v("basically when idle"),n("OutboundLink")],1),e._v(" - it can also choose not to prefetch at all) won't immediately execute them, just keep them handy in case they're needed.")]),e._v(" "),n("p",[e._v("That's right: the whole text of every page on the site is potentially loaded in the background by your browser, when it deems it appropriate, to speed up navigation. That's why on "),n("a",{attrs:{href:"https://caniuse.com/#feat=link-rel-prefetch",target:"_blank",rel:"noopener noreferrer"}},[e._v("supported browsers"),n("OutboundLink")],1),e._v(", switching between pages seems nearly instantaneous. Since the site has 480 bundles or so (as a result of about 450 pages), this means each of these 480 bundles will be prefetched by the browser! You might ask, is it a good idea? A few years ago, this would have been crazy indeed, but here's how it actually performs on my pretty average DSL connection:")]),e._v(" "),n("img",{staticClass:"img-responsive",attrs:{src:"/uploads/openhab-waterfall2.png",alt:""}}),e._v(" "),e._m(6),e._v(" "),n("p",[e._v('Almost five hundred HTTP requests though, for each visit, won\'t all these requests crush the servers? And how does it all happen in less than 2 seconds? Here\'s the trick: the "h2" in the "protocol" column above means the site is using '),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/HTTP/2",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP/2"),n("OutboundLink")],1),e._v(", which has been approved as a standard in 2015, and which "),n("a",{attrs:{href:"https://caniuse.com/#feat=http2",target:"_blank",rel:"noopener noreferrer"}},[e._v("virtually every browser"),n("OutboundLink")],1),e._v(" supports now. And HTTP/2 has "),n("a",{attrs:{href:"https://hpbn.co/http2/#request-and-response-multiplexing",target:"_blank",rel:"noopener noreferrer"}},[e._v("request and response multiplexing"),n("OutboundLink")],1),e._v(", therefore not only it reuses the same underlying TCP connection for all requests (see how they have the same Connection ID in the screenshot above), but requests-responses pairs are also not necessarily in sequence but can be handled concurrently, and may arrive out of order.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://http2.akamai.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Akamai's site on HTTP/2"),n("OutboundLink")],1),e._v(" gives a fairly good overview of the protocol's benefits; especially check out the "),n("a",{attrs:{href:"https://http2.akamai.com/demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo"),n("OutboundLink")],1),e._v(" - if you open the developer tools Network tab while testing it, you'll notice all HTTP/1.1 requests are made and received sequentially, while HTTP/2 requests are happening in parallel and received in any order.")]),e._v(" "),n("p",[e._v("Combined with other features like header compression, it makes the background prefetching of those 480 files a matter of seconds; chances are, it's finished before you navigate away from the first page. And even if it's not, since you're not refreshing the page - remember, the application is a SPA - it's going to continue in the background when the browser is idle, while the assets needed to actually render the next page will always take priority. Plus, since they're static files, they're put in the browser cache, saving it from having to download them in full again. This means subsequent page loads are even quicker since it only has to check whether the cached versions are still up-to-date:")]),e._v(" "),n("img",{staticClass:"img-responsive",attrs:{src:"/uploads/openhab-waterfall3.png",alt:""}}),e._v(" "),n("small",[e._v("Small HTTP 304 responses on subsequent visits, indicating the files have not been modified and telling the browser it may reuse the version it has cached")]),e._v(" "),e._m(7),e._v(" "),n("p",[e._v("With the switch to the new web stack, we've also changed our hosting platform and are now using "),n("a",{attrs:{href:"https://www.netlify.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Netlify"),n("OutboundLink")],1),e._v(", giving far more control over the deployment than GitHub pages (which by the way will still continue hosting "),n("a",{attrs:{href:"http://docs.openhab.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("docs.openhab.org"),n("OutboundLink")],1),e._v(" for a while!).")]),e._v(" "),n("img",{staticClass:"img-responsive",attrs:{src:"/uploads/openhab-netlify2.png",alt:""}}),e._v(" "),n("p",[e._v("A critically useful benefit is to permit running custom scripts, most importantly the "),n("em",[e._v("prepare-docs")]),e._v(" script described above, as part of the continous integration build and deployment. "),n("a",{attrs:{href:"https://app.netlify.com/sites/openhab-website/deploys/5b0fc101dd6a5407227bbf5a",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here's what a typical build output looks like"),n("OutboundLink")],1),e._v(".\nAlso nice is the ability to see the end result of every pull request and commit with deploy previews, each being given its own URL and linked in the relevant GitHub pages. A free "),n("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Let's Encrypt"),n("OutboundLink")],1),e._v(" certificate for the "),n("code",[e._v("openhab.org")]),e._v(" domain for is managed automatically and its renewal every 3 months is taken care of without intervention.")]),e._v(" "),n("p",[e._v("We've also adopted their CMS tool for static sites and Git, "),n("a",{attrs:{href:"https://www.netlifycms.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Netlify CMS"),n("OutboundLink")],1),e._v(", for selected parts on the website (blog posts and events), to allow adding this types of content with a user-friendly UI and without requiring a GitHub account. It works great with VuePress generated pages. If you want to get access to contribute, just contact the openHAB Foundation; regular pull requests to the "),n("a",{attrs:{href:"https://github.com/openhab/website",target:"_blank",rel:"noopener noreferrer"}},[e._v("openhab/website repository"),n("OutboundLink")],1),e._v(" are also possible and appreciated!")]),e._v(" "),e._m(8),e._v(" "),n("p",[e._v("I hope you'll enjoy the new website, and that you'll see it as a step in the right direction, making openHAB more appealing to new potential users currently looking for a smart home automation platform, as well as being more friendly to veterans while looking up info in the documentation.")]),e._v(" "),n("p",[e._v("There is still work to do, like re-introducing full-text search, fixing the remaining broken links and simplifying the documentation gathering process - if you have further ideas or want to help, feel free to chime in in the forums or on GitHub!")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"choosing-the-right-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#choosing-the-right-tool","aria-hidden":"true"}},[this._v("#")]),this._v(" Choosing the right tool")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("To solve the above problem, modern web frameworks now all offer "),t("em",[this._v("isomorphic")]),this._v(" or "),t("em",[this._v("server-side rendering")]),this._v(" (SSR), allowing the initial page load to be rendered on a backend Node.js server and also boot the JavaScript app (often a SPA) client-side, by the same framework, using the same shared code. The drawback is that it requires that backend server to keep running in order to serve the pages dynamically;")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"migrating-or-not-the-documentation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrating-or-not-the-documentation","aria-hidden":"true"}},[this._v("#")]),this._v(" Migrating (or not) the documentation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All this migrated and generated content is not checked in the website's repository (using directives in "),t("code",[this._v(".gitignore")]),this._v(" files) to avoid duplicates and outdated content. This is why the documentation is not actually being migrated: it continues to be maintained separately in its own repository, keeping its own existing issues and pull requests trackers, and is simply prepared and included into the website during the build. Over time, some of the more specific find & replaces in the "),t("em",[this._v("prepare-docs")]),this._v(" script tackling a specific problem with some page will be eventually fixed at the source and removed.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"combining-markdown-rendering-vue-js-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#combining-markdown-rendering-vue-js-components","aria-hidden":"true"}},[this._v("#")]),this._v(" Combining Markdown rendering & Vue.js components")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"optimizing-for-navigation-performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optimizing-for-navigation-performance","aria-hidden":"true"}},[this._v("#")]),this._v(" Optimizing for navigation performance")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("I've highlighted what's noteworthy in the screenshot above; first, take a look at the status bar: since the textual content of the pages is highly compressible, and Gzip compression is enabled, the "),t("em",[this._v("whole website")]),this._v(" (all 450 pages of it excluding images) amounts to a mere 2 MB download... pretty acceptable these days. Just try loading your average newspaper website's home page and monitor how much you download - 2 MB are not a lot 😉.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"new-hosting-and-continuous-deployments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-hosting-and-continuous-deployments","aria-hidden":"true"}},[this._v("#")]),this._v(" New hosting and continuous deployments")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[this._v("#")]),this._v(" Conclusion")])}],!1,null,null,null);t.default=a.exports}}]);