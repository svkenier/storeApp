
import axios from "axios"


 export const getAllProducts = async () => {
    const url = 'https://apimocha.com/productapi/posts'
    const {data} = await axios.get(url)
  return data
    
 }




