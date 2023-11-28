import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/shahina.khatun.1044", icon: <Facebook /> },
    { name: "Twitter", link: "https://twitter.com/Taquiimam14", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/taqui-imam", icon: <Linkedin /> },
    { name: "External", link: "https://tinyurl.com/MdTaquiImam", icon: <ExternalLink /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        return (
          <Link key={indx} target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >{itm.icon}</Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
