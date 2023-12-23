import React from 'react'

function TextRotator() {
  return (
    // <span className="font-rubik text-3xl ml-1 flex max-sm:text-2xl text-primary relative h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden">

    //        <ul
    //       className="block text-left leading-tight [&_li]:block animate-text-slide absolute"
    //     >
    //       <li className="text-indigo-500">Mobile apps</li>
    //       <li className="text-rose-500">Websites</li>
    //       <li className="text-yellow-500">Admin dashboards</li>
    //       <li className="text-teal-500">Landing pages</li>
    //       <li className="text-pink-500">Illustrations</li>
    //       <li className="text-sky-500">Icons</li>
    //     </ul>
    //     </span>
    <div
    className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden"
  >
    <div className="font-poppins text-2xl [text-wrap:balance] text-gray-700">
    I am a Passionate
      <span
        className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden"
      >
        <ul
          className="block text-left font-rubik text-3xl leading-tight [&_li]:block animate-text-slide"
        >
          <li className="text-[#2f7df4]">Software Developer</li>
          <li className="text-teal-500">Freelancer</li>
          <li className="text-yellow-500">Contributer</li>
          <li className="text-sky-500">Blogger</li>
          <li className="text-rose-500">Gamer</li>
          <li className="text-pink-500">Creator</li>
        </ul>
      </span>
    </div>
  </div>
  )
}

export default TextRotator