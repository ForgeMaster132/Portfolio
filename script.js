// Theme toggle + year
const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
let theme = localStorage.getItem("theme") || (prefersLight ? "light" : "dark");
if (theme === "light") document.body.classList.add("light");
toggle.textContent = theme === "light" ? "☀" : "☾";
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  toggle.textContent = isLight ? "☀" : "☾";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Parallax/tilt effect for cards
const tiltEls = document.querySelectorAll("[data-tilt]");
tiltEls.forEach((el) => {
  const strength = 10;
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const rx = ((y - r.height / 2) / r.height) * -strength;
    const ry = ((x - r.width / 2) / r.width) * strength;
    el.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
  });
  el.addEventListener("mouseleave", () => (el.style.transform = ""));
});

// IntersectionObserver: animate in
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("in");
  });
}, { threshold: 0.1 });
document.querySelectorAll(".section, .project-card, .skill-card, .time-item").forEach((el)=>{
  el.classList.add("pre");
  observer.observe(el);
});
const style = document.createElement("style");
style.textContent = `.pre{opacity:.001; transform: translateY(10px); transition: opacity .5s ease, transform .6s cubic-bezier(.2,.8,.2,1)}
.in{opacity:1; transform:none}`;
document.head.appendChild(style);

// Canvas animated background (soft particles)
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
let w, h, dpr;
const PARTICLES = 60;
const items = [];
function resize(){
  dpr = window.devicePixelRatio || 1;
  w = canvas.width = innerWidth * dpr;
  h = canvas.height = innerHeight * dpr;
  canvas.style.width = innerWidth + "px";
  canvas.style.height = innerHeight + "px";
}
window.addEventListener("resize", resize);
resize();
function rand(a,b){ return Math.random()*(b-a)+a; }
function init(){
  items.length = 0;
  for (let i=0;i<PARTICLES;i++){
    items.push({
      x: rand(0,w), y: rand(0,h), r: rand(20,80)*dpr,
      vx: rand(-.15,.15)*dpr, vy: rand(-.1,.1)*dpr,
      hue: rand(100,150)
    });
  }
}
init();
function tick(){
  ctx.clearRect(0,0,w,h);
  // Smooth vertical background gradient to avoid banding
  const grad = ctx.createLinearGradient(0,0,0,h);
  const baseLight = document.body.classList.contains("light");
  if (baseLight){
    grad.addColorStop(0, "#eef2ff");
    grad.addColorStop(0.5, "#f8fafc");
    grad.addColorStop(1, "#eef2ff");
  } else {
    grad.addColorStop(0, "#050813");
    grad.addColorStop(0.5, "#0b1020");
    grad.addColorStop(1, "#050813");
  }
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,w,h);

  items.forEach(p=>{
    p.x += p.vx; p.y += p.vy;
    if (p.x<-100 || p.x>w+100) p.vx*=-1;
    if (p.y<-100 || p.y>h+100) p.vy*=-1;
    const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
    const base = document.body.classList.contains("light") ? 0.18 : 0.45;
    grd.addColorStop(0, `hsla(${p.hue},70%,60%,${base})`);
    grd.addColorStop(1, `hsla(${p.hue},70%,60%,0)`);
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(tick);
}
tick();


// Mobile menu toggle
const menuBtn = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
if (menuBtn && nav){
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  // Close menu when clicking a link
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded","false");
  }));
}


// === Inline Project Iframes ===
(function(){
  const observer = new IntersectionObserver((entries)=>{
    for(const e of entries){
      if(e.isIntersecting){
        const wrap = e.target;
        if(wrap.dataset.loaded) continue;
        const src = wrap.getAttribute('data-src');
        if(!src) continue;
        const iframe = document.createElement('iframe');
        iframe.loading = 'lazy';
        iframe.src = src;
        iframe.referrerPolicy = 'no-referrer';
        wrap.appendChild(iframe);
        wrap.dataset.loaded = '1';
      }
    }
  }, {rootMargin: '200px 0px'});
  document.querySelectorAll('.frame-wrap[data-src]').forEach(el => observer.observe(el));

  window.reloadProjectFrame = function(btn){
    const wrap = btn.closest('.project-card').querySelector('.frame-wrap');
    const iframe = wrap && wrap.querySelector('iframe');
    if(iframe){ iframe.contentWindow.location.reload(); }
  };
})();
