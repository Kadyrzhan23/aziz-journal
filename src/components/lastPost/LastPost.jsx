import React, { useEffect } from "react";
import styles from "./LastPost.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function LastPost({ post, index }) {
  const navigate = useNavigate()
  const image = '../../../public' + post.image
  return (
    <motion.div
    initial="initial"
    whileHover="after"
    // variants={variants}
    className={`${styles.wrapper} box_shadow`}
    onClick={()=> navigate(`/post/${index}`)}>
      <img
        src={post.image}
        alt="error image"
        className={styles.image}
        style={{image}}
      />
      <div className={styles.postTheme}>
        {post.title}
      </div>
      <div className={styles.description}>
        {post.description}
      </div>
    </motion.div>
  );
}
