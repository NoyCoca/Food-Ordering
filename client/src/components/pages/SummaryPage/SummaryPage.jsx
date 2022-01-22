import { Button, ButtonGroup, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { UseMyContext } from "../../../Context";
import Footer from "../../features/Footer/Footer";
import SummaryCard from "../../features/SummaryCard/SummaryCard";

const SummaryPage = () => {
  const state = UseMyContext().state;
    const matches = useMediaQuery("(min-width:700px)");

  const StyleDiv = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #ffffff9e;
    color: #000000;
    display: flex;
    justify-content: space-around;
  `;
  return (
    <div style={{ padding: `${matches ? "60px":"60px 0 0 0" }` }}>
      {state.dishes?.length ? (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            {state.dishes.map((dish) => (
              <SummaryCard dish={dish} />
            ))}
          </div>
          <StyleDiv>
            <h1>Total price: {state.summary.price} $</h1>
            {/* <ButtonGroup variant="outlined" aria-label="outlined button group"> */}
            <Button>Pay now</Button>
            {/* </ButtonGroup> */}
          </StyleDiv>
        </div>
      ) : (
        "your cart is empty"
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default SummaryPage;
