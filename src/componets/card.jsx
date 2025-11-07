import React, { useState } from 'react';
import { motion } from 'framer-motion';


export function MemoryCard({ memory }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 }
  };

  return (
    <motion.div 
      className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-soft overflow-hidden border border-white/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden" >
        <motion.img 
          src={memory.image} 
          alt={memory.title}
          className="w-full h-82 object-cover"
          animate={{ 
            scale: isHovered ? 1.08 : 1,
            filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
          }}
          transition={{ duration: 0.7 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white text-lg italic font-light">прикоснись к воспоминанию...</p>
        </motion.div>
        
        <div className="absolute top-4 right-4">
          <motion.div 
            className="w-12 h-12 bg-rose-200/30 rounded-full backdrop-blur-sm flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-rose-700 text-sm italic">{memory.id}</span>
          </motion.div>
        </div>
      </div>

      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-light italic text-rose-900/80 mb-2">{memory.title}</h3>
          <p className="text-rose-600/70 italic font-light text-lg">{memory.description}</p>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-rose-500/60 text-sm italic">{memory.date}</span>
          <div className="w-2 h-2 bg-rose-300 rounded-full"></div>
        </div>
        
        <motion.button 
          className="w-full bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 font-light italic py-3 px-4 rounded-xl flex items-center justify-center border border-rose-200/50"
          whileHover={{ 
            scale: 1.02,
            background: "linear-gradient(to right, #fed7e2, #fbb6ce)",
            borderColor: "rgba(251, 182, 206, 0.5)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          пережить заново
          <motion.svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </motion.svg>
        </motion.button>
      </div>
    </motion.div>
   
  );
}