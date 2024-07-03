import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/terfajohn", icon: <Facebook /> },
    { name: "Twitter", link: "https://twitter.com/k3t3rr", icon: <Twitter /> },
    { name: "Linkedin", link: "whttps://linkedin.com/in/terfa-john-191920j", icon: <Linkedin /> },
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
