import React from 'react'
import styles from './ErrorComponent.module.css'
export default function ErrorComponent({message = 'Что-то пошло не так'}) {
  return (
    <div className={styles.preloaderContainer}>
        <div className={styles.title}>{message}</div>
    </div> 
  )
}


