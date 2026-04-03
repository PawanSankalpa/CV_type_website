import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import AnimatedDownload from '../components/common/AnimatedDownload';
import { fadeInUp } from '../utils/animations';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from '../styles/About.module.css';

const About = () => {
  const skills = [
    ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma'],
    ['UI/UX Design', 'Branding Design', 'Social Media Design', 'Canva'],
    ['Logo Design', 'Brand Identity', 'Graphic Design', 'Web Design'],
  ];

  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About Me</h1>
            <p className={styles.lead}>
              I'm Thushal Rashmitha Palihawadana, a passionate UI/UX designer and graphic designer
              dedicated to creating modern, clean designs that elevate brands. With extensive
              experience in design thinking and digital creation, I specialize in crafting
              eye-catching visuals that resonate with audiences and drive meaningful results.
            </p>
          </motion.div>

          <motion.div
            className={styles.portrait}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              fadeEffect={{ crossFade: true }}
              speed={1500}
              className={styles.carousel}
            >
              <SwiperSlide className={styles.slide}>
                <img src="/thushal_cover_photo.jpg" alt="Portrait 1" className={styles.image} />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <img src="/thushal_cover_photo.jpg" alt="Portrait 2" className={styles.image} />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <img src="/thushal_cover_photo.jpg" alt="Portrait 3" className={styles.image} />
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>My Design Philosophy</h2>
          <p>
            I believe in the power of thoughtful design. Every project begins with a deep
            understanding of the client's vision and their audience. Whether it's creating a brand
            identity from scratch or refining an existing visual language, I bring creativity,
            precision, and strategic thinking to every deliverable.
          </p>
          <p>
            My work spans across logo design, UI/UX design, social media content creation, brand
            identity development, and comprehensive design systems. I'm committed to delivering
            designs that are not just beautiful, but also functional and aligned with business
            objectives.
          </p>
        </div>
      </section>

      <section className={styles.skills}>
        <div className={styles.container}>
          <h2>Skills &amp; Tools</h2>
          <div className={styles.skillsGrid}>
            {skills.map((group, idx) => (
              <motion.div
                key={idx}
                className={styles.skillGroup}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-100px' }}
              >
                {group.map((skill, skillIdx) => (
                  <span key={skillIdx} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Let's Create Something Amazing</h2>
          <p>Download my CV to learn more about my experience and services.</p>
          <AnimatedDownload fileName="t_CV.pdf" />
        </div>
      </section>
    </div>
  );
};

export default About;
