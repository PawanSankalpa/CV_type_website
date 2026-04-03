import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/PortfolioFilter.module.css';

const PortfolioFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className={styles.filter}>
      {categories.map((category) => (
        <motion.button
          key={category}
          className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
          onClick={() => onCategoryChange(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              className={styles.underline}
              layoutId="underline"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default PortfolioFilter;
