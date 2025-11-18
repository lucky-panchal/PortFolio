import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 1️⃣ Hero Section
export const heroAnimation = () => {
  gsap.from(".home .hero-title", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from(".home .hero-subtitle", {
    y: 30,
    opacity: 0,
    delay: 0.4,
    duration: 1,
    ease: "power3.out",
  });

  gsap.to(".home .hero-image", {
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      scrub: true,
    },
    y: -100,
    ease: "none",
  });
};

// 2️⃣ Work / Projects Section
export const projectsAnimation = () => {
  gsap.from(".work .project-card", {
    scrollTrigger: {
      trigger: ".work .projects-grid",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.to(".work .project-card img", {
    scrollTrigger: {
      trigger: ".work .projects-grid",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    scale: 1.05,
    ease: "none",
  });
};

// 3️⃣ Skills Section
export const skillsAnimation = () => {
  gsap.from(".skills .skill-item", {
    scrollTrigger: {
      trigger: ".skills",
      start: "top 90%",
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: "back.out(1.7)",
  });
};

// 4️⃣ Section Background Color Transitions
export const backgroundTransitions = () => {
  // Background transitions disabled
};

// 🎥 Hero to Project Scene Transition
export const sceneHeroToProject = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true, // keeps hero fixed while animating
    },
  });

  tl.to(".hero-title", { yPercent: -50, opacity: 0 })
    .to(".hero-image", { scale: 1.2, opacity: 0 }, "<")
    .from(".work", { yPercent: 100, opacity: 0 }, "<50%");
};

// Multi-Layer Parallax Depth
export const parallaxLayers = () => {
  gsap.utils.toArray(".parallax .layer").forEach((layer, i) => {
    gsap.to(layer, {
      yPercent: -10 * (i + 1),
      ease: "none",
      scrollTrigger: { trigger: ".parallax", scrub: true },
    });
  });
};