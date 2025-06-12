import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useGetIssuesOfVolumeQuery } from '../../store/RTK/postsApi';
import styles from './Volume.module.css'
import { motion } from 'framer-motion'
import Preloader from '../../components/PreLoader/Preloader';
import IssueCard from './issueCard/IssueCard';
export default function Volume() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const identifier = +queryParams.get('v');
    const navigate = useNavigate()
    if (isNaN(identifier) || identifier <= 0) {
        navigate('*');
    }
    const { data, isLoading, isError } = useGetIssuesOfVolumeQuery(identifier)
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.btn}
                onClick={() => navigate(-1)}
            >Назад</div>
            <div className={styles.issuesWrapper}>
                {
                    isLoading ? <h1>Загрузка...</h1> : <>
                        {
                            isError ? <h1>Что-то пошло не так</h1> : <>
                                {
                                    data.map(issue => {
                                        return (
                                            <IssueCard
                                            key={issue.identifier} data={issue}/>
                                            )
                                    })
                                }
                            </>
                        }
                    </>
                }
            </div>
        </div>
    )
}
