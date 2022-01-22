import styled from "styled-components";
import Fade from "react-reveal/Reveal";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import FoodBankRoundedIcon from "@mui/icons-material/FoodBankRounded";
const HomePageImg = ({ title, img, matches }) => {
  const homePageTitle ="Speedy food, good food"
  const StyleDiv = styled.div`
    background-image: url(${img});
    width: 100%;
    min-height: ${title !== homePageTitle && !matches ? "50vh" : "100vh"};
    background-size: cover;
  `;
  const InSideDiv = styled.h1`
    display: flex;
    justify-content: center;
    flex-direction: ${matches ? "" : "column"};
    align-items: center;
    text-align: center;
    min-height: ${title !== homePageTitle && !matches ? "50vh" : "100vh"};
    margin: 0;
    font-size: ${matches ? "70px" : ""};
    font-family: "Comfortaa", cursive;
    background: #00000038;
    color: #ffffffdd;
  `;

  console.log(title);
  return (
    <StyleDiv>
      <InSideDiv>
        <Fade left>
          <h1 style={{ margin: "0px" }}>
            {title !== homePageTitle ? (
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
