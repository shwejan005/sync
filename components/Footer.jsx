import React from "react";
import { Separator } from "@/components/ui/separator"; // Adjust path as needed

const Footer = () => {
  return (
    <div className="relative">
      <Separator className="w-full bg-primary/40" />

      {/* Footer Content */}
      <div className="h-12 bg-secondary text-primary flex justify-center items-center">
        Footer
      </div>

      <Separator className="w-full bg-primary/40" />
    </div>
  );
};

export default Footer;