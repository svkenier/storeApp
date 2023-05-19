import { Avatar, Box, Button, Typography } from '@mui/material'

import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const ItemProducts = ({itemProduct,deleteShoppingList}) => {
    const {image,title,price,id} = itemProduct
  return (
    <Box sx={{display:"flex", margin:"10px", gap:"10px", alignItems:"center", }}>
    <Box marginRight="10px" width="10%"><Avatar src={image}/></Box>
    <Box  width="60%">{title}</Box>
    <Box  width="10%">{price}</Box>
    <Box  width="10%" marginLeft="10px">
    <Button onClick={()=>deleteShoppingList(id)} variant="contained" color="error"  size='small' >
    <RemoveShoppingCartIcon sx={{fontSize:"1.2em"}}/>
    </Button>
    </Box>
    </Box>
  )
}

export default ItemProducts