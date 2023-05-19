import { useState, useEffect,useMemo } from "react";
import { getAllProducts } from "../api/getAllProducts";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const useProducts = () => {
  //* ///////estados//////////

  const [products, setProducts] = useState([]);
  const [specificProduct, setspecificProduct] = useState({});
  const [shoppingList, setShoppingList] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  //* //////estados de modal view/////
  const [openModalView, setOpenModalView] = useState(false);
  const handleOpenModalView = () => setOpenModalView(true);
  const handleCloseModalView = () => setOpenModalView(false);

  //* ///////estados de modal de shopingCars//////
  const [openModalShoppingCars, setOpenModalShoppingCars] = useState(false);
  const handleOpenModalShoppingCars = () => setOpenModalShoppingCars(true);
  const handleCloseModalShoppingCars = () => setOpenModalShoppingCars(false);

  //* /////////funcion de lista de productos///////////
  const getProducts = async () => {
    const allProducts = await getAllProducts();
    setProducts(allProducts);

  };

  //* /////// useEfect///////

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    TotalCalculate();
  }, [shoppingList]);

  //* /////funcion detalles de priucto/////
  const getProductsDetails =  (id) => {
    setspecificProduct(products.find((product)=> product.id === id));
    handleOpenModalView();
  };

  //* /////calculo de total////////
  const TotalCalculate = () => {
    let total = shoppingList
    .reduce((acc, cur) => {
        return acc + cur.price;
      }, 0)
      .toFixed(2);
    setTotal(total);
  };

  //* /////funcion add al carrito/////
  const addShoppingCars = async (id) => {
    let FindProduct = products.find((item) => item.id === id);
    let product = { ...FindProduct, id: uuidv4() };

    console.log(product);
    setShoppingList([...shoppingList, product]);
  };

   //* ///////funcion de eliminar////
  const deleteShoppingList = (id) => {
    const shoppingListFilter = shoppingList.filter((item) => item.id !== id);
    setShoppingList(shoppingListFilter);
  };

  //* /////funcion de eliminar todo////
  const deleteAllShoppingList = () => {
    setShoppingList([]);
  };

  
  
  //* /////funcion Buscadora////////
  
  const searchProducts = useMemo(() => 
     products.filter((product) =>{
     return product.category.toLowerCase().includes(search.toLowerCase())
  }),[search, products])

//* /////funcion de handleChange//////
const handleChange = (event) =>{
  setSearch(event.target.value);
}

//* ///////funcion de mostrar buscador////

 const handleShowSearch = ()=>{
  setShowSearch(!showSearch);
 }

  
  return {
    getProductsDetails,
    handleCloseModalView,
    openModalView,
    specificProduct,
    addShoppingCars,
    shoppingList,
    handleOpenModalShoppingCars,
    openModalShoppingCars,
    handleCloseModalShoppingCars,
    deleteShoppingList,
    deleteAllShoppingList,
    total,
    handleChange,
    handleShowSearch,
    showSearch,
    searchProducts
  };
};

export default useProducts;
