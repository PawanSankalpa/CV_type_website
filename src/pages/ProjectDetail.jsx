import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import Button from '../components/common/Button';
import { fadeInUp } from '../utils/animations';
import styles from '../styles/ProjectDetail.module.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.slug === slug);
  const isPostDesign = project?.category === 'Post Designs';

  if (!project) {
    return (
      <div className={styles.notFound}>
        <div className={styles.container}>
          <h1>Project Not Found</h1>
          <p>Sorry, this project doesn't exist.</p>
          <Link to="/portfolio">
            <Button variant="primary">Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projectsData
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className={styles.detail}>
      <motion.section
        className={styles.header}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.container}>
          <button
            className={styles.backButton}
            onClick={() => navigate(-1)}
            title="Go back"
          >
            &#x2190; Back
          </button>

          <motion.div
            className={styles.headerContent}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <span className={styles.category}>{project.category}</span>
            <h1>{project.title}</h1>
            <p className={styles.description}>{project.fullDescription}</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.image}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className={styles.imageWrapper}>
          <img src={project.image} alt={project.title} />
        </div>
      </motion.section>

      <section className={styles.details}>
        <div className={styles.container}>
          <div className={`${styles.grid} ${isPostDesign ? styles.postDesignGrid : ''}`}>
            <motion.div
              className={styles.info}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Project Details</h3>

              <div className={styles.detail}>
                <h4>Category</h4>
                <p>{project.category}</p>
              </div>

              <div className={styles.detail}>
                <h4>Technologies</h4>
                <ul>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>

              {project.link && (
                <Button href={project.link} variant="primary" size="lg">
                  View Live Project
                </Button>
              )}
            </motion.div>

            <motion.div
              className={styles.content}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Overview</h3>
              <p>{project.fullDescription}</p>

              {!isPostDesign && (
                <>
                  <h4 style={{ marginTop: 'var(--spacing-2xl)' }}>Design Highlights</h4>
                  <ul className={styles.features}>
                    <li>Modern &amp; eye-catching design</li>
                    <li>Brand-aligned aesthetic</li>
                    <li>Optimized for all platforms</li>
                    <li>Enhanced user engagement</li>
                  </ul>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {!isPostDesign && relatedProjects.length > 0 && (
        <section className={styles.related}>
          <div className={styles.container}>
            <h3>Related Projects</h3>
            <div className={styles.relatedGrid}>
              {relatedProjects.map((related) => (
                <motion.div
                  key={related.id}
                  className={styles.relatedCard}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <Link to={`/portfolio/${related.slug}`}>
                    <img src={related.image} alt={related.title} />
                    <h4>{related.title}</h4>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;
