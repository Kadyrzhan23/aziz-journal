import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetOnePostQuery } from "../../store/RTK/postsApi";
import Preloader from "../../components/PreLoader/Preloader";
import PDFViewer from "../../components/pdfViewer/PdfViewer";
import styles from "./Post.module.css";
import PdfUploader from "../../components/pdfUploader/PdfUploader";
import axios from "../../store/axios.js";
import { errorMessage } from "../../service/Alerts";
export default function Post() {
  const { id } = useParams();
  const { data, isLoading ,isError} = useGetOnePostQuery(id);

  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
        {
          isError ? <h1 >Пост неактивен, пользователи не видять этот пост!!!</h1> : <div
          className={`${styles.wrapper} ${
            !data?.isVisible && styles.backgroundRed
          }`}
        >
          <>
            {!data?.isVisible && (
              <h3 className={styles.redText}>
                Пост неактивен, пользователи не видять этот пост!!!
              </h3>
            )}
          </>
          <p className={styles.title}>{data.title}</p>
          <p className={styles.description}>{data.text}</p>

            <a href={`${process.env.PUBLIC_SERVER}/${data.linkToPdf}`}>
              Открыть PDF
            </a>
        </div>
        }
        </>
      )}
    </>
  );
}
