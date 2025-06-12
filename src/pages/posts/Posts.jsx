import React from "react";
import Post from "../../components/PostComponent/PostComponent.js";
import styles from "./Posts.module.css";
import { useGetAllIssuesQuery } from "../../store/RTK/postsApi.js";
import Preloader from "../../components/PreLoader/Preloader.js";
import IssueCard from '../volume/issueCard/IssueCard.js'
export default function Posts() {
  const {data,isLoading ,isError} = useGetAllIssuesQuery()
  return (
    <div className={styles.wrapper}>
      {
        isLoading ? <Preloader/> :<>
        {
          isError ? <h1>Что-то пошло не так</h1> : <>
          {
            data.map(issue => {
              return (
                <IssueCard data={issue} key={issue.identifier}/>
              )
            })
          }
          </>
        }
        </>
      }
    </div>
  );
}

