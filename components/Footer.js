import styles from "../styles/NavFooter.module.css"
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {


  // const currentYear = new Date().getFullYear();

  return (
    <div className={styles.fbackground}>
      <div className={styles.footercontainer}>

        <div className={styles.footergrid}>

          <div className={styles.fgriditem1}>
           <Link href="/"> <Image src='/logo.png' width={150} height={150} alt="wellnessz Logo"/></Link>
            <div className={styles.flogopara}>
              <p>© 2023 Mohi Lifestile Solutions Private Limited ® | All Rights Reserved</p>
              <p>Made with Love</p>
            </div>
          </div>


          <div className={styles.fgriditem2}>
            <div className={styles.Fgridcontainer}>
              <div className={styles.Fgriditem}>
                <div className={styles.Fgriditem11}>Company</div>
                <div className={styles.Fgriditem22}><Link href='/about'>About Us</Link></div>
                {/* <div className={styles.Fgriditem22}><Link href='/privacy-policy.pdf'>Privacy Policy</Link></div> */}
              </div>


              <div className={styles.Fgriditem}>
                <div className={styles.Fgriditem11}><Link href='/terms-and-conditions'>Terms & Conditions</Link></div>
                <div className={styles.Fgriditem22}><Link href='/privacy-policy'>Privacy Policy</Link></div>
                {/* <div className={styles.Fgriditem22}><Link href='#'>Terms & Conditions</Link></div> */}
              </div>


              <div className={styles.Fgriditem}>
                <div className={styles.Fgriditem11}>Resources</div>
                <div className={styles.Fgriditem22}><Link href='/blogs'>Blog</Link></div>
              </div>
            </div>

            <div className={styles.iconsdiv}>
              <a href="https://www.linkedin.com/company/wellnessz/">   <FontAwesomeIcon icon={faLinkedin} className={styles.footericon}/></a>
              <a href="https://instagram.com/wellnessz_official?igshid=MzMyNGUyNmU2YQ==">  <FontAwesomeIcon icon={faInstagram} className={styles.footericon} /></a>
              <a href="https://www.facebook.com/profile.php?id=61553253021745&mibextid=ZbWKwL/">  <FontAwesomeIcon icon={faFacebook}  className={styles.footericon}/></a>
            </div>

            
          </div>

        </div>
      </div>

    </div>

  )
}

export default Footer