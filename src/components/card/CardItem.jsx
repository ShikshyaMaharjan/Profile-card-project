import classes from "./CardItem.module.css";
import userAvatarImg from "../../assets/image/profile.jpg";

export default function CardItem() {
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <img
          className={classes.avatar}
          src={userAvatarImg}
          alt="profile avatar"
        />
        <div className={classes.userInfo}>
          <h2 className={classes.name}>Shikshya Maharjan</h2>
          <p className={classes.role}>Frontend Developer</p>
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.detailItem}>
          <span className={classes.label}> Email:</span>
          <span>john@example.com </span>
        </div>

        <div className={classes.detailItem}>
          <span className={classes.label}>Location:</span>
          <span>Kathmandu, Nepal</span>
        </div>

        <div className={classes.detailItem}>
          <span className={classes.label}>Experience:</span>
          <span>3 years</span>
        </div>
      </div>
      <button className={classes.button}>View More</button>
    </div>
  );
}