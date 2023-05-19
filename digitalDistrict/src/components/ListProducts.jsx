import { Box, Container } from "@mui/material"
import CardProduct from "./CardProduct"

const ListProducts = ({searchProducts,getProductsDetails,addShoppingCars}) => {
    
  
    
  return (
    <Container sx={{ display:"flex",flexWrap:"wrap", justifyContent:"center"}}>
    { searchProducts.map((product)=><CardProduct addShoppingCars={addShoppingCars} getProductsDetails={getProductsDetails} product={product} key={product.id}  />)}
    </Container>
  )
}

export default ListProducts