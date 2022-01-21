import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material/";


const HomePageCard = ({type, img}) => {
  return (
    <Card
      style={{
        margin: "15px",
        boxShadow: "1px 0px 20px 20px #0000000f",
        backgroundColor: " #fff0",
      }}
    >
      <CardActionArea style={{ width: "100%", height: "45vh" }}>
        <CardMedia style={{ height: "70%" }} component="img" image={img} />
        <CardContent style={{height: "30%"}}>
          <Typography gutterBottom variant="h5" component="div">
            {type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HomePageCard;
