const toast = document.querySelector('.toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2600);
}

document.querySelectorAll('[data-scroll]').forEach((button) => {
  button.addEventListener('click', () => document.querySelector(button.dataset.scroll).scrollIntoView({ behavior: 'smooth' }));
});

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.room-card').forEach((card) => {
      card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.price !== filter);
    });
  });
});

document.querySelectorAll('.heart').forEach((button) => {
  button.addEventListener('click', () => {
    const saved = button.classList.toggle('saved');
    button.textContent = saved ? '♥' : '♡';
    showToast(saved ? 'Saved to your Pecos list.' : 'Removed from your list.');
  });
});

document.querySelectorAll('.arrow-button').forEach((button) => {
  button.addEventListener('click', () => showToast(`${button.dataset.room} is ready when you are.`));
});

document.querySelector('#signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  document.querySelector('.form-note').textContent = 'You are on the list. Good things are coming.';
});

document.querySelector('.menu-button').addEventListener('click', () => showToast('The full map is coming soon. Start with a stay below.'));
