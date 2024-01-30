import styles from "../../styles/signup.module.css";

const GoogleFormLink = () => {

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.heading}>Roll Number</h1>
                <br />

                <form autoComplete="off">
                    <input className={styles.inputs} name="name" type="text" placeholder="Name" />
                    <button className={styles.button}>Submit</button>

                </form>
            </div>
        </>
    )
}

export default GoogleFormLink