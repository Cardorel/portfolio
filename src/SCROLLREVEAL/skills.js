import { sr } from "./main";

export const scrollRevealSkill = () => {
   sr.reveal(".Developing_skill", {
    delay: 150,
    duration: 1000,
    origin: "bottom",
    easing: "ease",
    distance: '100px',
    reset: true
  });

  sr.reveal(".skills_left", {
    delay: 150,
    duration: 1000,
    origin: "top",
    easing: "ease",
    distance: '500px',
    reset: true
  });

  sr.reveal(".skills_right", {
    delay: 150,
    duration: 1000,
    origin: "top",
    easing: "ease",
    distance: '500px',
    reset: true
  });

  sr.reveal(".header_language", {
    delay: 400,
    duration: 1000,
    origin: "top",
    easing: "ease",
    distance: '50px',
    reset: true
  });

  sr.reveal(".language_left", {
    delay: 150,
    duration: 1000,
    origin: "bottom",
    easing: "ease",
    distance: '500px',
    reset: true
  });

  sr.reveal(".language_right", {
    delay: 100,
    duration: 1000,
    origin: "bottom",
    easing: "ease",
    distance: '500px',
    reset: true
  });


};
