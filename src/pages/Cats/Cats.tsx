import { FC, useEffect } from "react";
import Header from "../../components/layouts/header/Header";
import catsStore from "../../store/catsStore";
import CatalogCats from "../../containers/catalog-cats/CatalogCats";
import { observer } from "mobx-react";

const Cats: FC = () => {
  useEffect(() => {
    catsStore.loadData();
  }, []);

  return (
    <div>
      <Header />
      <CatalogCats />
    </div>
  );
};

export default observer(Cats);
