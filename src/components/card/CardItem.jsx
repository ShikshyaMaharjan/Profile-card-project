import { useState } from "react";
import Card from "./Card";

import classes from "./CardItem.module.css";

export default function CardItem(props) {
  const [buttontext, setButtonText] = useState("View More");
  const [showDetails, setShowDetails]=useState(false);
  console.log(props); //props vanyako pratent bata child

  function handelToggleDetails() {
    setButtonText(buttontext==='View More'? 'View Less':'View More');
    setShowDetails(!showDetails);
  }
  return (
    <Card>
      <div className={classes.header}>
        <img
          className={classes.avatar}
          src={props.avatarImg}
          alt="profile avatar"
        />

        <div className={classes.userInfo}>
          <h2 className={classes.name}>{props.name}</h2>
          <p className={classes.role}>{props.role}</p>
        </div>
      </div>
      {showDetails &&(
      <div className={classes.details}>
        <div className={classes.detailItem}>
          <span className={classes.label}> Email:</span>
          <span>{props.email} </span>
        </div>

        <div className={classes.detailItem}>
          <span className={classes.label}>Location:</span>
          <span>{props.location}</span>
        </div>

        <div className={classes.detailItem}>
          <span className={classes.label}>Experience:</span>
          <span>{props.experience}</span>
        </div>
      </div>
      )}
      <button className={classes.button}onClick={handelToggleDetails}>{buttontext}
      </button>
    </Card>
  );
}
