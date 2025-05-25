// carousel.js
// This script makes the timeline cards move in a simple, automatic carousel.
// It uses only basic JavaScript for beginners.

// Wait until the page is loaded
window.onload = function() {
  const carousel = document.querySelector('.carousel');
  const cards = document.querySelectorAll('.carousel-card');
  let currentIndex = 0;

  // Always get the current card width (responsive)
  function getCardWidth() {
    return cards[0].offsetWidth;
  }
  const totalCards = cards.length;

  // Set the carousel to use flex and transition
  carousel.style.display = 'flex';
  carousel.style.transition = 'transform 0.5s linear';

  // Function to move to the next card
  function moveCarousel() {
    currentIndex++;
    if (currentIndex >= totalCards) {
      currentIndex = 0;
    }
    // Get the width of the card each time (for responsiveness)
    const cardWidth = getCardWidth();
    // Move the carousel to show the next card
    carousel.style.transform = 'translateX(' + (-cardWidth * currentIndex) + 'px)';
  }

  // Move the carousel every 2 seconds
  setInterval(moveCarousel, 2000);
};

// This script adds edge-hover scrolling to the timeline carousel.
window.onload = function() {
  // Get the timeline section and all cards
  const section = document.querySelector('section');
  const cards = section.querySelectorAll('div');

  // Only enable edge-hover scroll on large screens (horizontal scroll)
  function isHorizontal() {
    return window.innerWidth > 800;
  }

  let scrollInterval = null;

  section.addEventListener('mousemove', function(e) {
    if (!isHorizontal()) return; // Only on desktop
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to section
    const edgeSize = 80; // px, how close to edge triggers scroll
    const scrollSpeed = 12; // px per frame

    // Clear any previous interval
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }

    if (x < edgeSize) {
      // Near left edge, scroll left
      scrollInterval = setInterval(() => {
        section.scrollLeft -= scrollSpeed;
      }, 16);
    } else if (x > rect.width - edgeSize) {
      // Near right edge, scroll right
      scrollInterval = setInterval(() => {
        section.scrollLeft += scrollSpeed;
      }, 16);
    }
  });

  section.addEventListener('mouseleave', function() {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }
  });

  // Also stop scrolling if mouse stops moving near the edge
  section.addEventListener('mouseout', function() {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }
  });
};
