import styled from "styled-components";
import Fade from "react-reveal/Reveal";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import FoodBankRoundedIcon from "@mui/icons-material/FoodBankRounded";
const HomePageImg = ({ title, img }) => {
  const StyleDiv = styled.div`
    background-image: url(${img});
    width: 100%;
    min-height: 100vh;
    background-size: cover;
  `;
  const InSideDiv = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    margin: 0;
    font-size: 70px;
    font-family: "Comfortaa", cursive;
    background: #00000038;
    color: #ffffffdd;
  `;

  console.log(title);
  return (
    <StyleDiv>
      <InSideDiv>
        <Fade left>
          <h1>
            {title !== "Speedy food, good food" ? (
              <FoodBankRoundedIcon style={{ fontSize: "300px" }} />
            ) : (
              <DeliveryDiningIcon style={{ fontSize: "300px" }} />
            )}
          </h1>
          <h1>{title}</h1>
        </Fade>
      </InSideDiv>
    </StyleDiv>
  );
};
export default HomePageImg;
