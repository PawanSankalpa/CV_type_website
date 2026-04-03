import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../../styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  onContactOpen?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onContactOpen }) => {
  return (
    <div className={styles.layout}>
      <Header onContactOpen={onContactOpen} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
