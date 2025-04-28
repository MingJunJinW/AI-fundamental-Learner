window.addEventListener('DOMContentLoaded', () => {

  const menu = document.querySelector('.menu');
  const menuButton = document.getElementById('menuButton');
  const menuContent = document.getElementById('menuContent');

  menuButton.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      // When closing: play bounce-up animation
      menuContent.style.animation = 'menuSlideBounceUp 0.5s ease forwards';
      setTimeout(() => {
        menu.classList.remove('open');
        menuContent.style.animation = ''; // Reset after animation
      }, 500); // Match the animation duration
    } else {
      menu.classList.add('open');
      menuContent.style.animation = 'menuSlideBounce 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
    }
  });


  const boxes = document.querySelectorAll('.box');
  const popup = document.querySelector('.popup');
  const popupTitle = popup.querySelector('.popup-title');
  const popupText = popup.querySelector('.popup-text');

  const hoverTip = document.getElementById('hoverTip');
  const tip = document.querySelectorAll('.deep');

  // Hover Tip
  tip.forEach((e) => {
    e.addEventListener('mouseenter', (a) => {
      // Show hover tip
      hoverTip.style.display = 'block';
    });
    e.addEventListener('mousemove', (a) => {
      // Follow cursor
      hoverTip.style.left = (a.pageX + 15) + 'px';
      hoverTip.style.top = (a.pageY + 15) + 'px';
    });
    // Hide popup on mouseleave
    e.addEventListener('mouseleave', () => {
      hoverTip.style.display = 'none';
    });
  });

  boxes.forEach((box) => {
    // Show popup on mouseenter
    box.addEventListener('mouseenter', (e) => {
      const title = e.target.getAttribute('data-title');
      const text = e.target.getAttribute('data-text');

      // Update tooltip content
      popupTitle.textContent = title;
      popupText.textContent = text;

      // Show the popup
      popup.style.display = 'block';

    });

    // Hide popup on mouseleave
    box.addEventListener('mouseleave', () => {
      popup.style.display = 'none';
    });
  });
});
