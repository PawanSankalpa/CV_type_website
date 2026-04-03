import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../../styles/Footer.module.css';

const SocialIcon = ({ icon }) => {
  const icons = {
    linkedin: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    youtube: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    facebook: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    tiktok: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.66 1.94 2.89 2.89 0 0 1 5.66-1.93c0 .13 0 .26-.02.39h3.4a6.27 6.27 0 0 0-.78-4.22 6.27 6.27 0 1 0-12.53 3.02 6.28 6.28 0 0 0 9.62-5.87z" />
      </svg>
    ),
  };
  return icons[icon] || null;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/feed/', icon: 'linkedin' },
    { name: 'YouTube', url: 'https://www.youtube.com/@ThushalRashmithaPalihawadana', icon: 'youtube' },
    { name: 'Facebook', url: 'https://www.facebook.com/thushal.rashmitha.palihawadana', icon: 'facebook' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@r_a_s_h_2004?is_from_webapp=1&sender_device=pc', icon: 'tiktok' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <Link to="/" className={styles.logo}>
              TR
            </Link>
            <p className={styles.tagline}>
              Creative graphic designer and UI/UX specialist crafting modern, clean designs that help brands stand out.
            </p>
          </div>

          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Navigation</h4>
            <nav className={styles.linkGroup}>
              <Link to="/" className={styles.link}>Home</Link>
              <Link to="/about" className={styles.link}>About</Link>
              <Link to="/portfolio" className={styles.link}>Portfolio</Link>
            </nav>
          </div>

          <div className={styles.socialsSection}>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title={social.name}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <SocialIcon icon={social.icon} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className={styles.emailSection}>
            <h4 className={styles.sectionTitle}>Get In Touch</h4>
            <a href="mailto:thushalrashmitha21@gmail.com" className={styles.emailLink}>
              thushalrashmitha21@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} GaleGrid. All rights reserved.
          </p>
          <div className={styles.credits}>
            <a href="#privacy" className={styles.creditLink}>Privacy</a>
            <a href="#terms" className={styles.creditLink}>Terms</a>
          </div>
          <motion.button
            className={styles.backToTop}
            onClick={handleScrollTop}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            aria-label="Back to top"
          >
            &#x2191; Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
