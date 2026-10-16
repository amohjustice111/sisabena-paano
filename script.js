(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      toggle.textContent = isOpen ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      toggle.textContent = '☰';
    }));
  }

  const phone = '233594842730';
  const openWhatsApp = message => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const orderForm = document.getElementById('whatsapp-order-form');
  if (orderForm) orderForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(orderForm);
    const quantity = Math.max(1, Number(data.get('quantity')) || 1);
    const notes = String(data.get('notes') || '').trim();
    const message = [
      'Hello Sister Abena Paano Tea Bread! I would like to make an order.',
      `Bread/order: ${data.get('bread')}`,
      `Quantity: ${quantity}`,
      `Preference: ${data.get('method')}`,
      notes ? `Extra details: ${notes}` : '',
      'Please confirm availability and the total price. Thank you!'
    ].filter(Boolean).join('\n');
    openWhatsApp(message);
  });

  const reviewForm = document.getElementById('whatsapp-review-form');
  if (reviewForm) reviewForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(reviewForm);
    const name = String(data.get('name') || '').trim() || 'A customer';
    const review = String(data.get('review') || '').trim();
    if (!review) return;
    const message = `Hello Sister Abena Paano Tea Bread! I would like to share customer feedback.\nName: ${name}\nRating: ${data.get('rating')}\nReview: ${review}\nYou may contact me if you need clarification.`;
    openWhatsApp(message);
  });
})();
