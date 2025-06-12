import React, { useState } from "react";
import { useGetAllArchivesQuery } from "../../store/RTK/postsApi";
import Preloader from "../../components/PreLoader/Preloader";
import styles from "./Archives.module.css";
import { useNavigate } from "react-router-dom";
import axios from "../../store/axios.js";
import ErrorComponent from "../../components/error/ErrorComponent";
import LoadingOverlay from "../../components/loaderComponent/LoaderComponent";
import { errorMessage } from "../../utils/Alerts.js";
import Volumes from "./volumes/Volumes";
export default function Archives() {
  const { data, isLoading, isError } = useGetAllArchivesQuery();
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {isError ? (
            <ErrorComponent />
          ) : (
            <>
              <div className={styles.wrapper}>
                <div className={styles.volumeWrapper}>
                  {data.map((volume) => {
                    return <Volumes data={volume} key={volume.year} />;
                  })}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
