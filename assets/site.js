const toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(expanded));document.querySelector('#nav').classList.toggle('open',expanded)});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle?.getAttribute('aria-expanded')==='true'){toggle.click();toggle.focus()}});
const search=document.querySelector('#brand-search'),category=document.querySelector('#category');
function filter(){let count=0;for(const row of document.querySelectorAll('.brand-row')){const matches=row.textContent.toLowerCase().includes(search.value.toLowerCase())&&(!category.value||row.querySelector('.eyebrow').textContent===category.value);row.hidden=!matches;if(matches)count++;}document.querySelector('#no-results').hidden=count!==0;document.querySelector('#results-status').textContent=`${count} trading name${count===1?'':'s'}`;}
search?.addEventListener('input',filter);category?.addEventListener('change',filter);document.querySelector('.filters')?.addEventListener('submit',event=>event.preventDefault());
