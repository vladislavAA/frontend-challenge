import { FC } from "react";
import catsStore, { catData } from "../../store/catsStore";
import Card from "../../components/card/Card";
import Catalog from "../../components/layouts/catalog/Catalog";
import { observer } from "mobx-react";

const CatalogFavorites: FC = () => {
  const handleId = (id: string, url: string) => {
    catsStore.checkFavorites(id, url);
  };

  const render = (data: catData) => {
    if (data) {
      return (
        <Card
          data={data}
          key={data.id}
          addInFavorites={handleId}
          favorites={catsStore.getIdMap(data.id)}
        />
      );
    }
  };
  const favoritesArray = Array.from(catsStore.idMap.entries()).map(
    ([id, url]) => ({
      id,
      url,
    })
  );
  return <Catalog items={favoritesArray} renderItem={render}></Catalog>;
};

export default observer(CatalogFavorites);
