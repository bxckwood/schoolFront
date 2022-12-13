import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "./cinema-svgrepo-com.svg";
import { ReactComponent as Profile } from "./user-svgrepo-com.svg";
import { ReactComponent as Burger } from "./burger.svg";

import styles from "../Header/Header.module.scss";

function Header() {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  console.log(token);

  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link to="/" className={styles.headerLogo}>
          <div className={styles.headerLogoPhotoDiv}>
            <Logo className={styles.headerLogoPhoto} />
          </div>
          <span className={styles.headerLogoText}>Together.com</span>
        </Link>
        {token ? (
          <div className={styles.right}>
            <Link to="/profile" className={styles.headerProfile}>
              <Profile className={styles.headerProfilePhoto} />
              <span className={styles.headerProfileText}>{name}</span>
            </Link>
            <div
              onClick={() => setBurgerActive(true)}
              className={styles.burger}
            >
              <div className={styles.burgerHover}>
                <Burger className={styles.burger} />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <span className={styles.firstEver}>Впервые здесь?</span>
            <Link to="/registration">
              <button className={styles.firstEverRegistartion}>
                Регистрация
              </button>
            </Link>
          </div>
        )}
      </div>
      {burgerActive ? (
        <div className={styles.burgerMenu}>
          <div className={styles.burgerHover}>
            <Burger
              className={styles.burger2}
              onClick={() => setBurgerActive(false)}
            />
          </div>
          <div className={styles.burgerInner}>
            <Link className={styles.burgerLinks} to="/group">
              Группы
            </Link>
            <Link className={styles.burgerLinks} to="/youtube">
              Просмотр видео в компании
            </Link>
            <Link
              className={styles.burgerLinks}
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("name");
                window.location.reload();
              }}
              to="/authorization"
            >
              Выйти из аккаунта
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
