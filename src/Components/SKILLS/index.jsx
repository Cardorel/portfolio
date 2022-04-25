import React,{useEffect} from "react";
import "./skills.styles.scss";
import Language from "./language";
import SkillsDevLeft from "./SkillsDevLeft";
import SkillsDevRight from "./SkillsDevRight";
import { scrollRevealSkill } from "../../SCROLLREVEAL/skills";

export default function Skills() {

  useEffect(() => {
    scrollRevealSkill();
  }, [])

  return (
    <section id="Skills">
      <div className="skills_container">
        <h1>Skills</h1>
        <div className="Developing_skill">
          <p>Developing</p>
        </div>
        <div className="skills_content">
          <SkillsDevLeft/>
          <SkillsDevRight/>
        </div>
        <Language/>
      </div>
    </section>
  );
}
