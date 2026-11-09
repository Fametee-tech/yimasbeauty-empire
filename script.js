(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = '☰';
    }));
  }
  const dateField = document.getElementById('booking-date');
  if (dateField) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    dateField.min = localToday;
  }
  document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
    const select = document.getElementById('service');
    if (select) {
      const wanted = link.dataset.service;
      const match = [...select.options].find(option => option.text.toLowerCase().includes(wanted.toLowerCase()));
      if (match) select.value = match.value;
    }
  }));
  const form = document.getElementById('booking-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = [
      'Hello Yimas Beauty Empire! I would like to request an appointment.',
      '',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Service: ${data.get('service')}`,
      `Preferred date: ${data.get('date')}`,
      `Preferred time: ${data.get('time')}`,
      data.get('notes') ? `Style details: ${data.get('notes')}` : '',
      '',
      'I understand this is a request and the appointment is not confirmed until your team replies. Please share availability and deposit instructions.'
    ].filter(Boolean).join('\n');
    const url = `https://wa.me/2347038724293?text=${encodeURIComponent(message)}`;
    const status = document.getElementById('form-status');
    if (status) status.textContent = 'Opening WhatsApp with your booking details. Please press Send in WhatsApp to submit your request.';
    window.open(url, '_blank', 'noopener,noreferrer');
  });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
