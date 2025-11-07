import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate,Link } from 'react-router-dom';
import image1 from '../assets/images/4.1.jpg'
import image2 from '../assets/images/4.2.jpg'
import image3 from '../assets/images/4.3.jpg'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';


export function Supriese() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { id: 1, src: image1, caption: "Тот самый момент, когда всё началось..." },
    { id: 2, src: image2, caption: "Улыбки, которые говорят больше слов" },
    { id: 3, src: image3, caption: "Естественность и радость в каждом кадре" },
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    setSelectedImage(galleryImages[(currentImageIndex + 1) % galleryImages.length]);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setSelectedImage(galleryImages[(currentImageIndex - 1 + galleryImages.length) % galleryImages.length]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
      {/* Хедер */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4 mb-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-slate-600 hover:text-slate-800 transition-colors duration-300 mb-6 group"
        >
        </motion.button>

        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-light italic text-slate-800 mb-4"
          >
            Этот самый человек
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
          />
        </div>
      </motion.header>

      {/* Основной контент */}
      <div className="max-w-6xl mx-auto px-4">

        {/* Главное изображение */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl overflow-hidden shadow-2xl cursor-pointer border-2 border-white/20"
            onClick={() => openLightbox(galleryImages[0], 0)}
          >
            <img 
              src={image1} 
              alt="Главное фото фотосессии"
              className="w-full h-96 md:h-[600px] object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Текстовые блоки */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto mb-6"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/60">
            <p className="text-lg md:text-xl text-slate-700 italic font-light leading-relaxed text-center">
              Сергей Николаевич Званок - это тот человек, который объединяет нас всех, любит и ценит, это тот человек, который создаёт нам лучшие воспоминания, это тот человек, за которого никогда не бывает стыдно, и ты смотришь на него с гордостью, любовью и безупречностью!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-3xl mx-auto mb-6"
        >
          <div className="bg-slate-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-300/50">
            <p className="text-lg md:text-xl text-slate-700 italic font-light leading-relaxed text-center">
              Он не обидит, но наругает (P.S. за дело... наверное). Роман лучше всех знает, как его ругают. Он поможет решить твои проблемы, но только если ты стараешься сам их решить
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto mb-6"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/60">
            <p className="text-lg md:text-xl text-slate-700 italic font-light leading-relaxed text-center">
              Дорогой дядя Серёжа, хочу поблагодарить тебя за всё! Мне не передать словами, насколько сильно мы тебя все любим и как тобой дорожим!
            </p>
          </div>
        </motion.div>
        
        {/* Цитата */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-blue-100/80 to-indigo-100/80 rounded-2xl p-8 border border-blue-200/50 shadow-lg">
            <p className="text-2xl italic text-slate-800 font-light mb-4">
              "Иногда самый обычный человек, может быть героем для всех"
            </p>
            <div className="w-16 h-0.5 bg-blue-600/60 mx-auto mb-4"></div>
            <p className="text-slate-600 italic font-light text-md">
              и в этом его истинная сила
            </p>
          </div>
        </motion.div>

        {/* Кнопка возврата */}
        <motion.div 
          className='flex justify-center items-center cursor-pointer group'
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeftIcon className="w-5 h-5 mr-2 text-slate-600 group-hover:-translate-x-1 transition-transform" />
          <span className="italic font-light text-slate-700">вернуться к воспоминаниям</span>
        </motion.div>
      </div>

      {/* Лайтбокс */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-8 h-8" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors"
              >
                <ChevronLeftIcon className="w-8 h-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors"
              >
                <ChevronRightIcon className="w-8 h-8" />
              </button>

              <img 
                src={selectedImage.src} 
                alt={selectedImage.caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-slate-800/70 backdrop-blur-sm rounded-full px-6 py-3">
                <p className="italic font-light text-lg"></p>
                <p className="text-white/60 text-sm mt-1">
                  {currentImageIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}