import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o,c as p,a as n,f as c,b as a,e as l}from"./app-iw6MeW5y.js";const r={},u={class:"hint-container info"},d=n("p",{class:"hint-container-title"},"相关信息",-1),m={href:"https://www.bilibili.com/video/BV14V4y1r7RQ/",target:"_blank",rel:"noopener noreferrer"},v=l(`<h3 id="错误类型" tabindex="-1"><a class="header-anchor" href="#错误类型"><span>错误类型</span></a></h3><p>simple admin 有三种错误类型</p><ul><li>ApiError : Api 错误，用于返回带 http 状态码的错误返回信息</li><li>CodeError : 业务代码类型错误, 错误状态码统一为 200, 详细状态码在返回体中</li><li>Status Error: RPC 错误</li></ul><h3 id="rpc-错误" tabindex="-1"><a class="header-anchor" href="#rpc-错误"><span>RPC 错误</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>status<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>codes<span class="token punctuation">.</span>Internal<span class="token punctuation">,</span> result<span class="token punctuation">.</span>Error<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>直接 return status.Error</p><blockquote><p>简便方法</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>errorx.NewInternalError(msg)

errorx.NewInvalidArgumentError(msg)

errorx.NewNotFoundError(msg)

errorx.NewAlreadyExistsError(msg)

errorx.NewUnauthenticatedError
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="业务码错误" tabindex="-1"><a class="header-anchor" href="#业务码错误"><span>业务码错误</span></a></h3><p>使用 CodeError 返回 API 层的业务码错误，</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>errorx<span class="token punctuation">.</span><span class="token function">CodeError</span><span class="token punctuation">(</span>enum<span class="token punctuation">.</span>InvalidArgument<span class="token punctuation">,</span> <span class="token string">&quot;Please log in&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简便方法</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">NewCodeCanceledError</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>CodeError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewCodeInvalidArgumentError</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>CodeError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewCodeNotFoundError</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>CodeError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewCodeAlreadyExistsError</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>CodeError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewCodeAbortedError</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>CodeError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewCodeInternalError</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>CodeError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token number">13</span><span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewCodeUnavailableError</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>CodeError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token number">14</span><span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewDefaultError</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token function">NewCodeError</span><span class="token punctuation">(</span>defaultCode<span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>错误码</p></blockquote><p>所有的错误码都放在 <code>github.com/suyuan32/simple-admin-common/enum/errorcode</code> 中， 默认前 17 个错误码与 grpc 保持一致， 你也可以自己添加错误码</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> enum

<span class="token keyword">const</span> <span class="token punctuation">(</span>
 <span class="token comment">// OK is returned on success.</span>
 OK <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

 <span class="token comment">// Canceled indicates the operation was canceled (typically by the caller).</span>
 <span class="token comment">//</span>
 <span class="token comment">// The gRPC framework will generate this error code when cancellation</span>
 <span class="token comment">// is requested.</span>
 Canceled <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span>

 <span class="token comment">// Unknown error. An example of where this error may be returned is</span>
 <span class="token comment">// if a Status value received from another address space belongs to</span>
 <span class="token comment">// an error-space that is not known in this address space. Also</span>
 <span class="token comment">// errors raised by APIs that do not return enough error information</span>
 <span class="token comment">// may be converted to this error.</span>
 <span class="token comment">//</span>
 <span class="token comment">// The gRPC framework will generate this error code in the above two</span>
 <span class="token comment">// mentioned cases.</span>
 Unknown <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">2</span>

 <span class="token comment">// InvalidArgument indicates client specified an invalid argument.</span>
 <span class="token comment">// Note that this differs from FailedPrecondition. It indicates arguments</span>
 <span class="token comment">// that are problematic regardless of the state of the system</span>
 <span class="token comment">// (e.g., a malformed file name).</span>
 <span class="token comment">//</span>
 <span class="token comment">// This error code will not be generated by the gRPC framework.</span>
 InvalidArgument <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">3</span>

 <span class="token comment">// DeadlineExceeded means operation expired before completion.</span>
 <span class="token comment">// For operations that change the state of the system, this error may be</span>
 <span class="token comment">// returned even if the operation has completed successfully. For</span>
 <span class="token comment">// example, a successful response from a server could have been delayed</span>
 <span class="token comment">// long enough for the deadline to expire.</span>
 <span class="token comment">//</span>
 <span class="token comment">// The gRPC framework will generate this error code when the deadline is</span>
 <span class="token comment">// exceeded.</span>
 DeadlineExceeded <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">4</span>

 <span class="token comment">// NotFound means some requested entity (e.g., file or directory) was</span>
 <span class="token comment">// not found.</span>
 <span class="token comment">//</span>
 <span class="token comment">// This error code will not be generated by the gRPC framework.</span>
 NotFound <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">5</span>

 <span class="token comment">// AlreadyExists means an attempt to create an entity failed because one</span>
 <span class="token comment">// already exists.</span>
 <span class="token comment">//</span>
 <span class="token comment">// This error code will not be generated by the gRPC framework.</span>
 AlreadyExists <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">6</span>

 <span class="token comment">// PermissionDenied indicates the caller does not have permission to</span>
 <span class="token comment">// execute the specified operation. It must not be used for rejections</span>
 <span class="token comment">// caused by exhausting some resource (use ResourceExhausted</span>
 <span class="token comment">// instead for those errors). It must not be</span>
 <span class="token comment">// used if the caller cannot be identified (use Unauthenticated</span>
 <span class="token comment">// instead for those errors).</span>
 <span class="token comment">//</span>
 <span class="token comment">// This error code will not be generated by the gRPC core framework,</span>
 <span class="token comment">// but expect authentication middleware to use it.</span>
 PermissionDenied <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">7</span>

 <span class="token comment">// ResourceExhausted indicates some resource has been exhausted, perhaps</span>
 <span class="token comment">// a per-user quota, or perhaps the entire file system is out of space.</span>
 <span class="token comment">//</span>
 <span class="token comment">// This error code will be generated by the gRPC framework in</span>
 <span class="token comment">// out-of-memory and server overload situations, or when a message is</span>
 <span class="token comment">// larger than the configured maximum size.</span>
 ResourceExhausted <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">8</span>

 <span class="token comment">// FailedPrecondition indicates operation was rejected because the</span>
 <span class="token comment">// system is not in a state required for the operation&#39;s execution.</span>
 <span class="token comment">// For example, directory to be deleted may be non-empty, an rmdir</span>
 <span class="token comment">// operation is applied to a non-directory, etc.</span>
 <span class="token comment">//</span>
 <span class="token comment">// A litmus test that may help a service implementor in deciding</span>
 <span class="token comment">// between FailedPrecondition, Aborted, and Unavailable:</span>
 <span class="token comment">//  (a) Use Unavailable if the client can retry just the failing call.</span>
 <span class="token comment">//  (b) Use Aborted if the client should retry at a higher-level</span>
 <span class="token comment">//      (e.g., restarting a read-modify-write sequence).</span>
 <span class="token comment">//  (c) Use FailedPrecondition if the client should not retry until</span>
 <span class="token comment">//      the system state has been explicitly fixed. E.g., if an &quot;rmdir&quot;</span>
 <span class="token comment">//      fails because the directory is non-empty, FailedPrecondition</span>
 <span class="token comment">//      should be returned since the client should not retry unless</span>
 <span class="token comment">//      they have first fixed up the directory by deleting files from it.</span>
 <span class="token comment">//  (d) Use FailedPrecondition if the client performs conditional</span>
 <span class="token comment">//      REST Get/Update/Delete on a resource and the resource on the</span>
 <span class="token comment">//      server does not match the condition. E.g., conflicting</span>
 <span class="token comment">//      read-modify-write on the same resource.</span>
 <span class="token comment">//</span>
 <span class="token comment">// This error code will not be generated by the gRPC framework.</span>
 FailedPrecondition <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">9</span>

 <span class="token comment">// Aborted indicates the operation was aborted, typically due to a</span>
 <span class="token comment">// concurrency issue like sequencer check failures, transaction aborts,</span>
 <span class="token comment">// etc.</span>
 <span class="token comment">//</span>
 <span class="token comment">// See litmus test above for deciding between FailedPrecondition,</span>
 <span class="token comment">// Aborted, and Unavailable.</span>
 <span class="token comment">//</span>
 <span class="token comment">// This error code will not be generated by the gRPC framework.</span>
 Aborted <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>

 <span class="token comment">// OutOfRange means operation was attempted past the valid range.</span>
 <span class="token comment">// E.g., seeking or reading past end of file.</span>
 <span class="token comment">//</span>
 <span class="token comment">// Unlike InvalidArgument, this error indicates a problem that may</span>
 <span class="token comment">// be fixed if the system state changes. For example, a 32-bit file</span>
 <span class="token comment">// system will generate InvalidArgument if asked to read at an</span>
 <span class="token comment">// offset that is not in the range [0,2^32-1], but it will generate</span>
 <span class="token comment">// OutOfRange if asked to read from an offset past the current</span>
 <span class="token comment">// file size.</span>
 <span class="token comment">//</span>
 <span class="token comment">// There is a fair bit of overlap between FailedPrecondition and</span>
 <span class="token comment">// OutOfRange. We recommend using OutOfRange (the more specific</span>
 <span class="token comment">// error) when it applies so that callers who are iterating through</span>
 <span class="token comment">// a space can easily look for an OutOfRange error to detect when</span>
 <span class="token comment">// they are done.</span>
 <span class="token comment">//</span>
 <span class="token comment">// This error code will not be generated by the gRPC framework.</span>
 OutOfRange <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">11</span>

 <span class="token comment">// Unimplemented indicates operation is not implemented or not</span>
 <span class="token comment">// supported/enabled in this service.</span>
 <span class="token comment">//</span>
 <span class="token comment">// This error code will be generated by the gRPC framework. Most</span>
 <span class="token comment">// commonly, you will see this error code when a method implementation</span>
 <span class="token comment">// is missing on the server. It can also be generated for unknown</span>
 <span class="token comment">// compression algorithms or a disagreement as to whether an RPC should</span>
 <span class="token comment">// be streaming.</span>
 Unimplemented <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">12</span>

 <span class="token comment">// Internal errors. Means some invariants expected by underlying</span>
 <span class="token comment">// system has been broken. If you see one of these errors,</span>
 <span class="token comment">// something is very broken.</span>
 <span class="token comment">//</span>
 <span class="token comment">// This error code will be generated by the gRPC framework in several</span>
 <span class="token comment">// internal error conditions.</span>
 Internal <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">13</span>

 <span class="token comment">// Unavailable indicates the service is currently unavailable.</span>
 <span class="token comment">// This is a most likely a transient condition and may be corrected</span>
 <span class="token comment">// by retrying with a backoff. Note that it is not always safe to retry</span>
 <span class="token comment">// non-idempotent operations.</span>
 <span class="token comment">//</span>
 <span class="token comment">// See litmus test above for deciding between FailedPrecondition,</span>
 <span class="token comment">// Aborted, and Unavailable.</span>
 <span class="token comment">//</span>
 <span class="token comment">// This error code will be generated by the gRPC framework during</span>
 <span class="token comment">// abrupt shutdown of a server process or network connection.</span>
 Unavailable <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">14</span>

 <span class="token comment">// DataLoss indicates unrecoverable data loss or corruption.</span>
 <span class="token comment">//</span>
 <span class="token comment">// This error code will not be generated by the gRPC framework.</span>
 DataLoss <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">15</span>

 <span class="token comment">// Unauthenticated indicates the request does not have valid</span>
 <span class="token comment">// authentication credentials for the operation.</span>
 <span class="token comment">//</span>
 <span class="token comment">// The gRPC framework will generate this error code when the</span>
 <span class="token comment">// authentication metadata is invalid or a Credentials callback fails,</span>
 <span class="token comment">// but also expect authentication middleware to generate it.</span>
 Unauthenticated <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">16</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api-错误" tabindex="-1"><a class="header-anchor" href="#api-错误"><span>Api 错误</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>errorx<span class="token punctuation">.</span><span class="token function">NewApiError</span><span class="token punctuation">(</span>httpCode<span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简便方法</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">NewApiErrorWithoutMsg</span><span class="token punctuation">(</span>code <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>ApiError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> code<span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewApiInternalError</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>ApiError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewApiBadRequestError</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>ApiError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewApiUnauthorizedError</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>ApiError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> http<span class="token punctuation">.</span>StatusUnauthorized<span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewApiForbiddenError</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>ApiError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> http<span class="token punctuation">.</span>StatusForbidden<span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewApiNotFoundError</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>ApiError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> http<span class="token punctuation">.</span>StatusNotFound<span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewApiBadGatewayError</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>ApiError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> http<span class="token punctuation">.</span>StatusBadGateway<span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>所有错误都会被自动翻译， 不为 0 的错误会在前端产生弹窗， 通过 api ErrorMessageMode 控制</p><blockquote><p>在生成 Api 的时候使用 --trans_err=true 会在 handler 使用翻译</p></blockquote></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls api go <span class="token parameter variable">--api</span> ./api/desc/core.api <span class="token parameter variable">--dir</span> ./api <span class="token parameter variable">--trans_err</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> api

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;net/http&quot;</span>

	<span class="token string">&quot;github.com/zeromicro/go-zero/rest/httpx&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/logic/api&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/svc&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/types&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// swagger:route post /api/create api CreateApi</span>
<span class="token comment">//</span>
<span class="token comment">// Create API information | 创建API</span>
<span class="token comment">//</span>
<span class="token comment">// Create API information | 创建API</span>
<span class="token comment">//</span>
<span class="token comment">// Parameters:</span>
<span class="token comment">//  + name: body</span>
<span class="token comment">//    require: true</span>
<span class="token comment">//    in: body</span>
<span class="token comment">//    type: ApiInfo</span>
<span class="token comment">//</span>
<span class="token comment">// Responses:</span>
<span class="token comment">//  200: BaseMsgResp</span>

<span class="token keyword">func</span> <span class="token function">CreateApiHandler</span><span class="token punctuation">(</span>svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext<span class="token punctuation">)</span> http<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> req types<span class="token punctuation">.</span>ApiInfo
		<span class="token keyword">if</span> err <span class="token operator">:=</span> httpx<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token operator">&amp;</span>req<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			httpx<span class="token punctuation">.</span><span class="token function">ErrorCtx</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> w<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>

		l <span class="token operator">:=</span> api<span class="token punctuation">.</span><span class="token function">NewCreateApiLogic</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> svcCtx<span class="token punctuation">)</span>
		resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> l<span class="token punctuation">.</span><span class="token function">CreateApi</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>req<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			err <span class="token operator">=</span> svcCtx<span class="token punctuation">.</span>Trans<span class="token punctuation">.</span><span class="token function">TransError</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			httpx<span class="token punctuation">.</span><span class="token function">ErrorCtx</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> w<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			httpx<span class="token punctuation">.</span><span class="token function">OkJsonCtx</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> w<span class="token punctuation">,</span> resp<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>err = svcCtx.Trans.TransError(r.Context(), err)</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>CodeError 是将错误码写在返回体中，返回的状态全部为 200 StatusOK, 若需要返回带 http 请求状态码的错误信息，请使用 errorx.ApiError.</p></div>`,25);function k(b,g){const e=s("ExternalLinkIcon"),t=s("BiliBili");return o(),p("div",null,[n("div",u,[d,n("p",null,[n("a",m,[c("视频教程"),a(e)])]),a(t,{bvid:"BV14V4y1r7RQ"})]),v])}const y=i(r,[["render",k],["__file","error_handling.html.vue"]]),w=JSON.parse('{"path":"/zh/guide/feature/error_handling.html","title":"错误处理","lang":"zh-CN","frontmatter":{"order":5,"title":"错误处理","description":"相关信息 视频教程 错误类型 simple admin 有三种错误类型 ApiError : Api 错误，用于返回带 http 状态码的错误返回信息 CodeError : 业务代码类型错误, 错误状态码统一为 200, 详细状态码在返回体中 Status Error: RPC 错误 RPC 错误 直接 return status.Error 简便方...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/feature/error_handling.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/feature/error_handling.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"错误处理"}],["meta",{"property":"og:description","content":"相关信息 视频教程 错误类型 simple admin 有三种错误类型 ApiError : Api 错误，用于返回带 http 状态码的错误返回信息 CodeError : 业务代码类型错误, 错误状态码统一为 200, 详细状态码在返回体中 Status Error: RPC 错误 RPC 错误 直接 return status.Error 简便方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-15T10:08:11.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-15T10:08:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"错误处理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-15T10:08:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":3,"title":"错误类型","slug":"错误类型","link":"#错误类型","children":[]},{"level":3,"title":"RPC 错误","slug":"rpc-错误","link":"#rpc-错误","children":[]},{"level":3,"title":"业务码错误","slug":"业务码错误","link":"#业务码错误","children":[]},{"level":3,"title":"Api 错误","slug":"api-错误","link":"#api-错误","children":[]}],"git":{"createdTime":1671464359000,"updatedTime":1715767691000,"contributors":[{"name":"Ryan SU","email":"1137661202@qq.com","commits":6},{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":2},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":5.65,"words":1696},"filePathRelative":"zh/guide/feature/error_handling.md","localizedDate":"2022年12月19日","autoDesc":true,"excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p><a href=\\"https://www.bilibili.com/video/BV14V4y1r7RQ/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">视频教程</a></p>\\n</div>\\n<h3>错误类型</h3>\\n<p>simple admin 有三种错误类型</p>\\n<ul>\\n<li>ApiError : Api 错误，用于返回带 http 状态码的错误返回信息</li>\\n<li>CodeError : 业务代码类型错误, 错误状态码统一为 200, 详细状态码在返回体中</li>\\n<li>Status Error: RPC 错误</li>\\n</ul>"}');export{y as comp,w as data};
