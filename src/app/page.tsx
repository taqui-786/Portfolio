import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download} from "lucide-react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/GithubBtn";
export default function Home() {
  return (
   <>
      {/* LEFT SIDE  */}
      <div className=" h-full w-auto flex flex-col justify-start gap-4">
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
        </div>
        <div className="h-fit w-full mt-2 py-2 px-4">
          <Link href="/" className={cn(buttonVariants({ variant: "default", size:"lg"}))}>
            <Download className="mx-1" />
            Download Resume
          </Link>
        </div>
      </div>
      {/* RIGHT SIDE image  */}
      <div className="h-full w-[47%] relative block max-lg:hidden">
       
      {/* IMAGE  */}
        <HeroImage />
      </div>
     
      {/* GITHUB BUTTON  */}
      <GithubBtn/>
      </>
  );
}
