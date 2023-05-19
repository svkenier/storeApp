import { Box, Container, Grid } from "@mui/material"
import CardProduct from "./CardProduct"

const ListProducts = ({searchProducts,getProductsDetails,addShoppingCars}) => {
    
  
    
  return (
    <Grid container  spacing={2}  sx={{  display:"flex",flexWrap:"wrap", justifyContent:"center", width:"98%", paddingLeft:"30px"}}>
    { searchProducts.map((product)=> <Grid item  xs={11} sm={4} md={3} lg={3}> <CardProduct  addShoppingCars={addShoppingCars} getProductsDetails={getProductsDetails} product={product} key={product.id}  /> </Grid>)}
    </Grid>
  )
}

export default ListProducts