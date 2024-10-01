import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "Jul 2023 - Jul 2024",
    degree: "Software Engineer (5zeroinfo)",
    content:
      "Architected scalable NFT marketplace infrastructure, managed project timelines, developed Unreal Engine marketplace, integrated WebSocket for real-time data, and implemented multiplayer and open-world game systems with Agile and CI/CD.",
  },
  {
    id: 2,
    year: "May 2022 - Jun 2023",
    degree: "Software Engineer (DexBattle)",
    content:
      "Developed an NFT marketplace and MMOFPS in Unity, integrated blockchain with Moralis Web3 SDK, implemented player mechanics and weapon handling, designed intuitive UI/UX, and ensured cross-platform support.",
  },
  {
    id: 3,
    year: "Sep 2021 to Jul 2022",
    degree: "Unity Developer (Borgverse)",
    content:
      "Developed a Solana NFT marketplace in Unity, improving matchmaking, authored Rust smart contracts, optimized game mechanics, led a UI redesign, and integrated Solana SDK for secure in-game transactions.",
  },
  {
    id: 4,
    year: "May 2020 - Dec 2021",
    degree: "Game | Web3 developer (TreasureDAO)",
    content:
      `Spearheaded the development of a BombMan-style game using Unity and PUN2, enhancing gameplay with ghost mode, dynamic map expansion, intuitive UI/UX, realistic animations, and integrating NFT functionality via ChainSafe and IPFS, while reviewing smart contracts on Docker.`
  },
  {
    id: 5,
    year: "Apr 2016 - Mar 2020",
    degree: "Bachelor’s degree in Computer Science",
    content:
      "Fukuoka University",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
