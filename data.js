const posts=[{"title": "Move with confidence", "category": "Movement", "image": "assets/post-01.webp"}, {"title": "Your next chapter starts with movement", "category": "Movement", "image": "assets/post-02.webp"}, {"title": "Expert care. Human connection.", "category": "People", "image": "assets/post-03.webp"}, {"title": "Strength begins with support", "category": "Care", "image": "assets/post-04.webp"}, {"title": "Back to what you love", "category": "Movement", "image": "assets/post-05.webp"}, {"title": "Every step matters", "category": "Care", "image": "assets/post-06.webp"}, {"title": "Make room for recovery", "category": "Care", "image": "assets/post-07.webp"}, {"title": "Care that moves with you", "category": "Movement", "image": "assets/post-08.webp"}, {"title": "Meet your movement team", "category": "People", "image": "assets/post-09.webp"}, {"title": "A stronger tomorrow", "category": "Care", "image": "assets/post-10.webp"}, {"title": "Your shoulders carry a lot", "category": "Education", "image": "assets/post-11.webp"}, {"title": "Small steps. Meaningful progress.", "category": "Care", "image": "assets/post-12.webp"}, {"title": "Built around you", "category": "People", "image": "assets/post-13.webp"}, {"title": "From desk to movement", "category": "Education", "image": "assets/post-14.webp"}, {"title": "The science of movement", "category": "Education", "image": "assets/post-15.webp"}, {"title": "Beyond the finish line", "category": "Movement", "image": "assets/post-16.webp"}, {"title": "Confidence in every consultation", "category": "People", "image": "assets/post-17.webp"}, {"title": "Recovery has a rhythm", "category": "Care", "image": "assets/post-18.webp"}, {"title": "A better digital care journey", "category": "Digital", "image": "assets/post-19.webp"}, {"title": "People behind the care", "category": "People", "image": "assets/post-20.webp"}, {"title": "Leadership with purpose", "category": "People", "image": "assets/post-21.webp"}, {"title": "Welcome to your next step", "category": "Care", "image": "assets/post-22.webp"}, {"title": "Movement for every generation", "category": "Movement", "image": "assets/post-23.webp"}, {"title": "Discover your care pathway", "category": "Digital", "image": "assets/post-24.webp"}, {"title": "Health. Wellness. Fitness.", "category": "Movement", "image": "assets/post-25.webp"}];
posts.push({title:"Four decades. One commitment. Your care.",category:"People",image:"assets/post-26.webp"},{title:"Expertise. Judgement. Care.",category:"People",image:"assets/post-27.webp"});
const creativeSection=document.querySelector('#creative');
creativeSection.querySelector('.section-top span:last-child').textContent='27 INDIVIDUAL CONCEPTS';
const archiveLink=creativeSection.querySelector('a[download]');
if(archiveLink)archiveLink.textContent='DOWNLOAD ORIGINAL 25 DESIGNS ↓';
const sampleNote=Array.from(creativeSection.querySelectorAll('p')).find(p=>p.textContent.includes('AI-generated people'));
if(sampleNote)sampleNote.textContent='Creative proposal samples. Posts 26–27 feature Dr. Moosa Kazim using the supplied portrait. Other AI-generated people are illustrative. Final clinical copy and imagery require the clinic’s review before posting.';

