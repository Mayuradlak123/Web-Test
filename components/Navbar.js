import React from 'react';
import Link from 'next/link';
import styles from "../styles/NavFooter.module.css";

const Navbar = () => {


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
        <Link href="/">  <img className={styles.logo} src="/logo.png" alt="Wellnessz Logo"/></Link>
          <div className={styles.menuicon} onClick={disablenavbar2}>☰</div>
        </div>


      <ul id="disable" className={styles.navLinks} onClick={disablenavbar}>
        <li><Link href="/about">About Us</Link></li>
        <li><Link  href="/blogs">Blog</Link></li>
        <li><Link className={styles.contactshow} href="/contact">Contact</Link></li>
        <li><Link className={styles.contactshow} href="/club/login">Club Login</Link></li>
      </ul>


      {/* <div className=''> */}
      <div className={styles.contact}>
        <Link href="/contact">Talk to Us</Link>        
      <div className={styles.clublogin}>
        {/* <Link href="/club/login" className={styles.clublogin} >  Club Login </Link> */}
        <Link href="https://club.wellnessz.in" target='_blank' className={styles.clublogin} >  Club Login </Link>
        </div>
        </div>
      {/* </div> */}


    </nav>
  );
};

export default Navbar;
