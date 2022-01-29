import { useState, useEffect } from "react";
import HomePageCard from "../../features/HomePageCard/HomePageCard";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import HomePageImg from "../../features/HomePageImg/HomePageImg";
import useMediaQuery from "@mui/material/useMediaQuery";
const HomePage = () => {
  const [foodTypes, setFoodTypes] = useState([]);
  const matches = useMediaQuery("(min-width:700px)");
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("api/food/getFoodType")
      .then((res) => res.json())
      .then((res) => setFoodTypes(res.data));
  }, []);
  return (
    <>
      <HomePageImg
        matches={matches}
        title="Speedy food, good food"
        img={process.env.PUBLIC_URL + "/holidayfood.jpg"}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: `${matches ? "" : "column"}`,
          justifyContent: "space-evenly",
        }}
      >
        {foodTypes.map((type) => (
          <Link
            key={type._id}
            to={type._id}
            style={{
              width: `${matches ? "35%" : "100%"}`,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <Fade left>
              <HomePageCard type={type.foodType} img={type.img} />
            </Fade>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
