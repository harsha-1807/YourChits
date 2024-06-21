"use client";
import React, { useEffect, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  });
  return (
    <div className="text-center  h-screen">
      <h1 className="text-3xl font-bold mt-8 text-center ">
        Welcome to YourChits!
      </h1>

      <h2 className="hidden text-2xl leading-normal mb-10 font-bold text-gray-800 dark:text-gray-100 mt-[3rem] md:block ">
        <span className="font-medium">About</span> Us
      </h2>
      
      <div className="flex items-center justify-center h-[20rem] md:h-[18rem] text-center md:my-6  mt-[9rem] mb-6 ">
        <p
          className={`transition-transform  md:w-[70vw] duration-1000 ease-out transform text-[1rem] md:text-[1.25rem] font-medium ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full"
          }`}
        >
          “Your chits” is a comprehensive web-based platform aimed at
          revolutionising the chit fund experience for users. It simplifies the
          process of chit fund participation, allowing users to join chit funds,
          manage their contributions.
          <br />
          <br /> Users can easily browse and select from a
          variety of chit funds tailored to their financial goals and
          preferences. The platform provides detailed information about each
          chit fund, including duration, monthly contributions, total amount,
          and auction dates, empowering users to make informed decisions about
          their investments.
          <br />
          <br /> Once enrolled,users can conveniently manage their
          chit fund activities through a personalised dashboard.They can track
          their payment schedules, receive reminders for upcoming payments, and
          access relevant documents and agreements online.
        </p>
      </div>
    </div>
  );
}

export default About;
