import { FC, useState } from "react";
import { catData } from "../../store/catsStore";
import { observer } from "mobx-react";
import HeartNoFill from "../../assets/HeartNoFill";
import HeartFill from "../../assets/HeartFill";

import "./Card.scss";
import HeartHover from "../../assets/HeartHover";

interface Card {
  data: catData;
  addInFavorites: Function;
  favorites: boolean;
}

const Card: FC<Card> = ({ data, addInFavorites, favorites }) => {
  const [isHovered, setIsHovered] = useState(false);

  const image = () => {
    if (favorites) {
      return isHovered ? <HeartHover /> : <HeartFill />;
    } else {
      return isHovered ? <HeartHover /> : <HeartNoFill />;
    }
  };

  return (
    <div className="card">
      <div className="card__img-box">
        <img src={data.url} alt="Photo cat" className="card__img" />
        <div
          className="card__icon-favorites"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => addInFavorites(data.id, data.url)}
        >
          {image()}
        </div>
      </div>
    </div>
  );
};

export default observer(Card);
