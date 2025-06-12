import React from 'react'
import styles from './Volumes.module.css'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
export default function Volumes({ data }) {
    const navigate = useNavigate()
  const { t } = useTranslation();

    return (
        <div className={styles.card}
        onClick={()=> navigate(`/volume?v=${data.identifier}`)}
        >
            <div className={styles.cardContent}>
                {/* <h2 className={styles.productName}>{name}</h2> */}
                <p className={styles.releaseDate}>{t("volume")}: {data.year}</p>
            </div>
        </div>
    )
}
