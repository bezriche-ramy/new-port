import{z as b}from"./index-iPRv7TQb.js";function E(p,f){for(var r=0;r<f.length;r++){const s=f[r];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in p)){const l=Object.getOwnPropertyDescriptor(s,c);l&&Object.defineProperty(p,c,l.get?l:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var m={exports:{}},T=m.exports,w;function q(){return w||(w=1,(function(p,f){(function(r,s){p.exports=s()})(typeof self<"u"?self:T,(()=>(()=>{var r={d:(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},s={};r.r(s),r.d(s,{default:()=>C}),Number.prototype.clamp=function(e,t){return Math.min(Math.max(this,e),t)};function c(e){for(;e.children&&e.children.length>0;)c(e.children[0]),e.remove(e.children[0]);e.geometry&&e.geometry.dispose(),e.material&&(Object.keys(e.material).forEach((t=>{e.material[t]&&e.material[t]!==null&&typeof e.material[t].dispose=="function"&&e.material[t].dispose()})),e.material.dispose())}const l=typeof window=="object";let d=l&&window.THREE||{};l&&!window.VANTA&&(window.VANTA={});const a=l&&window.VANTA||{};a.register=(e,t)=>a[e]=i=>new t(i),a.version="0.5.24";const v=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};a.VantaBase=class{constructor(e={}){if(!l)return!1;a.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const t=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},t),(e instanceof HTMLElement||typeof e=="string")&&(e={el:e}),Object.assign(this.options,e),this.options.THREE&&(d=this.options.THREE),this.el=this.options.el,this.el==null)v('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const u=this.el;if(this.el=(i=u,document.querySelector(i)),!this.el)return void v("Cannot find element",u)}var i,n;this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(u){return v("Init error",u),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=(n=this.options.backgroundColor,typeof n=="number"?"#"+("00000"+n.toString(16)).slice(-6):n)))}this.initMouse(),this.resize(),this.animationLoop();const h=window.addEventListener;h("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(h("scroll",this.windowMouseMoveWrapper),h("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(h("touchstart",this.windowTouchWrapper),h("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&h("deviceorientation",this.windowGyroWrapper)}setOptions(e={}){Object.assign(this.options,e),this.triggerMouseMove()}prepareEl(){let e,t;if(typeof Node<"u"&&Node.TEXT_NODE)for(e=0;e<this.el.childNodes.length;e++){const i=this.el.childNodes[e];if(i.nodeType===Node.TEXT_NODE){const n=document.createElement("span");n.textContent=i.textContent,i.parentElement.insertBefore(n,i),i.remove()}}for(e=0;e<this.el.children.length;e++)t=this.el.children[e],getComputedStyle(t).position==="static"&&(t.style.position="relative"),getComputedStyle(t).zIndex==="auto"&&(t.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(e,t={}){Object.assign(e.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(e.style,t),e.classList.add("vanta-canvas")}initThree(){d.WebGLRenderer?(this.renderer=new d.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new d.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const e=this.getCanvasElement();return!!e&&e.getBoundingClientRect()}windowMouseMoveWrapper(e){const t=this.getCanvasRect();if(!t)return!1;const i=e.clientX-t.left,n=e.clientY-t.top;i>=0&&n>=0&&i<=t.width&&n<=t.height&&(this.mouseX=i,this.mouseY=n,this.options.mouseEase||this.triggerMouseMove(i,n))}windowTouchWrapper(e){const t=this.getCanvasRect();if(!t)return!1;if(e.touches.length===1){const i=e.touches[0].clientX-t.left,n=e.touches[0].clientY-t.top;i>=0&&n>=0&&i<=t.width&&n<=t.height&&(this.mouseX=i,this.mouseY=n,this.options.mouseEase||this.triggerMouseMove(i,n))}}windowGyroWrapper(e){const t=this.getCanvasRect();if(!t)return!1;const i=Math.round(2*e.alpha)-t.left,n=Math.round(2*e.beta)-t.top;i>=0&&n>=0&&i<=t.width&&n<=t.height&&(this.mouseX=i,this.mouseY=n,this.options.mouseEase||this.triggerMouseMove(i,n))}triggerMouseMove(e,t){e===void 0&&t===void 0&&(this.options.mouseEase?(e=this.mouseEaseX,t=this.mouseEaseY):(e=this.mouseX,t=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=e/this.scale,this.uniforms.iMouse.value.y=t/this.scale);const i=e/this.width,n=t/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(i,n)}setSize(){this.scale||(this.scale=1),typeof navigator<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600)&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const e=this.el.offsetHeight,t=this.el.getBoundingClientRect(),i=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,n=t.top+i;return n-window.innerHeight<=i&&i<=n+e}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const e=performance.now();if(this.prevNow){let t=(e-this.prevNow)/16.666666666666668;t=Math.max(.2,Math.min(t,5)),this.t+=t,this.t2+=(this.options.speed||1)*t,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=e,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const e=window.removeEventListener;e("touchstart",this.windowTouchWrapper),e("touchmove",this.windowTouchWrapper),e("scroll",this.windowMouseMoveWrapper),e("mousemove",this.windowMouseMoveWrapper),e("deviceorientation",this.windowGyroWrapper),e("resize",this.resize),window.cancelAnimationFrame(this.req);const t=this.scene;t&&t.children&&c(t),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),a.current===this&&(a.current=null)}};const M=a.VantaBase;let o=typeof window=="object"&&window.THREE;class x extends M{constructor(t){o=t.THREE||o,o.Color.prototype.toVector=function(){return new o.Vector3(this.r,this.g,this.b)},super(t),this.updateUniforms=this.updateUniforms.bind(this)}init(){this.mode="shader",this.uniforms={iTime:{type:"f",value:1},iResolution:{type:"v2",value:new o.Vector2(1,1)},iDpr:{type:"f",value:window.devicePixelRatio||1},iMouse:{type:"v2",value:new o.Vector2(this.mouseX||0,this.mouseY||0)}},super.init(),this.fragmentShader&&this.initBasicShader()}setOptions(t){super.setOptions(t),this.updateUniforms()}initBasicShader(t=this.fragmentShader,i=this.vertexShader){i||(i=`uniform float uTime;
uniform vec2 uResolution;
void main() {
  gl_Position = vec4( position, 1.0 );
}`),this.updateUniforms(),typeof this.valuesChanger=="function"&&this.valuesChanger();const n=new o.ShaderMaterial({uniforms:this.uniforms,vertexShader:i,fragmentShader:t}),h=this.options.texturePath;h&&(this.uniforms.iTex={type:"t",value:new o.TextureLoader().load(h)});const u=new o.Mesh(new o.PlaneGeometry(2,2),n);this.scene.add(u),this.camera=new o.Camera,this.camera.position.z=1}updateUniforms(){const t={};let i,n;for(i in this.options)n=this.options[i],i.toLowerCase().indexOf("color")!==-1?t[i]={type:"v3",value:new o.Color(n).toVector()}:typeof n=="number"&&(t[i]={type:"f",value:n});return Object.assign(this.uniforms,t)}resize(){super.resize(),this.uniforms.iResolution.value.x=this.width/this.scale,this.uniforms.iResolution.value.y=this.height/this.scale}}class g extends x{}const C=a.register("CLOUDS",g);return g.prototype.defaultOptions={backgroundColor:16777215,skyColor:6863063,cloudColor:11387358,cloudShadowColor:1586512,sunColor:16750873,sunGlareColor:16737843,sunlightColor:16750899,scale:3,scaleMobile:12,speed:1,mouseEase:!0},g.prototype.fragmentShader=`uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform sampler2D iTex;

uniform float speed;
uniform vec3 skyColor;
uniform vec3 cloudColor;
uniform vec3 cloudShadowColor;
uniform vec3 sunColor;
uniform vec3 sunlightColor;
uniform vec3 sunGlareColor;
uniform vec3 backgroundColor;

// uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
// uniform samplerXX iChannel0..3;          // input channel. XX = 2D/Cube


// Volumetric clouds. It performs level of detail (LOD) for faster rendering
float hash(float p) {
  p = fract(p * 0.011);
  p *= (p + 7.5);
  p *= (p + p);
  return fract(p);
}

float noise( vec3 x ){
    // The noise function returns a value in the range -1.0f -> 1.0f
    vec3 p = floor(x);
    vec3 f = fract(x);
    f       = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0 + 113.0*p.z;
    return mix(mix(mix( hash(n+0.0  ), hash(n+1.0  ),f.x),
                   mix( hash(n+57.0 ), hash(n+58.0 ),f.x),f.y),
               mix(mix( hash(n+113.0), hash(n+114.0),f.x),
                   mix( hash(n+170.0), hash(n+171.0),f.x),f.y),f.z);
}

const float constantTime = 1000.;
float map5( in vec3 p ){
    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;
    vec3 q = p - speed1*(iTime + constantTime);
    float f;
    f  = 0.50000*noise( q ); q = q*2.02;
    f += 0.25000*noise( q ); q = q*2.03;
    f += 0.12500*noise( q ); q = q*2.01;
    f += 0.06250*noise( q ); q = q*2.02;
    f += 0.03125*noise( q );
    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );
}
float map4( in vec3 p ){
    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;
    vec3 q = p - speed1*(iTime + constantTime);
    float f;
    f  = 0.50000*noise( q ); q = q*2.02;
    f += 0.25000*noise( q ); q = q*2.03;
    f += 0.12500*noise( q ); q = q*2.01;
    f += 0.06250*noise( q );
    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );
}
float map3( in vec3 p ){
    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;
    vec3 q = p - speed1*(iTime + constantTime);
    float f;
    f  = 0.50000*noise( q ); q = q*2.02;
    f += 0.25000*noise( q ); q = q*2.03;
    f += 0.12500*noise( q );
    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );
}
float map2( in vec3 p ){
    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;
    vec3 q = p - speed1*(iTime + constantTime);
    float f;
    f  = 0.50000*noise( q ); q = q*2.02;
    f += 0.25000*noise( q );
    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );
}

vec3 sundir = normalize( vec3(-1.0,0.0,-1.0) );

vec4 integrate( in vec4 sum, in float dif, in float den, in vec3 bgcol, in float t ){
    // lighting
    vec3 lin = cloudColor*1.4 + sunlightColor*dif;
    vec4 col = vec4( mix( vec3(1.0,0.95,0.8), cloudShadowColor, den ), den );
    col.xyz *= lin;
    col.xyz = mix( col.xyz, bgcol, 1.0-exp(-0.003*t*t) );
    // front to back blending
    col.a *= 0.4;
    col.rgb *= col.a;
    return sum + col*(1.0-sum.a);
}

#define MARCH(STEPS,MAPLOD) for(int i=0; i<STEPS; i++) { vec3  pos = ro + t*rd; if( pos.y<-3.0 || pos.y>2.0 || sum.a > 0.99 ) break; float den = MAPLOD( pos ); if( den>0.01 ) { float dif = clamp((den - MAPLOD(pos+0.3*sundir))/0.6, 0.0, 1.0 ); sum = integrate( sum, dif, den, bgcol, t ); } t += max(0.075,0.02*t); }

vec4 raymarch( in vec3 ro, in vec3 rd, in vec3 bgcol, in ivec2 px ){
    vec4 sum = vec4(0.0);

    float t = 0.0;

    MARCH(20,map5);
    MARCH(25,map4);
    MARCH(30,map3);
    MARCH(40,map2);

    return clamp( sum, 0.0, 1.0 );
}

mat3 setCamera( in vec3 ro, in vec3 ta, float cr ){
    vec3 cw = normalize(ta-ro);
    vec3 cp = vec3(sin(cr), cos(cr),0.0);
    vec3 cu = normalize( cross(cw,cp) );
    vec3 cv = normalize( cross(cu,cw) );
    return mat3( cu, cv, cw );
}

vec4 render( in vec3 ro, in vec3 rd, in ivec2 px ){
    // background sky
    float sun = clamp( dot(sundir,rd), 0.0, 1.0 );
    vec3 col = skyColor - rd.y*0.2*vec3(1.0,0.5,1.0) + 0.15*0.5;
    col += 0.2*sunColor*pow( sun, 8.0 );

    // clouds
    vec4 res = raymarch( ro, rd, col, px );
    col = col*(1.0-res.w) + res.xyz;

    // sun glare
    col += 0.2*sunGlareColor*pow( sun, 3.0 );

    return vec4( col, 1.0 );
}

void main(){
    vec2 p = (-iResolution.xy + 2.0*gl_FragCoord.xy)/ iResolution.y;

    vec2 m = iMouse.xy/iResolution.xy;
    m.y = (1.0 - m.y) * 0.33 + 0.28; // camera height

    m.x *= 0.25;
    m.x += sin(iTime * 0.1 + 3.1415) * 0.25 + 0.25;

    // camera
    vec3 ro = 4.0*normalize(vec3(sin(3.0*m.x), 0.4*m.y, cos(3.0*m.x))); // origin
    vec3 ta = vec3(0.0, -1.0, 0.0);
    mat3 ca = setCamera( ro, ta, 0.0 );
    // ray
    vec3 rd = ca * normalize( vec3(p.xy,1.5));

    gl_FragColor = render( ro, rd, ivec2(gl_FragCoord-0.5) );
}
`,s})()))})(m)),m.exports}var y=q();const S=b(y),R=E({__proto__:null,default:S},[y]);export{R as v};
