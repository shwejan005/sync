import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="h-[40rem] flex flex-col items-center justify-center text-center mb-12">
      <TextHoverEffect text="SYNC" />
      <h1 className="text-4xl font-bold">Seamless Collaboration, Effortless Productivity</h1>
      <p className="text-lg text-gray-500 mt-2">
        Connect, collaborate, and create in real time with your team.
      </p>
      <Button className="mt-6 px-6 py-3 text-lg">Get Started</Button>
    </div>
  );
}