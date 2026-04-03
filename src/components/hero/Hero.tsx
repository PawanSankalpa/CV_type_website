import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Button from '../common/Button';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from '../../styles/Hero.module.css';

const Hero: React.FC = () => {
  const slides = [
    '/thushal_cover_photo.jpg',
    '/thushal_cover_photo.jpg',
    '/thushal_cover_photo.jpg',
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Content */}
        <motion.div
          className={styles.leftContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className={styles.subtitle}>Welcome to</span>
            <h1 className={styles.title}>Thushal Rashmitha</h1>
          </motion.div>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm a creative graphic designer and UI/UX specialist who creates modern, clean, and eye-catching designs that help brands stand out. With expertise in Adobe Creative Suite, Figma, and design thinking, I transform ideas into compelling visual experiences.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button href="/portfolio" variant="primary" size="lg">
              View My Portfolio
            </Button>
            <Button href="mailto:thushalrashmitha21@gmail.com" variant="outline" size="lg">
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className={styles.stat}>
              <h4>50+</h4>
              <p>Projects Delivered</p>
            </div>
            <div className={styles.stat}>
              <h4>30+</h4>
              <p>Happy Clients</p>
            </div>
            <div className={styles.stat}>
              <h4>5+</h4>
              <p>Years Experience</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Carousel */}
        <div className={styles.rightContent}>
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            fadeEffect={{ crossFade: true }}
            speed={1500}
            className={styles.swiper}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <motion.img
                  src={slide}
                  alt={`Portfolio ${index + 1}`}
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className={styles.slideImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className={styles.scrollHint}>
        <span>Scroll to discover more</span>
        <span className={styles.scrollIcon}>↓</span>
      </div>
    </section>
  );
};

export default Hero;
