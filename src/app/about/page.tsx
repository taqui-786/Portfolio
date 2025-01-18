import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "Coding" },
    { hobby: "Playing Games" },
    { hobby: "Watching Anime" },
    { hobby: "Tech Blog Writing" },
    { hobby: "Creating Cool Projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <User2 className="h-4 w-4" />
        About me
      </Badge>
      <div className="flex flex-col gap-5">
        <Heading>
          Software Engineer And Web <br /> Developer, Based In India.
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg ">
            I am a Full Stack Web Developer from Ramgarh cantt, Jharkhand,
            India. I&apos;m passionate about crafting web projects and
            contributing to open-source communities. I specialize in modern
            JavaScript frameworks and responsive CSS design, focusing on
            creating pixel-perfect, user-friendly interfaces. With strong
            attention to detail and efficient delivery, I build seamless web
            experiences that combine functionality with elegant design.
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper
        className="w-full flex flex-row justify-between max-lg:flex-col "
        y={100}
        delay={0.3}
      >
        <Aboutfooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
