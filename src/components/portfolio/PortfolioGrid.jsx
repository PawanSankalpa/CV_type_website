import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../common/ProjectCard';
import UXUICard from './UXUICard';
import ImageModal from '../common/ImageModal';
import { containerVariants, itemVariants } from '../../utils/animations';
import styles from '../../styles/PortfolioGrid.module.css';

const PortfolioGrid = ({ projects }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image, title) => {
    setSelectedImage({ image, title });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const isMultiImageProject = (project) => {
    return 'images' in project && Array.isArray(project.images);
  };

  return (
    <>
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            {isMultiImageProject(project) ? (
              <UXUICard project={project} />
            ) : (
              <ProjectCard
                project={project}
                onImageClick={handleImageClick}
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      <ImageModal
        isOpen={selectedImage !== null}
        image={selectedImage?.image || ''}
        title={selectedImage?.title || ''}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default PortfolioGrid;
