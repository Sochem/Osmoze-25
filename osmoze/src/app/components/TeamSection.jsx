import React from "react";

const TeamSection = ({ title, members }) => {
  const isLargeGroup = members.length > 3;
  const imageSize = isLargeGroup
    ? "lg:w-48 lg:h-48 md:w-32 md:h-32 sm:w-24 sm:h-24 w-20 h-20"
    : "lg:w-64 lg:h-60 md:w-52 md:h-48 sm:w-32 sm:h-32 w-24 h-24";

  return (
    <div className="bg-[#1238A0]/45 rounded-3xl p-6 w-full max-w-7xl lg:h-[400px] md:h-[350px] my-12 py-6 mx-auto">
      <h2 className="text-white text-4xl font-risque mb-4 text-center">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className={`${imageSize} mx-2 bg-gray-300`}
            />
            <p className="text-white font-risque text-lg mt-2 text-center">
              {member.designation ? member.designation : ""}
            </p>
            <p className="text-white font-risque text-lg text-center">
              {member.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
