import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Unity & C#",
    content: "Experienced in Unity for 2D/3D development with strong C# skills for game mechanics, physics, and AI.",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Game Design Principles",
    content: "Skilled in translating game design into engaging mechanics, focusing on player experience and balance.",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Multiplayer and Networking Solutions",
    content: "Skilled in using Unity's networking (Photon, Mirror) for multiplayer, matchmaking, lobbies, and leaderboards.",
    icon: "icon-directions",
  },
  {
    id: 4,
    name: "Cross-Platform Game Development",
    content: "Proven ability to develop, optimize, and deploy high-performance games across mobile, desktop, and consoles.",
    icon: "icon-rocket",
  },
  {
    id: 5,
    name: "Game Performance Optimization",
    content: "Expert in optimizing games for smooth performance by reducing memory, improving frame rates, and managing assets.",
    icon: "icon-note",
  },
  {
    id: 6,
    name: "Collaborative Team Experience",
    content: "Proven success collaborating with designers, artists, and sound engineers through all stages of game development.",
    icon: "icon-bubbles",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;