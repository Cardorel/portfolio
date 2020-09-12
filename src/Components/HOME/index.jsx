import React, { useEffect } from "react";
import "./home.styles.scss";
import { scrollRevealHome } from "../../SCROLLREVEAL/home";

export default function Home() {

  //Scroll Reveal animation
    
  useEffect(() => {
    scrollRevealHome()
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
          <h1 className="home_title">
            <span className="frgmnt_1">You're</span> <br />{" "}
            <span className="frgmnt_2">welcome.</span>
          </h1>
        </div>
        <img
          src="FB_IMG_1598735920790.jpg"
          alt="CardoImage"
          className="home_img"
        />
      </div>
    </section>
  );
}
