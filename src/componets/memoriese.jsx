import { MemoryCard } from "./card";
import image1 from '../assets/images/1.1.jpg'
import image2 from '../assets/images/2.5.jpg'
import image3 from '../assets/images/3.1.jpg'
import { motion } from 'framer-motion';
import { useNavigate } from "react-router";
import { useState,useEffect } from "react";
import { ChevronLeftIcon } from '@heroicons/react/24/outline';


export function MemoriesSection() {
    const navigate=useNavigate()
    const [count,setCount]=useState(0)

    
  const memories = [
    {
      id: 1,
      image: image1,
      title: "та самая фотосессия",
      description: "когда смех был громче музыки...",
      date: "Июль 2024",
      url:'/firstMemoriese'
    },
    {
      id: 2,
      image: image2,
      title: "та самая ЖАРАААА",
      description: "Когда музыка это мы!",
      date: "Июль 2025",
      url:'/secondtMemoriese'
    },
    {
      id: 3,
      image: image3,
      title: "Главное воспоминание",
      description: "момент осозания куда попал...",
<<<<<<< HEAD
      date: "Cентябрь 2017",
=======
      date: "Сентябрь 2017",
>>>>>>> 2198da72489711639b8f066bfcdd0a9470c2dc53
      url:'/thirdMemoriese'
    }
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
     useEffect(() => {
        const savedCount = sessionStorage.getItem('memoriesVisitCount');
        if (savedCount) {
            setCount(parseInt(savedCount));
        }
    }, []);

    const handleCardClick = async (memory) => {
        const newCount = count + 1;
        setCount(newCount);
<<<<<<< HEAD
         {sessionStorage.setItem('memoriesVisitCount', newCount.toString())};
=======
        if(newCount>3){
            sessionStorage.removeItem('memoriesVisitCount')
            setCount(0)
        }else {sessionStorage.setItem('memoriesVisitCount', newCount.toString())};
>>>>>>> 2198da72489711639b8f066bfcdd0a9470c2dc53
        
        console.log('Новое значение счетчика:', newCount);
        await new Promise(resolve => setTimeout(resolve, 50));
        navigate(memory.url);
    };
console.log(count);

  return (
    <div className="min-h-screen py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light italic text-rose-800/80 mb-4">
          наши мгновения
        </h2>
        <p className="text-xl italic text-rose-600/60 font-light">
          три истории, которые хочется переживать снова...
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            onClick={() => handleCardClick(memory)}
            transition={{ delay: index * 0.2 }}
          >
            <MemoryCard memory={memory} />
          </motion.div>
        ))}
      </div>
      {count>=3?(
       <div className='flex justify-center items-center mt-10' onClick={()=>navigate('/supriese')}>
                    <ChevronLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
<<<<<<< HEAD
                 <span className="italic font-light">Открыть Сюрприз!</span>
=======
                 <span className="italic font-light">Открыть Сюрприз</span>
>>>>>>> 2198da72489711639b8f066bfcdd0a9470c2dc53
        </div>
      ):''}
    </div>
  );
}