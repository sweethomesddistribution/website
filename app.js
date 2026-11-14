(function(){
  var d=document, h=d.getElementById('top');
  try{ if(!('IntersectionObserver' in window)) d.documentElement.classList.add('js-off'); }catch(e){}
  // sticky header shadow
  function sc(){ if(h) h.classList.toggle('sc', window.scrollY>8); }
  window.addEventListener('scroll', sc, {passive:true}); sc();
  // mobile menu
  var b=d.getElementById('burger'), n=d.getElementById('nav');
  if(b&&n){
    b.addEventListener('click', function(){ var o=n.classList.toggle('open'); h.classList.toggle('menu-open',o); b.setAttribute('aria-expanded', o); b.setAttribute('aria-label', o?'Close menu':'Open menu'); });
    n.addEventListener('click', function(e){ if(e.target.tagName==='A'){ n.classList.remove('open'); h.classList.remove('menu-open'); b.setAttribute('aria-expanded','false'); b.setAttribute('aria-label','Open menu'); } });
    d.addEventListener('keydown', function(e){ if(e.key==='Escape'){ n.classList.remove('open'); h.classList.remove('menu-open'); b.setAttribute('aria-expanded','false'); } });
  }
  // reveal on scroll
  var els=[].slice.call(d.querySelectorAll('.rv'));
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){ es.forEach(function(x){ if(x.isIntersecting){ x.target.classList.add('in'); io.unobserve(x.target); } }); }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el){ io.observe(el); });
  } else { els.forEach(function(el){ el.classList.add('in'); }); }
  // role buttons preselect the form
  [].forEach.call(d.querySelectorAll('[data-role]'), function(a){
    a.addEventListener('click', function(){ var s=d.getElementById('w'); if(s) s.value=a.getAttribute('data-role'); });
  });
  // thank-you notice after the form relay redirects back
  try{ if(/[?&]sent=1/.test(location.search)){ var m=d.getElementById('sentmsg'); if(m) m.hidden=false; } }catch(e){}
})();
