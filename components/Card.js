import styles from "./Card.module.css";
// import Image from "next/image";

const Card = ({ title, description, img }) => {

    
  return (
    <div className="rounded-xl bg-gren-100 border shadow-sm">
      <div className="shrink-0 border-b rounded-t-xl">
          {/* <Image src={img} alt="Card Image"/> */}
        <img src={img} alt="Card Image" className="rounded-t-xl"/>
      </div>
      <div className="p-3">
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
