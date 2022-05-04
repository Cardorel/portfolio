import React,{useEffect} from "react";
import ImgProject from "./ImgProject";
import "./project.style.scss";
import { scrollRevealProject } from "../../SCROLLREVEAL/project";
import data from '../../api/project.json'

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
          {
            data && data.map(({ bgImage, description, source, title }, idx) => <ImgProject
            key={idx}
            title={title}
            description={description}
            imgSrc={bgImage}
            link={source}
          />)
          }
        </div>
      </div>
    </section>
  );
}
