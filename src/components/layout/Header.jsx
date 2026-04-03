import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import styles from '../../styles/Header.module.css';

const Header = ({ onContactOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            TR
          </motion.div>
        </Link>

        <nav className={styles.navDesktop}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/portfolio" className={styles.navLink}>Portfolio</Link>
        </nav>

        <div className={styles.contactDesktop}>
          <Button onClick={onContactOpen} variant="primary" size="md">Contact</Button>
        </div>

        <div className={styles.mobileMenuToggle}>
          <motion.button
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span animate={isMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
            <motion.span animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.3 }} />
            <motion.span animate={isMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
          </motion.button>
        </div>

        <motion.div
          className={styles.mobileMenu}
          animate={isMenuOpen ? { opacity: 1, pointerEvents: 'auto' } : { opacity: 0, pointerEvents: 'none' }}
          transition={{ duration: 0.3 }}
        >
          <nav className={styles.navMobile}>
            <button className={styles.navLinkMobile} onClick={() => handleNavigation('/')}>Home</button>
            <button className={styles.navLinkMobile} onClick={() => handleNavigation('/about')}>About</button>
            <button className={styles.navLinkMobile} onClick={() => handleNavigation('/portfolio')}>Portfolio</button>
            <Button
              onClick={() => {
                if (onContactOpen) onContactOpen();
                setIsMenuOpen(false);
              }}
              variant="primary"
              size="md"
              fullWidth
            >
              Contact
            </Button>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
