import CardItem from "./CardItem";
import classes from "./CardList.module.css";
import { cardData } from "../../Data/card-data";

export default function CardList() {
  return (
    <div className={classes.listContainer}>
      {cardData.map((item) => {
        return (
          <CardItem
          key={item.id} //item,index in pss garcha but yo right hoena 
          // every part uniquely iditify garana key use garni
            name={item.name}
            email={item.email}
            location={item.location}
            experience={item.experience}
            role={item.role}
            avatarImg={item.avatarImg}
            // {...item} khatra vayasi use gara
          />
        );
      })}
      {/* <CardItem
        name="Shikshya Maharjan"
        email="Shishya.maharjan@gmail.com"
        location="AUS"
        experience="5 years"
        role="Software developer"
        avatarImg={avatarImg1}
      />
      <CardItem
        name="Sudikshya Maharjan"
        email="sudikshya.maharjan@gmail.com"
        location="nepal"
        experience="3 years"
        role="UIUX developer"
        avatarImg={avatarImg2}
      />
      <CardItem
        name="Bidhya Maharjan"
        email="bidhya.maharjan@gmail.com"
        location="UK"
        experience="4 years"
        role="backend developer"
        avatarImg={avatarImg3}
      />
      <CardItem
        name="Tommy Maharjan"
        email="tommy.maharjan@gmail.com"
        location="africa"
        experience="2 years"
        role="forntend developer"
        avatarImg={avatarImg4}
      /> */}
    </div>
  );
}
