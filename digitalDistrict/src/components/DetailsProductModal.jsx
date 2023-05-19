import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia'
import { Avatar } from '@mui/material';
import CancelIcon from "@mui/icons-material/Cancel";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  pt: 1,
  pr: 1,
};

const DetailsProductModal = ({openModalView,handleCloseModalView,specificProduct}) => {

console.log("pructo detallado",specificProduct)
 const {image,description,price,title} = specificProduct
  return (
    <>
     <Modal
        open={openModalView}
        onClose={handleCloseModalView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              onClick={handleCloseModalView}
              variant="text"
              color="error"
            >
              <CancelIcon fontSize="small" />
            </Button>
          </Box>
          <Box sx={{height:"50%",width:"100%", display:"flex",justifyContent:"center"}}>
          <Avatar sx={{height:"50%",width:"50%",borderRadius:"0px", marginBottom:"15px"}} src={image}/>

          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            { title}
          </Typography>
          <Typography variant="body1" color="initial">
            ${price}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default DetailsProductModal