import CardItem from "./CardItem";
import classes from "./CardList.module.css";
import avatarImg from "../../assets/image/profile.jpg";

export default function CardList() {
  return (
    <div className={classes.listContainer}>
      <CardItem
        name="Shikshya Maharjan"
        email="Shishya.maharjan@gmail.com"
        location="AUS"
        experience="5 years"
        role="Software developer"
        avatarImg={avatarImg}
      />
      <CardItem
        name="Sudikshya Maharjan"
        email="sudikshya.maharjan@gmail.com"
        location="nepal"
        experience="3 years"
        role="UIUX developer"
        avatarImg={avatarImg}
      />
      <CardItem
        name="Bidhya Maharjan"
        email="bidhya.maharjan@gmail.com"
        location="UK"
        experience="4 years"
        role="backend developer"
        avatarImg={avatarImg}
      />
      <CardItem
        name="Tommy Maharjan"
        email="tommy.maharjan@gmail.com"
        location="africa"
        experience="2 years"
        role="forntend developer"
        avatarImg={avatarImg}
      />
    </div>
  );
}
