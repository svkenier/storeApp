import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";

const CardProduct = ({ product, getProductsDetails, addShoppingCars }) => {
  const { title, image, description, id, price } = product;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        margin: "10px",
        marginBottom: "0px",
        flexFlow: "dense",
        height:"60vh"
      }}
    >
      <Card>
        <Box
          sx={{
            height: "50%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img width="90%" height="90%" src={image} alt={title} />
          
        </Box>

        <CardContent
          sx={{ display:"flex", flexDirection:"column", height: "50%", width: "90%"}}
        >
          <Box sx={{display:"flex", flexDirection:"column", width:"100%",height:"70%" }}>
          {/* titulo */}
          <Typography
            sx={{ fontSize: "0.7em", width: "80%" ,height:"25%",margin:0}}
            gutterBottom
            variant="h5"
            component="div"
            >
            {title.slice(0, 30)}
          </Typography>
         
          {/* precio */}
          <Typography variant="body1" color="initial" sx={{ fontSize:"0.8em"}}>
            ${price}
          </Typography>
         
          {/* descripcion */}
          <Typography
            sx={{ fontSize: "0.6em", width: "100%", marginTop:"3px" }}
            variant="body2"
            color="text.secondary"
            >
            {description.slice(0, 100)}
          </Typography>
            </Box>
            {/* botones */}
        <Box
          sx={{ width: "90%",height:"20%" }}
          >
          <Button size="small" onClick={() => addShoppingCars(id)}>
            <AddShoppingCartIcon />
          </Button>
          <Button size="small" onClick={() => getProductsDetails(id)}>
            <RemoveRedEyeIcon />
          </Button>
        </Box>
          </CardContent>
      </Card>
    </Box>
  );
};

export default CardProduct;
