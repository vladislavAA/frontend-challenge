import { FC } from "react";
import Header from "../../components/layouts/header/Header";
import CatalogFavorites from "../../containers/catalog-favorites/CatalogFavorites";

const Favorites: FC = () => {
  return (
    <div>
      <Header />
      <CatalogFavorites />
    </div>
  );
};

export default Favorites;
