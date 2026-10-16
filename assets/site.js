const toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(expanded));document.querySelector('#nav').classList.toggle('open',expanded)});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle?.getAttribute('aria-expanded')==='true'){toggle.click();toggle.focus()}});
const search=document.querySelector('#brand-search'),category=document.querySelector('#category');
function filter(){let count=0;for(const row of document.querySelectorAll('.brand-row')){const matches=row.textContent.toLowerCase().includes(search.value.toLowerCase())&&(!category.value||row.querySelector('.eyebrow').textContent===category.value);row.hidden=!matches;if(matches)count++;}document.querySelector('#no-results').hidden=count!==0;document.querySelector('#results-status').textContent=`${count} trading name${count===1?'':'s'}`;}
search?.addEventListener('input',filter);category?.addEventListener('change',filter);document.querySelector('.filters')?.addEventListener('submit',event=>event.preventDefault());

for(const gallery of document.querySelectorAll('.business-gallery')){
  const slides=[...gallery.querySelectorAll('.gallery-slide')],controls=gallery.querySelector('.gallery-controls');
  if(slides.length<2)continue;
  const motion=matchMedia('(prefers-reduced-motion: reduce)'),pause=gallery.querySelector('[data-gallery="pause"]');
  let current=0,playing=!motion.matches,hovered=false,focused=false;
  controls.hidden=false;
  const updatePause=()=>{pause.textContent=playing?'Pause':'Play';pause.setAttribute('aria-label',playing?'Pause slideshow':'Play slideshow');};
  const show=index=>{slides[current].hidden=true;current=(index+slides.length)%slides.length;slides[current].hidden=false;gallery.querySelector('.gallery-count').textContent=`${current+1} / ${slides.length}`;};
  controls.addEventListener('click',event=>{const action=event.target.closest('[data-gallery]')?.dataset.gallery;if(action==='next')show(current+1);if(action==='previous')show(current-1);if(action==='pause'){playing=!playing;updatePause();}});
  gallery.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();show(current+(event.key==='ArrowRight'?1:-1));}});
  gallery.addEventListener('mouseenter',()=>hovered=true);gallery.addEventListener('mouseleave',()=>hovered=false);
  gallery.addEventListener('focusin',()=>focused=true);gallery.addEventListener('focusout',event=>focused=gallery.contains(event.relatedTarget));
  motion.addEventListener('change',()=>{if(motion.matches){playing=false;updatePause();}});
  setInterval(()=>{if(playing&&!hovered&&!focused&&!document.hidden)show(current+1);},6000);
  updatePause();
}
