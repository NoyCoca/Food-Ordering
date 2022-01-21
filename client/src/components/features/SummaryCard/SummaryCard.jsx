import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material/";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TableSize from "../TableSize/TableSize";

const SummaryCard = ({ dish }) => {
  return (
    <Card
      style={{
        // width: "60%",
        display: "flex",
        justifyContent: "space-evenly",
        margin: "15px",
        boxShadow: "rgb(0 0 0 / 6%) 1px 0px 20px 0px;",
        backgroundColor: " #fff0",
      }}
    >
      <img
        height="140"
        width="30%"
        src={dish.dishesImg}
        alt={dish.name}
        style={{ alignSelf: "center" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {dish.dishesName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <TableSize size={dish.size} dish={dish} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
