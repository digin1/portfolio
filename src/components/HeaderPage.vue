<template>
  <div class="common-layout bg-white p-3 rounded shadow m-2 wave-container">
    <!-- SVG for Wave Animation -->
    <svg ref="waveSvg" class="wave-svg" width="100%" height="100%">
      <!-- Generate 20 wave lines with dynamic colors -->
      <path
        v-for="(color, index) in lines"
        :key="index"
        class="wave-line"
        :stroke="color"
        stroke-width="2"
      />
    </svg>

    <!-- Content Overlay -->
    <div class="content-overlay">
      <img :src="defaultImage" class="profile-image mt-4" alt="Profile Image" />
      <h1 class="username">{{ user[0].metadata.name }}</h1>
      <p class="role">
        <b>System Engineer & Web Developer</b> <br />
        University of Edinburgh
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  props: ['user'],
  data() {
    return {
      defaultImage: require('@/assets/digin.jpeg'), // Ensure the path is correct
      lines: [
        // Define colors for 20 lines (VIBGYOR repeated)
        'red', 'orange', 'yellow', 'green', 'blue',
        'indigo', 'violet', 'red', 'orange', 'yellow',
        'green', 'blue', 'indigo', 'violet', 'red',
        'orange', 'yellow', 'green', 'blue', 'indigo'
      ],
      animationFrameIds: [], // To track multiple animation frames
      resizeTimeout: null,    // For debouncing resize events
    };
  },
  methods: {
    animateLines() {
      const lines = this.$refs.waveSvg.querySelectorAll('.wave-line');
      const container = this.$el; // The common-layout div
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      /**
       * Function to animate a single line.
       * @param {SVGPathElement} line - The SVG path element to animate.
       * @param {Object} params - Parameters for animation.
       */
      const animateLine = (line, params) => {
        const { minLength, maxLength, y1, amplitude, frequency, phase, side } = params;

        const animate = () => {
          const t = performance.now() / 1000;

          // Dynamic length oscillation using sine wave
          const currentLength =
            minLength +
            ((maxLength - minLength) / 2) * (1 + Math.sin(frequency * t + phase));

          // Calculate x1 and x2 based on the side
          let x1, x2;
          if (side === 'left') {
            x1 = 0;
            x2 = currentLength;
          } else if (side === 'right') {
            x1 = containerWidth - currentLength;
            x2 = containerWidth;
          }

          // Moving Y positions using sine and cosine for variation
          const movingY1 = y1 + amplitude * Math.sin(frequency * t + phase);
          const movingY2 = y1 + amplitude * Math.cos(frequency * t + phase);

          // Middle point for Bezier curve to ensure smooth wave
          const middleX = (x1 + x2) / 2;
          const middleY = y1 + amplitude * Math.sin(frequency * t + phase / 2);

          // Generate a curved path using quadratic Bezier curve
          const path = `M ${x1},${movingY1} Q ${middleX},${middleY} ${x2},${movingY2}`;

          // Set the path data for the line
          line.setAttribute('d', path);

          // Continue the animation
          const rafId = requestAnimationFrame(animate);
          this.animationFrameIds.push(rafId);
        };

        // Start the animation
        const rafId = requestAnimationFrame(animate);
        this.animationFrameIds.push(rafId);
      };

      /**
       * Helper function to generate a random number between min and max.
       * @param {number} min - Minimum value.
       * @param {number} max - Maximum value.
       * @returns {number} Random number between min and max.
       */
      const generateRandom = (min, max) => {
        return min + Math.random() * (max - min);
      };

      // Initialize animation parameters for each line
      lines.forEach((line, index) => {
        // Determine side based on index
        const side = index < 10 ? 'left' : 'right';

        // Define parameters
        const minLength = containerWidth * 0.15; // 15% of container width
        const maxLength = containerWidth * 0.35; // 35% of container width

        // Calculate vertical spacing
        const totalLinesPerSide = 10;
        const verticalSpacing = containerHeight / (totalLinesPerSide + 1);
        const y1 = verticalSpacing * ((index % 10) + 1); // Evenly spaced vertically

        const amplitude = generateRandom(10, 30); // Random amplitude between 10 and 30
        const frequency = generateRandom(0.5, 1.5); // Random frequency between 0.5 and 1.5
        const phase = generateRandom(0, Math.PI * 2); // Random phase

        // Animate the line with the defined parameters
        const params = { minLength, maxLength, y1, amplitude, frequency, phase, side };
        animateLine(line, params);
      });
    },
    handleResize() {
      // Cancel any ongoing animations
      this.animationFrameIds.forEach((rafId) => cancelAnimationFrame(rafId));
      this.animationFrameIds = [];

      // Debounce the resize event to prevent excessive calls
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.animateLines();
      }, 200); // 200ms debounce
    },
  },
  mounted() {
    this.animateLines();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() { // Updated from beforeDestroy to beforeUnmount
    window.removeEventListener('resize', this.handleResize);
    // Cancel all animation frames to prevent memory leaks
    this.animationFrameIds.forEach((rafId) => cancelAnimationFrame(rafId));
    this.animationFrameIds = [];
    clearTimeout(this.resizeTimeout);
  },
};
</script>

<style scoped>
.common-layout {
  position: relative; /* To position SVG and overlay correctly */
  overflow: hidden;   /* Hide overflow from SVG animations */
  width: relative;        /* Ensure full width */
  height: 400px;      /* Adjust height as needed */
  background-color: #f9f9f9; /* Light background for contrast */
}

/* SVG for Wave Animation */
.wave-svg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0; /* Behind the content */
  width: 100%;
  height: 100%;
}

/* Wave Lines */
.wave-line {
  stroke-linecap: round;
  fill: transparent;
}

/* Content Overlay */
.content-overlay {
  position: relative;
  z-index: 0; /* Above the SVG */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

/* Profile Image */
.profile-image {
  border-radius: 50%;
  width: 180px;
  height: 180px;
  border: 3px solid #ddd;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Username */
.username {
  font-size: 1.8rem;
  margin-top: 15px;
  font-weight: bold;
  color: #333;
}

/* Role */
.role {
  font-size: 1rem;
  color: #666;
  margin-top: 10px;
}

/* Responsive Adjustments */
@media (max-width: 600px) {
  .common-layout {
    height: 600px; /* Adjust height for smaller screens */
  }

  .profile-image {
    width: 120px;
    height: 120px;
  }

  .username {
    font-size: 1.5rem;
  }

  .role {
    font-size: 0.9rem;
  }
}
</style>
