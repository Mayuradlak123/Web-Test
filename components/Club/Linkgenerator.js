import styles from '../../styles/LinkGenerator.module.css';
import { BsLink45Deg } from 'react-icons/bs';
import { isAuth } from '@/actions/auth';
import { MdContentCopy } from 'react-icons/md';

const LinkGenerator = () => {

    function getValue() {
        const user = isAuth();
        if (user) {
            const username = user.username;
            const inputValue = document.getElementById('linkInput').value;
            const googleMeetRegex = /(?:https?:\/\/)?(?:meet\.google\.com|g\.meet)\b\/?([\w-]+)/g;
            var convertedText = inputValue.replace(googleMeetRegex, function(match, p1) {
                return `https://wellnessz.in/${username}/${p1}`;
            });
            document.getElementById('converted').value = convertedText;
        }
    }
    

    function copyToClipboard() {
        var copyText = document.getElementById("converted");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }


    return (
        <>

            <div className={styles.container}>
                <br />
                <div className={styles.main}>
                    <h1> <span> WellnessZ </span> Link Generator</h1>
                    <p className={styles.brief}>
                        Say goodbye to looong, complicated links and Say hello to custom WellnessZ integerated meeting links
                    </p>


                    <div className={styles.linkConverter}>
                        <BsLink45Deg className={styles.icon} color={'gray'} />
                        <input type='text' id='linkInput' placeholder='Type or Paste your link here' />
                        <button onClick={getValue}>Convert</button>
                    </div>


                    <p className={styles.linkHeading}>WellnessZ Meet Link</p>

                    <div className={styles.linkConverter2}>
                        <input type='text' id='converted' placeholder='Your Link' />
                        <button onClick={copyToClipboard}> <MdContentCopy color='#454040' style={{paddingRight:"5px"}} />Copy</button>
                    </div>


                </div>

                <br /><br /><br /><br />
                <br /><br /><br /><br />
            </div>
        </>
    )
}

export default LinkGenerator