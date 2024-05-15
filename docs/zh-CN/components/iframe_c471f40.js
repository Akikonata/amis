amis.define('docs/zh-CN/components/iframe.md', function(require, exports, module, define) {

  module.exports = {
    "title": "iFrame",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "iFrame",
    "icon": null,
    "order": 51,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2><p>内嵌外部站点，可用 iframe 来实现。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"iframe\",\n    \"src\": \"https://github.com/baidu/amis\",\n    \"height\": 300\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"src-%E4%BD%BF%E7%94%A8%E5%8A%A8%E6%80%81%E6%95%B0%E6%8D%AE\" href=\"#src-%E4%BD%BF%E7%94%A8%E5%8A%A8%E6%80%81%E6%95%B0%E6%8D%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>src 使用动态数据</h2><h3><a class=\"anchor\" name=\"%E6%95%B0%E6%8D%AE%E5%9F%9F%E5%8F%98%E9%87%8F\" href=\"#%E6%95%B0%E6%8D%AE%E5%9F%9F%E5%8F%98%E9%87%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>数据域变量</h3><blockquote>\n<p>1.1.6</p>\n</blockquote>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" >{\n  \"type\": \"page\",\n  \"data\": {\n    \"iframeSrc\": \"https://github.com/baidu/amis\"\n  },\n  \"body\": {\n    \"type\": \"iframe\",\n    \"src\": \"${iframeSrc}\",\n    \"height\": 300\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%85%B6%E5%AE%83%E5%8E%9F%E7%94%9F-iframe-%E5%B1%9E%E6%80%A7\" href=\"#%E5%85%B6%E5%AE%83%E5%8E%9F%E7%94%9F-iframe-%E5%B1%9E%E6%80%A7\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>其它原生 iframe 属性</h2><blockquote>\n<p>2.1.0 及以上版本</p>\n</blockquote>\n<p>还支持以下原生 iframe 属性，具体配置项请<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe\">参考</a>。</p>\n<ul>\n<li>name</li>\n<li>allow</li>\n<li>sandbox</li>\n<li>referrerpolicy</li>\n</ul>\n<h2><a class=\"anchor\" name=\"%E6%94%AF%E6%8C%81-base64-%E6%A0%BC%E5%BC%8F\" href=\"#%E6%94%AF%E6%8C%81-base64-%E6%A0%BC%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>支持 base64 格式</h2><blockquote>\n<p>2.4.0 及以上版本</p>\n</blockquote>\n<p><code>src</code>属性支持传入符合 base64 编码标准的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types\">MIME 类型</a>字符串，具体效果参考<a href=\"../../../examples/iframe\">示例</a></p>\n<h2><a class=\"anchor\" name=\"%E5%A6%82%E4%BD%95%E5%92%8C-iframe-%E9%80%9A%E4%BF%A1\" href=\"#%E5%A6%82%E4%BD%95%E5%92%8C-iframe-%E9%80%9A%E4%BF%A1\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>如何和 iframe 通信</h2><h4><a class=\"anchor\" name=\"amis-%E5%90%91-iframe-%E9%80%9A%E4%BF%A1\" href=\"#amis-%E5%90%91-iframe-%E9%80%9A%E4%BF%A1\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>amis 向 iframe 通信</h4><p>在 iframe 页面中添加<code>message</code>事件监听器，在 iframe 初始化、更新或者接收到其他组件发送数据的时候，会通过 <code>postMessage</code> 发送当前数据域数据，iframe 页面的事件监听器中可以通过<code>e.data</code>进行获取：</p>\n<pre><code class=\"language-js\">window<span class=\"token punctuation\">.</span><span class=\"token function\">addEventListener</span><span class=\"token punctuation\">(</span><span class=\"token string\">'message'</span><span class=\"token punctuation\">,</span> <span class=\"token parameter\">e</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\">// e.data 获取当前数据域数据，进行使用</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<p><code>e.data</code> 格式及参数说明：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"amis:init\"</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// 当前事件类型</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">//... 当前数据域数据</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<ul>\n<li><strong>type</strong>: 当前事件类型<ul>\n<li>amis:init：初始化的时候触发</li>\n<li>amis:update：组件更新时触发</li>\n<li>amis:receive：组件通过 target 接收到其他组件发送来数据的时候</li>\n</ul>\n</li>\n<li><strong>data</strong>：当前数据源数据</li>\n</ul>\n<blockquote>\n<p>如果是 webpack 开发环境，注意过滤掉<code>webpackOk</code>类型消息</p>\n</blockquote>\n<h4><a class=\"anchor\" name=\"iframe-%E9%A1%B5%E9%9D%A2%E5%90%91-amis-%E9%80%9A%E4%BF%A1\" href=\"#iframe-%E9%A1%B5%E9%9D%A2%E5%90%91-amis-%E9%80%9A%E4%BF%A1\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>iframe 页面向 amis 通信</h4><p>可以通过以下两种方式实现 iframe 页面向 amis 通信：</p>\n<ul>\n<li>方式一：通过 events 属性，基于<a href=\"./action\">Action</a>实现，有一定的局限性。</li>\n<li>方式二：通过 onEvent 属性，基于<a href=\"../../docs/concepts/event-action\">事件动作</a>实现，更灵活。</li>\n</ul>\n<blockquote>\n<p>注意：如果同时配置了 events 和 onEvent，amis 都会执行，且 onEvent 配置的动作行为会先于 events 执行。</p>\n</blockquote>\n<p>步骤如下：</p>\n<ol>\n<li>在 iframe 页面中定义消息名称和需要传递的数据。获取父级 window，并使用<code>postMessage</code>传递数据，格式如下，：</li>\n</ol>\n<pre><code class=\"language-js\">window<span class=\"token punctuation\">.</span>parent<span class=\"token punctuation\">.</span><span class=\"token function\">postMessage</span><span class=\"token punctuation\">(</span>\n  <span class=\"token punctuation\">{</span>\n    <span class=\"token literal-property property\">type</span><span class=\"token operator\">:</span> <span class=\"token string\">'amis:detail'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token literal-property property\">data</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token literal-property property\">iframeId</span><span class=\"token operator\">:</span> <span class=\"token string\">'111'</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'*'</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<p><code>message</code>格式：</p>\n<ul>\n<li><code>type</code>: 标识要触发的 amis 行为，请使用 <code>amis:xxx</code> 的格式，这里我们设置为配置好的<code>detail</code>事件</li>\n<li><code>data</code>: 传给 amis 的数据，amis 会将该数据与当前数据域进行合并进行使用</li>\n</ul>\n<ol start=\"2\">\n<li>在 amis 的 iframe 组件中指明需要监听的消息名称，以及需要执行的动作。</li>\n</ol>\n<pre><code class=\"language-json\"><span class=\"token comment\">// 方式一：即在 amis 的 iframe 配置项中配置 events 对象</span>\n<span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"iframe\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"src\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"http://www.xxx.com\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"events\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"detail\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">\"actionType\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"dialog\"</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// 弹窗动作</span>\n      <span class=\"token property\">\"dialog\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"弹框\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"body\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"iframe 传给 amis 的 id 是：${iframeId}\"</span> <span class=\"token comment\">// 在弹框中渲染`\"iframe 传给 amis 的 id 是：${iframeId}\"`这段模板，即111</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\">// 方式二：即在 amis 的 iframe 配置项中配置 onEvent 对象</span>\n<span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"iframe\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"src\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"http://www.xxx.com\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"onEvent\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"detail\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">\"actions\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token comment\">// 动作 1，弹窗动作</span>\n        <span class=\"token punctuation\">{</span>\n          <span class=\"token property\">\"actionType\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"dialog\"</span><span class=\"token punctuation\">,</span>\n          <span class=\"token property\">\"dialog\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"弹框\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token property\">\"body\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"iframe 传给 amis 的 id 是：${iframeId}\"</span> <span class=\"token comment\">// 在弹框中渲染`\"iframe 传给 amis 的 id 是：${iframeId}\"`这段模板，即111</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token comment\">// 动作 2，触发指定组件的特性动作</span>\n        <span class=\"token punctuation\">{</span>\n          <span class=\"token property\">\"actionType\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"crud\"</span><span class=\"token punctuation\">,</span>\n          <span class=\"token property\">\"componentId\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"form01\"</span><span class=\"token punctuation\">,</span>\n          <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token property\">\"iframeId\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"${iframeId}\"</span> <span class=\"token comment\">// 刷新请求参数为`\"iframe 传给 amis 的 id 是：${iframeId}\"`这段模板，即111</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<h2><a class=\"anchor\" name=\"%E8%AE%BE%E7%BD%AE%E9%AB%98%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94\" href=\"#%E8%AE%BE%E7%BD%AE%E9%AB%98%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>设置高度自适应</h2><p>默认 amis 中只支持给 iframe 配置固定高度，我们可以通过上面说到的通信机制实现高度自适应。</p>\n<ol>\n<li>首先在 iframe 页面中获取到页面高度</li>\n<li>通过<code>amis:resize</code>事件，将高度信息发送给 amis</li>\n</ol>\n<pre><code class=\"language-js\">window<span class=\"token punctuation\">.</span>parent<span class=\"token punctuation\">.</span><span class=\"token function\">postMessage</span><span class=\"token punctuation\">(</span>\n  <span class=\"token punctuation\">{</span>\n    <span class=\"token literal-property property\">type</span><span class=\"token operator\">:</span> <span class=\"token string\">'amis:resize'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token literal-property property\">data</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token literal-property property\">height</span><span class=\"token operator\">:</span> <span class=\"token number\">400</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'*'</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<p>这样就可以动态设置 iframe 组件高度</p>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;iframe&quot;</code></td>\n<td>指定为 iFrame 渲染器</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>iFrame 的类名</td>\n</tr>\n<tr>\n<td>frameBorder</td>\n<td><code>Array</code></td>\n<td></td>\n<td>frameBorder</td>\n</tr>\n<tr>\n<td>style</td>\n<td><code>object</code></td>\n<td></td>\n<td>样式对象</td>\n</tr>\n<tr>\n<td>src</td>\n<td><code>string</code></td>\n<td></td>\n<td>iframe 地址</td>\n</tr>\n<tr>\n<td>allow</td>\n<td><code>string</code></td>\n<td></td>\n<td>allow 配置</td>\n</tr>\n<tr>\n<td>sandbox</td>\n<td><code>string</code></td>\n<td></td>\n<td>sandbox 配置</td>\n</tr>\n<tr>\n<td>referrerpolicy</td>\n<td><code>string</code></td>\n<td></td>\n<td>referrerpolicy 配置</td>\n</tr>\n<tr>\n<td>height</td>\n<td><code>number</code>或<code>string</code></td>\n<td><code>&quot;100%&quot;</code></td>\n<td>iframe 高度</td>\n</tr>\n<tr>\n<td>width</td>\n<td><code>number</code>或<code>string</code></td>\n<td><code>&quot;100%&quot;</code></td>\n<td>iframe 宽度</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本使用",
          "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "level": 2
        },
        {
          "label": "src 使用动态数据",
          "fragment": "src-%E4%BD%BF%E7%94%A8%E5%8A%A8%E6%80%81%E6%95%B0%E6%8D%AE",
          "fullPath": "#src-%E4%BD%BF%E7%94%A8%E5%8A%A8%E6%80%81%E6%95%B0%E6%8D%AE",
          "level": 2,
          "children": [
            {
              "label": "数据域变量",
              "fragment": "%E6%95%B0%E6%8D%AE%E5%9F%9F%E5%8F%98%E9%87%8F",
              "fullPath": "#%E6%95%B0%E6%8D%AE%E5%9F%9F%E5%8F%98%E9%87%8F",
              "level": 3
            }
          ]
        },
        {
          "label": "其它原生 iframe 属性",
          "fragment": "%E5%85%B6%E5%AE%83%E5%8E%9F%E7%94%9F-iframe-%E5%B1%9E%E6%80%A7",
          "fullPath": "#%E5%85%B6%E5%AE%83%E5%8E%9F%E7%94%9F-iframe-%E5%B1%9E%E6%80%A7",
          "level": 2
        },
        {
          "label": "支持 base64 格式",
          "fragment": "%E6%94%AF%E6%8C%81-base64-%E6%A0%BC%E5%BC%8F",
          "fullPath": "#%E6%94%AF%E6%8C%81-base64-%E6%A0%BC%E5%BC%8F",
          "level": 2
        },
        {
          "label": "如何和 iframe 通信",
          "fragment": "%E5%A6%82%E4%BD%95%E5%92%8C-iframe-%E9%80%9A%E4%BF%A1",
          "fullPath": "#%E5%A6%82%E4%BD%95%E5%92%8C-iframe-%E9%80%9A%E4%BF%A1",
          "level": 2,
          "children": [
            {
              "label": "amis 向 iframe 通信",
              "fragment": "amis-%E5%90%91-iframe-%E9%80%9A%E4%BF%A1",
              "fullPath": "#amis-%E5%90%91-iframe-%E9%80%9A%E4%BF%A1",
              "level": 4
            },
            {
              "label": "iframe 页面向 amis 通信",
              "fragment": "iframe-%E9%A1%B5%E9%9D%A2%E5%90%91-amis-%E9%80%9A%E4%BF%A1",
              "fullPath": "#iframe-%E9%A1%B5%E9%9D%A2%E5%90%91-amis-%E9%80%9A%E4%BF%A1",
              "level": 4
            }
          ]
        },
        {
          "label": "设置高度自适应",
          "fragment": "%E8%AE%BE%E7%BD%AE%E9%AB%98%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94",
          "fullPath": "#%E8%AE%BE%E7%BD%AE%E9%AB%98%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
