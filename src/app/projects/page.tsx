import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "FriendZ - A social media Platform",
      description:
        "FriendZ is a social media app made with modern tech stacks such as redis, Authjs etc. A user can Create, delete, like, comment Post. ",
      tags: ["Redis", "Authjs", "Typescript", "Nextjs"],
      link: "https://github.com/taqui-786/project-friendz",
    },
    {
      title: "itZmyLink- One Page many Links",
      description:
        "itZmyLink is a simple platform where user can create a personalized page to showcase all your social media profiles in one place. ",
      tags: ["Nextjs", "Typescript", "Tailwindcss"],
      link: "https://github.com/taqui-786/itZmyLink",
    },
    {
      title: "ChatApp- Simple instagram clone",
      description:
        "ChatApp is similar to instagram, you can create, edit, delete, like,comment, post and  Follow, unfollow users",
      tags: ["Reactjs", "Javascript"],
      link: "https://github.com/taqui-786/chatapp-api",
    },
    {
      title: "Devletter - A Newsletter for devs",
      description:
        "Devletter ia a newsletter subscribing single page app made with Nextjs and Tailwindcss.",
      tags: ["Nextjs", "Tailwindcss"],
      link: "https://github.com/taqui-786/Devletter",
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
