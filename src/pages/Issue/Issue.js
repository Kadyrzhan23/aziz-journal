import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import styles from './Issue.module.css'
import { useGetPostsWithParamsQuery } from '../../store/RTK/postsApi';
import Preloader from '../../components/PreLoader/Preloader';
import LoadingOverlay from '../../components/loaderComponent/LoaderComponent';
import PostComponent from '../../components/PostComponent/PostComponent.js';
import { useTranslation } from 'react-i18next';
export default function Issue() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const volume = +queryParams.get('v');
    const navigate = useNavigate()
  const { t } = useTranslation();

    if (isNaN(volume) || volume <= 0) {
        navigate('*');
    }
    const issue = +queryParams.get('i');
    if (isNaN(issue) || issue <= 0) {
        navigate('*');
    }
    const { data, isLoading } = useGetPostsWithParamsQuery({ volume, issue })
    if (!isLoading) {
        // console.log(data)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.btn}
                onClick={() => navigate(-1)}
            >Назад</div>
            <>
                {
                    isLoading ? <LoadingOverlay /> : <>
                        {
                            data.length === 0 ? <div>
                                <h1 className={styles.text}>{t("issueDefaults")}</h1>
                            </div> :
                                <div className={styles.postWrapper}>
                                    {
                                        data.map(post => {
                                            return (
                                                <PostComponent data={post} />
                                            )
                                        })
                                    }
                                </div>

                        }
                    </>
                }
            </>

        </div>
    )
}
