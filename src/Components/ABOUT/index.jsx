import React, {useEffect} from "react";
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
              Graduated with a Master degree in Geophysics and certified as Tech
              in CCNA (Cisco Certified Network Associate) and currently pursing
              a course in programming at Step Academy.
              <br />
              <span>
                I love coding and try to give all my time to be better.
              </span>
            </p>
            <div className="network_icon">
              <a href="https://www.facebook.com/cardorel.ngassaki">
                <i className="bx bxl-facebook-circle"></i>
              </a>
              <a className="github" href="github.com/Cardorel">
                <i className="bx bxl-github"></i>
              </a>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/cardorel-ngassaki-b0479b127/"
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
