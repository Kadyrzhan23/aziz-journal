import React, { useEffect } from 'react';
import styles from './LoaderComponent.module.css';

const LoadingOverlay = ({ isLoading, text = 'Загрузка, пожалуйста, подождите...' }) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => (document.body.style.overflow = '');
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.loader}></div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default LoadingOverlay;