import { sr } from "./main";

export const scrollRevealHome = () => {
  sr.reveal(".frgmnt_1", {
    delay: 150,
    duration: 1000,
    origin: "top",
    easing: "ease",
    distance: '50px',
    reset: true
  });

  sr.reveal(".frgmnt_2", {
    delay: 150,
    duration: 1000,
    origin: "bottom",
    easing: "ease",
    distance: '50px',
    reset: true
  }); 
};
