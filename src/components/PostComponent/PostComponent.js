import React from 'react'
import styles from './PostComponent.module.css'
import { useNavigate } from 'react-router-dom'
export default function PostComponent({ data }) {
    const navigate = useNavigate()
    return (
        <div className={`${styles.article} ${!data.isVisible && styles.backgroundRed}`}

            onClick={() => navigate(`/post/${data._id}`)}>
            <>
                {
                    !data.isVisible && <h3 className={styles.redText}>Пост неактивен, пользователи не видять этот пост!!!</h3>
                }
            </>
            <h3></h3>
            <div className={styles.articleTitle}>{data.title}</div>

            <div className={styles.serifBolt}>
                <strong>Страница</strong>
                <> {' : ' + data.pages}</>
            </div>
            <div className={styles.serifBolt}>
                <strong>Volume</strong>
                <> {' : ' + data.volume}</>
            </div>
            <div className={styles.serifBolt}>
                <strong>Issue</strong>
                <> {' : ' + data.issue}</>
            </div>
            <div className={styles.authors}>
                <strong>{"Авторы : "}</strong>
                <>
                    {data.authors.map((author, index) => (
                        <>
                            {
                                <div>{author}</div>
                            }
                        </>
                    ))}
                </>
            </div>
            <>
                {
                    data.linkToPdf !== '' ? <a target="_blank" href={`${process.env.PUBLIC_SERVER}/${data.linkToPdf}`}>Открыть Pdf</a> :
                        <div className={styles.redText}>Нужно загрузить pdf файл на сервер</div>
                }
            </>

            {/* <div className={styles.tags}>
                {
                    data.tags.map(tag => {
                        return (
                            <div className={`${styles.tag}`}>#{tag}</div>
                        )
                    })
                }
            </div> */}
        </div>
    )
}
