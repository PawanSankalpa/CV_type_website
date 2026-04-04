import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { projectsData, categories } from '../data/projects';
import { uxuiProjects } from '../data/uxuiProjects';
import { brandProjects } from '../data/brandProjects';
import PortfolioFilter from '../components/portfolio/PortfolioFilter';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import AnimatedDownload from '../components/common/AnimatedDownload';
import styles from '../styles/Portfolio.module.css';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    const allProjects = [...projectsData, ...uxuiProjects, ...brandProjects];
    if (activeCategory === 'All') return allProjects;
    return allProjects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  const updatedCategories = Array.from(
    new Set([...categories, 'UI/UX Design', 'Brand Identity'])
  );

  return (
    <div className={styles.portfolio}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Portfolio</h1>
            <p>
              Strategic design solutions for brands that demand excellence. From brand identity
              to UI/UX, every project is crafted to deliver impact.
            </p>
            <AnimatedDownload fileName="Thushal_Rashmitha_CV.pdf" />
          </motion.div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.container}>
          <PortfolioFilter
            categories={updatedCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <PortfolioGrid projects={filteredProjects} />
        </div>
      </section>

      <motion.section
        className={styles.cta}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.container}>
          <h2>Let's Create Something Amazing</h2>
          <p>
            Ready to bring your vision to life? Let's work together to design something
            extraordinary.
          </p>
          <a
            href="mailto:thushalrashmitha21@gmail.com"
            className={styles.contactLink}
            aria-label="Send email to thushalrashmitha21@gmail.com"
          >
            Email Me &#x2192;
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
