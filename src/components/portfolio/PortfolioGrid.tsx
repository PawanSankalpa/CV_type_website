import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../data/projects';
import { UXUIProject } from '../../data/uxuiProjects';
import { BrandProject } from '../../data/brandProjects';
import ProjectCard from '../common/ProjectCard';
import UXUICard from './UXUICard';
import ImageModal from '../common/ImageModal';
import { containerVariants, itemVariants } from '../../utils/animations';
import styles from '../../styles/PortfolioGrid.module.css';

type GridProject = Project | UXUIProject | BrandProject;

interface PortfolioGridProps {
  projects: GridProject[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects }) => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  const handleImageClick = (image: string, title: string) => {
    setSelectedImage({ image, title });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const isMultiImageProject = (project: GridProject): project is UXUIProject | BrandProject => {
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
                project={project as Project}
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
