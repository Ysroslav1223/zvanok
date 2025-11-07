import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate,Link } from 'react-router-dom';
import image1 from '../assets/images/1.1.jpg'
import image2 from '../assets/images/1.2.jpg'
import image3 from '../assets/images/1.3.jpg'
import image4 from '../assets/images/1.4.jpg'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';


export function FirstMemoriese() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { id: 1, src: image1, caption: "Тот самый момент, когда всё началось..." },
    { id: 2, src: image2, caption: "Улыбки, которые говорят больше слов" },
    { id: 3, src: image3, caption: "Естественность и радость в каждом кадре" },
    { id: 4, src: image4, caption: "Завершение прекрасного дня" }
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 py-8">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4 mb-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-rose-600/70 hover:text-rose-700 transition-colors duration-300 mb-6 group"
        >
        </motion.button>

        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-light italic text-rose-800/80 mb-4"
          >
            та самая фотосессия
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl italic text-rose-600/60 font-light"
          >
            июль 2024 · когда смех был громче музыки...
          </motion.p>
        </div>
      </motion.header>


      <div className="max-w-6xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl overflow-hidden shadow-soft-xl cursor-pointer"
            onClick={() => openLightbox(galleryImages[0], 0)}
          >
            <img 
              src={image1} 
              alt="Главное фото фотосессии"
              className="w-full h-96 md:h-[600px] object-cover"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto mb-6"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-white/50">
            <p className="text-lg md:text-xl text-rose-700/80 italic font-light leading-relaxed text-center">
              Этот день останется в памяти как один из самых тёплых и светлых. 
              Каждый момент был наполнен искренностью и радостью, 
              а камера успевала ловить самые настоящие эмоции...
            </p>
          </div>
        </motion.div>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light italic text-rose-800/80 text-center mb-8">
            мгновения, которые остались с нами
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.slice(1).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="rounded-2xl overflow-hidden shadow-soft cursor-pointer group"
                onClick={() => openLightbox(image, index + 1)}
              >
                <img 
                  src={image.src} 
                  alt={image.caption}
                  className="w-full h-80 object-cover group-hover:brightness-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm italic font-light">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-2xl p-8 border border-rose-200/30">
            <p className="text-2xl italic text-rose-700/70 font-light mb-4">
              "Иногда самые обычные дни становятся самыми памятными..."
            </p>
            <div className="w-16 h-0.5 bg-rose-300/50 mx-auto mb-4"></div>
          </div>
        </motion.div>
        <div className='flex justify-center items-center' onClick={()=>navigate(-1)}>
             <ChevronLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="italic font-light">вернуться к воспоминаниям</span>
        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
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
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white backdrop-blur-sm rounded-full px-6 py-3 text-center">
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