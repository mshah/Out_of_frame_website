(function(){
  const buttons=Array.from(document.querySelectorAll('[data-mode]'));
  const view=document.querySelector('.rhino-images');
  buttons.forEach(button=>button.addEventListener('click',()=>{
    const mode=button.dataset.mode;
    view.dataset.view=mode;
    buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  }));
  // The two small previews originate from user-supplied PDF scans.
  // For print-level detail, follow the source-publication links below the essay.
  const sources=[
    {url:'https://rhinoresourcecenter.com/wp-content/uploads/2022/02/1645977131.pdf#page=9',label:'View original 1898 printed page'},
    {url:'https://www.biodiversitylibrary.org/item/71159',label:'View original 1900 book'}
  ];
  // Images are intentionally not reconstructed or combined into a fictional whole.
  document.querySelectorAll('.rhino-scan').forEach((node,i)=>{
    const a=document.createElement('a');
    a.href=sources[i].url;a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label',sources[i].label);
    a.className='rhino-scan-link';a.textContent='View the original published scan ↗';
    node.appendChild(a);
  });
})();