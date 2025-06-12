import React from "react";
import styles from "./Archive.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetAllArchivesQuery } from "../../store/RTK/postsApi";
import Preloader from "../../components/PreLoader/Preloader.js";

export default function Archive() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGetAllArchivesQuery();

  const handleNavigate = () => {
    navigate("/articles");
  };

  return (
    <div>
      <h1>{t("linkArchive")}</h1>
      {isLoading ? (
        <Preloader />
      ) : isError ? (
        <h1>Что-то пошло не так</h1>
      ) : (
        <div className={styles.archivesWrapper}>
          {data.map((item, index) => (
            <div
              key={index}
              className={styles.monthArchivewrapper}
              onClick={()=> navigate(`/volume?v=${item.identifier}`)}
            >
              <div>
                Date: {item.date.day < 10 ? "0" + item.date.day : item.date.day}
                -
                {item.date.month < 10 ? "0" + item.date.month : item.date.month}
                -{item.year}
              </div>
              <div>Volume: {item.identifier}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
