import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';
import styles from '../../styles/ContactModal.module.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Zod validation schemas
const step1Schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
});

const step2Schema = z.object({
  message: z.string().min(10, 'Message must be at least 10 characters'),
  type: z.string(),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
  });

  const onStep1Submit = (data: Step1Data) => {
    setStep1Data(data);
    setStep(2);
  };

  const onStep2Submit = (data: Step2Data) => {
    if (step1Data) {
      console.log('Form submitted:', {
        ...step1Data,
        ...data,
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setStep(1);
        setStep1Data(null);
        setIsSubmitted(false);
        onClose();
      }, 5000);
    }
  };

  const handleBackClick = () => {
    setStep(1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {!isSubmitted ? (
              <>
                <div className={styles.header}>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: step === 1 ? '50%' : '100%' }}
                    />
                  </div>
                  <p className={styles.stepIndicator}>Step {step} of 2</p>
                  <h2>Let's Create Together</h2>
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.form
                      key="step1"
                      onSubmit={handleSubmit1(onStep1Submit)}
                      className={styles.form}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          {...register1('name')}
                          className={errors1.name ? styles.error : ''}
                        />
                        {errors1.name && <span className={styles.errorText}>{errors1.name.message}</span>}
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          {...register1('email')}
                          className={errors1.email ? styles.error : ''}
                        />
                        {errors1.email && <span className={styles.errorText}>{errors1.email.message}</span>}
                      </div>

                      <Button type="submit" variant="primary" size="lg" fullWidth>
                        Next →
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.form
                      key="step2"
                      onSubmit={handleSubmit2(onStep2Submit)}
                      className={styles.form}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.formGroup}>
                        <label htmlFor="type">Project Type</label>
                        <select
                          id="type"
                          {...register2('type')}
                          className={errors2.type ? styles.error : ''}
                        >
                          <option value="general">General Inquiry</option>
                          <option value="project">Design Project</option>
                          <option value="collaboration">Collaboration</option>
                          <option value="other">Other</option>
                        </select>
                        {errors2.type && <span className={styles.errorText}>{errors2.type.message}</span>}
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="message">Tell Me About Your Project</label>
                        <textarea
                          id="message"
                          placeholder="Describe your design needs, project scope, and vision..."
                          rows={5}
                          {...register2('message')}
                          className={errors2.message ? styles.error : ''}
                        />
                        {errors2.message && <span className={styles.errorText}>{errors2.message.message}</span>}
                      </div>

                      <div className={styles.formActions}>
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          onClick={handleBackClick}
                          fullWidth
                        >
                          ← Back
                        </Button>
                        <Button type="submit" variant="primary" size="lg" fullWidth>
                          Send Message
                        </Button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.successIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for getting in touch. I'll respond as soon as possible.</p>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
