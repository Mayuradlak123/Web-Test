import styles from "../styles/Home.module.css";
import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Head from "next/head";

const Homepage = () => {

  <Head>
    <title>WellnessZ: Your Complete Solution for Wellness Coaches</title>
    <meta name="description" content="WellnessZ is a B2B healthtech platform, your all-in-one solution for nutritionists, gym owners, wellness coaches, hospitals, and more in the health industry. From online presence to CRM, lead generation, and marketing, we've got you covered. Empower your wellness coaching business and brand with us today." />
  </Head>

  const TransitionDuration = 0.7;

  const [ref1, inView1] = useInView({ rootMargin: '0px 0px -50px 0px' });
  const [ref2, inView2] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref3, inView3] = useInView({ rootMargin: '0px 0px -100px -50px' });
  const [ref4, inView4] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref5, inView5] = useInView({ rootMargin: '0px 0px -600px 0px' });
  const [ref6, inView6] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref7, inView7] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref8, inView8] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref9, inView9] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref10, inView10] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref11, inView11] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref12, inView12] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref13, inView13] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref14, inView14] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref15, inView15] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref16, inView16] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref17, inView17] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref18, inView18] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref19, inView19] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref20, inView20] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref21, inView21] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref22, inView22] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref23, inView23] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref24, inView24] = useInView({ rootMargin: '0px 0px -100px 0px' });
  const [ref25, inView25] = useInView({ rootMargin: '0px 0px -100px 0px' });

  const variants = { hidden: { opacity: 0, y: 150 }, visible: { opacity: 1, y: 0 }, };

  return (

    <>
      <div className={styles.firstbackground}>

        <Navbar />

        <div className={styles.row}>

          <div className={styles.column1}>
            <motion.h1 initial={{ opacity: 0.1 }} animate={{ opacity: 1 }} transition={{ duration: 0.99 }}>Wonderful<span>.</span> Workout<span>.</span> Wellbeing</motion.h1>
            
            <p>World’s No. 1 B2B Health Aggregators & Fitness Customer Relationship Support</p>
            <br />
            <br />
            {/* <p>For Wellness Coaches</p> */}

            <motion.button ref={ref1} initial="hidden" animate={inView1 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}><a href="https://play.google.com/store/apps/details?id=com.updevelop.wellness_z_mvvm&pcampaignid=web_share"> Download Now </a></motion.button>

            <br />
            <br />

          </div>



          <motion.div className={styles.column2} ref={ref2} initial="hidden" animate={inView2 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
            <Image className={styles.mainImg} src="/phone.webp" width={480} height={500} alt="A Phone"/>
            <Image className={styles.screen1} src="/screen1.webp" height={330} width={120}  alt="Mobile"/>
            <Image className={styles.screen2} src="/screen2.webp" height={330} width={150}  alt="cover"/>
          </motion.div>

        </div>


        <div className={styles.twoback} >
          <div className={styles.row2}>

            <div className={styles.column3} >
              <motion.img src="/greenbag.webp" className={styles.greenbag} width={600} height={400} ref={ref3} initial="hidden" animate={inView3 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} loading="lazy" />
            </div>


            <div className={styles.column4}>

              <motion.h2 ref={ref4} initial="hidden" animate={inView4 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>Helping Wellness Coaches In Making The World Healthier and Happier!</motion.h2>
              <br />
              <br />
              {/* <p>Welcome to the place where you can  Manage appointments, send reminders, and create a perfect client experience.</p> */}
              {/* <p>For Wellness Coaches</p> */}
              <br />
              <br />

            </div>

          </div>

        </div>
      </div>



      <div className={styles.back}>
        <div className={styles.gridcontainer}>

          <motion.div className={styles.griditem} ref={ref5} initial="hidden" animate={inView5 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}><Image src="/Air Balloon 6.png" height={200} width={200} loading="lazy" alt="Air Baloon"/></motion.div>


          <div className={styles.griditem2}>
            <motion.img className={styles.PhoneIMG} src="/3.webp" ref={ref6} initial="hidden" animate={inView6 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} loading="lazy" />
          </div>


          <motion.div ref={ref7} initial="hidden" animate={inView7 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.griditem3}><Image src="/Air Balloon 1.png" height={200} width={200} alt="Air Balloon"/></motion.div>
        </div>

        <motion.div ref={ref8} initial="hidden" animate={inView8 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.explorebtn}> <button><a href="https://play.google.com/store/apps/details?id=com.updevelop.wellness_z_mvvm&pcampaignid=web_share">Explore Now</a></button></motion.div>
      </div>




      <div className={styles.back2}>
        <div className={styles.rowcontainer}>

          <div className={styles.rowitem1}>

            <motion.img className={styles.circphone} src="/0.webp" ref={ref9} initial="hidden" animate={inView9 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} loading="lazy" />


          </div>


          <div className={styles.rowitem2}>

            <div className={styles.paisa}>
              <motion.img src="/paisa.webp" height={140} width={180} ref={ref10} initial="hidden" animate={inView10 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} loading="lazy" />
            </div>


            <motion.div className={styles.head} ref={ref11} initial="hidden" animate={inView11 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
              <div className={styles.heading}>Generate More leads </div>
              <div className={styles.heading}>Increase Your Earnings</div>
            </motion.div>

            <motion.div className={styles.givemargin} ref={ref12} initial="hidden" animate={inView12 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
              <p>Allow WellnessZ to help you save time so that you can</p>
              <p>Attract More Clients</p>
            </motion.div>
          </div>
        </div>
        <br /><br />
      </div>


      <div className={styles.pointsparent}>
        <motion.div className={styles.points} ref={ref13} initial="hidden" animate={inView13 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>

          <div className={styles.box}><p>Record Daily Order</p></div>
          <div className={styles.box}><p>Manage Your Clients</p></div>
          <div className={styles.box}><p>Create Custom Kits</p></div>
          <div className={styles.box}><p>Create and Share Meal Plans</p> </div>
        </motion.div>
      </div>


      <div className={styles.back2}>
        <div className={styles.rowcontainer2}>

          <div className={styles.bucket}>
            <motion.img src="/bucket.png" height={190} width={191} ref={ref14} initial="hidden" animate={inView14 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} loading="lazy" />
          </div>


          <div className={styles.rowitem11}>





            <div className={styles.heading}>Manage Your Clients Seamlessly </div>

            <motion.div className={styles.givemargin} ref={ref15} initial="hidden" animate={inView15 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
              <p>Keep a Track Of All Orders And Client’s Progress </p>
              <p>with our app.</p>
            </motion.div>



          </div>

          <div className={styles.rowitem22}>
            <motion.img className={styles.circphone2} src="/1.webp" ref={ref16} initial="hidden" animate={inView16 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} loading="lazy" />
          </div>
        </div>
        <br /><br />
      </div>


      <div className={styles.pointsparent}>
        <motion.div className={styles.points} ref={ref17} initial="hidden" animate={inView17 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
          <div className={styles.box2}><p>Manage Your Earnings</p></div>
          <div className={styles.box2}><p>Engage With Community</p></div>
          <div className={styles.box2}><p>Get Progress Analytics</p></div>
          {/* <div className={styles.box2}><p>Wellneess Z Team</p> </div> */}

        </motion.div>
      </div>



      <div className={styles.back3}>

        <div className={styles.middle}>
          <motion.div className={styles.wellness} ref={ref18} initial="hidden" animate={inView18 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>Wellness &nbsp;  Managed</motion.div>

          <motion.div ref={ref19} initial="hidden" animate={inView19 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
            <p className={styles.wellnessp}>WellnessZ CRM Offers</p>
            {/* <p className={styles.wellnessp}>For Wellness Coaches</p> */}
          </motion.div>


          <motion.div ref={ref21} initial="hidden" animate={inView21 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>  <Image src="/mylogo.png" className={styles.circlelogo} height={80} width={80} loading="lazy" alt="WellnessZ Logo"/></motion.div>
        </div>

        <div className={styles.circlegridcontainer}>

          <div className={styles.circlegriditem1}>
            <motion.div className={styles.iconcontainer} ref={ref20} initial="hidden" animate={inView20 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
              <Image src="/11.png" width={60} height={60} className={styles.circleimages} loading="lazy" alt="Circle Images" />
              <p className={styles.cirpara}>Wellness</p></motion.div>
          </div>

          <div className={styles.circlegriditem2}>
            <motion.div className={styles.iconcontainer} ref={ref20} initial="hidden" animate={inView20 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
              <Image src="/14.png" width={60} height={60} className={styles.circleimages} loading="lazy" alt="Circleimages"/>
              <p className={styles.cirpara}>Connection</p></motion.div>
          </div>



          <div className={styles.circlegriditem3}>
            <motion.div className={styles.iconcontainer} ref={ref22} initial="hidden" animate={inView22 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
              <Image src="/12.jpg" width={60} height={60} className={styles.circleimages} loading="lazy" alt="New Object"/>
              <p className={styles.cirpara}>Retail</p></motion.div>
          </div>


          <div className={styles.circlegriditem4}>
            <motion.div className={styles.iconcontainer} ref={ref22} initial="hidden" animate={inView22 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
              <Image src="/13.png" width={60} height={60} className={styles.circleimages} loading="lazy" alt="New Object"/>
              <p className={styles.cirpara}>Management</p></motion.div>
          </div>

        </div>



        <div className={styles.circontainer} >
          <div className={styles.circle}>
            <div className={styles.circle2}>
              <div className={styles.circle3}>
              </div>
            </div>
          </div>
        </div>

      </div>



      {/* 
      <div className={styles.back4}>
        <div className={styles.clientsheading}>Our Clientele</div>

        <div className={styles.clientcontainer}>


          <div className={styles.clientitem}>
            <div className={styles.photo}><img src="/screen1.png" /></div>
            <div className={styles.clientback}><p>Fitness Coaches</p></div>
          </div>


          <div className={styles.clientitem}>
            <div className={styles.photo}><img src="/screen1.png" /></div>
            <div className={styles.clientback}><p>Nutrition Companies</p></div>
          </div>


          <div className={styles.clientitem}>
            <div className={styles.photo}><img src="/screen1.png" /></div>
            <div className={styles.clientback}><p>Wellness Enthusiasts</p></div>
          </div>


        </div>
        <div>
        </div>
      </div> */}



      <div className={styles.back5}>
        <div className={styles.givingmargin}>
          <div className={styles.lastcontainer}>

            <div className={styles.lastgrid}>
              <div className={styles.lastgriditem1}>
                <motion.div ref={ref23} initial="hidden" animate={inView23 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}> <Image src="/iphone.png" height={450} width={600} className={styles.lastImgage} loading="lazy" alt="Iphone"/></motion.div>
              </div>

              <div className={styles.lastgriditem2}>
                <motion.div className={styles.imgcontainer} ref={ref24} initial="hidden" animate={inView24 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} >  <Image src="/logo.png" height={100} width={100} loading="lazy" alt="Iphone"/></motion.div>
                <div className={styles.lastheading}>Get The Best Wellness CRM</div>
                <p>Single Click Solution to all your problems</p>

                <br /><br />
                <motion.button ref={ref25} initial="hidden" animate={inView25 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}><a href="https://play.google.com/store/apps/details?id=com.updevelop.wellness_z_mvvm&pcampaignid=web_share"> Download Now </a></motion.button>
                <br /><br />

              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Homepage