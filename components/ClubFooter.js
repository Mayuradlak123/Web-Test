import styles from "../styles/clubfooter.module.css";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram,  faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const ClubFooter = () => {

  return (
    <div className={styles.fbackground}>
      <div className={styles.footercontainer}>

        <div className={styles.footergrid}>

          <div className={styles.fgriditem1}>
           <Link href="/"> <Image src='/logo.png' width={150} height={150} alt="wellnessz Logo"/></Link>
            <div className={styles.flogopara}>
              <p>© 2023 Mohi Lifestile Solutions Private Limited </p>
              <p>All Rights Reserved</p>
            </div>
          </div>


          <div className={styles.fgriditem2}>
            <div className={styles.Fgridcontainer}>
              <div className={styles.Fgriditem}>
                <div className={styles.Fgriditem11}>Company</div>
                <div className={styles.Fgriditem22}><Link href='/about'>About Us</Link></div>
              </div>

              <div className={styles.Fgriditem}>
                <div className={styles.Fgriditem11}>Legal</div>
                <div className={styles.Fgriditem22}><Link href='/terms-and-conditions'>Terms & Conditions</Link></div>
              </div>


              <div className={styles.Fgriditem}>
                <div className={styles.Fgriditem11}>Resources</div>
                <div className={styles.Fgriditem22}><Link href='/blog'>Blog</Link></div>
              </div>
            </div>

            <div className={styles.iconsdiv}>
              <a href="https://www.linkedin.com/company/wellnessz/">   <FontAwesomeIcon icon={faLinkedin} className={styles.footericon}/></a>
              <a href="https://instagram.com/wellnessz_official?igshid=MzMyNGUyNmU2YQ==">  <FontAwesomeIcon icon={faInstagram} className={styles.footericon} /></a>
              <a href="https://instagram.com/wellnessz_official?igshid=MzMyNGUyNmU2YQ==">  <FontAwesomeIcon icon={faFacebook}  className={styles.footericon}/></a>
            </div>


          </div>

        </div>
      </div>

    </div>

  )
}

export default ClubFooter