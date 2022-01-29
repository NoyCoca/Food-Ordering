import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RubberBand from "react-reveal/RubberBand";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -0,
    top: 10,
    border: `1px solid`,
    background: "#ffffff",
  },
}));

const CartButton = ({ counter }) => {
  return (
    <IconButton aria-label="cart">
      <RubberBand spy={counter}>
        <StyledBadge badgeContent={counter}>
          <ShoppingCartIcon fontSize="large" />
        </StyledBadge>
      </RubberBand>
    </IconButton>
  );
};

export default CartButton;
