:root{--bg:#07060a;--fg:#eceaf2;--mute:#8b8798;--acc:#ff6a2b;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg);color:var(--fg);font-family:"Helvetica Neue",Arial,sans-serif;overflow-x:hidden}
#sky{position:fixed;inset:0;width:100%;height:100%;z-index:0}
nav{position:fixed;top:0;left:0;right:0;z-index:20;display:flex;justify-content:space-between;align-items:center;padding:16px 5vw;font-size:11px;letter-spacing:.3em;text-transform:uppercase}
nav .l{display:flex;gap:26px;color:var(--mute)}
nav button{background:var(--acc);border:0;color:#120600;font-weight:700;padding:9px 16px;font-size:11px;letter-spacing:.15em;border-radius:3px;text-transform:uppercase}

/* planet */
.pw{position:fixed;left:50%;top:50%;z-index:1;width:min(86vmin,760px);aspect-ratio:1;pointer-events:none;
  transform:translate(calc(-50% + var(--x,0px)),-50%) scale(var(--s,1));transition:transform 1.8s cubic-bezier(.2,.8,.2,1)}
.pf{position:absolute;inset:0;animation:bob 9s ease-in-out infinite}
@keyframes bob{50%{transform:translateY(-12px) rotate(.8deg)}}
#cv{position:absolute;inset:0;width:100%;height:100%;z-index:2}
.moon{position:absolute;left:0;top:0;z-index:1;border-radius:50%;will-change:transform;
  background:radial-gradient(circle at 34% 30%,#c9c1b6,#756e66 55%,#1c1a1b);box-shadow:inset -3px -3px 7px rgba(0,0,0,.65),0 0 10px rgba(255,160,100,.12)}
.nogl #cv{display:none}
.nogl .pf::before{content:"";position:absolute;inset:13%;border-radius:50%;background:radial-gradient(circle at 30% 32%,#ffa070,#c9481a 42%,#591a08 72%,#120508);box-shadow:0 0 120px 20px rgba(255,90,40,.25)}

/* sections */
section{position:relative;min-height:100vh;min-height:100svh;display:flex;align-items:center;padding:0 7vw;z-index:3;overflow:hidden}
section.r{justify-content:flex-end}
.ghost{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:clamp(120px,34vw,520px);font-weight:900;letter-spacing:-.04em;color:transparent;-webkit-text-stroke:1px rgba(255,255,255,.08);z-index:0;white-space:nowrap;pointer-events:none;will-change:transform}
.txt{position:relative;z-index:3;max-width:min(460px,86vw)}
.txt>*{opacity:0;transform:translateY(36px);transition:opacity 1.1s,transform 1.1s cubic-bezier(.2,.8,.2,1)}
.in .txt>*{opacity:1;transform:none}
.txt>:nth-child(2){transition-delay:.15s}.txt>:nth-child(3){transition-delay:.3s}.txt>:nth-child(4){transition-delay:.45s}
.num{display:block;font-size:clamp(84px,17vw,210px);font-weight:900;line-height:.9;letter-spacing:-.05em;text-shadow:0 0 70px rgba(255,106,43,.28)}
.num sup{font-size:.28em;color:var(--acc);vertical-align:top;margin-left:.1em;letter-spacing:0}
h2{font-size:clamp(28px,4.4vw,54px);line-height:1.02;font-weight:800;margin:18px 0 14px;letter-spacing:-.02em}
p{color:var(--mute);font-size:15px;line-height:1.6}
.hero .txt{max-width:none;text-align:center;margin:0 auto;align-self:flex-end;padding-bottom:10vh}
.hero h1{font-size:clamp(14px,2vw,20px);letter-spacing:.45em;color:var(--acc);margin-bottom:12px;text-transform:uppercase}
.hero p{max-width:34ch;margin:0 auto}
.hint{margin-top:26px;font-size:10px;letter-spacing:.4em;color:var(--mute);text-transform:uppercase}
.hint i{display:block;width:1px;height:34px;margin:0 auto 10px;background:linear-gradient(var(--acc),transparent);animation:drop 2s ease-in-out infinite}
@keyframes drop{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
.bars{margin-top:22px;display:grid;gap:10px;font-size:12px;color:var(--mute);letter-spacing:.1em}
.bar{height:8px;background:rgba(255,255,255,.1);border-radius:4px;overflow:hidden;margin-top:5px}
.bar i{display:block;height:100%;width:0;background:var(--acc);transition:width 1.8s .5s cubic-bezier(.2,.8,.2,1)}
.in .bar i{width:var(--w)}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:26px}
.card{padding:16px 14px;border-radius:10px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);font-size:12px;color:var(--mute);text-align:left}
.card b{display:block;color:var(--fg);font-size:15px;margin-bottom:4px}
.card:nth-child(1){border-top:3px solid #ff6a2b}.card:nth-child(2){border-top:3px solid #6f93ff}.card:nth-child(3){border-top:3px solid #7c7a92}
.end{justify-content:center;text-align:center}
.end .txt{max-width:600px}
.end button{margin-top:22px;background:var(--fg);color:#000;border:0;padding:13px 26px;font-weight:700;letter-spacing:.15em;font-size:12px;border-radius:3px;text-transform:uppercase}
@media(max-width:700px){nav .l{display:none}section,section.r{align-items:flex-end;justify-content:flex-start;padding-bottom:9vh}.pw{top:30%}.cards{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
