import { Box, TextField } from '@mui/material'
import React from 'react'

const InputSearch = ({handleChange}) => {
  return (
    
    <TextField size='small' sx={{display:"flex",width:"40%",bgcolor:"white"}} variant="standard" placeholder='Buscar' onChange={handleChange}/>
   
  )
}

export default InputSearch