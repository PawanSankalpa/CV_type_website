import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/ProjectCard.module.css';

const ProjectCard = ({ project, onImageClick }) => {
  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(project.image, project.title);
    }
  };

  return (
    <motion.div
      className={styles.card}
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
          src={project.image}
          alt={project.title}
          className={styles.image}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
        <div className={styles.overlay}>
          <span className={styles.viewText}>View Image →</span>
        </div>
      </div>

      <div className={styles.content}>
        <span className={styles.category}>{project.category}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
