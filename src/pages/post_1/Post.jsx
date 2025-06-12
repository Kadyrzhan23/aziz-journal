import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Post.module.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
export default function Post() {
  const { id } = useParams();
  const { t } = useTranslation();
  const allPosts = useSelector((state) => state.post.allPosts);
  const image = `public${allPosts[id].image}`;
  // console.log(image)
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  });
  return (
    <div className={styles.container}>
      <div className={`${styles.header} box_shadow`}>
        <img src={'/user.png'} alt="erroruser" className={styles.avatar} />
        <div>
          {allPosts[id].author.length > 1 ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <>
              {t("postAvtors")}
              </> :
              {allPosts[id].author.map((person) => (
                <div>{person + ","}&nbsp;&nbsp;&nbsp;</div>
              ))}
            </div>
          ) : (
            <div className="">{allPosts[id].author}</div>
          )}
        </div>
      </div>
      <div className={styles.section_1}>
        <img src={allPosts[id].image} alt="errorimage" className={styles.postImage} />
        <div className="">
          <strong>{allPosts[id].title}</strong>
          <p>{allPosts[id].description}</p>
        </div>
      </div>
      <a href={allPosts[id].linkPdf} target="_blank" className={styles.btn}>
        Открыть PDF файл
      </a>
    </div>
  );
}
