
(function(){
  const modal=document.getElementById('projectModal');
  const modalImg=document.getElementById('modalImg');
  const modalTitle=document.getElementById('modalTitle');
  const modalDesc=document.getElementById('modalDesc');
  if(!modal) return;
  document.querySelectorAll('.project-photo-card').forEach(card=>{
    card.addEventListener('click',()=>{
      modalImg.src=card.dataset.img;
      modalImg.alt=card.dataset.title || 'Project image';
      modalTitle.textContent=card.dataset.title || '';
      modalDesc.textContent=card.dataset.description || '';
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
    });
  });
  function closeModal(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  }
  modal.querySelectorAll('[data-close="true"]').forEach(el=>el.addEventListener('click',closeModal));
  document.addEventListener('keydown',e=>{if(e.key==='Escape' && modal.classList.contains('is-open')) closeModal();});
})();
