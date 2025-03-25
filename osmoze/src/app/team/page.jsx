import React from "react";
import TeamSection from "../components/TeamSection";

function Team() {
  return (
    <div className="bg-team w-full">
      <div className="w-full flex justify-center ">
        <img
          src="/svg/Meet our Teams.svg"
          alt="heading"
          className="w-auto mt-24 h-16"
        />
      </div>

      <div className="w-full flex flex-col align-items-center gap-9">
        <TeamSection
          title=""
          members={[
            {
              designation: "Vice President",
              name: "Manvendra Singh",
              image: "/images/Manvendra_Singh.jpg",
            },
            {
              designation: "General Secretary",
              name: "Raksha Kushwaha",
              image: "/images/Raksha Kushwaha.jpg",
            },
          ]}
        />

        <TeamSection
          title=""
          members={[
            {
              designation: "Joint Gen. Secretary",
              name: " Aniket Bhui",
              image: "images/Aniket_Bhui.jpeg",
            },
            {
              designation: "Convener",
              name: "Deepanshu K. Prajapati",
              image: "images/Deepanshu Kr. Prajapati.jpg",
            },
            {
              designation: "Joint Gen. Secretary",
              name: "Aditya Namdeo",
              image: "/images/Aditya_Namdeo.jpg",
            },
          ]}
        />

        <TeamSection
          title="Tech Heads"
          members={[
            { name: "Shruti Yadav", image: "/images/SHRUTI YADAV.jpg" },
            { name: "Sonali Singh", image: "/images/Sonali_Singh.jpg" },
          ]}
        />

        <TeamSection
          title="Design Heads"
          members={[
            { name: "Raj Kishore", image: "/images/Raj Kishor.jpg" },
            {
              name: "Abhishek Chauhan",
              image: "/images/Abhishek_Chauhan.jpeg",
            },
          ]}
        />

        <TeamSection
          title="Branding Heads"
          members={[
            {
              name: "Ghanishtha Chaware",
              image: "/images/Ghanishtha_Chaware.jpg",
            },
            {
              name: "Pendyala Pranathi",
              image: "/images/Pendyala Pranathi.jpg",
            },
          ]}
        />
        <TeamSection
          title="Marketing Heads"
          members={[
            {
              name: "KeyurKumar Kanjariya",
              image: "/images/KeyurkumarKanjariya.jpg",
            },
            {
              name: "Priyanshu Jaiswal",
              image: "/images/Priyanshu Jaiswal.jpg",
            },
          ]}
        />

        <TeamSection
          title="Operation Heads"
          members={[
            { name: "Ansh Bhargava", image: "/images/Ansh Bhargava.jpg" },
            { name: "Rajat Kumar", image: "/images/rajat.jpg" },
          ]}
        />
        <TeamSection
          title="Coordinators"
          members={[
            {
              name: "Bhartendu Bhardwaj",
              image: "/images/Bhartendu_Bhardwaj.jpg",
            },
            { name: "Nitya Shukla", image: "/images/Nitya Shukla .jpg" },
            {
              name: "Swetha Yalamanchi",
              image: "/images/Swetha Yalamanchi.jpeg",
            },
            { name: "Vaibhav Singh", image: "/images/Vaibhav_Singh.jpg" },
          ]}
        />
      </div>
    </div>
  );
}

export default Team;
