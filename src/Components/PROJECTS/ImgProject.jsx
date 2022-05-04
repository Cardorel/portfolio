import React from "react";

export default function ImgProject({
  imgSrc,
  title,
  description,
  link,
}) {
  return (
    <div className="content_in_project">
      <img src={imgSrc} alt={title} />
      <div className="absolue_content">
        <div className="project_contenu">
          <h3>{title}</h3>
          <p>{description}</p>
          <button>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={link}>SEE PROJECT</a>
          </button>        
        </div>
      </div>
    </div>
  );
}
