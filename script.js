const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menuToggle?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.querySelectorAll('.thumb').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#main-photo').src = button.dataset.image;
    document.querySelectorAll('.thumb').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
