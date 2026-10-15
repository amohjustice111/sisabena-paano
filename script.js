const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    toggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    toggle.textContent = '☰';
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();


// Prepare customer orders and reviews as WhatsApp messages.
const bakeryWhatsApp = '233594842730';
function openWhatsAppMessage(message) {
  const url = `https://wa.me/${bakeryWhatsApp}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

const orderForm = document.getElementById('whatsapp-order-form');
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const bread = document.getElementById('bread-choice').value;
    const quantity = document.getElementById('bread-quantity').value;
    const method = document.getElementById('order-method').value;
    const notes = document.getElementById('order-notes').value.trim();
    const message = [
      'Hello Sister Abena Paano Tea Bread! I would like to make an order.',
      `Bread / enquiry: ${bread}`,
      `Quantity: ${quantity}`,
      `Preference: ${method}`,
      notes ? `Extra details: ${notes}` : '',
      'Please confirm availability and the price. Thank you!'
    ].filter(Boolean).join('\n');
    openWhatsAppMessage(message);
  });
}

const reviewForm = document.getElementById('whatsapp-review-form');
if (reviewForm) {
  reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('review-name').value.trim();
    const rating = document.getElementById('review-rating').value;
    const review = document.getElementById('review-message').value.trim();
    const message = [
      'Hello Sister Abena Paano Tea Bread! I would like to share customer feedback.',
      name ? `Name: ${name}` : '',
      `Rating: ${rating}`,
      `Review: ${review}`,
      'You have my permission to receive this feedback privately. Please ask me before publishing my name or review publicly.'
    ].filter(Boolean).join('\n');
    openWhatsAppMessage(message);
  });
}
