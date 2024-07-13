document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalImage = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.close-btn');

  document.querySelectorAll('.description-btn').forEach(button => {
    button.addEventListener('click', event => {
      const card = event.target.closest('.menu-card');
      const title = card.getAttribute('data-title');
      const description = card.getAttribute('data-description');
      const image = card.getAttribute('data-image');

      modalTitle.textContent = title;
      modalDescription.textContent = description;
      modalImage.src = image;
      modalImage.alt = title;
      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', event => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});