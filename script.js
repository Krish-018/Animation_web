// var nav = document.querySelector("#nav")
// var btext = document.querySelector("#c1 h1")

// var tl = gsap.timeline()
// tl.from("#nav", {
//     opacity: 0,
//     y: 20,
//     duration: 0.5,
//     ease: "none",
// })


// tl.from("#nav h4,button", {
//     opacity: 0,
//     y: 20,
//     duration: 1,
//     ease: "none",
//     stagger:0.1
// })

// tl.from("#c2 img", {
//     opacity: 0,
//     x: -20,
//     duration: 0.5,
//     ease: "none"
// })   


// tl.from("#c1 h1", {
//     opacity: 0,
//     x: 20,
//     duration: 0.7,
//     ease: "none"
// })


// tl.from("#c1 p", {
//     opacity: 0,
//     x: -20,
//     duration: 0.7,
//     ease: "none"
// })   

// tl.to("#c2 button", {
//     opacity: 0,
//     x: 20,
//     duration:1.2,
//     ease: "none"
// },"+=1")  


// tl.from("#lower-icon i", {
//     opacity: 0,
//     y: 20,
//     duration: 0.5,
//     ease: "none",
//     stagger:0.2
// })   

// function Page1anim() {
//     var nav = document.querySelector("#nav");
// var btext = document.querySelector("#c1 h1");

// var tl = gsap.timeline();

// // Animate the navigation bar
// tl.from("#nav", {
//     opacity: 0,
//     y: 20,
//     duration: 0.4,
//     ease: "power2.out",
// });

// // Stagger the appearance of navigation items (h4 and button)
// tl.from("#nav h4, button", {
//     opacity: 0,
//     y: 20,
//     duration: 0.7,
//     ease: "power2.out",
//     stagger: 0.1
// });

// // Animate the image in #c2
// tl.from("#c2 img", {
//     opacity: 0,
//     x: -20,
//     duration: 0.4,
//     ease: "power2.out"
// });

// // Animate the h1 in #c1
// tl.from("#c1 h1", {
//     opacity: 0,
//     x: 20,
//     duration: 0.5,
//     ease: "power2.out"
// });

// // Animate the paragraph in #c1
// tl.from("#c1 p", {
//     opacity: 0,
//     x: -20,
//     duration: 0.5,
//     ease: "power2.out"
// });

// // Keep the button visible after animation, using 'fromTo' for clarity
// tl.fromTo("#c2 button", {
//     opacity: 0,
//     x: 20
// }, {
//     opacity: 1, // Ensure it stays visible
//     x: 0, // Return to its normal position
//     duration: 0.5,
//     ease: "power2.out"
// // }, "+=0.1"); // Add a delay before the button animates
// });

// // Animate icons in #lower-icon with stagger effect
// tl.from("#lower-icon i", {
//     opacity: 0,
//     y: 20,
//     duration: 0.4,
//     ease: "power2.out",
//     stagger: 0.2
// });

// }


// Page1anim()


// GSAP animation with ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

// Navigation bar animation
gsap.from("#nav", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
});

// Logo spinning animation
gsap.to("#logo", {
  rotate: 360,
  duration: 3,
  repeat: -1,
  ease: "none",
});

// Header text animation
gsap.from("#c1 h1", {
  x: -100,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#c1",
    start: "top 80%",
    end: "bottom 60%",
    scrub: 1,
  },
});

// Paragraph fade-in animation
gsap.from("#c1 p", {
  x: 100,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#c1",
    start: "top 80%",
    end: "bottom 60%",
    scrub: 1,
  },
});

// Image and button sliding in
gsap.from("#c2 img", {
  scale: 0.5,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#c2",
    start: "top 80%",
    end: "bottom 60%",
    scrub: 1,
  },
});

gsap.from("#button1", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#c2",
    start: "top 80%",
    end: "bottom 60%",
    scrub: 1,
  },
});

// Lower icons animation
gsap.from("#lower-icon i", {
  scale: 0.5,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: "#lower-icon",
    start: "top 90%",
    end: "bottom 60%",
    scrub: 1,
  },
});

// Page 2 title and paragraph animation
gsap.from("#hero h1", {
  x: -100,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#hero",
    start: "top 80%",
    end: "bottom 60%",
    scrub: 1,
  },
});

gsap.from("#hero p", {
  x: 100,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#hero",
    start: "top 80%",
    end: "bottom 60%",
    scrub: 1,
  },
});

// Box container animation
gsap.from("#box-container #box1", {
  scale: 0.8,
  opacity: 0,
  stagger: 0.3,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#box-container",
    start: "top 80%",
    end: "bottom 60%",
    scrub: 1,
  },
});



gsap.registerPlugin(ScrollTrigger);

gsap.to("#info-box", {
  background: "linear-gradient(135deg, #1CBAD2 0%, #ffffff 100%)",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#info-box",
    start: "top 75%", // Animation starts when #info-box enters 75% from the top of the viewport
    end: "bottom 25%", // Ends when #info-box is 25% from the bottom
    scrub: true, // Smoothly scrubs the animation during scroll
    toggleActions: "play none none reverse" // Animates when entering and reverses when leaving
  }
});




// GSAP and ScrollTrigger Animations for .page3 section

// Animate the Hero Section
gsap.from("#hero1 h1", {
  scrollTrigger: {
    trigger: "#hero1 h1",
    start: "top 80%", // Trigger when the top of h1 is at 80% of the viewport
    end: "bottom 60%", // End when the bottom of h1 is at 60% of the viewport
    scrub: 1, // Smooth scrubbing
  },
  y: 100, // Start from 100px below
  opacity: 0, // Start invisible
  duration: 1.5, // Animation duration
  ease: "power4.out", // Easing for a smooth effect
});

gsap.from("#hero1 p", {
  scrollTrigger: {
    trigger: "#hero1 p",
    start: "top 80%",
    end: "bottom 60%",
    scrub: 1,
  },
  y: 150,
  opacity: 0,
  duration: 1.5,
  delay: 0.2,
  ease: "power4.out",
});

// Animate the Info Boxes in .page3
gsap.from("#text-container1 #text1", {
  scrollTrigger: {
    trigger: "#text-container1",
    start: "top 90%",
    end: "bottom 30%",
    scrub: 1,
  },
  opacity: 0,
  scale: 0.8, // Scale down the boxes
  stagger: 0.3, // Delay between each box animation
  duration: 1.5,
  ease: "power4.out",
});

gsap.from("#text-container1 h3, #text-container1 i", {
  scrollTrigger: {
    trigger: "#text-container1",
    start: "top 90%",
    end: "bottom 30%",
    scrub: 1,
  },
  opacity: 0,
  y: 50, // Slide up effect
  stagger: 0.3, // Animate the icons and text one by one
  duration: 1.5,
  ease: "power4.out",
});



// start: "top 120%",
// end: "bottom 100%",

// start: "top 135%",
// end: "bottom 40%",