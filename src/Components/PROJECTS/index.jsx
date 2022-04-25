import React,{useEffect} from "react";
import ImgProject from "./ImgProject";
import "./project.style.scss";
import { scrollRevealProject } from "../../SCROLLREVEAL/project";

export default function Project() {

  useEffect(() => {
    scrollRevealProject()
  }, [])

  return (
    <section id="Projects">
      <div className="project_container">
        <div className="header_project">
          <h1>Projects</h1>
          <div className="sub_header">Here my lastest projects.</div>
        </div>
        <div className="porject_img_content">
          <ImgProject
            title="Xherbs"
            description="At the moment Xherbs is only my first project E-commerce"
            imgSrc="https://i.ibb.co/6w0W6RL/blur-cactus-close-up-focus-269255.jpg"
            link="http://xherbs.netlify.app/"
            number="1"
          />
          <ImgProject
            title="Test task"
            description="Test task provided by anonyme company. "
            imgSrc="https://i.ibb.co/s2YmytG/pexels-kaboompics-com-5775.jpg"
            link="http://test-task-abz-agency.netlify.app/"
            number="2"
          />
          <ImgProject
            title="Ukrafrik hotel"
            description="Ukrafrik is one of the first project in React JS."
            imgSrc="https://i.ibb.co/gRGrrMM/ukrafrik-hotel.png"
            link="http://ukrafrik-hotel.ho.ua"
            number="3"
          />
           <ImgProject
            title="Portofolio"
            description="My portofolio is connected with a database."
            imgSrc="https://i.ibb.co/WNhqQbq/FB-IMG-1598735920790.jpg"
            link="https://yurtik-supreme.netlify.app/"
            number="4"
          />
          <ImgProject
          title="Timer"
          description="Small project. Built with Rxjs"
          imgSrc="https://i.ibb.co/RYDZhmx/Horloge.jpg"
          link="https://timer-r.netlify.app/"
          number="5"
          />
           <ImgProject
          title="Lefleuve"
          description="L'immobilier, c'est nous!"
          imgSrc="https://i.ibb.co/J79XTjh/lefleuve-logo.jpg"
          link="https://lefleuve-cg.netlify.app/"
          number="6"
        />
          <ImgProject
          title="Lefleuve-admin"
          description="Unfortunately the project remains private and therefore no info"
          imgSrc="https://i.ibb.co/s2Q7b9s/le-fleuve-office.jpg"
          link="https://lefleuve-cg-dashboard.netlify.app/"
          number="7"
          />
           <ImgProject
          title="Vkursi"
          description="My job in Vkursi"
          imgSrc="https://i.ibb.co/jHgrycT/video-preview.jpg"
          link="https://vkursi.pro/profile/zemliresources"
          number="8"
        />
        </div>
      </div>
    </section>
  );
}
