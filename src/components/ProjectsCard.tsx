import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight } from "lucide-react";

interface projectcardprops {
  value: any;
  num: number
}
const ProjectCards: React.FC<projectcardprops> = ({ value, num }) => {
  return (
  <FramerWrapper className={"max-w-[32%] min-h-[345px] max-lg:max-w-full"} y={0} scale={0.8} delay={num/4} duration={0.15}>
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>{value.title}</CardTitle>
       
      </CardHeader>
      <CardContent>
        <p className="text-base font-poppins">{value.description}</p>
      <div className=" w-full h-fit flex mt-2 justify-center flex-row gap-3">
        {
          value.tags.map((itm:string, indx:number) => {
            // return <Badge key={indx}>{itm}</Badge>
            return <span className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${itm === 'Nextjs' && 'bg-teal-100 text-teal-800' || itm === 'Freelancing' && 'bg-yellow-100 text-yellow-800 ' || itm === 'Shadcn Ui' && 'bg-blue-100 text-blue-800' || itm === 'Typescript' && 'bg-red-100 text-red-800' || 'bg-gray-100 text-gray-800'}  `} key={indx}>{itm}</span>
          })
        }
        </div>
      </CardContent>
      <CardFooter className="items-center justify-center flex">
        <Link
          href={value.link}
          target="blank"
          className={cn(buttonVariants({ variant: "default", size: "lg" }),"flex")}
        >
          Visit Project <ArrowUpRight className="h-5 w-5 ml-1" />
        </Link>
      </CardFooter>
    </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
