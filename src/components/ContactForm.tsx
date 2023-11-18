import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
const ContactForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="icon_underline">Send me a mail.</CardTitle>
        <CardDescription>
          Fill the credential and click on submit to send.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
          <Label htmlFor="email">Name</Label>
          <Input type="text" id="FullName" placeholder="Enter your name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
          <Label htmlFor="email">Your Message</Label>
          <textarea
            placeholder="Your message here..."
            name="message"
            className=" resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          ></textarea>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
