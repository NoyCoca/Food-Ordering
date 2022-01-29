import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material/";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TableSize from "../TableSize/TableSize";
import useMediaQuery from "@mui/material/useMediaQuery";

const SummaryCard = ({ dish, matches }) => {
              debugger;

  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "15px",
        boxShadow: "rgb(0 0 0 / 6%) 1px 0px 20px 0px;",
        backgroundColor: " #fff0",
        backgroundImage: `url(${matches ? "" : dish.dishesImg})`,
        backgroundSize: "cover",
      }}
    >
      <img
        height="140"
        width="30%"
        src={dish.dishesImg}
        alt={dish.name}
        style={{ alignSelf: "center", display: `${matches ? "" : "none"}` }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ padding: "0px" }}
        >
          <TableSize size={dish.size} dish={dish} matches={matches} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
