import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics",
  progressData: [
    {
      id: 1,
      name: "C#",
      percentage: 90,
    },
    {
      id: 2,
      name: "Unity",
      percentage: 95,
    },
    {
      id: 3,
      name: "Unreal Engine",
      percentage: 90,
    },
    {
      id: 4,
      name: "URP and HDRP",
      percentage: 80,
    },
    {
      id: 5,
      name: "Animation System 2D & 3D",
      percentage: 70,
    },
    {
      id: 6,
      name: "Blockchain & Web3",
      percentage: 90,
    },
    {
      id: 7,
      name: "AI",
      percentage: 80,
    },
  ],
};

function Skills() {
  return (
    <>
      <div className="row -mt-50">
        {skillData.progressData.map((progress) => (
          <div className="col-md-6 mt-50" key={progress.id}>
            <TrackVisibility once>
              <Skill progress={progress} />
            </TrackVisibility>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;