import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../styles/CarouselModal.module.css';

interface CarouselImage {
  image: string;
  title: string;
}

interface CarouselModalProps {
  isOpen: boolean;
  images: CarouselImage[];
  initialIndex?: number;
  onClose: () => void;
}

const CarouselModal: React.FC<CarouselModalProps> = ({
  isOpen,
  images,
  initialIndex = 0,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleArrows = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      }
      if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleArrows);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleArrows);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, currentIndex, images.length]);

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.container}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Main Image */}
            <div className={styles.imageWrapper}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={currentImage.image}
                  alt={currentImage.title}
                  className={styles.image}
                  initial={{ opacity: 0, x: direction === 'next' ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction === 'next' ? -100 : 100 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            {images.length > 1 && (
              <>
                {/* Arrow Buttons */}
                <button
                  className={`${styles.navButton} ${styles.prevButton}`}
                  onClick={handlePrev}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  className={`${styles.navButton} ${styles.nextButton}`}
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  ›
                </button>

                {/* Info Bar */}
                <div className={styles.info}>
                  <div className={styles.infoLeft}>
                    <h2>{currentImage.title}</h2>
                  </div>
                  <div className={styles.infoRight}>
                    <span className={styles.counter}>
                      {currentIndex + 1} / {images.length}
                    </span>
                  </div>
                </div>

                {/* Thumbnail Carousel */}
                <div className={styles.thumbnailCarousel}>
                  <div className={styles.thumbnailScroll}>
                    {images.map((img, index) => (
                      <motion.button
                        key={index}
                        className={`${styles.thumbnail} ${
                          index === currentIndex ? styles.active : ''
                        }`}
                        onClick={() => {
                          setDirection(index > currentIndex ? 'next' : 'prev');
                          setCurrentIndex(index);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img src={img.image} alt={img.title} />
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Hint */}
                <div className={styles.hint}>
                  <span>← → Arrow keys • ESC to close</span>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CarouselModal;
