import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Select from "../Select/Select";
import { useReducer, useState } from "react";
import { UseMyContext } from "../../../Context";

const MenuCard = ({ dish }) => {
  const [size, setSize] = useState();

  const handleChange = (event) => {
    setSize(event.target.value);
  };
const dispatch = UseMyContext().dispatch

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ margin: "10px", background: "#fff0" }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="190"
        image={dish.dishesImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dish.dishesName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        <Select sizes={dish.size} size={size} handleChange={handleChange} />
        <>
          {size ? (
            <p style={{ fontSize: "17px", fontWeight: "600" }}>
              {dish?.size?.find((dishSize) => dishSize.size === size).price}$
            </p>
          ) : (
            <p>Select a size</p>
          )}
        </>
        <Button
          size="small"
          onClick={() =>
            size ? dispatch({ type: "addDish", payload: { dish, size } }) : ""
          }
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default MenuCard;
