import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

export default function Header2() {
  const { t , i18n} = useTranslation();
  const location = useLocation().pathname.split("/");
  const pagesLinks = ["", "posts", "contacts"];
  let selectedLanguage = window.localStorage.getItem("selectedLanguage");
  const [activeIndex, setActive] = useState(
    pagesLinks.includes(location[1]) ? pagesLinks.indexOf(location[1]) : 0
  );
  const [width, setWidth] = useState(window.innerWidth);
  const [lang, setLang] = useState(
    selectedLanguage !== null ? selectedLanguage : "ru"
  );
  const pages = [
    { name: t("linkHome"), path: "/", link: "/" },
    { name: t("linkArchive"), path: "archive", link: "/archive" },
    { name: t("linkPosts"), path: "posts", link: "/posts" },
    { name: t("linkAbout"), path: "about", link: "/about" },
    { name: t("linkContacts"), path: "contacts" },
    // { name: t("linkContacts"), path: "members" },

  ];
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (index) => {
    // console.log(index)
    navigate(pages[index].path);
    setActive(index);
  };
  const langChange = (event) => {
    const language = event.target.value;
    selectedLanguage = language;
    window.localStorage.setItem("selectedLanguage", language);
    setLang(language);
    i18n.changeLanguage(language);
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} box_shadow`}>
        {width > 670 ? (
          <AnimatePresence>
            <img
              src={"/public/main_logo.png"}
              alt=""
              className={styles.logo}
              onClick={() => navigate("/")}
            />
            <div className={styles.navList}>
              {pages.map((item, index) => (
                <div 
                className={`${styles.navItem} ${activeIndex === index && styles.activeLink}`}
                onClick={()=> handleNavigate(index)}>{item.name.toUpperCase()}</div>
              ))}
              <a className={`btn ${styles.btnTg}`}
              href="https://t.me/Azizbek_1711"
              target="_blank"
              >{t("btnHeader")}</a>
              <span>
                <select onChange={langChange} value={lang}>
                  <option value={"ru"}>ru</option>
                  <option value={"en"}>en</option>
                  <option value={"uz"}>uz</option>
                  <option value={"kz"}>kz</option>
                </select>
              </span>
            </div>
          </AnimatePresence>
        ) : (
          <>
            {/* <Example/> */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                color: "text.primary",
              }}
              className=""
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="red"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      handleNavigate(index)
                      // navigate(`/${page.path}`);
                      // console.log(page.path)
                    }}
                  >
                    <Typography textAlign="center">
                      {page.name.toUpperCase()}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <button className="btn">{t("btnHeader")}</button> */}
            <span className={styles.lang}>
              <select onChange={langChange} value={lang}>
                <option value={"ru"}>ru</option>
                <option value={"en"}>en</option>
                <option value={"uz"}>uz</option>
                <option value={"kz"}>kz</option>
              </select>
            </span>
          </>
        )}
      </div>
    </div>
  );
}

function NavItem({ item, isSelected, handleClick }) {
  return (
    <motion.div
      onClick={handleClick}
      className={styles.navItem}
      initial={{ color: "#000" }}
      animate={{ color: isSelected ? "#0056D6" : "#000" }}
    >
      {isSelected && <ActiveLine />}
      {item.name.toUpperCase()}
    </motion.div>
  );
}

function ActiveLine() {
  return (
    <motion.div
      layoutId="activeItem"
      style={{
        width: "25px",
        height: "2px",
        position: "absolute",
        bottom: "8px",
        backgroundColor: "#0056D6",
      }}
    />
  );
}
