webpackJsonp([0x68ce5b727d54],{"./node_modules/json-loader/index.js!./.cache/json/docs-introducing-jsx-html.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>Consider this variable declaration:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This funny tag syntax is neither a string nor HTML.</p>\n<p>It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.</p>\n<p>JSX produces React “elements”. We will explore rendering them to the DOM in the <a href="/docs/rendering-elements.html">next section</a>. Below, you can find the basics of JSX necessary to get you started.</p>\n<h3 id="embedding-expressions-in-jsx"><a href="#embedding-expressions-in-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Embedding Expressions in JSX</h3>\n<p>You can embed any <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions">JavaScript expression</a> in JSX by wrapping it in curly braces.</p>\n<p>For example, <code>2 + 2</code>, <code>user.firstName</code>, and <code>formatName(user)</code> are all valid expressions:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">formatName</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">\' \'</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>\n  firstName<span class="token punctuation">:</span> <span class="token string">\'Harper\'</span><span class="token punctuation">,</span>\n  lastName<span class="token punctuation">:</span> <span class="token string">\'Perez\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">    Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token function">formatName</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">!</span>\n</span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  element<span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><a href="http://codepen.io/gaearon/pen/PGEjdG?editors=0010">Try it on CodePen.</a></p>\n<p>We split JSX over multiple lines for readability. While it isn’t required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of <a href="http://stackoverflow.com/q/2846283">automatic semicolon insertion</a>.</p>\n<h3 id="jsx-is-an-expression-too"><a href="#jsx-is-an-expression-too" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX is an Expression Too</h3>\n<p>After compilation, JSX expressions become regular JavaScript objects.</p>\n<p>This means that you can use JSX inside of <code>if</code> statements and <code>for</code> loops, assign it to variables, accept it as arguments, and return it from functions:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">getGreeting</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token function">formatName</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> Stranger<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="specifying-attributes-with-jsx"><a href="#specifying-attributes-with-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Specifying Attributes with JSX</h3>\n<p>You may use quotes to specify string literals as attributes:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You may also use curly braces to embed a JavaScript expression in an attribute:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>avatarUrl<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>img</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. Otherwise JSX will treat the attribute as a string literal rather than an expression. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.</p>\n<h3 id="specifying-children-with-jsx"><a href="#specifying-children-with-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Specifying Children with JSX</h3>\n<p>If a tag is empty, you may close it immediately with <code>/></code>, like XML:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>avatarUrl<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>JSX tags may contain children:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Good to see you here<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<blockquote>\n<p><strong>Caveat:</strong></p>\n<p>Since JSX is closer to JavaScript than HTML, React DOM uses <code>camelCase</code> property naming convention instead of HTML attribute names.</p>\n<p>For example, <code>class</code> becomes <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/className"><code>className</code></a> in JSX, and <code>tabindex</code> becomes <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex"><code>tabIndex</code></a>.</p>\n</blockquote>\n<h3 id="jsx-prevents-injection-attacks"><a href="#jsx-prevents-injection-attacks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX Prevents Injection Attacks</h3>\n<p>It is safe to embed user input in JSX:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> title <span class="token operator">=</span> response<span class="token punctuation">.</span>potentiallyMaliciousInput<span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// This is safe:</span>\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>By default, React DOM <a href="http://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html">escapes</a> any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS (cross-site-scripting)</a> attacks.</p>\n<h3 id="jsx-represents-objects"><a href="#jsx-represents-objects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX Represents Objects</h3>\n<p>Babel compiles JSX down to <code>React.createElement()</code> calls.</p>\n<p>These two examples are identical:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>greeting<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Hello<span class="token punctuation">,</span> world<span class="token operator">!</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>\n  <span class="token string">\'h1\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>className<span class="token punctuation">:</span> <span class="token string">\'greeting\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'Hello, world!\'</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code>React.createElement()</code> performs a few checks to help you write bug-free code but essentially it creates an object like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment" spellcheck="true">// Note: this structure is simplified</span>\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">{</span>\n  type<span class="token punctuation">:</span> <span class="token string">\'h1\'</span><span class="token punctuation">,</span>\n  props<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    className<span class="token punctuation">:</span> <span class="token string">\'greeting\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token string">\'Hello, world\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.</p>\n<p>We will explore rendering React elements to the DOM in the next section.</p>\n<blockquote>\n<p><strong>Tip:</strong></p>\n<p>We recommend searching for a “Babel” syntax scheme for your editor of choice so that both ES6 and JSX code is properly highlighted.</p>\n</blockquote>',frontmatter:{title:"Introducing JSX",next:"rendering-elements.html",prev:"hello-world.html"},fields:{path:"docs/introducing-jsx.md"}}},pathContext:{slug:"docs/introducing-jsx.html"}}}});
//# sourceMappingURL=path---docs-introducing-jsx-html-5dfd4424bd63ccfe78b8.js.map