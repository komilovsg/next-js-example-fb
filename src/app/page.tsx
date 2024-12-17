"use client"; // Mark the component as a Client Component

import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const pressMe = () => {
    alert("Thanks for your Attention!");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      SomeThing will be here. Just wait ...
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Message</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] text-center">
          <DialogHeader>
            <DialogTitle>Message</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p>Thanks for your Attention!</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
