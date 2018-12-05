/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
!function(t,e){"use strict";"object"==typeof module&&"object"==typeof module.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t);
// Pass this if window is not defined yet
}("undefined"!=typeof window?window:this,function($,t){
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";function m(t,e,n){var i,o=(e=e||rt).createElement("script");if(o.text=t,n)for(i in wt)n[i]&&(o[i]=n[i]);e.head.appendChild(o).parentNode.removeChild(o)}function g(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?ht[ft.call(t)]||"object":typeof t;
// Support: Android <=2.3 only (functionish RegExp)
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
function a(t){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var e=!!t&&"length"in t&&t.length,n=g(t);return!yt(t)&&!bt(t)&&("array"===n||0===e||"number"==typeof e&&0<e&&e-1 in t)}function u(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}
// Implement the identical functionality for filter and not
function e(t,n,i){return yt(n)?xt.grep(t,function(t,e){return!!n.call(t,e,t)!==i}):
// Single element
n.nodeType?xt.grep(t,function(t){return t===n!==i}):
// Arraylike of elements (jQuery, arguments, Array)
"string"!=typeof n?xt.grep(t,function(t){return-1<dt.call(n,t)!==i}):xt.filter(n,t,i)}function n(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}
// Convert String-formatted options into Object-formatted ones
function c(t){var n={};return xt.each(t.match(Dt)||[],function(t,e){n[e]=!0}),n}
/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */function d(t){return t}function h(t){throw t}function l(t,e,n,i){var o;try{
// Check for promise aspect first to privilege synchronous behavior
t&&yt(o=t.promise)?o.call(t).done(e).fail(n):t&&yt(o=t.then)?o.call(t,e,n):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
e.apply(void 0,[t].slice(i));
// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(t){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[t])}}
// The ready event handler and self cleanup method
function i(){rt.removeEventListener("DOMContentLoaded",i),$.removeEventListener("load",i),xt.ready()}
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
// Used by camelCase as callback to replace()
function o(t,e){return e.toUpperCase()}
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function f(t){return t.replace(It,"ms-").replace(Ht,o)}function s(){this.expando=xt.expando+s.uid++}function r(t){return"true"===t||"false"!==t&&("null"===t?null:
// Only convert to a number if it doesn't change the string
t===+t+""?+t:Bt.test(t)?JSON.parse(t):t)}function p(t,e,n){var i;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===t.nodeType)if(i="data-"+e.replace(Wt,"-$&").toLowerCase(),"string"==typeof(n=t.getAttribute(i))){try{n=r(n)}catch(t){}
// Make sure we set the data so it isn't changed later
Ft.set(t,e,n)}else n=void 0;return n}function v(t,e,n,i){var o,s,r=20,a=i?function(){return i.cur()}:function(){return xt.css(t,e,"")},l=a(),u=n&&n[3]||(xt.cssNumber[e]?"":"px"),
// Starting value computation is required for potential unit mismatches
c=(xt.cssNumber[e]||"px"!==u&&+l)&&Gt.exec(xt.css(t,e));if(c&&c[3]!==u){for(
// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,
// Trust units reported by jQuery.css
u=u||c[3],
// Iteratively approximate from a nonzero starting point
c=+l||1;r--;)
// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
xt.style(t,e,c+u),(1-s)*(1-(s=a()/l||.5))<=0&&(r=0),c/=s;c*=2,xt.style(t,e,c+u),
// Make sure we update the tween properties later on
n=n||[]}return n&&(c=+c||+l||0,
// Apply relative offset (+=/-=) if specified
o=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=c,i.end=o)),o}function y(t){var e,n=t.ownerDocument,i=t.nodeName,o=Vt[i];return o||(e=n.body.appendChild(n.createElement(i)),o=xt.css(e,"display"),e.parentNode.removeChild(e),"none"===o&&(o="block"),Vt[i]=o)}function b(t,e){
// Determine new display value for elements that need to change
for(var n,i,o=[],s=0,r=t.length;s<r;s++)(i=t[s]).style&&(n=i.style.display,e?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(o[s]=Nt.get(i,"display")||null,o[s]||(i.style.display="")),""===i.style.display&&Yt(i)&&(o[s]=y(i))):"none"!==n&&(o[s]="none",
// Remember what we're overwriting
Nt.set(i,"display",n)));
// Set the display of the elements in a second loop to avoid constant reflow
for(s=0;s<r;s++)null!=o[s]&&(t[s].style.display=o[s]);return t}function w(t,e){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&u(t,e)?xt.merge([t],n):n}
// Mark scripts as having already been evaluated
function k(t,e){for(var n=0,i=t.length;n<i;n++)Nt.set(t[n],"globalEval",!e||Nt.get(e[n],"globalEval"))}function x(t,e,n,i,o){for(var s,r,a,l,u,c,d=e.createDocumentFragment(),h=[],f=0,p=t.length;f<p;f++)if((s=t[f])||0===s)
// Add nodes directly
if("object"===g(s))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
xt.merge(h,s.nodeType?[s]:s);
// Convert non-html into a text node
else if(ee.test(s)){for(r=r||d.appendChild(e.createElement("div")),
// Deserialize a standard representation
a=(Zt.exec(s)||["",""])[1].toLowerCase(),l=te[a]||te._default,r.innerHTML=l[1]+xt.htmlPrefilter(s)+l[2],
// Descend through wrappers to the right content
c=l[0];c--;)r=r.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
xt.merge(h,r.childNodes),
// Ensure the created nodes are orphaned (#12392)
(
// Remember the top-level container
r=d.firstChild).textContent=""}else h.push(e.createTextNode(s));
// Convert html into DOM nodes
// Remove wrapper from fragment
for(d.textContent="",f=0;s=h[f++];)
// Skip elements already in the context collection (trac-4087)
if(i&&-1<xt.inArray(s,i))o&&o.push(s);else
// Capture executables
if(u=xt.contains(s.ownerDocument,s),
// Append to fragment
r=w(d.appendChild(s),"script"),
// Preserve script evaluation history
u&&k(r),n)for(c=0;s=r[c++];)Jt.test(s.type||"")&&n.push(s);return d}function C(){return!0}function _(){return!1}
// Support: IE <=9 only
// See #13393 for more info
function j(){try{return rt.activeElement}catch(t){}}function S(t,e,n,i,o,s){var r,a;
// Types can be a map of types/handlers
if("object"==typeof e){for(a in
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
i=i||n,n=void 0),e)S(t,a,n,i,e[a],s);return t}if(null==i&&null==o?(
// ( types, fn )
o=n,i=n=void 0):null==o&&("string"==typeof n?(
// ( types, selector, fn )
o=i,i=void 0):(
// ( types, data, fn )
o=i,i=n,n=void 0)),!1===o)o=_;else if(!o)return t;return 1===s&&(r=o,
// Use same guid so caller can remove using origFn
(o=function(t){
// Can use an empty set, since event contains the info
return xt().off(t),r.apply(this,arguments)}).guid=r.guid||(r.guid=xt.guid++)),t.each(function(){xt.event.add(this,e,o,i,n)})}
/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
// Prefer a tbody over its parent table for containing new rows
function T(t,e){return u(t,"table")&&u(11!==e.nodeType?e:e.firstChild,"tr")&&xt(t).children("tbody")[0]||t}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function E(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function O(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function z(t,e){var n,i,o,s,r,a,l,u;if(1===e.nodeType){
// 1. Copy private data: events, handlers, etc.
if(Nt.hasData(t)&&(s=Nt.access(t),r=Nt.set(e,s),u=s.events))for(o in delete r.handle,r.events={},u)for(n=0,i=u[o].length;n<i;n++)xt.event.add(e,o,u[o][n]);
// 2. Copy user data
Ft.hasData(t)&&(a=Ft.access(t),l=xt.extend({},a),Ft.set(e,l))}}
// Fix IE bugs, see support tests
function A(t,e){var n=e.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&Xt.test(t.type)?e.checked=t.checked:"input"!==n&&"textarea"!==n||(e.defaultValue=t.defaultValue)}function P(n,i,o,s){
// Flatten any nested arrays
i=ut.apply([],i);var t,e,r,a,l,u,c=0,d=n.length,h=d-1,f=i[0],p=yt(f);
// We can't cloneNode fragments that contain checked, in WebKit
if(p||1<d&&"string"==typeof f&&!vt.checkClone&&de.test(f))return n.each(function(t){var e=n.eq(t);p&&(i[0]=f.call(this,t,e.html())),P(e,i,o,s)});if(d&&(e=(t=x(i,n[0].ownerDocument,!1,n,s)).firstChild,1===t.childNodes.length&&(t=e),e||s)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(a=(r=xt.map(w(t,"script"),E)).length;c<d;c++)l=t,c!==h&&(l=xt.clone(l,!0,!0),
// Keep references to cloned scripts for later restoration
a&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
xt.merge(r,w(l,"script"))),o.call(n[c],l,c);if(a)
// Evaluate executable scripts on first document insertion
for(u=r[r.length-1].ownerDocument,
// Reenable scripts
xt.map(r,O),c=0;c<a;c++)l=r[c],Jt.test(l.type||"")&&!Nt.access(l,"globalEval")&&xt.contains(u,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?
// Optional AJAX dependency, but won't run scripts if not present
xt._evalUrl&&xt._evalUrl(l.src):m(l.textContent.replace(he,""),u,l))}return n}function D(t,e,n){for(var i,o=e?xt.filter(e,t):t,s=0;null!=(i=o[s]);s++)n||1!==i.nodeType||xt.cleanData(w(i)),i.parentNode&&(n&&xt.contains(i.ownerDocument,i)&&k(w(i,"script")),i.parentNode.removeChild(i));return t}function L(t,e,n){var i,o,s,r,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
a=t.style;
// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
return(n=n||pe(t))&&(""!==(r=n.getPropertyValue(e)||n[e])||xt.contains(t.ownerDocument,t)||(r=xt.style(t,e)),
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
!vt.pixelBoxStyles()&&fe.test(r)&&me.test(e)&&(
// Remember the original values
i=a.width,o=a.minWidth,s=a.maxWidth,
// Put in the new values to get a computed value out
a.minWidth=a.maxWidth=a.width=r,r=n.width,
// Revert the changed values
a.width=i,a.minWidth=o,a.maxWidth=s)),void 0!==r?
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
r+"":r}function q(t,e){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(!t())
// Hook needed; redefine it so that the support test is not executed again.
return(this.get=e).apply(this,arguments);
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get}}}
// Return a css property mapped to a potentially vendor prefixed property
function M(t){
// Shortcut for names that are not vendor prefixed
if(t in ke)return t;
// Check for vendor prefixed names
for(var e=t[0].toUpperCase()+t.slice(1),n=we.length;n--;)if((t=we[n]+e)in ke)return t}
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function I(t){var e=xt.cssProps[t];return e||(e=xt.cssProps[t]=M(t)||t),e}function H(t,e,n){
// Any relative (+/-) values have already been
// normalized at this point
var i=Gt.exec(e);return i?
// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,i[2]-(n||0))+(i[3]||"px"):e}function R(t,e,n,i,o,s){var r="width"===e?1:0,a=0,l=0;
// Adjustment may not be necessary
if(n===(i?"border":"content"))return 0;for(;r<4;r+=2)
// Both box models exclude margin
"margin"===n&&(l+=xt.css(t,n+Qt[r],!0,o)),
// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
i?(
// For "content", subtract padding
"content"===n&&(l-=xt.css(t,"padding"+Qt[r],!0,o)),
// For "content" or "padding", subtract border
"margin"!==n&&(l-=xt.css(t,"border"+Qt[r]+"Width",!0,o))):(
// Add padding
l+=xt.css(t,"padding"+Qt[r],!0,o),
// For "border" or "margin", add border
"padding"!==n?l+=xt.css(t,"border"+Qt[r]+"Width",!0,o):a+=xt.css(t,"border"+Qt[r]+"Width",!0,o));
// Account for positive content-box scroll gutter when requested by providing computedVal
return!i&&0<=s&&(
// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-s-l-a-.5))),l}function N(t,e,n){
// Start with computed style
var i=pe(t),o=L(t,e,i),s="border-box"===xt.css(t,"boxSizing",!1,i),r=s;
// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(fe.test(o)){if(!n)return o;o="auto"}
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
// Adjust for the element's box model
return r=r&&(vt.boxSizingReliable()||o===t.style[e]),
// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
("auto"===o||!parseFloat(o)&&"inline"===xt.css(t,"display",!1,i))&&(o=t["offset"+e[0].toUpperCase()+e.slice(1)],
// offsetWidth/offsetHeight provide border-box values
r=!0),(
// Normalize "" and auto
o=parseFloat(o)||0)+R(t,e,n||(s?"border":"content"),r,i,
// Provide the current computed size to request scroll gutter calculation (gh-3589)
o)+"px"}function F(t,e,n,i,o){return new F.prototype.init(t,e,n,i,o)}function B(){$e&&(!1===rt.hidden&&$.requestAnimationFrame?$.requestAnimationFrame(B):$.setTimeout(B,xt.fx.interval),xt.fx.tick())}
// Animations created synchronously will run synchronously
function W(){return $.setTimeout(function(){xe=void 0}),xe=Date.now()}
// Generate parameters to create a standard animation
function U(t,e){var n,i=0,o={height:t};
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
for(e=e?1:0;i<4;i+=2-e)o["margin"+(n=Qt[i])]=o["padding"+n]=t;return e&&(o.opacity=o.width=t),o}function G(t,e,n){for(var i,o=(K.tweeners[e]||[]).concat(K.tweeners["*"]),s=0,r=o.length;s<r;s++)if(i=o[s].call(n,e,t))
// We're done with this property
return i}function Q(t,e,n){var i,o,s,r,a,l,u,c,d="width"in e||"height"in e,h=this,f={},p=t.style,m=t.nodeType&&Yt(t),g=Nt.get(t,"fxshow");
// Queue-skipping animations hijack the fx hooks
// Detect show/hide animations
for(i in n.queue||(null==(r=xt._queueHooks(t,"fx")).unqueued&&(r.unqueued=0,a=r.empty.fire,r.empty.fire=function(){r.unqueued||a()}),r.unqueued++,h.always(function(){
// Ensure the complete handler is called before this completes
h.always(function(){r.unqueued--,xt.queue(t,"fx").length||r.empty.fire()})})),e)if(o=e[i],Ce.test(o)){if(delete e[i],s=s||"toggle"===o,o===(m?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==o||!g||void 0===g[i])continue;m=!0}f[i]=g&&g[i]||xt.style(t,i)}
// Bail out if this is a no-op like .hide().hide()
if((l=!xt.isEmptyObject(e))||!xt.isEmptyObject(f))for(i in
// Restrict "overflow" and "display" styles during box animations
d&&1===t.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(
// Identify a display type, preferring old show/hide data over the CSS cascade
u=g&&g.display)&&(u=Nt.get(t,"display")),"none"===(c=xt.css(t,"display"))&&(u?c=u:(
// Get nonempty value(s) by temporarily forcing visibility
b([t],!0),u=t.style.display||u,c=xt.css(t,"display"),b([t]))),
// Animate inline elements as inline-block
("inline"===c||"inline-block"===c&&null!=u)&&"none"===xt.css(t,"float")&&(
// Restore the original display value at the end of pure show/hide animations
l||(h.done(function(){p.display=u}),null==u&&(c=p.display,u="none"===c?"":c)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",h.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),
// Implement show/hide animations
l=!1,f)
// General show/hide setup for this element animation
l||(g?"hidden"in g&&(m=g.hidden):g=Nt.access(t,"fxshow",{display:u}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
s&&(g.hidden=!m),
// Show elements before animating them
m&&b([t],!0)
/* eslint-disable no-loop-func */,h.done(function(){for(i in
/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
m||b([t]),Nt.remove(t,"fxshow"),f)xt.style(t,i,f[i])})),
// Per-property setup
l=G(m?g[i]:0,i,h),i in g||(g[i]=l.start,m&&(l.end=l.start,l.start=0))}function Y(t,e){var n,i,o,s,r;
// camelCase, specialEasing and expand cssHook pass
for(n in t)if(o=e[i=f(n)],s=t[n],Array.isArray(s)&&(o=s[1],s=t[n]=s[0]),n!==i&&(t[i]=s,delete t[n]),(r=xt.cssHooks[i])&&"expand"in r)
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in s=r.expand(s),delete t[i],s)n in t||(t[n]=s[n],e[n]=o);else e[i]=o}function K(r,t,e){var n,a,i=0,o=K.prefilters.length,l=xt.Deferred().always(function(){
// Don't match elem in the :animated selector
delete s.elem}),s=function(){if(a)return!1;for(var t=xe||W(),e=Math.max(0,u.startTime+u.duration-t),
// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
n,i=1-(e/u.duration||0),o=0,s=u.tweens.length;o<s;o++)u.tweens[o].run(i);
// If there's more to do, yield
return l.notifyWith(r,[u,i,e]),i<1&&s?e:(
// If this was an empty animation, synthesize a final progress notification
s||l.notifyWith(r,[u,1,0]),
// Resolve the animation and report its conclusion
l.resolveWith(r,[u]),!1)},u=l.promise({elem:r,props:xt.extend({},t),opts:xt.extend(!0,{specialEasing:{},easing:xt.easing._default},e),originalProperties:t,originalOptions:e,startTime:xe||W(),duration:e.duration,tweens:[],createTween:function(t,e){var n=xt.Tween(r,u.opts,t,e,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(n),n},stop:function(t){var e=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
n=t?u.tweens.length:0;if(a)return this;for(a=!0;e<n;e++)u.tweens[e].run(1);
// Resolve when we played the last frame; otherwise, reject
return t?(l.notifyWith(r,[u,1,0]),l.resolveWith(r,[u,t])):l.rejectWith(r,[u,t]),this}}),c=u.props;for(Y(c,u.opts.specialEasing);i<o;i++)if(n=K.prefilters[i].call(u,r,c,u.opts))return yt(n.stop)&&(xt._queueHooks(u.elem,u.opts.queue).stop=n.stop.bind(n)),n;return xt.map(c,G,u),yt(u.opts.start)&&u.opts.start.call(r,u),
// Attach callbacks from options
u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),xt.fx.timer(xt.extend(s,{elem:r,anim:u,queue:u.opts.queue})),u}
// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function V(t){var e;return(t.match(Dt)||[]).join(" ")}function X(t){return t.getAttribute&&t.getAttribute("class")||""}function Z(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(Dt)||[]}function J(n,t,i,o){var e;if(Array.isArray(t))
// Serialize array item.
xt.each(t,function(t,e){i||He.test(n)?
// Treat each array item as a scalar.
o(n,e):
// Item is non-scalar (array or object), encode its numeric index.
J(n+"["+("object"==typeof e&&null!=e?t:"")+"]",e,i,o)});else if(i||"object"!==g(t))
// Serialize scalar item.
o(n,t);else
// Serialize object item.
for(e in t)J(n+"["+e+"]",t[e],i,o)}
// Serialize an array of form elements or a set of
// key/values into a query string
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function tt(s){
// dataTypeExpression is optional and defaults to "*"
return function(t,e){"string"!=typeof t&&(e=t,t="*");var n,i=0,o=t.toLowerCase().match(Dt)||[];if(yt(e))
// For each dataType in the dataTypeExpression
for(;n=o[i++];)
// Prepend if requested
"+"===n[0]?(n=n.slice(1)||"*",(s[n]=s[n]||[]).unshift(e)):(s[n]=s[n]||[]).push(e)}}
// Base inspection function for prefilters and transports
function et(e,o,s,r){function a(t){var i;return l[t]=!0,xt.each(e[t]||[],function(t,e){var n=e(o,s,r);return"string"!=typeof n||u||l[n]?u?!(i=n):void 0:(o.dataTypes.unshift(n),a(n),!1)}),i}var l={},u=e===Xe;return a(o.dataTypes[0])||!l["*"]&&a("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function nt(t,e){var n,i,o=xt.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((o[n]?t:i||(i={}))[n]=e[n]);return i&&xt.extend(!0,t,i),t}
/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function it(t,e,n){
// Remove auto dataType and get content-type in the process
for(var i,o,s,r,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}
// Check to see if we have a response for the expected dataType
if(l[0]in n)s=l[0];else{
// Try convertible dataTypes
for(o in n){if(!l[0]||t.converters[o+" "+l[0]]){s=o;break}r||(r=o)}
// Or just use first one
s=s||r}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(s)return s!==l[0]&&l.unshift(s),n[s]}
/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function ot(t,e,n,i){var o,s,r,a,l,u={},
// Work with a copy of dataTypes in case we need to modify it for conversion
c=t.dataTypes.slice();
// Create converters map with lowercased keys
if(c[1])for(r in t.converters)u[r.toLowerCase()]=t.converters[r];
// Convert to each sequential dataType
for(s=c.shift();s;)if(t.responseFields[s]&&(n[t.responseFields[s]]=e),
// Apply the dataFilter if provided
!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=s,s=c.shift())
// There's only work to do if current dataType is non-auto
if("*"===s)s=l;
// Convert response if prev dataType is non-auto and differs from current
else if("*"!==l&&l!==s){
// If none found, seek a pair
if(!(
// Seek a direct converter
r=u[l+" "+s]||u["* "+s]))for(o in u)if((
// If conv2 outputs current
a=o.split(" "))[1]===s&&(
// If prev can be converted to accepted input
r=u[l+" "+a[0]]||u["* "+a[0]])){
// Condense equivalence converters
!0===r?r=u[o]:!0!==u[o]&&(s=a[0],c.unshift(a[1]));break}
// Apply converter (if not an equivalence)
if(!0!==r)
// Unless errors are allowed to bubble, catch and return them
if(r&&t.throws)e=r(e);else try{e=r(e)}catch(t){return{state:"parsererror",error:r?t:"No conversion from "+l+" to "+s}}}return{state:"success",data:e}}var st=[],rt=$.document,at=Object.getPrototypeOf,lt=st.slice,ut=st.concat,ct=st.push,dt=st.indexOf,ht={},ft=ht.toString,pt=ht.hasOwnProperty,mt=pt.toString,gt=mt.call(Object),vt={},yt=function t(e){
// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return"function"==typeof e&&"number"!=typeof e.nodeType},bt=function t(e){return null!=e&&e===e.window},wt={type:!0,src:!0,noModule:!0},kt="3.3.1",
// Define a local copy of jQuery
xt=function(t,e){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new xt.fn.init(t,e)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
$t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;xt.fn=xt.prototype={
// The current version of jQuery being used
jquery:kt,constructor:xt,
// The default length of a jQuery object is 0
length:0,toArray:function(){return lt.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(t){
// Return all the elements in a clean array
return null==t?lt.call(this):t<0?this[t+this.length]:this[t];
// Return just the one element from the set
},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(t){
// Build a new jQuery matched element set
var e=xt.merge(this.constructor(),t);
// Add the old object onto the stack (as a reference)
// Return the newly-formed element set
return e.prevObject=this,e},
// Execute a callback for every element in the matched set.
each:function(t){return xt.each(this,t)},map:function(n){return this.pushStack(xt.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return this.pushStack(lt.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(0<=n&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ct,sort:st.sort,splice:st.splice},xt.extend=xt.fn.extend=function(t){var e,n,i,o,s,r,a=t||{},l=1,u=arguments.length,c=!1;
// Handle a deep copy situation
for("boolean"==typeof a&&(c=a,
// Skip the boolean and the target
a=arguments[l]||{},l++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof a||yt(a)||(a={}),
// Extend jQuery itself if only one argument is passed
l===u&&(a=this,l--);l<u;l++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[l]))
// Extend the base object
for(n in e)i=a[n],
// Prevent never-ending loop
a!==(o=e[n])&&(
// Recurse if we're merging plain objects or arrays
c&&o&&(xt.isPlainObject(o)||(s=Array.isArray(o)))?(r=s?(s=!1,i&&Array.isArray(i)?i:[]):i&&xt.isPlainObject(i)?i:{},
// Never move original objects, clone them
a[n]=xt.extend(c,r,o)):void 0!==o&&(a[n]=o));
// Return the modified object
return a},xt.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(kt+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,n;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
return!(!t||"[object Object]"!==ft.call(t))&&(
// Objects with no prototype (e.g., `Object.create( null )`) are plain
!(e=at(t))||"function"==typeof(
// Objects with prototype are plain iff they were constructed by a global Object function
n=pt.call(e,"constructor")&&e.constructor)&&mt.call(n)===gt)},isEmptyObject:function(t){
/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var e;for(e in t)return!1;return!0},
// Evaluates a script in a global context
globalEval:function(t){m(t)},each:function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n&&!1!==e.call(t[i],i,t[i]);i++);else for(i in t)if(!1===e.call(t[i],i,t[i]))break;return t},
// Support: Android <=4.0 only
trim:function(t){return null==t?"":(t+"").replace($t,"")},
// results is for internal usage only
makeArray:function(t,e){var n=e||[];return null!=t&&(a(Object(t))?xt.merge(n,"string"==typeof t?[t]:t):ct.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:dt.call(e,t,n)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(t,e){for(var n=+e.length,i=0,o=t.length;i<n;i++)t[o++]=e[i];return t.length=o,t},grep:function(t,e,n){
// Go through the array, only saving the items
// that pass the validator function
for(var i,o=[],s=0,r=t.length,a=!n;s<r;s++)(i=!e(t[s],s))!==a&&o.push(t[s]);return o},
// arg is for internal usage only
map:function(t,e,n){var i,o,s=0,r=[];
// Go through the array, translating each of the items to their new values
if(a(t))for(i=t.length;s<i;s++)null!=(o=e(t[s],s,n))&&r.push(o);
// Go through every key on the object,
else for(s in t)null!=(o=e(t[s],s,n))&&r.push(o);
// Flatten any nested arrays
return ut.apply([],r)},
// A global GUID counter for objects
guid:1,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:vt}),"function"==typeof Symbol&&(xt.fn[Symbol.iterator]=st[Symbol.iterator]),
// Populate the class2type map
xt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){ht["[object "+e+"]"]=e.toLowerCase()});var Ct=
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(n){function w(t,e,n,i){var o,s,r,a,l,u,c,d=e&&e.ownerDocument,
// nodeType defaults to 9, since context defaults to document
h=e?e.nodeType:9;
// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof t||!t||1!==h&&9!==h&&11!==h)return n;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!i&&((e?e.ownerDocument||e:N)!==P&&A(e),e=e||P,L)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==h&&(l=vt.exec(t)))
// ID selector
if(o=l[1]){
// Document context
if(9===h){if(!(r=e.getElementById(o)))return n;
// Element context
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(r.id===o)return n.push(r),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(d&&(r=d.getElementById(o))&&H(e,r)&&r.id===o)return n.push(r),n;
// Type selector
}else{if(l[2])return Z.apply(n,e.getElementsByTagName(t)),n;
// Class selector
if((o=l[3])&&x.getElementsByClassName&&e.getElementsByClassName)return Z.apply(n,e.getElementsByClassName(o)),n}
// Take advantage of querySelectorAll
if(x.qsa&&!G[t+" "]&&(!q||!q.test(t))){if(1!==h)d=e,c=t;else if("object"!==e.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(a=e.getAttribute("id"))?a=a.replace(kt,xt):e.setAttribute("id",a=R),s=(
// Prefix every selector in the list
u=j(t)).length;s--;)u[s]="#"+a+" "+p(u[s]);c=u.join(","),
// Expand context for sibling selectors
d=yt.test(t)&&f(e.parentNode)||e}if(c)try{return Z.apply(n,d.querySelectorAll(c)),n}catch(t){}finally{a===R&&e.removeAttribute("id")}}}
// All others
return T(t.replace(at,"$1"),e,n,i)}
/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function t(){function n(t,e){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
return i.push(t+" ")>$.cacheLength&&
// Only keep the most recent entries
delete n[i.shift()],n[t+" "]=e}var i=[];return n}
/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function l(t){return t[R]=!0,t}
/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function o(t){var e=P.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{
// Remove from its parent by default
e.parentNode&&e.parentNode.removeChild(e),
// release memory in IE
e=null}}
/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function e(t,e){for(var n=t.split("|"),i=n.length;i--;)$.attrHandle[n[i]]=e}
/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function u(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(i)return i;
// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}
/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function i(n){return function(t){var e;return"input"===t.nodeName.toLowerCase()&&t.type===n}}
/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function s(n){return function(t){var e=t.nodeName.toLowerCase();return("input"===e||"button"===e)&&t.type===n}}
/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function r(e){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
return"form"in t?
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
t.parentNode&&!1===t.disabled?
// Option elements defer to a parent optgroup if present
"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||
// Where there is no isDisabled, check manually
/* jshint -W018 */
t.isDisabled!==!e&&Ct(t)===e:t.disabled===e:"label"in t&&t.disabled===e;
// Remaining elements are neither :enabled nor :disabled
}}
/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function a(r){return l(function(s){return s=+s,l(function(t,e){
// Match elements found at the specified indexes
for(var n,i=r([],t.length,s),o=i.length;o--;)t[n=i[o]]&&(t[n]=!(e[n]=t[n]))})})}
/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function f(t){return t&&void 0!==t.getElementsByTagName&&t}
// Expose support vars for convenience
// Easy API for creating new setFilters
function c(){}function p(t){for(var e=0,n=t.length,i="";e<n;e++)i+=t[e].value;return i}function d(a,t,e){var l=t.dir,u=t.next,c=u||l,d=e&&"parentNode"===c,h=B++;return t.first?
// Check against closest ancestor/preceding element
function(t,e,n){for(;t=t[l];)if(1===t.nodeType||d)return a(t,e,n);return!1}:
// Check against all ancestor/preceding elements
function(t,e,n){var i,o,s,r=[F,h];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(n){for(;t=t[l];)if((1===t.nodeType||d)&&a(t,e,n))return!0}else for(;t=t[l];)if(1===t.nodeType||d)if(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(s=t[R]||(t[R]={}))[t.uniqueID]||(s[t.uniqueID]={}),u&&u===t.nodeName.toLowerCase())t=t[l]||t;else{if((i=o[c])&&i[0]===F&&i[1]===h)
// Assign to newCache so results back-propagate to previous elements
return r[2]=i[2];
// A match means we're done; a fail means we have to keep checking
if((
// Reuse newcache so results back-propagate to previous elements
o[c]=r)[2]=a(t,e,n))return!0}return!1}}function h(o){return 1<o.length?function(t,e,n){for(var i=o.length;i--;)if(!o[i](t,e,n))return!1;return!0}:o[0]}function y(t,e,n){for(var i=0,o=e.length;i<o;i++)w(t,e[i],n);return n}function k(t,e,n,i,o){for(var s,r=[],a=0,l=t.length,u=null!=e;a<l;a++)(s=t[a])&&(n&&!n(s,i,o)||(r.push(s),u&&e.push(a)));return r}function b(f,p,m,g,v,t){return g&&!g[R]&&(g=b(g)),v&&!v[R]&&(v=b(v,t)),l(function(t,e,n,i){var o,s,r,a=[],l=[],u=e.length,
// Get initial elements from seed or context
c=t||y(p||"*",n.nodeType?[n]:n,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
d=!f||!t&&p?c:k(c,a,f,n,i),h=m?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
v||(t?f:u||g)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
e:d;
// Find primary matches
// Apply postFilter
if(m&&m(d,h,n,i),g)for(o=k(h,l),g(o,[],n,i),
// Un-match failing elements by moving them back to matcherIn
s=o.length;s--;)(r=o[s])&&(h[l[s]]=!(d[l[s]]=r));if(t){if(v||f){if(v){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
o=[],s=h.length;s--;)(r=h[s])&&
// Restore matcherIn since elem is not yet a final match
o.push(d[s]=r);v(null,h=[],o,i)}
// Move matched elements from seed to results to keep them synchronized
for(s=h.length;s--;)(r=h[s])&&-1<(o=v?tt(t,r):a[s])&&(t[o]=!(e[o]=r))}
// Add elements to results, through postFinder if defined
}else h=k(h===e?h.splice(u,h.length):h),v?v(null,e,h,i):Z.apply(e,h)})}function m(t){for(var o,e,n,i=t.length,s=$.relative[t[0].type],r=s||$.relative[" "],a=s?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
l=d(function(t){return t===o},r,!0),u=d(function(t){return-1<tt(o,t)},r,!0),c=[function(t,e,n){var i=!s&&(n||e!==E)||((o=e).nodeType?l(t,e,n):u(t,e,n));
// Avoid hanging onto element (issue #299)
return o=null,i}];a<i;a++)if(e=$.relative[t[a].type])c=[d(h(c),e)];else{
// Return special upon seeing a positional matcher
if((e=$.filter[t[a].type].apply(null,t[a].matches))[R]){for(
// Find the next relative operator (if any) for proper handling
n=++a;n<i&&!$.relative[t[n].type];n++);return b(1<a&&h(c),1<a&&p(
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(at,"$1"),e,a<n&&m(t.slice(a,n)),n<i&&m(t=t.slice(n)),n<i&&p(t))}c.push(e)}return h(c)}function g(g,v){var y=0<v.length,b=0<g.length,t=function(t,e,n,i,o){var s,r,a,l=0,u="0",c=t&&[],d=[],h=E,
// We must always have either seed elements or outermost context
f=t||b&&$.find.TAG("*",o),
// Use integer dirruns iff this is the outermost matcher
p=F+=null==h?1:Math.random()||.1,m=f.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(o&&(E=e===P||e||o);u!==m&&null!=(s=f[u]);u++){if(b&&s){for(r=0,e||s.ownerDocument===P||(A(s),n=!L);a=g[r++];)if(a(s,e||P,n)){i.push(s);break}o&&(F=p)}
// Track unmatched elements for set filters
y&&(
// They will have gone through all possible matchers
(s=!a&&s)&&l--,
// Lengthen the array for every element, matched or not
t&&c.push(s))}
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(l+=u,y&&u!==l){for(r=0;a=v[r++];)a(c,d,e,n);if(t){
// Reintegrate element matches to eliminate the need for sorting
if(0<l)for(;u--;)c[u]||d[u]||(d[u]=V.call(i));
// Discard index placeholder values to get only actual matches
d=k(d)}
// Add matches to results
Z.apply(i,d),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
o&&!t&&0<d.length&&1<l+v.length&&w.uniqueSort(i)}
// Override manipulation of globals by nested matchers
return o&&(F=p,E=h),c};return y?l(t):t}var v,x,$,C,_,j,S,T,E,O,z,
// Local document vars
A,P,D,L,q,M,I,H,
// Instance-specific data
R="sizzle"+1*new Date,N=n.document,F=0,B=0,W=t(),U=t(),G=t(),Q=function(t,e){return t===e&&(z=!0),0},
// Instance methods
Y={}.hasOwnProperty,K=[],V=K.pop,X=K.push,Z=K.push,J=K.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
tt=function(t,e){for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n;return-1},et="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
nt="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
it="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
ot="\\["+nt+"*("+it+")(?:"+nt+
// Operator (capture 2)
"*([*^$|!~]?=)"+nt+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+it+"))|)"+nt+"*\\]",st=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ot+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
rt=new RegExp(nt+"+","g"),at=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),lt=new RegExp("^"+nt+"*,"+nt+"*"),ut=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),ct=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),dt=new RegExp(st),ht=new RegExp("^"+it+"$"),ft={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it+"|[*])"),ATTR:new RegExp("^"+ot),PSEUDO:new RegExp("^"+st),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),bool:new RegExp("^(?:"+et+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")},pt=/^(?:input|select|textarea|button)$/i,mt=/^h\d$/i,gt=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
vt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,yt=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
bt=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),wt=function(t,e,n){var i="0x"+e-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return i!=i||n?e:i<0?
// BMP codepoint
String.fromCharCode(i+65536):
// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(i>>10|55296,1023&i|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
kt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,xt=function(t,e){return e?
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t;
// Other potentially-special ASCII characters get backslash-escaped
},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
$t=function(){A()},Ct=d(function(t){return!0===t.disabled&&("form"in t||"label"in t)},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{Z.apply(K=J.call(N.childNodes),N.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
K[N.childNodes.length].nodeType}catch(t){Z={apply:K.length?
// Leverage slice if possible
function(t,e){X.apply(t,J.call(e))}:
// Support: IE<9
// Otherwise append directly
function(t,e){
// Can't trust NodeList.length
for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}
// Add button/input type pseudos
for(v in x=w.support={},
/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
_=w.isXML=function(t){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},
/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
A=w.setDocument=function(t){var e,n,i=t?t.ownerDocument||t:N;
// Return early if doc is invalid or already selected
return i!==P&&9===i.nodeType&&i.documentElement&&(
// Update global variables
D=(P=i).documentElement,L=!_(P),
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
N!==P&&(n=P.defaultView)&&n.top!==n&&(
// Support: IE 11, Edge
n.addEventListener?n.addEventListener("unload",$t,!1):n.attachEvent&&n.attachEvent("onunload",$t)),
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
x.attributes=o(function(t){return t.className="i",!t.getAttribute("className")}),
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
x.getElementsByTagName=o(function(t){return t.appendChild(P.createComment("")),!t.getElementsByTagName("*").length}),
// Support: IE<9
x.getElementsByClassName=gt.test(P.getElementsByClassName),
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
x.getById=o(function(t){return D.appendChild(t).id=R,!P.getElementsByName||!P.getElementsByName(R).length}),
// ID filter and find
x.getById?($.filter.ID=function(t){var e=t.replace(bt,wt);return function(t){return t.getAttribute("id")===e}},$.find.ID=function(t,e){if(void 0!==e.getElementById&&L){var n=e.getElementById(t);return n?[n]:[]}}):($.filter.ID=function(t){var n=t.replace(bt,wt);return function(t){var e=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return e&&e.value===n}},
// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
$.find.ID=function(t,e){if(void 0!==e.getElementById&&L){var n,i,o,s=e.getElementById(t);if(s){if((
// Verify the id attribute
n=s.getAttributeNode("id"))&&n.value===t)return[s];
// Fall back on getElementsByName
for(o=e.getElementsByName(t),i=0;s=o[i++];)if((n=s.getAttributeNode("id"))&&n.value===t)return[s]}return[]}}),
// Tag
$.find.TAG=x.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):x.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],o=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
s=e.getElementsByTagName(t);
// Filter out possible comments
if("*"!==t)return s;for(;n=s[o++];)1===n.nodeType&&i.push(n);return i},
// Class
$.find.CLASS=x.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&L)return e.getElementsByClassName(t)},
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
M=[],
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
q=[],(x.qsa=gt.test(P.querySelectorAll))&&(
// Build QSA regex
// Regex strategy adopted from Diego Perini
o(function(t){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
D.appendChild(t).innerHTML="<a id='"+R+"'></a><select id='"+R+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
t.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+nt+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
t.querySelectorAll("[selected]").length||q.push("\\["+nt+"*(?:value|"+et+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
t.querySelectorAll("[id~="+R+"-]").length||q.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
t.querySelectorAll(":checked").length||q.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
t.querySelectorAll("a#"+R+"+*").length||q.push(".#.+[+~]")}),o(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var e=P.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
t.querySelectorAll("[name=d]").length&&q.push("name"+nt+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==t.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
D.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
t.querySelectorAll("*,:x"),q.push(",.*:")})),(x.matchesSelector=gt.test(I=D.matches||D.webkitMatchesSelector||D.mozMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&o(function(t){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
x.disconnectedMatch=I.call(t,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
I.call(t,"[s!='']:x"),M.push("!=",st)}),q=q.length&&new RegExp(q.join("|")),M=M.length&&new RegExp(M.join("|")),
/* Contains
	---------------------------------------------------------------------- */
e=gt.test(D.compareDocumentPosition),
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
H=e||gt.test(D.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
Q=e?function(t,e){
// Flag for duplicate removal
if(t===e)return z=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n||(
// Disconnected nodes
1&(
// Calculate position if both inputs belong to the same document
n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):
// Otherwise we know they are disconnected
1)||!x.sortDetached&&e.compareDocumentPosition(t)===n?
// Choose the first element that is related to our preferred document
t===P||t.ownerDocument===N&&H(N,t)?-1:e===P||e.ownerDocument===N&&H(N,e)?1:O?tt(O,t)-tt(O,e):0:4&n?-1:1)}:function(t,e){
// Exit early if the nodes are identical
if(t===e)return z=!0,0;var n,i=0,o=t.parentNode,s=e.parentNode,r=[t],a=[e];
// Parentless nodes are either documents or disconnected
if(!o||!s)return t===P?-1:e===P?1:o?-1:s?1:O?tt(O,t)-tt(O,e):0;
// If the nodes are siblings, we can do a quick check
// Otherwise we need full lists of their ancestors for comparison
if(o===s)return u(t,e);for(n=t;n=n.parentNode;)r.unshift(n);for(n=e;n=n.parentNode;)a.unshift(n);
// Walk down the tree looking for a discrepancy
for(;r[i]===a[i];)i++;return i?
// Do a sibling check if the nodes have a common ancestor
u(r[i],a[i]):
// Otherwise nodes in our document sort first
r[i]===N?-1:a[i]===N?1:0}),P},w.matches=function(t,e){return w(t,null,null,e)},w.matchesSelector=function(t,e){if(
// Set document vars if needed
(t.ownerDocument||t)!==P&&A(t),
// Make sure that attribute selectors are quoted
e=e.replace(ct,"='$1']"),x.matchesSelector&&L&&!G[e+" "]&&(!M||!M.test(e))&&(!q||!q.test(e)))try{var n=I.call(t,e);
// IE 9's matchesSelector returns false on disconnected nodes
if(n||x.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
t.document&&11!==t.document.nodeType)return n}catch(t){}return 0<w(e,P,null,[t]).length},w.contains=function(t,e){
// Set document vars if needed
return(t.ownerDocument||t)!==P&&A(t),H(t,e)},w.attr=function(t,e){
// Set document vars if needed
(t.ownerDocument||t)!==P&&A(t);var n=$.attrHandle[e.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
i=n&&Y.call($.attrHandle,e.toLowerCase())?n(t,e,!L):void 0;return void 0!==i?i:x.attributes||!L?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},w.escape=function(t){return(t+"").replace(kt,xt)},w.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},
/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
w.uniqueSort=function(t){var e,n=[],i=0,o=0;
// Unless we *know* we can detect duplicates, assume their presence
if(z=!x.detectDuplicates,O=!x.sortStable&&t.slice(0),t.sort(Q),z){for(;e=t[o++];)e===t[o]&&(i=n.push(o));for(;i--;)t.splice(n[i],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return O=null,t},
/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
C=w.getText=function(t){var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof t.textContent)return t.textContent;
// Traverse its children
for(t=t.firstChild;t;t=t.nextSibling)n+=C(t)}else if(3===o||4===o)return t.nodeValue;
// Do not include comment or processing instruction nodes
}else
// If no nodeType, this is expected to be an array
for(;e=t[i++];)
// Do not traverse comment nodes
n+=C(e);return n},($=w.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:l,match:ft,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(bt,wt),
// Move the given value to match[3] whether quoted or unquoted
t[3]=(t[3]||t[4]||t[5]||"").replace(bt,wt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){
/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(
// nth-* requires argument
t[3]||w.error(t[0]),
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&w.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return ft.CHILD.test(t[0])?null:(
// Accept quoted arguments as-is
t[3]?t[2]=t[4]||t[5]||"":n&&dt.test(n)&&(
// Get excess from tokenize (recursively)
e=j(n,!0))&&(
// advance to the next closing parenthesis
e=n.indexOf(")",n.length-e)-n.length)&&(
// excess is a negative index
t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(bt,wt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=W[t+" "];return e||(e=new RegExp("(^|"+nt+")"+t+"("+nt+"|$)"))&&W(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(n,i,o){return function(t){var e=w.attr(t,n);return null==e?"!="===i:!i||(e+="","="===i?e===o:"!="===i?e!==o:"^="===i?o&&0===e.indexOf(o):"*="===i?o&&-1<e.indexOf(o):"$="===i?o&&e.slice(-o.length)===o:"~="===i?-1<(" "+e.replace(rt," ")+" ").indexOf(o):"|="===i&&(e===o||e.slice(0,o.length+1)===o+"-"))}},CHILD:function(p,t,e,m,g){var v="nth"!==p.slice(0,3),y="last"!==p.slice(-4),b="of-type"===t;return 1===m&&0===g?
// Shortcut for :nth-*(n)
function(t){return!!t.parentNode}:function(t,e,n){var i,o,s,r,a,l,u=v!==y?"nextSibling":"previousSibling",c=t.parentNode,d=b&&t.nodeName.toLowerCase(),h=!n&&!b,f=!1;if(c){
// :(first|last|only)-(child|of-type)
if(v){for(;u;){for(r=t;r=r[u];)if(b?r.nodeName.toLowerCase()===d:1===r.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
l=u="only"===p&&!l&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(l=[y?c.firstChild:c.lastChild],y&&h){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
f=(a=(i=(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(s=(r=c)[R]||(r[R]={}))[r.uniqueID]||(s[r.uniqueID]={}))[p]||[])[0]===F&&i[1])&&i[2],r=a&&c.childNodes[a];r=++a&&r&&r[u]||(
// Fallback to seeking `elem` from the start
f=a=0)||l.pop();)
// When found, cache indexes on `parent` and break
if(1===r.nodeType&&++f&&r===t){o[p]=[F,a,f];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
h&&(f=a=(i=(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(s=(
// ...in a gzip-friendly way
r=t)[R]||(r[R]={}))[r.uniqueID]||(s[r.uniqueID]={}))[p]||[])[0]===F&&i[1]),!1===f)
// Use the same loop as above to seek `elem` from the start
for(;(r=++a&&r&&r[u]||(f=a=0)||l.pop())&&((b?r.nodeName.toLowerCase()!==d:1!==r.nodeType)||!++f||(
// Cache the index of each encountered element
h&&((
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(s=r[R]||(r[R]={}))[r.uniqueID]||(s[r.uniqueID]={}))[p]=[F,f]),r!==t)););
// Incorporate the offset, then check against cycle size
return(f-=g)===m||f%m==0&&0<=f/m}}},PSEUDO:function(t,s){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var e,r=$.pseudos[t]||$.setFilters[t.toLowerCase()]||w.error("unsupported pseudo: "+t);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
return r[R]?r(s):
// But maintain support for old signatures
1<r.length?(e=[t,t,"",s],$.setFilters.hasOwnProperty(t.toLowerCase())?l(function(t,e){for(var n,i=r(t,s),o=i.length;o--;)t[n=tt(t,i[o])]=!(e[n]=i[o])}):function(t){return r(t,0,e)}):r}},pseudos:{
// Potentially complex pseudos
not:l(function(t){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var i=[],o=[],a=S(t.replace(at,"$1"));return a[R]?l(function(t,e,n,i){
// Match elements unmatched by `matcher`
for(var o,s=a(t,null,i,[]),r=t.length;r--;)(o=s[r])&&(t[r]=!(e[r]=o))}):function(t,e,n){return i[0]=t,a(i,null,n,o),
// Don't keep the element (issue #299)
i[0]=null,!o.pop()}}),has:l(function(e){return function(t){return 0<w(e,t).length}}),contains:l(function(e){return e=e.replace(bt,wt),function(t){return-1<(t.textContent||t.innerText||C(t)).indexOf(e)}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:l(function(n){
// lang value must be a valid identifier
return ht.test(n||"")||w.error("unsupported lang: "+n),n=n.replace(bt,wt).toLowerCase(),function(t){var e;do{if(e=L?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(e=e.toLowerCase())===n||0===e.indexOf(n+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),
// Miscellaneous
target:function(t){var e=n.location&&n.location.hash;return e&&e.slice(1)===t.id},root:function(t){return t===D},focus:function(t){return t===P.activeElement&&(!P.hasFocus||P.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},
// Boolean properties
enabled:r(!1),disabled:r(!0),checked:function(t){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){
// Accessing this property makes selected-by-default
// options in Safari work properly
return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},
// Contents
empty:function(t){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!$.pseudos.empty(t)},
// Element/input types
header:function(t){return mt.test(t.nodeName)},input:function(t){return pt.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},
// Position-in-collection
first:a(function(){return[0]}),last:a(function(t,e){return[e-1]}),eq:a(function(t,e,n){return[n<0?n+e:n]}),even:a(function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t}),odd:a(function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t}),lt:a(function(t,e,n){for(var i=n<0?n+e:n;0<=--i;)t.push(i);return t}),gt:a(function(t,e,n){for(var i=n<0?n+e:n;++i<e;)t.push(i);return t})}}).pseudos.nth=$.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})$.pseudos[v]=i(v);for(v in{submit:!0,reset:!0})$.pseudos[v]=s(v);return c.prototype=$.filters=$.pseudos,$.setFilters=new c,j=w.tokenize=function(t,e){var n,i,o,s,r,a,l,u=U[t+" "];if(u)return e?0:u.slice(0);for(r=t,a=[],l=$.preFilter;r;){
// Filters
for(s in
// Comma and first run
n&&!(i=lt.exec(r))||(i&&(
// Don't consume trailing commas as valid
r=r.slice(i[0].length)||r),a.push(o=[])),n=!1,
// Combinators
(i=ut.exec(r))&&(n=i.shift(),o.push({value:n,
// Cast descendant combinators to space
type:i[0].replace(at," ")}),r=r.slice(n.length)),$.filter)!(i=ft[s].exec(r))||l[s]&&!(i=l[s](i))||(n=i.shift(),o.push({value:n,type:s,matches:i}),r=r.slice(n.length));if(!n)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return e?r.length:r?w.error(t):
// Cache the tokens
U(t,a).slice(0)},S=w.compile=function(t,e/* Internal Use Only */){var n,i=[],o=[],s=G[t+" "];if(!s){for(
// Generate a function of recursive functions that can be used to check each element
e||(e=j(t)),n=e.length;n--;)(s=m(e[n]))[R]?i.push(s):o.push(s);
// Cache the compiled function
// Save selector and tokenization
(s=G(t,g(o,i))).selector=t}return s},
/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
T=w.select=function(t,e,n,i){var o,s,r,a,l,u="function"==typeof t&&t,c=!i&&j(t=u.selector||t);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===c.length){if(2<(
// Reduce context if the leading compound selector is an ID
s=c[0]=c[0].slice(0)).length&&"ID"===(r=s[0]).type&&9===e.nodeType&&L&&$.relative[s[1].type]){if(!(e=($.find.ID(r.matches[0].replace(bt,wt),e)||[])[0]))return n;
// Precompiled matchers will still verify ancestry, so step up a level
u&&(e=e.parentNode),t=t.slice(s.shift().value.length)}
// Fetch a seed set for right-to-left matching
for(o=ft.needsContext.test(t)?0:s.length;o--&&(r=s[o],!$.relative[a=r.type]);)if((l=$.find[a])&&(i=l(r.matches[0].replace(bt,wt),yt.test(s[0].type)&&f(e.parentNode)||e))){if(
// If seed is empty or no tokens remain, we can return early
s.splice(o,1),!(t=i.length&&p(s)))return Z.apply(n,i),n;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(u||S(t,c))(i,e,!L,n,!e||yt.test(t)&&f(e.parentNode)||e),n},
// One-time assignments
// Sort stability
x.sortStable=R.split("").sort(Q).join("")===R,
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
x.detectDuplicates=!!z,
// Initialize against the default document
A(),
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
x.sortDetached=o(function(t){
// Should return 1, but returns 4 (following)
return 1&t.compareDocumentPosition(P.createElement("fieldset"))}),
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
o(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||e("type|href|height|width",function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
x.attributes&&o(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||e("value",function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
o(function(t){return null==t.getAttribute("disabled")})||e(et,function(t,e,n){var i;if(!n)return!0===t[e]?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),w}($);xt.find=Ct,xt.expr=Ct.selectors,
// Deprecated
xt.expr[":"]=xt.expr.pseudos,xt.uniqueSort=xt.unique=Ct.uniqueSort,xt.text=Ct.getText,xt.isXMLDoc=Ct.isXML,xt.contains=Ct.contains,xt.escapeSelector=Ct.escape;var _t=function(t,e,n){for(var i=[],o=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o&&xt(t).is(n))break;i.push(t)}return i},jt=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},St=xt.expr.match.needsContext,Tt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;xt.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?xt.find.matchesSelector(i,t)?[i]:[]:xt.find.matches(t,xt.grep(e,function(t){return 1===t.nodeType}))},xt.fn.extend({find:function(t){var e,n,i=this.length,o=this;if("string"!=typeof t)return this.pushStack(xt(t).filter(function(){for(e=0;e<i;e++)if(xt.contains(o[e],this))return!0}));for(n=this.pushStack([]),e=0;e<i;e++)xt.find(t,o[e],n);return 1<i?xt.uniqueSort(n):n},filter:function(t){return this.pushStack(e(this,t||[],!1))},not:function(t){return this.pushStack(e(this,t||[],!0))},is:function(t){return!!e(this,
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof t&&St.test(t)?xt(t):t||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var Et,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
Ot=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,zt;
// Give the init function the jQuery prototype for later instantiation
(xt.fn.init=function(t,e,n){var i,o;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!t)return this;
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
// Handle HTML strings
if(n=n||Et,"string"!=typeof t)return t.nodeType?(this[0]=t,this.length=1,this):yt(t)?void 0!==n.ready?n.ready(t):
// Execute immediately if ready is not present
t(xt):xt.makeArray(t,this);
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
i="<"===t[0]&&">"===t[t.length-1]&&3<=t.length?[null,t,null]:Ot.exec(t))||!i[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);
// HANDLE: $(DOMElement)
// HANDLE: $(html) -> $(array)
if(i[1]){
// HANDLE: $(html, props)
if(e=e instanceof xt?e[0]:e,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
xt.merge(this,xt.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:rt,!0)),Tt.test(i[1])&&xt.isPlainObject(e))for(i in e)
// Properties of context are called as methods if possible
yt(this[i])?this[i](e[i]):this.attr(i,e[i]);return this;
// HANDLE: $(#id)
}
// HANDLE: $(expr, $(...))
return(o=rt.getElementById(i[2]))&&(
// Inject the element directly into the jQuery object
this[0]=o,this.length=1),this}).prototype=xt.fn,
// Initialize central reference
Et=xt(rt);var At=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
Pt={children:!0,contents:!0,next:!0,prev:!0};xt.fn.extend({has:function(t){var e=xt(t,this),n=e.length;return this.filter(function(){for(var t=0;t<n;t++)if(xt.contains(this,e[t]))return!0})},closest:function(t,e){var n,i=0,o=this.length,s=[],r="string"!=typeof t&&xt(t);
// Positional selectors never match, since there's no _selection_ context
if(!St.test(t))for(;i<o;i++)for(n=this[i];n&&n!==e;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(r?-1<r.index(n):
// Don't pass non-elements to Sizzle
1===n.nodeType&&xt.find.matchesSelector(n,t))){s.push(n);break}return this.pushStack(1<s.length?xt.uniqueSort(s):s)},
// Determine the position of an element within the set
index:function(t){
// No argument, return index in parent
return t?
// Index in selector
"string"==typeof t?dt.call(xt(t),this[0]):dt.call(this,
// If it receives a jQuery object, the first element is used
t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(xt.uniqueSort(xt.merge(this.get(),xt(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),xt.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return _t(t,"parentNode")},parentsUntil:function(t,e,n){return _t(t,"parentNode",n)},next:function(t){return n(t,"nextSibling")},prev:function(t){return n(t,"previousSibling")},nextAll:function(t){return _t(t,"nextSibling")},prevAll:function(t){return _t(t,"previousSibling")},nextUntil:function(t,e,n){return _t(t,"nextSibling",n)},prevUntil:function(t,e,n){return _t(t,"previousSibling",n)},siblings:function(t){return jt((t.parentNode||{}).firstChild,t)},children:function(t){return jt(t.firstChild)},contents:function(t){return u(t,"iframe")?t.contentDocument:(
// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
u(t,"template")&&(t=t.content||t),xt.merge([],t.childNodes))}},function(i,o){xt.fn[i]=function(t,e){var n=xt.map(this,o,t);return"Until"!==i.slice(-5)&&(e=t),e&&"string"==typeof e&&(n=xt.filter(e,n)),1<this.length&&(
// Remove duplicates
Pt[i]||xt.uniqueSort(n),
// Reverse order for parents* and prev-derivatives
At.test(i)&&n.reverse()),this.pushStack(n)}});var Dt=/[^\x20\t\r\n\f]+/g;xt.Callbacks=function(i){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
i="string"==typeof i?c(i):xt.extend({},i);var// Flag to know if list is currently firing
n,
// Last fire value for non-forgettable lists
t,
// Flag to know if list was already fired
e,
// Flag to prevent firing
o,
// Actual callback list
s=[],
// Queue of execution data for repeatable lists
r=[],
// Index of currently firing callback (modified by add/remove as needed)
a=-1,
// Fire callbacks
l=function(){for(
// Enforce single-firing
o=o||i.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
e=n=!0;r.length;a=-1)for(t=r.shift();++a<s.length;)
// Run callback and check for early termination
!1===s[a].apply(t[0],t[1])&&i.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
a=s.length,t=!1);
// Forget the data if we're done with it
i.memory||(t=!1),n=!1,
// Clean up if we're done firing for good
o&&(
// Keep an empty list if we have data for future add calls
s=t?[]:"")},
// Actual Callbacks object
u={
// Add a callback or a collection of callbacks to the list
add:function(){return s&&(
// If we have memory from a past run, we should fire after adding
t&&!n&&(a=s.length-1,r.push(t)),function n(t){xt.each(t,function(t,e){yt(e)?i.unique&&u.has(e)||s.push(e):e&&e.length&&"string"!==g(e)&&
// Inspect recursively
n(e)})}(arguments),t&&!n&&l()),this},
// Remove a callback from the list
remove:function(){return xt.each(arguments,function(t,e){for(var n;-1<(n=xt.inArray(e,s,n));)s.splice(n,1),
// Handle firing indexes
n<=a&&a--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(t){return t?-1<xt.inArray(t,s):0<s.length},
// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return o=r=[],s=t="",this},disabled:function(){return!s},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return o=r=[],t||n||(s=t=""),this},locked:function(){return!!o},
// Call all callbacks with the given context and arguments
fireWith:function(t,e){return o||(e=[t,(e=e||[]).slice?e.slice():e],r.push(e),n||l()),this},
// Call all the callbacks with the given arguments
fire:function(){return u.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!e}};return u},xt.extend({Deferred:function(t){var s=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",xt.Callbacks("memory"),xt.Callbacks("memory"),2],["resolve","done",xt.Callbacks("once memory"),xt.Callbacks("once memory"),0,"resolved"],["reject","fail",xt.Callbacks("once memory"),xt.Callbacks("once memory"),1,"rejected"]],o="pending",r={state:function(){return o},always:function(){return a.done(arguments).fail(arguments),this},catch:function(t){return r.then(null,t)},
// Keep pipe for back-compat
pipe:function(){var o=arguments;return xt.Deferred(function(i){xt.each(s,function(t,e){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var n=yt(o[e[4]])&&o[e[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
a[e[1]](function(){var t=n&&n.apply(this,arguments);t&&yt(t.promise)?t.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[e[0]+"With"](this,n?[t]:arguments)})}),o=null}).promise()},then:function(e,n,i){function l(o,s,r,a){return function(){var n=this,i=arguments,t=function(){var t,e;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(o<u)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((t=r.apply(n,i))===s.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
e=t&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof t||"function"==typeof t)&&t.then,
// Handle a returned thenable
yt(e)?
// Special processors (notify) just wait for resolution
a?e.call(t,l(u,s,d,a),l(u,s,h,a)):(
// ...and disregard older resolution values
u++,e.call(t,l(u,s,d,a),l(u,s,h,a),l(u,s,d,s.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
r!==d&&(n=void 0,i=[t]),
// Process the value(s)
// Default process is resolve
(a||s.resolveWith)(n,i))}},
// Only normal processors (resolve) catch and reject exceptions
e=a?t:function(){try{t()}catch(t){xt.Deferred.exceptionHook&&xt.Deferred.exceptionHook(t,e.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
u<=o+1&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
r!==h&&(n=void 0,i=[t]),s.rejectWith(n,i))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
o?e():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
xt.Deferred.getStackHook&&(e.stackTrace=xt.Deferred.getStackHook()),$.setTimeout(e))}}var u=0;return xt.Deferred(function(t){
// progress_handlers.add( ... )
s[0][3].add(l(0,t,yt(i)?i:d,t.notifyWith)),
// fulfilled_handlers.add( ... )
s[1][3].add(l(0,t,yt(e)?e:d)),
// rejected_handlers.add( ... )
s[2][3].add(l(0,t,yt(n)?n:h))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(t){return null!=t?xt.extend(t,r):r}},a={};
// Add list-specific methods
// All done!
return xt.each(s,function(t,e){var n=e[2],i=e[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
r[e[1]]=n.add,
// Handle state
i&&n.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
o=i},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
s[3-t][2].disable,
// rejected_handlers.disable
// fulfilled_handlers.disable
s[3-t][3].disable,
// progress_callbacks.lock
s[0][2].lock,
// progress_handlers.lock
s[0][3].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
n.add(e[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
a[e[0]]=function(){return a[e[0]+"With"](this===a?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
a[e[0]+"With"]=n.fireWith}),
// Make the deferred a promise
r.promise(a),
// Call given func if any
t&&t.call(a,a),a},
// Deferred helper
when:function(t){var
// count of uncompleted subordinates
n=arguments.length,
// count of unprocessed arguments
e=n,
// subordinate fulfillment data
i=Array(e),o=lt.call(arguments),
// the master Deferred
s=xt.Deferred(),
// subordinate callback factory
r=function(e){return function(t){i[e]=this,o[e]=1<arguments.length?lt.call(arguments):t,--n||s.resolveWith(i,o)}};
// Single- and empty arguments are adopted like Promise.resolve
if(n<=1&&(l(t,s.done(r(e)).resolve,s.reject,!n),"pending"===s.state()||yt(o[e]&&o[e].then)))return s.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;e--;)l(o[e],r(e),s.reject);return s.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Lt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;xt.Deferred.exceptionHook=function(t,e){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
$.console&&$.console.warn&&t&&Lt.test(t.name)&&$.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},xt.readyException=function(t){$.setTimeout(function(){throw t})};
// The deferred used on DOM ready
var qt=xt.Deferred();xt.fn.ready=function(t){return qt.then(t).catch(function(t){xt.readyException(t)}),this},xt.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(t){
// Abort if there are pending holds or we're already ready
(!0===t?--xt.readyWait:xt.isReady)||(
// Remember that the DOM is ready
xt.isReady=!0)!==t&&0<--xt.readyWait||
// If there are functions bound, to execute
qt.resolveWith(rt,[xt])}}),xt.ready.then=qt.then,"complete"===rt.readyState||"loading"!==rt.readyState&&!rt.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
$.setTimeout(xt.ready):(
// Use the handy event callback
rt.addEventListener("DOMContentLoaded",i),
// A fallback to window.onload, that will always work
$.addEventListener("load",i));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Mt=function(t,e,n,i,o,s,r){var a=0,l=t.length,u=null==n;
// Sets many values
if("object"===g(n))for(a in o=!0,n)Mt(t,e,a,n[a],!0,s,r);
// Sets one value
else if(void 0!==i&&(o=!0,yt(i)||(r=!0),u&&(
// Bulk operations run against the entire set
e=r?(e.call(t,i),null):(u=e,function(t,e,n){return u.call(xt(t),n)})),e))for(;a<l;a++)e(t[a],n,r?i:i.call(t[a],a,e(t[a],n)));return o?t:
// Gets
u?e.call(t):l?e(t[0],n):s},It=/^-ms-/,Ht=/-([a-z])/g,Rt=function(t){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===t.nodeType||9===t.nodeType||!+t.nodeType};
// Matches dashed string for camelizing
s.uid=1,s.prototype={cache:function(t){
// Check if the owner object already has a cache
var e=t[this.expando];
// If not, create one
return e||(e={},
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
Rt(t)&&(
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var i,o=this.cache(t);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof e)o[f(e)]=n;
// Handle: [ owner, { properties } ] args
else
// Copy the properties one-by-one to the cache object
for(i in e)o[f(i)]=e[i];return o},get:function(t,e){return void 0===e?this.cache(t):
// Always use camelCase key (gh-2257)
t[this.expando]&&t[this.expando][f(e)]},access:function(t,e,n){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
return void 0===e||e&&"string"==typeof e&&void 0===n?this.get(t,e):(
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,i=t[this.expando];if(void 0!==i){if(void 0!==e){n=(
// Support array or space separated string of keys
// If key is an array of keys...
// We always set camelCase keys, so remove that.
e=Array.isArray(e)?e.map(f):(e=f(e))in i?[e]:e.match(Dt)||[]).length;for(;n--;)delete i[e[n]]}
// Remove the expando if there's no more data
(void 0===e||xt.isEmptyObject(i))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!xt.isEmptyObject(e)}};var Nt=new s,Ft=new s,Bt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Wt=/[A-Z]/g;xt.extend({hasData:function(t){return Ft.hasData(t)||Nt.hasData(t)},data:function(t,e,n){return Ft.access(t,e,n)},removeData:function(t,e){Ft.remove(t,e)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(t,e,n){return Nt.access(t,e,n)},_removeData:function(t,e){Nt.remove(t,e)}}),xt.fn.extend({data:function(n,t){var e,i,o,s=this[0],r=s&&s.attributes;
// Gets all values
if(void 0!==n)
// Sets multiple values
return"object"==typeof n?this.each(function(){Ft.set(this,n)}):Mt(this,function(t){var e;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(s&&void 0===t)return void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
e=Ft.get(s,n))?e:void 0!==(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
e=p(s,n))?e:
// We tried really hard, but the data doesn't exist.
void 0;
// Set the data...
this.each(function(){
// We always store the camelCased key
Ft.set(this,n,t)})},null,t,1<arguments.length,null,!0);if(this.length&&(o=Ft.get(s),1===s.nodeType&&!Nt.get(s,"hasDataAttrs"))){for(e=r.length;e--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
r[e]&&0===(i=r[e].name).indexOf("data-")&&(i=f(i.slice(5)),p(s,i,o[i]));Nt.set(s,"hasDataAttrs",!0)}return o},removeData:function(t){return this.each(function(){Ft.remove(this,t)})}}),xt.extend({queue:function(t,e,n){var i;if(t)return e=(e||"fx")+"queue",i=Nt.get(t,e),
// Speed up dequeue by getting out quickly if this is just a lookup
n&&(!i||Array.isArray(n)?i=Nt.access(t,e,xt.makeArray(n)):i.push(n)),i||[]},dequeue:function(t,e){e=e||"fx";var n=xt.queue(t,e),i=n.length,o=n.shift(),s=xt._queueHooks(t,e),r=function(){xt.dequeue(t,e)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===o&&(o=n.shift(),i--),o&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===e&&n.unshift("inprogress"),
// Clear up the last queue stop function
delete s.stop,o.call(t,r,s)),!i&&s&&s.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(t,e){var n=e+"queueHooks";return Nt.get(t,n)||Nt.access(t,n,{empty:xt.Callbacks("once memory").add(function(){Nt.remove(t,[e+"queue",n])})})}}),xt.fn.extend({queue:function(e,n){var t=2;return"string"!=typeof e&&(n=e,e="fx",t--),arguments.length<t?xt.queue(this[0],e):void 0===n?this:this.each(function(){var t=xt.queue(this,e,n);
// Ensure a hooks for this queue
xt._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&xt.dequeue(this,e)})},dequeue:function(t){return this.each(function(){xt.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(t,e){var n,i=1,o=xt.Deferred(),s=this,r=this.length,a=function(){--i||o.resolveWith(s,[s])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";r--;)(n=Nt.get(s[r],t+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(e)}});var Ut=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Gt=new RegExp("^(?:([+-])=|)("+Ut+")([a-z%]*)$","i"),Qt=["Top","Right","Bottom","Left"],Yt=function(t,e){
// Inline style trumps all
return"none"===(
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
t=e||t).style.display||""===t.style.display&&
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
xt.contains(t.ownerDocument,t)&&"none"===xt.css(t,"display")},Kt=function(t,e,n,i){var o,s,r={};
// Remember the old values, and insert the new ones
for(s in e)r[s]=t.style[s],t.style[s]=e[s];
// Revert the old values
for(s in o=n.apply(t,i||[]),e)t.style[s]=r[s];return o},Vt={};xt.fn.extend({show:function(){return b(this,!0)},hide:function(){return b(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){Yt(this)?xt(this).show():xt(this).hide()})}});var Xt=/^(?:checkbox|radio)$/i,Zt=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Jt=/^$|^module$|\/(?:java|ecma)script/i,te={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE <=9 only
te.optgroup=te.option,te.tbody=te.tfoot=te.colgroup=te.caption=te.thead,te.th=te.td;var ee=/<|&#?\w+;/,ne,ie,oe;ie=rt.createDocumentFragment().appendChild(rt.createElement("div")),
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
(oe=rt.createElement("input")).setAttribute("type","radio"),oe.setAttribute("checked","checked"),oe.setAttribute("name","t"),ie.appendChild(oe),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
vt.checkClone=ie.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
ie.innerHTML="<textarea>x</textarea>",vt.noCloneChecked=!!ie.cloneNode(!0).lastChild.defaultValue;var se=rt.documentElement,re=/^key/,ae=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,le=/^([^.]*)(?:\.(.+)|)/;xt.event={global:{},add:function(e,t,n,i,o){var s,r,a,l,u,c,d,h,f,p,m,g=Nt.get(e);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(g)for(
// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(n=(s=n).handler,o=s.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
o&&xt.find.matchesSelector(se,o),
// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=xt.guid++),
// Init the element's event structure and main handler, if this is the first
(l=g.events)||(l=g.events={}),(r=g.handle)||(r=g.handle=function(t){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==xt&&xt.event.triggered!==t.type?xt.event.dispatch.apply(e,arguments):void 0}),u=(
// Handle multiple events separated by a space
t=(t||"").match(Dt)||[""]).length;u--;)f=m=(a=le.exec(t[u])||[])[1],p=(a[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
f&&(
// If event changes its type, use the special event handlers for the changed type
d=xt.event.special[f]||{},
// If selector defined, determine special event api type, otherwise given type
f=(o?d.delegateType:d.bindType)||f,
// Update special based on newly reset type
d=xt.event.special[f]||{},
// handleObj is passed to all event handlers
c=xt.extend({type:f,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&xt.expr.match.needsContext.test(o),namespace:p.join(".")},s),
// Init the event handler queue if we're the first
(h=l[f])||((h=l[f]=[]).delegateCount=0,
// Only use addEventListener if the special events handler returns false
d.setup&&!1!==d.setup.call(e,i,p,r)||e.addEventListener&&e.addEventListener(f,r)),d.add&&(d.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),
// Add to the element's handler list, delegates in front
o?h.splice(h.delegateCount++,0,c):h.push(c),
// Keep track of which events have ever been used, for event optimization
xt.event.global[f]=!0)},
// Detach an event or set of events from an element
remove:function(t,e,n,i,o){var s,r,a,l,u,c,d,h,f,p,m,g=Nt.hasData(t)&&Nt.get(t);if(g&&(l=g.events)){for(u=(
// Once for each type.namespace in types; type may be omitted
e=(e||"").match(Dt)||[""]).length;u--;)
// Unbind all events (on this namespace, if provided) for the element
if(f=m=(a=le.exec(e[u])||[])[1],p=(a[2]||"").split(".").sort(),f){for(d=xt.event.special[f]||{},h=l[f=(i?d.delegateType:d.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
r=s=h.length;s--;)c=h[s],!o&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(h.splice(s,1),c.selector&&h.delegateCount--,d.remove&&d.remove.call(t,c));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
r&&!h.length&&(d.teardown&&!1!==d.teardown.call(t,p,g.handle)||xt.removeEvent(t,f,g.handle),delete l[f])}else for(f in l)xt.event.remove(t,f+e[u],n,i,!0);
// Remove data and the expando if it's no longer used
xt.isEmptyObject(l)&&Nt.remove(t,"handle events")}},dispatch:function(t){
// Make a writable jQuery.Event from the native event object
var e=xt.event.fix(t),n,i,o,s,r,a,l=new Array(arguments.length),u=(Nt.get(this,"events")||{})[e.type]||[],c=xt.event.special[e.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
l[0]=e,n=1;n<arguments.length;n++)l[n]=arguments[n];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(
// Determine handlers
a=xt.event.handlers.call(this,e,u),
// Run delegates first; they may want to stop propagation beneath us
n=0;(s=a[n++])&&!e.isPropagationStopped();)for(e.currentTarget=s.elem,i=0;(r=s.handlers[i++])&&!e.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
e.rnamespace&&!e.rnamespace.test(r.namespace)||(e.handleObj=r,e.data=r.data,void 0!==(o=((xt.event.special[r.origType]||{}).handle||r.handler).apply(s.elem,l))&&!1===(e.result=o)&&(e.preventDefault(),e.stopPropagation()));
// Call the postDispatch hook for the mapped type
return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(t,e){var n,i,o,s,r,a=[],l=e.delegateCount,u=t.target;
// Find delegate handlers
if(l&&
// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
u.nodeType&&
// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===t.type&&1<=t.button))for(;u!==this;u=u.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===u.nodeType&&("click"!==t.type||!0!==u.disabled)){for(s=[],r={},n=0;n<l;n++)void 0===r[
// Don't conflict with Object.prototype properties (#13203)
o=(i=e[n]).selector+" "]&&(r[o]=i.needsContext?-1<xt(o,this).index(u):xt.find(o,this,null,[u]).length),r[o]&&s.push(i);s.length&&a.push({elem:u,handlers:s})}
// Add the remaining (directly-bound) handlers
return u=this,l<e.length&&a.push({elem:u,handlers:e.slice(l)}),a},addProp:function(e,t){Object.defineProperty(xt.Event.prototype,e,{enumerable:!0,configurable:!0,get:yt(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(t){return t[xt.expando]?t:new xt.Event(t)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==j()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===j()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&u(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(t){return u(t.target,"a")}},beforeunload:{postDispatch:function(t){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},xt.removeEvent=function(t,e,n){
// This "if" is needed for plain objects
t.removeEventListener&&t.removeEventListener(e,n)},xt.Event=function(t,e){
// Allow instantiation without the 'new' keyword
if(!(this instanceof xt.Event))return new xt.Event(t,e);
// Event object
t&&t.type?(this.originalEvent=t,this.type=t.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&
// Support: Android <=2.3 only
!1===t.returnValue?C:_,
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,
// Put explicitly provided properties onto the event object
e&&xt.extend(this,e),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=t&&t.timeStamp||Date.now(),
// Mark it as fixed
this[xt.expando]=!0},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
xt.Event.prototype={constructor:xt.Event,isDefaultPrevented:_,isPropagationStopped:_,isImmediatePropagationStopped:_,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=C,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=C,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=C,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
xt.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;
// Add which for key events
return null==t.which&&re.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:
// Add which for click: 1 === left; 2 === middle; 3 === right
!t.which&&void 0!==e&&ae.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},xt.event.addProp),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
xt.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,s){xt.event.special[t]={delegateType:s,bindType:s,handle:function(t){var e,n=this,i=t.relatedTarget,o=t.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return i&&(i===n||xt.contains(n,i))||(t.type=o.origType,e=o.handler.apply(this,arguments),t.type=s),e}}}),xt.fn.extend({on:function(t,e,n,i){return S(this,t,e,n,i)},one:function(t,e,n,i){return S(this,t,e,n,i,1)},off:function(t,e,n){var i,o;if(t&&t.preventDefault&&t.handleObj)
// ( event )  dispatched jQuery.Event
return i=t.handleObj,xt(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"!=typeof t)return!1!==e&&"function"!=typeof e||(
// ( types [, fn] )
n=e,e=void 0),!1===n&&(n=_),this.each(function(){xt.event.remove(this,t,n,e)});
// ( types-object [, selector] )
for(o in t)this.off(o,e,t[o]);return this}});var
/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
ue=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
ce=/<script|<style|<link/i,
// checked="checked" or checked
de=/checked\s*(?:[^=]|=\s*.checked.)/i,he=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;xt.extend({htmlPrefilter:function(t){return t.replace(ue,"<$1></$2>")},clone:function(t,e,n){var i,o,s,r,a=t.cloneNode(!0),l=xt.contains(t.ownerDocument,t);
// Fix IE cloning issues
if(!(vt.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||xt.isXMLDoc(t)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
r=w(a),i=0,o=(s=w(t)).length;i<o;i++)A(s[i],r[i]);
// Copy the events from the original to the clone
if(e)if(n)for(s=s||w(t),r=r||w(a),i=0,o=s.length;i<o;i++)z(s[i],r[i]);else z(t,a);
// Preserve script evaluation history
// Return the cloned set
return 0<(r=w(a,"script")).length&&k(r,!l&&w(t,"script")),a},cleanData:function(t){for(var e,n,i,o=xt.event.special,s=0;void 0!==(n=t[s]);s++)if(Rt(n)){if(e=n[Nt.expando]){if(e.events)for(i in e.events)o[i]?xt.event.remove(n,i):xt.removeEvent(n,i,e.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Nt.expando]=void 0}n[Ft.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Ft.expando]=void 0)}}}),xt.fn.extend({detach:function(t){return D(this,t,!0)},remove:function(t){return D(this,t)},text:function(t){return Mt(this,function(t){return void 0===t?xt.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return P(this,arguments,function(t){var e;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||T(this,t).appendChild(t)})},prepend:function(){return P(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=T(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return P(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return P(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(
// Prevent memory leaks
xt.cleanData(w(t,!1)),
// Remove any remaining nodes
t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return xt.clone(this,t,e)})},html:function(t){return Mt(this,function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof t&&!ce.test(t)&&!te[(Zt.exec(t)||["",""])[1].toLowerCase()]){t=xt.htmlPrefilter(t);try{for(;n<i;n++)
// Remove element nodes and prevent memory leaks
1===(e=this[n]||{}).nodeType&&(xt.cleanData(w(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var n=[];
// Make the changes, replacing each non-ignored context element with the new content
return P(this,arguments,function(t){var e=this.parentNode;xt.inArray(this,n)<0&&(xt.cleanData(w(this)),e&&e.replaceChild(t,this));
// Force callback invocation
},n)}}),xt.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,r){xt.fn[t]=function(t){for(var e,n=[],i=xt(t),o=i.length-1,s=0;s<=o;s++)e=s===o?this:this.clone(!0),xt(i[s])[r](e),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
ct.apply(n,e.get());return this.pushStack(n)}});var fe=new RegExp("^("+Ut+")(?!px)[a-z%]+$","i"),pe=function(t){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var e=t.ownerDocument.defaultView;return e&&e.opener||(e=$),e.getComputedStyle(t)},me=new RegExp(Qt.join("|"),"i");!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){
// This is a singleton, we need to execute it only once
if(l){a.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",se.appendChild(a).appendChild(l);var t=$.getComputedStyle(l);n="1%"!==t.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
r=12===e(t.marginLeft),
// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
l.style.right="60%",s=36===e(t.right),
// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
i=36===e(t.width),
// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
l.style.position="absolute",o=36===l.offsetWidth||"absolute",se.removeChild(a),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
l=null}}function e(t){return Math.round(parseFloat(t))}var n,i,o,s,r,a=rt.createElement("div"),l=rt.createElement("div");
// Finish early in limited (non-browser) environments
l.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",vt.clearCloneStyle="content-box"===l.style.backgroundClip,xt.extend(vt,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),n},reliableMarginLeft:function(){return t(),r},scrollboxSize:function(){return t(),o}}))}();var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
ge=/^(none|table(?!-c[ea]).+)/,ve=/^--/,ye={position:"absolute",visibility:"hidden",display:"block"},be={letterSpacing:"0",fontWeight:"400"},we=["Webkit","Moz","ms"],ke=rt.createElement("div").style;xt.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(t,e){if(e){
// We should always get a number back from opacity
var n=L(t,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},
// Get and set the style property on a DOM Node
style:function(t,e,n,i){
// Don't set styles on text and comment nodes
if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){
// Make sure that we're working with the right name
var o,s,r,a=f(e),l=ve.test(e),u=t.style;
// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
// Check if we're setting a value
if(l||(e=I(a)),
// Gets hook for the prefixed version, then unprefixed version
r=xt.cssHooks[e]||xt.cssHooks[a],void 0===n)
// If a hook was provided get the non-computed value from there
return r&&"get"in r&&void 0!==(o=r.get(t,!1,i))?o:u[e];
// Otherwise just get the value from the style object
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===(s=typeof n)&&(o=Gt.exec(n))&&o[1]&&(n=v(t,e,o),
// Fixes bug #9237
s="number"),
// Make sure that null and NaN values aren't set (#7116)
null!=n&&n==n&&(
// If a number was passed in, add the unit (except for certain CSS properties)
"number"===s&&(n+=o&&o[3]||(xt.cssNumber[a]?"":"px")),
// background-* props affect original clone's values
vt.clearCloneStyle||""!==n||0!==e.indexOf("background")||(u[e]="inherit"),
// If a hook was provided, use that value, otherwise just set the specified value
r&&"set"in r&&void 0===(n=r.set(t,n,i))||(l?u.setProperty(e,n):u[e]=n))}},css:function(t,e,n,i){var o,s,r,a=f(e),l;
// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Make numeric if forced or a qualifier was provided and val looks numeric
return ve.test(e)||(e=I(a)),
// If a hook was provided get the computed value from there
(
// Try prefixed name followed by the unprefixed name
r=xt.cssHooks[e]||xt.cssHooks[a])&&"get"in r&&(o=r.get(t,!0,n)),
// Otherwise, if a way to get the computed value exists, use that
void 0===o&&(o=L(t,e,i)),
// Convert "normal" to computed value
"normal"===o&&e in be&&(o=be[e]),""===n||n?(s=parseFloat(o),!0===n||isFinite(s)?s||0:o):o}}),xt.each(["height","width"],function(t,a){xt.cssHooks[a]={get:function(t,e,n){if(e)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return!ge.test(xt.css(t,"display"))||
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
t.getClientRects().length&&t.getBoundingClientRect().width?N(t,a,n):Kt(t,ye,function(){return N(t,a,n)})},set:function(t,e,n){var i,o=pe(t),s="border-box"===xt.css(t,"boxSizing",!1,o),r=n&&R(t,a,n,s,o);
// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
return s&&vt.scrollboxSize()===o.position&&(r-=Math.ceil(t["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(o[a])-R(t,a,"border",!1,o)-.5)),
// Convert to pixels if value adjustment is needed
r&&(i=Gt.exec(e))&&"px"!==(i[3]||"px")&&(t.style[a]=e,e=xt.css(t,a)),H(t,e,r)}}}),xt.cssHooks.marginLeft=q(vt.reliableMarginLeft,function(t,e){if(e)return(parseFloat(L(t,"marginLeft"))||t.getBoundingClientRect().left-Kt(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),
// These hooks are used by animate to expand properties
xt.each({margin:"",padding:"",border:"Width"},function(o,s){xt.cssHooks[o+s]={expand:function(t){for(var e=0,n={},
// Assumes a single number if not a string
i="string"==typeof t?t.split(" "):[t];e<4;e++)n[o+Qt[e]+s]=i[e]||i[e-2]||i[0];return n}},"margin"!==o&&(xt.cssHooks[o+s].set=H)}),xt.fn.extend({css:function(t,e){return Mt(this,function(t,e,n){var i,o,s={},r=0;if(Array.isArray(e)){for(i=pe(t),o=e.length;r<o;r++)s[e[r]]=xt.css(t,e[r],!1,i);return s}return void 0!==n?xt.style(t,e,n):xt.css(t,e)},t,e,1<arguments.length)}}),(xt.Tween=F).prototype={constructor:F,init:function(t,e,n,i,o,s){this.elem=t,this.prop=n,this.easing=o||xt.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=s||(xt.cssNumber[n]?"":"px")},cur:function(){var t=F.propHooks[this.prop];return t&&t.get?t.get(this):F.propHooks._default.get(this)},run:function(t){var e,n=F.propHooks[this.prop];return this.options.duration?this.pos=e=xt.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):F.propHooks._default.set(this),this}},F.prototype.init.prototype=F.prototype,F.propHooks={_default:{get:function(t){var e;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
e=xt.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
xt.fx.step[t.prop]?xt.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[xt.cssProps[t.prop]]&&!xt.cssHooks[t.prop]?t.elem[t.prop]=t.now:xt.style(t.elem,t.prop,t.now+t.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
F.propHooks.scrollTop=F.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},xt.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},xt.fx=F.prototype.init,
// Back compat <1.8 extension point
xt.fx.step={};var xe,$e,Ce=/^(?:toggle|show|hide)$/,_e=/queueHooks$/,je,Se,Te;xt.Animation=xt.extend(K,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return v(n.elem,t,Gt.exec(e),n),n}]},tweener:function(t,e){for(var n,i=0,o=(t=yt(t)?(e=t,["*"]):t.match(Dt)).length;i<o;i++)n=t[i],K.tweeners[n]=K.tweeners[n]||[],K.tweeners[n].unshift(e)},prefilters:[Q],prefilter:function(t,e){e?K.prefilters.unshift(t):K.prefilters.push(t)}}),xt.speed=function(t,e,n){var i=t&&"object"==typeof t?xt.extend({},t):{complete:n||!n&&e||yt(t)&&t,duration:t,easing:n&&e||e&&!yt(e)&&e};
// Go to the end state if fx are off
return xt.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in xt.fx.speeds?i.duration=xt.fx.speeds[i.duration]:i.duration=xt.fx.speeds._default),
// Normalize opt.queue - true/undefined/null -> "fx"
null!=i.queue&&!0!==i.queue||(i.queue="fx"),
// Queueing
i.old=i.complete,i.complete=function(){yt(i.old)&&i.old.call(this),i.queue&&xt.dequeue(this,i.queue)},i},xt.fn.extend({fadeTo:function(t,e,n,i){
// Show any hidden elements after setting opacity to 0
return this.filter(Yt).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(e,t,n,i){var o=xt.isEmptyObject(e),s=xt.speed(t,n,i),r=function(){
// Operate on a copy of prop so per-property easing won't be lost
var t=K(this,xt.extend({},e),s);
// Empty animations, or finishing resolves immediately
(o||Nt.get(this,"finish"))&&t.stop(!0)};return r.finish=r,o||!1===s.queue?this.each(r):this.queue(s.queue,r)},stop:function(o,t,s){var r=function(t){var e=t.stop;delete t.stop,e(s)};return"string"!=typeof o&&(s=t,t=o,o=void 0),t&&!1!==o&&this.queue(o||"fx",[]),this.each(function(){var t=!0,e=null!=o&&o+"queueHooks",n=xt.timers,i=Nt.get(this);if(e)i[e]&&i[e].stop&&r(i[e]);else for(e in i)i[e]&&i[e].stop&&_e.test(e)&&r(i[e]);for(e=n.length;e--;)n[e].elem!==this||null!=o&&n[e].queue!==o||(n[e].anim.stop(s),t=!1,n.splice(e,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!t&&s||xt.dequeue(this,o)})},finish:function(r){return!1!==r&&(r=r||"fx"),this.each(function(){var t,e=Nt.get(this),n=e[r+"queue"],i=e[r+"queueHooks"],o=xt.timers,s=n?n.length:0;
// Enable finishing flag on private data
// Look for any active animations, and finish them
for(e.finish=!0,
// Empty the queue first
xt.queue(this,r,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===r&&(o[t].anim.stop(!0),o.splice(t,1));
// Look for any animations in the old queue and finish them
for(t=0;t<s;t++)n[t]&&n[t].finish&&n[t].finish.call(this);
// Turn off finishing flag
delete e.finish})}}),xt.each(["toggle","show","hide"],function(t,i){var o=xt.fn[i];xt.fn[i]=function(t,e,n){return null==t||"boolean"==typeof t?o.apply(this,arguments):this.animate(U(i,!0),t,e,n)}}),
// Generate shortcuts for custom animations
xt.each({slideDown:U("show"),slideUp:U("hide"),slideToggle:U("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,i){xt.fn[t]=function(t,e,n){return this.animate(i,t,e,n)}}),xt.timers=[],xt.fx.tick=function(){var t,e=0,n=xt.timers;for(xe=Date.now();e<n.length;e++)
// Run the timer and safely remove it when done (allowing for external removal)
(t=n[e])()||n[e]!==t||n.splice(e--,1);n.length||xt.fx.stop(),xe=void 0},xt.fx.timer=function(t){xt.timers.push(t),xt.fx.start()},xt.fx.interval=13,xt.fx.start=function(){$e||($e=!0,B())},xt.fx.stop=function(){$e=null},xt.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
xt.fn.delay=function(i,t){return i=xt.fx&&xt.fx.speeds[i]||i,t=t||"fx",this.queue(t,function(t,e){var n=$.setTimeout(t,i);e.stop=function(){$.clearTimeout(n)}})},je=rt.createElement("input"),Te=rt.createElement("select").appendChild(rt.createElement("option")),je.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
vt.checkOn=""!==je.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
vt.optSelected=Te.selected,(
// Support: IE <=11 only
// An input loses its value after becoming a radio
je=rt.createElement("input")).value="t",je.type="radio",vt.radioValue="t"===je.value;var Ee,Oe=xt.expr.attrHandle;xt.fn.extend({attr:function(t,e){return Mt(this,xt.attr,t,e,1<arguments.length)},removeAttr:function(t){return this.each(function(){xt.removeAttr(this,t)})}}),xt.extend({attr:function(t,e,n){var i,o,s=t.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==s&&8!==s&&2!==s)
// Fallback to prop when attributes are not supported
return void 0===t.getAttribute?xt.prop(t,e,n):(
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
1===s&&xt.isXMLDoc(t)||(o=xt.attrHooks[e.toLowerCase()]||(xt.expr.match.bool.test(e)?Ee:void 0)),void 0!==n?null===n?void xt.removeAttr(t,e):o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:(t.setAttribute(e,n+""),n):o&&"get"in o&&null!==(i=o.get(t,e))?i:null==(i=xt.find.attr(t,e))?void 0:i)},attrHooks:{type:{set:function(t,e){if(!vt.radioValue&&"radio"===e&&u(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,i=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
o=e&&e.match(Dt);if(o&&1===t.nodeType)for(;n=o[i++];)t.removeAttribute(n)}}),
// Hooks for boolean attributes
Ee={set:function(t,e,n){return!1===e?
// Remove boolean attributes when set to false
xt.removeAttr(t,n):t.setAttribute(n,n),n}},xt.each(xt.expr.match.bool.source.match(/\w+/g),function(t,e){var r=Oe[e]||xt.find.attr;Oe[e]=function(t,e,n){var i,o,s=e.toLowerCase();return n||(
// Avoid an infinite loop by temporarily removing this function from the getter
o=Oe[s],Oe[s]=i,i=null!=r(t,e,n)?s:null,Oe[s]=o),i}});var ze=/^(?:input|select|textarea|button)$/i,Ae=/^(?:a|area)$/i;xt.fn.extend({prop:function(t,e){return Mt(this,xt.prop,t,e,1<arguments.length)},removeProp:function(t){return this.each(function(){delete this[xt.propFix[t]||t]})}}),xt.extend({prop:function(t,e,n){var i,o,s=t.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==s&&8!==s&&2!==s)return 1===s&&xt.isXMLDoc(t)||(
// Fix name and attach hooks
e=xt.propFix[e]||e,o=xt.propHooks[e]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:t[e]=n:o&&"get"in o&&null!==(i=o.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var e=xt.find.attr(t,"tabindex");return e?parseInt(e,10):ze.test(t.nodeName)||Ae.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
vt.optSelected||(xt.propHooks.selected={get:function(t){
/* eslint no-unused-expressions: "off" */
var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){
/* eslint no-unused-expressions: "off" */
var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),xt.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){xt.propFix[this.toLowerCase()]=this}),xt.fn.extend({addClass:function(e){var t,n,i,o,s,r,a,l=0;if(yt(e))return this.each(function(t){xt(this).addClass(e.call(this,t,X(this)))});if((t=Z(e)).length)for(;n=this[l++];)if(o=X(n),i=1===n.nodeType&&" "+V(o)+" "){for(r=0;s=t[r++];)i.indexOf(" "+s+" ")<0&&(i+=s+" ");
// Only assign if different to avoid unneeded rendering.
o!==(a=V(i))&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,i,o,s,r,a,l=0;if(yt(e))return this.each(function(t){xt(this).removeClass(e.call(this,t,X(this)))});if(!arguments.length)return this.attr("class","");if((t=Z(e)).length)for(;n=this[l++];)if(o=X(n),
// This expression is here for better compressibility (see addClass)
i=1===n.nodeType&&" "+V(o)+" "){for(r=0;s=t[r++];)
// Remove *all* instances
for(;-1<i.indexOf(" "+s+" ");)i=i.replace(" "+s+" "," ");
// Only assign if different to avoid unneeded rendering.
o!==(a=V(i))&&n.setAttribute("class",a)}return this},toggleClass:function(o,e){var s=typeof o,r="string"===s||Array.isArray(o);return"boolean"==typeof e&&r?e?this.addClass(o):this.removeClass(o):yt(o)?this.each(function(t){xt(this).toggleClass(o.call(this,t,X(this),e),e)}):this.each(function(){var t,e,n,i;if(r)for(
// Toggle individual class names
e=0,n=xt(this),i=Z(o);t=i[e++];)
// Check each className given, space separated list
n.hasClass(t)?n.removeClass(t):n.addClass(t);
// Toggle whole class name
else void 0!==o&&"boolean"!==s||((t=X(this))&&
// Store className if set
Nt.set(this,"__className__",t),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",t||!1===o?"":Nt.get(this,"__className__")||""))})},hasClass:function(t){var e,n,i=0;for(e=" "+t+" ";n=this[i++];)if(1===n.nodeType&&-1<(" "+V(X(n))+" ").indexOf(e))return!0;return!1}});var Pe=/\r/g;xt.fn.extend({val:function(n){var i,t,o,e=this[0];return arguments.length?(o=yt(n),this.each(function(t){var e;1===this.nodeType&&(
// Treat null/undefined as ""; convert numbers to string
null==(e=o?n.call(this,t,xt(this).val()):n)?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=xt.map(e,function(t){return null==t?"":t+""})),
// If set returns undefined, fall back to normal setting
(i=xt.valHooks[this.type]||xt.valHooks[this.nodeName.toLowerCase()])&&"set"in i&&void 0!==i.set(this,e,"value")||(this.value=e))})):e?(i=xt.valHooks[e.type]||xt.valHooks[e.nodeName.toLowerCase()])&&"get"in i&&void 0!==(t=i.get(e,"value"))?t:
// Handle most common string cases
"string"==typeof(t=e.value)?t.replace(Pe,""):null==t?"":t:void 0}}),xt.extend({valHooks:{option:{get:function(t){var e=xt.find.attr(t,"value");return null!=e?e:
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
V(xt.text(t))}},select:{get:function(t){var e,n,i,o=t.options,s=t.selectedIndex,r="select-one"===t.type,a=r?null:[],l=r?s+1:o.length;
// Loop through all the selected options
for(i=s<0?l:r?s:0;i<l;i++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(((n=o[i]).selected||i===s)&&
// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!u(n.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
e=xt(n).val(),r)return e;
// Multi-Selects return an array
a.push(e)}return a},set:function(t,e){for(var n,i,o=t.options,s=xt.makeArray(e),r=o.length;r--;)
/* eslint-disable no-cond-assign */
((i=o[r]).selected=-1<xt.inArray(xt.valHooks.option.get(i),s))&&(n=!0)
/* eslint-enable no-cond-assign */;
// Force browsers to behave consistently when non-matching value is set
return n||(t.selectedIndex=-1),s}}}}),
// Radios and checkboxes getter/setter
xt.each(["radio","checkbox"],function(){xt.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=-1<xt.inArray(xt(t).val(),e)}},vt.checkOn||(xt.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}),
// Return jQuery for attributes-only inclusion
vt.focusin="onfocusin"in $;var De=/^(?:focusinfocus|focusoutblur)$/,Le=function(t){t.stopPropagation()};xt.extend(xt.event,{trigger:function(t,e,n,i){var o,s,r,a,l,u,c,d,h=[n||rt],f=pt.call(t,"type")?t.type:t,p=pt.call(t,"namespace")?t.namespace.split("."):[];
// Don't do events on text and comment nodes
if(s=d=r=n=n||rt,3!==n.nodeType&&8!==n.nodeType&&!De.test(f+xt.event.triggered)&&(-1<f.indexOf(".")&&(
// Namespaced trigger; create a regexp to match event type in handle()
f=(p=f.split(".")).shift(),p.sort()),l=f.indexOf(":")<0&&"on"+f,
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
(
// Caller can pass in a jQuery.Event object, Object, or just an event type string
t=t[xt.expando]?t:new xt.Event(f,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=p.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=n),
// Clone any incoming data and prepend the event, creating the handler arg list
e=null==e?[t]:xt.makeArray(e,[t]),
// Allow special events to draw outside the lines
c=xt.event.special[f]||{},i||!c.trigger||!1!==c.trigger.apply(n,e))){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!i&&!c.noBubble&&!bt(n)){for(a=c.delegateType||f,De.test(a+f)||(s=s.parentNode);s;s=s.parentNode)h.push(s),r=s;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
r===(n.ownerDocument||rt)&&h.push(r.defaultView||r.parentWindow||$)}
// Fire handlers on the event path
for(o=0;(s=h[o++])&&!t.isPropagationStopped();)d=s,t.type=1<o?a:c.bindType||f,(
// jQuery handler
u=(Nt.get(s,"events")||{})[t.type]&&Nt.get(s,"handle"))&&u.apply(s,e),(
// Native handler
u=l&&s[l])&&u.apply&&Rt(s)&&(t.result=u.apply(s,e),!1===t.result&&t.preventDefault());return t.type=f,
// If nobody prevented the default action, do it now
i||t.isDefaultPrevented()||c._default&&!1!==c._default.apply(h.pop(),e)||!Rt(n)||
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
l&&yt(n[f])&&!bt(n)&&(
// Don't re-trigger an onFOO event when we call its FOO() method
(r=n[l])&&(n[l]=null),
// Prevent re-triggering of the same event, since we already bubbled it above
xt.event.triggered=f,t.isPropagationStopped()&&d.addEventListener(f,Le),n[f](),t.isPropagationStopped()&&d.removeEventListener(f,Le),xt.event.triggered=void 0,r&&(n[l]=r)),t.result}
// focus/blur morphs to focusin/out; ensure we're not firing them right now
},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(t,e,n){var i=xt.extend(new xt.Event,n,{type:t,isSimulated:!0});xt.event.trigger(i,null,e)}}),xt.fn.extend({trigger:function(t,e){return this.each(function(){xt.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];if(n)return xt.event.trigger(t,e,n,!0)}}),
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
vt.focusin||xt.each({focus:"focusin",blur:"focusout"},function(n,i){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var o=function(t){xt.event.simulate(i,t.target,xt.event.fix(t))};xt.event.special[i]={setup:function(){var t=this.ownerDocument||this,e=Nt.access(t,i);e||t.addEventListener(n,o,!0),Nt.access(t,i,(e||0)+1)},teardown:function(){var t=this.ownerDocument||this,e=Nt.access(t,i)-1;e?Nt.access(t,i,e):(t.removeEventListener(n,o,!0),Nt.remove(t,i))}}});var qe=$.location,Me=Date.now(),Ie=/\?/;
// Cross-browser xml parsing
xt.parseXML=function(t){var e;if(!t||"string"!=typeof t)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{e=(new $.DOMParser).parseFromString(t,"text/xml")}catch(t){e=void 0}return e&&!e.getElementsByTagName("parsererror").length||xt.error("Invalid XML: "+t),e};var He=/\[\]$/,Re=/\r?\n/g,Ne=/^(?:submit|button|image|reset|file)$/i,Fe=/^(?:input|select|textarea|keygen)/i;xt.param=function(t,e){var n,i=[],o=function(t,e){
// If value is a function, invoke it and use its return value
var n=yt(e)?e():e;i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};
// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(t)||t.jquery&&!xt.isPlainObject(t))
// Serialize the form elements
xt.each(t,function(){o(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in t)J(n,t[n],e,o);
// Return the resulting serialization
return i.join("&")},xt.fn.extend({serialize:function(){return xt.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var t=xt.prop(this,"elements");return t?xt.makeArray(t):this}).filter(function(){var t=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!xt(this).is(":disabled")&&Fe.test(this.nodeName)&&!Ne.test(t)&&(this.checked||!Xt.test(t))}).map(function(t,e){var n=xt(this).val();return null==n?null:Array.isArray(n)?xt.map(n,function(t){return{name:e.name,value:t.replace(Re,"\r\n")}}):{name:e.name,value:n.replace(Re,"\r\n")}}).get()}});var Be=/%20/g,We=/#.*$/,Ue=/([?&])_=[^&]*/,Ge=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
Qe=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ye=/^(?:GET|HEAD)$/,Ke=/^\/\//,
/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
Ve={},
/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Xe={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Ze="*/".concat("*"),
// Anchor tag for parsing the document origin
Je=rt.createElement("a");Je.href=qe.href,xt.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:qe.href,type:"GET",isLocal:Qe.test(qe.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",
/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":Ze,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":xt.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(t,e){return e?
// Building a settings object
nt(nt(t,xt.ajaxSettings),e):
// Extending ajaxSettings
nt(xt.ajaxSettings,t)},ajaxPrefilter:tt(Ve),ajaxTransport:tt(Xe),
// Main method
ajax:function(t,e){
// Callback for when everything is done
function n(t,e,n,i){var o,s,r,a,l,u=e;
// Ignore repeat invocations
p||(p=!0,
// Clear timeout if it exists
f&&$.clearTimeout(f),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
c=void 0,
// Cache response headers
h=i||"",
// Set readyState
x.readyState=0<t?4:0,
// Determine if successful
o=200<=t&&t<300||304===t,
// Get response data
n&&(a=it(g,x,n)),
// Convert no matter what (that way responseXXX fields are always set)
a=ot(g,a,x,o),
// If successful, handle type chaining
o?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&((l=x.getResponseHeader("Last-Modified"))&&(xt.lastModified[d]=l),(l=x.getResponseHeader("etag"))&&(xt.etag[d]=l)),
// if no content
204===t||"HEAD"===g.type?u="nocontent":304===t?u="notmodified":(u=a.state,s=a.data,o=!(r=a.error))):(
// Extract error from statusText and normalize for non-aborts
r=u,!t&&u||(u="error",t<0&&(t=0))),
// Set data for the fake xhr object
x.status=t,x.statusText=(e||u)+"",
// Success/Error
o?b.resolveWith(v,[s,u,x]):b.rejectWith(v,[x,u,r]),
// Status-dependent callbacks
x.statusCode(k),k=void 0,m&&y.trigger(o?"ajaxSuccess":"ajaxError",[x,g,o?s:r]),
// Complete
w.fireWith(v,[x,u]),m&&(y.trigger("ajaxComplete",[x,g]),
// Handle the global AJAX counter
--xt.active||xt.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof t&&(e=t,t=void 0),
// Force options to be an object
e=e||{};var c,
// URL without anti-cache param
d,
// Response headers
h,i,
// timeout handle
f,
// Url cleanup var
o,
// Request state (becomes false upon send and true upon completion)
p,
// To know if global events are to be dispatched
m,
// Loop variable
s,
// uncached part of the url
r,
// Create the final options object
g=xt.ajaxSetup({},e),
// Callbacks context
v=g.context||g,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
y=g.context&&(v.nodeType||v.jquery)?xt(v):xt.event,
// Deferreds
b=xt.Deferred(),w=xt.Callbacks("once memory"),
// Status-dependent callbacks
k=g.statusCode||{},
// Headers (they are sent all at once)
a={},l={},
// Default abort message
u="canceled",
// Fake xhr
x={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(t){var e;if(p){if(!i)for(i={};e=Ge.exec(h);)i[e[1].toLowerCase()]=e[2];e=i[t.toLowerCase()]}return null==e?null:e},
// Raw string
getAllResponseHeaders:function(){return p?h:null},
// Caches the header
setRequestHeader:function(t,e){return null==p&&(t=l[t.toLowerCase()]=l[t.toLowerCase()]||t,a[t]=e),this},
// Overrides response content-type header
overrideMimeType:function(t){return null==p&&(g.mimeType=t),this},
// Status-dependent callbacks
statusCode:function(t){var e;if(t)if(p)
// Execute the appropriate callbacks
x.always(t[x.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(e in t)k[e]=[k[e],t[e]];return this},
// Cancel the request
abort:function(t){var e=t||u;return c&&c.abort(e),n(0,e),this}};
// Attach deferreds
// A cross-domain request is in order when the origin doesn't match the current origin.
if(b.promise(x),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
g.url=((t||g.url||qe.href)+"").replace(Ke,qe.protocol+"//"),
// Alias method option to type as per ticket #12004
g.type=e.method||e.type||g.method||g.type,
// Extract dataTypes list
g.dataTypes=(g.dataType||"*").toLowerCase().match(Dt)||[""],null==g.crossDomain){o=rt.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{o.href=g.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
o.href=o.href,g.crossDomain=Je.protocol+"//"+Je.host!=o.protocol+"//"+o.host}catch(t){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
g.crossDomain=!0}}
// Convert data if not already a string
// If request was aborted inside a prefilter, stop there
if(g.data&&g.processData&&"string"!=typeof g.data&&(g.data=xt.param(g.data,g.traditional)),
// Apply prefilters
et(Ve,g,e,x),p)return x;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
// Check for headers option
for(s in
// Watch for a new set of requests
(m=xt.event&&g.global)&&0==xt.active++&&xt.event.trigger("ajaxStart"),
// Uppercase the type
g.type=g.type.toUpperCase(),
// Determine if request has content
g.hasContent=!Ye.test(g.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
d=g.url.replace(We,""),
// More options handling for requests with no content
g.hasContent?g.data&&g.processData&&0===(g.contentType||"").indexOf("application/x-www-form-urlencoded")&&(g.data=g.data.replace(Be,"+")):(
// Remember the hash so we can put it back
r=g.url.slice(d.length),
// If data is available and should be processed, append data to url
g.data&&(g.processData||"string"==typeof g.data)&&(d+=(Ie.test(d)?"&":"?")+g.data,
// #9682: remove data so that it's not used in an eventual retry
delete g.data),
// Add or update anti-cache param if needed
!1===g.cache&&(d=d.replace(Ue,"$1"),r=(Ie.test(d)?"&":"?")+"_="+Me+++r),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
g.url=d+r),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&(xt.lastModified[d]&&x.setRequestHeader("If-Modified-Since",xt.lastModified[d]),xt.etag[d]&&x.setRequestHeader("If-None-Match",xt.etag[d])),
// Set the correct header, if data is being sent
(g.data&&g.hasContent&&!1!==g.contentType||e.contentType)&&x.setRequestHeader("Content-Type",g.contentType),
// Set the Accepts header for the server, depending on the dataType
x.setRequestHeader("Accept",g.dataTypes[0]&&g.accepts[g.dataTypes[0]]?g.accepts[g.dataTypes[0]]+("*"!==g.dataTypes[0]?", "+Ze+"; q=0.01":""):g.accepts["*"]),g.headers)x.setRequestHeader(s,g.headers[s]);
// Allow custom headers/mimetypes and early abort
if(g.beforeSend&&(!1===g.beforeSend.call(v,x,g)||p))
// Abort if not done already and return
return x.abort();
// Aborting is no longer a cancellation
// If no transport, we auto-abort
if(u="abort",
// Install callbacks on deferreds
w.add(g.complete),x.done(g.success),x.fail(g.error),
// Get transport
c=et(Xe,g,e,x)){
// If request was aborted inside ajaxSend, stop there
if(x.readyState=1,
// Send global event
m&&y.trigger("ajaxSend",[x,g]),p)return x;
// Timeout
g.async&&0<g.timeout&&(f=$.setTimeout(function(){x.abort("timeout")},g.timeout));try{p=!1,c.send(a,n)}catch(t){
// Rethrow post-completion exceptions
if(p)throw t;
// Propagate others as results
n(-1,t)}}else n(-1,"No Transport");return x},getJSON:function(t,e,n){return xt.get(t,e,n,"json")},getScript:function(t,e){return xt.get(t,void 0,e,"script")}}),xt.each(["get","post"],function(t,o){xt[o]=function(t,e,n,i){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return yt(e)&&(i=i||n,n=e,e=void 0),xt.ajax(xt.extend({url:t,type:o,dataType:i,data:e,success:n},xt.isPlainObject(t)&&t))}}),xt._evalUrl=function(t){return xt.ajax({url:t,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},xt.fn.extend({wrapAll:function(t){var e;return this[0]&&(yt(t)&&(t=t.call(this[0])),
// The elements to wrap the target around
e=xt(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(n){return yt(n)?this.each(function(t){xt(this).wrapInner(n.call(this,t))}):this.each(function(){var t=xt(this),e=t.contents();e.length?e.wrapAll(n):t.append(n)})},wrap:function(e){var n=yt(e);return this.each(function(t){xt(this).wrapAll(n?e.call(this,t):e)})},unwrap:function(t){return this.parent(t).not("body").each(function(){xt(this).replaceWith(this.childNodes)}),this}}),xt.expr.pseudos.hidden=function(t){return!xt.expr.pseudos.visible(t)},xt.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},xt.ajaxSettings.xhr=function(){try{return new $.XMLHttpRequest}catch(t){}};var tn={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},en=xt.ajaxSettings.xhr();vt.cors=!!en&&"withCredentials"in en,vt.ajax=en=!!en,xt.ajaxTransport(function(o){var s,r;
// Cross domain only allowed if supported through XMLHttpRequest
if(vt.cors||en&&!o.crossDomain)return{send:function(t,e){var n,i=o.xhr();
// Apply custom fields if provided
if(i.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(n in o.xhrFields)i[n]=o.xhrFields[n];
// Override mime type if needed
// Set headers
for(n in o.mimeType&&i.overrideMimeType&&i.overrideMimeType(o.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
o.crossDomain||t["X-Requested-With"]||(t["X-Requested-With"]="XMLHttpRequest"),t)i.setRequestHeader(n,t[n]);
// Callback
s=function(t){return function(){s&&(s=r=i.onload=i.onerror=i.onabort=i.ontimeout=i.onreadystatechange=null,"abort"===t?i.abort():"error"===t?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof i.status?e(0,"error"):e(
// File: protocol always yields status 0; see #8605, #14207
i.status,i.statusText):e(tn[i.status]||i.status,i.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(i.responseType||"text")||"string"!=typeof i.responseText?{binary:i.response}:{text:i.responseText},i.getAllResponseHeaders()))}},
// Listen to events
i.onload=s(),r=i.onerror=i.ontimeout=s("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==i.onabort?i.onabort=r:i.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===i.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
$.setTimeout(function(){s&&r()})},
// Create the abort callback
s=s("abort");try{
// Do send the request (this may raise an exception)
i.send(o.hasContent&&o.data||null)}catch(t){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(s)throw t}},abort:function(){s&&s()}}}),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
xt.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),
// Install script dataType
xt.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return xt.globalEval(t),t}}}),
// Handle cache's special case and crossDomain
xt.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),
// Bind script tag hack transport
xt.ajaxTransport("script",function(n){var i,o;
// This transport only deals with cross domain requests
if(n.crossDomain)return{send:function(t,e){i=xt("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",o=function(t){i.remove(),o=null,t&&e("error"===t.type?404:200,t.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
rt.head.appendChild(i[0])},abort:function(){o&&o()}}});var nn=[],on=/(=)\?(?=&|$)|\?\?/,sn;
// Default jsonp settings
xt.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=nn.pop()||xt.expando+"_"+Me++;return this[t]=!0,t}}),
// Detect, normalize options and install callbacks for jsonp requests
xt.ajaxPrefilter("json jsonp",function(t,e,n){var i,o,s,r=!1!==t.jsonp&&(on.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&on.test(t.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(r||"jsonp"===t.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
return i=t.jsonpCallback=yt(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,
// Insert callback into url or form data
r?t[r]=t[r].replace(on,"$1"+i):!1!==t.jsonp&&(t.url+=(Ie.test(t.url)?"&":"?")+t.jsonp+"="+i),
// Use data converter to retrieve json after script execution
t.converters["script json"]=function(){return s||xt.error(i+" was not called"),s[0]},
// Force json dataType
t.dataTypes[0]="json",
// Install callback
o=$[i],$[i]=function(){s=arguments},
// Clean-up function (fires after converters)
n.always(function(){
// If previous value didn't exist - remove it
void 0===o?xt($).removeProp(i):$[i]=o,
// Save back as free
t[i]&&(
// Make sure that re-using the options doesn't screw things around
t.jsonpCallback=e.jsonpCallback,
// Save the callback name for future use
nn.push(i)),
// Call if it was a function and we have a response
s&&yt(o)&&o(s[0]),s=o=void 0}),"script"}),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
vt.createHTMLDocument=((sn=rt.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===sn.childNodes.length),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
xt.parseHTML=function(t,e,n){return"string"!=typeof t?[]:(
// Single tag
"boolean"==typeof e&&(n=e,e=!1),e||(
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
vt.createHTMLDocument?((
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
i=(e=rt.implementation.createHTMLDocument("")).createElement("base")).href=rt.location.href,e.head.appendChild(i)):e=rt),s=!n&&[],(o=Tt.exec(t))?[e.createElement(o[1])]:(o=x([t],e,s),s&&s.length&&xt(s).remove(),xt.merge([],o.childNodes)));var i,o,s},
/**
 * Load a url into a page
 */
xt.fn.load=function(t,e,n){var i,o,s,r=this,a=t.indexOf(" ");return-1<a&&(i=V(t.slice(a)),t=t.slice(0,a)),
// If it's a function
yt(e)?(
// We assume that it's the callback
n=e,e=void 0):e&&"object"==typeof e&&(o="POST"),
// If we have elements to modify, make the request
0<r.length&&xt.ajax({url:t,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:o||"GET",dataType:"html",data:e}).done(function(t){
// Save response for use in complete callback
s=arguments,r.html(i?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
xt("<div>").append(xt.parseHTML(t)).find(i):
// Otherwise use the full result
t)}).always(n&&function(t,e){r.each(function(){n.apply(this,s||[t.responseText,e,t])})}),this},
// Attach a bunch of functions for handling common AJAX events
xt.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){xt.fn[e]=function(t){return this.on(e,t)}}),xt.expr.pseudos.animated=function(e){return xt.grep(xt.timers,function(t){return e===t.elem}).length},xt.offset={setOffset:function(t,e,n){var i,o,s,r,a,l,u,c=xt.css(t,"position"),d=xt(t),h={};
// Set position first, in-case top/left are set even on static elem
"static"===c&&(t.style.position="relative"),a=d.offset(),s=xt.css(t,"top"),l=xt.css(t,"left"),
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
o=(u=("absolute"===c||"fixed"===c)&&-1<(s+l).indexOf("auto"))?(r=(i=d.position()).top,i.left):(r=parseFloat(s)||0,parseFloat(l)||0),yt(e)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
e=e.call(t,n,xt.extend({},a))),null!=e.top&&(h.top=e.top-a.top+r),null!=e.left&&(h.left=e.left-a.left+o),"using"in e?e.using.call(t,h):d.css(h)}},xt.fn.extend({
// offset() relates an element's border box to the document origin
offset:function(e){
// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){xt.offset.setOffset(this,e,t)});var t,n,i=this[0];return i?
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
i.getClientRects().length?(
// Get document-relative position by adding viewport scroll to viewport-relative gBCR
t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},
// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var t,e,n,i=this[0],o={top:0,left:0};
// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===xt.css(i,"position"))
// Assume position:fixed implies availability of getBoundingClientRect
e=i.getBoundingClientRect();else{for(e=this.offset(),
// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=i.ownerDocument,t=i.offsetParent||n.documentElement;t&&(t===n.body||t===n.documentElement)&&"static"===xt.css(t,"position");)t=t.parentNode;t&&t!==i&&1===t.nodeType&&(
// Incorporate borders into its offset, since they are outside its content origin
(o=xt(t).offset()).top+=xt.css(t,"borderTopWidth",!0),o.left+=xt.css(t,"borderLeftWidth",!0))}
// Subtract parent offsets and element margins
return{top:e.top-o.top-xt.css(i,"marginTop",!0),left:e.left-o.left-xt.css(i,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===xt.css(t,"position");)t=t.offsetParent;return t||se})}}),
// Create scrollLeft and scrollTop methods
xt.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,o){var s="pageYOffset"===o;xt.fn[e]=function(t){return Mt(this,function(t,e,n){
// Coalesce documents and windows
var i;if(bt(t)?i=t:9===t.nodeType&&(i=t.defaultView),void 0===n)return i?i[o]:t[e];i?i.scrollTo(s?i.pageXOffset:n,s?n:i.pageYOffset):t[e]=n},e,t,arguments.length)}}),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
xt.each(["top","left"],function(t,n){xt.cssHooks[n]=q(vt.pixelPosition,function(t,e){if(e)
// If curCSS returns percentage, fallback to offset
return e=L(t,n),fe.test(e)?xt(t).position()[n]+"px":e})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
xt.each({Height:"height",Width:"width"},function(r,a){xt.each({padding:"inner"+r,content:a,"":"outer"+r},function(i,s){
// Margin is only for outerHeight, outerWidth
xt.fn[s]=function(t,e){var n=arguments.length&&(i||"boolean"!=typeof t),o=i||(!0===t||!0===e?"margin":"border");return Mt(this,function(t,e,n){var i;return bt(t)?0===s.indexOf("outer")?t["inner"+r]:t.document.documentElement["client"+r]:
// Get document width or height
9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+r],i["scroll"+r],t.body["offset"+r],i["offset"+r],i["client"+r])):void 0===n?
// Get width or height on the element, requesting but not forcing parseFloat
xt.css(t,e,o):
// Set width or height on the element
xt.style(t,e,n,o)},a,n?t:void 0,n)}})}),xt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,n){
// Handle event binding
xt.fn[n]=function(t,e){return 0<arguments.length?this.on(n,null,t,e):this.trigger(n)}}),xt.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),xt.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}}),
// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
xt.proxy=function(t,e){var n,i,o;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof e&&(n=t[e],e=t,t=n),yt(t))
// Simulated bind
return i=lt.call(arguments,2),
// Set the guid of unique handler to the same of original handler, so it can be removed
(o=function(){return t.apply(e||this,i.concat(lt.call(arguments)))}).guid=t.guid=t.guid||xt.guid++,o},xt.holdReady=function(t){t?xt.readyWait++:xt.ready(!0)},xt.isArray=Array.isArray,xt.parseJSON=JSON.parse,xt.nodeName=u,xt.isFunction=yt,xt.isWindow=bt,xt.camelCase=f,xt.type=g,xt.now=Date.now,xt.isNumeric=function(t){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var e=xt.type(t);return("number"===e||"string"===e)&&
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(t-parseFloat(t))},
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
"function"==typeof define&&define.amd&&define("jquery",[],function(){return xt});var
// Map over jQuery in case of overwrite
rn=$.jQuery,
// Map over the $ in case of overwrite
an=$.$;return xt.noConflict=function(t){return $.$===xt&&($.$=an),t&&$.jQuery===xt&&($.jQuery=rn),xt},
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
t||($.jQuery=$.$=xt),xt}),function t(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],n);else{var i="object"==typeof exports?n(require("jquery")):n(e.jQuery);for(var o in i)("object"==typeof exports?exports:e)[o]=i[o]}}(window,function(n){/******/
return function(n){
/******/
/******/ // The require function
/******/function o(t){
/******/
/******/ // Check if module is in cache
/******/if(i[t])
/******/return i[t].exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var e=i[t]={
/******/i:t,
/******/l:!1,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return n[t].call(e.exports,e,e.exports,o),
/******/
/******/ // Flag the module as loaded
/******/e.l=!0,e.exports;
/******/}
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/ // webpackBootstrap
/******/ // The module cache
/******/var i={};
/******/
/******/
/******/ // Load entry module and return exports
/******/return o.m=n,
/******/
/******/ // expose the module cache
/******/o.c=i,
/******/
/******/ // define getter function for harmony exports
/******/o.d=function(t,e,n){
/******/o.o(t,e)||
/******/Object.defineProperty(t,e,{enumerable:!0,get:n})
/******/},
/******/
/******/ // define __esModule on exports
/******/o.r=function(t){
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(t,"__esModule",{value:!0})},
/******/
/******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/o.t=function(e,t){
/******/if(
/******/1&t&&(e=o(e)),8&t)return e;
/******/if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;
/******/var n=Object.create(null);
/******/
/******/if(o.r(n),
/******/Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));
/******/return n;
/******/},
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/o.n=function(e){
/******/var t=e&&e.__esModule?
/******/function t(){return e.default}:
/******/function t(){return e};
/******/
/******/return o.d(t,"a",t),t;
/******/},
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},
/******/
/******/ // __webpack_public_path__
/******/o.p="",o(o.s=0);
/******/}
/************************************************************************/
/******/({
/***/"./js/entries/foundation.js":
/*!**********************************!*\
  !*** ./js/entries/foundation.js ***!
  \**********************************/
/*! exports provided: Foundation, CoreUtils, Box, onImagesLoaded, Keyboard, MediaQuery, Motion, Nest, Timer, Touch, Triggers, Abide, Accordion, AccordionMenu, Drilldown, Dropdown, DropdownMenu, Equalizer, Interchange, Magellan, OffCanvas, Orbit, ResponsiveMenu, ResponsiveToggle, Reveal, Slider, SmoothScroll, Sticky, Tabs, Toggler, Tooltip, ResponsiveAccordionTabs, default */
/***/function(t,e,n){"use strict";n.r(e);
/* harmony import */var i=n(/*! jquery */"jquery"),o=/* */n.n(i),s=n(/*! ../foundation.core */"./js/foundation.core.js");
/* harmony import */
/* harmony reexport (safe) */n.d(e,"Foundation",function(){return s.Foundation});
/* harmony import */var r=n(/*! ../foundation.core.utils */"./js/foundation.core.utils.js");
/* harmony reexport (module object) */n.d(e,"CoreUtils",function(){return r});
/* harmony import */var a=n(/*! ../foundation.util.box */"./js/foundation.util.box.js");
/* harmony reexport (safe) */n.d(e,"Box",function(){return a.Box});
/* harmony import */var l=n(/*! ../foundation.util.imageLoader */"./js/foundation.util.imageLoader.js");
/* harmony reexport (safe) */n.d(e,"onImagesLoaded",function(){return l.onImagesLoaded});
/* harmony import */var u=n(/*! ../foundation.util.keyboard */"./js/foundation.util.keyboard.js");
/* harmony reexport (safe) */n.d(e,"Keyboard",function(){return u.Keyboard});
/* harmony import */var c=n(/*! ../foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");
/* harmony reexport (safe) */n.d(e,"MediaQuery",function(){return c.MediaQuery});
/* harmony import */var d=n(/*! ../foundation.util.motion */"./js/foundation.util.motion.js");
/* harmony reexport (safe) */n.d(e,"Motion",function(){return d.Motion});
/* harmony import */var h=n(/*! ../foundation.util.nest */"./js/foundation.util.nest.js");
/* harmony reexport (safe) */n.d(e,"Nest",function(){return h.Nest});
/* harmony import */var f=n(/*! ../foundation.util.timer */"./js/foundation.util.timer.js");
/* harmony reexport (safe) */n.d(e,"Timer",function(){return f.Timer});
/* harmony import */var p=n(/*! ../foundation.util.touch */"./js/foundation.util.touch.js");
/* harmony reexport (safe) */n.d(e,"Touch",function(){return p.Touch});
/* harmony import */var m=n(/*! ../foundation.util.triggers */"./js/foundation.util.triggers.js");
/* harmony reexport (safe) */n.d(e,"Triggers",function(){return m.Triggers});
/* harmony import */var g=n(/*! ../foundation.abide */"./js/foundation.abide.js");
/* harmony reexport (safe) */n.d(e,"Abide",function(){return g.Abide});
/* harmony import */var v=n(/*! ../foundation.accordion */"./js/foundation.accordion.js");
/* harmony reexport (safe) */n.d(e,"Accordion",function(){return v.Accordion});
/* harmony import */var y=n(/*! ../foundation.accordionMenu */"./js/foundation.accordionMenu.js");
/* harmony reexport (safe) */n.d(e,"AccordionMenu",function(){return y.AccordionMenu});
/* harmony import */var b=n(/*! ../foundation.drilldown */"./js/foundation.drilldown.js");
/* harmony reexport (safe) */n.d(e,"Drilldown",function(){return b.Drilldown});
/* harmony import */var w=n(/*! ../foundation.dropdown */"./js/foundation.dropdown.js");
/* harmony reexport (safe) */n.d(e,"Dropdown",function(){return w.Dropdown});
/* harmony import */var k=n(/*! ../foundation.dropdownMenu */"./js/foundation.dropdownMenu.js");
/* harmony reexport (safe) */n.d(e,"DropdownMenu",function(){return k.DropdownMenu});
/* harmony import */var x=n(/*! ../foundation.equalizer */"./js/foundation.equalizer.js");
/* harmony reexport (safe) */n.d(e,"Equalizer",function(){return x.Equalizer});
/* harmony import */var $=n(/*! ../foundation.interchange */"./js/foundation.interchange.js");
/* harmony reexport (safe) */n.d(e,"Interchange",function(){return $.Interchange});
/* harmony import */var C=n(/*! ../foundation.magellan */"./js/foundation.magellan.js");
/* harmony reexport (safe) */n.d(e,"Magellan",function(){return C.Magellan});
/* harmony import */var _=n(/*! ../foundation.offcanvas */"./js/foundation.offcanvas.js");
/* harmony reexport (safe) */n.d(e,"OffCanvas",function(){return _.OffCanvas});
/* harmony import */var j=n(/*! ../foundation.orbit */"./js/foundation.orbit.js");
/* harmony reexport (safe) */n.d(e,"Orbit",function(){return j.Orbit});
/* harmony import */var S=n(/*! ../foundation.responsiveMenu */"./js/foundation.responsiveMenu.js");
/* harmony reexport (safe) */n.d(e,"ResponsiveMenu",function(){return S.ResponsiveMenu});
/* harmony import */var T=n(/*! ../foundation.responsiveToggle */"./js/foundation.responsiveToggle.js");
/* harmony reexport (safe) */n.d(e,"ResponsiveToggle",function(){return T.ResponsiveToggle});
/* harmony import */var E=n(/*! ../foundation.reveal */"./js/foundation.reveal.js");
/* harmony reexport (safe) */n.d(e,"Reveal",function(){return E.Reveal});
/* harmony import */var O=n(/*! ../foundation.slider */"./js/foundation.slider.js");
/* harmony reexport (safe) */n.d(e,"Slider",function(){return O.Slider});
/* harmony import */var z=n(/*! ../foundation.smoothScroll */"./js/foundation.smoothScroll.js");
/* harmony reexport (safe) */n.d(e,"SmoothScroll",function(){return z.SmoothScroll});
/* harmony import */var A=n(/*! ../foundation.sticky */"./js/foundation.sticky.js");
/* harmony reexport (safe) */n.d(e,"Sticky",function(){return A.Sticky});
/* harmony import */var P=n(/*! ../foundation.tabs */"./js/foundation.tabs.js");
/* harmony reexport (safe) */n.d(e,"Tabs",function(){return P.Tabs});
/* harmony import */var D=n(/*! ../foundation.toggler */"./js/foundation.toggler.js");
/* harmony reexport (safe) */n.d(e,"Toggler",function(){return D.Toggler});
/* harmony import */var L=n(/*! ../foundation.tooltip */"./js/foundation.tooltip.js");
/* harmony reexport (safe) */n.d(e,"Tooltip",function(){return L.Tooltip});
/* harmony import */var q=n(/*! ../foundation.responsiveAccordionTabs */"./js/foundation.responsiveAccordionTabs.js");
/* harmony reexport (safe) */n.d(e,"ResponsiveAccordionTabs",function(){return q.ResponsiveAccordionTabs}),s.Foundation.addToJquery(o.a),// Add Foundation Utils to Foundation global namespace for backwards
// compatibility.
s.Foundation.rtl=r.rtl,s.Foundation.GetYoDigits=r.GetYoDigits,s.Foundation.transitionend=r.transitionend,s.Foundation.RegExpEscape=r.RegExpEscape,s.Foundation.onLoad=r.onLoad,s.Foundation.Box=a.Box,s.Foundation.onImagesLoaded=l.onImagesLoaded,s.Foundation.Keyboard=u.Keyboard,s.Foundation.MediaQuery=c.MediaQuery,s.Foundation.Motion=d.Motion,s.Foundation.Move=d.Move,s.Foundation.Nest=h.Nest,s.Foundation.Timer=f.Timer,// Touch and Triggers previously were almost purely sede effect driven,
// so no need to add it to Foundation, just init them.
p.Touch.init(o.a),m.Triggers.init(o.a,s.Foundation),c.MediaQuery._init(),s.Foundation.plugin(g.Abide,"Abide"),s.Foundation.plugin(v.Accordion,"Accordion"),s.Foundation.plugin(y.AccordionMenu,"AccordionMenu"),s.Foundation.plugin(b.Drilldown,"Drilldown"),s.Foundation.plugin(w.Dropdown,"Dropdown"),s.Foundation.plugin(k.DropdownMenu,"DropdownMenu"),s.Foundation.plugin(x.Equalizer,"Equalizer"),s.Foundation.plugin($.Interchange,"Interchange"),s.Foundation.plugin(C.Magellan,"Magellan"),s.Foundation.plugin(_.OffCanvas,"OffCanvas"),s.Foundation.plugin(j.Orbit,"Orbit"),s.Foundation.plugin(S.ResponsiveMenu,"ResponsiveMenu"),s.Foundation.plugin(T.ResponsiveToggle,"ResponsiveToggle"),s.Foundation.plugin(E.Reveal,"Reveal"),s.Foundation.plugin(O.Slider,"Slider"),s.Foundation.plugin(z.SmoothScroll,"SmoothScroll"),s.Foundation.plugin(A.Sticky,"Sticky"),s.Foundation.plugin(P.Tabs,"Tabs"),s.Foundation.plugin(D.Toggler,"Toggler"),s.Foundation.plugin(L.Tooltip,"Tooltip"),s.Foundation.plugin(q.ResponsiveAccordionTabs,"ResponsiveAccordionTabs"),
/* harmony default export */e.default=s.Foundation},
/***/"./js/foundation.abide.js":
/*!********************************!*\
  !*** ./js/foundation.abide.js ***!
  \********************************/
/*! exports provided: Abide */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Abide module.
 * @module foundation.abide
 */n.r(e),
/* harmony export (binding) */n.d(e,"Abide",function(){return g});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=
/* */
function(t){function o(){return s(this,o),a(this,u(o).apply(this,arguments))}return c(o,t),r(o,[{key:"_setup",
/**
     * Creates a new instance of Abide.
     * @class
     * @name Abide
     * @fires Abide#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n
/**
     * Initializes the Abide plugin and calls functions to get Abide functioning on load.
     * @private
     */){var i=1<arguments.length&&void 0!==n?n:{};this.$element=e,this.options=f.a.extend(!0,{},o.defaults,this.$element.data(),i),this.className="Abide",// ie9 back compat
this._init()}},{key:"_init",value:function t(){var n=this;this.$inputs=f.a.merge(// Consider as input to validate:
this.$element.find("input").not("[type=submit]"),// * all input fields expect submit
this.$element.find("textarea, select"));var e=this.$element.find("[data-abide-error]");// Add a11y attributes to all fields
this.options.a11yAttributes&&(this.$inputs.each(function(t,e){return n.addA11yAttributes(f()(e))}),e.each(function(t,e){return n.addGlobalErrorA11yAttributes(f()(e))})),this._events()}
/**
     * Initializes events for Abide.
     * @private
     */},{key:"_events",value:function t(){var e=this;this.$element.off(".abide").on("reset.zf.abide",function(){e.resetForm()}).on("submit.zf.abide",function(){return e.validateForm()}),"fieldChange"===this.options.validateOn&&this.$inputs.off("change.zf.abide").on("change.zf.abide",function(t){e.validateInput(f()(t.target))}),this.options.liveValidate&&this.$inputs.off("input.zf.abide").on("input.zf.abide",function(t){e.validateInput(f()(t.target))}),this.options.validateOnBlur&&this.$inputs.off("blur.zf.abide").on("blur.zf.abide",function(t){e.validateInput(f()(t.target))})}
/**
     * Calls necessary functions to update Abide upon DOM change
     * @private
     */},{key:"_reflow",value:function t(){this._init()}
/**
     * Checks whether or not a form element has the required attribute and if it's checked or not
     * @param {Object} element - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"requiredCheck",value:function t(e){if(!e.attr("required"))return!0;var n=!0;switch(e[0].type){case"checkbox":n=e[0].checked;break;case"select":case"select-one":case"select-multiple":var i=e.find("option:selected");i.length&&i.val()||(n=!1);break;default:e.val()&&e.val().length||(n=!1)}return n}
/**
     * Get:
     * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
     *   1. The element's direct sibling('s).
     *   2. The element's parent's children.
     * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
     *
     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
     *
     * @param {Object} $el - jQuery object to use as reference to find the form error selector.
     * @returns {Object} jQuery object with the selector.
     */},{key:"findFormError",value:function t(e){var n=e[0].id,i=e.siblings(this.options.formErrorSelector);return i.length||(i=e.parent().find(this.options.formErrorSelector)),n&&(i=i.add(this.$element.find('[data-form-error-for="'.concat(n,'"]')))),i}
/**
     * Get the first element in this order:
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"findLabel",value:function t(e){var n=e[0].id,i=this.$element.find('label[for="'.concat(n,'"]'));return i.length?i:e.closest("label")}
/**
     * Get the set of labels associated with a set of radio els in this order
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"findRadioLabels",value:function t(e){var o=this,n=e.map(function(t,e){var n=e.id,i=o.$element.find('label[for="'.concat(n,'"]'));return i.length||(i=f()(e).closest("label")),i[0]});return f()(n)}
/**
     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
     * @param {Object} $el - jQuery object to add the class to
     */},{key:"addErrorClasses",value:function t(e){var n=this.findLabel(e),i=this.findFormError(e);n.length&&n.addClass(this.options.labelErrorClass),i.length&&i.addClass(this.options.formErrorClass),e.addClass(this.options.inputErrorClass).attr({"data-invalid":"","aria-invalid":!0})}
/**
     * Adds [for] and [role=alert] attributes to all form error targetting $el,
     * and [aria-describedby] attribute to $el toward the first form error.
     * @param {Object} $el - jQuery object
     */},{key:"addA11yAttributes",value:function t(e){var n=this.findFormError(e),i=n.filter("label"),o=n.first();if(n.length){// Set [aria-describedby] on the input toward the first form error if it is not set
if(void 0===e.attr("aria-describedby")){
// Get the first error ID or create one
var s=o.attr("id");void 0===s&&(s=Object(m.GetYoDigits)(6,"abide-error"),o.attr("id",s)),e.attr("aria-describedby",s)}if(i.filter("[for]").length<i.length){
// Get the input ID or create one
var r=e.attr("id");void 0===r&&(r=Object(m.GetYoDigits)(6,"abide-input"),e.attr("id",r)),// For each label targeting $el, set [for] if it is not set.
i.each(function(t,e){var n=f()(e);void 0===n.attr("for")&&n.attr("for",r)})}// For each error targeting $el, set [role=alert] if it is not set.
n.each(function(t,e){var n=f()(e);void 0===n.attr("role")&&n.attr("role","alert")}).end()}}
/**
     * Adds [aria-live] attribute to the given global form error $el.
     * @param {Object} $el - jQuery object to add the attribute to
     */},{key:"addGlobalErrorA11yAttributes",value:function t(e){void 0===e.attr("aria-live")&&e.attr("aria-live",this.options.a11yErrorLevel)}
/**
     * Remove CSS error classes etc from an entire radio button group
     * @param {String} groupName - A string that specifies the name of a radio button group
     *
     */},{key:"removeRadioErrorClasses",value:function t(e){var n=this.$element.find(':radio[name="'.concat(e,'"]')),i=this.findRadioLabels(n),o=this.findFormError(n);i.length&&i.removeClass(this.options.labelErrorClass),o.length&&o.removeClass(this.options.formErrorClass),n.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}
/**
     * Removes CSS error class as specified by the Abide settings from the label, input, and the form
     * @param {Object} $el - jQuery object to remove the class from
     */},{key:"removeErrorClasses",value:function t(e){
// radios need to clear all of the els
if("radio"==e[0].type)return this.removeRadioErrorClasses(e.attr("name"));var n=this.findLabel(e),i=this.findFormError(e);n.length&&n.removeClass(this.options.labelErrorClass),i.length&&i.removeClass(this.options.formErrorClass),e.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}
/**
     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
     * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
     * @fires Abide#invalid
     * @fires Abide#valid
     * @param {Object} element - jQuery object to validate, should be an HTML input
     * @returns {Boolean} goodToGo - If the input is valid or not.
     */},{key:"validateInput",value:function t(e){var n=this.requiredCheck(e),i=!1,o=!0,s=e.attr("data-validator"),r=!0;// don't validate ignored inputs or hidden inputs or disabled inputs
if(e.is("[data-abide-ignore]")||e.is('[type="hidden"]')||e.is("[disabled]"))return!0;switch(e[0].type){case"radio":i=this.validateRadio(e.attr("name"));break;case"checkbox":i=n;break;case"select":case"select-one":case"select-multiple":i=n;break;default:i=this.validateText(e)}s&&(o=this.matchValidation(e,s,e.attr("required"))),e.attr("data-equalto")&&(r=this.options.validators.equalTo(e));var a=-1===[n,i,o,r].indexOf(!1),l=(a?"valid":"invalid")+".zf.abide";if(a){
// Re-validate inputs that depend on this one with equalto
var u=this.$element.find('[data-equalto="'.concat(e.attr("id"),'"]'));if(u.length){var c=this;u.each(function(){f()(this).val()&&c.validateInput(f()(this))})}}return this[a?"removeErrorClasses":"addErrorClasses"](e),
/**
       * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
       * Trigger includes the DOM element of the input.
       * @event Abide#valid
       * @event Abide#invalid
       */
e.trigger(l,[e]),a}
/**
     * Goes through a form and if there are any invalid inputs, it will display the form error element
     * @returns {Boolean} noError - true if no errors were detected...
     * @fires Abide#formvalid
     * @fires Abide#forminvalid
     */},{key:"validateForm",value:function t(){var i=this,e=[],n=this;this.$inputs.each(function(){e.push(n.validateInput(f()(this)))});var o=-1===e.indexOf(!1);return this.$element.find("[data-abide-error]").each(function(t,e){var n=f()(e);// Ensure a11y attributes are set
i.options.a11yAttributes&&i.addGlobalErrorA11yAttributes(n),// Show or hide the error
n.css("display",o?"none":"block")}),
/**
       * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
       * Trigger includes the element of the form.
       * @event Abide#formvalid
       * @event Abide#forminvalid
       */
this.$element.trigger((o?"formvalid":"forminvalid")+".zf.abide",[this.$element]),o}
/**
     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
     * @param {Object} $el - jQuery object to validate, should be a text input HTML element
     * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
     * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
     */},{key:"validateText",value:function t(e,n){
// A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
n=n||e.attr("pattern")||e.attr("type");var i=e.val(),o=!1;return i.length?
// If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
o=this.options.patterns.hasOwnProperty(n)?this.options.patterns[n].test(i):n===e.attr("type")||new RegExp(n).test(i):e.prop("required")||(o=!0),o}
/**
     * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
     * @param {String} groupName - A string that specifies the name of a radio button group
     * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
     */},{key:"validateRadio",value:function t(e){
// If at least one radio in the group has the `required` attribute, the group is considered required
// Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
var n=this.$element.find(':radio[name="'.concat(e,'"]')),i=!1,o=!1;// For the group to be required, at least one radio needs to be required
return n.each(function(t,e){f()(e).attr("required")&&(o=!0)}),o||(i=!0),i||
// For the group to be valid, at least one radio needs to be checked
n.each(function(t,e){f()(e).prop("checked")&&(i=!0)}),i}
/**
     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
     * @param {Object} $el - jQuery input element.
     * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
     * @param {Boolean} required - self explanatory?
     * @returns {Boolean} - true if validations passed.
     */},{key:"matchValidation",value:function t(e,n,i){var o=this,s;return i=!!i,-1===n.split(" ").map(function(t){return o.options.validators[t](e,i,e.parent())}).indexOf(!1)}
/**
     * Resets form inputs and styles
     * @fires Abide#formreset
     */},{key:"resetForm",value:function t(){var e=this.$element,n=this.options;f()(".".concat(n.labelErrorClass),e).not("small").removeClass(n.labelErrorClass),f()(".".concat(n.inputErrorClass),e).not("small").removeClass(n.inputErrorClass),f()("".concat(n.formErrorSelector,".").concat(n.formErrorClass)).removeClass(n.formErrorClass),e.find("[data-abide-error]").css("display","none"),f()(":input",e).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").attr({"data-invalid":null,"aria-invalid":null}),f()(":input:radio",e).not("[data-abide-ignore]").prop("checked",!1).attr({"data-invalid":null,"aria-invalid":null}),f()(":input:checkbox",e).not("[data-abide-ignore]").prop("checked",!1).attr({"data-invalid":null,"aria-invalid":null}),
/**
       * Fires when the form has been reset.
       * @event Abide#formreset
       */
e.trigger("formreset.zf.abide",[e])}
/**
     * Destroys an instance of Abide.
     * Removes error styles and classes from elements, without resetting their values.
     */},{key:"_destroy",value:function t(){var e=this;this.$element.off(".abide").find("[data-abide-error]").css("display","none"),this.$inputs.off(".abide").each(function(){e.removeErrorClasses(f()(this))})}}]),o}(p.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
g.defaults={
/**
   * The default event to validate inputs. Checkboxes and radios validate immediately.
   * Remove or change this value for manual validation.
   * @option
   * @type {?string}
   * @default 'fieldChange'
   */
validateOn:"fieldChange",
/**
   * Class to be applied to input labels on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-label'
   */
labelErrorClass:"is-invalid-label",
/**
   * Class to be applied to inputs on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-input'
   */
inputErrorClass:"is-invalid-input",
/**
   * Class selector to use to target Form Errors for show/hide.
   * @option
   * @type {string}
   * @default '.form-error'
   */
formErrorSelector:".form-error",
/**
   * Class added to Form Errors on failed validation.
   * @option
   * @type {string}
   * @default 'is-visible'
   */
formErrorClass:"is-visible",
/**
   * If true, automatically insert when possible:
   * - `[aria-describedby]` on fields
   * - `[role=alert]` on form errors and `[for]` on form error labels
   * - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).
   * @option
   * @type {boolean}
   * @default true
   */
a11yAttributes:!0,
/**
   * [aria-live] attribute value to be applied on global errors `[data-abide-error]`.
   * Options are: 'assertive', 'polite' and 'off'/null
   * @option
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
   * @type {string}
   * @default 'assertive'
   */
a11yErrorLevel:"assertive",
/**
   * Set to true to validate text inputs on any value change.
   * @option
   * @type {boolean}
   * @default false
   */
liveValidate:!1,
/**
   * Set to true to validate inputs on blur.
   * @option
   * @type {boolean}
   * @default false
   */
validateOnBlur:!1,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,
// amex, visa, diners
card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,
// http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
// From CommonRegexJS (@talyssonoc)
// https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76
// For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.
url:/^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
// abc.de
domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
// YYYY-MM-DD
date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
// HH:MM:SS
time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
// MM/DD/YYYY
month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
// DD/MM/YYYY
day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
// #FFF or #FFFFFF
color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
// Domain || URL
website:{test:function t(e){return g.defaults.patterns.domain.test(e)||g.defaults.patterns.url.test(e)}}},
/**
   * Optional validation functions to be used. `equalTo` being the only default included function.
   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
   * el : The jQuery element to validate.
   * required : Boolean value of the required attribute be present or not.
   * parent : The direct parent of the input.
   * @option
   */
validators:{equalTo:function t(e,n,i){return f()("#".concat(e.attr("data-equalto"))).val()===e.val()}}}},
/***/"./js/foundation.accordion.js":
/*!************************************!*\
  !*** ./js/foundation.accordion.js ***!
  \************************************/
/*! exports provided: Accordion */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 */n.r(e),
/* harmony export (binding) */n.d(e,"Accordion",function(){return v});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g,v=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),r(i,[{key:"_setup",
/**
     * Creates a new instance of an accordion.
     * @class
     * @name Accordion
     * @fires Accordion#init
     * @param {jQuery} element - jQuery object to make into an accordion.
     * @param {Object} options - a plain object with settings to override the default options.
     */
value:function t(e,n){this.$element=e,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="Accordion",// ie9 back compat
this._init(),m.Keyboard.register("Accordion",{ENTER:"toggle",SPACE:"toggle",ARROW_DOWN:"next",ARROW_UP:"previous"})}
/**
     * Initializes the accordion by animating the preset active pane(s).
     * @private
     */},{key:"_init",value:function t(){var o=this;this._isInitializing=!0,this.$element.attr("role","tablist"),this.$tabs=this.$element.children("[data-accordion-item]"),this.$tabs.each(function(t,e){var n=f()(e),i=n.children("[data-tab-content]"),o=i[0].id||Object(p.GetYoDigits)(6,"accordion"),s=e.id?"".concat(e.id,"-label"):"".concat(o,"-label");n.find("a:first").attr({"aria-controls":o,role:"tab",id:s,"aria-expanded":!1,"aria-selected":!1}),i.attr({role:"tabpanel","aria-labelledby":s,"aria-hidden":!0,id:o})});var e=this.$element.find(".is-active").children("[data-tab-content]");e.length&&(
// Save up the initial hash to return to it later when going back in history
this._initialAnchor=e.prev("a").attr("href"),this._openSingleTab(e)),this._checkDeepLink=function(){var t=window.location.hash;if(!t.length){
// If we are still initializing and there is no anchor, then there is nothing to do
if(o._isInitializing)return;// Otherwise, move to the initial anchor
o._initialAnchor&&(t=o._initialAnchor)}var e=t&&f()(t),n=t&&o.$element.find('[href$="'.concat(t,'"]')),i=!(!e.length||!n.length);// If there is an anchor for the hash, open it (if not already active)
e&&n&&n.length?n.parent("[data-accordion-item]").hasClass("is-active")||o._openSingleTab(e):o._closeAllTabs(),i&&(
// Roll up a little to show the titles
o.options.deepLinkSmudge&&Object(p.onLoad)(f()(window),function(){var t=o.$element.offset();f()("html, body").animate({scrollTop:t.top},o.options.deepLinkSmudgeDelay)})
/**
           * Fires when the plugin has deeplinked at pageload
           * @event Accordion#deeplink
           */,o.$element.trigger("deeplink.zf.accordion",[n,e]))},//use browser to open a tab, if it exists in this tabset
this.options.deepLink&&this._checkDeepLink(),this._events(),this._isInitializing=!1}
/**
     * Adds event handlers for items within the accordion.
     * @private
     */},{key:"_events",value:function t(){var o=this;this.$tabs.each(function(){var n=f()(this),i=n.children("[data-tab-content]");i.length&&n.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion",function(t){t.preventDefault(),o.toggle(i)}).on("keydown.zf.accordion",function(e){m.Keyboard.handleKey(e,"Accordion",{toggle:function t(){o.toggle(i)},next:function t(){var e=n.next().find("a").focus();o.options.multiExpand||e.trigger("click.zf.accordion")},previous:function t(){var e=n.prev().find("a").focus();o.options.multiExpand||e.trigger("click.zf.accordion")},handled:function t(){e.preventDefault(),e.stopPropagation()}})})}),this.options.deepLink&&f()(window).on("hashchange",this._checkDeepLink)}
/**
     * Toggles the selected content pane's open/close state.
     * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
     * @function
     */},{key:"toggle",value:function t(e){if(e.closest("[data-accordion]").is("[disabled]"))console.info("Cannot toggle an accordion that is disabled.");else//either replace or update browser history
if(e.parent().hasClass("is-active")?this.up(e):this.down(e),this.options.deepLink){var n=e.prev("a").attr("href");this.options.updateHistory?history.pushState({},"",n):history.replaceState({},"",n)}}
/**
     * Opens the accordion tab defined by `$target`.
     * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     */},{key:"down",value:function t(e){e.closest("[data-accordion]").is("[disabled]")?console.info("Cannot call down on an accordion that is disabled."):this.options.multiExpand?this._openTab(e):this._openSingleTab(e)}
/**
     * Closes the tab defined by `$target`.
     * It may be ignored if the Accordion options don't allow it.
     *
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     */},{key:"up",value:function t(e){if(this.$element.is("[disabled]"))console.info("Cannot call up on an accordion that is disabled.");else{// Don't close the item if it is already closed
var n=e.parent();if(n.hasClass("is-active")){// Don't close the item if there is no other active item (unless with `allowAllClosed`)
var i=n.siblings();(this.options.allowAllClosed||i.hasClass("is-active"))&&this._closeTab(e)}}}
/**
     * Make the tab defined by `$target` the only opened tab, closing all others tabs.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @function
     * @private
     */},{key:"_openSingleTab",value:function t(e){
// Close all the others active tabs.
var n=this.$element.children(".is-active").children("[data-tab-content]");n.length&&this._closeTab(n.not(e)),// Then open the target.
this._openTab(e)}
/**
     * Opens the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     * @private
     */},{key:"_openTab",value:function t(e){var n=this,i=e.parent(),o=e.attr("aria-labelledby");e.attr("aria-hidden",!1),i.addClass("is-active"),f()("#".concat(o)).attr({"aria-expanded":!0,"aria-selected":!0}),e.slideDown(this.options.slideSpeed,function(){
/**
         * Fires when the tab is done opening.
         * @event Accordion#down
         */
n.$element.trigger("down.zf.accordion",[e])})}
/**
     * Closes the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     * @private
     */},{key:"_closeTab",value:function t(e){var n=this,i=e.parent(),o=e.attr("aria-labelledby");e.attr("aria-hidden",!0),i.removeClass("is-active"),f()("#".concat(o)).attr({"aria-expanded":!1,"aria-selected":!1}),e.slideUp(this.options.slideSpeed,function(){
/**
         * Fires when the tab is done collapsing up.
         * @event Accordion#up
         */
n.$element.trigger("up.zf.accordion",[e])})}
/**
     * Closes all active tabs
     * @fires Accordion#up
     * @function
     * @private
     */},{key:"_closeAllTabs",value:function t(){var e=this.$element.children(".is-active").children("[data-tab-content]");e.length&&this._closeTab(e)}
/**
     * Destroys an instance of an accordion.
     * @fires Accordion#destroyed
     * @function
     */},{key:"_destroy",value:function t(){this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display",""),this.$element.find("a").off(".zf.accordion"),this.options.deepLink&&f()(window).off("hashchange",this._checkDeepLink)}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */v.defaults={
/**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * @type {number}
   * @default 250
   */
slideSpeed:250,
/**
   * Allow the accordion to have multiple open panes.
   * @option
   * @type {boolean}
   * @default false
   */
multiExpand:!1,
/**
   * Allow the accordion to close all panes.
   * @option
   * @type {boolean}
   * @default false
   */
allowAllClosed:!1,
/**
   * Link the location hash to the open pane.
   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:!1,
/**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
deepLinkSmudge:!1,
/**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
deepLinkSmudgeDelay:300,
/**
   * If `deepLink` is enabled, update the browser history with the open accordion
   * @option
   * @type {boolean}
   * @default false
   */
updateHistory:!1}},
/***/"./js/foundation.accordionMenu.js":
/*!****************************************!*\
  !*** ./js/foundation.accordionMenu.js ***!
  \****************************************/
/*! exports provided: AccordionMenu */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 */n.r(e),
/* harmony export (binding) */n.d(e,"AccordionMenu",function(){return y});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),m=n(/*! ./foundation.util.nest */"./js/foundation.util.nest.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v,y=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),r(i,[{key:"_setup",
/**
     * Creates a new instance of an accordion menu.
     * @class
     * @name AccordionMenu
     * @fires AccordionMenu#init
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="AccordionMenu",// ie9 back compat
this._init(),p.Keyboard.register("AccordionMenu",{ENTER:"toggle",SPACE:"toggle",ARROW_RIGHT:"open",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"close",ESCAPE:"closeAll"})}
/**
     * Initializes the accordion menu by hiding all nested menus.
     * @private
     */},{key:"_init",value:function t(){m.Nest.Feather(this.$element,"accordion");var r=this;this.$element.find("[data-submenu]").not(".is-active").slideUp(0),//.find('a').css('padding-left', '1rem');
this.$element.attr({role:"tree","aria-multiselectable":this.options.multiOpen}),this.$menuLinks=this.$element.find(".is-accordion-submenu-parent"),this.$menuLinks.each(function(){var t=this.id||Object(g.GetYoDigits)(6,"acc-menu-link"),e=f()(this),n=e.children("[data-submenu]"),i=n[0].id||Object(g.GetYoDigits)(6,"acc-menu"),o=n.hasClass("is-active"),s;r.options.parentLink&&e.children("a").clone().prependTo(n).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');r.options.submenuToggle?(e.addClass("has-submenu-toggle"),e.children("a").after('<button id="'+t+'" class="submenu-toggle" aria-controls="'+i+'" aria-expanded="'+o+'" title="'+r.options.submenuToggleText+'"><span class="submenu-toggle-text">'+r.options.submenuToggleText+"</span></button>")):e.attr({"aria-controls":i,"aria-expanded":o,id:t}),n.attr({"aria-labelledby":t,"aria-hidden":!o,role:"group",id:i})}),this.$element.find("li").attr({role:"treeitem"});var e=this.$element.find(".is-active");if(e.length){var r=this;e.each(function(){r.down(f()(this))})}this._events()}
/**
     * Adds event handlers for items within the menu.
     * @private
     */},{key:"_events",value:function t(){var a=this;this.$element.find("li").each(function(){var e=f()(this).children("[data-submenu]");e.length&&(a.options.submenuToggle?f()(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu",function(t){a.toggle(e)}):f()(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu",function(t){t.preventDefault(),a.toggle(e)}))}).on("keydown.zf.accordionmenu",function(n){var e=f()(this),i=e.parent("ul").children("li"),o,s,r=e.children("[data-submenu]");i.each(function(t){if(f()(this).is(e))return o=i.eq(Math.max(0,t-1)).find("a").first(),s=i.eq(Math.min(t+1,i.length-1)).find("a").first(),f()(this).children("[data-submenu]:visible").length&&(
// has open sub menu
s=e.find("li:first-child").find("a").first()),f()(this).is(":first-child")?
// is first element of sub menu
o=e.parents("li").first().find("a").first():o.parents("li").first().children("[data-submenu]:visible").length&&(
// if previous element has open sub menu
o=o.parents("li").find("li:last-child").find("a").first()),void(f()(this).is(":last-child")&&(
// is last element of sub menu
s=e.parents("li").first().next("li").find("a").first()))}),p.Keyboard.handleKey(n,"AccordionMenu",{open:function t(){r.is(":hidden")&&(a.down(r),r.find("li").first().find("a").first().focus())},close:function t(){r.length&&!r.is(":hidden")?
// close active sub of this item
a.up(r):e.parent("[data-submenu]").length&&(
// close currently open sub
a.up(e.parent("[data-submenu]")),e.parents("li").first().find("a").first().focus())},up:function t(){return o.focus(),!0},down:function t(){return s.focus(),!0},toggle:function t(){return!a.options.submenuToggle&&(e.children("[data-submenu]").length?(a.toggle(e.children("[data-submenu]")),!0):void 0)},closeAll:function t(){a.hideAll()},handled:function t(e){e&&n.preventDefault(),n.stopImmediatePropagation()}})})}
/**
     * Closes all panes of the menu.
     * @function
     */},{key:"hideAll",value:function t(){this.up(this.$element.find("[data-submenu]"))}
/**
     * Opens all panes of the menu.
     * @function
     */},{key:"showAll",value:function t(){this.down(this.$element.find("[data-submenu]"))}
/**
     * Toggles the open/close state of a submenu.
     * @function
     * @param {jQuery} $target - the submenu to toggle
     */},{key:"toggle",value:function t(e){e.is(":animated")||(e.is(":hidden")?this.down(e):this.up(e))}
/**
     * Opens the sub-menu defined by `$target`.
     * @param {jQuery} $target - Sub-menu to open.
     * @fires AccordionMenu#down
     */},{key:"down",value:function t(e){var n=this;this.options.multiOpen||this.up(this.$element.find(".is-active").not(e.parentsUntil(this.$element).add(e))),e.addClass("is-active").attr({"aria-hidden":!1}),this.options.submenuToggle?e.prev(".submenu-toggle").attr({"aria-expanded":!0}):e.parent(".is-accordion-submenu-parent").attr({"aria-expanded":!0}),e.slideDown(this.options.slideSpeed,function(){
/**
         * Fires when the menu is done opening.
         * @event AccordionMenu#down
         */
n.$element.trigger("down.zf.accordionMenu",[e])})}
/**
     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
     * @param {jQuery} $target - Sub-menu to close.
     * @fires AccordionMenu#up
     */},{key:"up",value:function t(e){var n=this,i=e.find("[data-submenu]"),o=e.add(i);i.slideUp(0),o.removeClass("is-active").attr("aria-hidden",!0),this.options.submenuToggle?o.prev(".submenu-toggle").attr("aria-expanded",!1):o.parent(".is-accordion-submenu-parent").attr("aria-expanded",!1),e.slideUp(this.options.slideSpeed,function(){
/**
         * Fires when the menu is done collapsing up.
         * @event AccordionMenu#up
         */
n.$element.trigger("up.zf.accordionMenu",[e])})}
/**
     * Destroys an instance of accordion menu.
     * @fires AccordionMenu#destroyed
     */},{key:"_destroy",value:function t(){this.$element.find("[data-submenu]").slideDown(0).css("display",""),this.$element.find("a").off("click.zf.accordionMenu"),this.$element.find("[data-is-parent-link]").detach(),this.options.submenuToggle&&(this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle"),this.$element.find(".submenu-toggle").remove()),m.Nest.Burn(this.$element,"accordion")}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */y.defaults={
/**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
parentLink:!1,
/**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @type {number}
   * @default 250
   */
slideSpeed:250,
/**
   * Adds a separate submenu toggle button. This allows the parent item to have a link.
   * @option
   * @example true
   */
submenuToggle:!1,
/**
   * The text used for the submenu toggle if enabled. This is used for screen readers only.
   * @option
   * @example true
   */
submenuToggleText:"Toggle menu",
/**
   * Allow the menu to have multiple open panes.
   * @option
   * @type {boolean}
   * @default true
   */
multiOpen:!0}},
/***/"./js/foundation.core.js":
/*!*******************************!*\
  !*** ./js/foundation.core.js ***!
  \*******************************/
/*! exports provided: Foundation */
/***/function(t,e,n){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}// Polyfill to get the name of a function in IE9
function l(t){if(void 0!==Function.prototype.name)return void 0===t.prototype?t.constructor.name:t.prototype.constructor.name;var e,n=/function\s([^(]{1,})\(/.exec(t.toString());return n&&1<n.length?n[1].trim():""}function r(t){return"true"===t||"false"!==t&&(isNaN(1*t)?t:parseFloat(t))}// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function u(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Foundation",function(){return h});
/* harmony import */var i=n(/*! jquery */"jquery"),c=/* */n.n(i),o=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),d=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),s,h={version:"6.5.1",
/**
   * Stores initialized plugins.
   */
_plugins:{},
/**
   * Stores generated unique ids for plugin instances
   */
_uuids:[],
/**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
plugin:function t(e,n){
// Object key to use when adding to global Foundation object
// Examples: Foundation.Reveal, Foundation.OffCanvas
var i=n||l(e),o=u(i);// Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
// Examples: data-reveal, data-off-canvas
// Add to the Foundation object and the plugins list (for reflowing)
this._plugins[o]=this[i]=e},
/**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */
registerPlugin:function t(e,n){var i=n?u(n):l(e.constructor).toLowerCase();e.uuid=Object(o.GetYoDigits)(6,i),e.$element.attr("data-".concat(i))||e.$element.attr("data-".concat(i),e.uuid),e.$element.data("zfPlugin")||e.$element.data("zfPlugin",e)
/**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */,e.$element.trigger("init.zf.".concat(i)),this._uuids.push(e.uuid)},
/**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */
unregisterPlugin:function t(e){var n=u(l(e.$element.data("zfPlugin").constructor));for(var i in this._uuids.splice(this._uuids.indexOf(e.uuid),1),e.$element.removeAttr("data-".concat(n)).removeData("zfPlugin")
/**
     * Fires when the plugin has been destroyed.
     * @event Plugin#destroyed
     */.trigger("destroyed.zf.".concat(n)),e)e[i]=null;//clean up script to prep for garbage collection.
},
/**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */
reInit:function t(e){var n=e instanceof c.a;try{if(n)e.each(function(){c()(this).data("zfPlugin")._init()});else{var i=a(e),o=this,s;({object:function t(e){e.forEach(function(t){t=u(t),c()("[data-"+t+"]").foundation("_init")})},string:function t(){e=u(e),c()("[data-"+e+"]").foundation("_init")},undefined:function t(){this.object(Object.keys(o._plugins))}})[i](e)}}catch(t){console.error(t)}finally{return e}},
/**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
reflow:function t(i,e){
// If plugins is undefined, just grab everything
void 0===e?e=Object.keys(this._plugins):"string"==typeof e&&(e=[e]);var s=this;// Iterate through each plugin
c.a.each(e,function(t,n){
// Get the current plugin
var o=s._plugins[n],e;// Localize the search to all elements inside elem, as well as elem itself, unless elem === document
// For each plugin found, initialize it
c()(i).find("[data-"+n+"]").addBack("[data-"+n+"]").each(function(){var t=c()(this),i={};// Don't double-dip on plugins
if(t.data("zfPlugin"))console.warn("Tried to initialize "+n+" on an element that already has a Foundation plugin.");else{if(t.attr("data-options"))var e=t.attr("data-options").split(";").forEach(function(t,e){var n=t.split(":").map(function(t){return t.trim()});n[0]&&(i[n[0]]=r(n[1]))});try{t.data("zfPlugin",new o(c()(this),i))}catch(t){console.error(t)}finally{return}}})})},getFnName:l,addToJquery:function t(r){
// TODO: consider not making this a jQuery function
// TODO: need way to reflow vs. re-initialize
/**
     * The Foundation jQuery method.
     * @param {String|Array} method - An action to perform on the current jQuery object.
     */
var e=function t(n){var e=a(n),i=r(".no-js");if(i.length&&i.removeClass("no-js"),"undefined"===e)
//needs to initialize the Foundation object, or an individual plugin.
d.MediaQuery._init(),h.reflow(this);else{if("string"!==e)
//error for invalid argument type
throw new TypeError("We're sorry, ".concat(e," is not a valid parameter. You must use a string representing the method you wish to invoke."));
//an individual method to invoke on a plugin or group of plugins
var o=Array.prototype.slice.call(arguments,1),s=this.data("zfPlugin");//collect all the arguments, if necessary
//determine the class of plugin
if(void 0===s||void 0===s[n])
//error for no class or no method
throw new ReferenceError("We're sorry, '"+n+"' is not an available method for "+(s?l(s):"this element")+".");
//make sure both the class and method exist
1===this.length?
//if there's only one, call it directly.
s[n].apply(s,o):this.each(function(t,e){
//otherwise loop through the jQuery collection and invoke the method on each
s[n].apply(r(e).data("zfPlugin"),o)})}return this};return r.fn.foundation=e,r}};
/* harmony import */h.util={
/**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */
throttle:function t(n,i){var o=null;return function(){var t=this,e=arguments;null===o&&(o=setTimeout(function(){n.apply(t,e),o=null},i))}}},window.Foundation=h,// Polyfill for requestAnimationFrame
function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var n=t[e];window.requestAnimationFrame=window[n+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(t){var e=Date.now(),n=Math.max(i+16,e);return setTimeout(function(){t(i=n)},n-e)},window.cancelAnimationFrame=clearTimeout}
/**
   * Polyfill for performance.now, required by rAF
   */window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function t(){return Date.now()-this.start}})}(),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)
// closest thing possible to the ECMAScript 5
// internal IsCallable function
throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var n=Array.prototype.slice.call(arguments,1),i=this,o=function t(){},t=function t(){return i.apply(this instanceof o?this:e,n.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(
// native functions don't have a prototype
o.prototype=this.prototype),t.prototype=new o,t})},
/***/"./js/foundation.core.plugin.js":
/*!**************************************!*\
  !*** ./js/foundation.core.plugin.js ***!
  \**************************************/
/*! exports provided: Plugin */
/***/function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}
// Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
// {function} _setup (replaces previous constructor),
// {function} _destroy (replaces previous destroy)
// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function r(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function a(t){return void 0!==t.constructor.name?r(t.constructor.name):r(t.className)}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Plugin",function(){return d});
/* harmony import */var l=n(/*! jquery */"jquery"),u=/* */n.n(l),c=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),d=
/* */
function(){function i(t,e){o(this,i),this._setup(t,e);var n=a(this);this.uuid=Object(c.GetYoDigits)(6,n),this.$element.attr("data-".concat(n))||this.$element.attr("data-".concat(n),this.uuid),this.$element.data("zfPlugin")||this.$element.data("zfPlugin",this)
/**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */,this.$element.trigger("init.zf.".concat(n))}return s(i,[{key:"destroy",value:function t(){this._destroy();var e=a(this);for(var n in this.$element.removeAttr("data-".concat(e)).removeData("zfPlugin")
/**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */.trigger("destroyed.zf.".concat(e)),this)this[n]=null;//clean up script to prep for garbage collection.
}}]),i}();
/* harmony import */},
/***/"./js/foundation.core.utils.js":
/*!*************************************!*\
  !*** ./js/foundation.core.utils.js ***!
  \*************************************/
/*! exports provided: rtl, GetYoDigits, RegExpEscape, transitionend, onLoad, ignoreMousedisappear */
/***/function(t,e,n){"use strict";
// Core Foundation Utilities, utilized in a number of places.
/**
 * Returns a boolean for RTL support
 */
function i(){return"rtl"===c()("html").attr("dir")}
/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */function o(t,e){return t=t||6,Math.round(Math.pow(36,t+1)-Math.random()*Math.pow(36,t)).toString(36).slice(1)+(e?"-".concat(e):"")}
/**
 * Escape a string so it can be used as a regexp pattern
 * @function
 * @see https://stackoverflow.com/a/9310752/4317384
 *
 * @param {String} str - string to escape.
 * @returns {String} - escaped string
 */function s(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function r(t){var e={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},n=document.createElement("div"),i;for(var o in e)void 0!==n.style[o]&&(i=e[o]);return i||(i=setTimeout(function(){t.triggerHandler("transitionend",[t])},1),"transitionend")}
/**
 * Return an event type to listen for window load.
 *
 * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.
 * If `handler` is passed, attach it to the event on `$elem`.
 * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.
 * @function
 *
 * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.
 * @param {Function} [] handler - function to attach to the event.
 * @returns {String} - event type that should or will be triggered.
 */function a(e,t){var n="complete"===document.readyState,i=(n?"_didLoad":"load")+".zf.util.onLoad",o=function t(){return e.triggerHandler(i)};return e&&(t&&e.one(i,t),n?setTimeout(o):c()(window).one("load",o)),i}
/**
 * Retuns an handler for the `mouseleave` that ignore disappeared mouses.
 *
 * If the mouse "disappeared" from the document (like when going on a browser UI element, See https://git.io/zf-11410),
 * the event is ignored.
 * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window
 *   (like by switching to an other window with [Alt]+[Tab]).
 * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document
 *   outside of the element it left.
 *
 * @function
 *
 * @param {Function} [] handler - handler for the filtered `mouseleave` event to watch.
 * @param {Object} [] options - object of options:
 * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.
 * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.
 * @returns {Function} - filtered handler to use to listen on the `mouseleave` event.
 */function l(r,t
/***/){var e=1<arguments.length&&void 0!==t?t:{},n=e.ignoreLeaveWindow,a=void 0!==n&&n,i=e.ignoreReappear,l=void 0!==i&&i;return function t(n){for(var e=arguments.length,i=new Array(1<e?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];var s=r.bind.apply(r,[this,n].concat(i));// The mouse left: call the given callback if the mouse entered elsewhere
if(null!==n.relatedTarget)return s();// Otherwise, check if the mouse actually left the window.
// In firefox if the user switched between windows, the window sill have the focus by the time
// the event is triggered. We have to debounce the event to test this case.
setTimeout(function t(){if(!a&&document.hasFocus&&!document.hasFocus())return s();// Otherwise, wait for the mouse to reeapear outside of the element,
l||c()(document).one("mouseenter",function t(e){c()(n.currentTarget).has(e.target).length||(
// Fill where the mouse finally entered.
n.relatedTarget=e.target,s())})},0)}}n.r(e),
/* harmony export (binding) */n.d(e,"rtl",function(){return i}),
/* harmony export (binding) */n.d(e,"GetYoDigits",function(){return o}),
/* harmony export (binding) */n.d(e,"RegExpEscape",function(){return s}),
/* harmony export (binding) */n.d(e,"transitionend",function(){return r}),
/* harmony export (binding) */n.d(e,"onLoad",function(){return a}),
/* harmony export (binding) */n.d(e,"ignoreMousedisappear",function(){return l});
/* harmony import */var u=n(/*! jquery */"jquery"),c=/* */n.n(u);
/* harmony import */},
/***/"./js/foundation.drilldown.js":
/*!************************************!*\
  !*** ./js/foundation.drilldown.js ***!
  \************************************/
/*! exports provided: Drilldown */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Drilldown module.
 * @module foundation.drilldown
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 * @requires foundation.util.box
 */n.r(e),
/* harmony export (binding) */n.d(e,"Drilldown",function(){return b});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),m=n(/*! ./foundation.util.nest */"./js/foundation.util.nest.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=n(/*! ./foundation.util.box */"./js/foundation.util.box.js"),y,b=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),r(i,[{key:"_setup",
/**
     * Creates a new instance of a drilldown menu.
     * @class
     * @name Drilldown
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="Drilldown",// ie9 back compat
this._init(),p.Keyboard.register("Drilldown",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close",TAB:"down",SHIFT_TAB:"up"})}
/**
     * Initializes the drilldown by creating jQuery collections of elements
     * @private
     */},{key:"_init",value:function t(){m.Nest.Feather(this.$element,"drilldown"),this.options.autoApplyClass&&this.$element.addClass("drilldown"),this.$element.attr({role:"tree","aria-multiselectable":!1}),this.$submenuAnchors=this.$element.find("li.is-drilldown-submenu-parent").children("a"),this.$submenus=this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role","group"),this.$menuItems=this.$element.find("li").not(".js-drilldown-back").attr("role","treeitem").find("a"),// Set the main menu as current by default (unless a submenu is selected)
// Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu
this.$currentMenu=this.$element,this.$element.attr("data-mutate",this.$element.attr("data-drilldown")||Object(g.GetYoDigits)(6,"drilldown")),this._prepareMenu(),this._registerEvents(),this._keyboardEvents()}
/**
     * prepares drilldown menu by setting attributes to links and elements
     * sets a min height to prevent content jumping
     * wraps the element if not already wrapped
     * @private
     * @function
     */},{key:"_prepareMenu",value:function t(){var n=this;// if(!this.options.holdOpen){
//   this._menuLinkEvents();
// }
this.$submenuAnchors.each(function(){var t=f()(this),e=t.parent();n.options.parentLink&&t.clone().prependTo(e.children("[data-submenu]")).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>'),t.data("savedHref",t.attr("href")).removeAttr("href").attr("tabindex",0),t.children("[data-submenu]").attr({"aria-hidden":!0,tabindex:0,role:"group"}),n._events(t)}),this.$submenus.each(function(){var t=f()(this),e;if(!t.find(".js-drilldown-back").length)switch(n.options.backButtonPosition){case"bottom":t.append(n.options.backButton);break;case"top":t.prepend(n.options.backButton);break;default:console.error("Unsupported backButtonPosition value '"+n.options.backButtonPosition+"'")}n._back(t)}),this.$submenus.addClass("invisible"),this.options.autoHeight||this.$submenus.addClass("drilldown-submenu-cover-previous"),// create a wrapper on element if it doesn't exist.
this.$element.parent().hasClass("is-drilldown")||(this.$wrapper=f()(this.options.wrapper).addClass("is-drilldown"),this.options.animateHeight&&this.$wrapper.addClass("animate-height"),this.$element.wrap(this.$wrapper)),// set wrapper
this.$wrapper=this.$element.parent(),this.$wrapper.css(this._getMaxDims())}},{key:"_resize",value:function t(){this.$wrapper.css({"max-width":"none","min-height":"none"}),// _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths
this.$wrapper.css(this._getMaxDims())}
/**
     * Adds event handlers to elements in the menu.
     * @function
     * @private
     * @param {jQuery} $elem - the current menu item to add handlers to.
     */},{key:"_events",value:function t(n){var i=this;n.off("click.zf.drilldown").on("click.zf.drilldown",function(t){if(f()(t.target).parentsUntil("ul","li").hasClass("is-drilldown-submenu-parent")&&(t.stopImmediatePropagation(),t.preventDefault()),// if(e.target !== e.currentTarget.firstElementChild){
//   return false;
// }
i._show(n.parent("li")),i.options.closeOnClick){var e=f()("body");e.off(".zf.drilldown").on("click.zf.drilldown",function(t){t.target===i.$element[0]||f.a.contains(i.$element[0],t.target)||(t.preventDefault(),i._hideAll(),e.off(".zf.drilldown"))})}})}
/**
     * Adds event handlers to the menu element.
     * @function
     * @private
     */},{key:"_registerEvents",value:function t(){this.options.scrollTop&&(this._bindHandler=this._scrollTop.bind(this),this.$element.on("open.zf.drilldown hide.zf.drilldown closed.zf.drilldown",this._bindHandler)),this.$element.on("mutateme.zf.trigger",this._resize.bind(this))}
/**
     * Scroll to Top of Element or data-scroll-top-element
     * @function
     * @fires Drilldown#scrollme
     */},{key:"_scrollTop",value:function t(){var e=this,n=""!=e.options.scrollTopElement?f()(e.options.scrollTopElement):e.$element,i=parseInt(n.offset().top+e.options.scrollTopOffset,10);f()("html, body").stop(!0).animate({scrollTop:i},e.options.animationDuration,e.options.animationEasing,function(){
/**
          * Fires after the menu has scrolled
          * @event Drilldown#scrollme
          */
this===f()("html")[0]&&e.$element.trigger("scrollme.zf.drilldown")})}
/**
     * Adds keydown event listener to `li`'s in the menu.
     * @private
     */},{key:"_keyboardEvents",value:function t(){var r=this;this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown",function(n){var e=f()(this),i=e.parent("li").parent("ul").children("li").children("a"),o,s;i.each(function(t){if(f()(this).is(e))return o=i.eq(Math.max(0,t-1)),void(s=i.eq(Math.min(t+1,i.length-1)))}),p.Keyboard.handleKey(n,"Drilldown",{next:function t(){if(e.is(r.$submenuAnchors))return r._show(e.parent("li")),e.parent("li").one(Object(g.transitionend)(e),function(){e.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()}),!0},previous:function t(){return r._hide(e.parent("li").parent("ul")),e.parent("li").parent("ul").one(Object(g.transitionend)(e),function(){setTimeout(function(){e.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0},up:function t(){// Don't tap focus on first element in root ul
return o.focus(),!e.is(r.$element.find("> li:first-child > a"))},down:function t(){// Don't tap focus on last element in root ul
return s.focus(),!e.is(r.$element.find("> li:last-child > a"))},close:function t(){
// Don't close on element in root ul
e.is(r.$element.find("> li > a"))||(r._hide(e.parent().parent()),e.parent().parent().siblings("a").focus())},open:function t(){return(!r.options.parentLink||!e.attr("href"))&&(e.is(r.$menuItems)?e.is(r.$submenuAnchors)?(
// Sub menu item
r._show(e.parent("li")),e.parent("li").one(Object(g.transitionend)(e),function(){e.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()}),!0):void 0:(
// not menu item means back button
r._hide(e.parent("li").parent("ul")),e.parent("li").parent("ul").one(Object(g.transitionend)(e),function(){setTimeout(function(){e.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0))},handled:function t(e){e&&n.preventDefault(),n.stopImmediatePropagation()}})})}
/**
     * Closes all open elements, and returns to root menu.
     * @function
     * @fires Drilldown#closed
     */},{key:"_hideAll",value:function t(){var e=this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");this.options.autoHeight&&this.$wrapper.css({height:e.parent().closest("ul").data("calcHeight")}),e.one(Object(g.transitionend)(e),function(t){e.removeClass("is-active is-closing")}),
/**
       * Fires when the menu is fully closed.
       * @event Drilldown#closed
       */
this.$element.trigger("closed.zf.drilldown")}
/**
     * Adds event listener for each `back` button, and closes open menus.
     * @function
     * @fires Drilldown#back
     * @param {jQuery} $elem - the current sub-menu to add `back` event.
     */},{key:"_back",value:function t(n){var i=this;n.off("click.zf.drilldown"),n.children(".js-drilldown-back").on("click.zf.drilldown",function(t){t.stopImmediatePropagation(),// console.log('mouseup on back');
i._hide(n);// If there is a parent submenu, call show
var e=n.parent("li").parent("ul").parent("li");e.length&&i._show(e)})}
/**
     * Adds event listener to menu items w/o submenus to close open menus on click.
     * @function
     * @private
     */},{key:"_menuLinkEvents",value:function t(){var e=this;this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown",function(t){
// e.stopImmediatePropagation();
setTimeout(function(){e._hideAll()},0)})}
/**
     * Sets the CSS classes for submenu to show it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */},{key:"_setShowSubMenuClasses",value:function t(e,n){e.addClass("is-active").removeClass("invisible").attr("aria-hidden",!1),e.parent("li").attr("aria-expanded",!0),!0===n&&this.$element.trigger("open.zf.drilldown",[e])}
/**
     * Sets the CSS classes for submenu to hide it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */},{key:"_setHideSubMenuClasses",value:function t(e,n){e.removeClass("is-active").addClass("invisible").attr("aria-hidden",!0),e.parent("li").attr("aria-expanded",!1),!0===n&&e.trigger("hide.zf.drilldown",[e])}
/**
     * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
     * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the target (sub)menu (`ul` tag)
     * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
     */},{key:"_showMenu",value:function t(n,i){var o=this,e;// Reset drilldown
// If target menu is root, focus first link & exit
if(this.$element.find('li[aria-expanded="true"] > ul[data-submenu]').each(function(t){o._setHideSubMenuClasses(f()(this))}),(// Save the menu as the currently displayed one.
this.$currentMenu=n).is("[data-drilldown]"))return!0===i&&n.find('li[role="treeitem"] > a').first().focus(),void(this.options.autoHeight&&this.$wrapper.css("height",n.data("calcHeight")));// Find all submenus on way to root incl. the element itself
var s=n.children().first().parentsUntil("[data-drilldown]","[data-submenu]");// Open target menu and all submenus on its way to root
s.each(function(t){
// Update height of first child (target menu) if autoHeight option true
0===t&&o.options.autoHeight&&o.$wrapper.css("height",f()(this).data("calcHeight"));var e=t==s.length-1;// Add transitionsend listener to last child (root due to reverse order) to open target menu's first link
// Last child makes sure the event gets always triggered even if going through several menus
!0===e&&f()(this).one(Object(g.transitionend)(f()(this)),function(){!0===i&&n.find('li[role="treeitem"] > a').first().focus()}),o._setShowSubMenuClasses(f()(this),e)})}
/**
     * Opens a submenu.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
     */},{key:"_show",value:function t(e){var n=e.children("[data-submenu]");e.attr("aria-expanded",!0),(this.$currentMenu=n).addClass("is-active").removeClass("invisible").attr("aria-hidden",!1),this.options.autoHeight&&this.$wrapper.css({height:n.data("calcHeight")})
/**
       * Fires when the submenu has opened.
       * @event Drilldown#open
       */,this.$element.trigger("open.zf.drilldown",[e])}
/**
     * Hides a submenu
     * @function
     * @fires Drilldown#hide
     * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
     */},{key:"_hide",value:function t(e){this.options.autoHeight&&this.$wrapper.css({height:e.parent().closest("ul").data("calcHeight")});var n=this;e.parent("li").attr("aria-expanded",!1),e.attr("aria-hidden",!0),e.addClass("is-closing").one(Object(g.transitionend)(e),function(){e.removeClass("is-active is-closing"),e.blur().addClass("invisible")}),
/**
       * Fires when the submenu has closed.
       * @event Drilldown#hide
       */
e.trigger("hide.zf.drilldown",[e])}
/**
     * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
     * Prevents content jumping.
     * @function
     * @private
     */},{key:"_getMaxDims",value:function t(){var n=0,e={},i=this;// Recalculate menu heights and total max height
return this.$submenus.add(this.$element).each(function(){var t=f()(this).children("li").length,e=v.Box.GetDimensions(this).height;n=n<e?e:n,i.options.autoHeight&&f()(this).data("calcHeight",e)}),this.options.autoHeight?e.height=this.$currentMenu.data("calcHeight"):e["min-height"]="".concat(n,"px"),e["max-width"]="".concat(this.$element[0].getBoundingClientRect().width,"px"),e}
/**
     * Destroys the Drilldown Menu
     * @function
     */},{key:"_destroy",value:function t(){this.options.scrollTop&&this.$element.off(".zf.drilldown",this._bindHandler),this._hideAll(),this.$element.off("mutateme.zf.trigger"),m.Nest.Burn(this.$element,"drilldown"),this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"),this.$submenuAnchors.each(function(){f()(this).off(".zf.drilldown")}),this.$element.find("[data-is-parent-link]").detach(),this.$submenus.removeClass("drilldown-submenu-cover-previous invisible"),this.$element.find("a").each(function(){var t=f()(this);t.removeAttr("tabindex"),t.data("savedHref")&&t.attr("href",t.data("savedHref")).removeData("savedHref")})}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */b.defaults={
/**
   * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
   * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
   * @option
   * @type {boolian}
   * @default true
   */
autoApplyClass:!0,
/**
   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
   */
backButton:'<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
/**
   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
   * @option
   * @type {string}
   * @default top
   */
backButtonPosition:"top",
/**
   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<div></div>'
   */
wrapper:"<div></div>",
/**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
parentLink:!1,
/**
   * Allow the menu to return to root list on body click.
   * @option
   * @type {boolean}
   * @default false
   */
closeOnClick:!1,
/**
   * Allow the menu to auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
autoHeight:!1,
/**
   * Animate the auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
animateHeight:!1,
/**
   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
   * @option
   * @type {boolean}
   * @default false
   */
scrollTop:!1,
/**
   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
   * @option
   * @type {string}
   * @default ''
   */
scrollTopElement:"",
/**
   * ScrollTop offset
   * @option
   * @type {number}
   * @default 0
   */
scrollTopOffset:0,
/**
   * Scroll animation duration
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Scroll animation easing. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @see {@link https://api.jquery.com/animate|JQuery animate}
   * @default 'swing'
   */
animationEasing:"swing"}},
/***/"./js/foundation.dropdown.js":
/*!***********************************!*\
  !*** ./js/foundation.dropdown.js ***!
  \***********************************/
/*! exports provided: Dropdown */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function t(e,n,i){var o=c(e,n);if(o){var s=Object.getOwnPropertyDescriptor(o,n);return s.get?s.get.call(i):s.value}})(t,e,n||t)}function c(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function f(t,e){return(f=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Dropdown module.
 * @module foundation.dropdown
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 */n.r(e),
/* harmony export (binding) */n.d(e,"Dropdown",function(){return w});
/* harmony import */var p=n(/*! jquery */"jquery"),m=/* */n.n(p),g=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),v=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),y=n(/*! ./foundation.positionable */"./js/foundation.positionable.js"),b=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),w=
/* */
function(t){function i(){return o(this,i),a(this,d(i).apply(this,arguments))}return h(i,t),r(i,[{key:"_setup",
/**
     * Creates a new instance of a dropdown.
     * @class
     * @name Dropdown
     * @param {jQuery} element - jQuery object to make into a dropdown.
     *        Object should be of the dropdown panel, rather than its anchor.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=m.a.extend({},i.defaults,this.$element.data(),n),this.className="Dropdown",// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
b.Triggers.init(m.a),this._init(),g.Keyboard.register("Dropdown",{ENTER:"toggle",SPACE:"toggle",ESCAPE:"close"})}
/**
     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
     * @function
     * @private
     */},{key:"_init",value:function t(){var e=this.$element.attr("id");this.$anchors=m()('[data-toggle="'.concat(e,'"]')).length?m()('[data-toggle="'.concat(e,'"]')):m()('[data-open="'.concat(e,'"]')),this.$anchors.attr({"aria-controls":e,"data-is-focus":!1,"data-yeti-box":e,"aria-haspopup":!0,"aria-expanded":!1}),this._setCurrentAnchor(this.$anchors.first()),this.options.parentClass?this.$parent=this.$element.parents("."+this.options.parentClass):this.$parent=null,// Set [aria-labelledby] on the Dropdown if it is not set
void 0===this.$element.attr("aria-labelledby")&&(
// Get the anchor ID or create one
void 0===this.$currentAnchor.attr("id")&&this.$currentAnchor.attr("id",Object(v.GetYoDigits)(6,"dd-anchor")),this.$element.attr("aria-labelledby",this.$currentAnchor.attr("id"))),this.$element.attr({"aria-hidden":"true","data-yeti-box":e,"data-resize":e}),u(d(i.prototype),"_init",this).call(this),this._events()}},{key:"_getDefaultPosition",value:function t(){
// handle legacy classnames
var e=this.$element[0].className.match(/(top|left|right|bottom)/g);return e?e[0]:"bottom"}},{key:"_getDefaultAlignment",value:function t(){
// handle legacy float approach
var e=/float-(\S+)/.exec(this.$currentAnchor.attr("class"));return e?e[1]:u(d(i.prototype),"_getDefaultAlignment",this).call(this)}
/**
     * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.
     * Recursively calls itself if a collision is detected, with a new position class.
     * @function
     * @private
     */},{key:"_setPosition",value:function t(){this.$element.removeClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment)),u(d(i.prototype),"_setPosition",this).call(this,this.$currentAnchor,this.$element,this.$parent),this.$element.addClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment))}
/**
     * Make it a current anchor.
     * Current anchor as the reference for the position of Dropdown panes.
     * @param {HTML} el - DOM element of the anchor.
     * @function
     * @private
     */},{key:"_setCurrentAnchor",value:function t(e){this.$currentAnchor=m()(e)}
/**
     * Adds event listeners to the element utilizing the triggers utility library.
     * @function
     * @private
     */},{key:"_events",value:function t(){var i=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":this._setPosition.bind(this)}),this.$anchors.off("click.zf.trigger").on("click.zf.trigger",function(){i._setCurrentAnchor(this)}),this.options.hover&&(this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){i._setCurrentAnchor(this);var t=m()("body").data();void 0!==t.whatinput&&"mouse"!==t.whatinput||(clearTimeout(i.timeout),i.timeout=setTimeout(function(){i.open(),i.$anchors.data("hover",!0)},i.options.hoverDelay))}).on("mouseleave.zf.dropdown",Object(v.ignoreMousedisappear)(function(){clearTimeout(i.timeout),i.timeout=setTimeout(function(){i.close(),i.$anchors.data("hover",!1)},i.options.hoverDelay)})),this.options.hoverPane&&this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){clearTimeout(i.timeout)}).on("mouseleave.zf.dropdown",Object(v.ignoreMousedisappear)(function(){clearTimeout(i.timeout),i.timeout=setTimeout(function(){i.close(),i.$anchors.data("hover",!1)},i.options.hoverDelay)}))),this.$anchors.add(this.$element).on("keydown.zf.dropdown",function(e){var n=m()(this),t=g.Keyboard.findFocusable(i.$element);g.Keyboard.handleKey(e,"Dropdown",{open:function t(){n.is(i.$anchors)&&!n.is("input, textarea")&&(i.open(),i.$element.attr("tabindex",-1).focus(),e.preventDefault())},close:function t(){i.close(),i.$anchors.focus()}})})}
/**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */},{key:"_addBodyHandler",value:function t(){var e=m()(document.body).not(this.$element),n=this;e.off("click.zf.dropdown").on("click.zf.dropdown",function(t){n.$anchors.is(t.target)||n.$anchors.find(t.target).length||n.$element.is(t.target)||n.$element.find(t.target).length||(n.close(),e.off("click.zf.dropdown"))})}
/**
     * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
     * @function
     * @fires Dropdown#closeme
     * @fires Dropdown#show
     */},{key:"open",value:function t(){if(
// var _this = this;
/**
       * Fires to close other open dropdowns, typically when dropdown is opening
       * @event Dropdown#closeme
       */
this.$element.trigger("closeme.zf.dropdown",this.$element.attr("id")),this.$anchors.addClass("hover").attr({"aria-expanded":!0}),// this.$element/*.show()*/;
this.$element.addClass("is-opening"),this._setPosition(),this.$element.removeClass("is-opening").addClass("is-open").attr({"aria-hidden":!1}),this.options.autoFocus){var e=g.Keyboard.findFocusable(this.$element);e.length&&e.eq(0).focus()}this.options.closeOnClick&&this._addBodyHandler(),this.options.trapFocus&&g.Keyboard.trapFocus(this.$element)
/**
       * Fires once the dropdown is visible.
       * @event Dropdown#show
       */,this.$element.trigger("show.zf.dropdown",[this.$element])}
/**
     * Closes the open dropdown pane.
     * @function
     * @fires Dropdown#hide
     */},{key:"close",value:function t(){if(!this.$element.hasClass("is-open"))return!1;this.$element.removeClass("is-open").attr({"aria-hidden":!0}),this.$anchors.removeClass("hover").attr("aria-expanded",!1),
/**
       * Fires once the dropdown is no longer visible.
       * @event Dropdown#hide
       */
this.$element.trigger("hide.zf.dropdown",[this.$element]),this.options.trapFocus&&g.Keyboard.releaseFocus(this.$element)}
/**
     * Toggles the dropdown pane's visibility.
     * @function
     */},{key:"toggle",value:function t(){if(this.$element.hasClass("is-open")){if(this.$anchors.data("hover"))return;this.close()}else this.open()}
/**
     * Destroys the dropdown.
     * @function
     */},{key:"_destroy",value:function t(){this.$element.off(".zf.trigger").hide(),this.$anchors.off(".zf.dropdown"),m()(document.body).off("click.zf.dropdown")}}]),i}(y.Positionable);
/* harmony import */w.defaults={
/**
   * Class that designates bounding container of Dropdown (default: window)
   * @option
   * @type {?string}
   * @default null
   */
parentClass:null,
/**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 250
   */
hoverDelay:250,
/**
   * Allow submenus to open on hover events
   * @option
   * @type {boolean}
   * @default false
   */
hover:!1,
/**
   * Don't close dropdown when hovering over dropdown pane
   * @option
   * @type {boolean}
   * @default false
   */
hoverPane:!1,
/**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0,
/**
   * Position of dropdown. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
allowOverlap:!1,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
allowBottomOverlap:!0,
/**
   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
   * @option
   * @type {boolean}
   * @default false
   */
trapFocus:!1,
/**
   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
   * @option
   * @type {boolean}
   * @default false
   */
autoFocus:!1,
/**
   * Allows a click on the body to close the dropdown.
   * @option
   * @type {boolean}
   * @default false
   */
closeOnClick:!1}},
/***/"./js/foundation.dropdownMenu.js":
/*!***************************************!*\
  !*** ./js/foundation.dropdownMenu.js ***!
  \***************************************/
/*! exports provided: DropdownMenu */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * DropdownMenu module.
 * @module foundation.dropdown-menu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 */n.r(e),
/* harmony export (binding) */n.d(e,"DropdownMenu",function(){return b});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),v=n(/*! ./foundation.util.nest */"./js/foundation.util.nest.js"),y=n(/*! ./foundation.util.box */"./js/foundation.util.box.js"),b=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),r(i,[{key:"_setup",
/**
     * Creates a new instance of DropdownMenu.
     * @class
     * @name DropdownMenu
     * @fires DropdownMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="DropdownMenu",// ie9 back compat
this._init(),g.Keyboard.register("DropdownMenu",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close"})}
/**
     * Initializes the plugin, and calls _prepareMenu
     * @private
     * @function
     */},{key:"_init",value:function t(){v.Nest.Feather(this.$element,"dropdown");var e=this.$element.find("li.is-dropdown-submenu-parent");this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"),this.$menuItems=this.$element.find('[role="menuitem"]'),this.$tabs=this.$element.children('[role="menuitem"]'),this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass),"auto"===this.options.alignment?this.$element.hasClass(this.options.rightClass)||Object(m.rtl)()||this.$element.parents(".top-bar-right").is("*")?(this.options.alignment="right",e.addClass("opens-left")):(this.options.alignment="left",e.addClass("opens-right")):"right"===this.options.alignment?e.addClass("opens-left"):e.addClass("opens-right"),this.changed=!1,this._events()}},{key:"_isVertical",value:function t(){return"block"===this.$tabs.css("display")||"column"===this.$element.css("flex-direction")}},{key:"_isRtl",value:function t(){return this.$element.hasClass("align-right")||Object(m.rtl)()&&!this.$element.hasClass("align-left")}
/**
     * Adds event listeners to elements within the menu
     * @private
     * @function
     */},{key:"_events",value:function t(){var d=this,r="ontouchstart"in window||void 0!==window.ontouchstart,a="is-dropdown-submenu-parent",e=function t(e){var n=f()(e.target).parentsUntil("ul",".".concat(a)),i=n.hasClass(a),o="true"===n.attr("data-is-click"),s=n.children(".is-dropdown-submenu");if(i)if(o){if(!d.options.closeOnClick||!d.options.clickOpen&&!r||d.options.forceFollow&&r)return;e.stopImmediatePropagation(),e.preventDefault(),d._hide(n)}else e.preventDefault(),e.stopImmediatePropagation(),d._show(s),n.add(n.parentsUntil(d.$element,".".concat(a))).attr("data-is-click",!0)};// used for onClick and in the keyboard handlers
(this.options.clickOpen||r)&&this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu",e),// Handle Leaf element Clicks
d.options.closeOnClickInside&&this.$menuItems.on("click.zf.dropdownmenu",function(t){var e,n;f()(this).hasClass(a)||d._hide()}),this.options.disableHover||this.$menuItems.on("mouseenter.zf.dropdownmenu",function(t){var e=f()(this),n;e.hasClass(a)&&(clearTimeout(e.data("_delay")),e.data("_delay",setTimeout(function(){d._show(e.children(".is-dropdown-submenu"))},d.options.hoverDelay)))}).on("mouseleave.zf.dropdownMenu",Object(m.ignoreMousedisappear)(function(t){var e=f()(this),n;if(e.hasClass(a)&&d.options.autoclose){if("true"===e.attr("data-is-click")&&d.options.clickOpen)return!1;clearTimeout(e.data("_delay")),e.data("_delay",setTimeout(function(){d._hide(e)},d.options.closingTime))}})),this.$menuItems.on("keydown.zf.dropdownmenu",function(n){var i=f()(n.target).parentsUntil("ul",'[role="menuitem"]'),t=-1<d.$tabs.index(i),e=t?d.$tabs:i.siblings("li").add(i),o,s;e.each(function(t){if(f()(this).is(i))return o=e.eq(t-1),void(s=e.eq(t+1))});var r=function t(){s.children("a:first").focus(),n.preventDefault()},a=function t(){o.children("a:first").focus(),n.preventDefault()},l=function t(){var e=i.children("ul.is-dropdown-submenu");e.length&&(d._show(e),i.find("li > a:first").focus(),n.preventDefault())},u=function t(){
//if ($element.is(':first-child')) {
var e=i.parent("ul").parent("li");e.children("a:first").focus(),d._hide(e),n.preventDefault()},c={open:l,close:function t(){d._hide(d.$element),d.$menuItems.eq(0).children("a").focus(),// focus to first element
n.preventDefault()},handled:function t(){n.stopImmediatePropagation()}};t?d._isVertical()?
// vertical menu
d._isRtl()?
// right aligned
f.a.extend(c,{down:r,up:a,next:u,previous:l}):
// left aligned
f.a.extend(c,{down:r,up:a,next:l,previous:u}):
// horizontal menu
d._isRtl()?
// right aligned
f.a.extend(c,{next:a,previous:r,down:l,up:u}):
// left aligned
f.a.extend(c,{next:r,previous:a,down:l,up:u}):
// not tabs -> one sub
d._isRtl()?
// right aligned
f.a.extend(c,{next:u,previous:l,down:r,up:a}):
// left aligned
f.a.extend(c,{next:l,previous:u,down:r,up:a}),g.Keyboard.handleKey(n,"DropdownMenu",c)})}
/**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */},{key:"_addBodyHandler",value:function t(){var n=f()(document.body),i=this;n.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu",function(t){var e;i.$element.find(t.target).length||(i._hide(),n.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))})}
/**
     * Opens a dropdown pane, and checks for collisions first.
     * @param {jQuery} $sub - ul element that is a submenu to show
     * @function
     * @private
     * @fires Dropdownmenu#show
     */},{key:"_show",value:function t(n){var e=this.$tabs.index(this.$tabs.filter(function(t,e){return 0<f()(e).find(n).length})),i=n.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");this._hide(i,e),n.css("visibility","hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");var o=y.Box.ImNotTouchingYou(n,null,!0);if(!o){var s="left"===this.options.alignment?"-right":"-left",r=n.parent(".is-dropdown-submenu-parent");r.removeClass("opens".concat(s)).addClass("opens-".concat(this.options.alignment)),(o=y.Box.ImNotTouchingYou(n,null,!0))||r.removeClass("opens-".concat(this.options.alignment)).addClass("opens-inner"),this.changed=!0}n.css("visibility",""),this.options.closeOnClick&&this._addBodyHandler()
/**
       * Fires when the new dropdown pane is visible.
       * @event Dropdownmenu#show
       */,this.$element.trigger("show.zf.dropdownmenu",[n])}
/**
     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
     * @function
     * @param {jQuery} $elem - element with a submenu to hide
     * @param {Number} idx - index of the $tabs collection to hide
     * @private
     */},{key:"_hide",value:function t(e,n){var i,o;if((i=e&&e.length?e:void 0!==n?this.$tabs.not(function(t,e){return t===n}):this.$element).hasClass("is-active")||0<i.find(".is-active").length){if(i.find("li.is-active").add(i).attr({"data-is-click":!1}).removeClass("is-active"),i.find("ul.js-dropdown-active").removeClass("js-dropdown-active"),this.changed||i.find("opens-inner").length){var s="left"===this.options.alignment?"right":"left";i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(s)),this.changed=!1}
/**
         * Fires when the open menus are closed.
         * @event Dropdownmenu#hide
         */this.$element.trigger("hide.zf.dropdownmenu",[i])}}
/**
     * Destroys the plugin.
     * @function
     */},{key:"_destroy",value:function t(){this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"),f()(document.body).off(".zf.dropdownmenu"),v.Nest.Burn(this.$element,"dropdown")}}]),i}(p.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
b.defaults={
/**
   * Disallows hover events from opening submenus
   * @option
   * @type {boolean}
   * @default false
   */
disableHover:!1,
/**
   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
   * @option
   * @type {boolean}
   * @default true
   */
autoclose:!0,
/**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 50
   */
hoverDelay:50,
/**
   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
   * @option
   * @type {boolean}
   * @default false
   */
clickOpen:!1,
/**
   * Amount of time to delay closing a submenu on a mouseleave event.
   * @option
   * @type {number}
   * @default 500
   */
closingTime:500,
/**
   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow clicks on the body to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:!0,
/**
   * Allow clicks on leaf anchor links to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClickInside:!0,
/**
   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'vertical'
   */
verticalClass:"vertical",
/**
   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'align-right'
   */
rightClass:"align-right",
/**
   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
   * @option
   * @type {boolean}
   * @default true
   */
forceFollow:!0}},
/***/"./js/foundation.equalizer.js":
/*!************************************!*\
  !*** ./js/foundation.equalizer.js ***!
  \************************************/
/*! exports provided: Equalizer */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Equalizer module.
 * @module foundation.equalizer
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.imageLoader if equalizer contains images
 */n.r(e),
/* harmony export (binding) */n.d(e,"Equalizer",function(){return y});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v,y=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),r(i,[{key:"_setup",
/**
     * Creates a new instance of Equalizer.
     * @class
     * @name Equalizer
     * @fires Equalizer#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="Equalizer",// ie9 back compat
this._init()}
/**
     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
     * @private
     */},{key:"_init",value:function t(){var e=this.$element.attr("data-equalizer")||"",n=this.$element.find('[data-equalizer-watch="'.concat(e,'"]'));p.MediaQuery._init(),this.$watched=n.length?n:this.$element.find("[data-equalizer-watch]"),this.$element.attr("data-resize",e||Object(g.GetYoDigits)(6,"eq")),this.$element.attr("data-mutate",e||Object(g.GetYoDigits)(6,"eq")),this.hasNested=0<this.$element.find("[data-equalizer]").length,this.isNested=0<this.$element.parentsUntil(document.body,"[data-equalizer]").length,this.isOn=!1,this._bindHandler={onResizeMeBound:this._onResizeMe.bind(this),onPostEqualizedBound:this._onPostEqualized.bind(this)};var i=this.$element.find("img"),o;this.options.equalizeOn?(o=this._checkMQ(),f()(window).on("changed.zf.mediaquery",this._checkMQ.bind(this))):this._events(),(void 0!==o&&!1===o||void 0===o)&&(i.length?Object(m.onImagesLoaded)(i,this._reflow.bind(this)):this._reflow())}
/**
     * Removes event listeners if the breakpoint is too small.
     * @private
     */},{key:"_pauseEvents",value:function t(){this.isOn=!1,this.$element.off({".zf.equalizer":this._bindHandler.onPostEqualizedBound,"resizeme.zf.trigger":this._bindHandler.onResizeMeBound,"mutateme.zf.trigger":this._bindHandler.onResizeMeBound})}
/**
     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
     * @private
     */},{key:"_onResizeMe",value:function t(e){this._reflow()}
/**
     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
     * @private
     */},{key:"_onPostEqualized",value:function t(e){e.target!==this.$element[0]&&this._reflow()}
/**
     * Initializes events for Equalizer.
     * @private
     */},{key:"_events",value:function t(){var e=this;this._pauseEvents(),this.hasNested?this.$element.on("postequalized.zf.equalizer",this._bindHandler.onPostEqualizedBound):(this.$element.on("resizeme.zf.trigger",this._bindHandler.onResizeMeBound),this.$element.on("mutateme.zf.trigger",this._bindHandler.onResizeMeBound)),this.isOn=!0}
/**
     * Checks the current breakpoint to the minimum required size.
     * @private
     */},{key:"_checkMQ",value:function t(){var e=!p.MediaQuery.is(this.options.equalizeOn);return e?this.isOn&&(this._pauseEvents(),this.$watched.css("height","auto")):this.isOn||this._events(),e}
/**
     * A noop version for the plugin
     * @private
     */},{key:"_killswitch",value:function t(){}
/**
     * Calls necessary functions to update Equalizer upon DOM change
     * @private
     */},{key:"_reflow",value:function t(){if(!this.options.equalizeOnStack&&this._isStacked())return this.$watched.css("height","auto"),!1;this.options.equalizeByRow?this.getHeightsByRow(this.applyHeightByRow.bind(this)):this.getHeights(this.applyHeight.bind(this))}
/**
     * Manually determines if the first 2 elements are *NOT* stacked.
     * @private
     */},{key:"_isStacked",value:function t(){return!this.$watched[0]||!this.$watched[1]||this.$watched[0].getBoundingClientRect().top!==this.$watched[1].getBoundingClientRect().top}
/**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} heights - An array of heights of children within Equalizer container
     */},{key:"getHeights",value:function t(e){for(var n=[],i=0,o=this.$watched.length;i<o;i++)this.$watched[i].style.height="auto",n.push(this.$watched[i].offsetHeight);e(n)}
/**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     */},{key:"getHeightsByRow",value:function t(e){var n=this.$watched.length?this.$watched.first().offset().top:0,i=[],o=0;//group by Row
i[o]=[];for(var s=0,r=this.$watched.length;s<r;s++){this.$watched[s].style.height="auto";//maybe could use this.$watched[i].offsetTop
var a=f()(this.$watched[s]).offset().top;a!=n&&(i[++o]=[],n=a),i[o].push([this.$watched[s],this.$watched[s].offsetHeight])}for(var l=0,u=i.length;l<u;l++){var c=f()(i[l]).map(function(){return this[1]}).get(),d=Math.max.apply(null,c);i[l].push(d)}e(i)}
/**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
     * @param {array} heights - An array of heights of children within Equalizer container
     * @fires Equalizer#preequalized
     * @fires Equalizer#postequalized
     */},{key:"applyHeight",value:function t(e){var n=Math.max.apply(null,e);
/**
       * Fires before the heights are applied
       * @event Equalizer#preequalized
       */this.$element.trigger("preequalized.zf.equalizer"),this.$watched.css("height",n),
/**
       * Fires when the heights have been applied
       * @event Equalizer#postequalized
       */
this.$element.trigger("postequalized.zf.equalizer")}
/**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     * @fires Equalizer#preequalized
     * @fires Equalizer#preequalizedrow
     * @fires Equalizer#postequalizedrow
     * @fires Equalizer#postequalized
     */},{key:"applyHeightByRow",value:function t(e){
/**
       * Fires before the heights are applied
       */
this.$element.trigger("preequalized.zf.equalizer");for(var n=0,i=e.length;n<i;n++){var o=e[n].length,s=e[n][o-1];if(o<=2)f()(e[n][0][0]).css({height:"auto"});else{
/**
          * Fires before the heights per row are applied
          * @event Equalizer#preequalizedrow
          */
this.$element.trigger("preequalizedrow.zf.equalizer");for(var r=0,a=o-1;r<a;r++)f()(e[n][r][0]).css({height:s});
/**
          * Fires when the heights per row have been applied
          * @event Equalizer#postequalizedrow
          */this.$element.trigger("postequalizedrow.zf.equalizer")}}
/**
       * Fires when the heights have been applied
       */this.$element.trigger("postequalized.zf.equalizer")}
/**
     * Destroys an instance of Equalizer.
     * @function
     */},{key:"_destroy",value:function t(){this._pauseEvents(),this.$watched.css("height","auto")}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
y.defaults={
/**
   * Enable height equalization when stacked on smaller screens.
   * @option
   * @type {boolean}
   * @default false
   */
equalizeOnStack:!1,
/**
   * Enable height equalization row by row.
   * @option
   * @type {boolean}
   * @default false
   */
equalizeByRow:!1,
/**
   * String representing the minimum breakpoint size the plugin should equalize heights on.
   * @option
   * @type {string}
   * @default ''
   */
equalizeOn:""}},
/***/"./js/foundation.interchange.js":
/*!**************************************!*\
  !*** ./js/foundation.interchange.js ***!
  \**************************************/
/*! exports provided: Interchange */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 */n.r(e),
/* harmony export (binding) */n.d(e,"Interchange",function(){return v});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=
/* */
function(t){function l(){return o(this,l),a(this,u(l).apply(this,arguments))}return c(l,t),r(l,[{key:"_setup",
/**
     * Creates a new instance of Interchange.
     * @class
     * @name Interchange
     * @fires Interchange#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=f.a.extend({},l.defaults,n),this.rules=[],this.currentPath="",this.className="Interchange",// ie9 back compat
this._init(),this._events()}
/**
     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
     * @function
     * @private
     */},{key:"_init",value:function t(){p.MediaQuery._init();var e=this.$element[0].id||Object(g.GetYoDigits)(6,"interchange");this.$element.attr({"data-resize":e,id:e}),this._addBreakpoints(),this._generateRules(),this._reflow()}
/**
     * Initializes events for Interchange.
     * @function
     * @private
     */},{key:"_events",value:function t(){var e=this;this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(){return e._reflow()})}
/**
     * Calls necessary functions to update Interchange upon DOM change
     * @function
     * @private
     */},{key:"_reflow",value:function t(){var e;// Iterate through each rule, but only save the last match
for(var n in this.rules)if(this.rules.hasOwnProperty(n)){var i=this.rules[n];window.matchMedia(i.query).matches&&(e=i)}e&&this.replace(e.path)}
/**
     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
     * @function
     * @private
     */},{key:"_addBreakpoints",value:function t(){for(var e in p.MediaQuery.queries)if(p.MediaQuery.queries.hasOwnProperty(e)){var n=p.MediaQuery.queries[e];l.SPECIAL_QUERIES[n.name]=n.value}}
/**
     * Checks the Interchange element for the provided media query + content pairings
     * @function
     * @private
     * @param {Object} element - jQuery object that is an Interchange instance
     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
     */},{key:"_generateRules",value:function t(e){var n=[],i;for(var o in i="string"==typeof(i=this.options.rules?this.options.rules:this.$element.data("interchange"))?i.match(/\[.*?, .*?\]/g):i)if(i.hasOwnProperty(o)){var s=i[o].slice(1,-1).split(", "),r=s.slice(0,-1).join(""),a=s[s.length-1];l.SPECIAL_QUERIES[a]&&(a=l.SPECIAL_QUERIES[a]),n.push({path:r,query:a})}this.rules=n}
/**
     * Update the `src` property of an image, or change the HTML of a container, to the specified path.
     * @function
     * @param {String} path - Path to the image or HTML partial.
     * @fires Interchange#replaced
     */},{key:"replace",value:function t(e){if(this.currentPath!==e){var n=this,i="replaced.zf.interchange";// Replacing images
"IMG"===this.$element[0].nodeName?this.$element.attr("src",e).on("load",function(){n.currentPath=e}).trigger(i):e.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)?(e=e.replace(/\(/g,"%28").replace(/\)/g,"%29"),this.$element.css({"background-image":"url("+e+")"}).trigger(i)):f.a.get(e,function(t){n.$element.html(t).trigger(i),f()(t).foundation(),n.currentPath=e});
/**
       * Fires when content in an Interchange element is done being loaded.
       * @event Interchange#replaced
       */
// this.$element.trigger('replaced.zf.interchange');
}}
/**
     * Destroys an instance of interchange.
     * @function
     */},{key:"_destroy",value:function t(){this.$element.off("resizeme.zf.trigger")}}]),l}(m.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
v.defaults={
/**
   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
   * @option
   * @type {?array}
   * @default null
   */
rules:null},v.SPECIAL_QUERIES={landscape:"screen and (orientation: landscape)",portrait:"screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"}},
/***/"./js/foundation.magellan.js":
/*!***********************************!*\
  !*** ./js/foundation.magellan.js ***!
  \***********************************/
/*! exports provided: Magellan */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Magellan module.
 * @module foundation.magellan
 * @requires foundation.smoothScroll
 */n.r(e),
/* harmony export (binding) */n.d(e,"Magellan",function(){return v});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.smoothScroll */"./js/foundation.smoothScroll.js"),v=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),r(i,[{key:"_setup",
/**
     * Creates a new instance of Magellan.
     * @class
     * @name Magellan
     * @fires Magellan#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="Magellan",// ie9 back compat
this._init(),this.calcPoints()}
/**
     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
     * @private
     */},{key:"_init",value:function t(){var e=this.$element[0].id||Object(p.GetYoDigits)(6,"magellan"),n=this;this.$targets=f()("[data-magellan-target]"),this.$links=this.$element.find("a"),this.$element.attr({"data-resize":e,"data-scroll":e,id:e}),this.$active=f()(),this.scrollPos=parseInt(window.pageYOffset,10),this._events()}
/**
     * Calculates an array of pixel values that are the demarcation lines between locations on the page.
     * Can be invoked if new elements are added or the size of a location changes.
     * @function
     */},{key:"calcPoints",value:function t(){var n=this,e=document.body,i=document.documentElement;this.points=[],this.winHeight=Math.round(Math.max(window.innerHeight,i.clientHeight)),this.docHeight=Math.round(Math.max(e.scrollHeight,e.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)),this.$targets.each(function(){var t=f()(this),e=Math.round(t.offset().top-n.options.threshold);t.targetPoint=e,n.points.push(e)})}
/**
     * Initializes events for Magellan.
     * @private
     */},{key:"_events",value:function t(){var n=this,e=f()("html, body"),i={duration:n.options.animationDuration,easing:n.options.animationEasing};f()(window).one("load",function(){n.options.deepLinking&&location.hash&&n.scrollToLoc(location.hash),n.calcPoints(),n._updateActive()}),n.onLoadListener=Object(p.onLoad)(f()(window),function(){n.$element.on({"resizeme.zf.trigger":n.reflow.bind(n),"scrollme.zf.trigger":n._updateActive.bind(n)}).on("click.zf.magellan",'a[href^="#"]',function(t){t.preventDefault();var e=this.getAttribute("href");n.scrollToLoc(e)})}),this._deepLinkScroll=function(t){n.options.deepLinking&&n.scrollToLoc(window.location.hash)},f()(window).on("hashchange",this._deepLinkScroll)}
/**
     * Function to scroll to a given location on the page.
     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
     * @function
     */},{key:"scrollToLoc",value:function t(e){this._inTransition=!0;var n=this,i={animationEasing:this.options.animationEasing,animationDuration:this.options.animationDuration,threshold:this.options.threshold,offset:this.options.offset};g.SmoothScroll.scrollToLoc(e,i,function(){n._inTransition=!1})}
/**
     * Calls necessary functions to update Magellan upon DOM change
     * @function
     */},{key:"reflow",value:function t(){this.calcPoints(),this._updateActive()}
/**
     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
     * @private
     * @function
     * @fires Magellan#update
     */},{key:"_updateActive",value:function t(){var n=this;if(!this._inTransition){var i=parseInt(window.pageYOffset,10),o=this.scrollPos>i,e;// Before the first point: no link
if((this.scrollPos=i)<this.points[0]);else if(i+this.winHeight===this.docHeight)e=this.points.length-1;else{var s=this.points.filter(function(t,e){return t-n.options.offset-(o?n.options.threshold:0)<=i});e=s.length?s.length-1:0}// Get the new active link
var r=this.$active,a="";void 0!==e?(this.$active=this.$links.filter('[href="#'+this.$targets.eq(e).data("magellan-target")+'"]'),this.$active.length&&(a=this.$active[0].getAttribute("href"))):this.$active=f()();var l=!(!this.$active.length&&!r.length||this.$active.is(r)),u=a!==window.location.hash;// Update the hash (it may have changed with the same active link)
if(// Update the active link element
l&&(r.removeClass(this.options.activeClass),this.$active.addClass(this.options.activeClass)),this.options.deepLinking&&u)if(window.history.pushState){
// Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384
var c=a||window.location.pathname+window.location.search;window.history.pushState(null,null,c)}else window.location.hash=a;l&&
/**
         * Fires when magellan is finished updating to the new active element.
         * @event Magellan#update
         */
this.$element.trigger("update.zf.magellan",[this.$active])}}
/**
     * Destroys an instance of Magellan and resets the url of the window.
     * @function
     */},{key:"_destroy",value:function t(){if(this.$element.off(".zf.trigger .zf.magellan").find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass),this.options.deepLinking){var e=this.$active[0].getAttribute("href");window.location.hash.replace(e,"")}f()(window).off("hashchange",this._deepLinkScroll),this.onLoadListener&&f()(window).off(this.onLoadListener)}}]),i}(m.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
v.defaults={
/**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
animationEasing:"linear",
/**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
threshold:50,
/**
   * Class applied to the active locations link on the magellan container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
activeClass:"is-active",
/**
   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
   * @option
   * @type {boolean}
   * @default false
   */
deepLinking:!1,
/**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
offset:0}},
/***/"./js/foundation.offcanvas.js":
/*!************************************!*\
  !*** ./js/foundation.offcanvas.js ***!
  \************************************/
/*! exports provided: OffCanvas */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * OffCanvas module.
 * @module foundation.offcanvas
 * @requires foundation.util.keyboard
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */n.r(e),
/* harmony export (binding) */n.d(e,"OffCanvas",function(){return b});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),v=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),y=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),b=
/* */
function(t){function o(){return s(this,o),a(this,u(o).apply(this,arguments))}return c(o,t),r(o,[{key:"_setup",
/**
     * Creates a new instance of an off-canvas wrapper.
     * @class
     * @name OffCanvas
     * @fires OffCanvas#init
     * @param {Object} element - jQuery object to initialize.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){var i=this;this.className="OffCanvas",// ie9 back compat
this.$element=e,this.options=f.a.extend({},o.defaults,this.$element.data(),n),this.contentClasses={base:[],reveal:[]},this.$lastTrigger=f()(),this.$triggers=f()(),this.position="left",this.$content=f()(),this.nested=!!this.options.nested,// Defines the CSS transition/position classes of the off-canvas content container.
f()(["push","overlap"]).each(function(t,e){i.contentClasses.base.push("has-transition-"+e)}),f()(["left","right","top","bottom"]).each(function(t,e){i.contentClasses.base.push("has-position-"+e),i.contentClasses.reveal.push("has-reveal-"+e)}),// Triggers init is idempotent, just need to make sure it is initialized
y.Triggers.init(f.a),g.MediaQuery._init(),this._init(),this._events(),m.Keyboard.register("OffCanvas",{ESCAPE:"close"})}
/**
     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
     * @function
     * @private
     */},{key:"_init",value:function t(){var e=this.$element.attr("id");// Add an overlay over the content if necessary
if(this.$element.attr("aria-hidden","true"),// Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)
this.options.contentId?this.$content=f()("#"+this.options.contentId):this.$element.siblings("[data-off-canvas-content]").length?this.$content=this.$element.siblings("[data-off-canvas-content]").first():this.$content=this.$element.closest("[data-off-canvas-content]").first(),this.options.contentId?this.options.contentId&&null===this.options.nested&&
// Warning if using content ID without setting the nested option
// Once the element is nested it is required to work properly in this case
console.warn("Remember to use the nested option if using the content ID option!"):
// Assume that the off-canvas element is nested if it isn't a sibling of the content
this.nested=0===this.$element.siblings("[data-off-canvas-content]").length,!0===this.nested&&(
// Force transition overlap if nested
this.options.transition="overlap",// Remove appropriate classes if already assigned in markup
this.$element.removeClass("is-transition-push")),this.$element.addClass("is-transition-".concat(this.options.transition," is-closed")),// Find triggers that affect this element and add aria-expanded to them
this.$triggers=f()(document).find('[data-open="'+e+'"], [data-close="'+e+'"], [data-toggle="'+e+'"]').attr("aria-expanded","false").attr("aria-controls",e),// Get position by checking for related CSS class
this.position=this.$element.is(".position-left, .position-top, .position-right, .position-bottom")?this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1]:this.position,!0===this.options.contentOverlay){var n=document.createElement("div"),i="fixed"===f()(this.$element).css("position")?"is-overlay-fixed":"is-overlay-absolute";n.setAttribute("class","js-off-canvas-overlay "+i),this.$overlay=f()(n),"is-overlay-fixed"===i?f()(this.$overlay).insertAfter(this.$element):this.$content.append(this.$overlay)}// Get the revealOn option from the class.
var o,s=new RegExp(Object(p.RegExpEscape)(this.options.revealClass)+"([^\\s]+)","g").exec(this.$element[0].className);s&&(this.options.isRevealed=!0,this.options.revealOn=this.options.revealOn||s[1]),// Ensure the `reveal-on-*` class is set.
!0===this.options.isRevealed&&this.options.revealOn&&(this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn)),this._setMQChecker()),this.options.transitionTime&&this.$element.css("transition-duration",this.options.transitionTime),// Initally remove all transition/position CSS classes from off-canvas content container.
this._removeContentClasses()}
/**
     * Adds event handlers to the off-canvas wrapper and the exit overlay.
     * @function
     * @private
     */},{key:"_events",value:function t(){var e;(this.$element.off(".zf.trigger .zf.offcanvas").on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"keydown.zf.offcanvas":this._handleKeyboard.bind(this)}),!0===this.options.closeOnClick)&&(this.options.contentOverlay?this.$overlay:this.$content).on({"click.zf.offcanvas":this.close.bind(this)})}
/**
     * Applies event listener for elements that will reveal at certain breakpoints.
     * @private
     */},{key:"_setMQChecker",value:function t(){var e=this;this.onLoadListener=Object(p.onLoad)(f()(window),function(){g.MediaQuery.atLeast(e.options.revealOn)&&e.reveal(!0)}),f()(window).on("changed.zf.mediaquery",function(){g.MediaQuery.atLeast(e.options.revealOn)?e.reveal(!0):e.reveal(!1)})}
/**
     * Removes the CSS transition/position classes of the off-canvas content container.
     * Removing the classes is important when another off-canvas gets opened that uses the same content container.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */},{key:"_removeContentClasses",value:function t(e){"boolean"!=typeof e?this.$content.removeClass(this.contentClasses.base.join(" ")):!1===e&&this.$content.removeClass("has-reveal-".concat(this.position))}
/**
     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
     * Beforehand any transition/position class gets removed.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */},{key:"_addContentClasses",value:function t(e){this._removeContentClasses(e),"boolean"!=typeof e?this.$content.addClass("has-transition-".concat(this.options.transition," has-position-").concat(this.position)):!0===e&&this.$content.addClass("has-reveal-".concat(this.position))}
/**
     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
     * @param {Boolean} isRevealed - true if element should be revealed.
     * @function
     */},{key:"reveal",value:function t(e){e?(this.close(),this.isRevealed=!0,this.$element.attr("aria-hidden","false"),this.$element.off("open.zf.trigger toggle.zf.trigger"),this.$element.removeClass("is-closed")):(this.isRevealed=!1,this.$element.attr("aria-hidden","true"),this.$element.off("open.zf.trigger toggle.zf.trigger").on({"open.zf.trigger":this.open.bind(this),"toggle.zf.trigger":this.toggle.bind(this)}),this.$element.addClass("is-closed")),this._addContentClasses(e)}
/**
     * Stops scrolling of the body when offcanvas is open on mobile Safari and other troublesome browsers.
     * @private
     */},{key:"_stopScrolling",value:function t(e){return!1}// Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
// Only really works for y, not sure how to extend to x or if we need to.
},{key:"_recordScrollable",value:function t(e){var n=this;// called from event handler context with this as elem
// If the element is scrollable (content overflows), then...
n.scrollHeight!==n.clientHeight&&(
// If we're at the top, scroll down one pixel to allow scrolling up
0===n.scrollTop&&(n.scrollTop=1),// If we're at the bottom, scroll up one pixel to allow scrolling down
n.scrollTop===n.scrollHeight-n.clientHeight&&(n.scrollTop=n.scrollHeight-n.clientHeight-1)),n.allowUp=0<n.scrollTop,n.allowDown=n.scrollTop<n.scrollHeight-n.clientHeight,n.lastY=e.originalEvent.pageY}},{key:"_stopScrollPropagation",value:function t(e){var n=this,i=e.pageY<n.lastY,o=!i;// called from event handler context with this as elem
n.lastY=e.pageY,i&&n.allowUp||o&&n.allowDown?e.stopPropagation():e.preventDefault()}
/**
     * Opens the off-canvas menu.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     * @fires Offcanvas#opened
     * @todo also trigger 'open' event?
     */},{key:"open",value:function t(e,n){if(!this.$element.hasClass("is-open")&&!this.isRevealed){var i=this;n&&(this.$lastTrigger=n),"top"===this.options.forceTo?window.scrollTo(0,0):"bottom"===this.options.forceTo&&window.scrollTo(0,document.body.scrollHeight),this.options.transitionTime&&"overlap"!==this.options.transition?this.$element.siblings("[data-off-canvas-content]").css("transition-duration",this.options.transitionTime):this.$element.siblings("[data-off-canvas-content]").css("transition-duration",""),this.$element.addClass("is-open").removeClass("is-closed"),this.$triggers.attr("aria-expanded","true"),this.$element.attr("aria-hidden","false"),this.$content.addClass("is-open-"+this.position),// If `contentScroll` is set to false, add class and disable scrolling on touch devices.
!1===this.options.contentScroll&&(f()("body").addClass("is-off-canvas-open").on("touchmove",this._stopScrolling),this.$element.on("touchstart",this._recordScrollable),this.$element.on("touchmove",this._stopScrollPropagation)),!0===this.options.contentOverlay&&this.$overlay.addClass("is-visible"),!0===this.options.closeOnClick&&!0===this.options.contentOverlay&&this.$overlay.addClass("is-closable"),!0===this.options.autoFocus&&this.$element.one(Object(p.transitionend)(this.$element),function(){if(i.$element.hasClass("is-open")){var t=i.$element.find("[data-autofocus]");t.length?t.eq(0).focus():i.$element.find("a, button").eq(0).focus()}}),!0===this.options.trapFocus&&(this.$content.attr("tabindex","-1"),m.Keyboard.trapFocus(this.$element)),this._addContentClasses(),
/**
       * Fires when the off-canvas menu opens.
       * @event Offcanvas#opened
       */
this.$element.trigger("opened.zf.offcanvas")}}
/**
     * Closes the off-canvas menu.
     * @function
     * @param {Function} cb - optional cb to fire after closure.
     * @fires Offcanvas#closed
     */},{key:"close",value:function t(e){if(this.$element.hasClass("is-open")&&!this.isRevealed){var n=this;this.$element.removeClass("is-open"),this.$element.attr("aria-hidden","true")
/**
       * Fires when the off-canvas menu opens.
       * @event Offcanvas#closed
       */.trigger("closed.zf.offcanvas"),this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom"),// If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.
!1===this.options.contentScroll&&(f()("body").removeClass("is-off-canvas-open").off("touchmove",this._stopScrolling),this.$element.off("touchstart",this._recordScrollable),this.$element.off("touchmove",this._stopScrollPropagation)),!0===this.options.contentOverlay&&this.$overlay.removeClass("is-visible"),!0===this.options.closeOnClick&&!0===this.options.contentOverlay&&this.$overlay.removeClass("is-closable"),this.$triggers.attr("aria-expanded","false"),!0===this.options.trapFocus&&(this.$content.removeAttr("tabindex"),m.Keyboard.releaseFocus(this.$element)),// Listen to transitionEnd and add class when done.
this.$element.one(Object(p.transitionend)(this.$element),function(t){n.$element.addClass("is-closed"),n._removeContentClasses()})}}
/**
     * Toggles the off-canvas menu open or closed.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     */},{key:"toggle",value:function t(e,n){this.$element.hasClass("is-open")?this.close(e,n):this.open(e,n)}
/**
     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
     * @function
     * @private
     */},{key:"_handleKeyboard",value:function t(e){var n=this;m.Keyboard.handleKey(e,"OffCanvas",{close:function t(){return n.close(),n.$lastTrigger.focus(),!0},handled:function t(){e.stopPropagation(),e.preventDefault()}})}
/**
     * Destroys the offcanvas plugin.
     * @function
     */},{key:"_destroy",value:function t(){this.close(),this.$element.off(".zf.trigger .zf.offcanvas"),this.$overlay.off(".zf.offcanvas"),this.onLoadListener&&f()(window).off(this.onLoadListener)}}]),o}(v.Plugin);
/* harmony import */b.defaults={
/**
   * Allow the user to click outside of the menu to close it.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:!0,
/**
   * Adds an overlay on top of `[data-off-canvas-content]`.
   * @option
   * @type {boolean}
   * @default true
   */
contentOverlay:!0,
/**
   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
   * @option
   * @type {?string}
   * @default null
   */
contentId:null,
/**
   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
   * @option
   * @type {boolean}
   * @default null
   */
nested:null,
/**
   * Enable/disable scrolling of the main content when an off canvas panel is open.
   * @option
   * @type {boolean}
   * @default true
   */
contentScroll:!0,
/**
   * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
   * @option
   * @type {number}
   * @default null
   */
transitionTime:null,
/**
   * Type of transition for the offcanvas menu. Options are 'push', 'detached' or 'slide'.
   * @option
   * @type {string}
   * @default push
   */
transition:"push",
/**
   * Force the page to scroll to top or bottom on open.
   * @option
   * @type {?string}
   * @default null
   */
forceTo:null,
/**
   * Allow the offcanvas to remain open for certain breakpoints.
   * @option
   * @type {boolean}
   * @default false
   */
isRevealed:!1,
/**
   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
   * @option
   * @type {?string}
   * @default null
   */
revealOn:null,
/**
   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
   * @option
   * @type {boolean}
   * @default true
   */
autoFocus:!0,
/**
   * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
   * @option
   * @type {string}
   * @default reveal-for-
   * @todo improve the regex testing for this.
   */
revealClass:"reveal-for-",
/**
   * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
   * @option
   * @type {boolean}
   * @default false
   */
trapFocus:!1}},
/***/"./js/foundation.orbit.js":
/*!********************************!*\
  !*** ./js/foundation.orbit.js ***!
  \********************************/
/*! exports provided: Orbit */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Orbit module.
 * @module foundation.orbit
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.timer
 * @requires foundation.util.imageLoader
 * @requires foundation.util.touch
 */n.r(e),
/* harmony export (binding) */n.d(e,"Orbit",function(){return k});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),m=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),g=n(/*! ./foundation.util.timer */"./js/foundation.util.timer.js"),v=n(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js"),y=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),b=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),w=n(/*! ./foundation.util.touch */"./js/foundation.util.touch.js"),k=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),r(i,[{key:"_setup",
/**
    * Creates a new instance of an orbit carousel.
    * @class
    * @name Orbit
    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
    * @param {Object} options - Overrides to the default plugin settings.
    */
value:function t(e,n){this.$element=e,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="Orbit",// ie9 back compat
w.Touch.init(f.a),// Touch init is idempotent, we just need to make sure it's initialied.
this._init(),p.Keyboard.register("Orbit",{ltr:{ARROW_RIGHT:"next",ARROW_LEFT:"previous"},rtl:{ARROW_LEFT:"next",ARROW_RIGHT:"previous"}})}
/**
    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
    * @function
    * @private
    */},{key:"_init",value:function t(){
// @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide
this._reset(),this.$wrapper=this.$element.find(".".concat(this.options.containerClass)),this.$slides=this.$element.find(".".concat(this.options.slideClass));var e=this.$element.find("img"),n=this.$slides.filter(".is-active"),i=this.$element[0].id||Object(y.GetYoDigits)(6,"orbit");this.$element.attr({"data-resize":i,id:i}),n.length||this.$slides.eq(0).addClass("is-active"),this.options.useMUI||this.$slides.addClass("no-motionui"),e.length?Object(v.onImagesLoaded)(e,this._prepareForOrbit.bind(this)):this._prepareForOrbit(),this.options.bullets&&this._loadBullets(),this._events(),this.options.autoPlay&&1<this.$slides.length&&this.geoSync(),this.options.accessible&&
// allow wrapper to be focusable to enable arrow navigation
this.$wrapper.attr("tabindex",0)}
/**
    * Creates a jQuery collection of bullets, if they are being used.
    * @function
    * @private
    */},{key:"_loadBullets",value:function t(){this.$bullets=this.$element.find(".".concat(this.options.boxOfBullets)).find("button")}
/**
    * Sets a `timer` object on the orbit, and starts the counter for the next slide.
    * @function
    */},{key:"geoSync",value:function t(){var e=this;this.timer=new g.Timer(this.$element,{duration:this.options.timerDelay,infinite:!1},function(){e.changeSlide(!0)}),this.timer.start()}
/**
    * Sets wrapper and slide heights for the orbit.
    * @function
    * @private
    */},{key:"_prepareForOrbit",value:function t(){var e=this;this._setWrapperHeight()}
/**
    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
    * @function
    * @private
    * @param {Function} cb - a callback function to fire when complete.
    */},{key:"_setWrapperHeight",value:function t(e){
//rewrite this to `for` loop
var n=0,i,o=0,s=this;this.$slides.each(function(){i=this.getBoundingClientRect().height,f()(this).attr("data-slide",o),// hide all slides but the active one
/mui/g.test(f()(this)[0].className)||s.$slides.filter(".is-active")[0]===s.$slides.eq(o)[0]||f()(this).css({display:"none"}),n=n<i?i:n,o++}),o===this.$slides.length&&(this.$wrapper.css({height:n}),//only change the wrapper height property once.
e&&e(n))}
/**
    * Sets the max-height of each slide.
    * @function
    * @private
    */},{key:"_setSlideHeight",value:function t(e){this.$slides.each(function(){f()(this).css("max-height",e)})}
/**
    * Adds event listeners to basically everything within the element.
    * @function
    * @private
    */},{key:"_events",value:function t(){var i=this;//***************************************
//**Now using custom event - thanks to:**
//**      Yohai Ararat of Toronto      **
//***************************************
//
if(this.$element.off(".resizeme.zf.trigger").on({"resizeme.zf.trigger":this._prepareForOrbit.bind(this)}),1<this.$slides.length){var e;if(this.options.swipe&&this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit",function(t){t.preventDefault(),i.changeSlide(!0)}).on("swiperight.zf.orbit",function(t){t.preventDefault(),i.changeSlide(!1)}),//***************************************
this.options.autoPlay&&(this.$slides.on("click.zf.orbit",function(){i.$element.data("clickedOn",!i.$element.data("clickedOn")),i.timer[i.$element.data("clickedOn")?"pause":"start"]()}),this.options.pauseOnHover&&this.$element.on("mouseenter.zf.orbit",function(){i.timer.pause()}).on("mouseleave.zf.orbit",function(){i.$element.data("clickedOn")||i.timer.start()})),this.options.navButtons)this.$element.find(".".concat(this.options.nextClass,", .").concat(this.options.prevClass)).attr("tabindex",0).on("click.zf.orbit touchend.zf.orbit",function(t){t.preventDefault(),i.changeSlide(f()(this).hasClass(i.options.nextClass))});this.options.bullets&&this.$bullets.on("click.zf.orbit touchend.zf.orbit",function(){if(/is-active/g.test(this.className))return!1;//if this is active, kick out of function.
var t=f()(this).data("slide"),e=t>i.$slides.filter(".is-active").data("slide"),n=i.$slides.eq(t);i.changeSlide(e,n,t)}),this.options.accessible&&this.$wrapper.add(this.$bullets).on("keydown.zf.orbit",function(e){
// handle keyboard event with keyboard util
p.Keyboard.handleKey(e,"Orbit",{next:function t(){i.changeSlide(!0)},previous:function t(){i.changeSlide(!1)},handled:function t(){
// if bullet is focused, make sure focus moves
f()(e.target).is(i.$bullets)&&i.$bullets.filter(".is-active").focus()}})})}}
/**
     * Resets Orbit so it can be reinitialized
     */},{key:"_reset",value:function t(){
// Don't do anything if there are no slides (first run)
void 0!==this.$slides&&1<this.$slides.length&&(
// Remove old events
this.$element.off(".zf.orbit").find("*").off(".zf.orbit"),// Restart timer if autoPlay is enabled
this.options.autoPlay&&this.timer.restart(),// Reset all sliddes
this.$slides.each(function(t){f()(t).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()}),// Show the first slide
this.$slides.first().addClass("is-active").show(),// Triggers when the slide has finished animating
this.$element.trigger("slidechange.zf.orbit",[this.$slides.first()]),// Select first bullet if bullets are present
this.options.bullets&&this._updateBullets(0))}
/**
    * Changes the current slide to a new one.
    * @function
    * @param {Boolean} isLTR - if true the slide moves from right to left, if false the slide moves from left to right.
    * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
    * @param {Number} idx - the index of the new slide in its collection, if one chosen.
    * @fires Orbit#slidechange
    */},{key:"changeSlide",value:function t(e,n,i){if(this.$slides){// Don't freak out if we're in the middle of cleanup
var o=this.$slides.filter(".is-active").eq(0);if(/mui/g.test(o[0].className))return!1;//if the slide is currently animating, kick out of the function
var s=this.$slides.first(),r=this.$slides.last(),a=e?"Right":"Left",l=e?"Left":"Right",u=this,c;(c=n||(e?//if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
this.options.infiniteWrap?o.next(".".concat(this.options.slideClass)).length?o.next(".".concat(this.options.slideClass)):s:o.next(".".concat(this.options.slideClass))://pick next slide if moving left to right
this.options.infiniteWrap?o.prev(".".concat(this.options.slideClass)).length?o.prev(".".concat(this.options.slideClass)):r:o.prev(".".concat(this.options.slideClass)))).length&&(
/**
        * Triggers before the next slide starts animating in and only if a next slide has been found.
        * @event Orbit#beforeslidechange
        */
this.$element.trigger("beforeslidechange.zf.orbit",[o,c]),this.options.bullets&&(i=i||this.$slides.index(c),//grab index to update bullets
this._updateBullets(i)),this.options.useMUI&&!this.$element.is(":hidden")?(m.Motion.animateIn(c.addClass("is-active"),this.options["animInFrom".concat(a)],function(){c.css({display:"block"}).attr("aria-live","polite")}),m.Motion.animateOut(o.removeClass("is-active"),this.options["animOutTo".concat(l)],function(){o.removeAttr("aria-live"),u.options.autoPlay&&!u.timer.isPaused&&u.timer.restart()})):(o.removeClass("is-active is-in").removeAttr("aria-live").hide(),c.addClass("is-active is-in").attr("aria-live","polite").show(),this.options.autoPlay&&!this.timer.isPaused&&this.timer.restart())
/**
        * Triggers when the slide has finished animating in.
        * @event Orbit#slidechange
        */,this.$element.trigger("slidechange.zf.orbit",[c]))}}
/**
    * Updates the active state of the bullets, if displayed.
    * @function
    * @private
    * @param {Number} idx - the index of the current slide.
    */},{key:"_updateBullets",value:function t(e){var n,i=this.$element.find(".".concat(this.options.boxOfBullets)).find(".is-active").removeClass("is-active").blur().find("span:last").detach(),o=this.$bullets.eq(e).addClass("is-active").append(i)}
/**
    * Destroys the carousel and hides the element.
    * @function
    */},{key:"_destroy",value:function t(){this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide()}}]),i}(b.Plugin);
/* harmony import */k.defaults={
/**
  * Tells the JS to look for and loadBullets.
  * @option
   * @type {boolean}
  * @default true
  */
bullets:!0,
/**
  * Tells the JS to apply event listeners to nav buttons
  * @option
   * @type {boolean}
  * @default true
  */
navButtons:!0,
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-right'
  */
animInFromRight:"slide-in-right",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-right'
  */
animOutToRight:"slide-out-right",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-left'
  *
  */
animInFromLeft:"slide-in-left",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-left'
  */
animOutToLeft:"slide-out-left",
/**
  * Allows Orbit to automatically animate on page load.
  * @option
   * @type {boolean}
  * @default true
  */
autoPlay:!0,
/**
  * Amount of time, in ms, between slide transitions
  * @option
   * @type {number}
  * @default 5000
  */
timerDelay:5e3,
/**
  * Allows Orbit to infinitely loop through the slides
  * @option
   * @type {boolean}
  * @default true
  */
infiniteWrap:!0,
/**
  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
  * @option
   * @type {boolean}
  * @default true
  */
swipe:!0,
/**
  * Allows the timing function to pause animation on hover.
  * @option
   * @type {boolean}
  * @default true
  */
pauseOnHover:!0,
/**
  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
  * @option
   * @type {boolean}
  * @default true
  */
accessible:!0,
/**
  * Class applied to the container of Orbit
  * @option
   * @type {string}
  * @default 'orbit-container'
  */
containerClass:"orbit-container",
/**
  * Class applied to individual slides.
  * @option
   * @type {string}
  * @default 'orbit-slide'
  */
slideClass:"orbit-slide",
/**
  * Class applied to the bullet container. You're welcome.
  * @option
   * @type {string}
  * @default 'orbit-bullets'
  */
boxOfBullets:"orbit-bullets",
/**
  * Class applied to the `next` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-next'
  */
nextClass:"orbit-next",
/**
  * Class applied to the `previous` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-previous'
  */
prevClass:"orbit-previous",
/**
  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.
  * @option
   * @type {boolean}
  * @default true
  */
useMUI:!0}},
/***/"./js/foundation.positionable.js":
/*!***************************************!*\
  !*** ./js/foundation.positionable.js ***!
  \***************************************/
/*! exports provided: Positionable */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}function h(t,e){var n=e.indexOf(t);return n===e.length-1?e[0]:e[n+1]}n.r(e),
/* harmony export (binding) */n.d(e,"Positionable",function(){return w});
/* harmony import */var f=n(/*! ./foundation.util.box */"./js/foundation.util.box.js"),p=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=["left","right","top","bottom"],v=["top","bottom","center"],y=["left","right","center"],b={left:v,right:v,top:y,bottom:y},w=
/* */
function(t){function e(){return o(this,e),a(this,u(e).apply(this,arguments))}return c(e,t),r(e,[{key:"_init",
/**
     * Abstract class encapsulating the tether-like explicit positioning logic
     * including repositioning based on overlap.
     * Expects classes to define defaults for vOffset, hOffset, position,
     * alignment, allowOverlap, and allowBottomOverlap. They can do this by
     * extending the defaults, or (for now recommended due to the way docs are
     * generated) by explicitly declaring them.
     *
     **/
value:function t(){this.triedPositions={},this.position="auto"===this.options.position?this._getDefaultPosition():this.options.position,this.alignment="auto"===this.options.alignment?this._getDefaultAlignment():this.options.alignment,this.originalPosition=this.position,this.originalAlignment=this.alignment}},{key:"_getDefaultPosition",value:function t(){return"bottom"}},{key:"_getDefaultAlignment",value:function t(){switch(this.position){case"bottom":case"top":return Object(m.rtl)()?"right":"left";case"left":case"right":return"bottom"}}
/**
     * Adjusts the positionable possible positions by iterating through alignments
     * and positions.
     * @function
     * @private
     */},{key:"_reposition",value:function t(){this._alignmentsExhausted(this.position)?(this.position=h(this.position,g),this.alignment=b[this.position][0]):this._realign()}
/**
     * Adjusts the dropdown pane possible positions by iterating through alignments
     * on the current position.
     * @function
     * @private
     */},{key:"_realign",value:function t(){this._addTriedPosition(this.position,this.alignment),this.alignment=h(this.alignment,b[this.position])}},{key:"_addTriedPosition",value:function t(e,n){this.triedPositions[e]=this.triedPositions[e]||[],this.triedPositions[e].push(n)}},{key:"_positionsExhausted",value:function t(){for(var e=!0,n=0;n<g.length;n++)e=e&&this._alignmentsExhausted(g[n]);return e}},{key:"_alignmentsExhausted",value:function t(e){return this.triedPositions[e]&&this.triedPositions[e].length==b[e].length}// When we're trying to center, we don't want to apply offset that's going to
// take us just off center, so wrap around to return 0 for the appropriate
// offset in those alignments.  TODO: Figure out if we want to make this
// configurable behavior... it feels more intuitive, especially for tooltips, but
// it's possible someone might actually want to start from center and then nudge
// slightly off.
},{key:"_getVOffset",value:function t(){return this.options.vOffset}},{key:"_getHOffset",value:function t(){return this.options.hOffset}},{key:"_setPosition",value:function t(e,n,i){if("false"===e.attr("aria-expanded"))return!1;var o=f.Box.GetDimensions(n),s=f.Box.GetDimensions(e);if(this.options.allowOverlap||(
// restore original position & alignment before checking overlap
this.position=this.originalPosition,this.alignment=this.originalAlignment),n.offset(f.Box.GetExplicitOffsets(n,e,this.position,this.alignment,this._getVOffset(),this._getHOffset())),!this.options.allowOverlap){for(var r={},a=1e8,l={position:this.position,alignment:this.alignment};!this._positionsExhausted();){var u=f.Box.OverlapArea(n,i,!1,!1,this.options.allowBottomOverlap);if(0===u)return;u<a&&(a=u,l={position:this.position,alignment:this.alignment}),this._reposition(),n.offset(f.Box.GetExplicitOffsets(n,e,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}// If we get through the entire loop, there was no non-overlapping
// position available. Pick the version with least overlap.
this.position=l.position,this.alignment=l.alignment,n.offset(f.Box.GetExplicitOffsets(n,e,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}}}]),e}(p.Plugin);
/* harmony import */w.defaults={
/**
   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, dropdown positionable first
   * try to position as defined by data-position and data-alignment, but
   * reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
allowOverlap:!1,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
allowBottomOverlap:!0,
/**
   * Number of pixels the positionable should be separated vertically from anchor
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Number of pixels the positionable should be separated horizontally from anchor
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0}},
/***/"./js/foundation.responsiveAccordionTabs.js":
/*!**************************************************!*\
  !*** ./js/foundation.responsiveAccordionTabs.js ***!
  \**************************************************/
/*! exports provided: ResponsiveAccordionTabs */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
// The plugin matches the plugin classes with these plugin instances.
n.r(e),
/* harmony export (binding) */n.d(e,"ResponsiveAccordionTabs",function(){return w});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),v=n(/*! ./foundation.accordion */"./js/foundation.accordion.js"),y,b={tabs:{cssClass:"tabs",plugin:n(/*! ./foundation.tabs */"./js/foundation.tabs.js").Tabs},accordion:{cssClass:"accordion",plugin:v.Accordion}},w=
/* */
function(t){function e(){return o(this,e),a(this,u(e).apply(this,arguments))}return c(e,t),r(e,[{key:"_setup",
/**
     * Creates a new instance of a responsive accordion tabs.
     * @class
     * @name ResponsiveAccordionTabs
     * @fires ResponsiveAccordionTabs#init
     * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=f()(e),this.options=f.a.extend({},this.$element.data(),n),this.rules=this.$element.data("responsive-accordion-tabs"),this.currentMq=null,this.currentPlugin=null,this.className="ResponsiveAccordionTabs",// ie9 back compat
this.$element.attr("id")||this.$element.attr("id",Object(m.GetYoDigits)(6,"responsiveaccordiontabs")),this._init(),this._events()}
/**
     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
     * @function
     * @private
     */},{key:"_init",value:function t(){// The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
if(p.MediaQuery._init(),"string"==typeof this.rules){// Iterate through every rule found
for(var e={},n=this.rules.split(" "),i=0// Parse rules from "classes" pulled from data attribute
;i<n.length;i++){var o=n[i].split("-"),s=1<o.length?o[0]:"small",r=1<o.length?o[1]:o[0];null!==b[r]&&(e[s]=b[r])}this.rules=e}this._getAllOptions(),f.a.isEmptyObject(this.rules)||this._checkMediaQueries()}},{key:"_getAllOptions",value:function t(){
//get all defaults and options
var e=this;for(var n in e.allOptions={},b)if(b.hasOwnProperty(n)){var i=b[n];try{var o=f()("<ul></ul>"),s=new i.plugin(o,e.options);for(var r in s.options)if(s.options.hasOwnProperty(r)&&"zfPlugin"!==r){var a=s.options[r];e.allOptions[r]=a}s.destroy()}catch(t){}}}
/**
     * Initializes events for the Menu.
     * @function
     * @private
     */},{key:"_events",value:function t(){this._changedZfMediaQueryHandler=this._checkMediaQueries.bind(this),f()(window).on("changed.zf.mediaquery",this._changedZfMediaQueryHandler)}
/**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */},{key:"_checkMediaQueries",value:function t(){var e,n=this;// Iterate through each rule and find the last matching rule
f.a.each(this.rules,function(t){p.MediaQuery.atLeast(t)&&(e=t)}),// No match? No dice
e&&(// Plugin already initialized? We good
this.currentPlugin instanceof this.rules[e].plugin||(// Remove existing plugin-specific CSS classes
f.a.each(b,function(t,e){n.$element.removeClass(e.cssClass)}),// Add the CSS class for the new plugin
this.$element.addClass(this.rules[e].cssClass),// Create an instance of the new plugin
this.currentPlugin&&(
//don't know why but on nested elements data zfPlugin get's lost
!this.currentPlugin.$element.data("zfPlugin")&&this.storezfData&&this.currentPlugin.$element.data("zfPlugin",this.storezfData),this.currentPlugin.destroy()),this._handleMarkup(this.rules[e].cssClass),this.currentPlugin=new this.rules[e].plugin(this.$element,{}),this.storezfData=this.currentPlugin.$element.data("zfPlugin")))}},{key:"_handleMarkup",value:function t(e){var n=this,i="accordion",o=f()("[data-tabs-content="+this.$element.attr("id")+"]");if(o.length&&(i="tabs"),i!==e){var s=n.allOptions.linkClass?n.allOptions.linkClass:"tabs-title",r=n.allOptions.panelClass?n.allOptions.panelClass:"tabs-panel";this.$element.removeAttr("role");var a=this.$element.children("."+s+",[data-accordion-item]").removeClass(s).removeClass("accordion-item").removeAttr("data-accordion-item"),l=a.children("a").removeClass("accordion-title");if("tabs"===i?(o=o.children("."+r).removeClass(r).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby")).children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected"):o=a.children("[data-tab-content]").removeClass("accordion-content"),o.css({display:"",visibility:""}),a.css({display:"",visibility:""}),"accordion"===e)o.each(function(t,e){f()(e).appendTo(a.get(t)).addClass("accordion-content").attr("data-tab-content","").removeClass("is-active").css({height:""}),f()("[data-tabs-content="+n.$element.attr("id")+"]").after('<div id="tabs-placeholder-'+n.$element.attr("id")+'"></div>').detach(),a.addClass("accordion-item").attr("data-accordion-item",""),l.addClass("accordion-title")});else if("tabs"===e){var u=f()("[data-tabs-content="+n.$element.attr("id")+"]"),c=f()("#tabs-placeholder-"+n.$element.attr("id"));c.length?(u=f()('<div class="tabs-content"></div>').insertAfter(c).attr("data-tabs-content",n.$element.attr("id")),c.remove()):u=f()('<div class="tabs-content"></div>').insertAfter(n.$element).attr("data-tabs-content",n.$element.attr("id")),o.each(function(t,e){var n=f()(e).appendTo(u).addClass(r),i=l.get(t).hash.slice(1),o=f()(e).attr("id")||Object(m.GetYoDigits)(6,"accordion"),s;i!==o&&(""!==i?f()(e).attr("id",i):(i=o,f()(e).attr("id",i),f()(l.get(t)).attr("href",f()(l.get(t)).attr("href").replace("#","")+"#"+i))),f()(a.get(t)).hasClass("is-active")&&n.addClass("is-active")}),a.addClass(s)}}}
/**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */},{key:"_destroy",value:function t(){this.currentPlugin&&this.currentPlugin.destroy(),f()(window).off("changed.zf.mediaquery",this._changedZfMediaQueryHandler)}}]),e}(g.Plugin);
/* harmony import */w.defaults={}},
/***/"./js/foundation.responsiveMenu.js":
/*!*****************************************!*\
  !*** ./js/foundation.responsiveMenu.js ***!
  \*****************************************/
/*! exports provided: ResponsiveMenu */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}n.r(e),
/* harmony export (binding) */n.d(e,"ResponsiveMenu",function(){return k});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),v=n(/*! ./foundation.dropdownMenu */"./js/foundation.dropdownMenu.js"),y=n(/*! ./foundation.drilldown */"./js/foundation.drilldown.js"),b=n(/*! ./foundation.accordionMenu */"./js/foundation.accordionMenu.js"),w={dropdown:{cssClass:"dropdown",plugin:v.DropdownMenu},drilldown:{cssClass:"drilldown",plugin:y.Drilldown},accordion:{cssClass:"accordion-menu",plugin:b.AccordionMenu}},k=
/* */
function(t){function e(){return o(this,e),a(this,u(e).apply(this,arguments))}return c(e,t),r(e,[{key:"_setup",
/**
     * Creates a new instance of a responsive menu.
     * @class
     * @name ResponsiveMenu
     * @fires ResponsiveMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=f()(e),this.rules=this.$element.data("responsive-menu"),this.currentMq=null,this.currentPlugin=null,this.className="ResponsiveMenu",// ie9 back compat
this._init(),this._events()}
/**
     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
     * @function
     * @private
     */},{key:"_init",value:function t(){// The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
if(p.MediaQuery._init(),"string"==typeof this.rules){// Iterate through every rule found
for(var e={},n=this.rules.split(" "),i=0// Parse rules from "classes" pulled from data attribute
;i<n.length;i++){var o=n[i].split("-"),s=1<o.length?o[0]:"small",r=1<o.length?o[1]:o[0];null!==w[r]&&(e[s]=w[r])}this.rules=e}f.a.isEmptyObject(this.rules)||this._checkMediaQueries(),// Add data-mutate since children may need it.
this.$element.attr("data-mutate",this.$element.attr("data-mutate")||Object(m.GetYoDigits)(6,"responsive-menu"))}
/**
     * Initializes events for the Menu.
     * @function
     * @private
     */},{key:"_events",value:function t(){var e=this;f()(window).on("changed.zf.mediaquery",function(){e._checkMediaQueries()})}
/**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */},{key:"_checkMediaQueries",value:function t(){var e,n=this;// Iterate through each rule and find the last matching rule
f.a.each(this.rules,function(t){p.MediaQuery.atLeast(t)&&(e=t)}),// No match? No dice
e&&(// Plugin already initialized? We good
this.currentPlugin instanceof this.rules[e].plugin||(// Remove existing plugin-specific CSS classes
f.a.each(w,function(t,e){n.$element.removeClass(e.cssClass)}),// Add the CSS class for the new plugin
this.$element.addClass(this.rules[e].cssClass),// Create an instance of the new plugin
this.currentPlugin&&this.currentPlugin.destroy(),this.currentPlugin=new this.rules[e].plugin(this.$element,{})))}
/**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */},{key:"_destroy",value:function t(){this.currentPlugin.destroy(),f()(window).off(".zf.ResponsiveMenu")}}]),e}(g.Plugin);
/* harmony import */k.defaults={}},
/***/"./js/foundation.responsiveToggle.js":
/*!*******************************************!*\
  !*** ./js/foundation.responsiveToggle.js ***!
  \*******************************************/
/*! exports provided: ResponsiveToggle */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * ResponsiveToggle module.
 * @module foundation.responsiveToggle
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion
 */n.r(e),
/* harmony export (binding) */n.d(e,"ResponsiveToggle",function(){return v});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),g,v=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),r(i,[{key:"_setup",
/**
     * Creates a new instance of Tab Bar.
     * @class
     * @name ResponsiveToggle
     * @fires ResponsiveToggle#init
     * @param {jQuery} element - jQuery object to attach tab bar functionality to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=f()(e),this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="ResponsiveToggle",// ie9 back compat
this._init(),this._events()}
/**
     * Initializes the tab bar by finding the target element, toggling element, and running update().
     * @function
     * @private
     */},{key:"_init",value:function t(){p.MediaQuery._init();var e=this.$element.data("responsive-toggle");// If they were set, parse the animation classes
if(e||console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."),this.$targetMenu=f()("#".concat(e)),this.$toggler=this.$element.find("[data-toggle]").filter(function(){var t=f()(this).data("toggle");return t===e||""===t}),this.options=f.a.extend({},this.options,this.$targetMenu.data()),this.options.animate){var n=this.options.animate.split(" ");this.animationIn=n[0],this.animationOut=n[1]||null}this._update()}
/**
     * Adds necessary event handlers for the tab bar to work.
     * @function
     * @private
     */},{key:"_events",value:function t(){var e=this;this._updateMqHandler=this._update.bind(this),f()(window).on("changed.zf.mediaquery",this._updateMqHandler),this.$toggler.on("click.zf.responsiveToggle",this.toggleMenu.bind(this))}
/**
     * Checks the current media query to determine if the tab bar should be visible or hidden.
     * @function
     * @private
     */},{key:"_update",value:function t(){
// Mobile
p.MediaQuery.atLeast(this.options.hideFor)?(this.$element.hide(),this.$targetMenu.show()):(this.$element.show(),this.$targetMenu.hide())}
/**
     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
     * @function
     * @fires ResponsiveToggle#toggled
     */},{key:"toggleMenu",value:function t(){var e=this;p.MediaQuery.atLeast(this.options.hideFor)||(
/**
         * Fires when the element attached to the tab bar toggles.
         * @event ResponsiveToggle#toggled
         */
this.options.animate?this.$targetMenu.is(":hidden")?m.Motion.animateIn(this.$targetMenu,this.animationIn,function(){e.$element.trigger("toggled.zf.responsiveToggle"),e.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger")}):m.Motion.animateOut(this.$targetMenu,this.animationOut,function(){e.$element.trigger("toggled.zf.responsiveToggle")}):(this.$targetMenu.toggle(0),this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"),this.$element.trigger("toggled.zf.responsiveToggle")))}},{key:"_destroy",value:function t(){this.$element.off(".zf.responsiveToggle"),this.$toggler.off(".zf.responsiveToggle"),f()(window).off("changed.zf.mediaquery",this._updateMqHandler)}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */v.defaults={
/**
   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
   * @option
   * @type {string}
   * @default 'medium'
   */
hideFor:"medium",
/**
   * To decide if the toggle should be animated or not.
   * @option
   * @type {boolean}
   * @default false
   */
animate:!1}},
/***/"./js/foundation.reveal.js":
/*!*********************************!*\
  !*** ./js/foundation.reveal.js ***!
  \*********************************/
/*! exports provided: Reveal */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Reveal module.
 * @module foundation.reveal
 * @requires foundation.util.keyboard
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion if using animations
 */n.r(e),
/* harmony export (binding) */n.d(e,"Reveal",function(){return w});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),v=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),y=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),b=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),w=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),r(i,[{key:"_setup",
/**
     * Creates a new instance of Reveal.
     * @class
     * @name Reveal
     * @param {jQuery} element - jQuery object to use for the modal.
     * @param {Object} options - optional parameters.
     */
value:function t(e,n){this.$element=e,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="Reveal",// ie9 back compat
this._init(),// Triggers init is idempotent, just need to make sure it is initialized
b.Triggers.init(f.a),m.Keyboard.register("Reveal",{ESCAPE:"close"})}
/**
     * Initializes the modal by adding the overlay and close buttons, (if selected).
     * @private
     */},{key:"_init",value:function t(){var e=this;g.MediaQuery._init(),this.id=this.$element.attr("id"),this.isActive=!1,this.cached={mq:g.MediaQuery.current},this.$anchor=f()('[data-open="'.concat(this.id,'"]')).length?f()('[data-open="'.concat(this.id,'"]')):f()('[data-toggle="'.concat(this.id,'"]')),this.$anchor.attr({"aria-controls":this.id,"aria-haspopup":!0,tabindex:0}),(this.options.fullScreen||this.$element.hasClass("full"))&&(this.options.fullScreen=!0,this.options.overlay=!1),this.options.overlay&&!this.$overlay&&(this.$overlay=this._makeOverlay(this.id)),this.$element.attr({role:"dialog","aria-hidden":!0,"data-yeti-box":this.id,"data-resize":this.id}),this.$overlay?this.$element.detach().appendTo(this.$overlay):(this.$element.detach().appendTo(f()(this.options.appendTo)),this.$element.addClass("without-overlay")),this._events(),this.options.deepLink&&window.location.hash==="#".concat(this.id)&&(this.onLoadListener=Object(p.onLoad)(f()(window),function(){return e.open()}))}
/**
     * Creates an overlay div to display behind the modal.
     * @private
     */},{key:"_makeOverlay",value:function t(){var e="";return this.options.additionalOverlayClasses&&(e=" "+this.options.additionalOverlayClasses),f()("<div></div>").addClass("reveal-overlay"+e).appendTo(this.options.appendTo)}
/**
     * Updates position of modal
     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
     * @private
     */},{key:"_updatePosition",value:function t(){var e=this.$element.outerWidth(),n=f()(window).width(),i=this.$element.outerHeight(),o=f()(window).height(),s,r=null;s="auto"===this.options.hOffset?parseInt((n-e)/2,10):parseInt(this.options.hOffset,10),"auto"===this.options.vOffset?r=o<i?parseInt(Math.min(100,o/10),10):parseInt((o-i)/4,10):null!==this.options.vOffset&&(r=parseInt(this.options.vOffset,10)),null!==r&&this.$element.css({top:r+"px"}),// only worry about left if we don't have an overlay or we have a horizontal offset,
// otherwise we're perfectly in the middle
this.$overlay&&"auto"===this.options.hOffset||(this.$element.css({left:s+"px"}),this.$element.css({margin:"0px"}))}
/**
     * Adds event handlers for the modal.
     * @private
     */},{key:"_events",value:function t(){var i=this,o=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":function t(e,n){if(e.target===o.$element[0]||f()(e.target).parents("[data-closable]")[0]===n)
// only close reveal when it's explicitly called
return i.close.apply(i)},"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":function t(){o._updatePosition()}}),this.options.closeOnClick&&this.options.overlay&&this.$overlay.off(".zf.reveal").on("click.zf.reveal",function(t){t.target!==o.$element[0]&&!f.a.contains(o.$element[0],t.target)&&f.a.contains(document,t.target)&&o.close()}),this.options.deepLink&&f()(window).on("hashchange.zf.reveal:".concat(this.id),this._handleState.bind(this))}
/**
     * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.
     * @private
     */},{key:"_handleState",value:function t(e){window.location.hash!=="#"+this.id||this.isActive?this.close():this.open()}
/**
    * Disables the scroll when Reveal is shown to prevent the background from shifting
    * @param {number} scrollTop - Scroll to visually apply, window current scroll by default
    */},{key:"_disableScroll",value:function t(e){e=e||f()(window).scrollTop(),f()(document).height()>f()(window).height()&&f()("html").css("top",-e)}
/**
    * Reenables the scroll when Reveal closes
    * @param {number} scrollTop - Scroll to restore, html "top" property by default (as set by `_disableScroll`)
    */},{key:"_enableScroll",value:function t(e){e=e||parseInt(f()("html").css("top")),f()(document).height()>f()(window).height()&&(f()("html").css("top",""),f()(window).scrollTop(-e))}
/**
     * Opens the modal controlled by `this.$anchor`, and closes all others by default.
     * @function
     * @fires Reveal#closeme
     * @fires Reveal#open
     */},{key:"open",value:function t(){var e=this,n="#".concat(this.id);
// either update or replace browser history
this.options.deepLink&&window.location.hash!==n&&(window.history.pushState?this.options.updateHistory?window.history.pushState({},"",n):window.history.replaceState({},"",n):window.location.hash=n),// Remember anchor that opened it to set focus back later, have general anchors as fallback
this.$activeAnchor=f()(document.activeElement).is(this.$anchor)?f()(document.activeElement):this.$anchor,this.isActive=!0,// Make elements invisible, but remove display: none so we can get size and positioning
this.$element.css({visibility:"hidden"}).show().scrollTop(0),this.options.overlay&&this.$overlay.css({visibility:"hidden"}).show(),this._updatePosition(),this.$element.hide().css({visibility:""}),this.$overlay&&(this.$overlay.css({visibility:""}).hide(),this.$element.hasClass("fast")?this.$overlay.addClass("fast"):this.$element.hasClass("slow")&&this.$overlay.addClass("slow")),this.options.multipleOpened||
/**
         * Fires immediately before the modal opens.
         * Closes any other modals that are currently open
         * @event Reveal#closeme
         */
this.$element.trigger("closeme.zf.reveal",this.id),this._disableScroll();var i=this;// Motion UI method of reveal
if(this.options.animationIn){var o=function t(){i.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),i._addGlobalClasses(),m.Keyboard.trapFocus(i.$element)};this.options.overlay&&v.Motion.animateIn(this.$overlay,"fade-in"),v.Motion.animateIn(this.$element,this.options.animationIn,function(){e.$element&&(
// protect against object having been removed
e.focusableElements=m.Keyboard.findFocusable(e.$element),o())})}// jQuery method of reveal
else this.options.overlay&&this.$overlay.show(0),this.$element.show(this.options.showDelay);// handle accessibility
this.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),m.Keyboard.trapFocus(this.$element),this._addGlobalClasses(),this._addGlobalListeners(),
/**
       * Fires when the modal has successfully opened.
       * @event Reveal#open
       */
this.$element.trigger("open.zf.reveal")}
/**
     * Adds classes and listeners on document required by open modals.
     *
     * The following classes are added and updated:
     * - `.is-reveal-open` - Prevents the scroll on document
     * - `.zf-has-scroll`  - Displays a disabled scrollbar on document if required like if the
     *                       scroll was not disabled. This prevent a "shift" of the page content due
     *                       the scrollbar disappearing when the modal opens.
     *
     * @private
     */},{key:"_addGlobalClasses",value:function t(){var e=function t(){f()("html").toggleClass("zf-has-scroll",!!(f()(document).height()>f()(window).height()))};this.$element.on("resizeme.zf.trigger.revealScrollbarListener",function(){return e()}),e(),f()("html").addClass("is-reveal-open")}
/**
     * Removes classes and listeners on document that were required by open modals.
     * @private
     */},{key:"_removeGlobalClasses",value:function t(){this.$element.off("resizeme.zf.trigger.revealScrollbarListener"),f()("html").removeClass("is-reveal-open"),f()("html").removeClass("zf-has-scroll")}
/**
     * Adds extra event handlers for the body and window if necessary.
     * @private
     */},{key:"_addGlobalListeners",value:function t(){var e=this;this.$element&&(// If we're in the middle of cleanup, don't freak out
this.focusableElements=m.Keyboard.findFocusable(this.$element),this.options.overlay||!this.options.closeOnClick||this.options.fullScreen||f()("body").on("click.zf.reveal",function(t){t.target!==e.$element[0]&&!f.a.contains(e.$element[0],t.target)&&f.a.contains(document,t.target)&&e.close()}),this.options.closeOnEsc&&f()(window).on("keydown.zf.reveal",function(t){m.Keyboard.handleKey(t,"Reveal",{close:function t(){e.options.closeOnEsc&&e.close()}})}))}
/**
     * Closes the modal.
     * @function
     * @fires Reveal#closed
     */},{key:"close",value:function t(){function e(){
// Get the current top before the modal is closed and restore the scroll after.
// TODO: use component properties instead of HTML properties
// See https://github.com/zurb/foundation-sites/pull/10786
var t=parseInt(f()("html").css("top"));0===f()(".reveal:visible").length&&n._removeGlobalClasses(),m.Keyboard.releaseFocus(n.$element),n.$element.attr("aria-hidden",!0),n._enableScroll(t),
/**
        * Fires when the modal is done closing.
        * @event Reveal#closed
        */
n.$element.trigger("closed.zf.reveal")}
/**
      * Resets the modal content
      * This prevents a running video to keep going in the background
      */if(!this.isActive||!this.$element.is(":visible"))return!1;var n=this;// Motion UI method of hiding
// If deepLink and we did not switched to an other modal...
if(this.options.animationOut?(this.options.overlay&&v.Motion.animateOut(this.$overlay,"fade-out"),v.Motion.animateOut(this.$element,this.options.animationOut,e)):(this.$element.hide(this.options.hideDelay),this.options.overlay?this.$overlay.hide(0,e):e()),// Conditionals to remove extra event listeners added on open
this.options.closeOnEsc&&f()(window).off("keydown.zf.reveal"),!this.options.overlay&&this.options.closeOnClick&&f()("body").off("click.zf.reveal"),this.$element.off("keydown.zf.reveal"),this.options.resetOnClose&&this.$element.html(this.$element.html()),this.isActive=!1,n.options.deepLink&&window.location.hash==="#".concat(this.id))
// Remove the history hash
if(window.history.replaceState){var i=window.location.pathname+window.location.search;this.options.updateHistory?window.history.pushState({},"",i):window.history.replaceState("",document.title,i)}else window.location.hash="";this.$activeAnchor.focus()}
/**
     * Toggles the open/closed state of a modal.
     * @function
     */},{key:"toggle",value:function t(){this.isActive?this.close():this.open()}},{key:"_destroy",
/**
     * Destroys an instance of a modal.
     * @function
     */
value:function t(){this.options.overlay&&(this.$element.appendTo(f()(this.options.appendTo)),// move $element outside of $overlay to prevent error unregisterPlugin()
this.$overlay.hide().off().remove()),this.$element.hide().off(),this.$anchor.off(".zf"),f()(window).off(".zf.reveal:".concat(this.id)),this.onLoadListener&&f()(window).off(this.onLoadListener),0===f()(".reveal:visible").length&&this._removeGlobalClasses()}}]),i}(y.Plugin);
/* harmony import */w.defaults={
/**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
animationIn:"",
/**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
animationOut:"",
/**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
showDelay:0,
/**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
hideDelay:0,
/**
   * Allows a click on the body/overlay to close the modal.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:!0,
/**
   * Allows the modal to close if the user presses the `ESCAPE` key.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnEsc:!0,
/**
   * If true, allows multiple modals to be displayed at once.
   * @option
   * @type {boolean}
   * @default false
   */
multipleOpened:!1,
/**
   * Distance, in pixels, the modal should push down from the top of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
vOffset:"auto",
/**
   * Distance, in pixels, the modal should push in from the side of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
hOffset:"auto",
/**
   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
   * @option
   * @type {boolean}
   * @default false
   */
fullScreen:!1,
/**
   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
   * @option
   * @type {boolean}
   * @default true
   */
overlay:!0,
/**
   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
   * @option
   * @type {boolean}
   * @default false
   */
resetOnClose:!1,
/**
   * Link the location hash to the modal.
   * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:!1,
/**
   * If `deepLink` is enabled, update the browser history with the open modal
   * @option
   * @default false
   */
updateHistory:!1,
/**
  * Allows the modal to append to custom div.
  * @option
  * @type {string}
  * @default "body"
  */
appendTo:"body",
/**
   * Allows adding additional class names to the reveal overlay.
   * @option
   * @type {string}
   * @default ''
   */
additionalOverlayClasses:""}},
/***/"./js/foundation.slider.js":
/*!*********************************!*\
  !*** ./js/foundation.slider.js ***!
  \*********************************/
/*! exports provided: Slider */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Slider module.
 * @module foundation.slider
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 */function $(t,e){return t/e}function w(t,e,n,i){return Math.abs(t.position()[e]+t[i]()/2-n)}function h(t,e){return Math.log(e)/Math.log(t)}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Slider",function(){return y});
/* harmony import */var f=n(/*! jquery */"jquery"),k=/* */n.n(f),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),C=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),x=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.util.touch */"./js/foundation.util.touch.js"),v=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),y=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),r(i,[{key:"_setup",
/**
     * Creates a new instance of a slider control.
     * @class
     * @name Slider
     * @param {jQuery} element - jQuery object to make into a slider control.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=k.a.extend({},i.defaults,this.$element.data(),n),this.className="Slider",// ie9 back compat
// Touch and Triggers inits are idempotent, we just need to make sure it's initialied.
g.Touch.init(k.a),v.Triggers.init(k.a),this._init(),p.Keyboard.register("Slider",{ltr:{ARROW_RIGHT:"increase",ARROW_UP:"increase",ARROW_DOWN:"decrease",ARROW_LEFT:"decrease",SHIFT_ARROW_RIGHT:"increase_fast",SHIFT_ARROW_UP:"increase_fast",SHIFT_ARROW_DOWN:"decrease_fast",SHIFT_ARROW_LEFT:"decrease_fast",HOME:"min",END:"max"},rtl:{ARROW_LEFT:"increase",ARROW_RIGHT:"decrease",SHIFT_ARROW_LEFT:"increase_fast",SHIFT_ARROW_RIGHT:"decrease_fast"}})}
/**
     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
     * @function
     * @private
     */},{key:"_init",value:function t(){this.inputs=this.$element.find("input"),this.handles=this.$element.find("[data-slider-handle]"),this.$handle=this.handles.eq(0),this.$input=this.inputs.length?this.inputs.eq(0):k()("#".concat(this.$handle.attr("aria-controls"))),this.$fill=this.$element.find("[data-slider-fill]").css(this.options.vertical?"height":"width",0);var e=!1,n=this;(this.options.disabled||this.$element.hasClass(this.options.disabledClass))&&(this.options.disabled=!0,this.$element.addClass(this.options.disabledClass)),this.inputs.length||(this.inputs=k()().add(this.$input),this.options.binding=!0),this._setInitAttr(0),this.handles[1]&&(this.options.doubleSided=!0,this.$handle2=this.handles.eq(1),this.$input2=1<this.inputs.length?this.inputs.eq(1):k()("#".concat(this.$handle2.attr("aria-controls"))),this.inputs[1]||(this.inputs=this.inputs.add(this.$input2)),e=!0,// this.$handle.triggerHandler('click.zf.slider');
this._setInitAttr(1)),// Set handle positions
this.setHandles(),this._events()}},{key:"setHandles",value:function t(){var e=this;this.handles[1]?this._setHandlePos(this.$handle,this.inputs.eq(0).val(),!0,function(){e._setHandlePos(e.$handle2,e.inputs.eq(1).val(),!0)}):this._setHandlePos(this.$handle,this.inputs.eq(0).val(),!0)}},{key:"_reflow",value:function t(){this.setHandles()}
/**
    * @function
    * @private
    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
    */},{key:"_pctOfBar",value:function t(e){var n=$(e-this.options.start,this.options.end-this.options.start);switch(this.options.positionValueFunction){case"pow":n=this._logTransform(n);break;case"log":n=this._powTransform(n);break}return n.toFixed(2)}
/**
    * @function
    * @private
    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
    */},{key:"_value",value:function t(e){switch(this.options.positionValueFunction){case"pow":e=this._powTransform(e);break;case"log":e=this._logTransform(e);break}var n;return(this.options.end-this.options.start)*e+parseFloat(this.options.start)}
/**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
    */},{key:"_logTransform",value:function t(e){return h(this.options.nonLinearBase,e*(this.options.nonLinearBase-1)+1)}
/**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
    */},{key:"_powTransform",value:function t(e){return(Math.pow(this.options.nonLinearBase,e)-1)/(this.options.nonLinearBase-1)}
/**
     * Sets the position of the selected handle and fill bar.
     * @function
     * @private
     * @param {jQuery} $hndl - the selected handle to move.
     * @param {Number} location - floating point between the start and end values of the slider bar.
     * @param {Function} cb - callback function to fire on completion.
     * @fires Slider#moved
     * @fires Slider#changed
     */},{key:"_setHandlePos",value:function t(e,n,i,o){
// don't move if the slider has been disabled since its initialization
if(!this.$element.hasClass(this.options.disabledClass)){//on input change events, convert string to number...grumble.
// prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max
(//might need to alter that slightly for bars that will have odd number selections.
n=parseFloat(n))<this.options.start?n=this.options.start:n>this.options.end&&(n=this.options.end);var s=this.options.doubleSided;//this is for single-handled vertical sliders, it adjusts the value to account for the slider being "upside-down"
//for click and drag events, it's weird due to the scale(-1, 1) css property
if(this.options.vertical&&!i&&(n=this.options.end-n),s)
//this block is to prevent 2 handles from crossing eachother. Could/should be improved.
if(0===this.handles.index(e)){var r=parseFloat(this.$handle2.attr("aria-valuenow"));n=r<=n?r-this.options.step:n}else{var a=parseFloat(this.$handle.attr("aria-valuenow"));n=n<=a?a+this.options.step:n}var l=this,u=this.options.vertical,c=u?"height":"width",d=u?"top":"left",h=e[0].getBoundingClientRect()[c],f=this.$element[0].getBoundingClientRect()[c],
//percentage of bar min/max value based on click or drag point
p=this._pctOfBar(n),
//number of actual pixels to shift the handle, based on the percentage obtained above
m,
//percentage of bar to shift the handle
g=(100*$((f-h)*p,f)).toFixed(this.options.decimal);//fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value
n=parseFloat(n.toFixed(this.options.decimal));// declare empty object for css adjustments, only used with 2 handled-sliders
var v={};// TODO update to calculate based on values set to respective inputs??
if(this._setValues(e,n),s){var y=0===this.handles.index(e),
//empty variable, will be used for min-height/width for fill bar
b,
//percentage w/h of the handle compared to the slider bar
w=~~(100*$(h,f));//if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar
if(y)
//left or top percentage value to apply to the fill bar.
v[d]="".concat(g,"%"),//calculate the new min-height/width for the fill bar.
b=parseFloat(this.$handle2[0].style[d])-g+w,//this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
//plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.
o&&"function"==typeof o&&o();else{
//just caching the value of the left/bottom handle's left/top property
var k=parseFloat(this.$handle[0].style[d]);//calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
//based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself
b=g-(isNaN(k)?(this.options.initialStart-this.options.start)/((this.options.end-this.options.start)/100):k)+w}// assign the min-height/width to our css object
v["min-".concat(c)]="".concat(b,"%")}this.$element.one("finished.zf.animate",function(){
/**
         * Fires when the handle is done moving.
         * @event Slider#moved
         */
l.$element.trigger("moved.zf.slider",[e])});//because we don't know exactly how the handle will be moved, check the amount of time it should take to move.
var x=this.$element.data("dragging")?1e3/60:this.options.moveTime;Object(C.Move)(x,e,function(){
// adjusting the left/top property of the handle, based on the percentage calculated above
// if movement isNaN, that is because the slider is hidden and we cannot determine handle width,
// fall back to next best guess.
isNaN(g)?e.css(d,"".concat(100*p,"%")):e.css(d,"".concat(g,"%")),l.options.doubleSided?
//otherwise, use the css object we created above
l.$fill.css(v):
//if single-handled, a simple method to expand the fill bar
l.$fill.css(c,"".concat(100*p,"%"))}),
/**
       * Fires when the value has not been change for a given time.
       * @event Slider#changed
       */
clearTimeout(l.timeout),l.timeout=setTimeout(function(){l.$element.trigger("changed.zf.slider",[e])},l.options.changedDelay)}}
/**
     * Sets the initial attribute for the slider element.
     * @function
     * @private
     * @param {Number} idx - index of the current handle/input to use.
     */},{key:"_setInitAttr",value:function t(e){var n=0===e?this.options.initialStart:this.options.initialEnd,i=this.inputs.eq(e).attr("id")||Object(x.GetYoDigits)(6,"slider");this.inputs.eq(e).attr({id:i,max:this.options.end,min:this.options.start,step:this.options.step}),this.inputs.eq(e).val(n),this.handles.eq(e).attr({role:"slider","aria-controls":i,"aria-valuemax":this.options.end,"aria-valuemin":this.options.start,"aria-valuenow":n,"aria-orientation":this.options.vertical?"vertical":"horizontal",tabindex:0})}
/**
     * Sets the input and `aria-valuenow` values for the slider element.
     * @function
     * @private
     * @param {jQuery} $handle - the currently selected handle.
     * @param {Number} val - floating point of the new value.
     */},{key:"_setValues",value:function t(e,n){var i=this.options.doubleSided?this.handles.index(e):0;this.inputs.eq(i).val(n),e.attr("aria-valuenow",n)}
/**
     * Handles events on the slider element.
     * Calculates the new location of the current handle.
     * If there are two handles and the bar was clicked, it determines which handle to move.
     * @function
     * @private
     * @param {Object} e - the `event` object passed from the listener.
     * @param {jQuery} $handle - the current handle to calculate for, if selected.
     * @param {Number} val - floating point number for the new value of the slider.
     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
     */},{key:"_handleEvent",value:function t(e,n,i){var o,s;if(i)
//change event on input
o=this._adjustValue(null,i),s=!0;else{
//click or drag events
e.preventDefault();var r=this,a=this.options.vertical,l=a?"height":"width",u=a?"top":"left",c=a?e.pageY:e.pageX,d=this.$handle[0].getBoundingClientRect()[l]/2,h=this.$element[0].getBoundingClientRect()[l],f=a?k()(window).scrollTop():k()(window).scrollLeft(),p=this.$element.offset()[u];// touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...
// best way to guess this is simulated is if clientY == pageY
e.clientY===e.pageY&&(c+=f);var m=c-p,g,v=$(g=m<0?0:h<m?h:m,h),y,b;if(o=this._value(v),// turn everything around for RTL, yay math!
Object(x.rtl)()&&!this.options.vertical&&(o=this.options.end-o),o=r._adjustValue(null,o),//boolean flag for the setHandlePos fn, specifically for vertical sliders
s=!1,!n)n=w(this.$handle,u,g,l)<=w(this.$handle2,u,g,l)?this.$handle:this.$handle2}this._setHandlePos(n,o,s)}
/**
     * Adjustes value for handle in regard to step value. returns adjusted value
     * @function
     * @private
     * @param {jQuery} $handle - the selected handle.
     * @param {Number} value - value to adjust. used if $handle is falsy
     */},{key:"_adjustValue",value:function t(e,n){var i,o=this.options.step,s=parseFloat(o/2),r,a,l;return 0===(r=0<=(i=e?parseFloat(e.attr("aria-valuenow")):n)?i%o:o+i%o)?i:i=(a=i-r)+s<=i?l=a+o:a}
/**
     * Adds event listeners to the slider elements.
     * @function
     * @private
     */},{key:"_events",value:function t(){this._eventsForHandle(this.$handle),this.handles[1]&&this._eventsForHandle(this.$handle2)}
/**
     * Adds event listeners a particular handle
     * @function
     * @private
     * @param {jQuery} $handle - the current handle to apply listeners to.
     */},{key:"_eventsForHandle",value:function t(e){var s=this,n,i,o=function t(e){var n=s.inputs.index(k()(this));s._handleEvent(e,s.handles.eq(n),k()(this).val())};if(// IE only triggers the change event when the input loses focus which strictly follows the HTML specification
// listen for the enter key and trigger a change
// @see https://html.spec.whatwg.org/multipage/input.html#common-input-element-events
this.inputs.off("keyup.zf.slider").on("keyup.zf.slider",function(t){13==t.keyCode&&o.call(this,t)}),this.inputs.off("change.zf.slider").on("change.zf.slider",o),this.options.clickSelect&&this.$element.off("click.zf.slider").on("click.zf.slider",function(t){if(s.$element.data("dragging"))return!1;k()(t.target).is("[data-slider-handle]")||(s.options.doubleSided?s._handleEvent(t):s._handleEvent(t,s.$handle))}),this.options.draggable){this.handles.addTouch();var r=k()("body");e.off("mousedown.zf.slider").on("mousedown.zf.slider",function(t){e.addClass("is-dragging"),s.$fill.addClass("is-dragging"),//
s.$element.data("dragging",!0),n=k()(t.currentTarget),r.on("mousemove.zf.slider",function(t){t.preventDefault(),s._handleEvent(t,n)}).on("mouseup.zf.slider",function(t){s._handleEvent(t,n),e.removeClass("is-dragging"),s.$fill.removeClass("is-dragging"),s.$element.data("dragging",!1),r.off("mousemove.zf.slider mouseup.zf.slider")})}).on("selectstart.zf.slider touchmove.zf.slider",function(t){t.preventDefault()})}e.off("keydown.zf.slider").on("keydown.zf.slider",function(e){var n=k()(this),t=s.options.doubleSided?s.handles.index(n):0,i=parseFloat(s.inputs.eq(t).val()),o;// handle keyboard event with keyboard util
p.Keyboard.handleKey(e,"Slider",{decrease:function t(){o=i-s.options.step},increase:function t(){o=i+s.options.step},decrease_fast:function t(){o=i-10*s.options.step},increase_fast:function t(){o=i+10*s.options.step},min:function t(){o=s.options.start},max:function t(){o=s.options.end},handled:function t(){
// only set handle pos when event was handled specially
e.preventDefault(),s._setHandlePos(n,o,!0)}})})}
/**
     * Destroys the slider plugin.
     */},{key:"_destroy",value:function t(){this.handles.off(".zf.slider"),this.inputs.off(".zf.slider"),this.$element.off(".zf.slider"),clearTimeout(this.timeout)}}]),i}(m.Plugin);
/* harmony import */y.defaults={
/**
   * Minimum value for the slider scale.
   * @option
   * @type {number}
   * @default 0
   */
start:0,
/**
   * Maximum value for the slider scale.
   * @option
   * @type {number}
   * @default 100
   */
end:100,
/**
   * Minimum value change per change event.
   * @option
   * @type {number}
   * @default 1
   */
step:1,
/**
   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
   * @option
   * @type {number}
   * @default 0
   */
initialStart:0,
/**
   * Value at which the right handle/second input should be set to on initialization.
   * @option
   * @type {number}
   * @default 100
   */
initialEnd:100,
/**
   * Allows the input to be located outside the container and visible. Set to by the JS
   * @option
   * @type {boolean}
   * @default false
   */
binding:!1,
/**
   * Allows the user to click/tap on the slider bar to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
clickSelect:!0,
/**
   * Set to true and use the `vertical` class to change alignment to vertical.
   * @option
   * @type {boolean}
   * @default false
   */
vertical:!1,
/**
   * Allows the user to drag the slider handle(s) to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
draggable:!0,
/**
   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
   * @option
   * @type {boolean}
   * @default false
   */
disabled:!1,
/**
   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
   * @option
   * @type {boolean}
   * @default false
   */
doubleSided:!1,
/**
   * Potential future feature.
   */
// steps: 100,
/**
   * Number of decimal places the plugin should go to for floating point precision.
   * @option
   * @type {number}
   * @default 2
   */
decimal:2,
/**
   * Time delay for dragged elements.
   */
// dragDelay: 0,
/**
   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
   * @option
   * @type {number}
   * @default 200
   */
moveTime:200,
//update this if changing the transition time in the sass
/**
   * Class applied to disabled sliders.
   * @option
   * @type {string}
   * @default 'disabled'
   */
disabledClass:"disabled",
/**
   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
   * @option
   * @type {boolean}
   * @default false
   */
invertVertical:!1,
/**
   * Milliseconds before the `changed.zf-slider` event is triggered after value change.
   * @option
   * @type {number}
   * @default 500
   */
changedDelay:500,
/**
  * Basevalue for non-linear sliders
  * @option
  * @type {number}
  * @default 5
  */
nonLinearBase:5,
/**
  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
  * @option
  * @type {string}
  * @default 'linear'
  */
positionValueFunction:"linear"}},
/***/"./js/foundation.smoothScroll.js":
/*!***************************************!*\
  !*** ./js/foundation.smoothScroll.js ***!
  \***************************************/
/*! exports provided: SmoothScroll */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * SmoothScroll module.
 * @module foundation.smooth-scroll
 */n.r(e),
/* harmony export (binding) */n.d(e,"SmoothScroll",function(){return g});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m,g=
/* */
function(t){function l(){return o(this,l),a(this,u(l).apply(this,arguments))}return c(l,t),r(l,[{key:"_setup",
/**
     * Creates a new instance of SmoothScroll.
     * @class
     * @name SmoothScroll
     * @fires SmoothScroll#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=f.a.extend({},l.defaults,this.$element.data(),n),this.className="SmoothScroll",// ie9 back compat
this._init()}
/**
     * Initialize the SmoothScroll plugin
     * @private
     */},{key:"_init",value:function t(){var e=this.$element[0].id||Object(p.GetYoDigits)(6,"smooth-scroll");this.$element.attr({id:e}),this._events()}
/**
     * Initializes events for SmoothScroll.
     * @private
     */},{key:"_events",value:function t(){this.$element.on("click.zf.smoothScroll",this._handleLinkClick),this.$element.on("click.zf.smoothScroll",'a[href^="#"]',this._handleLinkClick)}
/**
     * Handle the given event to smoothly scroll to the anchor pointed by the event target.
     * @param {*} e - event
     * @function
     * @private
     */},{key:"_handleLinkClick",value:function t(e){var n=this;
// Follow the link if it does not point to an anchor.
if(f()(e.currentTarget).is('a[href^="#"]')){var i=e.currentTarget.getAttribute("href");this._inTransition=!0,l.scrollToLoc(i,this.options,function(){n._inTransition=!1}),e.preventDefault()}}},{key:"_destroy",
/**
     * Destroys the SmoothScroll instance.
     * @function
     */
value:function t(){this.$element.off("click.zf.smoothScroll",this._handleLinkClick),this.$element.off("click.zf.smoothScroll",'a[href^="#"]',this._handleLinkClick)}}],[{key:"scrollToLoc",
/**
     * Function to scroll to a given location on the page.
     * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
     * @param {Object} options - The options to use.
     * @param {Function} callback - The callback function.
     * @static
     * @function
     */
value:function t(e,n,i){var o=1<arguments.length&&void 0!==n?n:l.defaults,s=2<arguments.length?i:void 0,r=f()(e);// Do nothing if target does not exist to prevent errors
if(!r.length)return!1;var a=Math.round(r.offset().top-o.threshold/2-o.offset);f()("html, body").stop(!0).animate({scrollTop:a},o.animationDuration,o.animationEasing,function(){"function"==typeof s&&s()})}}]),l}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */
/**
 * Default settings for plugin.
 */
g.defaults={
/**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
animationEasing:"linear",
/**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
threshold:50,
/**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
offset:0}},
/***/"./js/foundation.sticky.js":
/*!*********************************!*\
  !*** ./js/foundation.sticky.js ***!
  \*********************************/
/*! exports provided: Sticky */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Sticky module.
 * @module foundation.sticky
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */
/**
 * Helper function to calculate em values
 * @param Number {em} - number of em's to calculate into pixels
 */
function h(t){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*t}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Sticky",function(){return b});
/* harmony import */var f=n(/*! jquery */"jquery"),p=/* */n.n(f),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),v=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),y=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),b=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),r(i,[{key:"_setup",
/**
     * Creates a new instance of a sticky thing.
     * @class
     * @name Sticky
     * @param {jQuery} element - jQuery object to make sticky.
     * @param {Object} options - options object passed when creating the element programmatically.
     */
value:function t(e,n){this.$element=e,this.options=p.a.extend({},i.defaults,this.$element.data(),n),this.className="Sticky",// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
y.Triggers.init(p.a),this._init()}
/**
     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
     * @function
     * @private
     */},{key:"_init",value:function t(){g.MediaQuery._init();var e=this.$element.parent("[data-sticky-container]"),n=this.$element[0].id||Object(m.GetYoDigits)(6,"sticky"),i=this;e.length?this.$container=e:(this.wasWrapped=!0,this.$element.wrap(this.options.container),this.$container=this.$element.parent()),this.$container.addClass(this.options.containerClass),this.$element.addClass(this.options.stickyClass).attr({"data-resize":n,"data-mutate":n}),""!==this.options.anchor&&p()("#"+i.options.anchor).attr({"data-mutate":n}),this.scrollCount=this.options.checkEvery,this.isStuck=!1,this.onLoadListener=Object(m.onLoad)(p()(window),function(){
//We calculate the container height to have correct values for anchor points offset calculation.
i.containerHeight="none"==i.$element.css("display")?0:i.$element[0].getBoundingClientRect().height,i.$container.css("height",i.containerHeight),i.elemHeight=i.containerHeight,""!==i.options.anchor?i.$anchor=p()("#"+i.options.anchor):i._parsePoints(),i._setSizes(function(){var t=window.pageYOffset;i._calc(!1,t),//Unstick the element will ensure that proper classes are set.
i.isStuck||i._removeSticky(!(t>=i.topPoint))}),i._events(n.split("-").reverse().join("-"))})}
/**
     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
     * @function
     * @private
     */},{key:"_parsePoints",value:function t(){for(var e,n,i=[""==this.options.topAnchor?1:this.options.topAnchor,""==this.options.btmAnchor?document.documentElement.scrollHeight:this.options.btmAnchor],o={},s=0,r=i.length;s<r&&i[s];s++){var a;if("number"==typeof i[s])a=i[s];else{var l=i[s].split(":"),u=p()("#".concat(l[0]));a=u.offset().top,l[1]&&"bottom"===l[1].toLowerCase()&&(a+=u[0].getBoundingClientRect().height)}o[s]=a}this.points=o}
/**
     * Adds event handlers for the scrolling element.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */},{key:"_events",value:function t(n){var i=this,e=this.scrollListener="scroll.zf.".concat(n);this.isOn||(this.canStick&&(this.isOn=!0,p()(window).off(e).on(e,function(t){0===i.scrollCount?(i.scrollCount=i.options.checkEvery,i._setSizes(function(){i._calc(!1,window.pageYOffset)})):(i.scrollCount--,i._calc(!1,window.pageYOffset))})),this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(t,e){i._eventsHandler(n)}),this.$element.on("mutateme.zf.trigger",function(t,e){i._eventsHandler(n)}),this.$anchor&&this.$anchor.on("mutateme.zf.trigger",function(t,e){i._eventsHandler(n)}))}
/**
     * Handler for events.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */},{key:"_eventsHandler",value:function t(e){var n=this,i=this.scrollListener="scroll.zf.".concat(e);n._setSizes(function(){n._calc(!1),n.canStick?n.isOn||n._events(e):n.isOn&&n._pauseListeners(i)})}
/**
     * Removes event handlers for scroll and change events on anchor.
     * @fires Sticky#pause
     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
     */},{key:"_pauseListeners",value:function t(e){this.isOn=!1,p()(window).off(e),
/**
       * Fires when the plugin is paused due to resize event shrinking the view.
       * @event Sticky#pause
       * @private
       */
this.$element.trigger("pause.zf.sticky")}
/**
     * Called on every `scroll` event and on `_init`
     * fires functions based on booleans and cached values
     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
     */},{key:"_calc",value:function t(e,n){if(e&&this._setSizes(),!this.canStick)return this.isStuck&&this._removeSticky(!0),!1;n||(n=window.pageYOffset),n>=this.topPoint?n<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(!1):this.isStuck&&this._removeSticky(!0)}
/**
     * Causes the $element to become stuck.
     * Adds `position: fixed;`, and helper classes.
     * @fires Sticky#stuckto
     * @function
     * @private
     */},{key:"_setSticky",value:function t(){var e=this,n=this.options.stickTo,i="top"===n?"marginTop":"marginBottom",o="top"===n?"bottom":"top",s={};s[i]="".concat(this.options[i],"em"),s[n]=0,s[o]="auto",this.isStuck=!0,this.$element.removeClass("is-anchored is-at-".concat(o)).addClass("is-stuck is-at-".concat(n)).css(s)
/**
       * Fires when the $element has become `position: fixed;`
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`
       * @event Sticky#stuckto
       */.trigger("sticky.zf.stuckto:".concat(n)),this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){e._setSizes()})}
/**
     * Causes the $element to become unstuck.
     * Removes `position: fixed;`, and helper classes.
     * Adds other helper classes.
     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
     * @fires Sticky#unstuckfrom
     * @private
     */},{key:"_removeSticky",value:function t(e){var n=this.options.stickTo,i="top"===n,o={},s=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,r,a=i?"bottom":"top",l=e?"top":"bottom";o[i?"marginTop":"marginBottom"]=0,o.bottom="auto",o.top=e?0:s,this.isStuck=!1,this.$element.removeClass("is-stuck is-at-".concat(n)).addClass("is-anchored is-at-".concat(l)).css(o)
/**
       * Fires when the $element has become anchored.
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`
       * @event Sticky#unstuckfrom
       */.trigger("sticky.zf.unstuckfrom:".concat(l))}
/**
     * Sets the $element and $container sizes for plugin.
     * Calls `_setBreakPoints`.
     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
     * @private
     */},{key:"_setSizes",value:function t(e){this.canStick=g.MediaQuery.is(this.options.stickyOn),this.canStick||e&&"function"==typeof e&&e();var n=this,i=this.$container[0].getBoundingClientRect().width,o=window.getComputedStyle(this.$container[0]),s=parseInt(o["padding-left"],10),r=parseInt(o["padding-right"],10);this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints(),this.$element.css({"max-width":"".concat(i-s-r,"px")});var a=this.$element[0].getBoundingClientRect().height||this.containerHeight;if("none"==this.$element.css("display")&&(a=0),this.containerHeight=a,this.$container.css({height:a}),this.elemHeight=a,!this.isStuck&&this.$element.hasClass("is-at-bottom")){var l=(this.points?this.points[1]-this.$container.offset().top:this.anchorHeight)-this.elemHeight;this.$element.css("top",l)}this._setBreakPoints(a,function(){e&&"function"==typeof e&&e()})}
/**
     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
     * @param {Function} cb - optional callback function to be called on completion.
     * @private
     */},{key:"_setBreakPoints",value:function t(e,n){if(!this.canStick){if(!n||"function"!=typeof n)return!1;n()}var i=h(this.options.marginTop),o=h(this.options.marginBottom),s=this.points?this.points[0]:this.$anchor.offset().top,r=this.points?this.points[1]:s+this.anchorHeight,
// topPoint = this.$anchor.offset().top || this.points[0],
// bottomPoint = topPoint + this.anchorHeight || this.points[1],
a=window.innerHeight;"top"===this.options.stickTo?(s-=i,r-=e+i):"bottom"===this.options.stickTo&&(s-=a-(e+o),r-=a-o),this.topPoint=s,this.bottomPoint=r,n&&"function"==typeof n&&n()}
/**
     * Destroys the current sticky element.
     * Resets the element to the top position first.
     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
     * @function
     */},{key:"_destroy",value:function t(){this._removeSticky(!0),this.$element.removeClass("".concat(this.options.stickyClass," is-anchored is-at-top")).css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger").off("mutateme.zf.trigger"),this.$anchor&&this.$anchor.length&&this.$anchor.off("change.zf.sticky"),this.scrollListener&&p()(window).off(this.scrollListener),this.onLoadListener&&p()(window).off(this.onLoadListener),this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""})}}]),i}(v.Plugin);
/* harmony import */b.defaults={
/**
   * Customizable container template. Add your own classes for styling and sizing.
   * @option
   * @type {string}
   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
   */
container:"<div data-sticky-container></div>",
/**
   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
   * @option
   * @type {string}
   * @default 'top'
   */
stickTo:"top",
/**
   * If anchored to a single element, the id of that element.
   * @option
   * @type {string}
   * @default ''
   */
anchor:"",
/**
   * If using more than one element as anchor points, the id of the top anchor.
   * @option
   * @type {string}
   * @default ''
   */
topAnchor:"",
/**
   * If using more than one element as anchor points, the id of the bottom anchor.
   * @option
   * @type {string}
   * @default ''
   */
btmAnchor:"",
/**
   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
marginTop:1,
/**
   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
marginBottom:1,
/**
   * Breakpoint string that is the minimum screen size an element should become sticky.
   * @option
   * @type {string}
   * @default 'medium'
   */
stickyOn:"medium",
/**
   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
   * @option
   * @type {string}
   * @default 'sticky'
   */
stickyClass:"sticky",
/**
   * Class applied to sticky container. Foundation defaults to `sticky-container`.
   * @option
   * @type {string}
   * @default 'sticky-container'
   */
containerClass:"sticky-container",
/**
   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
   * @option
   * @type {number}
   * @default -1
   */
checkEvery:-1}},
/***/"./js/foundation.tabs.js":
/*!*******************************!*\
  !*** ./js/foundation.tabs.js ***!
  \*******************************/
/*! exports provided: Tabs */
/***/function(t,e,n){"use strict";function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Tabs module.
 * @module foundation.tabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.imageLoader if tabs contain images
 */n.r(e),
/* harmony export (binding) */n.d(e,"Tabs",function(){return y});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g=n(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js"),v,y=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),r(i,[{key:"_setup",
/**
     * Creates a new instance of tabs.
     * @class
     * @name Tabs
     * @fires Tabs#init
     * @param {jQuery} element - jQuery object to make into tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="Tabs",// ie9 back compat
this._init(),m.Keyboard.register("Tabs",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"previous",ARROW_DOWN:"next",ARROW_LEFT:"previous"})}
/**
     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
     * @private
     */},{key:"_init",value:function t(){var s=this,r=this;if(this._isInitializing=!0,this.$element.attr({role:"tablist"}),this.$tabTitles=this.$element.find(".".concat(this.options.linkClass)),this.$tabContent=f()('[data-tabs-content="'.concat(this.$element[0].id,'"]')),this.$tabTitles.each(function(){var t=f()(this),e=t.find("a"),n=t.hasClass("".concat(r.options.linkActiveClass)),i=e.attr("data-tabs-target")||e[0].hash.slice(1),o=e[0].id?e[0].id:"".concat(i,"-label"),s=f()("#".concat(i));t.attr({role:"presentation"}),e.attr({role:"tab","aria-controls":i,"aria-selected":n,id:o,tabindex:n?"0":"-1"}),s.attr({role:"tabpanel","aria-labelledby":o}),// Save up the initial hash to return to it later when going back in history
n&&(r._initialAnchor="#".concat(i)),n||s.attr("aria-hidden","true"),n&&r.options.autoFocus&&(r.onLoadListener=Object(p.onLoad)(f()(window),function(){f()("html, body").animate({scrollTop:t.offset().top},r.options.deepLinkSmudgeDelay,function(){e.focus()})}))}),this.options.matchHeight){var e=this.$tabContent.find("img");e.length?Object(g.onImagesLoaded)(e,this._setHeight.bind(this)):this._setHeight()}// Current context-bound function to open tabs on page load or history hashchange
this._checkDeepLink=function(){var t=window.location.hash;if(!t.length){
// If we are still initializing and there is no anchor, then there is nothing to do
if(s._isInitializing)return;// Otherwise, move to the initial anchor
s._initialAnchor&&(t=s._initialAnchor)}var e=t&&f()(t),n=t&&s.$element.find('[href$="'+t+'"]'),i=!(!e.length||!n.length);if(// If there is an anchor for the hash, select it
e&&e.length&&n&&n.length?s.selectTab(e,!0):s._collapse(),i){
// Roll up a little to show the titles
if(s.options.deepLinkSmudge){var o=s.$element.offset();f()("html, body").animate({scrollTop:o.top},s.options.deepLinkSmudgeDelay)}
/**
           * Fires when the plugin has deeplinked at pageload
           * @event Tabs#deeplink
           */s.$element.trigger("deeplink.zf.tabs",[n,e])}},//use browser to open a tab, if it exists in this tabset
this.options.deepLink&&this._checkDeepLink(),this._events(),this._isInitializing=!1}
/**
     * Adds event handlers for items within the tabs.
     * @private
     */},{key:"_events",value:function t(){this._addKeyHandler(),this._addClickHandler(),this._setHeightMqHandler=null,this.options.matchHeight&&(this._setHeightMqHandler=this._setHeight.bind(this),f()(window).on("changed.zf.mediaquery",this._setHeightMqHandler)),this.options.deepLink&&f()(window).on("hashchange",this._checkDeepLink)}
/**
     * Adds click handlers for items within the tabs.
     * @private
     */},{key:"_addClickHandler",value:function t(){var e=this;this.$element.off("click.zf.tabs").on("click.zf.tabs",".".concat(this.options.linkClass),function(t){t.preventDefault(),t.stopPropagation(),e._handleTabChange(f()(this))})}
/**
     * Adds keyboard event handlers for items within the tabs.
     * @private
     */},{key:"_addKeyHandler",value:function t(){var r=this;this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs",function(e){if(9!==e.which){var n=f()(this),i=n.parent("ul").children("li"),o,s;i.each(function(t){f()(this).is(n)&&(s=r.options.wrapOnKeys?(o=0===t?i.last():i.eq(t-1),t===i.length-1?i.first():i.eq(t+1)):(o=i.eq(Math.max(0,t-1)),i.eq(Math.min(t+1,i.length-1))))}),// handle keyboard event with keyboard util
m.Keyboard.handleKey(e,"Tabs",{open:function t(){n.find('[role="tab"]').focus(),r._handleTabChange(n)},previous:function t(){o.find('[role="tab"]').focus(),r._handleTabChange(o)},next:function t(){s.find('[role="tab"]').focus(),r._handleTabChange(s)},handled:function t(){e.stopPropagation(),e.preventDefault()}})}})}
/**
     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
     * @param {jQuery} $target - Tab to open.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @fires Tabs#change
     * @function
     */},{key:"_handleTabChange",value:function t(e,n){
// With `activeCollapse`, if the target is the active Tab, collapse it.
if(e.hasClass("".concat(this.options.linkActiveClass)))this.options.activeCollapse&&this._collapse();else{var i=this.$element.find(".".concat(this.options.linkClass,".").concat(this.options.linkActiveClass)),o=e.find('[role="tab"]'),s=o.attr("data-tabs-target"),r=s&&s.length?"#".concat(s):o[0].hash,a=this.$tabContent.find(r);//close old tab
this._collapseTab(i),//open new tab
this._openTab(e),//either replace or update browser history
this.options.deepLink&&!n&&(this.options.updateHistory?history.pushState({},"",r):history.replaceState({},"",r))
/**
       * Fires when the plugin has successfully changed tabs.
       * @event Tabs#change
       */,this.$element.trigger("change.zf.tabs",[e,a]),//fire to children a mutation event
a.find("[data-mutate]").trigger("mutateme.zf.trigger")}}
/**
     * Opens the tab `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to open.
     * @function
     */},{key:"_openTab",value:function t(e){var n=e.find('[role="tab"]'),i=n.attr("data-tabs-target")||n[0].hash.slice(1),o=this.$tabContent.find("#".concat(i));e.addClass("".concat(this.options.linkActiveClass)),n.attr({"aria-selected":"true",tabindex:"0"}),o.addClass("".concat(this.options.panelActiveClass)).removeAttr("aria-hidden")}
/**
     * Collapses `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to collapse.
     * @function
     */},{key:"_collapseTab",value:function t(e){var n=e.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({"aria-selected":"false",tabindex:-1});f()("#".concat(n.attr("aria-controls"))).removeClass("".concat(this.options.panelActiveClass)).attr({"aria-hidden":"true"})}
/**
     * Collapses the active Tab.
     * @fires Tabs#collapse
     * @function
     */},{key:"_collapse",value:function t(){var e=this.$element.find(".".concat(this.options.linkClass,".").concat(this.options.linkActiveClass));e.length&&(this._collapseTab(e),
/**
        * Fires when the plugin has successfully collapsed tabs.
        * @event Tabs#collapse
        */
this.$element.trigger("collapse.zf.tabs",[e]))}
/**
     * Public method for selecting a content pane to display.
     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @function
     */},{key:"selectTab",value:function t(e,n){var i;(i="object"===s(e)?e[0].id:e).indexOf("#")<0&&(i="#".concat(i));var o=this.$tabTitles.has('[href$="'.concat(i,'"]'));this._handleTabChange(o,n)}},{key:"_setHeight",
/**
     * Sets the height of each panel to the height of the tallest panel.
     * If enabled in options, gets called on media query change.
     * If loading content via external source, can be called directly or with _reflow.
     * If enabled with `data-match-height="true"`, tabs sets to equal height
     * @function
     * @private
     */
value:function t(){var i=0,o=this;// Lock down the `this` value for the root tabs object
this.$tabContent.find(".".concat(this.options.panelClass)).css("height","").each(function(){var t=f()(this),e=t.hasClass("".concat(o.options.panelActiveClass));// get the options from the parent instead of trying to get them from the child
e||t.css({visibility:"hidden",display:"block"});var n=this.getBoundingClientRect().height;e||t.css({visibility:"",display:""}),i=i<n?n:i}).css("height","".concat(i,"px"))}
/**
     * Destroys an instance of tabs.
     * @fires Tabs#destroyed
     */},{key:"_destroy",value:function t(){this.$element.find(".".concat(this.options.linkClass)).off(".zf.tabs").hide().end().find(".".concat(this.options.panelClass)).hide(),this.options.matchHeight&&null!=this._setHeightMqHandler&&f()(window).off("changed.zf.mediaquery",this._setHeightMqHandler),this.options.deepLink&&f()(window).off("hashchange",this._checkDeepLink),this.onLoadListener&&f()(window).off(this.onLoadListener)}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */y.defaults={
/**
   * Link the location hash to the active pane.
   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:!1,
/**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
deepLinkSmudge:!1,
/**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
deepLinkSmudgeDelay:300,
/**
   * If `deepLink` is enabled, update the browser history with the open tab
   * @option
   * @type {boolean}
   * @default false
   */
updateHistory:!1,
/**
   * Allows the window to scroll to content of active pane on load.
   * Not recommended if more than one tab panel per page.
   * @option
   * @type {boolean}
   * @default false
   */
autoFocus:!1,
/**
   * Allows keyboard input to 'wrap' around the tab links.
   * @option
   * @type {boolean}
   * @default true
   */
wrapOnKeys:!0,
/**
   * Allows the tab content panes to match heights if set to true.
   * @option
   * @type {boolean}
   * @default false
   */
matchHeight:!1,
/**
   * Allows active tabs to collapse when clicked.
   * @option
   * @type {boolean}
   * @default false
   */
activeCollapse:!1,
/**
   * Class applied to `li`'s in tab link list.
   * @option
   * @type {string}
   * @default 'tabs-title'
   */
linkClass:"tabs-title",
/**
   * Class applied to the active `li` in tab link list.
   * @option
   * @type {string}
   * @default 'is-active'
   */
linkActiveClass:"is-active",
/**
   * Class applied to the content containers.
   * @option
   * @type {string}
   * @default 'tabs-panel'
   */
panelClass:"tabs-panel",
/**
   * Class applied to the active content container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
panelActiveClass:"is-active"}},
/***/"./js/foundation.toggler.js":
/*!**********************************!*\
  !*** ./js/foundation.toggler.js ***!
  \**********************************/
/*! exports provided: Toggler */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Toggler module.
 * @module foundation.toggler
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 */n.r(e),
/* harmony export (binding) */n.d(e,"Toggler",function(){return y});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),y=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),r(i,[{key:"_setup",
/**
     * Creates a new instance of Toggler.
     * @class
     * @name Toggler
     * @fires Toggler#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=f.a.extend({},i.defaults,e.data(),n),this.className="",this.className="Toggler",// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
v.Triggers.init(f.a),this._init(),this._events()}
/**
     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
     * @function
     * @private
     */},{key:"_init",value:function t(){var e;// Parse animation classes if they were set
this.options.animate?(e=this.options.animate.split(" "),this.animationIn=e[0],this.animationOut=e[1]||null):(e=this.$element.data("toggler"),// Allow for a . at the beginning of the string
this.className="."===e[0]?e.slice(1):e);// Add ARIA attributes to triggers:
var s=this.$element[0].id,n=f()('[data-open~="'.concat(s,'"], [data-close~="').concat(s,'"], [data-toggle~="').concat(s,'"]'));// - aria-expanded: according to the element visibility.
n.attr("aria-expanded",!this.$element.is(":hidden")),// - aria-controls: adding the element id to it if not already in it.
n.each(function(t,e){var n=f()(e),i=n.attr("aria-controls")||"",o;new RegExp("\\b".concat(Object(g.RegExpEscape)(s),"\\b")).test(i)||n.attr("aria-controls",i?"".concat(i," ").concat(s):s)})}
/**
     * Initializes events for the toggle trigger.
     * @function
     * @private
     */},{key:"_events",value:function t(){this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger",this.toggle.bind(this))}
/**
     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
     * @function
     * @fires Toggler#on
     * @fires Toggler#off
     */},{key:"toggle",value:function t(){this[this.options.animate?"_toggleAnimate":"_toggleClass"]()}},{key:"_toggleClass",value:function t(){this.$element.toggleClass(this.className);var e=this.$element.hasClass(this.className);e?
/**
         * Fires if the target element has the class after a toggle.
         * @event Toggler#on
         */
this.$element.trigger("on.zf.toggler"):
/**
         * Fires if the target element does not have the class after a toggle.
         * @event Toggler#off
         */
this.$element.trigger("off.zf.toggler"),this._updateARIA(e),this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")}},{key:"_toggleAnimate",value:function t(){var e=this;this.$element.is(":hidden")?p.Motion.animateIn(this.$element,this.animationIn,function(){e._updateARIA(!0),this.trigger("on.zf.toggler"),this.find("[data-mutate]").trigger("mutateme.zf.trigger")}):p.Motion.animateOut(this.$element,this.animationOut,function(){e._updateARIA(!1),this.trigger("off.zf.toggler"),this.find("[data-mutate]").trigger("mutateme.zf.trigger")})}},{key:"_updateARIA",value:function t(e){var n=this.$element[0].id;f()('[data-open="'.concat(n,'"], [data-close="').concat(n,'"], [data-toggle="').concat(n,'"]')).attr({"aria-expanded":!!e})}
/**
     * Destroys the instance of Toggler on the element.
     * @function
     */},{key:"_destroy",value:function t(){this.$element.off(".zf.toggler")}}]),i}(m.Plugin);
/* harmony import */y.defaults={
/**
   * Tells the plugin if the element should animated when toggled.
   * @option
   * @type {boolean}
   * @default false
   */
animate:!1}},
/***/"./js/foundation.tooltip.js":
/*!**********************************!*\
  !*** ./js/foundation.tooltip.js ***!
  \**********************************/
/*! exports provided: Tooltip */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function t(e,n,i){var o=c(e,n);if(o){var s=Object.getOwnPropertyDescriptor(o,n);return s.get?s.get.call(i):s.value}})(t,e,n||t)}function c(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function f(t,e){return(f=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Tooltip module.
 * @module foundation.tooltip
 * @requires foundation.util.box
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */n.r(e),
/* harmony export (binding) */n.d(e,"Tooltip",function(){return w});
/* harmony import */var p=n(/*! jquery */"jquery"),m=/* */n.n(p),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),y=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),b,w=
/* */
function(t){function i(){return o(this,i),a(this,d(i).apply(this,arguments))}return h(i,t),r(i,[{key:"_setup",
/**
     * Creates a new instance of a Tooltip.
     * @class
     * @name Tooltip
     * @fires Tooltip#init
     * @param {jQuery} element - jQuery object to attach a tooltip to.
     * @param {Object} options - object to extend the default configuration.
     */
value:function t(e,n){this.$element=e,this.options=m.a.extend({},i.defaults,this.$element.data(),n),this.className="Tooltip",// ie9 back compat
this.isActive=!1,this.isClick=!1,// Triggers init is idempotent, just need to make sure it is initialized
y.Triggers.init(m.a),this._init()}
/**
     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
     * @private
     */},{key:"_init",value:function t(){v.MediaQuery._init();var e=this.$element.attr("aria-describedby")||Object(g.GetYoDigits)(6,"tooltip");this.options.tipText=this.options.tipText||this.$element.attr("title"),this.template=this.options.template?m()(this.options.template):this._buildTemplate(e),this.options.allowHtml?this.template.appendTo(document.body).html(this.options.tipText).hide():this.template.appendTo(document.body).text(this.options.tipText).hide(),this.$element.attr({title:"","aria-describedby":e,"data-yeti-box":e,"data-toggle":e,"data-resize":e}).addClass(this.options.triggerClass),u(d(i.prototype),"_init",this).call(this),this._events()}},{key:"_getDefaultPosition",value:function t(){
// handle legacy classnames
var e=this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);return e?e[0]:"top"}},{key:"_getDefaultAlignment",value:function t(){return"center"}},{key:"_getHOffset",value:function t(){return"left"===this.position||"right"===this.position?this.options.hOffset+this.options.tooltipWidth:this.options.hOffset}},{key:"_getVOffset",value:function t(){return"top"===this.position||"bottom"===this.position?this.options.vOffset+this.options.tooltipHeight:this.options.vOffset}
/**
     * builds the tooltip element, adds attributes, and returns the template.
     * @private
     */},{key:"_buildTemplate",value:function t(e){var n="".concat(this.options.tooltipClass," ").concat(this.options.templateClasses).trim(),i;return m()("<div></div>").addClass(n).attr({role:"tooltip","aria-hidden":!0,"data-is-active":!1,"data-is-focus":!1,id:e})}
/**
     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
     * if the tooltip is larger than the screen width, default to full width - any user selected margin
     * @private
     */},{key:"_setPosition",value:function t(){u(d(i.prototype),"_setPosition",this).call(this,this.$element,this.template)}
/**
     * reveals the tooltip, and fires an event to close any other open tooltips on the page
     * @fires Tooltip#closeme
     * @fires Tooltip#show
     * @function
     */},{key:"show",value:function t(){if("all"!==this.options.showOn&&!v.MediaQuery.is(this.options.showOn))
// console.error('The screen is too small to display this tooltip');
return!1;var e=this;this.template.css("visibility","hidden").show(),this._setPosition(),this.template.removeClass("top bottom left right").addClass(this.position),this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-"+this.alignment),
/**
       * Fires to close all other open tooltips on the page
       * @event Closeme#tooltip
       */
this.$element.trigger("closeme.zf.tooltip",this.template.attr("id")),this.template.attr({"data-is-active":!0,"aria-hidden":!1}),e.isActive=!0,// console.log(this.template);
this.template.stop().hide().css("visibility","").fadeIn(this.options.fadeInDuration,function(){//maybe do stuff?
}),
/**
       * Fires when the tooltip is shown
       * @event Tooltip#show
       */
this.$element.trigger("show.zf.tooltip")}
/**
     * Hides the current tooltip, and resets the positioning class if it was changed due to collision
     * @fires Tooltip#hide
     * @function
     */},{key:"hide",value:function t(){
// console.log('hiding', this.$element.data('yeti-box'));
var e=this;this.template.stop().attr({"aria-hidden":!0,"data-is-active":!1}).fadeOut(this.options.fadeOutDuration,function(){e.isActive=!1,e.isClick=!1}),
/**
       * fires when the tooltip is hidden
       * @event Tooltip#hide
       */
this.$element.trigger("hide.zf.tooltip")}
/**
     * adds event listeners for the tooltip and its anchor
     * TODO combine some of the listeners like focus and mouseenter, etc.
     * @private
     */},{key:"_events",value:function t(){var e=this,n=this.template,i=!1;this.options.disableHover||this.$element.on("mouseenter.zf.tooltip",function(t){e.isActive||(e.timeout=setTimeout(function(){e.show()},e.options.hoverDelay))}).on("mouseleave.zf.tooltip",Object(g.ignoreMousedisappear)(function(t){clearTimeout(e.timeout),(!i||e.isClick&&!e.options.clickOpen)&&e.hide()})),this.options.clickOpen?this.$element.on("mousedown.zf.tooltip",function(t){t.stopImmediatePropagation(),e.isClick||(e.isClick=!0,!e.options.disableHover&&e.$element.attr("tabindex")||e.isActive||e.show())}):this.$element.on("mousedown.zf.tooltip",function(t){t.stopImmediatePropagation(),e.isClick=!0}),this.options.disableForTouch||this.$element.on("tap.zf.tooltip touchend.zf.tooltip",function(t){e.isActive?e.hide():e.show()}),this.$element.on({
// 'toggle.zf.trigger': this.toggle.bind(this),
// 'close.zf.trigger': this.hide.bind(this)
"close.zf.trigger":this.hide.bind(this)}),this.$element.on("focus.zf.tooltip",function(t){if(i=!0,e.isClick)
// If we're not showing open on clicks, we need to pretend a click-launched focus isn't
// a real focus, otherwise on hover and come back we get bad behavior
return e.options.clickOpen||(i=!1),!1;e.show()}).on("focusout.zf.tooltip",function(t){i=!1,e.isClick=!1,e.hide()}).on("resizeme.zf.trigger",function(){e.isActive&&e._setPosition()})}
/**
     * adds a toggle method, in addition to the static show() & hide() functions
     * @function
     */},{key:"toggle",value:function t(){this.isActive?this.hide():this.show()}
/**
     * Destroys an instance of tooltip, removes template element from the view.
     * @function
     */},{key:"_destroy",value:function t(){this.$element.attr("title",this.template.text()).off(".zf.trigger .zf.tooltip").removeClass(this.options.triggerClass).removeClass("top right left bottom").removeAttr("aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"),this.template.remove()}}]),i}(n(/*! ./foundation.positionable */"./js/foundation.positionable.js").Positionable);
/* harmony import */w.defaults={disableForTouch:!1,
/**
   * Time, in ms, before a tooltip should open on hover.
   * @option
   * @type {number}
   * @default 200
   */
hoverDelay:200,
/**
   * Time, in ms, a tooltip should take to fade into view.
   * @option
   * @type {number}
   * @default 150
   */
fadeInDuration:150,
/**
   * Time, in ms, a tooltip should take to fade out of view.
   * @option
   * @type {number}
   * @default 150
   */
fadeOutDuration:150,
/**
   * Disables hover events from opening the tooltip if set to true
   * @option
   * @type {boolean}
   * @default false
   */
disableHover:!1,
/**
   * Optional addtional classes to apply to the tooltip template on init.
   * @option
   * @type {string}
   * @default ''
   */
templateClasses:"",
/**
   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
   * @option
   * @type {string}
   * @default 'tooltip'
   */
tooltipClass:"tooltip",
/**
   * Class applied to the tooltip anchor element.
   * @option
   * @type {string}
   * @default 'has-tip'
   */
triggerClass:"has-tip",
/**
   * Minimum breakpoint size at which to open the tooltip.
   * @option
   * @type {string}
   * @default 'small'
   */
showOn:"small",
/**
   * Custom template to be used to generate markup for tooltip.
   * @option
   * @type {string}
   * @default ''
   */
template:"",
/**
   * Text displayed in the tooltip template on open.
   * @option
   * @type {string}
   * @default ''
   */
tipText:"",touchCloseText:"Tap to close.",
/**
   * Allows the tooltip to remain open if triggered with a click or touch event.
   * @option
   * @type {boolean}
   * @default true
   */
clickOpen:!0,
/**
   * Position of tooltip. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, tooltip will first try to
   * position as defined by data-position and data-alignment, but reposition if
   * it would cause an overflow.  @option
   * @type {boolean}
   * @default false
   */
allowOverlap:!1,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * Less common for tooltips.
   * @option
   * @type {boolean}
   * @default false
   */
allowBottomOverlap:!1,
/**
   * Distance, in pixels, the template should push away from the anchor on the Y axis.
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Distance, in pixels, the template should push away from the anchor on the X axis
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0,
/**
   * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip
   * @option
   * @type {number}
   * @default 14
   */
tooltipHeight:14,
/**
   * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip
   * @option
   * @type {number}
   * @default 12
   */
tooltipWidth:12,
/**
  * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
  * allowing HTML may open yourself up to XSS attacks.
  * @option
  * @type {boolean}
  * @default false
  */
allowHtml:!1}},
/***/"./js/foundation.util.box.js":
/*!***********************************!*\
  !*** ./js/foundation.util.box.js ***!
  \***********************************/
/*! exports provided: Box */
/***/function(t,e,n){"use strict";function i(t,e,n,i,o){return 0===s(t,e,n,i,o)}function s(t,e,n,i,o){var s=d(t),r,a,l,u;if(e){var c=d(e);a=c.height+c.offset.top-(s.offset.top+s.height),r=s.offset.top-c.offset.top,l=s.offset.left-c.offset.left,u=c.width+c.offset.left-(s.offset.left+s.width)}else a=s.windowDims.height+s.windowDims.offset.top-(s.offset.top+s.height),r=s.offset.top-s.windowDims.offset.top,l=s.offset.left-s.windowDims.offset.left,u=s.windowDims.width-(s.offset.left+s.width);return a=o?0:Math.min(a,0),r=Math.min(r,0),l=Math.min(l,0),u=Math.min(u,0),n?l+u:i?r+a:Math.sqrt(r*r+a*a+l*l+u*u)}
/**
 * Uses native methods to return an object of dimension values.
 * @function
 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
 * @returns {Object} - nested object of integer pixel values
 * TODO - if element is window, return only those values.
 */function d(t){if((t=t.length?t[0]:t)===window||t===document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");var e=t.getBoundingClientRect(),n=t.parentNode.getBoundingClientRect(),i=document.body.getBoundingClientRect(),o=window.pageYOffset,s=window.pageXOffset;return{width:e.width,height:e.height,offset:{top:e.top+o,left:e.left+s},parentDims:{width:n.width,height:n.height,offset:{top:n.top+o,left:n.left+s}},windowDims:{width:i.width,height:i.height,offset:{top:o,left:s}}}}
/**
 * Returns an object of top and left integer pixel values for dynamically rendered elements,
 * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where
 * you don't know alignment, but generally from
 * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.
 * @function
 * @param {jQuery} element - jQuery object for the element being positioned.
 * @param {jQuery} anchor - jQuery object for the element's anchor point.
 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
 * TODO alter/rewrite to work with `em` values as well/instead of pixels
 */function o(t,e,n,i,o,s){switch(console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5"),n){case"top":return Object(a.rtl)()?r(t,e,"top","left",i,o,s):r(t,e,"top","right",i,o,s);case"bottom":return Object(a.rtl)()?r(t,e,"bottom","left",i,o,s):r(t,e,"bottom","right",i,o,s);case"center top":return r(t,e,"top","center",i,o,s);case"center bottom":return r(t,e,"bottom","center",i,o,s);case"center left":return r(t,e,"left","center",i,o,s);case"center right":return r(t,e,"right","center",i,o,s);case"left bottom":return r(t,e,"bottom","left",i,o,s);case"right bottom":return r(t,e,"bottom","right",i,o,s);
// Backwards compatibility... this along with the reveal and reveal full
// classes are the only ones that didn't reference anchor
case"center":return{left:$eleDims.windowDims.offset.left+$eleDims.windowDims.width/2-$eleDims.width/2+o,top:$eleDims.windowDims.offset.top+$eleDims.windowDims.height/2-($eleDims.height/2+i)};case"reveal":return{left:($eleDims.windowDims.width-$eleDims.width)/2+o,top:$eleDims.windowDims.offset.top+i};case"reveal full":return{left:$eleDims.windowDims.offset.left,top:$eleDims.windowDims.offset.top};break;default:return{left:Object(a.rtl)()?$anchorDims.offset.left-$eleDims.width+$anchorDims.width-o:$anchorDims.offset.left+o,top:$anchorDims.offset.top+$anchorDims.height+i}}}function r(t,e,n,i,o,s,r){var a=d(t),l=e?d(e):null,u,c;// set position related attribute
switch(n){case"top":u=l.offset.top-(a.height+o);break;case"bottom":u=l.offset.top+l.height+o;break;case"left":c=l.offset.left-(a.width+s);break;case"right":c=l.offset.left+l.width+s;break}// set alignment related attribute
switch(n){case"top":case"bottom":switch(i){case"left":c=l.offset.left+s;break;case"right":c=l.offset.left-a.width+l.width-s;break;case"center":c=r?s:l.offset.left+l.width/2-a.width/2+s;break}break;case"right":case"left":switch(i){case"bottom":u=l.offset.top-o+l.height-a.height;break;case"top":u=l.offset.top+o;break;case"center":u=l.offset.top+o+l.height/2-a.height/2;break}break}return{top:u,left:c}}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Box",function(){return l});
/* harmony import */var a=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),l={ImNotTouchingYou:i,OverlapArea:s,GetDimensions:d,GetOffsets:o,GetExplicitOffsets:r
/**
   * Compares the dimensions of an element to a container and determines collision events with container.
   * @function
   * @param {jQuery} element - jQuery object to test for collisions.
   * @param {jQuery} parent - jQuery object to use as bounding container.
   * @param {Boolean} lrOnly - set to true to check left and right values only.
   * @param {Boolean} tbOnly - set to true to check top and bottom values only.
   * @default if no parent object passed, detects collisions with `window`.
   * @returns {Boolean} - true if collision free, false if a collision in any direction.
   */}},
/***/"./js/foundation.util.imageLoader.js":
/*!*******************************************!*\
  !*** ./js/foundation.util.imageLoader.js ***!
  \*******************************************/
/*! exports provided: onImagesLoaded */
/***/function(t,e,n){"use strict";
/**
 * Runs a callback function when images are fully loaded.
 * @param {Object} images - Image(s) to check if loaded.
 * @param {Func} callback - Function to execute when image is fully loaded.
 */
function i(t,e){function i(){0===--o&&e()}var n=this,o=t.length;0===o&&e(),t.each(function(){
// Check if image is loaded
if(this.complete&&void 0!==this.naturalWidth)i();else{
// If the above check failed, simulate loading on detached element.
var t=new Image,n="load.zf.images error.zf.images";// Still count image as loaded if it finalizes with an error.
s()(t).one(n,function t(e){
// Unbind the event listeners. We're using 'one' but only one of the two events will have fired.
s()(this).off(n,t),i()}),t.src=s()(this).attr("src")}})}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"onImagesLoaded",function(){return i});
/* harmony import */var o=n(/*! jquery */"jquery"),s=/* */n.n(o);
/* harmony import */},
/***/"./js/foundation.util.keyboard.js":
/*!****************************************!*\
  !*** ./js/foundation.util.keyboard.js ***!
  \****************************************/
/*! exports provided: Keyboard */
/***/function(t,e,n){"use strict";// Functions pulled out to be referenceable from internals
function s(t){return!!t&&t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function(){return!(!c()(this).is(":visible")||c()(this).attr("tabindex")<0);//only have visible elements and those that have a tabindex greater or equal 0
})}function r(t){var e=a[t.which||t.keyCode]||String.fromCharCode(t.which).toUpperCase();// Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events
return e=e.replace(/\W+/,""),t.shiftKey&&(e="SHIFT_".concat(e)),t.ctrlKey&&(e="CTRL_".concat(e)),t.altKey&&(e="ALT_".concat(e)),// Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)
e=e.replace(/_$/,"")}
/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */
function i(t){var e={};for(var n in t)e[t[n]]=t[n];return e}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Keyboard",function(){return l});
/* harmony import */var o=n(/*! jquery */"jquery"),c=/* */n.n(o),d=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),a={9:"TAB",13:"ENTER",27:"ESCAPE",32:"SPACE",35:"END",36:"HOME",37:"ARROW_LEFT",38:"ARROW_UP",39:"ARROW_RIGHT",40:"ARROW_DOWN"},h={},l={keys:i(a),
/**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */
parseKey:r,
/**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */
handleKey:function t(e,n,i){var o=h[n],s=this.parseKey(e),r,a,l;if(!o)return console.warn("Component not defined!");if((l=i[a=(
// this component does not differentiate between ltr and rtl
r=void 0===o.ltr?o:
// merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
Object(d.rtl)()?c.a.extend({},o.ltr,o.rtl):c.a.extend({},o.rtl,o.ltr))[s]])&&"function"==typeof l){
// execute function  if exists
var u=l.apply();(i.handled||"function"==typeof i.handled)&&
// execute function when event was handled
i.handled(u)}else(i.unhandled||"function"==typeof i.unhandled)&&
// execute function when event was not handled
i.unhandled()},
/**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */
findFocusable:s,
/**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */
register:function t(e,n){h[e]=n},
// TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
//
/**
   * Traps the focus in the given element.
   * @param  {jQuery} $element  jQuery object to trap the foucs into.
   */
trapFocus:function t(e){var n=s(e),i=n.eq(0),o=n.eq(-1);e.on("keydown.zf.trapfocus",function(t){t.target===o[0]&&"TAB"===r(t)?(t.preventDefault(),i.focus()):t.target===i[0]&&"SHIFT_TAB"===r(t)&&(t.preventDefault(),o.focus())})},
/**
   * Releases the trapped focus from the given element.
   * @param  {jQuery} $element  jQuery object to release the focus for.
   */
releaseFocus:function t(e){e.off("keydown.zf.trapfocus")}};
/* harmony import */},
/***/"./js/foundation.util.mediaQuery.js":
/*!******************************************!*\
  !*** ./js/foundation.util.mediaQuery.js ***!
  \******************************************/
/*! exports provided: MediaQuery */
/***/function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}
// Default set of media queries
// Thank you: https://github.com/sindresorhus/query-string
function r(t){var e={};return"string"!=typeof t?e:// browsers re-quote string style values
(t=t.trim().slice(1,-1))?e=t.split("&").reduce(function(t,e){var n=e.replace(/\+/g," ").split("="),i=n[0],o=n[1];return i=decodeURIComponent(i),// missing `=` should be `null`:
// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
o=void 0===o?null:decodeURIComponent(o),t.hasOwnProperty(i)?Array.isArray(t[i])?t[i].push(o):t[i]=[t[i],o]:t[i]=o,t},{}):e}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"MediaQuery",function(){return l});
/* harmony import */var i=n(/*! jquery */"jquery"),a=/* */n.n(i),s={default:"only screen",landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"};
/* harmony import */ // matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright(c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license
/* eslint-disable */
window.matchMedia||(window.matchMedia=function(){// For browsers that support matchMedium api such as IE 9 and webkit
var e=window.styleMedia||window.media;// For those that don't support matchMedium
if(!e){var i=document.createElement("style"),t=document.getElementsByTagName("script")[0],o=null;i.type="text/css",i.id="matchmediajs-test",t?t.parentNode.insertBefore(i,t):document.head.appendChild(i),// 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
o="getComputedStyle"in window&&window.getComputedStyle(i,null)||i.currentStyle,e={matchMedium:function t(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";// 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
// Test if media query is true or false
return i.styleSheet?i.styleSheet.cssText=n:i.textContent=n,"1px"===o.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
/* eslint-enable */
var l={queries:[],current:"",
/**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */
_init:function t(){var e=this,n;a()("meta.foundation-mq").length||a()('<meta class="foundation-mq">').appendTo(document.head);var i=a()(".foundation-mq").css("font-family"),o;for(var s in o=r(i))o.hasOwnProperty(s)&&e.queries.push({name:s,value:"only screen and (min-width: ".concat(o[s],")")});this.current=this._getCurrentSize(),this._watcher()},
/**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */
atLeast:function t(e){var n=this.get(e);return!!n&&window.matchMedia(n).matches},
/**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
   */
is:function t(e){return 1<(e=e.trim().split(" ")).length&&"only"===e[1]?e[0]===this._getCurrentSize():this.atLeast(e[0])},
/**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */
get:function t(e){for(var n in this.queries)if(this.queries.hasOwnProperty(n)){var i=this.queries[n];if(e===i.name)return i.value}return null},
/**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
_getCurrentSize:function t(){for(var e,n=0;n<this.queries.length;n++){var i=this.queries[n];window.matchMedia(i.value).matches&&(e=i)}return"object"===o(e)?e.name:e},
/**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */
_watcher:function t(){var n=this;a()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery",function(){var t=n._getCurrentSize(),e=n.current;t!==e&&(
// Change the current media query
n.current=t,// Broadcast the media query change on the window
a()(window).trigger("changed.zf.mediaquery",[t,e]))})}}},
/***/"./js/foundation.util.motion.js":
/*!**************************************!*\
  !*** ./js/foundation.util.motion.js ***!
  \**************************************/
/*! exports provided: Move, Motion */
/***/function(t,e,n){"use strict";function i(e,n,i){function o(t){a||(a=t),// console.log(start, ts);
r=t-a,i.apply(n),r<e?s=window.requestAnimationFrame(o,n):(window.cancelAnimationFrame(s),n.trigger("finished.zf.animate",[n]).triggerHandler("finished.zf.animate",[n]))}var s,r,a=null;// console.log('called');
if(0===e)return i.apply(n),void n.trigger("finished.zf.animate",[n]).triggerHandler("finished.zf.animate",[n]);s=window.requestAnimationFrame(o)}
/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */function o(t,e,n,i){// Hides the element (for out animations), resets the element, and runs a callback
function o(){t||e.hide(),s(),i&&i.apply(e)}// Resets transitions and removes motion-specific classes
function s(){e[0].style.transitionDuration=0,e.removeClass("".concat(r," ").concat(a," ").concat(n))}if((e=l()(e).eq(0)).length){var r=t?c[0]:c[1],a=t?d[0]:d[1];// Set up the animation
s(),e.addClass(n).css("transition","none"),requestAnimationFrame(function(){e.addClass(r),t&&e.show()}),// Start the animation
requestAnimationFrame(function(){e[0].offsetWidth,e.css("transition","").addClass(a)}),// Clean up the animation when it finishes
e.one(Object(u.transitionend)(e),o)}}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Move",function(){return i}),
/* harmony export (binding) */n.d(e,"Motion",function(){return r});
/* harmony import */var s=n(/*! jquery */"jquery"),l=/* */n.n(s),u=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),c=["mui-enter","mui-leave"],d=["mui-enter-active","mui-leave-active"],r={animateIn:function t(e,n,i){o(!0,e,n,i)},animateOut:function t(e,n,i){o(!1,e,n,i)}};
/* harmony import */},
/***/"./js/foundation.util.nest.js":
/*!************************************!*\
  !*** ./js/foundation.util.nest.js ***!
  \************************************/
/*! exports provided: Nest */
/***/function(t,e,n){"use strict";n.r(e),
/* harmony export (binding) */n.d(e,"Nest",function(){return o});
/* harmony import */var i=n(/*! jquery */"jquery"),u=/* */n.n(i),o={Feather:function t(e,n){var i=1<arguments.length&&void 0!==n?n:"zf";e.attr("role","menubar");var o=e.find("li").attr({role:"menuitem"}),s="is-".concat(i,"-submenu"),r="".concat(s,"-item"),a="is-".concat(i,"-submenu-parent"),l="accordion"!==i;// Accordions handle their own ARIA attriutes.
o.each(function(){var t=u()(this),e=t.children("ul");e.length&&(t.addClass(a),e.addClass("submenu ".concat(s)).attr({"data-submenu":""}),l&&(t.attr({"aria-haspopup":!0,"aria-label":t.children("a:first").text()}),// Note:  Drilldowns behave differently in how they hide, and so need
// additional attributes.  We should look if this possibly over-generalized
// utility (Nest) is appropriate when we rework menus in 6.4
"drilldown"===i&&t.attr({"aria-expanded":!1})),e.addClass("submenu ".concat(s)).attr({"data-submenu":"",role:"menubar"}),"drilldown"===i&&e.attr({"aria-hidden":!0})),t.parent("[data-submenu]").length&&t.addClass("is-submenu-item ".concat(r))})},Burn:function t(e,n){var//items = menu.find('li'),
i="is-".concat(n,"-submenu"),o="".concat(i,"-item"),s="is-".concat(n,"-submenu-parent");e.find(">li, > li > ul, .menu, .menu > li, [data-submenu] > li").removeClass("".concat(i," ").concat(o," ").concat(s," is-submenu-item submenu is-active")).removeAttr("data-submenu").css("display","")}};
/* harmony import */},
/***/"./js/foundation.util.timer.js":
/*!*************************************!*\
  !*** ./js/foundation.util.timer.js ***!
  \*************************************/
/*! exports provided: Timer */
/***/function(t,e,n){"use strict";function i(e,t,n){var i=this,o=t.duration,
//options is an object for easily adding features later.
s=Object.keys(e.data())[0]||"timer",r=-1,a,l;this.isPaused=!1,this.restart=function(){r=-1,clearTimeout(l),this.start()},this.start=function(){this.isPaused=!1,// if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
clearTimeout(l),r=r<=0?o:r,e.data("paused",!1),a=Date.now(),l=setTimeout(function(){t.infinite&&i.restart(),n&&"function"==typeof n&&n()},r),e.trigger("timerstart.zf.".concat(s))},this.pause=function(){this.isPaused=!0,//if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
clearTimeout(l),e.data("paused",!0);var t=Date.now();r-=t-a,e.trigger("timerpaused.zf.".concat(s))}}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Timer",function(){return i});
/* harmony import */var o=n(/*! jquery */"jquery"),s=/* */n.n(o);
/* harmony import */},
/***/"./js/foundation.util.touch.js":
/*!*************************************!*\
  !*** ./js/foundation.util.touch.js ***!
  \*************************************/
/*! exports provided: Touch */
/***/function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}
//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************
function r(t){// If the touch did not move, consider it as a "tap"
if(this.removeEventListener("touchmove",a),this.removeEventListener("touchend",r),!w){var e=h.a.Event("tap",y||t);h()(this).trigger(e)}y=null,w=b=!1}function a(t){if(h.a.spotSwipe.preventDefault&&t.preventDefault(),b){var e=t.touches[0].pageX,n=t.touches[0].pageY,i=p-e,o=m-n,s;w=!0,v=(new Date).getTime()-g,Math.abs(i)>=h.a.spotSwipe.moveThreshold&&v<=h.a.spotSwipe.timeThreshold&&(s=0<i?"left":"right"),// else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
//   dir = dy > 0 ? 'down' : 'up';
// }
s&&(t.preventDefault(),r.apply(this,arguments),h()(this).trigger(h.a.Event("swipe",t),s).trigger(h.a.Event("swipe".concat(s),t)))}}function l(t){1==t.touches.length&&(p=t.touches[0].pageX,m=t.touches[0].pageY,y=t,w=!(b=!0),g=(new Date).getTime(),this.addEventListener("touchmove",a,!1),this.addEventListener("touchend",r,!1))}function u(){this.addEventListener&&this.addEventListener("touchstart",l,!1)}function c(){this.removeEventListener("touchstart",l)}n.r(e),
/* harmony export (binding) */n.d(e,"Touch",function(){return f});
/* harmony import */var d=n(/*! jquery */"jquery"),h=/* */n.n(d),f={},p,m,g,v,y,b=!1,w=!1,k=
/* */
function(){function e(t){i(this,e),this.version="1.0.0",this.enabled="ontouchstart"in document.documentElement,this.preventDefault=!1,this.moveThreshold=75,this.timeThreshold=200,this.$=t,this._init()}return s(e,[{key:"_init",value:function t(){var e=this.$;e.event.special.swipe={setup:u},e.event.special.tap={setup:u},e.each(["left","up","down","right"],function(){e.event.special["swipe".concat(this)]={setup:function t(){e(this).on("swipe",e.noop)}}})}}]),e}();
/* harmony import */
/****************************************************
 * As far as I can tell, both setupSpotSwipe and    *
 * setupTouchHandler should be idempotent,          *
 * because they directly replace functions &        *
 * values, and do not add event handlers directly.  *
 ****************************************************/
f.setupSpotSwipe=function(t){t.spotSwipe=new k(t)},
/****************************************************
 * Method for adding pseudo drag events to elements *
 ***************************************************/
f.setupTouchHandler=function(i){i.fn.addTouch=function(){this.each(function(t,e){i(e).bind("touchstart touchmove touchend touchcancel",function(t){
//we pass the original event object because the jQuery event
//object is normalized to w3c specs and does not provide the TouchList
n(t)})});var n=function t(e){var n,i=e.changedTouches[0],o,s={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"}[e.type],r;"MouseEvent"in window&&"function"==typeof window.MouseEvent?r=new window.MouseEvent(s,{bubbles:!0,cancelable:!0,screenX:i.screenX,screenY:i.screenY,clientX:i.clientX,clientY:i.clientY}):(r=document.createEvent("MouseEvent")).initMouseEvent(s,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0
/*left*/,null),i.target.dispatchEvent(r)}}},f.init=function(t){void 0===t.spotSwipe&&(f.setupSpotSwipe(t),f.setupTouchHandler(t))}},
/***/"./js/foundation.util.triggers.js":
/*!****************************************!*\
  !*** ./js/foundation.util.triggers.js ***!
  \****************************************/
/*! exports provided: Triggers */
/***/function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function i(e,t,n){var i,o=Array.prototype.slice.call(arguments,3);r()(window).off(t).on(t,function(t){i&&clearTimeout(i),i=setTimeout(function(){n.apply(null,o)},e||10)})}n.r(e),
/* harmony export (binding) */n.d(e,"Triggers",function(){return d});
/* harmony import */var s=n(/*! jquery */"jquery"),r=/* */n.n(s),a=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),l=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),u=function(){for(var t=["WebKit","Moz","O","Ms",""],e=0;e<t.length;e++)if("".concat(t[e],"MutationObserver")in window)return window["".concat(t[e],"MutationObserver")];return!1}(),c=function t(e,n){e.data(n).split(" ").forEach(function(t){r()("#".concat(t))["close"===n?"trigger":"triggerHandler"]("".concat(n,".zf.trigger"),[e])})},d={Listeners:{Basic:{},Global:{}},Initializers:{}};
/* harmony import */d.Listeners.Basic={openListener:function t(){c(r()(this),"open")},closeListener:function t(){var e;r()(this).data("close")?c(r()(this),"close"):r()(this).trigger("close.zf.trigger")},toggleListener:function t(){var e;r()(this).data("toggle")?c(r()(this),"toggle"):r()(this).trigger("toggle.zf.trigger")},closeableListener:function t(e){e.stopPropagation();var n=r()(this).data("closable");""!==n?l.Motion.animateOut(r()(this),n,function(){r()(this).trigger("closed.zf")}):r()(this).fadeOut().trigger("closed.zf")},toggleFocusListener:function t(){var e=r()(this).data("toggle-focus");r()("#".concat(e)).triggerHandler("toggle.zf.trigger",[r()(this)])}},// Elements with [data-open] will reveal a plugin that supports it when clicked.
d.Initializers.addOpenListener=function(t){t.off("click.zf.trigger",d.Listeners.Basic.openListener),t.on("click.zf.trigger","[data-open]",d.Listeners.Basic.openListener)},// Elements with [data-close] will close a plugin that supports it when clicked.
// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
d.Initializers.addCloseListener=function(t){t.off("click.zf.trigger",d.Listeners.Basic.closeListener),t.on("click.zf.trigger","[data-close]",d.Listeners.Basic.closeListener)},// Elements with [data-toggle] will toggle a plugin that supports it when clicked.
d.Initializers.addToggleListener=function(t){t.off("click.zf.trigger",d.Listeners.Basic.toggleListener),t.on("click.zf.trigger","[data-toggle]",d.Listeners.Basic.toggleListener)},// Elements with [data-closable] will respond to close.zf.trigger events.
d.Initializers.addCloseableListener=function(t){t.off("close.zf.trigger",d.Listeners.Basic.closeableListener),t.on("close.zf.trigger","[data-closeable], [data-closable]",d.Listeners.Basic.closeableListener)},// Elements with [data-toggle-focus] will respond to coming in and out of focus
d.Initializers.addToggleFocusListener=function(t){t.off("focus.zf.trigger blur.zf.trigger",d.Listeners.Basic.toggleFocusListener),t.on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",d.Listeners.Basic.toggleFocusListener)},// More Global/complex listeners and triggers
d.Listeners.Global={resizeListener:function t(e){u||
//fallback for IE 9
e.each(function(){r()(this).triggerHandler("resizeme.zf.trigger")}),//trigger all listening elements and signal a resize event
e.attr("data-events","resize")},scrollListener:function t(e){u||
//fallback for IE 9
e.each(function(){r()(this).triggerHandler("scrollme.zf.trigger")}),//trigger all listening elements and signal a scroll event
e.attr("data-events","scroll")},closeMeListener:function t(e,n){var i=e.namespace.split(".")[0],o;r()("[data-".concat(i,"]")).not('[data-yeti-box="'.concat(n,'"]')).each(function(){var t=r()(this);t.triggerHandler("close.zf.trigger",[t])})}// Global, parses whole document.
},d.Initializers.addClosemeListener=function(t){var e=r()("[data-yeti-box]"),n=["dropdown","tooltip","reveal"];if(t&&("string"==typeof t?n.push(t):"object"===o(t)&&"string"==typeof t[0]?n.concat(t):console.error("Plugin names must be strings")),e.length){var i=n.map(function(t){return"closeme.zf.".concat(t)}).join(" ");r()(window).off(i).on(i,d.Listeners.Global.closeMeListener)}},d.Initializers.addResizeListener=function(t){var e=r()("[data-resize]");e.length&&i(t,"resize.zf.trigger",d.Listeners.Global.resizeListener,e)},d.Initializers.addScrollListener=function(t){var e=r()("[data-scroll]");e.length&&i(t,"scroll.zf.trigger",d.Listeners.Global.scrollListener,e)},d.Initializers.addMutationEventsListener=function(t){if(!u)return!1;var e=t.find("[data-resize], [data-scroll], [data-mutate]"),n=function t(e){var n=r()(e[0].target);//trigger the event handler for the element depending on type
switch(e[0].type){case"attributes":"scroll"===n.attr("data-events")&&"data-events"===e[0].attributeName&&n.triggerHandler("scrollme.zf.trigger",[n,window.pageYOffset]),"resize"===n.attr("data-events")&&"data-events"===e[0].attributeName&&n.triggerHandler("resizeme.zf.trigger",[n]),"style"===e[0].attributeName&&(n.closest("[data-mutate]").attr("data-events","mutate"),n.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[n.closest("[data-mutate]")]));break;case"childList":n.closest("[data-mutate]").attr("data-events","mutate"),n.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[n.closest("[data-mutate]")]);break;default:return!1;
//nothing
}};//element callback
if(e.length)
//for each element that needs to listen for resizing, scrolling, or mutation add a single observer
for(var i=0;i<=e.length-1;i++){var o;new u(n).observe(e[i],{attributes:!0,childList:!0,characterData:!1,subtree:!0,attributeFilter:["data-events","style"]})}},d.Initializers.addSimpleListeners=function(){var t=r()(document);d.Initializers.addOpenListener(t),d.Initializers.addCloseListener(t),d.Initializers.addToggleListener(t),d.Initializers.addCloseableListener(t),d.Initializers.addToggleFocusListener(t)},d.Initializers.addGlobalListeners=function(){var t=r()(document);d.Initializers.addMutationEventsListener(t),d.Initializers.addResizeListener(),d.Initializers.addScrollListener(),d.Initializers.addClosemeListener()},d.init=function(t,e){Object(a.onLoad)(t(window),function(){!0!==t.triggersInitialized&&(d.Initializers.addSimpleListeners(),d.Initializers.addGlobalListeners(),t.triggersInitialized=!0)}),e&&(e.Triggers=d,// Legacy included to be backwards compatible for now.
e.IHearYou=d.Initializers.addGlobalListeners)}},
/***/0:
/*!****************************************!*\
  !*** multi ./js/entries/foundation.js ***!
  \****************************************/
/*! no static exports found */
/***/function(t,e,n){t.exports=n(/*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/foundation.js */"./js/entries/foundation.js");
/***/},
/***/jquery:
/*!********************************************************************************************!*\
  !*** external {"root":["jQuery"],"amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/function(t,e){t.exports=n;
/***/}
/******/})}),function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.AOS=e():t.AOS=e()}(this,function(){return function(n){function i(t){if(o[t])return o[t].exports;var e=o[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,i),e.loaded=!0,e.exports}var o={};return i.m=n,i.c=o,i.p="dist/",i(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},s,r,a=i((i(n(1)),n(6))),l,u=i(n(7)),c,d=i(n(8)),h,f=i(n(9)),p,m=i(n(10)),g,v=i(n(11)),y,b=i(n(14)),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},$=function(t){var e;if(0<arguments.length&&void 0!==t&&t&&(k=!0),k)return w=(0,v.default)(w,x),(0,m.default)(w,x.once),w},C=function(){w=(0,b.default)(),$()},_=function(){w.forEach(function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay")})},j=function(t){return!0===t||"mobile"===t&&f.default.mobile()||"phone"===t&&f.default.phone()||"tablet"===t&&f.default.tablet()||"function"==typeof t&&!0===t()},S=function(t){x=o(x,t),w=(0,b.default)();var e=document.all&&!window.atob;return j(x.disable)||e?_():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&-1<["complete","interactive"].indexOf(document.readyState)?$(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){$(!0)}):document.addEventListener(x.startEvent,function(){$(!0)}),window.addEventListener("resize",(0,u.default)($,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)($,x.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,m.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",C),w)};t.exports={init:S,refresh:$,refreshHard:C}},function(t,e){},,,,,function(y,t){(function(t){"use strict";function s(i,o,t){function n(t){var e=h,n=f;return h=f=void 0,y=t,m=i.apply(n,e)}function s(t){return y=t,g=setTimeout(a,o),b?n(t):m}function e(t){var e,n,i=o-(t-v);return w?j(i,p-(t-y)):i}function r(t){var e=t-v,n;return void 0===v||o<=e||e<0||w&&p<=t-y}function a(){var t=S();return r(t)?l(t):void(g=setTimeout(a,e(t)))}function l(t){return g=void 0,k&&h?n(t):(h=f=void 0,m)}function u(){void 0!==g&&clearTimeout(g),h=v=f=g=void(y=0)}function c(){return void 0===g?m:l(S())}function d(){var t=S(),e=r(t);if(h=arguments,f=this,v=t,e){if(void 0===g)return s(v);if(w)return g=setTimeout(a,o),n(v)}return void 0===g&&(g=setTimeout(a,o)),m}var h,f,p,m,g,v,y=0,b=!1,w=!1,k=!0;if("function"!=typeof i)throw new TypeError(C);return o=$(o)||0,x(t)&&(b=!!t.leading,p=(w="maxWait"in t)?_($(t.maxWait)||0,o):p,k="trailing"in t?!!t.trailing:k),d.cancel=u,d.flush=c,d}function e(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError(C);return x(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),s(t,e,{leading:i,maxWait:e,trailing:o})}function x(t){var e=void 0===t?"undefined":o(t);return!!t&&("object"==e||"function"==e)}function n(t){return!!t&&"object"==(void 0===t?"undefined":o(t))}function i(t){return"symbol"==(void 0===t?"undefined":o(t))||n(t)&&v.call(t)==a}function $(t){if("number"==typeof t)return t;if(i(t))return r;if(x(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=x(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=c.test(t);return n||d.test(t)?h(t.slice(2),n?2:8):u.test(t)?r:+t}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C="Expected a function",r=NaN,a="[object Symbol]",l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,h=parseInt,f="object"==(void 0===t?"undefined":o(t))&&t&&t.Object===Object&&t,p="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,m=f||p||Function("return this")(),g,v=Object.prototype.toString,_=Math.max,j=Math.min,S=function(){return m.Date.now()};y.exports=e}).call(t,function(){return this}())},function(v,t){(function(t){"use strict";function e(i,o,t){function n(t){var e=h,n=f;return h=f=void 0,y=t,m=i.apply(n,e)}function s(t){return y=t,g=setTimeout(a,o),b?n(t):m}function e(t){var e,n,i=o-(t-v);return w?j(i,p-(t-y)):i}function r(t){var e=t-v,n;return void 0===v||o<=e||e<0||w&&p<=t-y}function a(){var t=S();return r(t)?l(t):void(g=setTimeout(a,e(t)))}function l(t){return g=void 0,k&&h?n(t):(h=f=void 0,m)}function u(){void 0!==g&&clearTimeout(g),h=v=f=g=void(y=0)}function c(){return void 0===g?m:l(S())}function d(){var t=S(),e=r(t);if(h=arguments,f=this,v=t,e){if(void 0===g)return s(v);if(w)return g=setTimeout(a,o),n(v)}return void 0===g&&(g=setTimeout(a,o)),m}var h,f,p,m,g,v,y=0,b=!1,w=!1,k=!0;if("function"!=typeof i)throw new TypeError(C);return o=$(o)||0,x(t)&&(b=!!t.leading,p=(w="maxWait"in t)?_($(t.maxWait)||0,o):p,k="trailing"in t?!!t.trailing:k),d.cancel=u,d.flush=c,d}function x(t){var e=void 0===t?"undefined":o(t);return!!t&&("object"==e||"function"==e)}function n(t){return!!t&&"object"==(void 0===t?"undefined":o(t))}function i(t){return"symbol"==(void 0===t?"undefined":o(t))||n(t)&&g.call(t)==r}function $(t){if("number"==typeof t)return t;if(i(t))return s;if(x(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=x(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=u.test(t);return n||c.test(t)?d(t.slice(2),n?2:8):l.test(t)?s:+t}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C="Expected a function",s=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,h="object"==(void 0===t?"undefined":o(t))&&t&&t.Object===Object&&t,f="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,p=h||f||Function("return this")(),m,g=Object.prototype.toString,_=Math.max,j=Math.min,S=function(){return p.Date.now()};v.exports=e}).call(t,function(){return this}())},function(t,e){"use strict";function o(t){var e=void 0,n=void 0,i=void 0;for(e=0;e<t.length;e+=1){if((n=t[e]).dataset&&n.dataset.aos)return!0;if(i=n.children&&o(n.children))return!0}return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function n(){return!!s()}function i(t,e){var n=window.document,i,o=new(s())(r);a=e,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function r(t){t&&t.forEach(function(t){var e=Array.prototype.slice.call(t.addedNodes),n=Array.prototype.slice.call(t.removedNodes),i;if(o(e.concat(n)))return a()})}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){};e.default={isSupported:n,ready:i}},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function t(){n(this,t)}return o(t,[{key:"phone",value:function(){var t=i();return!(!s.test(t)&&!r.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=i();return!(!a.test(t)&&!l.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),t}();e.default=new u},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(t,e,n){var i=t.node.getAttribute("data-aos-once");e>t.position?t.node.classList.add("aos-animate"):void 0!==i&&("false"===i||!n&&"true"!==i)&&t.node.classList.remove("aos-animate")},n=function(t,n){var i=window.pageYOffset,o=window.innerHeight;t.forEach(function(t,e){s(t,o+i,n)})};e.default=n},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,s=i(n(12)),r=function(t,n){return t.forEach(function(t,e){t.node.classList.add("aos-init"),t.position=(0,s.default)(t.node,n.offset)}),t};e.default=r},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,r=i(n(13)),s=function(t,e){var n=0,i=0,o=window.innerHeight,s={offset:t.getAttribute("data-aos-offset"),anchor:t.getAttribute("data-aos-anchor"),anchorPlacement:t.getAttribute("data-aos-anchor-placement")};switch(s.offset&&!isNaN(s.offset)&&(i=parseInt(s.offset)),s.anchor&&document.querySelectorAll(s.anchor)&&(t=document.querySelectorAll(s.anchor)[0]),n=(0,r.default)(t).top,s.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=t.offsetHeight/2;break;case"bottom-bottom":n+=t.offsetHeight;break;case"top-center":n+=o/2;break;case"bottom-center":n+=o/2+t.offsetHeight;break;case"center-center":n+=o/2+t.offsetHeight/2;break;case"top-top":n+=o;break;case"bottom-top":n+=t.offsetHeight+o;break;case"center-top":n+=t.offsetHeight/2+o}return s.anchorPlacement||s.offset||isNaN(e)||(i=e),n+i};e.default=s},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){for(var e=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),n+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:n,left:e}};e.default=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(t){return{node:t}})};e.default=n}])}),function(e,n){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return n(e,t)}):"object"==typeof module&&module.exports?module.exports=n(e,require("jquery")):e.jQueryBridget=n(e,e.jQuery)}(window,function(t,e){"use strict";function n(u,o,c){function n(t,s,r){var a,l="$()."+u+'("'+s+'")';return t.each(function(t,e){var n=c.data(e,u);if(n){var i=n[s];if(i&&"_"!=s.charAt(0)){var o=i.apply(n,r);a=void 0===a?o:a}else d(l+" is not a valid method")}else d(u+" not initialized. Cannot call methods, i.e. "+l)}),void 0!==a?a:t}function i(t,i){t.each(function(t,e){var n=c.data(e,u);n?(n.option(i),n._init()):(n=new o(e,i),c.data(e,u,n))})}(c=c||e||t.jQuery)&&(o.prototype.option||(o.prototype.option=function(t){c.isPlainObject(t)&&(this.options=c.extend(!0,this.options,t))}),c.fn[u]=function(t){return"string"!=typeof t?(i(this,t),this):n(this,t,r.call(arguments,1));var e},s(c))}function s(t){!t||t&&t.bridget||(t.bridget=n)}var r=Array.prototype.slice,i=t.console,d=void 0===i?function(){}:function(t){i.error(t)};return s(e||t.jQuery),n}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},i=n[t]=n[t]||[];return-1==i.indexOf(e)&&i.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{},i;return(n[t]=n[t]||{})[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var i=n.indexOf(e);return-1!=i&&n.splice(i,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){n=n.slice(0),e=e||[];for(var i=this._onceEvents&&this._onceEvents[t],o=0;o<n.length;o++){var s=n[o],r;i&&i[s]&&(this.off(t,s),delete i[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function v(t){var e=parseFloat(t),n;return-1==t.indexOf("%")&&!isNaN(e)&&e}function t(){}function y(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<$;e++){var n;t[x[e]]=0}return t}function b(t){var e=getComputedStyle(t);return e||n("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function w(){if(!o){o=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var n=b(t);k=200==Math.round(v(n.width)),i.isBoxSizeOuter=k,e.removeChild(t)}}function i(t){if(w(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=b(t);if("none"==e.display)return y();var n={};n.width=t.offsetWidth,n.height=t.offsetHeight;for(var i=n.isBorderBox="border-box"==e.boxSizing,o=0;o<$;o++){var s=x[o],r=e[s],a=parseFloat(r);n[s]=isNaN(a)?0:a}var l=n.paddingLeft+n.paddingRight,u=n.paddingTop+n.paddingBottom,c=n.marginLeft+n.marginRight,d=n.marginTop+n.marginBottom,h=n.borderLeftWidth+n.borderRightWidth,f=n.borderTopWidth+n.borderBottomWidth,p=i&&k,m=v(e.width);!1!==m&&(n.width=m+(p?0:l+h));var g=v(e.height);return!1!==g&&(n.height=g+(p?0:u+f)),n.innerWidth=n.width-(l+h),n.innerHeight=n.height-(u+f),n.outerWidth=n.width+c,n.outerHeight=n.height+d,n}}var k,n="undefined"==typeof console?t:function(t){console.error(t)},x=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],$=x.length,o=!1;return i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var n=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],n=0;n<e.length;n++){var i,o=e[n]+"MatchesSelector";if(t[o])return o}}();return function(t,e){return t[n](e)}}),function(e,n){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return n(e,t)}):"object"==typeof module&&module.exports?module.exports=n(e,require("desandro-matches-selector")):e.fizzyUIUtils=n(e,e.matchesSelector)}(window,function(u,s){var c={extend:function(t,e){for(var n in e)t[n]=e[n];return t},modulo:function(t,e){return(t%e+e)%e}},n=Array.prototype.slice;c.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?n.call(t):[t];var e},c.removeFrom=function(t,e){var n=t.indexOf(e);-1!=n&&t.splice(n,1)},c.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,s(t,e))return t},c.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.filterFindElements=function(t,i){t=c.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!i)return void o.push(t);s(t,i)&&o.push(t);for(var e=t.querySelectorAll(i),n=0;n<e.length;n++)o.push(e[n])}}),o},c.debounceMethod=function(t,e,i){i=i||100;var o=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s];clearTimeout(t);var e=arguments,n=this;this[s]=setTimeout(function(){o.apply(n,e),delete n[s]},i)}},c.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,n){return e+"-"+n}).toLowerCase()};var d=u.console;return c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l),o="data-"+t,e=document.querySelectorAll("["+o+"]"),n=document.querySelectorAll(".js-"+t),i=c.makeArray(e).concat(c.makeArray(n)),s=o+"-options",r=u.jQuery;i.forEach(function(e){var t,n=e.getAttribute(o)||e.getAttribute(s);try{t=n&&JSON.parse(n)}catch(t){return void(d&&d.error("Error parsing "+o+" on "+e.className+": "+t))}var i=new a(e,t);r&&r.data(e,l,i)})})},c}),function(e,n){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(t){return n(e,t)}):"object"==typeof module&&module.exports?module.exports=n(e,require("get-size")):(e.Flickity=e.Flickity||{},e.Flickity.Cell=n(e,e.getSize))}(window,function(t,e){function n(t,e){this.element=t,this.parent=e,this.create()}var i=n.prototype;return i.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-selected","false"),this.x=0,this.shift=0},i.destroy=function(){this.element.style.position="";var t=this.parent.originSide;this.element.removeAttribute("aria-selected"),this.element.style[t]=""},i.getSize=function(){this.size=e(this.element)},i.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},i.updateTarget=i.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},i.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},i.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},i.remove=function(){this.element.parentNode.removeChild(this.element)},n}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),n=e?e.size[t]:0,i=this.outerWidth-(this.firstMargin+n);this.target=this.x+this.firstMargin+i*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.changeSelected(!0)},e.unselect=function(){this.changeSelected(!1)},e.changeSelected=function(e){var n=e?"add":"remove";this.cells.forEach(function(t){t.element.classList[n]("is-selected"),t.element.setAttribute("aria-selected",e.toString())})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(e,n){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return n(e,t)}):"object"==typeof module&&module.exports?module.exports=n(e,require("fizzy-ui-utils")):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=n(e,e.fizzyUIUtils))}(window,function(t,s){var e={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&1<this.cells.length&&(t=s.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var e=this.getPositionValue(t);this.slider.style.transform=this.isAnimating?"translate3d("+e+",0,0)":"translateX("+e+")";var n=this.slides[0];if(n){var i=-this.x-n.target,o=i/this.slidesWidth;this.dispatchEvent("scroll",null,[o,i])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,2<this.restingFrames&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var n=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,n,1)},_shiftCells:function(t,e,n){for(var i=0;i<t.length;i++){var o=t[i],s=0<e?n:0;o.wrapShift(s),e-=o.size.outerWidth}},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t,e=this.dragX-this.x-this.velocity;this.applyForce(e)}},applySelectedAttraction:function(){var t;if(!(this.isDraggable&&this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var e,n=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(n)}}};return e}),function(r,a){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,n,i,o,s){return a(r,t,e,n,i,o,s)});else if("object"==typeof module&&module.exports)module.exports=a(r,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var t=r.Flickity;r.Flickity=a(r,r.EvEmitter,r.getSize,r.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}}(window,function(i,t,e,a,o,r,n){function s(t,e){for(t=a.makeArray(t);t.length;)e.appendChild(t.shift())}function l(t,e){var n=a.getQueryElement(t);if(n){if(this.element=n,this.element.flickityGUID){var i=f[this.element.flickityGUID];return i.option(e),i}u&&(this.$element=u(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e),this._create()}else d&&d.error("Bad element for Flickity: "+(n||t))}var u=i.jQuery,c=i.getComputedStyle,d=i.console,h=0,f={};l.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},l.createMethods=[];var p=l.prototype;a.extend(p,t.prototype),p._create=function(){var t=this.guid=++h;for(var e in this.element.flickityGUID=t,(f[t]=this).selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&i.addEventListener("resize",this),this.options.on){var n=this.options.on[e];this.on(e,n)}l.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){a.extend(this.options,t)},p.activate=function(){if(!this.isActive){var t;this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),s(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate");var e,n=this.options.initialIndex;e=this.isInitActivated?this.selectedIndex:void 0!==n&&this.cells[n]?n:0,this.select(e,!1,!0),this.isInitActivated=!0,this.dispatchEvent("ready")}},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){var e,n;return this._filterFindCellElements(t).map(function(t){return new o(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(0<t){var n=this.cells[t-1];e=n.x+n.size.outerWidth}for(var i=this.cells.length,o=t;o<i;o++){var s=this.cells[o];s.setPosition(e),e+=s.size.outerWidth,this.maxCellHeight=Math.max(s.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=i?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var i=new r(this);this.slides.push(i);var t,o="left"==this.originSide?"marginRight":"marginLeft",s=this._getCanCellFit();this.cells.forEach(function(t,e){if(i.cells.length){var n=i.outerWidth-i.firstMargin+(t.size.outerWidth-t.size[o]);s.call(this,e,n)||(i.updateTarget(),i=new r(this),this.slides.push(i)),i.addCell(t)}else i.addCell(t)},this),i.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var n="string"==typeof t&&t.match(/^(\d+)%$/),i=n?parseInt(n[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*i}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=e(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var m={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=m[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,n){for(var i=[];0<t;){var o=this.cells[e];if(!o)break;i.push(o),e+=n,t-=o.size.outerWidth}return i},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,
e=t?"marginRight":"marginLeft",n=t?"marginLeft":"marginRight",i=this.slideableWidth-this.getLastCell().size[n],o=i<this.size.innerWidth,s=this.cursorPosition+this.cells[0].size[e],r=i-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){t.target=o?i*this.cellAlign:(t.target=Math.max(t.target,s),Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,n){var i=e?[e].concat(n):n;if(this.emitEvent(t,i),u&&this.$element){var o=t+=this.options.namespaceJQueryEvents?".flickity":"";if(e){var s=u.Event(e);s.type=t,o=s}this.$element.trigger(o,n)}},p.select=function(t,e,n){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=a.modulo(t,this.slides.length)),this.slides[t])){var i=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),n?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=i&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length,n;if(!(this.options.wrapAround&&1<e))return t;var i=a.modulo(t,e),o=Math.abs(i-this.selectedIndex),s=Math.abs(i+e-this.selectedIndex),r=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&s<o?t+=e:!this.isDragSelect&&r<o&&(t-=e),t<0?this.x-=this.slideableWidth:e<=t&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),(this.selectedSlide=t).select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectCell=function(t,e,n){var i=this.queryCell(t);if(i){var o=this.getCellSlideIndex(i);this.select(o,e,n)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){var n,i;if(-1!=this.slides[e].cells.indexOf(t))return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var n=this.cells[e];if(n.element==t)return n}},p.getCells=function(t){t=a.makeArray(t);var n=[];return t.forEach(function(t){var e=this.getCell(t);e&&n.push(e)},this),n},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e||(t=a.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var n=this.slides.length;if(n<=1+2*t)return this.getCellElements();for(var i=[],o=e-t;o<=e+t;o++){var s=this.options.wrapAround?a.modulo(o,n):o,r=this.slides[s];r&&(i=i.concat(r.getCellElements()))}return i},p.queryCell=function(t){return"number"==typeof t?this.cells[t]:("string"==typeof t&&(t=this.element.querySelector(t)),this.getCell(t))},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){this.emitEvent("childUIPointerDown",[t])},p.onresize=function(){this.watchCSS(),this.resize()},a.debounceMethod(l,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=a.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){var t,e;this.options.watchCSS&&(-1!=c(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var n=l.keyboardHandlers[t.keyCode];n&&n.call(this)}},l.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var t=i.pageYOffset;this.element.focus({preventScroll:!0}),i.pageYOffset!=t&&i.scrollTo(i.pageXOffset,t)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),s(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),i.removeEventListener("resize",this),this.emitEvent("destroy"),u&&this.$element&&u.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete f[this.guid]},a.extend(p,n),l.data=function(t){var e=(t=a.getQueryElement(t))&&t.flickityGUID;return e&&f[e]},a.htmlInit(l,"flickity"),u&&u.bridget&&u.bridget("flickity",l),l.setJQuery=function(t){u=t},l.Cell=o,l}),function(e,n){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return n(e,t)}):"object"==typeof module&&module.exports?module.exports=n(e,require("ev-emitter")):e.Unipointer=n(e,e.EvEmitter)}(window,function(o,t){function e(){}function n(){}var i=n.prototype=Object.create(t.prototype);i.bindStartEvent=function(t){this._bindStartEvent(t,!0)},i.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},i._bindStartEvent=function(t,e){var n=(e=void 0===e||e)?"addEventListener":"removeEventListener",i="mousedown";o.PointerEvent?i="pointerdown":"ontouchstart"in o&&(i="touchstart"),t[n](i,this)},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.getTouch=function(t){for(var e=0;e<t.length;e++){var n=t[e];if(n.identifier==this.pointerIdentifier)return n}},i.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},i.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},i.onpointerdown=function(t){this._pointerDown(t,t)},i._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},i.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var s={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return i._bindPostStartEvents=function(t){if(t){var e=s[t.type];e.forEach(function(t){o.addEventListener(t,this)},this),this._boundPointerEvents=e}},i._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){o.removeEventListener(t,this)},this),delete this._boundPointerEvents)},i.onmousemove=function(t){this._pointerMove(t,t)},i.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},i.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},i._pointerMove=function(t,e){this.pointerMove(t,e)},i.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},i.onmouseup=function(t){this._pointerUp(t,t)},i.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},i.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},i._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},i._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},i._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},i.pointerDone=e,i.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},i.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},i._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},i.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},n.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},n}),function(e,n){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return n(e,t)}):"object"==typeof module&&module.exports?module.exports=n(e,require("unipointer")):e.Unidragger=n(e,e.Unipointer)}(window,function(s,t){function e(){}var n=e.prototype=Object.create(t.prototype);n.bindHandles=function(){this._bindHandles(!0)},n.unbindHandles=function(){this._bindHandles(!1)},n._bindHandles=function(t){for(var e=(t=void 0===t||t)?"addEventListener":"removeEventListener",n=t?this._touchActionValue:"",i=0;i<this.handles.length;i++){var o=this.handles[i];this._bindStartEvent(o,t),o[e]("click",this),s.PointerEvent&&(o.style.touchAction=n)}},n._touchActionValue="none",n.pointerDown=function(t,e){var n;this.okayPointerDown(t)&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var o={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return n.okayPointerDown=function(t){var e=o[t.target.nodeName],n=r[t.target.type],i=!e||n;return i||this._pointerReset(),i},n.pointerDownBlur=function(){var t=document.activeElement,e;t&&t.blur&&t!=document.body&&t.blur()},n.pointerMove=function(t,e){var n=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,n]),this._dragMove(t,e,n)},n._dragPointerMove=function(t,e){var n={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(n)&&this._dragStart(t,e),n},n.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},n._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},n._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},n.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},n._dragMove=function(t,e,n){this.isDragging&&this.dragMove(t,e,n)},n.dragMove=function(t,e,n){t.preventDefault(),this.emitEvent("dragMove",[t,e,n])},n._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},n.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},n.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},n._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},n.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},e.getPointerPoint=t.getPointerPoint,e}),function(i,o){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,n){return o(i,t,e,n)}):"object"==typeof module&&module.exports?module.exports=o(i,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):i.Flickity=o(i,i.Flickity,i.Unidragger,i.fizzyUIUtils)}(window,function(i,t,e,a){function o(){return{x:i.pageXOffset,y:i.pageYOffset}}a.extend(t.defaults,{draggable:">1",dragThreshold:3}),t.createMethods.push("_createDrag");var n=t.prototype;a.extend(n,e.prototype),n._touchActionValue="pan-y";var s="createTouch"in document,r=!1;n._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("childUIPointerDown",this._childUIPointerDownDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),s&&!r&&(i.addEventListener("touchmove",function(){}),r=!0)},n.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},n.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},n.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=1<this.slides.length:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},n.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},n.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},n._uiChangeDrag=function(){delete this.isFreeScrolling},n._childUIPointerDownDrag=function(t){t.preventDefault(),this.pointerDownFocus(t)},n.pointerDown=function(t,e){var n;this.isDraggable?this.okayPointerDown(t)&&(this._pointerDownPreventDefault(t),this.pointerDownFocus(t),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=o(),i.addEventListener("scroll",this),this._pointerDownDefault(t,e)):this._pointerDownDefault(t,e)},n._pointerDownDefault=function(t,e){this.pointerDownPointer=e,this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var l={INPUT:!0,TEXTAREA:!0,SELECT:!0};return n.pointerDownFocus=function(t){var e;l[t.target.nodeName]||this.focus()},n._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,n="touch"==t.pointerType,i=l[t.target.nodeName];e||n||i||t.preventDefault()},n.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},n.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},n.pointerDone=function(){i.removeEventListener("scroll",this),delete this.pointerDownScroll},n.dragStart=function(t,e){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),i.removeEventListener("scroll",this),this.dispatchEvent("dragStart",t,[e]))},n.pointerMove=function(t,e){var n=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,n]),this._dragMove(t,e,n)},n.dragMove=function(t,e,n){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var i=this.options.rightToLeft?-1:1;this.options.wrapAround&&(n.x=n.x%this.slideableWidth);var o=this.dragStartPosition+n.x*i;if(!this.options.wrapAround&&this.slides.length){var s=Math.max(-this.slides[0].target,this.dragStartPosition);o=s<o?.5*(o+s):o;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);o=o<r?.5*(o+r):o}this.dragX=o,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,n])}},n.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var n=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var i=this.getRestingPosition();this.isFreeScrolling=-i>this.slides[0].target&&-i<this.getLastSlide().target}else this.options.freeScroll||n!=this.selectedIndex||(n+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(n),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},n.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),n=this._getClosestResting(t,e,1),i=this._getClosestResting(t,e,-1),o;return n.distance<i.distance?n.index:i.index},n._getClosestResting=function(t,e,n){for(var i=this.selectedIndex,o=1/0,s=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};s(e,o)&&(i+=n,o=e,null!==(e=this.getSlideDistance(-t,i)));)e=Math.abs(e);return{distance:o,index:i-n}},n.getSlideDistance=function(t,e){var n=this.slides.length,i=this.options.wrapAround&&1<n,o=i?a.modulo(e,n):e,s=this.slides[o];if(!s)return null;var r=i?this.slideableWidth*Math.floor(e/n):0;return t-(s.target+r)},n.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||100<new Date-this.dragMoveTime)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return 0<t&&0<e?1:t<0&&e<0?-1:0},n.staticClick=function(t,e){var n=this.getParentCell(t.target),i=n&&n.element,o=n&&this.cells.indexOf(n);this.dispatchEvent("staticClick",t,[e,i,o])},n.onscroll=function(){var t=o(),e=this.pointerDownScroll.x-t.x,n=this.pointerDownScroll.y-t.y;(3<Math.abs(e)||3<Math.abs(n))&&this._pointerDone()},t}),function(e,n){"function"==typeof define&&define.amd?define("tap-listener/tap-listener",["unipointer/unipointer"],function(t){return n(e,t)}):"object"==typeof module&&module.exports?module.exports=n(e,require("unipointer")):e.TapListener=n(e,e.Unipointer)}(window,function(l,u){function t(t){this.bindTap(t)}var e=t.prototype=Object.create(u.prototype);return e.bindTap=function(t){t&&(this.unbindTap(),this.tapElement=t,this._bindStartEvent(t,!0))},e.unbindTap=function(){this.tapElement&&(this._bindStartEvent(this.tapElement,!0),delete this.tapElement)},e.pointerUp=function(t,e){if(!this.isIgnoringMouseUp||"mouseup"!=t.type){var n=u.getPointerPoint(e),i=this.tapElement.getBoundingClientRect(),o=l.pageXOffset,s=l.pageYOffset,r;if(n.x>=i.left+o&&n.x<=i.right+o&&n.y>=i.top+s&&n.y<=i.bottom+s&&this.emitEvent("tap",[t,e]),"mouseup"!=t.type){this.isIgnoringMouseUp=!0;var a=this;setTimeout(function(){delete a.isIgnoringMouseUp},400)}}},e.destroy=function(){this.pointerDone(),this.unbindTap()},t}),function(i,o){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(t,e,n){return o(i,t,e,n)}):"object"==typeof module&&module.exports?module.exports=o(i,require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):o(i,i.Flickity,i.TapListener,i.fizzyUIUtils)}(window,function(t,e,n,i){"use strict";function o(t,e){this.direction=t,this.parent=e,this._create()}function s(t){return"string"==typeof t?t:"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z"}var r="http://www.w3.org/2000/svg";o.prototype=Object.create(n.prototype),o.prototype._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var n=this.createSVG();e.appendChild(n),this.on("tap",this.onTap),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindTap(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),n.prototype.destroy.call(this),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(r,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(r,"path"),n=s(this.parent.options.arrowShape);return e.setAttribute("d",n),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},o.prototype.onTap=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.handleEvent=i.handleEvent,o.prototype.onclick=function(t){var e=document.activeElement;e&&e==this.element&&this.onTap(t,t)},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&1<t.length)this.enable();else{var e=t.length?t.length-1:0,n=this.isPrevious?0:e,i;this[this.parent.selectedIndex==n?"disable":"enable"]()}},o.prototype.destroy=function(){this.deactivate()},i.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var a=e.prototype;return a._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},a.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},a.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(i,o){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(t,e,n){return o(i,t,e,n)}):"object"==typeof module&&module.exports?module.exports=o(i,require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):o(i,i.Flickity,i.TapListener,i.fizzyUIUtils)}(window,function(t,e,n,i){function o(t){this.parent=t,this._create()}o.prototype=new n,o.prototype._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.on("tap",this.onTap),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.setDots(),this.bindTap(this.holder),this.parent.element.appendChild(this.holder)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.holder),n.prototype.destroy.call(this)},o.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;0<t?this.addDots(t):t<0&&this.removeDots(-t)},o.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),n=[],i=this.dots.length,o=i+t,s=i;s<o;s++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(s+1)),e.appendChild(r),n.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(n)},o.prototype.removeDots=function(t){var e;this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},o.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},o.prototype.onTap=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var n=this.dots.indexOf(e);this.parent.select(n)}},o.prototype.destroy=function(){this.deactivate()},e.PageDots=o,i.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var s=e.prototype;return s._createPageDots=function(){this.options.pageDots&&(this.pageDots=new o(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},s.activatePageDots=function(){this.pageDots.activate()},s.updateSelectedPageDots=function(){this.pageDots.updateSelected()},s.updatePageDots=function(){this.pageDots.setDots()},s.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=o,e}),function(t,i){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,n){return i(t,e,n)}):"object"==typeof module&&module.exports?module.exports=i(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):i(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,n){function i(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}i.prototype=Object.create(t.prototype),i.prototype.play=function(){if("playing"!=this.state){var t;if(document.hidden)return void document.addEventListener("visibilitychange",this.onVisibilityPlay);this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()}},i.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},i.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},i.prototype.clear=function(){clearTimeout(this.timeout)},i.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},i.prototype.unpause=function(){"paused"==this.state&&this.play()},i.prototype.visibilityChange=function(){var t;this[document.hidden?"pause":"unpause"]()},i.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(n.defaults,{pauseAutoPlayOnHover:!0}),n.createMethods.push("_createPlayer");var o=n.prototype;return o._createPlayer=function(){this.player=new i(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},o.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},o.playPlayer=function(){this.player.play()},o.stopPlayer=function(){this.player.stop()},o.pausePlayer=function(){this.player.pause()},o.unpausePlayer=function(){this.player.unpause()},o.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},o.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},o.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},n.Player=i,n}),function(n,i){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return i(n,t,e)}):"object"==typeof module&&module.exports?module.exports=i(n,require("./flickity"),require("fizzy-ui-utils")):i(n,n.Flickity,n.fizzyUIUtils)}(window,function(t,e,i){function l(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}var n=e.prototype;return n.insert=function(t,e){var n=this._makeCells(t);if(n&&n.length){var i=this.cells.length;e=void 0===e?i:e;var o=l(n),s=e==i;if(s)this.slider.appendChild(o);else{var r=this.cells[e].element;this.slider.insertBefore(o,r)}if(0===e)this.cells=n.concat(this.cells);else if(s)this.cells=this.cells.concat(n);else{var a=this.cells.splice(e,i-e);this.cells=this.cells.concat(n).concat(a)}this._sizeCells(n),this.cellChange(e,!0)}},n.append=function(t){this.insert(t,this.cells.length)},n.prepend=function(t){this.insert(t,0)},n.remove=function(t){var e=this.getCells(t);if(e&&e.length){var n=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);n=Math.min(e,n),i.removeFrom(this.cells,t)},this),this.cellChange(n,!0)}},n.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var n=this.cells.indexOf(e);this.cellChange(n)}},n.cellChange=function(t,e){var n=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var i=this.getCell(n);i&&(this.selectedIndex=this.getCellSlideIndex(i)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(n,i){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return i(n,t,e)}):"object"==typeof module&&module.exports?module.exports=i(n,require("./flickity"),require("fizzy-ui-utils")):i(n,n.Flickity,n.fizzyUIUtils)}(window,function(t,e,r){"use strict";function o(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),n=t.getAttribute("data-flickity-lazyload-src"),i=t.getAttribute("data-flickity-lazyload-srcset");if(e||n||i)return[t]}var o="img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",s=t.querySelectorAll(o);return r.makeArray(s)}function s(t,e){this.img=t,this.flickity=e,this.load()}e.createMethods.push("_createLazyload");var n=e.prototype;return n._createLazyload=function(){this.on("select",this.lazyLoad)},n.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,n=this.getAdjacentCellElements(e),i=[];n.forEach(function(t){var e=o(t);i=i.concat(e)}),i.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=r.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var n=this.flickity.getParentCell(this.img),i=n&&n.element;this.flickity.cellSizeChange(i),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,i)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(i,o){function r(t,e,n){return(e-t)*n+t}i.createMethods.push("_createAsNavFor");var t=i.prototype;return t._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},t.setNavCompanion=function(t){t=o.getQueryElement(t);var e=i.data(t);if(e&&e!=this){this.navCompanion=e;var n=this;this.onNavCompanionSelect=function(){n.navCompanionSelect()},e.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},t.navCompanionSelect=function(t){if(this.navCompanion){var e=this.navCompanion.selectedCells[0],n=this.navCompanion.cells.indexOf(e),i=n+this.navCompanion.selectedCells.length-1,o=Math.floor(r(n,i,this.navCompanion.cellAlign));if(this.selectCell(o,!1,t),this.removeNavSelectedElements(),!(o>=this.cells.length)){var s=this.cells.slice(n,i+1);this.navSelectedElements=s.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},t.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})},t.activateAsNavFor=function(){this.navCompanionSelect(!0)},t.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},t.onNavStaticClick=function(t,e,n,i){"number"==typeof i&&this.navCompanion.selectCell(i)},t.deactivateAsNavFor=function(){this.removeNavSelectedElements()},t.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off(
"staticClick",this.onNavStaticClick),delete this.navCompanion)},i}),function(e,n){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return n(e,t)}):"object"==typeof module&&module.exports?module.exports=n(e,require("ev-emitter")):e.imagesLoaded=n(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function o(t,e){for(var n in e)t[n]=e[n];return t}function s(t){return Array.isArray(t)?t:"object"==typeof t&&"number"==typeof t.length?u.call(t):[t];var e}function r(t,e,n){if(!(this instanceof r))return new r(t,e,n);var i=t;return"string"==typeof t&&(i=document.querySelectorAll(t)),i?(this.elements=s(i),this.options=o({},this.options),"function"==typeof e?n=e:o(this.options,e),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred),void setTimeout(this.check.bind(this))):void l.error("Bad element for imagesLoaded "+(i||t))}function n(t){this.img=t}function i(t,e){this.url=t,this.element=e,this.img=new Image}var a=e.jQuery,l=e.console,u=Array.prototype.slice;r.prototype=Object.create(t.prototype),r.prototype.options={},r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},r.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&c[e]){for(var n=t.querySelectorAll("img"),i=0;i<n.length;i++){var o=n[i];this.addImage(o)}if("string"==typeof this.options.background){var s=t.querySelectorAll(this.options.background);for(i=0;i<s.length;i++){var r=s[i];this.addElementBackgroundImages(r)}}}};var c={1:!0,9:!0,11:!0};return r.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var n=/url\((['"])?(.*?)\1\)/gi,i=n.exec(e.backgroundImage);null!==i;){var o=i&&i[2];o&&this.addBackground(o,t),i=n.exec(e.backgroundImage)}},r.prototype.addImage=function(t){var e=new n(t);this.images.push(e)},r.prototype.addBackground=function(t,e){var n=new i(t,e);this.images.push(n)},r.prototype.check=function(){function e(t,e,n){setTimeout(function(){i.progress(t,e,n)})}var i=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},r.prototype.progress=function(t,e,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&l&&l.log("progress: "+n,t,e)},r.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},n.prototype=Object.create(t.prototype),n.prototype.check=function(){var t;return this.getIsImageComplete()?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},n.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},n.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},n.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},n.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},n.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},i.prototype=Object.create(n.prototype),i.prototype.check=function(){var t;this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},i.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},r.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((a=t).fn.imagesLoaded=function(t,e){var n;return new r(this,t,e).jqDeferred.promise(a(this))})},r.makeJQueryPlugin(),r}),function(n,i){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return i(n,t,e)}):"object"==typeof module&&module.exports?module.exports=i(n,require("flickity"),require("imagesloaded")):n.Flickity=i(n,n.Flickity,n.imagesLoaded)}(window,function(t,e,n){"use strict";e.createMethods.push("_createImagesLoaded");var i=e.prototype;return i._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},i.imagesLoaded=function(){function t(t,e){var n=i.getParentCell(e.img);i.cellSizeChange(n&&n.element),i.options.freeScroll||i.positionSliderAtSelected()}if(this.options.imagesLoaded){var i=this;n(this.slider).on("progress",t)}},e}),function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):t.MotionUI=e(t.jQuery)}(this,function(l){"use strict";
// Polyfill for requestAnimationFrame
function i(t,e,n,i){
// Hides the element (for out animations), resets the element, and runs a callback
function o(){t||e.hide(),s(),i&&i.apply(e)}
// Resets transitions and removes motion-specific classes
function s(){e[0].style.transitionDuration=0,e.removeClass(r+" "+a+" "+n)}if((e=l(e).eq(0)).length){if(null===d)return t?e.show():e.hide(),void i();var r=t?u[0]:u[1],a=t?c[0]:c[1];
// Set up the animation
s(),e.addClass(n),e.css("transition","none"),requestAnimationFrame(function(){e.addClass(r),t&&e.show()}),
// Start the animation
requestAnimationFrame(function(){e[0].offsetWidth,e.css("transition",""),e.addClass(a)}),
// Clean up the animation when it finishes
e.one("transitionend",o)}}
// Polyfill for requestAnimationFrame
!function(){Date.now||(Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var n=t[e];window.requestAnimationFrame=window[n+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(t){var e=Date.now(),n=Math.max(i+16,e);return setTimeout(function(){t(i=n)},n-e)},window.cancelAnimationFrame=clearTimeout}}();var u=["mui-enter","mui-leave"],c=["mui-enter-active","mui-leave-active"],d=function(){var t={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},e=window.document.createElement("div");for(var n in t)if(void 0!==e.style[n])return t[n];return null}(),t;return{animateIn:function(t,e,n){i(!0,t,e,n)},animateOut:function(t,e,n){i(!1,t,e,n)}}}),
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.1.3
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
function t(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("whatInput",[],n):"object"==typeof exports?exports.whatInput=n():e.whatInput=n()}(this,function(){/******/
return function(n){
/******/ // The require function
/******/function i(t){
/******/ // Check if module is in cache
/******/if(o[t])
/******/return o[t].exports;
/******/ // Create a new module (and put it into the cache)
/******/var e=o[t]={
/******/exports:{},
/******/id:t,
/******/loaded:!1
/******/};
/******/ // Execute the module function
/******/
/******/ // Return the exports of the module
/******/return n[t].call(e.exports,e,e.exports,i),
/******/ // Flag the module as loaded
/******/e.loaded=!0,e.exports;
/******/}
/******/ // expose the modules object (__webpack_modules__)
/******/ // webpackBootstrap
/******/ // The module cache
/******/var o={};
/******/ // Load entry module and return exports
/******/return i.m=n,
/******/ // expose the module cache
/******/i.c=o,
/******/ // __webpack_public_path__
/******/i.p="",i(0);
/******/}
/************************************************************************/
/******/([
/* 0 */
/***/function(t,e){"use strict";t.exports=function(){
/*
	   * bail out if there is no document or window
	   * (i.e. in a node/non-DOM environment)
	   *
	   * Return a stubbed API instead
	   */
if("undefined"==typeof document||"undefined"==typeof window)return{
// always return "initial" because no interaction will ever be detected
ask:function t(){return"initial"},
// always return null
element:function t(){return null},
// no-op
ignoreKeys:function t(){},
// no-op
specificKeys:function t(){},
// no-op
registerOnChange:function t(){},
// no-op
unRegisterOnChange:function t(){}};
/*
	   * variables
	   */
// cache document.documentElement
var n=document.documentElement,i=null,u="initial",c=u;
// currently focused dom element
// check for sessionStorage support
// then check for session variables and use if available
try{window.sessionStorage.getItem("what-input")&&(u=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(c=window.sessionStorage.getItem("what-intent"))}catch(t){}
// event buffer timer
var o=null,d=["input","select","textarea"],s=[],h=[16,// shift
17,// control
18,// alt
91,// Windows key / left Apple cmd
93],f=[],p={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch"},m=!1,r=!1,a={x:null,y:null},l={2:"touch",3:"touch",// treat pen like touch
4:"mouse"},g=!1;
// form input types
try{var t=Object.defineProperty({},"passive",{get:function t(){g=!0}});window.addEventListener("test",null,t)}catch(t){}
/*
	   * set up
	   */var e=function t(){
// add correct mouse wheel event mapping to `inputMap`
p[_()]="mouse",v(),b("input"),b("intent")},v=function t(){
// `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
// can only demonstrate potential, but not actual, interaction
// and are treated separately
var e=!!g&&{passive:!0};
// pointer events (mouse, pen, touch)
window.PointerEvent?(window.addEventListener("pointerdown",y),window.addEventListener("pointermove",w)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",y),window.addEventListener("MSPointerMove",w)):(
// mouse events
window.addEventListener("mousedown",y),window.addEventListener("mousemove",w),
// touch events
"ontouchstart"in window&&(window.addEventListener("touchstart",$,e),window.addEventListener("touchend",y))),
// mouse wheel
window.addEventListener(_(),w,e),
// keyboard events
window.addEventListener("keydown",$),window.addEventListener("keyup",$),
// focus events
window.addEventListener("focusin",k),window.addEventListener("focusout",x)},y=function t(e){
// only execute if the event buffer timer isn't running
if(!m){var n=e.which,i=p[e.type];"pointer"===i&&(i=C(e));var o=!f.length&&-1===h.indexOf(n),s=f.length&&-1!==f.indexOf(n),r="keyboard"===i&&n&&(o||s)||"mouse"===i||"touch"===i;if(u!==i&&r){u=i;try{window.sessionStorage.setItem("what-input",u)}catch(t){}b("input")}if(c!==i&&r){
// preserve intent for keyboard typing in form fields
var a=document.activeElement,l;if(a&&a.nodeName&&-1===d.indexOf(a.nodeName.toLowerCase())){c=i;try{window.sessionStorage.setItem("what-intent",c)}catch(t){}b("intent")}}}},b=function t(e){n.setAttribute("data-what"+e,"input"===e?u:c),j(e)},w=function t(e){
// only execute if the event buffer timer isn't running
// or scrolling isn't happening
if(
// test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
T(e),!m&&!r){var n=p[e.type];if("pointer"===n&&(n=C(e)),c!==n){c=n;try{window.sessionStorage.setItem("what-intent",c)}catch(t){}b("intent")}}},k=function t(e){e.target.nodeName?(i=e.target.nodeName.toLowerCase(),n.setAttribute("data-whatelement",i),e.target.classList&&e.target.classList.length&&n.setAttribute("data-whatclasses",e.target.classList.toString().replace(" ",","))):
// If nodeName is undefined, clear the element
// This can happen if click inside an <svg> element.
x()},x=function t(){i=null,n.removeAttribute("data-whatelement"),n.removeAttribute("data-whatclasses")},$=function t(e){
// set the current input
y(e),
// clear the timer if it happens to be running
window.clearTimeout(o),
// set the isBuffering to `true`
m=!0,
// run the timer
o=window.setTimeout(function(){
// if the timer runs out, set isBuffering back to `false`
m=!1},100)},C=function t(e){return"number"==typeof e.pointerType?l[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},_=function t(){var e=void 0;
// Modern browsers support "wheel"
return e="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},j=function t(e){for(var n=0,i=s.length;n<i;n++)s[n].type===e&&s[n].fn.call(void 0,"input"===e?u:c)},S=function t(e){for(var n=0,i=s.length;n<i;n++)if(s[n].fn===e)return n},T=function t(e){a.x!==e.screenX||a.y!==e.screenY?(r=!1,a.x=e.screenX,a.y=e.screenY):r=!0};
/*
	   * events
	   */
/*
	   * api
	   */
/*
	   * init
	   */
// don't start script unless browser cuts the mustard
// (also passes if polyfills are used)
return"addEventListener"in window&&Array.prototype.indexOf&&e(),{
// returns string: the current input type
// opt: 'intent'|'input'
// 'input' (default): returns the same value as the `data-whatinput` attribute
// 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
ask:function t(e){return"intent"===e?c:u},
// returns string: the currently focused element or null
element:function t(){return i},
// overwrites ignored keys with provided array
ignoreKeys:function t(e){h=e},
// overwrites specific char keys to update on
specificKeys:function t(e){f=e},
// attach functions to input and intent "events"
// funct: function to fire on change
// eventType: 'input'|'intent'
registerOnChange:function t(e,n){s.push({fn:e,type:n||"input"})},unRegisterOnChange:function t(e){var n=S(e);(n||0===n)&&s.splice(n,1)}}}()}
/******/])}),function(t,e){"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(t)}):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(t.jQuery)}(this,function(m){!function(){"use strict";function e(t,e){if(this.el=t,this.$el=m(t),this.s=m.extend({},n,e),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=m(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(m(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var n={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};e.prototype.init=function(){var t=this;t.s.preload>t.$items.length&&(t.s.preload=t.$items.length);var e=window.location.hash;0<e.indexOf("lg="+this.s.galleryId)&&(t.index=parseInt(e.split("&slide=")[1],10),m("body").addClass("lg-from-hash"),m("body").hasClass("lg-on")||(setTimeout(function(){t.build(t.index)}),m("body").addClass("lg-on"))),t.s.dynamic?(t.$el.trigger("onBeforeOpen.lg"),t.index=t.s.index||0,m("body").hasClass("lg-on")||setTimeout(function(){t.build(t.index),m("body").addClass("lg-on")})):t.$items.on("click.lgcustom",function(e){try{e.preventDefault(),e.preventDefault()}catch(t){e.returnValue=!1}t.$el.trigger("onBeforeOpen.lg"),t.index=t.s.index||t.$items.index(this),m("body").hasClass("lg-on")||(t.build(t.index),m("body").addClass("lg-on"))})},e.prototype.build=function(t){var e=this;e.structure(),m.each(m.fn.lightGallery.modules,function(t){e.modules[t]=new m.fn.lightGallery.modules[t](e.el)}),e.slide(t,!1,!1,!1),e.s.keyPress&&e.keyPress(),1<e.$items.length?(e.arrow(),setTimeout(function(){e.enableDrag(),e.enableSwipe()},50),e.s.mousewheel&&e.mousewheel()):e.$slide.on("click.lg",function(){e.$el.trigger("onSlideClick.lg")}),e.counter(),e.closeGallery(),e.$el.trigger("onAfterOpen.lg"),e.$outer.on("mousemove.lg click.lg touchstart.lg",function(){e.$outer.removeClass("lg-hide-items"),clearTimeout(e.hideBartimeout),e.hideBartimeout=setTimeout(function(){e.$outer.addClass("lg-hide-items")},e.s.hideBarsDelay)}),e.$outer.trigger("mousemove.lg")},e.prototype.structure=function(){var t,e="",n="",i=0,o="",s=this;for(m("body").append('<div class="lg-backdrop"></div>'),m(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),i=0;i<this.$items.length;i++)e+='<div class="lg-item"></div>';if(this.s.controls&&1<this.$items.length&&(n='<div class="lg-actions"><button class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(o='<div class="lg-sub-html"></div>'),t='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+e+'</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>'+n+o+"</div></div>",m("body").append(t),this.$outer=m(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),s.setTop(),m(window).on("resize.lg orientationchange.lg",function(){setTimeout(function(){s.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&1<this.$items.length&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var r=this.$outer.find(".lg-inner");r.css("transition-timing-function",this.s.cssEasing),r.css("transition-duration",this.s.speed+"ms")}setTimeout(function(){m(".lg-backdrop").addClass("in")}),setTimeout(function(){s.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=m(window).scrollTop()},e.prototype.setTop=function(){if("100%"!==this.s.height){var t=m(window).height(),e=(t-parseInt(this.s.height,10))/2,n=this.$outer.find(".lg");t>=parseInt(this.s.height,10)?n.css("top",e+"px"):n.css("top","0px")}},e.prototype.doCss=function(){return!!function(){var t=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],e=document.documentElement,n=0;for(n=0;n<t.length;n++)if(t[n]in e.style)return!0}()},e.prototype.isVideo=function(t,e){var n;if(n=this.s.dynamic?this.s.dynamicEl[e].html:this.$items.eq(e).attr("data-html"),!t)return n?{html5:!0}:(console.error("lightGallery :- data-src is not pvovided on slide item "+(e+1)+". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),!1);var i=t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),o=t.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),s=t.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),r=t.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return i?{youtube:i}:o?{vimeo:o}:s?{dailymotion:s}:r?{vk:r}:void 0},e.prototype.counter=function(){this.s.counter&&m(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},e.prototype.addHtml=function(t){var e,n,i=null;if(this.s.dynamic?this.s.dynamicEl[t].subHtmlUrl?e=this.s.dynamicEl[t].subHtmlUrl:i=this.s.dynamicEl[t].subHtml:(n=this.$items.eq(t)).attr("data-sub-html-url")?e=n.attr("data-sub-html-url"):(i=n.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!i&&(i=n.attr("title")||n.find("img").first().attr("alt"))),!e)if(null!=i){var o=i.substring(0,1);"."!==o&&"#"!==o||(i=this.s.subHtmlSelectorRelative&&!this.s.dynamic?n.find(i).html():m(i).html())}else i="";".lg-sub-html"===this.s.appendSubHtmlTo?e?this.$outer.find(this.s.appendSubHtmlTo).load(e):this.$outer.find(this.s.appendSubHtmlTo).html(i):e?this.$slide.eq(t).load(e):this.$slide.eq(t).append(i),null!=i&&(""===i?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[t])},e.prototype.preload=function(t){var e=1,n=1;for(e=1;e<=this.s.preload&&!(e>=this.$items.length-t);e++)this.loadContent(t+e,!1,0);for(n=1;n<=this.s.preload&&!(t-n<0);n++)this.loadContent(t-n,!1,0)},e.prototype.loadContent=function(e,t,n){var i,a,o,s,r,l,u=this,c=!1,d=function(t){for(var e=[],n=[],i=0;i<t.length;i++){var o=t[i].split(" ");""===o[0]&&o.splice(0,1),n.push(o[0]),e.push(o[1])}for(var s=m(window).width(),r=0;r<e.length;r++)if(parseInt(e[r],10)>s){a=n[r];break}};r=u.s.dynamic?(u.s.dynamicEl[e].poster&&(c=!0,o=u.s.dynamicEl[e].poster),l=u.s.dynamicEl[e].html,a=u.s.dynamicEl[e].src,u.s.dynamicEl[e].responsive&&d(u.s.dynamicEl[e].responsive.split(",")),s=u.s.dynamicEl[e].srcset,u.s.dynamicEl[e].sizes):(u.$items.eq(e).attr("data-poster")&&(c=!0,o=u.$items.eq(e).attr("data-poster")),l=u.$items.eq(e).attr("data-html"),a=u.$items.eq(e).attr("href")||u.$items.eq(e).attr("data-src"),u.$items.eq(e).attr("data-responsive")&&d(u.$items.eq(e).attr("data-responsive").split(",")),s=u.$items.eq(e).attr("data-srcset"),u.$items.eq(e).attr("data-sizes"));var h=!1;u.s.dynamic?u.s.dynamicEl[e].iframe&&(h=!0):"true"===u.$items.eq(e).attr("data-iframe")&&(h=!0);var f=u.isVideo(a,e);if(!u.$slide.eq(e).hasClass("lg-loaded")){if(h)u.$slide.eq(e).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:'+u.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+a+'"  allowfullscreen="true"></iframe></div></div>');else if(c){var p="";p=f&&f.youtube?"lg-has-youtube":f&&f.vimeo?"lg-has-vimeo":"lg-has-html5",u.$slide.eq(e).prepend('<div class="lg-video-cont '+p+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+o+'" /></div></div>')}else f?(u.$slide.eq(e).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),u.$el.trigger("hasVideo.lg",[e,a,l])):u.$slide.eq(e).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+a+'" /></div>');if(u.$el.trigger("onAferAppendSlide.lg",[e]),i=u.$slide.eq(e).find(".lg-object"),r&&i.attr("sizes",r),s){i.attr("srcset",s);try{picturefill({elements:[i[0]]})}catch(t){console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&u.addHtml(e),u.$slide.eq(e).addClass("lg-loaded")}u.$slide.eq(e).find(".lg-object").on("load.lg error.lg",function(){var t=0;n&&!m("body").hasClass("lg-from-hash")&&(t=n),setTimeout(function(){u.$slide.eq(e).addClass("lg-complete"),u.$el.trigger("onSlideItemLoad.lg",[e,n||0])},t)}),f&&f.html5&&!c&&u.$slide.eq(e).addClass("lg-complete"),!0===t&&(u.$slide.eq(e).hasClass("lg-complete")?u.preload(e):u.$slide.eq(e).find(".lg-object").on("load.lg error.lg",function(){u.preload(e)}))},e.prototype.slide=function(t,e,n,i){var o=this.$outer.find(".lg-current").index(),s=this;if(!s.lGalleryOn||o!==t){var r=this.$slide.length,a=s.lGalleryOn?this.s.speed:0;if(!s.lgBusy){var l,u,c;if(this.s.download)(l=s.s.dynamic?!1!==s.s.dynamicEl[t].downloadUrl&&(s.s.dynamicEl[t].downloadUrl||s.s.dynamicEl[t].src):"false"!==s.$items.eq(t).attr("data-download-url")&&(s.$items.eq(t).attr("data-download-url")||s.$items.eq(t).attr("href")||s.$items.eq(t).attr("data-src")))?(m("#lg-download").attr("href",l),s.$outer.removeClass("lg-hide-download")):s.$outer.addClass("lg-hide-download");if(this.$el.trigger("onBeforeSlide.lg",[o,t,e,n]),s.lgBusy=!0,clearTimeout(s.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){s.addHtml(t)},a),this.arrowDisable(t),i||(t<o?i="prev":o<t&&(i="next")),e)this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),2<r?(u=t-1,c=t+1,0===t&&o===r-1?(c=0,u=r-1):t===r-1&&0===o&&(c=0,u=r-1)):(u=0,c=1),"prev"===i?s.$slide.eq(c).addClass("lg-next-slide"):s.$slide.eq(u).addClass("lg-prev-slide"),s.$slide.eq(t).addClass("lg-current");else s.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),"prev"===i?(this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(o).addClass("lg-next-slide")):(this.$slide.eq(t).addClass("lg-next-slide"),this.$slide.eq(o).addClass("lg-prev-slide")),setTimeout(function(){s.$slide.removeClass("lg-current"),s.$slide.eq(t).addClass("lg-current"),s.$outer.removeClass("lg-no-trans")},50);s.lGalleryOn?(setTimeout(function(){s.loadContent(t,!0,0)},this.s.speed+50),setTimeout(function(){s.lgBusy=!1,s.$el.trigger("onAfterSlide.lg",[o,t,e,n])},this.s.speed)):(s.loadContent(t,!0,s.s.backdropDuration),s.lgBusy=!1,s.$el.trigger("onAfterSlide.lg",[o,t,e,n])),s.lGalleryOn=!0,this.s.counter&&m("#lg-counter-current").text(t+1)}s.index=t}},e.prototype.goToNextSlide=function(t){var e=this,n=e.s.loop;t&&e.$slide.length<3&&(n=!1),e.lgBusy||(e.index+1<e.$slide.length?(e.index++,e.$el.trigger("onBeforeNextSlide.lg",[e.index]),e.slide(e.index,t,!1,"next")):n?(e.index=0,e.$el.trigger("onBeforeNextSlide.lg",[e.index]),e.slide(e.index,t,!1,"next")):e.s.slideEndAnimatoin&&!t&&(e.$outer.addClass("lg-right-end"),setTimeout(function(){e.$outer.removeClass("lg-right-end")},400)))},e.prototype.goToPrevSlide=function(t){var e=this,n=e.s.loop;t&&e.$slide.length<3&&(n=!1),e.lgBusy||(0<e.index?(e.index--,e.$el.trigger("onBeforePrevSlide.lg",[e.index,t]),e.slide(e.index,t,!1,"prev")):n?(e.index=e.$items.length-1,e.$el.trigger("onBeforePrevSlide.lg",[e.index,t]),e.slide(e.index,t,!1,"prev")):e.s.slideEndAnimatoin&&!t&&(e.$outer.addClass("lg-left-end"),setTimeout(function(){e.$outer.removeClass("lg-left-end")},400)))},e.prototype.keyPress=function(){var e=this;1<this.$items.length&&m(window).on("keyup.lg",function(t){1<e.$items.length&&(37===t.keyCode&&(t.preventDefault(),e.goToPrevSlide()),39===t.keyCode&&(t.preventDefault(),e.goToNextSlide()))}),m(window).on("keydown.lg",function(t){!0===e.s.escKey&&27===t.keyCode&&(t.preventDefault(),e.$outer.hasClass("lg-thumb-open")?e.$outer.removeClass("lg-thumb-open"):e.destroy())})},e.prototype.arrow=function(){var t=this;this.$outer.find(".lg-prev").on("click.lg",function(){t.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){t.goToNextSlide()})},e.prototype.arrowDisable=function(t){!this.s.loop&&this.s.hideControlOnEnd&&(t+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),0<t?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},e.prototype.setTranslate=function(t,e,n){this.s.useLeft?t.css("left",e):t.css({transform:"translate3d("+e+"px, "+n+"px, 0px)"})},e.prototype.touchMove=function(t,e){var n=e-t;15<Math.abs(n)&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),n,0),this.setTranslate(m(".lg-prev-slide"),-this.$slide.eq(this.index).width()+n,0),this.setTranslate(m(".lg-next-slide"),this.$slide.eq(this.index).width()+n,0))},e.prototype.touchEnd=function(t){var e=this;"lg-slide"!==e.s.mode&&e.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){e.$outer.removeClass("lg-dragging"),t<0&&Math.abs(t)>e.s.swipeThreshold?e.goToNextSlide(!0):0<t&&Math.abs(t)>e.s.swipeThreshold?e.goToPrevSlide(!0):Math.abs(t)<5&&e.$el.trigger("onSlideClick.lg"),e.$slide.removeAttr("style")}),setTimeout(function(){e.$outer.hasClass("lg-dragging")||"lg-slide"===e.s.mode||e.$outer.removeClass("lg-slide")},e.s.speed+100)},e.prototype.enableSwipe=function(){var e=this,n=0,i=0,o=!1;e.s.enableSwipe&&e.doCss()&&(e.$slide.on("touchstart.lg",function(t){e.$outer.hasClass("lg-zoomed")||e.lgBusy||(t.preventDefault(),e.manageSwipeClass(),n=t.originalEvent.targetTouches[0].pageX)}),e.$slide.on("touchmove.lg",function(t){e.$outer.hasClass("lg-zoomed")||(t.preventDefault(),i=t.originalEvent.targetTouches[0].pageX,e.touchMove(n,i),o=!0)}),e.$slide.on("touchend.lg",function(){e.$outer.hasClass("lg-zoomed")||(o?(o=!1,e.touchEnd(i-n)):e.$el.trigger("onSlideClick.lg"))}))},e.prototype.enableDrag=function(){var e=this,n=0,i=0,o=!1,s=!1;e.s.enableDrag&&e.doCss()&&(e.$slide.on("mousedown.lg",function(t){e.$outer.hasClass("lg-zoomed")||e.lgBusy||m(t.target).text().trim()||(t.preventDefault(),e.manageSwipeClass(),n=t.pageX,o=!0,e.$outer.scrollLeft+=1,e.$outer.scrollLeft-=1,e.$outer.removeClass("lg-grab").addClass("lg-grabbing"),e.$el.trigger("onDragstart.lg"))}),m(window).on("mousemove.lg",function(t){o&&(s=!0,i=t.pageX,e.touchMove(n,i),e.$el.trigger("onDragmove.lg"))}),m(window).on("mouseup.lg",function(t){s?(s=!1,e.touchEnd(i-n),e.$el.trigger("onDragend.lg")):(m(t.target).hasClass("lg-object")||m(t.target).hasClass("lg-video-play"))&&e.$el.trigger("onSlideClick.lg"),o&&(o=!1,e.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},e.prototype.manageSwipeClass=function(){var t=this.index+1,e=this.index-1;this.s.loop&&2<this.$slide.length&&(0===this.index?e=this.$slide.length-1:this.index===this.$slide.length-1&&(t=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),-1<e&&this.$slide.eq(e).addClass("lg-prev-slide"),this.$slide.eq(t).addClass("lg-next-slide")},e.prototype.mousewheel=function(){var e=this;e.$outer.on("mousewheel.lg",function(t){t.deltaY&&(0<t.deltaY?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault())})},e.prototype.closeGallery=function(){var e=this,n=!1;this.$outer.find(".lg-close").on("click.lg",function(){e.destroy()}),e.s.closable&&(e.$outer.on("mousedown.lg",function(t){n=!!(m(t.target).is(".lg-outer")||m(t.target).is(".lg-item ")||m(t.target).is(".lg-img-wrap"))}),e.$outer.on("mousemove.lg",function(){n=!1}),e.$outer.on("mouseup.lg",function(t){(m(t.target).is(".lg-outer")||m(t.target).is(".lg-item ")||m(t.target).is(".lg-img-wrap")&&n)&&(e.$outer.hasClass("lg-dragging")||e.destroy())}))},e.prototype.destroy=function(t){var e=this;t||(e.$el.trigger("onBeforeClose.lg"),m(window).scrollTop(e.prevScrollTop)),t&&(e.s.dynamic||this.$items.off("click.lg click.lgcustom"),m.removeData(e.el,"lightGallery")),this.$el.off(".lg.tm"),m.each(m.fn.lightGallery.modules,function(t){e.modules[t]&&e.modules[t].destroy()}),this.lGalleryOn=!1,clearTimeout(e.hideBartimeout),this.hideBartimeout=!1,m(window).off(".lg"),m("body").removeClass("lg-on lg-from-hash"),e.$outer&&e.$outer.removeClass("lg-visible"),m(".lg-backdrop").removeClass("in"),setTimeout(function(){e.$outer&&e.$outer.remove(),m(".lg-backdrop").remove(),t||e.$el.trigger("onCloseAfter.lg")},e.s.backdropDuration+50)},m.fn.lightGallery=function(t){return this.each(function(){if(m.data(this,"lightGallery"))try{m(this).data("lightGallery").init()}catch(t){console.error("lightGallery has not initiated properly")}else m.data(this,"lightGallery",new e(this,t))})},m.fn.lightGallery.modules={}}()}),function(t,e){"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(t)}):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(t.jQuery)}(this,function(h){!function(){"use strict";function t(t,e,n,i){var o=this;if(o.core.$slide.eq(e).find(".lg-video").append(o.loadVideo(n,"lg-object",!0,e,i)),i)if(o.core.s.videojs)try{videojs(o.core.$slide.eq(e).find(".lg-html5").get(0),o.core.s.videojsOptions,function(){!o.videoLoaded&&o.core.s.autoplayFirstVideo&&this.play()})}catch(t){console.error("Make sure you have included videojs")}else!o.videoLoaded&&o.core.s.autoplayFirstVideo&&o.core.$slide.eq(e).find(".lg-html5").get(0).play()}function e(t,e){var n=this.core.$slide.eq(e).find(".lg-video-cont");n.hasClass("lg-has-iframe")||(n.css("max-width",this.core.s.videoMaxWidth),this.videoLoaded=!0)}function n(t,e,n){var i=this,o=i.core.$slide.eq(e),s=o.find(".lg-youtube").get(0),r=o.find(".lg-vimeo").get(0),a=o.find(".lg-dailymotion").get(0),l=o.find(".lg-vk").get(0),u=o.find(".lg-html5").get(0),c;if(s)s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");else if(r)try{$f(r).api("pause")}catch(t){console.error("Make sure you have included froogaloop2 js")}else if(a)a.contentWindow.postMessage("pause","*");else if(u)if(i.core.s.videojs)try{videojs(u).pause()}catch(t){console.error("Make sure you have included videojs")}else u.pause();l&&h(l).attr("src",h(l).attr("src").replace("&autoplay","&noplay")),c=i.core.s.dynamic?i.core.s.dynamicEl[n].src:i.core.$items.eq(n).attr("href")||i.core.$items.eq(n).attr("data-src");var d=i.core.isVideo(c,n)||{};(d.youtube||d.vimeo||d.dailymotion||d.vk)&&i.core.$outer.addClass("lg-hide-download")}var i={videoMaxWidth:"855px",autoplayFirstVideo:!0,youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,vkPlayerParams:!1,videojs:!1,videojsOptions:{}},o=function(t){return this.core=h(t).data("lightGallery"),this.$el=h(t),this.core.s=h.extend({},i,this.core.s),this.videoLoaded=!1,this.init(),this};o.prototype.init=function(){var i=this;i.core.$el.on("hasVideo.lg.tm",t.bind(this)),i.core.$el.on("onAferAppendSlide.lg.tm",e.bind(this)),i.core.doCss()&&1<i.core.$items.length&&(i.core.s.enableSwipe||i.core.s.enableDrag)?i.core.$el.on("onSlideClick.lg.tm",function(){var t=i.core.$slide.eq(i.core.index);i.loadVideoOnclick(t)}):i.core.$slide.on("click.lg",function(){i.loadVideoOnclick(h(this))}),i.core.$el.on("onBeforeSlide.lg.tm",n.bind(this)),i.core.$el.on("onAfterSlide.lg.tm",function(t,e){i.core.$slide.eq(e).removeClass("lg-video-playing")}),i.core.s.autoplayFirstVideo&&i.core.$el.on("onAferAppendSlide.lg.tm",function(t,e){if(!i.core.lGalleryOn){var n=i.core.$slide.eq(e);setTimeout(function(){i.loadVideoOnclick(n)},100)}})},o.prototype.loadVideo=function(t,e,n,i,o){var s="",r=1,a="",l=this.core.isVideo(t,i)||{};if(n&&(r=this.videoLoaded?0:this.core.s.autoplayFirstVideo?1:0),l.youtube)a="?wmode=opaque&autoplay="+r+"&enablejsapi=1",this.core.s.youtubePlayerParams&&(a=a+"&"+h.param(this.core.s.youtubePlayerParams)),s='<iframe class="lg-video-object lg-youtube '+e+'" width="560" height="315" src="//www.youtube.com/embed/'+l.youtube[1]+a+'" frameborder="0" allowfullscreen></iframe>';else if(l.vimeo)a="?autoplay="+r+"&api=1",this.core.s.vimeoPlayerParams&&(a=a+"&"+h.param(this.core.s.vimeoPlayerParams)),s='<iframe class="lg-video-object lg-vimeo '+e+'" width="560" height="315"  src="//player.vimeo.com/video/'+l.vimeo[1]+a+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if(l.dailymotion)a="?wmode=opaque&autoplay="+r+"&api=postMessage",this.core.s.dailymotionPlayerParams&&(a=a+"&"+h.param(this.core.s.dailymotionPlayerParams)),s='<iframe class="lg-video-object lg-dailymotion '+e+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+l.dailymotion[1]+a+'" frameborder="0" allowfullscreen></iframe>';else if(l.html5){var u=o.substring(0,1);"."!==u&&"#"!==u||(o=h(o).html()),s=o}else l.vk&&(a="&autoplay="+r,this.core.s.vkPlayerParams&&(a=a+"&"+h.param(this.core.s.vkPlayerParams)),s='<iframe class="lg-video-object lg-vk '+e+'" width="560" height="315" src="//vk.com/video_ext.php?'+l.vk[1]+a+'" frameborder="0" allowfullscreen></iframe>');return s},o.prototype.loadVideoOnclick=function(n){var i=this;if(n.find(".lg-object").hasClass("lg-has-poster")&&n.find(".lg-object").is(":visible"))if(n.hasClass("lg-has-video")){var t=n.find(".lg-youtube").get(0),e=n.find(".lg-vimeo").get(0),o=n.find(".lg-dailymotion").get(0),s=n.find(".lg-html5").get(0);if(t)t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");else if(e)try{$f(e).api("play")}catch(n){console.error("Make sure you have included froogaloop2 js")}else if(o)o.contentWindow.postMessage("play","*");else if(s)if(i.core.s.videojs)try{videojs(s).play()}catch(n){console.error("Make sure you have included videojs")}else s.play();n.addClass("lg-video-playing")}else{n.addClass("lg-video-playing lg-has-video");var r,a,l=function(t,e){if(n.find(".lg-video").append(i.loadVideo(t,"",!1,i.core.index,e)),e)if(i.core.s.videojs)try{videojs(i.core.$slide.eq(i.core.index).find(".lg-html5").get(0),i.core.s.videojsOptions,function(){this.play()})}catch(t){console.error("Make sure you have included videojs")}else i.core.$slide.eq(i.core.index).find(".lg-html5").get(0).play()};l(r,a=i.core.s.dynamic?(r=i.core.s.dynamicEl[i.core.index].src,i.core.s.dynamicEl[i.core.index].html):(r=i.core.$items.eq(i.core.index).attr("href")||i.core.$items.eq(i.core.index).attr("data-src"),i.core.$items.eq(i.core.index).attr("data-html")));var u=n.find(".lg-object");n.find(".lg-video").append(u),n.find(".lg-video-object").hasClass("lg-html5")||(n.removeClass("lg-complete"),n.find(".lg-video-object").on("load.lg error.lg",function(){n.addClass("lg-complete")}))}},o.prototype.destroy=function(){this.videoLoaded=!1},h.fn.lightGallery.modules.video=o}()}),function(t,e){"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(t)}):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(this,function(n){!function(){"use strict";var e={autoplay:!1,pause:5e3,progressBar:!0,fourceAutoplay:!1,autoplayControls:!0,appendAutoplayControlsTo:".lg-toolbar"},t=function(t){return this.core=n(t).data("lightGallery"),this.$el=n(t),!(this.core.$items.length<2)&&(this.core.s=n.extend({},e,this.core.s),this.interval=!1,this.fromAuto=!0,this.canceledOnTouch=!1,this.fourceAutoplayTemp=this.core.s.fourceAutoplay,this.core.doCss()||(this.core.s.progressBar=!1),this.init(),this)};t.prototype.init=function(){var t=this;t.core.s.autoplayControls&&t.controls(),t.core.s.progressBar&&t.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),t.progress(),t.core.s.autoplay&&t.$el.one("onSlideItemLoad.lg.tm",function(){t.startlAuto()}),t.$el.on("onDragstart.lg.tm touchstart.lg.tm",function(){t.interval&&(t.cancelAuto(),t.canceledOnTouch=!0)}),t.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",function(){!t.interval&&t.canceledOnTouch&&(t.startlAuto(),t.canceledOnTouch=!1)})},t.prototype.progress=function(){var t,e,n=this;n.$el.on("onBeforeSlide.lg.tm",function(){n.core.s.progressBar&&n.fromAuto&&(t=n.core.$outer.find(".lg-progress-bar"),e=n.core.$outer.find(".lg-progress"),n.interval&&(e.removeAttr("style"),t.removeClass("lg-start"),setTimeout(function(){e.css("transition","width "+(n.core.s.speed+n.core.s.pause)+"ms ease 0s"),t.addClass("lg-start")},20))),n.fromAuto||n.core.s.fourceAutoplay||n.cancelAuto(),n.fromAuto=!1})},t.prototype.controls=function(){var t=this,e='<span class="lg-autoplay-button lg-icon"></span>';n(this.core.s.appendAutoplayControlsTo).append(e),t.core.$outer.find(".lg-autoplay-button").on("click.lg",function(){n(t.core.$outer).hasClass("lg-show-autoplay")?(t.cancelAuto(),t.core.s.fourceAutoplay=!1):t.interval||(t.startlAuto(),t.core.s.fourceAutoplay=t.fourceAutoplayTemp)})},t.prototype.startlAuto=function(){var t=this;t.core.$outer.find(".lg-progress").css("transition","width "+(t.core.s.speed+t.core.s.pause)+"ms ease 0s"),t.core.$outer.addClass("lg-show-autoplay"),t.core.$outer.find(".lg-progress-bar").addClass("lg-start"),t.interval=setInterval(function(){t.core.index+1<t.core.$items.length?t.core.index++:t.core.index=0,t.fromAuto=!0,t.core.slide(t.core.index,!1,!1,"next")},t.core.s.speed+t.core.s.pause)},t.prototype.cancelAuto=function(){clearInterval(this.interval),this.interval=!1,this.core.$outer.find(".lg-progress").removeAttr("style"),this.core.$outer.removeClass("lg-show-autoplay"),this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")},t.prototype.destroy=function(){this.cancelAuto(),this.core.$outer.find(".lg-progress-bar").remove()},n.fn.lightGallery.modules.autoplay=t}()}),$(document).on("turbolinks:load",function(){
// 1. Foundation
// --------------------
Foundation.Interchange.SPECIAL_QUERIES["medium-retina"]="only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)",Foundation.Interchange.SPECIAL_QUERIES["large-retina"]="only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)",Foundation.Interchange.SPECIAL_QUERIES["xlarge-retina"]="only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)",Foundation.Interchange.SPECIAL_QUERIES["xxlarge-retina"]="only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)",$(document).foundation(),
// 2. Animate on Scroll
// --------------------
$(function(){AOS.init({offset:64,easing:"ease-in-out-quart",duration:600})}),$(function(){window.addEventListener("load",AOS.refresh)});var e=0,n=$(window),i=$(".scrollhide-nav");n.off("scroll"),n.on("scroll",function(){var t=n.scrollTop();t<0&&(t=0),i.toggleClass("hidden",e<t),e=t}),$(".carousel").flickity({imagesLoaded:!0,wrapAround:!0,prevNextButtons:!1,pageDots:!1,percentPosition:!1}),$(".video").lightGallery({counter:!1,youtubePlayerParams:{modestbranding:1,showinfo:0,rel:0,controls:0},vimeoPlayerParams:{autoplay:0,title:0,byline:0,portrait:0,color:"FFFFFF"}})});