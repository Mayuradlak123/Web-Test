import React from 'react';
import styles from '../../styles/ClubDashBoard.module.css';
import { BsLink45Deg, BsFillCameraVideoFill, BsEyeFill } from 'react-icons/bs';
import { useState } from 'react';


const ClubDashBoard = () => {

    const [activeButton, setActiveButton] = useState(1);
    const handleButtonClick = (buttonNumber) => { setActiveButton(buttonNumber); };

    return (

            <div className={styles.container}>
                <div className={styles.club_container}>
                    <p>Club Dashboard</p>
                    <div>
                        <div className={styles.box}>
                            <h1>27</h1>
                            <p>Meeting Helds</p>
                        </div>
                        <div className={styles.box}>
                            <h1>54</h1>
                            <p>Total Client</p>
                        </div>
                        <div className={styles.box}>
                            <h1>28</h1>
                            <p>Link Generated</p>
                        </div>
                    </div>
                </div>


                <div className={styles.btngroup}>
                    <div className={`${activeButton === 1 ? styles.addclass : styles.btn0}`}> <button className={`${activeButton === 1 ? styles.newbuttons : styles.buttons}`} onClick={() => handleButtonClick(1)}>Meetings Held</button></div>

                    <div className={`${activeButton === 2 ? styles.addclass : styles.btn0}`}> <button className={`${activeButton === 2 ? styles.newbuttons : styles.buttons}`} onClick={() => handleButtonClick(2)}>Total Clients</button></div>

                    <div className={`${activeButton === 3 ? styles.addclass : styles.btn0}`}>   <button className={`${activeButton === 3 ? styles.newbuttons : styles.buttons}`} onClick={() => handleButtonClick(3)}> Link Generated</button></div>
                </div>


                <br />
                <br />

                <div className={styles.record}>
                    <div className={styles.view}>
                        <div className={styles.record_link}>
                            <BsLink45Deg className={styles.icon} color='gray' />
                            <input type='text' placeholder='Enter meet link to view record' />
                            <button>View!</button>
                        </div>
                        <div className={styles.new_meet}>
                            <BsFillCameraVideoFill color='white' />
                            <p>Record New Meet</p>
                        </div>
                    </div>
                    <div className={styles.dates}>

                        <div >
                            <p>19 Aug 2023</p>
                        </div>
                    </div>

                </div>

                <br/><br/>


                {activeButton === 1 && (
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Link 1</th>
                                <th>Link 2</th>
                                <th>Date</th>
                                <th>Members</th>
                                <th>Club</th>
                                <th>Status</th>
                                <th>Visibility</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className={styles.trwidth0}>1</td>
                                <td className={styles.trwidth1}>https://meet.google.com/rwx-nter-hhy</td>
                                <td className={styles.trwidth2}>https://Wellness Zmeet.google.com/rwx-nter-hhy</td>
                                <td >27-12-23 9:00 AM</td>
                                <td>27 Members</td>
                                <td>Yoga Club</td>
                                <td>Went Good</td>
                                <td><BsEyeFill color='gray' /></td>
                            </tr>


                            <tr>
                                <td className={styles.trwidth0}>2</td>
                                <td className={styles.trwidth1}>https://meet.google.com/rwx-nter-hhy</td>
                                <td className={styles.trwidth2}>https://Wellness Zmeet.google.com/rwx-nter-hhy</td>
                                <td>27-12-23 9:00 AM</td>
                                <td>27 Members</td>
                                <td>Yoga Club</td>
                                <td>Went Good</td>
                                <td><BsEyeFill color='gray' /></td>
                            </tr>


                            <tr>
                                <td className={styles.trwidth0}>2</td>
                                <td className={styles.trwidth1}>https://meet.google.com/rwx-nter-hhy</td>
                                <td className={styles.trwidth2}>https://Wellness Zmeet.google.com/rwx-nter-hhy</td>
                                <td>27-12-23 9:00 AM</td>
                                <td>27 Members</td>
                                <td>Yoga Club</td>
                                <td>Went Good</td>
                                <td><BsEyeFill color='gray' /></td>
                            </tr>


                            <tr>
                                <td className={styles.trwidth0}>2</td>
                                <td className={styles.trwidth1}>https://meet.google.com/rwx-nter-hhy</td>
                                <td className={styles.trwidth2}>https://Wellness Zmeet.google.com/rwx-nter-hhy</td>
                                <td>27-12-23 9:00 AM</td>
                                <td>27 Members</td>
                                <td>Yoga Club</td>
                                <td>Went Good</td>
                                <td><BsEyeFill color='gray' /></td>
                            </tr>



                            <tr>
                                <td className={styles.trwidth0}>2</td>
                                <td className={styles.trwidth1}>https://meet.google.com/rwx-nter-hhy</td>
                                <td className={styles.trwidth2}>https://Wellness Zmeet.google.com/rwx-nter-hhy</td>
                                <td>27-12-23 9:00 AM</td>
                                <td>27 Members</td>
                                <td>Yoga Club</td>
                                <td>Went Good</td>
                                <td><BsEyeFill color='gray' /></td>
                            </tr>

                        </tbody>
                    </table>
                )}




                <br /><br />



                {activeButton === 2 && (

                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Client Name</th>
                                <th>Joining Date</th>
                                <th>Mobile No.</th>
                                <th>City</th>
                                <th>Roll No.</th>
                                <th>Sponsored By</th>
                                <th>Subscription</th>
                                <th>View</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className={styles.clients0}>2</td>
                                <td className={styles.clients1}>SK Rajiv Singh Kumar</td>
                                <td className={styles.clients2}>12 December, 2023</td>
                                <td className={styles.clients3}>1452365879</td>
                                <td className={styles.clients4}>Amritsar</td>
                                <td className={styles.clients5}>1254785</td>
                                <td className={styles.clients6}>Ravi Kumar</td>
                                <td className={styles.clients7}>Active</td>
                                <td className={styles.clients8}><BsEyeFill color='gray' /></td>
                            </tr>
                            <tr>
                                <td className={styles.clients0}>2</td>
                                <td className={styles.clients1}>SK Rajiv Singh Kumar</td>
                                <td className={styles.clients2}>12 December, 2023</td>
                                <td className={styles.clients3}>1452365879</td>
                                <td className={styles.clients4}>Amritsar</td>
                                <td className={styles.clients5}>1254785</td>
                                <td className={styles.clients6}>Ravi Kumar</td>
                                <td className={styles.clients7}>Active</td>
                                <td className={styles.clients8}><BsEyeFill color='gray' /></td>
                            </tr>
                            <tr>
                                <td className={styles.clients0}>2</td>
                                <td className={styles.clients1}>SK Rajiv Singh Kumar</td>
                                <td className={styles.clients2}>12 December, 2023</td>
                                <td className={styles.clients3}>1452365879</td>
                                <td className={styles.clients4}>Amritsar</td>
                                <td className={styles.clients5}>1254785</td>
                                <td className={styles.clients6}>Ravi Kumar</td>
                                <td className={styles.clients7}>Active</td>
                                <td className={styles.clients8}><BsEyeFill color='gray' /></td>
                            </tr>
                            <tr>
                                <td className={styles.clients0}>2</td>
                                <td className={styles.clients1}>SK Rajiv Singh Kumar</td>
                                <td className={styles.clients2}>12 December, 2023</td>
                                <td className={styles.clients3}>1452365879</td>
                                <td className={styles.clients4}>Amritsar</td>
                                <td className={styles.clients5}>1254785</td>
                                <td className={styles.clients6}>Ravi Kumar</td>
                                <td className={styles.clients7}>Active</td>
                                <td className={styles.clients8}><BsEyeFill color='gray' /></td>
                            </tr>
                            <tr>
                                <td className={styles.clients0}>2</td>
                                <td className={styles.clients1}>SK Rajiv Singh Kumar</td>
                                <td className={styles.clients2}>12 December, 2023</td>
                                <td className={styles.clients3}>1452365879</td>
                                <td className={styles.clients4}>Amritsar</td>
                                <td className={styles.clients5}>1254785</td>
                                <td className={styles.clients6}>Ravi Kumar</td>
                                <td className={styles.clients7}>Active</td>
                                <td className={styles.clients8}><BsEyeFill color='gray' /></td>
                            </tr>
                            <tr>
                                <td className={styles.clients0}>2</td>
                                <td className={styles.clients1}>SK Rajiv Singh Kumar</td>
                                <td className={styles.clients2}>12 December, 2023</td>
                                <td className={styles.clients3}>1452365879</td>
                                <td className={styles.clients4}>Amritsar</td>
                                <td className={styles.clients5}>1254785</td>
                                <td className={styles.clients6}>Ravi Kumar</td>
                                <td className={styles.clients7}>Active</td>
                                <td className={styles.clients8}><BsEyeFill color='gray' /></td>
                            </tr>
                        </tbody>
                    </table>
                )}

                <br /><br />

            </div>
    )
}

export default ClubDashBoard