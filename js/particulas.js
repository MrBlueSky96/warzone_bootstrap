var maxParticles = 95;

particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": maxParticles,
      "density": {
        "enable": false,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#a4852b"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 2,
        "color": "#2aa419"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 2.3976023976023977,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.2683101981549727,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 29.987610382026364,
      "direction": "top-left",
      "random": true,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 631.3181133058181,
        "rotateY": 5445.118727262681
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
}
)