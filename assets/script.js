    // Function to create sparkles
    function createSparkle(x, y) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      document.body.appendChild(sparkle);

      // Remove sparkle after animation ends
      setTimeout(() => sparkle.remove(), 600);
    }

    // Mouse move sparkle effect
    document.addEventListener('mousemove', (e) => {
      createSparkle(e.pageX, e.pageY);
    });

    // Touch screen sparkle effect
    document.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      createSparkle(touch.pageX, touch.pageY);
    });

    // Touch tap sparkle effect
    document.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      createSparkle(touch.pageX, touch.pageY);
    });
