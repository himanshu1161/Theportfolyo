import React, { useEffect, useState } from "react";
import { activeSkillProgress } from "../utilits";

const Skills = ({ data }) => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      activeSkillProgress();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!data || !data.user || !data.user.skills || data.user.skills.length === 0) {
    return "Not available";
  }
  const enabledSkills = data.user.skills
    .filter(skill => skill.enabled) 
    .sort((a, b) => a.sequence - b.sequence);


  const skillsToShow = showAllSkills ? enabledSkills : enabledSkills.slice(0, 5);

  return (
    <div className="kura_tm_section" id="skills">
      <div className="kura_tm_skills">
        <div className="container">
          <div className="skills_inner">
            <div className="left">
              <div className="kura_tm_main_title light">
                <span>Skills</span>
                <h3>Programming Skills</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration=".7s">
                <p>{data?.user?.about?.description}</p>
              </div>
              <div className="dodo_progress wow fadeInUp" data-wow-duration=".7s" data-wow-delay=".2s">
                {skillsToShow.map((skill, index) => (
                  <div className="progress_inner" key={index} data-value={skill.percentage}>
                    <span>
                      <span className="label">{skill.name}</span>
                      <span className="number">{skill.percentage}</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" style={{ width: `${skill.percentage}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => setShowAllSkills(!showAllSkills)} className="btn_one">
                {showAllSkills ? "View Less" : "View More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
