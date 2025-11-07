import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';


export function IntroSection({ onScrollDown }) {
  const [displayedText, setDisplayedText] = useState('');
  const [showArrow, setShowArrow] = useState(false);
  const fullText = "Путь к воспоминаниям";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
        setTimeout(() => setShowArrow(true), 500);
      }
    }, 120);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <Link to='/memory'><div 
      className="h-screen flex flex-col justify-center items-center cursor-pointer px-4" 
      onClick={onScrollDown}
    >
      <div className="text-center">
        <div className="text-5xl md:text-7xl font-light italic text-rose-800/80 mb-6 leading-tight">
          {displayedText}
          <span className="animate-pulse">|</span>
        </div>
        <p className="text-xl md:text-2xl italic text-rose-600/70 mt-8 font-light">
          прикоснись к моментам счастья...
        </p>
      </div>
      
      <AnimatePresence>
        {showArrow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 1.2,
              ease: "easeOut",
              delay: 0.3
            }}
            className="mt-20"
          >
            <motion.div
              animate={{ 
                y: [0, -12, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg 
                className="w-10 h-10 text-rose-500/60" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-rose-600/60 mt-3 text-lg italic font-light text-center"
            >
              коснись, чтобы продолжить...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </Link>
  );
}