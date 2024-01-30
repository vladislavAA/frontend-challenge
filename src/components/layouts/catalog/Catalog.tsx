import { FC } from "react";
import { catData } from "../../../store/catsStore";

import "./Catalog.scss";
import { observer } from "mobx-react";

interface Catalog {
  items: catData[] | Record<string, string>;
  renderItem: Function;
}

const Catalog: FC<Catalog> = ({ items, renderItem }) => {
  return (
    <div className="catalog">
      {(items as catData[]).map((item) => renderItem(item))}
    </div>
  );
};

export default observer(Catalog);
