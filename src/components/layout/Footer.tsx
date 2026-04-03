import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../../styles/Footer.module.css';

const Footer: React.FC = () => {
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
              <Link to="/" className={styles.link}>
                Home
              </Link>
              <Link to="/about" className={styles.link}>
                About
              </Link>
              <Link to="/portfolio" className={styles.link}>
                Portfolio
              </Link>
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
            © {currentYear} GaleGrid. All rights reserved.
          </p>
          <div className={styles.credits}>
            <a href="#privacy" className={styles.creditLink}>
              Privacy
            </a>
            <a href="#terms" className={styles.creditLink}>
              Terms
            </a>
          </div>
          <motion.button
            className={styles.backToTop}
            onClick={handleScrollTop}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            aria-label="Back to top"
          >
            ↑ Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: string }> = ({ icon }): React.ReactElement | null => {
  const icons: Record<string, React.ReactElement> = {
    twitter: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-10c2-3 5-5 9-5z" />
      </svg>
    ),
    linkedin: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    github: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    dribbble: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M8.56 2.75c3.61 6.17 6.36 9.02 9.44 17.5M2.75 15.44c5.52 2.86 7.21 4.3 14.88 3.16" stroke="currentColor" strokeWidth="2" fill="none" />
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

export default Footer;
