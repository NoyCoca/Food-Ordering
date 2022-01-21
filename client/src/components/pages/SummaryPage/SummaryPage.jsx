import { UseMyContext } from "../../../Context";
import SummaryCard from "../../features/SummaryCard/SummaryCard";

const SummaryPage = () => {
   const state = UseMyContext().state;

return (
  <div style={{ padding: "60px" }}>
    {state.dishes?.length ? (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          {state.dishes.map((dish) => (
            <SummaryCard dish={dish} />
          ))}
        </div>
        <h1>Total price: {state.summary.price} $</h1>
      </div>
    ) : (
      "your cart is empty"
    )}
  </div>
);
};

export default SummaryPage;