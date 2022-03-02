import styles from "./Card.module.css";

const Card = ({ title, summary }) => {
    return (
        <div className={styles.container}>
            <div className={styles.Card_image}>
                <h2>Image Here</h2>
            </div>
            <div className={styles.Card_body}>
                <h3>{title}</h3>
                {/* <p>{summary}</p> */}
            </div>
        </div>
    );
};

export default Card;
