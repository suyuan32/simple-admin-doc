import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as a}from"./app-BLH1Rwid.js";const s={},d=a(`<h2 id="database-configuration" tabindex="-1"><a class="header-anchor" href="#database-configuration"><span>Database Configuration</span></a></h2><table><thead><tr><th>Parameter Name</th><th>Required</th><th>Default Value</th><th>Parameter Description</th></tr></thead><tbody><tr><td>Type</td><td>Yes</td><td>mysql</td><td>Supported types: <code>mysql, postgres, sqlite3</code></td></tr><tr><td>Host</td><td>Yes</td><td></td><td>Database address, such as <code>localhost</code>, <code>127.0.0.1</code></td></tr><tr><td>Port</td><td>Yes</td><td></td><td>Database port, such as <code>3306</code></td></tr><tr><td>Username</td><td>Yes</td><td>root</td><td>Database username</td></tr><tr><td>Password</td><td>No</td><td></td><td>Database password</td></tr><tr><td>DBName</td><td>Yes</td><td>simple_admin</td><td>Database name</td></tr><tr><td>SSLMode</td><td>No</td><td></td><td>Whether to use SSL in <code>postgresql</code>, options: <code>disable</code> or <code>require</code></td></tr><tr><td>DBPath</td><td>No</td><td></td><td>Location to store the Sqlite database file, must be set when using sqlite3, e.g., <code>/home/data/sqlite.db</code></td></tr><tr><td>MysqlConfig</td><td>No</td><td></td><td>Additional configuration for MySQL, such as <code>&amp;charset=utf8&amp;loc=Asia%2fShanghai</code></td></tr><tr><td>PGConfig</td><td>No</td><td></td><td>Additional configuration for PostgreSQL</td></tr><tr><td>SqliteConfig</td><td>No</td><td></td><td>Additional configuration for Sqlite</td></tr><tr><td>CacheTime</td><td>No</td><td>10</td><td>Cache time (in seconds)</td></tr><tr><td>MaxOpenConn</td><td>No</td><td>100</td><td>Maximum number of simultaneous connections</td></tr></tbody></table><blockquote><p>Example</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> postgres
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> localhost
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">5432</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> postgres
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&#39;simple-admin.&#39;</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable <span class="token comment"># disable or require</span>
  <span class="token key atrule">CacheTime</span><span class="token punctuation">:</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cross-origin-configuration" tabindex="-1"><a class="header-anchor" href="#cross-origin-configuration"><span>Cross-Origin Configuration</span></a></h2><table><thead><tr><th>Parameter Name</th><th>Required</th><th>Default Value</th><th>Parameter Description</th></tr></thead><tbody><tr><td>Address</td><td>No</td><td>*</td><td>If set to *, allows cross-origin requests from any domain. Otherwise, specify your own domain or IP.</td></tr></tbody></table><blockquote><p>Example</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">CROSConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Address</span><span class="token punctuation">:</span> <span class="token string">&#39;*&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="casbin-configuration" tabindex="-1"><a class="header-anchor" href="#casbin-configuration"><span>Casbin Configuration</span></a></h2><table><thead><tr><th>Parameter Name</th><th>Required</th><th>Default Value</th><th>Parameter Description</th></tr></thead><tbody><tr><td>ModelText</td><td>No</td><td>...</td><td>Casbin rules</td></tr></tbody></table><blockquote><p>Example</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">CasbinConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">ModelText</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    [request_definition]
    r = sub, obj, act
    [policy_definition]
    p = sub, obj, act
    [role_definition]
    g = _, _
    [policy_effect]
    e = some(where (p.eft == allow))
    [matchers]
    m = r.sub == p.sub &amp;&amp; keyMatch2(r.obj,p.obj) &amp;&amp; r.act == p.act</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="i18n-configuration" tabindex="-1"><a class="header-anchor" href="#i18n-configuration"><span>I18n Configuration</span></a></h2><blockquote><p>Only used when i18n needs to read from an external directory.</p></blockquote><table><thead><tr><th>Parameter Name</th><th>Required</th><th>Default Value</th><th>Parameter Description</th></tr></thead><tbody><tr><td>Dir</td><td>No</td><td>...</td><td>External i18n file directory</td></tr><tr><td>BundleFilePaths</td><td>No</td><td></td><td>External i18n files paths</td></tr><tr><td>SupportLanguages</td><td>No</td><td></td><td>Support language list</td></tr></tbody></table><blockquote><p>Example</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">I18nConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Dir</span><span class="token punctuation">:</span> <span class="token string">&quot;D:/projects/simpleadmin/feature-workspace/simple-admin-core/api/internal/i18n/&quot;</span>
  <span class="token key atrule">BundleFilePaths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;locale/ja.json&quot;</span>
  <span class="token key atrule">SupportLanguages</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;ja&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="auth-authentication-configuration" tabindex="-1"><a class="header-anchor" href="#auth-authentication-configuration"><span>Auth Authentication Configuration</span></a></h2><table><thead><tr><th>Parameter Name</th><th>Required</th><th>Default Value</th><th>Parameter Description</th></tr></thead><tbody><tr><td>AccessSecret</td><td>Yes</td><td></td><td>JWT encryption key</td></tr><tr><td>AccessExpire</td><td>Yes</td><td></td><td>JWT expiration time</td></tr></tbody></table><blockquote><p>Example</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">Auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">AccessSecret</span><span class="token punctuation">:</span> jS6VKDtsJf3z1n2VKDtsJf3z1n2 <span class="token comment"># Consistent encryption key for JWT across all APIs for successful decoding</span>
  <span class="token key atrule">AccessExpire</span><span class="token punctuation">:</span> <span class="token number">259200</span> <span class="token comment"># Seconds, expiration time</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="native-redis-configuration" tabindex="-1"><a class="header-anchor" href="#native-redis-configuration"><span>Native Redis Configuration</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>  config<span class="token punctuation">.</span>RedisConf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Parameter Name</th><th>Required</th><th>Default Value</th><th>Parameter Description</th></tr></thead><tbody><tr><td>Host</td><td>Yes</td><td></td><td>Redis server address, supports comma-separated if it&#39;s a cluster</td></tr><tr><td>Db</td><td>Yes</td><td>0</td><td>Redis database ID</td></tr><tr><td>Username</td><td>No</td><td></td><td>Redis username</td></tr><tr><td>Pass</td><td>No</td><td></td><td>Redis password</td></tr><tr><td>Tls</td><td>No</td><td></td><td>Whether to enable TLS encryption</td></tr></tbody></table><h2 id="core-project-configuration" tabindex="-1"><a class="header-anchor" href="#core-project-configuration"><span>Core Project Configuration</span></a></h2><table><thead><tr><th>Parameter Name</th><th>Required</th><th>Default Value</th><th>Parameter Description</th></tr></thead><tbody><tr><td>DefaultRole</td><td>Yes</td><td>1</td><td>Default role ID for registered users</td></tr><tr><td>DefaultDepartment</td><td>Yes</td><td>1</td><td>Default department ID for registered users</td></tr><tr><td>DefaultPosition</td><td>Yes</td><td>1</td><td>Default position ID for registered users</td></tr><tr><td>EmailCaptchaExpiredTime</td><td>No</td><td>600</td><td>Default expiration time for email verification code</td></tr><tr><td>SmsTemplateId</td><td>No</td><td></td><td>Default SMS template ID</td></tr><tr><td>SmsAppId</td><td>No</td><td></td><td>Default SMS app ID</td></tr><tr><td>SmsSignName</td><td>No</td><td></td><td>Default SMS signature</td></tr><tr><td>SmsParamsType</td><td>No</td><td></td><td>Default SMS parameters type, supports json and array</td></tr><tr><td>RegisterVerify</td><td>Yes</td><td></td><td>Registration verification method, supports captcha, email, sms, sms_or_email</td></tr><tr><td>LoginVerify</td><td>Yes</td><td></td><td>Login verification method, supports captcha, email, sms, sms_or_email, all</td></tr><tr><td>ResetVerify</td><td>Yes</td><td></td><td>Reset verification method, supports email, sms, sms_or_email</td></tr><tr><td>AllowInit</td><td>Yes</td><td>true</td><td>Whether to allow database initialization</td></tr></tbody></table><blockquote><p>Example</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">ProjectConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">DefaultRoleId</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">DefaultDepartmentId</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">DefaultPositionId</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">EmailCaptchaExpiredTime</span><span class="token punctuation">:</span> <span class="token number">600</span>
  <span class="token key atrule">SmsTemplateId</span><span class="token punctuation">:</span> <span class="token string">&#39;xxx&#39;</span>
  <span class="token key atrule">SmsAppId</span><span class="token punctuation">:</span> <span class="token string">&#39;xxx&#39;</span>
  <span class="token key atrule">SmsSignName</span><span class="token punctuation">:</span> <span class="token string">&#39;xxx&#39;</span>
  <span class="token key atrule">SmsParamsType</span><span class="token punctuation">:</span> json
  <span class="token key atrule">RegisterVerify</span><span class="token punctuation">:</span> sms
  <span class="token key atrule">LoginVerify</span><span class="token punctuation">:</span> captcha
  <span class="token key atrule">ResetVerify</span><span class="token punctuation">:</span> email
  <span class="token key atrule">AllowInit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),i=[d];function o(r,l){return e(),n("div",null,i)}const u=t(s,[["render",o],["__file","configurations.html.vue"]]),m=JSON.parse('{"path":"/guide/basic-config/configurations.html","title":"Simple Admin Configurations","lang":"en-US","frontmatter":{"order":7,"title":"Simple Admin Configurations","description":"Database Configuration Example Cross-Origin Configuration Example Casbin Configuration Example I18n Configuration Only used when i18n needs to read from an external directory. E...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/basic-config/configurations.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/basic-config/configurations.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Simple Admin Configurations"}],["meta",{"property":"og:description","content":"Database Configuration Example Cross-Origin Configuration Example Casbin Configuration Example I18n Configuration Only used when i18n needs to read from an external directory. E..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-17T05:22:19.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-17T05:22:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Simple Admin Configurations\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-17T05:22:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"Database Configuration","slug":"database-configuration","link":"#database-configuration","children":[]},{"level":2,"title":"Cross-Origin Configuration","slug":"cross-origin-configuration","link":"#cross-origin-configuration","children":[]},{"level":2,"title":"Casbin Configuration","slug":"casbin-configuration","link":"#casbin-configuration","children":[]},{"level":2,"title":"I18n Configuration","slug":"i18n-configuration","link":"#i18n-configuration","children":[]},{"level":2,"title":"Auth Authentication Configuration","slug":"auth-authentication-configuration","link":"#auth-authentication-configuration","children":[]},{"level":2,"title":"Native Redis Configuration","slug":"native-redis-configuration","link":"#native-redis-configuration","children":[]},{"level":2,"title":"Core Project Configuration","slug":"core-project-configuration","link":"#core-project-configuration","children":[]}],"git":{"createdTime":1699366325000,"updatedTime":1715923339000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":5},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":1.68,"words":503},"filePathRelative":"guide/basic-config/configurations.md","localizedDate":"November 7, 2023","autoDesc":true,"excerpt":"<h2>Database Configuration</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Parameter Name</th>\\n<th>Required</th>\\n<th>Default Value</th>\\n<th>Parameter Description</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Type</td>\\n<td>Yes</td>\\n<td>mysql</td>\\n<td>Supported types: <code>mysql, postgres, sqlite3</code></td>\\n</tr>\\n<tr>\\n<td>Host</td>\\n<td>Yes</td>\\n<td></td>\\n<td>Database address, such as <code>localhost</code>, <code>127.0.0.1</code></td>\\n</tr>\\n<tr>\\n<td>Port</td>\\n<td>Yes</td>\\n<td></td>\\n<td>Database port, such as <code>3306</code></td>\\n</tr>\\n<tr>\\n<td>Username</td>\\n<td>Yes</td>\\n<td>root</td>\\n<td>Database username</td>\\n</tr>\\n<tr>\\n<td>Password</td>\\n<td>No</td>\\n<td></td>\\n<td>Database password</td>\\n</tr>\\n<tr>\\n<td>DBName</td>\\n<td>Yes</td>\\n<td>simple_admin</td>\\n<td>Database name</td>\\n</tr>\\n<tr>\\n<td>SSLMode</td>\\n<td>No</td>\\n<td></td>\\n<td>Whether to use SSL in <code>postgresql</code>, options: <code>disable</code> or <code>require</code></td>\\n</tr>\\n<tr>\\n<td>DBPath</td>\\n<td>No</td>\\n<td></td>\\n<td>Location to store the Sqlite database file, must be set when using sqlite3, e.g., <code>/home/data/sqlite.db</code></td>\\n</tr>\\n<tr>\\n<td>MysqlConfig</td>\\n<td>No</td>\\n<td></td>\\n<td>Additional configuration for MySQL, such as <code>&amp;charset=utf8&amp;loc=Asia%2fShanghai</code></td>\\n</tr>\\n<tr>\\n<td>PGConfig</td>\\n<td>No</td>\\n<td></td>\\n<td>Additional configuration for PostgreSQL</td>\\n</tr>\\n<tr>\\n<td>SqliteConfig</td>\\n<td>No</td>\\n<td></td>\\n<td>Additional configuration for Sqlite</td>\\n</tr>\\n<tr>\\n<td>CacheTime</td>\\n<td>No</td>\\n<td>10</td>\\n<td>Cache time (in seconds)</td>\\n</tr>\\n<tr>\\n<td>MaxOpenConn</td>\\n<td>No</td>\\n<td>100</td>\\n<td>Maximum number of simultaneous connections</td>\\n</tr>\\n</tbody>\\n</table>"}');export{u as comp,m as data};