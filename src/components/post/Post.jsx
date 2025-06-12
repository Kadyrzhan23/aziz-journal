import React from "react";
import styles from "./Post.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import userIMG from '../../../public/user.png'
export default function Post({ data, index }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // console.log(t("postAvtor"));
  return (
    <div
      className={`${styles.wrapper} box_shadow`}
      onClick={() => navigate(`/post/${data._id}`)}
    >
      <div className={styles.header}>
        <img src="/user.png" alt="" className={styles.avatar} />
        <div className={styles.postInfo}>
          <div className={styles.postInfo_col}>
            <div className={styles.postInfo_font}>
              {t("postAvtor") +
                // (
                //   <>
                //     {post.author.length > 1 ? t("postAvtor") : t("postAvtors")}
                //   </>
                // )
                ":"}
            </div>
          </div>
          <div className={styles.postInfo_col}>
            {data.authors.map((person, index) => {
              return (
                <div className={styles.postInfo_font}>
                  {person}
                  {index + 1 !== data.authors.length && ","}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.main}>
        
        
        {/* <div className={styles.postText}>
          <b className={styles.postTitle}>{post.title}</b> */}
          <p>{data.text}</p>
        {/* </div> */}
      </div>
    </div>
  );
}
