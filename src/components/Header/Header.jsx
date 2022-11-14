import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "./cinema-svgrepo-com.svg";
import { ReactComponent as Profile } from "./user-svgrepo-com.svg";

import styles from "../Header/Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link to="/" className={styles.headerLogo}>
          <div className={styles.headerLogoPhotoDiv}>
            <Logo className={styles.headerLogoPhoto} />
          </div>
          <span className={styles.headerLogoText}>Vmeste.com</span>
        </Link>
        {/* <Link to="/profile" className={styles.headerProfile}>
          <Profile className={styles.headerProfilePhoto} />
          <span className={styles.headerProfileText}>Иван Иванов</span>
        </Link> */}
        <div>
          <span className={styles.firstEver}>Впервые здесь?</span>
          <Link to="/registration">
            <button className={styles.firstEverRegistartion}>
              Регистрация
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
