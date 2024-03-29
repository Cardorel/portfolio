import React, { useEffect } from "react";
import "./about.styles.scss";
import "boxicons";
import { scrollRevealAbout } from "../../SCROLLREVEAL/about";

export default function About() {

  //Scroll Anmation
  useEffect(() => {
    scrollRevealAbout()
  }, [])




  return (
    <section className="about" id="About">
      <div className="about_container">
        <h1>About</h1>
        <div className="about_content">
          <img src="FB_IMG_1598735920790.jpg" alt="imageProfil" className="img_profil" />
          <div className="profil_content">
            <h1 className="about_name">I'm Junes Ngassaki</h1>
            <p className="who_I_am">Web and App developer</p>
            <p className="paragraph_about">
              I have a Master degree in Geophysics from Oil and Gas University of Ukraine and after the Geophysics degree I had decided to continue with another degree in Computer science and all so I have more than 2 years of experience as a front-end developer. I have advanced knowledge of React JS, CSS , HTML , Angular, REST API and outstanding I understand another languages like PHP, JAVA, C#, .Net and so...
            </p>
            <p className="paragraph_about">
              <span className="font-weight-solving">I love to solve problems</span>. Whether it's finding the most elegant way to write a line of code or figuring out which chord fits best into a progression, I love the challenge of finding a way and discovering solutions. Maybe that's why I love writing , reading and the satisfaction that comes from finding just the right word; or thtat why I studied Geophysics at the university to figure out how our Earth works and no so long, i sarted to study psychology and rationality in my spare time to figure out how people think. As long as there's a problem to solve or a challenge to puzzle over, it's bound to be something I love!
            </p>
            <p>
              -&#62; Wondering if I might be a good fit for your company? Check out <a href="resume-junes.pdf">my resume</a> and you can find my social networks, below!
            </p>
            <div className="network_icon">
              <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/cardorel.ngassaki">
                <i className="bx bxl-facebook-circle"></i>
              </a>
              <a rel="noopener noreferrer" target="_blank" className="github" href="https://github.com/Cardorel">
                <i className="bx bxl-github"></i>
              </a>
              <a
                rel="noopener noreferrer" target="_blank"
                className="linkedin"
                href="https://www.linkedin.com/in/junes-ngassaki-b0479b127/"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
