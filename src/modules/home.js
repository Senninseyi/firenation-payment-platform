import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="mt-16 w-full">
      <div className="w-full flex items-center justify-center h-48">
        <motion.h2 className="font-bold text-6xl">
          Get your tickets now
        </motion.h2>
      </div>
    </div>
  );
}

export default Home;
