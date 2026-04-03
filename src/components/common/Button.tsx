import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
