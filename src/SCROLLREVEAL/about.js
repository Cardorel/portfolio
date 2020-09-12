import { sr } from "./main";

export const scrollRevealAbout = () => {
   sr.reveal(".img_profil", {
    delay: 200,
    duration: 1000,
    origin: "top",
    easing: "ease",
    distance: '80px',
    reset: true
  });

  sr.reveal(".profil_content", {
    delay: 250,
    duration: 1000,
    origin: "top",
    easing: "ease",
    distance: '90px',
    reset: true
  });

};
