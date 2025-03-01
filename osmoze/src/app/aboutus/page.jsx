import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="w-full min-h-screen relative">
      {/* Who We Are Section - Increased Height */}
      <div
        className="flex flex-col justify-center min-h-[110vh] w-full px-16 relative"
        style={{
          backgroundImage: "url('/images/aboutusbg1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-6xl text-center mb-10">ABOUT US</h2>
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          {/* About Us Image - Properly Aligned */}
          <Image
            src="/images/osmozeimg.jpg"
            alt="About Us"
            width={420}
            height={300}
            className="rounded-lg shadow-lg"
          />

          {/* About Us Text */}
          <div className="w-1/2 px-6">
            <h3 className="text-yellow-400 text-4xl mb-4">Who are we?</h3>
            <p className="text-xl">
              The Society of Chemical Engineers (SoChem) is a student-run
              society that aims to enhance the technical and managerial skills
              of its members. It provides students with opportunities to engage
              in industrial projects, workshops, and competitions that develop
              their knowledge in the field.
            </p>
          </div>
        </div>
      </div>

      {/* Halfway Image - 15% in Section 1, 85% in Section 2 */}
      <div className="absolute left-[700px] top-[102vh] -translate-y-[15%] z-10">
        <Image
          src="/images/osmozegrpofpeople.jpg"
          alt="Mission"
          width={350}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Mission Section - Increased Height */}
      <div
        className="flex flex-col md:flex-row justify-between items-center min-h-[110vh] w-full px-16 relative z-0"
        style={{
          backgroundImage: "url('/images/aboutusbg2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-1/2 px-6">
          <h3 className="text-yellow-400 text-4xl mb-4">Our Mission</h3>
          <p className="text-xl">
            The society provides a platform for students to improve both their
            technical skills & personality. It also brings back the experience
            of our esteemed alumni to help budding engineers. Regular workshops,
            guest lectures, and industrial visits are organized to bridge the
            gap between academia and industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
