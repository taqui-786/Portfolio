import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, PackagePlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const morePage = () => {
  const morelink = [
    {
      title: "Dev.to",
      description:
        "I write blogs on web development, trending tech stacks or javascript guide or tips in Dev.to ",
      link: "https://dev.to/taqui_786",
    },
    {
      title: "Hashnode",
      description:
        "I write blogs on web development, trending tech stacks or javascript guide or tips in Hashnode",
      link: "https://mdtaquiimam.hashnode.dev/",
    },
    {
      title: "Medium",
      description:
        "I write blogs on web development, trending tech stacks or javascript guide or tips in Medium",
      link: "https://medium.com/@mdtaqui.jhar",
    },

    {
      title: "Daily.Dev",
      description:
        "I am also the member of Daily Dev squads and i also upload post on some squads.",
      link: "https://app.daily.dev/taqui_786",
    },
    {
      title: "Gumroad",
      description:
        "I also sell digital products on gumroad like Notion Templates and web projects etc..",
      link: "https://mdtaquijhar.gumroad.com/",
    },
    {
      title: "Buy Me a coffee",
      description:
        "Your support goes a long way in helping me maintain the quality of content, explore new topics, and dedicate more time to creating valuable projects.",
      link: "https://www.buymeacoffee.com/taquidevloper",
    },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <PackagePlus className="h-5 w-5" />
        More
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>More</Heading>
      </div>
      <div className="h-auto w-full flex flex-wrap gap-3 p-2">
        {morelink.map((value, indx) => {
          return (
            <Card key={indx} className="max-w-[32%] max-lg:max-w-full">
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base font-poppins">{value.description}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={value.link}
                  target="blank"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "w-full gap-3"
                  )}
                >
                  {" "}
                  <ExternalLink />
                  Visit here
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default morePage;
