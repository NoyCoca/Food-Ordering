import { useState, useEffect } from "react";
import HomePageCard from "../../features/HomePageCard/HomePageCard";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import HomePageImg from "../../features/HomePageImg/HomePageImg";

const HomePage = () => {
  const [foodTypes, setFoodTypes] = useState([]);

  useEffect(() => {
        window.scrollTo(0, 0);
    fetch("http://localhost:8080/api/food/getFoodType")
      .then((res) => res.json())
      .then((res) => setFoodTypes(res.data));
  }, []);
  console.log(foodTypes);
  return (
    <> 
      {/* <Reveal effect="fadeInUp"> */}
        <HomePageImg
          title="Speedy food, good food"
          img={process.env.PUBLIC_URL + "/holidayfood.jpg"}
        />
      {/* </Reveal> */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {foodTypes.map((type) => (
              
            <Link
              key={type._id}
              to={type._id}
              style={{
                width: "35%",
                textDecoration: "none",
                textAlign: "center",
              }}
            >      <Fade left>

              <HomePageCard type={type.foodType} img={type.img} />
            </Fade>
            </Link>
          ))}
        </div>
    </>
  );
};

export default HomePage;
