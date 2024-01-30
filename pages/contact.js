import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import styles from "../styles/contact.module.css"
import Image from "next/image"
import Head from "next/head"

const head = () => (
    <Head>
      <title>Contact</title>
      <meta name="description" content="This is a WellnessZ contact page" />
      <meta name="robots" content="follow, index, noarchive, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <link rel="canonical" href="https://www.wellnessz.in" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="WellnessZ - A B2B Healthtech Platform" />
      <meta property="og:description" content="This is a WellnessZ contact page." />
      <meta property="og:url" content="https://www.wellnessz.in" />
      <meta property="og:site_name" content="WellnessZ" />
    </Head>
  );


const Contact = () => {
    return (
        <>
        {head()}
            <div className={styles.firstbackground}>
                <Navbar />

                <div className={styles.top}>
                    <Image className={styles.mainImg} src="/phone.webp" width={480} height={500} alt="img"/>
                    <Image className={styles.screen1} src="/screen1.webp" height={330} width={120} alt="img"/>
                    <Image className={styles.screen2} src="/screen2.webp" height={330} width={150} alt="img"/>
                </div>

                <div className={styles.blog}>

                    <h1>Contact Us</h1>
                    <p>Got a question about the WellnessZ App or wish to reach out to Us for Anything Else ?</p>
                </div>


                <div className={styles.cChild}>
                    <div className={styles.container}>

                        <div className={styles.containerC}>
                            <div className={styles.containerCChild}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
                                        <path d="M37.668 0C16.8979 0 0 16.8979 0 37.668V53.2738C0 57.131 3.37882 60.2687 7.53359 60.2687H11.3004C12.2994 60.2687 13.2575 59.8719 13.9639 59.1655C14.6703 58.4591 15.0672 57.501 15.0672 56.502V37.1293C15.0672 36.1303 14.6703 35.1722 13.9639 34.4658C13.2575 33.7594 12.2994 33.3625 11.3004 33.3625H7.88014C9.97448 18.785 22.5179 7.53359 37.668 7.53359C52.818 7.53359 65.3615 18.785 67.4558 33.3625H64.0355C63.0365 33.3625 62.0784 33.7594 61.372 34.4658C60.6656 35.1722 60.2687 36.1303 60.2687 37.1293V60.2687C60.2687 64.4235 56.8899 67.8023 52.7352 67.8023H45.2016V64.0355H30.1344V75.3359H52.7352C61.0447 75.3359 67.8023 68.5783 67.8023 60.2687C71.9571 60.2687 75.3359 57.131 75.3359 53.2738V37.668C75.3359 16.8979 58.4381 0 37.668 0Z" fill="white" />
                                    </svg>
                                </div>


                                <div className={styles.c2}>
                                    <h2>Customer Support</h2>
                                    <div className={styles.childchild}>
                                        <div>support@wellnessz.in</div>
                                        <div className={styles.line}></div>
                                        <div>7888624347</div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <div className={styles.second}>
                    <h2>Our Offices</h2>
                </div>

                <div className={styles.secondflex}>

                    <div className={styles.column1}>
                        <img src="/Amritsar.png" height={202} width={250} loading="lazy"/>
                        <div className={styles.Asr}>Amritsar</div>
                        <div className={styles.para}>Got a question about the Busineswise app or wish to reach out to us for anything else?</div>
                    </div>


                    <div>
                        <img src="/map.webp" className={styles.map} width={800} height={242}/>
                    </div>

                </div>




                
      <div className={styles.back5}>
        <div className={styles.givingmargin}>
          <div className={styles.lastcontainer}>

            <div className={styles.lastgrid}>
              <div className={styles.lastgriditem1}>
                <Image src="/iphone.png" height={450} width={600} className={styles.lastImgage} loading="lazy"/>
              </div>

              <div className={styles.lastgriditem2}>
                <div className={styles.imgcontainer}>  <Image src="/logo.png" height={100} width={100} loading="lazy"/></div>
                <div className={styles.lastheading}>Get The Best Wellness CRM</div>
                <p>Single Click Solution to all your problems</p>

                <br/><br/>
                <button><a href="https://play.google.com/store/apps/details?id=com.updevelop.wellness_z_mvvm&pcampaignid=web_share"> Download Now </a></button>
                <br/><br/>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>



            <Footer />

        </>
    )
}

export default Contact