import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <div className={`${styles.footer} box_shadow`}></div>

    // <footer className={styles.footer}>
    //   <div className={styles.container}>
    //     {/* Logo + About */}
    //     <div className={`${styles.logoSection} flex flex-col`}>
    //       <div className="flex items-center gap-4 my-auto mx-4">
    //         {/* <img
    //           src="/main-logo.png"
    //           alt="Logo"
    //           className={styles.logo}
    //           onClick={() => navigate("/")}
    //         /> */}
    //         <p className="text-sm leading-relaxed">
    //           <span className={styles.logoText}>
    //             Центральноазиатский журнал сельского и лесного хозяйства
    //           </span>{" "}
    //           — платформа для обмена знаниями и научными исследованиями.
    //         </p>
    //       </div>
    //     </div>

    //     {/* Навигация */}
    //     <div>
    //       <h4 className={styles.sectionTitle}>Навигация</h4>
    //       <ul className={styles.navList}>
    //         <li>
    //           <a href="/" className={styles.extraLink}>
    //             Главная
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/archive" className={styles.extraLink}>
    //             Архив
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/posts" className={styles.extraLink}>
    //             Статьи
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/about" className={styles.extraLink}>
    //             О журнале
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/contacts" className={styles.extraLink}>
    //             Контакты
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Контакты */}
    //     <div>
    //       <h4 className={styles.sectionTitle}>Контакты</h4>
    //       <ul className={styles.contactList}>
    //         <li>📧 <a href="mailto:agriculture.medicine.journal@gmail.com">agriculture.medicine.journal@gmail.com</a></li>
    //         <li>📍 Ташкент, Узбекистан</li>
    //         <li>📞 +998 (99) 878-31-57</li>
    //       </ul>
    //     </div>

    //     {/* Дополнительно */}
    //     <div>
    //       <h4 className={styles.sectionTitle}>Дополнительно</h4>
    //       <div className="flex space-x-3 mt-2">
    //         <a
    //           href="https://t.me/Azizbek_1711"
    //           target="_blank"
    //           rel="noreferrer"
    //           className={styles.extraLink}
    //         >
    //           Telegram
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    //   <div className={styles.bottom}>
    //     © {currentYear} Central Asian Journal of Agriculture and Forestry. Все
    //     права защищены.
    //   </div>
    // </footer>
  );
}
