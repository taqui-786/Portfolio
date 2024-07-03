import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Clearoff- A We commerce platform for buying and selling pre-used items",
      description:
        "FriendZ is a social media app made with modern tech stacks such as redis, Authjs etc. A user can Create, delete product, user can also get view and add product to wishlist. ",
      tags: ["Redis", "Authjs", "Typescript", "Nextjs"],
      link: "https://github.com/CyberSage5/Clearoff",
    },
    {
      title: "nextjs Dashboard",
      description:
        "Nextjs dashboard is an ecormerce dashboard that help you create and manage invioces at a go built with nextjs ",
      tags: ["Nextjs", "Typescript",],
      link: "https://github.com/CyberSage5/nextjs-dashboard",
    },
    {
      title: "GitEstimate- Github estimate worth generator",
      description:
        "GitEstimate is a simple fun tool where user can generate their github estimate worth card just by entering their github username. ",
      tags: ["Nextjs", "Typescript",],
      link: "https://github.com/taqui-786/GitEstimate",
    },
    {
      title: "Twix AI-",
      description:
        "Twix AI is an ai powered asisstant that boost your productivity  it's like your personal friend but exist in your devices (lol). ",
      tags: ["Nextjs", "Typescript", "Python", ""],
      link: "https://github.com/CyberSage5/Twix-AI",
    },
    {
      title: "morphic-ai-answer-engine-generative-ui",
      description:
        "An AI-powered search engine with a generative UI. ",
      tags: ["Typescript",],
      link: "https://github.com/CyberSage5/morphic-ai-answer-engine-generative-ui",
    },
  
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>

        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
          I love to Build Cool Projects. Here, you&#x27;ll find a curated
          collection of my creative endeavors and technical projects. Each piece
          represents a journey of innovation, problem-solving, and continuous
          learning. Feel free to explore this showcase of my passion and
          expertise in action.
        </p>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
