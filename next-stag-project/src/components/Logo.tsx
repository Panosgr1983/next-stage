import React from 'react';
import { Monitor } from 'lucide-react';

interface LogoProps {
  textClass?: string;
}

const Logo: React.FC<LogoProps> = ({ textClass = 'text-white dark:text-white' }) => {
  return (
    <a href="#home" className="flex items-center space-x-2 shrink-0">
      <Monitor className="h-8 w-8 text-[#6ab04c] dark:text-[#6ab04c]" />
      <div className="flex flex-col min-w-0">
        <span className={`text-xl font-bold ${textClass}`}>NextStage</span>
        <span className="hidden sm:block text-xs uppercase tracking-wider text-[#6ab04c] dark:text-[#6ab04c]">
          Technology Solutions
        </span>
      </div>
    </a>
  );
};

export default Logo;