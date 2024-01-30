import { FC, useEffect } from "react";
import Catalog from "../../components/layouts/catalog/Catalog";
import catsStore from "../../store/catsStore";
import { catData } from "../../store/catsStore";
import Card from "../../components/card/Card";
import { observer } from "mobx-react";

import "./CatalogCats.scss";

const CatalogCats: FC = () => {
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

  const scrollHandler = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 100;

    if (isAtBottom && !catsStore.loading) {
      catsStore.loadData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div>
      <Catalog items={catsStore.getData()} renderItem={render}></Catalog>
      {catsStore.loading && (
        <p className="catalog-cats__text">... загружаем еще котиков ...</p>
      )}
    </div>
  );
};

export default observer(CatalogCats);
