    // Function to create sparkling stars
    function createSparkle(x, y) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.width = `${Math.random() * 10 + 5}px`;
      sparkle.style.height = sparkle.style.width; // Keep width and height equal for circular stars

      document.body.appendChild(sparkle);

      // Remove sparkle after animation ends
      setTimeout(() => sparkle.remove(), 1000);
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
