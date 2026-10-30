const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{
 document.querySelectorAll('.filters button').forEach(x=>x.classList.toggle('on',x===b));
 const f=b.dataset.f;document.querySelectorAll('.g').forEach(g=>g.classList.toggle('hide',f!=='all'&&!g.dataset.c.split(' ').includes(f)));});
document.querySelectorAll('.g.yt').forEach(g=>g.querySelector('.play').onclick=()=>{
 g.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${g.dataset.yt}?autoplay=1&rel=0" title="YouTube video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;});
document.querySelectorAll('#menu a').forEach(a=>a.onclick=()=>document.body.classList.remove('open'));
