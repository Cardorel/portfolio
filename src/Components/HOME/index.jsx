import React, { useEffect } from "react";
import "./home.styles.scss";
import { scrollRevealHome } from "../../SCROLLREVEAL/home";

export default function Home() {
  //Scroll Reveal animation

  useEffect(() => {
    scrollRevealHome();
  }, []);
  //Bulbe design
  const innerHeight = window.innerHeight;
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const createEffectColor = () => {
        const section = document.querySelector("section");
        const square = document.createElement("span");

        //get color
        const colors = [
          "#ff7575",
          "#ffff75",
          "#a0ff75",
          "#5075ff",
          "#a075ff",
          "#ffffff",
        ];
        //Add class
        square.classList.add("square_color");
        //create the random size
        const size = Math.random() * 100;
        const bg = colors[Math.floor(Math.random() * colors.length)];
        //create the width and height
        square.style.width = 22 + size + "px";
        square.style.height = 22 + size + "px";
        //create the to and left
        square.style.top = Math.random() * innerHeight + "px";
        square.style.right = Math.random() * innerHeight + "px";
        square.style.backgroundColor = bg;

        section.appendChild(square);
        setTimeout(() => {
          square.remove();
        }, 7000);
      };

      setInterval(createEffectColor, 200);
    }
    return () => {
      mounted = false;
    };
  }, [innerHeight]);

  return (
    <section className="home" id="Home">
      <div className="home_container">
        <div className="home_title_container">
          <div className="home-title-content">
            <p>Good morning!</p>
            <p>
              My name is <span>Cardorel Ngassaki</span>, and i'm a somophore
              styding Computer science at{" "}
              <a href="https://kiev.itstep.org/">IT Step Academy</a> in north-central of Ukraine along the Dnieper River(<a href="https://en.wikipedia.org/wiki/Kyiv">Kiev</a>).
            </p>
          <div>
            <a href="#About" className="go-to-about">About Me <span>-&#62;</span></a>
          </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,160L48,144C96,128,192,96,288,74.7C384,53,480,43,576,80C672,117,768,203,864,240C960,277,1056,267,1152,240C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="home-center"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,0L48,5.3C96,11,192,21,288,69.3C384,117,480,203,576,250.7C672,299,768,309,864,288C960,267,1056,213,1152,213.3C1248,213,1344,267,1392,293.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
