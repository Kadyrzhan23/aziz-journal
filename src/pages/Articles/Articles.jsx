import React from "react";
import styles from "./Articles.module.css";
import image from "./../../../public/articlesDecember2024.jpg";
import { useTranslation } from "react-i18next";
export default function Articles() {
  const { t } = useTranslation();

  const articles = [
    {
      title: `APPLE MODERN TECHNOLOGIES IN STORAGE OF EXPORT
            VARIETIES OF FRUIT`,
      pages: "5-9",
      authors: [
        "N.A. Nematov PhD  associate professor",
        "Abdullaev F.T. PhD, professor",
        "Dubovik T.V., senior teacher",
      ],
      href: "https://drive.google.com/file/d/1NkR1xoipcZATb97DexfGbDP9F4iV4FBW/view?usp=sharing",
    },
    {
      title: `BEET GROWING TECHNOLOGY`,
      pages: "10-11",
      authors: ["Rajabov Jonibek Baxtiyorovich"],
      href: "https://drive.google.com/file/d/1frrOvGk-o8GZLIL0v4KJ0D-zeKABuzDd/view?usp=sharing",
    },
    {
      title: `QOVUN MEVASINI ISTE’MOLGA YAROQLILIGINI
            XROMATOGRAFIYA USULI YORDAMIDA ANIQLASH VA QAYTA
            ISHLASH JARAYONINI TADQIQ QILISH`,
      pages: "12-15",
      authors: [
        "Hoshimova Shaxlo Ulug‘bek qizi",
        "Nematov Nurillo Abduraxim o‘g‘li",
      ],
      href: "https://drive.google.com/file/d/19O57zNrLRvPNzV9M3NGArWYAeSTBtF0_/view?usp=sharing",
    },
    {
      title: `O‘ZBEKISTON SHAROITIDA ISSIQXONALARNI TASHKIL ETISH VA
            YURITISH ISTIQBOLLARI`,
      pages: "16-18",
      authors: [
        "Toshboyeva Dilshoda Ochilboy qizi",
        "Irzaqulova Sevinch Jamoliddin qizi",
        "Durxo‘jayev Shavkat Fayzullayevich",
      ],
      href: "https://drive.google.com/file/d/17oCD7LzI2lbvarlZoxbkk0Ks58tqbSaq/view?usp=sharing",
    },
    {
      title: `ARPA NAVLARIDA ASOSIY SO‘RUVCHI
      ZARARKUNANDALARGA NISBATAN CHIDAMLI NAVLARNI
      ANIQLASH`,
      pages: "19-21",
      authors: [
        "Nasirov Baxtiyor Salohiddinovich",
        "Norbo‘tayev Abror Alisher o‘g‘li",
      ],
      href: "https://drive.google.com/file/d/1vcuMJPbuPQksffYcgvjLYIhaJCzhBX0l/view?usp=sharing",
    },
    {
      title: `CHIMBOY TUMANI SUG‘ORILADIGAN O‘TLOQI-ALLYUVIAL
      TUPROQLARINING AGROFIZIKAVIY XOSSALARI`,
      pages: "22-25",
      authors: ["Xojasov.А.", "Sayimbetov.A.", "Xojasov.M"],
      href: "https://drive.google.com/file/d/1Kgj61rho7brU_-6M6h8_rDyXz8ELDCsV/view?usp=sharing",
    },
    {
      title: `1-MCP ETILEN INGIBITORI BILAN BEHI MEVASINING SAQLASH
      SAMARADORLIGINI OSHIRISH`,
      pages: "26-30",
      authors: [
        "Uzoqov Islom Toshpulat o‘g‘li",
        "Turg‘unov Azizbek Normat o‘g‘li",
      ],
      href: "https://drive.google.com/file/d/14nhecX82tazV9_dD5lD256a7mjsKlUx0/view?usp=sharing",
    },
    {
      title: `BEDA BARG FILCHASI (PHYTONOMUS VARIABILIS HBST)
      ENTOMOFAGLARI TUR-TARKIBI`,
      pages: "31-33",
      authors: [
        "Ro‘ziqulov Davlatbek Nazaralievich",
        "Xolmirzayev Azizbek Akmaljon o‘g‘li",
        "Abdullayev Azizbek Norbek o‘g‘li",
      ],
      href: "https://drive.google.com/file/d/17tXE5H28dN00ShFQ6VjrtBfomdYihD4W/view?usp=sharing",
    },
    {
      title: `Диффуз астроцитомалардаги патоморфологик хусусиятларининг таҳлили`,
      pages: "34-41",
      authors: ["Ҳ.А.Расулов", "Х.Ж. Бекназаров"],
      href: "https://drive.google.com/file/d/1db02KrXv8mykLeKh3teGX7sFjAi_-XQl/view?usp=sharing",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <h1>{t("articles")}</h1>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1G5v0-LFO8BGa13lDsUb9yW0Lf7vofFQn/view?usp=sharing"
          className={styles.allArticles}
        >
          <img src={image} alt="" />
        </a>
        <div>2024 December Volume 1, Issue 1</div>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1G5v0-LFO8BGa13lDsUb9yW0Lf7vofFQn/view?usp=sharing"
        >
          {t("openPdf")}
        </a>
      </div>
      <br />
      <div className={styles.wrapper}>
        {articles.map((article) => {
          return (
            <div className={styles.article}>
              <div className={styles.articleTitle}>{article.title}</div>
              <div className={styles.serifBolt}>
                <strong>{t("page")}</strong>
                <span> {' : ' + article.pages}</span>
              </div>
              <div className={styles.authors}>
                <strong>{t("postAvtors") + " : "}</strong>
                <>
                  {article.authors.map((author, index) => (
                    <span>
                      {
                        <>
                          <div>{author}</div>
                        </>
                      }
                    </span>
                  ))}
                </>
              </div>
              <a target="_blank" href={article.href}>
                {t("openPdf")}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
