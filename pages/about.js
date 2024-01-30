import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import styles from "../styles/about.module.css"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Head from "next/head";



const head = () => (
    <Head>
        <title>About</title>
        <meta name="description" content="This is the About page" />
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



const Blog = () => {

    const [activeButton, setActiveButton] = useState(null);
    const handleButtonClick = (id) => {
        setActiveButton(id === activeButton ? null : id);
    };

    return (
        <>
            {head()}
            <div className={styles.firstbackground}>
                <Navbar />

                <div className={styles.top}>
                    <Image className={styles.mainImg} src="/phone.webp" width={480} height={500} />
                    <Image className={styles.screen1} src="/screen1.webp" height={330} width={120} />
                    <Image className={styles.screen2} src="/screen2.webp" height={330} width={150} />
                </div>

                <div className={styles.blog}>

                    <h1>Our Story</h1>
                    <p>In 2021, I had a big problem: I wanted to lose weight, and I did it! I lost a whopping 32 kilograms because I was determined. But during this journey, I noticed something odd in the health and wellness world - everyone was still using paper to keep track of things.
                        So, I decided to change things up. I wanted to make it easier for people like you and your clients. That's when I started Wellnessz. Our mission is straightforward: we want to help you by taking away the heavy lifting of dealing with paperwork.
                        Our goal is to bring technology into the health and wellness game. We have smart solutions that make your journey to a healthier life smoother. With Wellnessz, you won't have to worry about piles of paper anymore. We'll handle everything for you and your clients, so you can focus on your well being</p>
                </div>



                <div className={styles.Gcontainer}>

                    <h1>Team</h1>


                    <div className={styles.owner}>
                        <Image className={styles.ownerImg} src="/simar.jpg" width={400} height={400} />
                        <div className={styles.name}>
                            <div className={styles.ownername}>Simarpreet Singh</div>

                            <button onClick={() => handleButtonClick(1)} className={styles.biobutton}>
                                {activeButton === 1 ? 'Hide bio' : 'Show bio'}&nbsp; <FontAwesomeIcon icon={faArrowCircleDown} className={styles.arricon} />
                            </button>

                            <div hidden={activeButton !== 1}>
                                <p >As the CEO and founder of WellnessZ, I bring a blend of technical expertise as a Flutter developer and a seasoned entrepreneur with a strong background in startups. With a passion for innovation and a track record of successful execution, I'm dedicated to leading our company towards the forefront of the health tech B2B industry. My journey is fueled by a commitment to harness technology's power to transform the wellness landscape, providing our clients and partners with the tools and insights needed to thrive. Join me as we embark on a journey of growth, innovation, and success together.</p>

                                <div className={styles.icons} >
                                    <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                                    <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                                    <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className={styles.gridparent}>
                        <div className={styles.grid}>



                            <div className={styles.card1}>
                                <Image src="/Kanan.png" height={280} width={400} />
                                <div className={styles.name}>
                                    <div className={styles.ownername}>Kanan Pathak</div>

                                    <button className={styles.biobutton} onClick={() => handleButtonClick(7)}>
                                        {activeButton === 7 ? 'Hide bio' : 'Show bio'}&nbsp; <FontAwesomeIcon icon={faArrowCircleDown} className={styles.arricon} />
                                    </button>

                                    <div hidden={activeButton !== 7}>
                                        <p >As the Chief Operating Officer (COO), my role includes comprehensive oversight of our company's operations. This includes managing critical areas such as social media, where I strategize and execute campaigns for brand engagement. I foster strong client relations, ensuring satisfaction and loyalty through exceptional service. In the realm of marketing, I lead initiatives, making innovative strategies to promote our products and services effectively. Additionally, I am hands-on in content creation. Through my leadership, guidance, and unwavering support, I ensure we consistently meet and exceed our objectives, ultimately positioning us as industry leaders.</p>

                                        <div className={styles.icons}>
                                            <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                                            <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                                            <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>











                            {/* <div className={styles.card1}>
                                <Image src="/bhavishya.jpeg" height={280} width={300} />
                                <div className={styles.name}>
                                    <div className={styles.ownername}>Bhavishya Mehra</div>

                                    <button className={styles.biobutton} onClick={() => handleButtonClick(3)}>
                                        {activeButton === 3 ? 'Hide bio' : 'Show bio'}&nbsp; <FontAwesomeIcon icon={faArrowCircleDown} className={styles.arricon}/>
                                    </button>
                                    <div hidden={activeButton !== 3}>
                                        <p>I am the CMO at WellnessZ. I will be handling the marketing and startegy making at WellnessZ</p>

                                        <div className={styles.icons}>
                                            <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                                            <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                                            <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}





                            <div className={styles.card1}>
                                <Image src="/arjun.jpeg" height={280} width={300} />
                                <div className={styles.name}>
                                    <div className={styles.ownername}>Arjun Kumar</div>

                                    <button className={styles.biobutton} onClick={() => handleButtonClick(8)}>
                                        {activeButton === 8 ? 'Hide bio' : 'Show bio'}&nbsp; <FontAwesomeIcon icon={faArrowCircleDown} className={styles.arricon} />
                                    </button>


                                    <div hidden={activeButton !== 8}>
                                        <p>As a nutritionist with five years of experience and an active World Team member at Herbalife, I'm passionate about promoting wellness. I'm also a co-founder of Wellnessz, a holistic health venture committed to empowering individuals to achieve their health and fitness aspirations</p>

                                        <div className={styles.icons}>
                                            <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                                            <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                                            <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>







                            <div className={styles.card1}>
                                <Image src="/divyanshu.jpg" height={280} width={300} />
                                <div className={styles.name}>
                                    <div className={styles.ownername}>Divyanshu Rawat</div>

                                    <button className={styles.biobutton} onClick={() => handleButtonClick(4)}>
                                        {activeButton === 4 ? 'Hide bio' : 'Show bio'}&nbsp; <FontAwesomeIcon icon={faArrowCircleDown} className={styles.arricon} />
                                    </button>

                                    <div hidden={activeButton !== 4}>
                                        <p>Frontend Developer handling the design of WellnessZ</p>
                                        <div className={styles.icons}>
                                            <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                                            <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                                            <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>






                            <div className={styles.card1}>
                                <Image src="/tanveer.jpg" height={280} width={300} />
                                <div className={styles.name}>
                                    <div className={styles.ownername}>Tanveer Kaur</div>

                                    <button className={styles.biobutton} onClick={() => handleButtonClick(2)}>
                                        {activeButton === 2 ? 'Hide bio' : 'Show bio'}&nbsp; <FontAwesomeIcon icon={faArrowCircleDown} className={styles.arricon} />
                                    </button>

                                    <div hidden={activeButton !== 2}>
                                        <p>UI/UX designer for WellnessZ App, using design principles and Figma to create user-friendly client interfaces that align with our brand identity. My role involves wireframing, prototyping, and applying design elements for a cohesive and engaging user experience, leveraging typography, color theory and interaction designs.
                                        </p>
                                        <div className={styles.icons}>
                                            <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                                            <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                                            <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            <div className={styles.card1}>
                                <Image src="/Sahibdeep.jpg" height={280} width={300} />
                                <div className={styles.name}>
                                    <div className={styles.ownername}>Sahibdeep Singh</div>

                                    <button className={styles.biobutton} onClick={() => handleButtonClick(5)}>
                                        {activeButton === 5 ? 'Hide bio' : 'Show bio'}&nbsp; <FontAwesomeIcon icon={faArrowCircleDown} className={styles.arricon} />
                                    </button>

                                    <div hidden={activeButton !== 5}>
                                        <p >Worked as a Backend Developer at wellnessz where I played a pivotal role in developing and maintaining our scalable and performant server-side applications.</p>

                                        <div className={styles.icons}>
                                            <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                                            <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                                            <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className={styles.card1}>
                                <Image src="/manas.jpg" height={280} width={400} />
                                <div className={styles.name}>
                                    <div className={styles.ownername}>Manas Gupta</div>

                                    <button className={styles.biobutton} onClick={() => handleButtonClick(6)}>
                                        {activeButton === 6 ? 'Hide bio' : 'Show bio'}&nbsp; <FontAwesomeIcon icon={faArrowCircleDown} className={styles.arricon} />
                                    </button>

                                    <div hidden={activeButton !== 6}>
                                        <p >It's your Cyberbuddy Manas, a passionate individual who loves teaching and learning new concepts. I believe problem-solving is critical and that everyone can develop this skill by helping others. My focus is on understanding problems, leveraging technology, and having fun.</p>

                                        <div className={styles.icons}>
                                            <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                                            <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                                            <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>



          <h2 className={styles.specialthanksheading}>Special Thanks</h2>
                <div className={styles.specialthanks}>
                    <div>
                        <div>Sahil Arora</div>
                        <div>Surbhi</div>
                        <div>Sukhwinder Singh</div>
                        <div>Paramjit Kaur</div>
                        <div>Sonali Rana</div>
                        <div>Tanveer Kaur</div>
                        <div>Divyanshu Rawat</div>
                        <div>Dharmik</div>
                        <div>Sahibdeep Singh</div>
                        <div>Amit Kumar</div>
                        <div>Bharat</div>
                        <div>Bhavishya Mehra</div>
                        <div>Manas Gupta</div>
                        <div>Hargun Raj</div>
                        <div>Kartik Rehan</div>

                    </div>


                    <div>
                        
                        <div>Law Lead</div>
                        <div>Grivience Officer</div>
                        <div>Legal Reach</div>
                        <div>Documentation Work</div>
                        <div>Documentation Work</div>
                        <div>Figma Designer</div>
                        <div>Web Developer</div>
                        <div>Flutter Developer</div>
                        <div>Web Developer</div>
                        <div>Web Developer</div>
                        <div>Marketing</div>
                        <div>Manager</div>
                        <div>Mentor</div>
                        <div>Financials</div>
                        <div>UI/UX</div>

                    </div>
                </div>



                <div className={styles.back5}>
                    <div className={styles.givingmargin}>
                        <div className={styles.lastcontainer}>

                            <div className={styles.lastgrid}>
                                <div className={styles.lastgriditem1}>
                                    <Image src="/iphone.png" height={450} width={600} className={styles.lastImgage} />
                                </div>

                                <div className={styles.lastgriditem2}>
                                    <div className={styles.imgcontainer}>  <Image src="/logo.png" height={100} width={100} /></div>
                                    <div className={styles.lastheading}>Get The Best Wellness CRM</div>
                                    <p>Single Click Solution to all your problems</p>

                                    <br /><br />
                                    <button><a href="https://play.google.com/store/apps/details?id=com.updevelop.wellness_z_mvvm&pcampaignid=web_share"> Download Now </a></button>
                                    <br /><br />

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

export default Blog