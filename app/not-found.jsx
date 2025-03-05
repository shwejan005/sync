"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const NotFound = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-primary text-secondary overflow-hidden">
      {/* Glitching 404 Text */}
      <motion.h1
        className="text-[10rem] font-bold tracking-widest relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="absolute top-0 left-0 text-secondary blur-sm animate-glitch1">
          404
        </span>
        <span className="absolute top-0 left-0 text-primary blur-sm animate-glitch2">
          404
        </span>
        404
      </motion.h1>

      {/* Error Message */}
      <motion.p
        className="text-xl opacity-80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        The page you are looking for does not exist.
      </motion.p>

      {/* Go Back Button */}
      <motion.div
        className="mt-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Link
          href="/"
          className="relative z-10 px-6 py-3 text-lg font-semibold text-primary bg-secondary rounded-lg shadow-lg hover:scale-110 transition-transform"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Return Home
        </Link>
        {hover && (
          <div className="absolute inset-0 animate-glitch-button bg-secondary opacity-30 blur-lg"></div>
        )}
      </motion.div>
    </div>
  );
};

export default NotFound;