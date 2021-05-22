import React from "react";
import Styles from "./Header.module.css";

export default () => (
  <header className={Styles.navList}>
    <ul>
      <li>
        <a href="/">Movies</a>
      </li>
      <li>
        <a href="tv/">TV</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </header>
);
