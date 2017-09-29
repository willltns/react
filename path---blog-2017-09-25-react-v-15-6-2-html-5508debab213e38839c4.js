webpackJsonp([0x5dd8977cccf7],{"./node_modules/json-loader/index.js!./.cache/json/blog-2017-09-25-react-v-15-6-2-html.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>Today we’re sending out React 15.6.2. In 15.6.1, we shipped a few fixes for change events and inputs that had some unintended consequences. Those regressions have been ironed out, and we’ve also included a few more fixes to improve the stability of React across all browsers.</p>\n<p>Additionally, 15.6.2 adds support for the <a href="https://developers.google.com/web/updates/2017/03/chrome-58-media-updates#controlslist"><code>controlList</code></a> attribute, and CSS columns are no longer appended with a <code>px</code> suffix.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>We recommend using <a href="https://yarnpkg.com/">Yarn</a> or <a href="https://www.npmjs.com/">npm</a> for managing front-end dependencies. If you’re new to package managers, the <a href="https://yarnpkg.com/en/docs/getting-started">Yarn documentation</a> is a good place to get started.</p>\n<p>To install React with Yarn, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>yarn add react@^15.6.2 react-dom@^15.6.2\n</code></pre>\n      </div>\n<p>To install React with npm, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save react@^15.6.2 react-dom@^15.6.2\n</code></pre>\n      </div>\n<p>We recommend using a bundler like <a href="https://webpack.js.org/">webpack</a> or <a href="http://browserify.org/">Browserify</a> so you can write modular code and bundle it together into small packages to optimize load time.</p>\n<p>Remember that by default, React runs extra checks and provides helpful warnings in development mode. When deploying your app, make sure to <a href="/docs/optimizing-performance.html#use-the-production-build">use the production build</a>.</p>\n<p>In case you don’t use a bundler, we also provide pre-built bundles in the npm packages which you can <a href="/docs/installation.html#using-a-cdn">include as script tags</a> on your page:</p>\n<ul>\n<li><strong>React</strong><br/>\nDev build with warnings: <a href="https://unpkg.com/react@15.6.2/dist/react.js">react/dist/react.js</a><br/>\nMinified build for production: <a href="https://unpkg.com/react@15.6.2/dist/react.min.js">react/dist/react.min.js</a><br/></li>\n<li><strong>React with Add-Ons</strong><br/>\nDev build with warnings: <a href="https://unpkg.com/react@15.6.2/dist/react-with-addons.js">react/dist/react-with-addons.js</a><br/>\nMinified build for production: <a href="https://unpkg.com/react@15.5.0/dist/react-with-addons.min.js">react/dist/react-with-addons.min.js</a><br/></li>\n<li><strong>React DOM</strong> (include React in the page before React DOM)<br/>\nDev build with warnings: <a href="https://unpkg.com/react-dom@15.6.2/dist/react-dom.js">react-dom/dist/react-dom.js</a><br/>\nMinified build for production: <a href="https://unpkg.com/react-dom@15.6.2/dist/react-dom.min.js">react-dom/dist/react-dom.min.js</a><br/></li>\n<li><strong>React DOM Server</strong> (include React in the page before React DOM Server)<br/>\nDev build with warnings: <a href="https://unpkg.com/react-dom@15.6.2/dist/react-dom-server.js">react-dom/dist/react-dom-server.js</a><br/>\nMinified build for production: <a href="https://unpkg.com/react-dom@15.6.2/dist/react-dom-server.min.js">react-dom/dist/react-dom-server.min.js</a><br/></li>\n</ul>\n<p>We’ve also published version <code>15.6.2</code> of <code>react</code> and <code>react-dom</code> on npm, and the <code>react</code> package on bower.</p>\n<hr>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h2 id="1562-september-25-2017"><a href="#1562-september-25-2017" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>15.6.2 (September 25, 2017)</h2>\n<h3 id="all-packages"><a href="#all-packages" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>All Packages</h3>\n<ul>\n<li>Switch from BSD + Patents to MIT license</li>\n</ul>\n<h3 id="react-dom"><a href="#react-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React DOM</h3>\n<ul>\n<li>Fix a bug where modifying <code>document.documentMode</code> would trigger IE detection in other browsers, breaking change events. (<a href="https://github.com/aweary">@aweary</a> in <a href="https://github.com/facebook/react/pull/10032">#10032</a>)</li>\n<li>CSS Columns are treated as unitless numbers. (<a href="https://github.com/aweary">@aweary</a> in <a href="https://github.com/facebook/react/pull/10115">#10115</a>)</li>\n<li>Fix bug in QtWebKit when wrapping synthetic events in proxies. (<a href="https://github.com/walrusfruitcake">@walrusfruitcake</a> in <a href="https://github.com/facebook/react/pull/10011">#10115</a>)</li>\n<li>Prevent event handlers from receiving extra argument in development. (<a href="https://github.com/aweary">@aweary</a> in <a href="https://github.com/facebook/react/pull/8363">#10115</a>)</li>\n<li>Fix cases where <code>onChange</code> would not fire with <code>defaultChecked</code> on radio inputs. (<a href="https://github.com/jquense">@jquense</a> in <a href="https://github.com/facebook/react/pull/10156">#10156</a>)</li>\n<li>Add support for <code>controlList</code> attribute to DOM property whitelist (<a href="https://github.com/nhunzaker">@nhunzaker</a> in <a href="https://github.com/facebook/react/pull/9940">#9940</a>)</li>\n<li>Fix a bug where creating an element with a ref in a constructor did not throw an error in development. (<a href="https://github.com/iansu">@iansu</a> in <a href="https://github.com/facebook/react/pull/10025">#10025</a>)</li>\n</ul>',excerpt:"Today we’re sending out React 15.6.2. In 15.6.1, we shipped a few fixes for change events and inputs that had some unintended consequences. Those regressions have been ironed out, and we’ve also included a few more fixes to improve the stability of React across all browsers. Additionally, 15.6.2 adds support for the   attribute, and CSS columns are no longer appended with a   suffix. Installation We recommend using  Yarn  or  npm  for managing front-end dependencies. If you’re new to package…",frontmatter:{title:"React v15.6.2",next:null,prev:null,author:[null]},fields:{date:"September 24, 2017",path:"_posts/2017-09-25-react-v15.6.2.md"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"Our First 50,000 Stars"},fields:{slug:"/blog/2016/09/28/our-first-50000-stars.html"}}},{node:{frontmatter:{title:"Relay: State of the State"},fields:{slug:"/blog/2016/08/05/relay-state-of-the-state.html"}}},{node:{frontmatter:{title:"Create Apps with No Configuration"},fields:{slug:"/blog/2016/07/22/create-apps-with-no-configuration.html"}}},{node:{frontmatter:{title:"Mixins Considered Harmful"},fields:{slug:"/blog/2016/07/13/mixins-considered-harmful.html"}}},{node:{frontmatter:{title:"Introducing React's Error Code System"},fields:{slug:"/blog/2016/07/11/introducing-reacts-error-code-system.html"}}},{node:{frontmatter:{title:"React v15.0.1"},fields:{slug:"/blog/2016/04/08/react-v15.0.1.html"}}}]}},pathContext:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}}});
//# sourceMappingURL=path---blog-2017-09-25-react-v-15-6-2-html-5508debab213e38839c4.js.map