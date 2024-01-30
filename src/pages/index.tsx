import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Cats from "./Cats/Cats";
import Favorites from "./Favorites/Favorites";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Cats />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default AppRouter;
