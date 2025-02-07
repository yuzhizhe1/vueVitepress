import{_ as i,c as a,o as t,ag as n}from"./chunks/framework.u4S_pj4N.js";const c=JSON.parse('{"title":"事件处理","description":"","frontmatter":{},"headers":[],"relativePath":"guide/essentials/event-handling.md","filePath":"guide/essentials/event-handling.md"}'),l={name:"guide/essentials/event-handling.md"};function e(h,s,p,k,d,E){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="事件处理" tabindex="-1">事件处理 <a class="header-anchor" href="#事件处理" aria-label="Permalink to &quot;事件处理&quot;">​</a></h1><h2 id="监听事件-​" tabindex="-1">监听事件 ​ <a class="header-anchor" href="#监听事件-​" aria-label="Permalink to &quot;监听事件 ​&quot;">​</a></h2><p>我们可以使用 <code>v-on</code> 指令 (简写为 <code>@</code>) 来监听 DOM 事件，并在事件触发时执行对应的 JavaScript。用法：<code>v-on:click=&quot;handler&quot;</code> 或 <code>@click=&quot;handler&quot;</code>。</p><p>事件处理器 (handler) 的值可以是：</p><ul><li><p><strong>内联事件处理器</strong>：事件被触发时执行的内联 JavaScript 语句 (与 onclick 类似)。</p></li><li><p><strong>方法事件处理器</strong>：一个指向组件上定义的方法的属性名或是路径。</p></li></ul><p>内联事件处理器 ​ 内联事件处理器通常用于简单场景，例如：</p><div class="language-js vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language-template vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;count++&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Add 1&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Count is: {{ count }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="方法事件处理器-​" tabindex="-1">方法事件处理器 ​ <a class="header-anchor" href="#方法事件处理器-​" aria-label="Permalink to &quot;方法事件处理器 ​&quot;">​</a></h2><p>随着事件处理器的逻辑变得愈发复杂，内联代码方式变得不够灵活。因此 <code>v-on</code> 也可以接受一个方法名或对某个方法的调用。</p><p>举例来说：</p><div class="language-js vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Vue.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Hello \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}!\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// \`event\` 是 DOM 原生事件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (event) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event.target.tagName);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-template vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- \`greet\` 是上面定义过的方法名 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;greet&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Greet&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>方法事件处理器会自动接收原生 DOM 事件并触发执行。在上面的例子中，我们能够通过被触发事件的 <code>event.target</code> 访问到该 DOM 元素。</p><h3 id="方法与内联事件判断-​" tabindex="-1">方法与内联事件判断 ​ <a class="header-anchor" href="#方法与内联事件判断-​" aria-label="Permalink to &quot;方法与内联事件判断 ​&quot;">​</a></h3><p>模板编译器会通过检查 <code>v-on</code> 的值是否是合法的 JavaScript 标识符或属性访问路径来断定是何种形式的事件处理器。举例来说，<code>foo</code>、<code>foo.bar</code> 和 <code>foo[&#39;bar&#39;]</code> 会被视为方法事件处理器，而 <code>foo()</code> 和 <code>count++</code> 会被视为内联事件处理器。</p><h2 id="在内联处理器中调用方法-​" tabindex="-1">在内联处理器中调用方法 ​ <a class="header-anchor" href="#在内联处理器中调用方法-​" aria-label="Permalink to &quot;在内联处理器中调用方法 ​&quot;">​</a></h2><p>除了直接绑定方法名，你还可以在内联事件处理器中调用方法。这允许我们向方法传入自定义参数以代替原生事件：</p><div class="language-js vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> say</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-template vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;say(&#39;hello&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Say hello&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;say(&#39;bye&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Say bye&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="在内联事件处理器中访问事件参数-​" tabindex="-1">在内联事件处理器中访问事件参数 ​ <a class="header-anchor" href="#在内联事件处理器中访问事件参数-​" aria-label="Permalink to &quot;在内联事件处理器中访问事件参数 ​&quot;">​</a></h2><p>有时我们需要在内联事件处理器中访问原生 DOM 事件。你可以向该处理器方法传入一个特殊的 <code>$event</code> 变量，或者使用内联箭头函数：</p><div class="language-template vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 使用特殊的 $event 变量 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;warn(&#39;Form cannot be submitted yet.&#39;, $event)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Submit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 使用内联箭头函数 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(event) =&gt; warn(&#39;Form cannot be submitted yet.&#39;, event)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Submit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> warn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 这里可以访问原生事件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (event) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">preventDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="事件修饰符-​" tabindex="-1">事件修饰符 ​ <a class="header-anchor" href="#事件修饰符-​" aria-label="Permalink to &quot;事件修饰符 ​&quot;">​</a></h2><p>在处理事件时调用 <code>event.preventDefault()</code> 或 <code>event.stopPropagation()</code> 是很常见的。尽管我们可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理 DOM 事件的细节会更好。</p><p>为解决这一问题，Vue 为 <code>v-on</code> 提供了事件修饰符。修饰符是用 . 表示的指令后缀，包含以下这些：</p><ul><li><code>.stop</code></li><li><code>.prevent</code></li><li><code>.self</code></li><li><code>.capture</code></li><li><code>.once</code></li><li><code>.passive</code></li></ul><div class="language-template vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 单击事件将停止传递 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click.stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;doThis&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 提交事件将不再重新加载页面 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @submit.prevent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onSubmit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 修饰语可以使用链式书写 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click.stop.prevent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;doThat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 也可以只有修饰符 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @submit.prevent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 仅当 event.target 是元素本身时才会触发事件处理器 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 例如：事件处理器不来自子元素 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click.self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;doThat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>使用修饰符时需要注意调用顺序，因为相关代码是以相同的顺序生成的。因此使用 <code>@click.prevent.self</code> 会阻止 <strong>元素及其子元素的所有点击事件的默认行为</strong>，而 <code>@click.self.prevent</code> 则只会阻止对元素本身的点击事件的默认行为。</p></div><p><code>.capture</code>、<code>.once</code> 和 <code>.passive</code> 修饰符与<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#options" target="_blank" rel="noreferrer">原生 addEventListener 事件</a>相对应：</p><div class="language-template vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 添加事件监听器时，使用 \`capture\` 捕获模式 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click.capture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;doThis&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 点击事件最多被触发一次 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click.once</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;doThis&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 \`onScroll\` 完成 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 以防其中包含 \`event.preventDefault()\` --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @scroll.passive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onScroll&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><code>.passive</code> 修饰符一般用于触摸事件的监听器，可以用来<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#%E4%BD%BF%E7%94%A8_passive_%E6%94%B9%E5%96%84%E6%BB%9A%E5%B1%8F%E6%80%A7%E8%83%BD" target="_blank" rel="noreferrer">改善移动端设备的滚屏性能</a>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请勿同时使用 <code>.passive</code> 和 <code>.prevent</code>，因为 <code>.passive</code> 已经向浏览器表明了你不想阻止事件的默认行为。如果你这么做了，则 <code>.prevent</code> 会被忽略，并且浏览器会抛出警告。</p></div><h2 id="按键修饰符​" tabindex="-1">按键修饰符​ <a class="header-anchor" href="#按键修饰符​" aria-label="Permalink to &quot;按键修饰符​&quot;">​</a></h2><p>在监听键盘事件时，我们经常需要检查特定的按键。Vue 允许在 <code>v-on</code> 或 <code>@</code> 监听按键事件时添加按键修饰符。</p><div class="language-template vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 仅在 \`key\` 为 \`Enter\` 时调用 \`submit\` --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @keyup.enter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;submit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>你可以直接使用 <code><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/UI_Events/Keyboard_event_key_values" target="_blank" rel="noreferrer">KeyboardEvent.key</a></code> 暴露的按键名称作为修饰符，但需要转为 kebab-case 形式。</p><div class="language-template vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @keyup.page-down</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onPageDown&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>在上面的例子中，仅会在 <code>$event.key</code> 为 <code>&#39;PageDown&#39;</code> 时调用事件处理。</p><h2 id="按键别名​" tabindex="-1">按键别名​ <a class="header-anchor" href="#按键别名​" aria-label="Permalink to &quot;按键别名​&quot;">​</a></h2><p>Vue 为一些常用的按键提供了别名：</p><ul><li><code>.enter</code></li><li><code>.tab</code></li><li><code>.delete</code> (捕获“Delete”和“Backspace”两个按键)</li><li><code>.esc</code></li><li><code>.space</code></li><li><code>.up</code></li><li><code>.down</code></li><li><code>.left</code></li><li><code>.right</code></li></ul><h2 id="系统按键修饰符​" tabindex="-1">系统按键修饰符​ <a class="header-anchor" href="#系统按键修饰符​" aria-label="Permalink to &quot;系统按键修饰符​&quot;">​</a></h2><p>你可以使用以下系统按键修饰符来触发鼠标或键盘事件监听器，只有当按键被按下时才会触发。</p><ul><li><code>.ctrl</code></li><li><code>.alt</code></li><li><code>.shift</code></li><li><code>.meta</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在 Mac 键盘上，meta 是 Command 键 (⌘)。在 Windows 键盘上，meta 键是 Windows 键 (⊞)。在 Sun 微机系统键盘上，meta 是钻石键 (◆)。在某些键盘上，特别是 MIT 和 Lisp 机器的键盘及其后代版本的键盘，如 Knight 键盘，space-cadet 键盘，meta 都被标记为“META”。在 Symbolics 键盘上，meta 也被标识为“META”或“Meta”。</p></div><p>举例来说：</p><div class="language-template vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- Alt + Enter --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @keyup.alt.enter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;clear&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- Ctrl + 点击 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click.ctrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;doSomething&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Do something&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请注意，系统按键修饰符和常规按键不同。与 <code>keyup</code> 事件一起使用时，该按键必须在事件发出时处于按下状态。换句话说，<code>keyup.ctrl</code> 只会在你仍然按住 <code>ctrl</code> 但松开了另一个键时被触发。若你单独松开 <code>ctrl</code> 键将不会触发。</p></div><h2 id="exact-修饰符​" tabindex="-1"><code>.exact</code> 修饰符​ <a class="header-anchor" href="#exact-修饰符​" aria-label="Permalink to &quot;\`.exact\` 修饰符​&quot;">​</a></h2><p><code>.exact</code> 修饰符允许精确控制触发事件所需的系统修饰符的组合。</p><div class="language-template vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click.ctrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onClick&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;A&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click.ctrl.exact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onCtrlClick&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;A&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 仅当没有按下任何系统按键时触发 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click.exact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onClick&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;A&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="鼠标按键修饰符​" tabindex="-1">鼠标按键修饰符​ <a class="header-anchor" href="#鼠标按键修饰符​" aria-label="Permalink to &quot;鼠标按键修饰符​&quot;">​</a></h2><ul><li><code>.left</code></li><li><code>.right</code></li><li><code>.middle</code></li></ul><p>这些修饰符将处理程序限定为由特定鼠标按键触发的事件。</p><p>但请注意，<code>.left</code>，<code>.right</code> 和 <code>.middle</code> 这些修饰符名称是基于常见的右手用鼠标布局设定的，但实际上它们分别指代设备事件触发器的“主”、”次“，“辅助”，而非实际的物理按键。因此，对于左手用鼠标布局而言，“主”按键在物理上可能是右边的按键，但却会触发 <code>.left</code> 修饰符对应的处理程序。又或者，触控板可能通过单指点击触发 <code>.left</code> 处理程序，通过双指点击触发 <code>.right</code> 处理程序，通过三指点击触发 <code>.middle</code> 处理程序。同样，产生“鼠标”事件的其他设备和事件源，也可能具有与“左”，“右”完全无关的触发模式。</p>`,57)]))}const o=i(l,[["render",e]]);export{c as __pageData,o as default};
