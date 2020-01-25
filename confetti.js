/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/canvas-confetti@1.0.3/dist/confetti.browser.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,e){!function t(e,n,a,i){var o=e.Worker&&e.Blob&&e.OffscreenCanvas&&e.Promise&&e.URL&&!!e.URL.createObjectURL;function r(){}function l(t){var a=n.exports.Promise,i=void 0!==a?a:e.Promise;return"function"==typeof i?new i(t):(t(r,r),null)}var s,c,h,u,f,d=(h=Math.floor(1e3/60),u={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(s=function(t){var e=Math.random();return u[e]=requestAnimationFrame(function n(a){f===a||f+h-1<a?(f=a,delete u[e],t()):u[e]=requestAnimationFrame(n)}),e},c=function(t){u[t]&&cancelAnimationFrame(u[t])}):(s=function(t){return setTimeout(t,h)},c=function(t){return clearTimeout(t)}),{frame:s,cancel:c}),m=function(){var e,n,i={};return function(){if(e)return e;if(!a&&o){var r=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");(function(t){function e(e,n){t.postMessage({options:e||{},callback:n})}t.init=function(e){var n=e.transferControlToOffscreen();t.postMessage({canvas:n},[n])},t.fire=function(a,o,r){if(n)return e(a,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(o){function l(e){e.data.callback===s&&(delete i[s],t.removeEventListener("message",l),n=null,r(),o())}t.addEventListener("message",l),e(a,s),i[s]=l.bind(null,{data:{callback:s}})})},t.reset=function(){for(var e in t.postMessage({reset:!0}),i)i[e](),delete i[e]}})(e=new Worker(URL.createObjectURL(new Blob([r]))))}return e}}(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"]};function b(t,e,n){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:g[e],n)}function v(t){return parseInt(t,16)}function p(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function y(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function M(t,e,n,o,r){var s,c,h=e.slice(),u=t.getContext("2d"),f=l(function(e){function l(){s=c=null,u.clearRect(0,0,o.width,o.height),r(),e()}s=d.frame(function e(){!a||o.width===i.width&&o.height===i.height||(o.width=t.width=i.width,o.height=t.height=i.height),o.width||o.height||(n(t),o.width=t.width,o.height=t.height),u.clearRect(0,0,o.width,o.height),(h=h.filter(function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=.1,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+5,e.wobbleX=e.x+10*Math.cos(e.wobble),e.wobbleY=e.y+10*Math.sin(e.wobble);var n=e.tick++/e.totalTicks,a=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,o=e.wobbleX+e.random*e.tiltCos,r=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),"circle"===e.shape?t.ellipse?t.ellipse(e.x,e.y,Math.abs(o-a)*e.ovalScalar,Math.abs(r-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,n,a,i,o,r,l,s){t.save(),t.translate(e,n),t.rotate(o),t.scale(a,i),t.arc(0,0,1,r,l,s),t.restore()}(t,e.x,e.y,Math.abs(o-a)*e.ovalScalar,Math.abs(r-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(i)),t.lineTo(Math.floor(o),Math.floor(r)),t.lineTo(Math.floor(a),Math.floor(e.wobbleY))),t.closePath(),t.fill(),e.tick<e.totalTicks}(u,t)})).length?s=d.frame(e):l()}),c=l});return{addFettis:function(t){return h=h.concat(t),f},canvas:t,promise:f,reset:function(){s&&d.cancel(s),c&&c()}}}function w(t,n){var a,i=!t,r=!!b(n||{},"resize"),l=o&&!!b(n||{},"useWorker")?m():null,s=i?p:y,c=!1;function h(e,n,i){for(var o,r,l,c,h,u,f,d=b(e,"particleCount",Math.floor),m=b(e,"angle",Number),g=b(e,"spread",Number),p=b(e,"startVelocity",Number),y=b(e,"decay",Number),w=b(e,"colors"),x=b(e,"ticks",Number),I=b(e,"shapes"),k=function(t){var e=b(t,"origin",Object);return e.x=b(e,"x",Number),e.y=b(e,"y",Number),e}(e),S=d,E=[],T=t.width*k.x,C=t.height*k.y;S--;)E.push((o={x:T,y:C,angle:m,spread:g,startVelocity:p,color:w[S%w.length],shape:I[(u=0,f=I.length,Math.floor(Math.random()*(f-u))+u)],ticks:x,decay:y},r=void 0,l=void 0,c=void 0,h=void 0,c=o.angle*(Math.PI/180),h=o.spread*(Math.PI/180),{x:o.x,y:o.y,wobble:10*Math.random(),velocity:.5*o.startVelocity+Math.random()*o.startVelocity,angle2D:-c+(.5*h-Math.random()*h),tiltAngle:Math.random()*Math.PI,color:(r=o.color,l=String(r).replace(/[^0-9a-f]/gi,""),l.length<6&&(l=l[0]+l[0]+l[1]+l[1]+l[2]+l[2]),{r:v(l.substring(0,2)),g:v(l.substring(2,4)),b:v(l.substring(4,6))}),shape:o.shape,tick:0,totalTicks:o.ticks,decay:o.decay,random:Math.random()+5,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3,ovalScalar:.6}));return a?a.addFettis(E):(a=M(t,E,s,n,i)).promise}function u(n){var o=b(n,"zIndex",Number);i&&a?t=a.canvas:i&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(o),document.body.appendChild(t)),r&&!c&&s(t);var u={width:t.width,height:t.height};function f(){if(l){var t={};return s(t),void l.postMessage({resize:t})}u.width=u.height=null}function d(){a=null,r&&e.removeEventListener("resize",f),i&&t&&(document.body.removeChild(t),t=null,c=!1)}return l&&!c&&l.init(t),c=!0,r&&e.addEventListener("resize",f,!1),l?l.fire(n,u,d):h(n,u,d)}return u.reset=function(){l&&l.reset(),a&&a.reset()},u}n.exports=w(null,{useWorker:!0,resize:!0}),n.exports.create=w}(function(){return void 0!==t?t:"undefined"!=typeof self?self:this}(),e,!1),t.confetti=e.exports}(window,{});
//# sourceMappingURL=/sm/f3b435802336d4c4c79323bc6e102775ee91fdba3d708bdf82a15947422962a8.map
