import styles from "./Card.module.css";
// import Image from "next/image";

const Card = ({ title, description, img }) => {

    
  return (
    <div className={styles.container}>
      <div className={styles.Card_image}>
          {/* <Image src={img} alt="Card Image"/> */}
        <img src={img} alt="Card Image"/>
        
        {/* <h3>{title}</h3> */}
      </div>
      <div className={styles.Card_body}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
