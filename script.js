// Add a click event listener to each image in the gallery
const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
  image.addEventListener('click', () => {
    // Create a modal dialog to display the image
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalImage = document.createElement('img');
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    // Add a click event listener to the modal dialog to close it
    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});
