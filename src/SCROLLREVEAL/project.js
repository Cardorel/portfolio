import { sr } from "./main";

export const scrollRevealProject = () => {
  sr.reveal(".sub_header", {
    delay: 200,
    duration: 1000,
    origin: "right",
    easing: "ease",
    distance: '10px',
    reset: true
  });

  sr.reveal(".content_in_project", {
    delay: 200,
    duration: 1000,
    origin: "top",
    easing: "ease",
    distance: '100px',
    reset: true,
    interval: 100
  }); 

};
