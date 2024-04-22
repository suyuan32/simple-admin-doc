import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-BbTbWlJo.js";const t={},i=e(`<h3 id="error-type" tabindex="-1"><a class="header-anchor" href="#error-type"><span>Error Type</span></a></h3><p>Simple Admin has three error types</p><ul><li>ApiError : Api error, used to return error return information with http status code</li><li>CodeError : The business code type is wrong, the error status code is uniformly 200, and the detailed status code is in the return body</li><li>Status Error: RPC error</li></ul><h3 id="rpc-error" tabindex="-1"><a class="header-anchor" href="#rpc-error"><span>RPC Error</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>status<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>codes<span class="token punctuation">.</span>Internal<span class="token punctuation">,</span> result<span class="token punctuation">.</span>Error<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Just return status.Error</p><p>Easy way</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>errorx.NewInternalError(msg)

errorx.NewInvalidArgumentError(msg)

errorx.NewNotFoundError(msg)

errorx.NewAlreadyExistsError(msg)

errorx.NewUnauthenticatedError
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="code-error" tabindex="-1"><a class="header-anchor" href="#code-error"><span>Code Error</span></a></h3><p>Use CodeError to return error in API layer.</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>errorx<span class="token punctuation">.</span><span class="token function">CodeError</span><span class="token punctuation">(</span>enum<span class="token punctuation">.</span>InvalidArgument<span class="token punctuation">,</span> <span class="token string">&quot;Please log in&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Easy Way</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Error code</p></blockquote><p>All error codes are in <code>github.com/suyuan32/simple-admin-common/enum/errorcode</code>. The first 17 error codes are the same as grpc， you can also add your own error code.</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> enum

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>the code which is not 0 will show message in front-end， front-end control it via api ErrorMessageMode.</p></div><h3 id="apierror" tabindex="-1"><a class="header-anchor" href="#apierror"><span>ApiError</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>errorx<span class="token punctuation">.</span><span class="token function">NewApiError</span><span class="token punctuation">(</span>httpCode<span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Easy Way</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>If you add the tag --trans_err=true to generate Api files, it will add translation in handler.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls api go <span class="token parameter variable">--api</span> ./api/desc/core.api <span class="token parameter variable">--dir</span> ./api <span class="token parameter variable">--trans_err</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> api

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;net/http&quot;</span>

 <span class="token string">&quot;github.com/zeromicro/go-zero/rest/httpx&quot;</span>

 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/logic/api&quot;</span>
 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/svc&quot;</span>
 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/types&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// swagger:route post /api api CreateOrUpdateApi</span>
<span class="token comment">//</span>
<span class="token comment">// Create or update API information | 创建或更新API</span>
<span class="token comment">//</span>
<span class="token comment">// Create or update API information | 创建或更新API</span>
<span class="token comment">//</span>
<span class="token comment">// Parameters:</span>
<span class="token comment">//  + name: body</span>
<span class="token comment">//    require: true</span>
<span class="token comment">//    in: body</span>
<span class="token comment">//    type: CreateOrUpdateApiReq</span>
<span class="token comment">//</span>
<span class="token comment">// Responses:</span>
<span class="token comment">//  200: BaseMsgResp</span>

<span class="token keyword">func</span> <span class="token function">CreateOrUpdateApiHandler</span><span class="token punctuation">(</span>svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext<span class="token punctuation">)</span> http<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> req types<span class="token punctuation">.</span>CreateOrUpdateApiReq
  <span class="token keyword">if</span> err <span class="token operator">:=</span> httpx<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token operator">&amp;</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   httpx<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  l <span class="token operator">:=</span> api<span class="token punctuation">.</span><span class="token function">NewCreateOrUpdateApiLogic</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> svcCtx<span class="token punctuation">)</span>
  resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> l<span class="token punctuation">.</span><span class="token function">CreateOrUpdateApi</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>req<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   err <span class="token operator">=</span> svcCtx<span class="token punctuation">.</span>Trans<span class="token punctuation">.</span><span class="token function">TransError</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;Accept-Language&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   httpx<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   httpx<span class="token punctuation">.</span><span class="token function">OkJson</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> resp<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>err = svcCtx.Trans.TransError(r.Context(), err)</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>CodeError puts the error code in response body, all the status is 200 StatusOK. If you want to response with status code such as 400，please use errorx.ApiError .</p></div>`,26),o=[i];function p(r,c){return s(),a("div",null,o)}const d=n(t,[["render",p],["__file","error_handling.html.vue"]]),m=JSON.parse('{"path":"/guide/feature/error_handling.html","title":"Error Handling","lang":"en-US","frontmatter":{"order":5,"title":"Error Handling","description":"Error Type Simple Admin has three error types ApiError : Api error, used to return error return information with http status code CodeError : The business code type is wrong, th...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/feature/error_handling.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/feature/error_handling.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Error Handling"}],["meta",{"property":"og:description","content":"Error Type Simple Admin has three error types ApiError : Api error, used to return error return information with http status code CodeError : The business code type is wrong, th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-17T00:19:29.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-01-17T00:19:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Error Handling\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-17T00:19:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":3,"title":"Error Type","slug":"error-type","link":"#error-type","children":[]},{"level":3,"title":"RPC Error","slug":"rpc-error","link":"#rpc-error","children":[]},{"level":3,"title":"Code Error","slug":"code-error","link":"#code-error","children":[]},{"level":3,"title":"ApiError","slug":"apierror","link":"#apierror","children":[]}],"git":{"createdTime":1671464359000,"updatedTime":1705450769000,"contributors":[{"name":"Ryan SU","email":"1137661202@qq.com","commits":6},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":5.39,"words":1617},"filePathRelative":"guide/feature/error_handling.md","localizedDate":"December 19, 2022","autoDesc":true,"excerpt":"<h3>Error Type</h3>\\n<p>Simple Admin has three error types</p>\\n<ul>\\n<li>ApiError : Api error, used to return error return information with http status code</li>\\n<li>CodeError : The business code type is wrong, the error status code is uniformly 200, and the detailed status code is in the return body</li>\\n<li>Status Error: RPC error</li>\\n</ul>"}');export{d as comp,m as data};