(()=>{
const hero=document.querySelector('#vision');if(!hero)return;
const style=document.createElement('style');style.textContent=`
body.video-intro-locked main>*:not(#vision){display:none!important}
body.video-intro-locked aside .rail a,body.video-intro-locked .header-actions a{opacity:.4;cursor: not-allowed}
#vision{height:auto;max-height:none;min-height:calc(100svh - 95px);padding-bottom:45px}
#vision h1{font-size:clamp(34px,4.1vw,66px);line-height:1.06;margin-bottom:20px;max-width:520px}
#vision .hero-art,#vision .hero-foot{display:none}
#vision .hero-bottom{max-width:none;margin-top:0}
#vision .hero-bottom>p{max-width:600px;margin:0 0 25px}
#vision .hero-bottom>a{display:none}
.proposal-film{position:relative;z-index:4;max-width:1100px;background:#fff;border:1px solid #cbddea;border-radius:18px;box-shadow:0 20px 60px #0c51a014;overflow:hidden;margin-top:24px}
.film-top{display:flex;justify-content:space-between;gap:16px;padding:17px 22px;color:#0c51a0;font-size:10px;letter-spacing:1.5px;font-weight:700}
.film-top span:last-child{color:#65798c;letter-spacing:.5px}
.film-screen{position:relative;background:#071e39;aspect-ratio:16/9}
.film-screen video{display:block;width:100%;height:100%;object-fit:contain}
.film-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;border:0;background:linear-gradient(110deg,#072a4bc9,#072a4b38);color:white;cursor:pointer;font:inherit}
.film-play[hidden]{display:none}
.film-play strong{font-size:clamp(20px,3vw,34px);letter-spacing:-1px}
.film-play small{font-size:13px;color:#e0eefb}
.film-play .play-circle{display:grid;place-items:center;width:78px;height:78px;border-radius:50%;background:white;color:#0c51a0;font-size:25px;box-shadow:0 0 0 12px #ffffff18}
.film-bottom{display:flex;justify-content:space-between;align-items:center;gap:22px;padding:20px 22px}
.film-bottom p{font-size:13px;line-height:1.5;color:#65798c;margin:0;max-width:520px}
.film-continue{border:0;border-radius:30px;background:#0c51a0;color:white;padding:15px 23px;font:600 13px Arial,sans-serif;cursor:pointer;white-space:nowrap}
.film-continue:disabled{background:#e7edf2;color:#63788a;cursor:not-allowed}
.film-error{padding:12px 22px;color:#0c51a0;font-size:13px}.film-error[hidden]{display:none}
.film-error a{color:inherit;text-decoration:underline}
@media(min-width:1100px){#vision{padding-top:40px}#vision h1{max-width:100%;font-size:48px}#vision h1 br{display:none}#vision h1{letter-spacing:-2px}#vision h1 em{margin:0 .2em}.proposal-film{max-width:1000px}.film-screen{max-height:55svh;aspect-ratio:16/9}}
@media(max-width:640px){#vision{padding-top:30px;min-height:0;padding-bottom:32px}#vision h1{font-size:38px}#vision .hero-bottom>p{font-size:14px}.film-top{padding:15px;flex-direction:column;gap:6px}.film-bottom{padding:18px;flex-direction:column;align-items:stretch;gap:16px}.film-play .play-circle{width:52px;height:52px;font-size:19px}.film-play{gap:12px}.film-play small{font-size:10px}.proposal-film{border-radius:12px}}
`;document.head.append(style);
const shell=document.createElement('div');shell.className='proposal-film';shell.innerHTML=`<div class="film-top"><span>01 / START WITH THE VISION</span><span>ORTHOSPORTS × CREAIVA · PROPOSAL FILM</span></div><div class="film-screen"><video id="proposalIntroVideo" controls playsinline preload="metadata" poster="https://res.cloudinary.com/dzluzmzsf/video/upload/so_2,f_jpg/OrthoSports_CREAIVA_Proposal_gxs2s9.jpg" aria-label="OrthoSports CREAIVA proposal introduction"><source src="https://res.cloudinary.com/dzluzmzsf/video/upload/v1793553278/OrthoSports_CREAIVA_Proposal_gxs2s9.mp4" type="video/mp4"></video><button type="button" class="film-play" aria-label="Play proposal introduction"><span class="play-circle" aria-hidden="true">▶</span><strong>See the vision in motion.</strong><small>PLAY THE INTRODUCTION TO UNLOCK THE PROPOSAL</small></button></div><div class="film-bottom"><p id="filmStatus" role="status" aria-live="polite">Start the film to unlock the creative concepts, proposed scope and next steps.</p><button type="button" class="film-continue" disabled>Continue to the proposal ↗</button></div><div class="film-error" hidden>Video not loading? <a href="https://res.cloudinary.com/dzluzmzsf/video/upload/v1793553278/OrthoSports_CREAIVA_Proposal_gxs2s9.mp4" target="_blank" rel="noopener">Open the introduction in a new tab ↗</a></div>`;
hero.querySelector('.hero-bottom').append(shell);
let unlocked=false;const video=shell.querySelector('video'),play=shell.querySelector('.film-play'),next=shell.querySelector('.film-continue'),status=shell.querySelector('#filmStatus'),error=shell.querySelector('.film-error');
const sections=Array.from(document.querySelector('main').children).filter(el=>el!==hero);document.body.classList.add('video-intro-locked');sections.forEach(el=>el.inert=true);
function unlock(){if(unlocked)return;unlocked=true;document.body.classList.remove('video-intro-locked');sections.forEach(el=>el.inert=false);next.disabled=false;status.textContent='The proposal is unlocked. Enjoy the film, then explore the creative vision below.';}
video.addEventListener('play',()=>{play.hidden=true;unlock()});video.addEventListener('ended',()=>{status.textContent='Thank you for watching. Explore the complete proposal below.'});
play.addEventListener('click',()=>{video.play().catch(()=>{error.hidden=false;status.textContent='Playback could not start. Try the player controls or open the introduction in a new tab.'})});
video.addEventListener('error',()=>error.hidden=false);shell.querySelector('.film-error a').addEventListener('click',unlock);
next.addEventListener('click',()=>{if(unlocked){video.pause();document.querySelector('#opportunity').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}});
document.addEventListener('click',e=>{if(unlocked)return;const a=e.target.closest('a');if(a&&!shell.contains(a)&&a.getAttribute('href')!=='#vision'){e.preventDefault();e.stopImmediatePropagation();shell.scrollIntoView({behavior:'smooth',block:'center'});play.focus({preventScroll:true});status.textContent='Please play the introduction first to unlock the proposal.';}},true);
if(location.hash&&location.hash!=='#vision')requestAnimationFrame(()=>hero.scrollIntoView());
})();
