import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Zap } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#home" className="flex items-center space-x-3 group">
      <motion.div 
        className="relative"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div className="relative p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
          <Monitor className="h-6 w-6 text-white" />
          <Zap className="absolute -top-1 -right-1 h-3 w-3 text-yellow-400" />
        </div>
      </motion.div>
      
      <div className="flex flex-col">
        <motion.span 
          className="text-xl font-bold bg-gradient-to-r from-[#6ab04c] via-blue-400 to-[#6ab04c] bg-clip-text text-transparent group-hover:from-[#5a9f3d] group-hover:via-blue-300 group-hover:to-[#5a9f3d] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          NextStage
        </motion.span>
        <span className="text-xs uppercase tracking-wider text-[#6ab04c] dark:text-[#6ab04c] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          Technology Solutions
        </span>
      </div>
    </a>
  );
};

export default Logo;