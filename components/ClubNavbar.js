import React from 'react';
import Link from 'next/link';
import styles from "../styles/clubnavbar.module.css";

const ClubNavbar = () => {

  function disablenavbar2() {
    let x = document.getElementById("disable")
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else { x.style.display = "block" }
  }

  function disablenavbar() { document.getElementById("disable").style.display = "none"; }


  return (
    <nav className={styles.nav}>


        <div className={styles.iconmenucontainer}>
        <Link href="/">  <img className={styles.logo} src="/wellnessz-logo.webp" alt="Wellnessz Logo"/></Link>
          <div className={styles.menuicon} onClick={disablenavbar2}>☰</div>
        </div>


      <ul id="disable" className={styles.navLinks} onClick={disablenavbar}>
      </ul>


      <div className={styles.contact}>
      <Link href="/contact">About Us</Link>
        <Link href="/contact">Blog</Link>
        <Link href="/contact">More</Link>


        <Link href="/contact">Talk to Us</Link>
        <Link href="/contact">Club Login</Link>

      </div>

    </nav>
  );
};

export default ClubNavbar;
