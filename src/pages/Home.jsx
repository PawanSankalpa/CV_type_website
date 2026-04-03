import React from 'react';
import Hero from '../components/hero/Hero';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      
      <section className={styles.section} id="portfolio">
        <div className={styles.container}>
          <h2>Featured Design Work</h2>
          <p>Discover a curated selection of my recent design projects showcasing expertise in branding, UI/UX, and creative design.</p>
          <a href="/portfolio" className={styles.cta}>
            Explore Full Portfolio →
          </a>
        </div>
      </section>

      <section className={styles.section + ' ' + styles.alternate} id="contact">
        <div className={styles.container}>
          <h2>Let's Create Your Brand Story</h2>
          <p>I'm passionate about transforming ideas into compelling visual designs that captivate and engage. Whether you need a logo, brand identity, UI/UX design, or social media content, I'm ready to bring your vision to life.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
