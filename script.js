// FAQ accordion
document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // Cierra todos los abiertos
    document.querySelectorAll('.faq-item.open').forEach((i) => i.classList.remove('open'));
    // Abre el clickeado si estaba cerrado
    if (!isOpen) item.classList.add('open');
  });
});
