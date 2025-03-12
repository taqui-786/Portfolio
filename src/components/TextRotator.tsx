import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";

function TextRotator() {
  return (
    <div className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
        I am a {portfolioConfig.title} &
        <span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block text-left font-rubik text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide">
            {portfolioConfig.skills.roles.map((role, index) => (
              <li key={index} className="text-[#2f7df4]">
                {role}
              </li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
}

export default TextRotator;
