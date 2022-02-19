import MenuCard from "../../features/MenuCard/MenuCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import TitleImg from "../../features/TitleImg/TitleImg";
import Loader from "../../features/Loader/Loader";

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const { id } = useParams();
  const matches = useMediaQuery("(min-width:700px)");

  useEffect(() => {
    // window.scrollTo(0, 0);
    fetch(`api/food/getFoodTypeById/${id}`)
      .then((res) => res.json())
      .then((res) => setMenu(res.data));
  }, [id]);

  return (
    <>
      {menu.dishes ? (
        <>
          <TitleImg title={menu.foodType} img={menu.img} matches={matches} />
          <div
            style={{
              display: "flex",
              margin: matches ? "70px" : "0",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {menu.dishes?.map((dish, index) => (
              <MenuCard key={index} dish={dish} />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MenuPage;
