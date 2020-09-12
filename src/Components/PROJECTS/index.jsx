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
            imgSrc="https://i.ibb.co/1LMFCMV/xherbs.png"
            link="http://xherbs.netlify.app/"
            number="1"
          />
          <ImgProject
            title="Test task"
            description="Test task provided by anonyme company. "
            imgSrc="https://i.ibb.co/bszW3zw/test-task-2.png"
            link="http://test-task-abz-agency.netlify.app/"
            number="2"
          />
          <ImgProject
            title="Test task"
            description="Ukrafrik is one of my first project in React JS."
            imgSrc="https://i.ibb.co/gRGrrMM/ukrafrik-hotel.png"
            link="ukrafrik-hotel.ho.ua"
            number="3"
          />
           <ImgProject
            title="Test task"
            description="Ukrafrik is one of my first project in React JS."
            imgSrc="https://i.ibb.co/cyLRFx4/portofolio.png"
            link="ukrafrik-hotel.ho.ua"
            number="3"
          />
        </div>
      </div>
    </section>
  );
}
