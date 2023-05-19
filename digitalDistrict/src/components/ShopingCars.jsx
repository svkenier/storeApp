import React from "react";
import ItemProducts from "./ItemProducts";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Stack, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  pt: 1,
  pr: 1,
};

const ShopingCars = ({
  handleCloseModalShoppingCars,
  openModalShoppingCars,
  shopingList,
  deleteAllShoppingList,
  deleteShoppingList,
  total
}) => {
  return (
    <>
      <Modal
        open={openModalShoppingCars}
        onClose={handleCloseModalShoppingCars}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,   overflowY: shopingList.length > 5 ? "scroll": "visible" ,height: shopingList.length > 5 ? "300px": "auto"}}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              onClick={handleCloseModalShoppingCars}
              variant="text"
              color="error"
            >
              <CancelIcon fontSize="small" />
            </Button>
          </Box>
          <Box width="90%">
            {
            
              shopingList.length !== 0 ? (
              <Box>
              {shopingList.map((itemProduct) => (
                <ItemProducts deleteShoppingList={deleteShoppingList} itemProduct={itemProduct} key={itemProduct.id} />
              ))}

              <Typography sx={{bgcolor:"#3f51b5",width:"100%",color:"white", padding:"8px"}} >total: {total} </Typography>

              </Box>
            ) 
            : (
              <Typography variant="h6" textAlign="center">El Carrito Esta Vacio</Typography>
            )}
          </Box>
          {shopingList.length !== 0 &&<Box sx={{display:"flex", justifyContent:"space-evenly",marginTop:"30px"}}>
            <Button onClick={deleteAllShoppingList} variant="contained" color="error">
              Vaciar Carrito
            </Button>
            <Button variant="contained" color="primary">
              Comprar
            </Button>
          </Box>}
        </Box>
      </Modal>
    </>
  );
};

export default ShopingCars;
