import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/AnimatedDownload.module.css';

const AnimatedDownload = ({
  fileName = 't_CV.pdf',
  className = '',
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/t_CV.pdf';
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
    }, 500);
  };

  return (
    <motion.button
      className={`${styles.downloadButton} ${className}`}
      onClick={handleDownload}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <motion.div
        className={styles.container}
        animate={isDownloading ? { y: [0, -5, 0] } : { y: 0 }}
        transition={{ duration: 0.6, repeat: isDownloading ? Infinity : 0 }}
      >
        <svg
          className={styles.icon}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>{isDownloading ? 'Downloading...' : 'Download CV'}</span>
      </motion.div>
    </motion.button>
  );
};

export default AnimatedDownload;
