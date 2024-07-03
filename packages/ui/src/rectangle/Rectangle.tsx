"use client"
import { motion } from "framer-motion";

export const Rectangle = ({ src }: { src: string }) => {
  return (
    <motion.div
      className="w-16 h-16 rounded relative"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: Math.random() }}
    >
      <img alt='' className='rounded object-cover h-16 w-16' src={src} />
    </motion.div>
  );
};
