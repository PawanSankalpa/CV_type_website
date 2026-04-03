import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UXUIProject } from '../../data/uxuiProjects';
import { BrandProject } from '../../data/brandProjects';
import CarouselModal from '../common/CarouselModal';
import styles from '../../styles/UXUICard.module.css';

type MultiImageProject = UXUIProject | BrandProject;

interface UXUICardProps {
  project: MultiImageProject;
}

const UXUICard: React.FC<UXUICardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        className={`${styles.card} ${styles[project.gridSize || 'medium']}`}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      >
        <div
          className={styles.imageWrapper}
          style={{ aspectRatio: project.aspectRatio || '16/12' }}
          onClick={handleImageClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleImageClick()}
        >
          <motion.img
            src={project.thumbnail}
            alt={project.title}
            className={styles.image}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />
          <div className={styles.overlay}>
            <span className={styles.viewText}>Explore Project</span>
            <span className={styles.pageCount}>{project.images.length} screens</span>
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.category}>{project.category}</span>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <p className={styles.description}>{project.description}</p>
        </div>
      </motion.div>

      <CarouselModal
        isOpen={isModalOpen}
        images={project.images}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default UXUICard;
