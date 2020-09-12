import React from "react";

export default function ImgProject({
  imgSrc,
  number,
  title,
  description,
  link,
}) {
  return (
    <div className="content_in_project">
      <img src={imgSrc} alt={title} />
      <div className="absolue_content">
        <div className="project_contenu">
          <h3>Project {number} <span> {title}</span></h3>
            <p>{description}</p>
            <a rel="noopener noreferrer" target="_blank" href={link}><button>SEE PROJECT</button></a>
        </div>
      </div>
    </div>
  );
}
