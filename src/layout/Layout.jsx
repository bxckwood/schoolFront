import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";

import styles from "../layout/Layout.module.scss";

function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <Header />
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
