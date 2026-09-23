const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menuToggle?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.querySelectorAll('.vehicle-gallery').forEach(gallery => {
  const mainPhoto = gallery.querySelector('.main-photo');
  const thumbs = gallery.querySelectorAll('.thumb');

  thumbs.forEach(button => {
    button.addEventListener('click', () => {
      mainPhoto.src = button.dataset.image;

      thumbs.forEach(item => item.classList.remove('active'));
      button.classList.add('active');
    });
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
