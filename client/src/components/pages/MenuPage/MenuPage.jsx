import MenuCard from "../../features/MenuCard/MenuCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HomePageImg from '../../features/HomePageImg/HomePageImg'

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`http://localhost:8080/api/food/getFoodTypeById/${id}`)
      .then((res) => res.json())
      .then((res) => setMenu(res.data));
  }, []);
  
  return (
    <div>
      <HomePageImg title={menu.foodType} img={menu.img} />
      <div
        style={{
          display: "flex",
          margin: "70px",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {menu.dishes?.map((dish, index) => (
          <MenuCard key={index} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
