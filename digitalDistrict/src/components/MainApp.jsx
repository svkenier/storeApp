import useProducts from "../hook/useProducts";
import DetailsProductModal from "./DetailsProductModal";
import ListProducts from "./ListProducts";
import AppBarHeader from "./AppBarHeader";
import ShopingCars from "./ShopingCars";
import Grid from '@mui/material/Grid'
import MenuHeader from "./MenuHeader";

const MainApp = () => {
  const {
    products,
    getProductsDetails,
    handleCloseModalView,
    handleOpenModalView,
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
  } = useProducts();

  return (
    <>

      <AppBarHeader showSearch={showSearch} handleShowSearch={handleShowSearch} handleChange={handleChange} handleOpenModalShoppingCars={handleOpenModalShoppingCars} />
      
      <MenuHeader/>

      <Grid container spacing={0}>
        <Grid item xs={6}></Grid>
      <ListProducts  
        searchProducts={searchProducts}
        getProductsDetails={getProductsDetails}
        addShoppingCars={addShoppingCars}
        />
      <Grid item sx={8} >
      <DetailsProductModal
        specificProduct={specificProduct}
        handleCloseModalView={handleCloseModalView}
        openModalView={openModalView}
        />
        </Grid>
        </Grid>
      <ShopingCars
        handleCloseModalShoppingCars={handleCloseModalShoppingCars}
        openModalShoppingCars={openModalShoppingCars}
        shopingList={shoppingList}
        deleteShoppingList={deleteShoppingList}
        deleteAllShoppingList={deleteAllShoppingList}
        total={total}
      />
    </>
  );
};

export default MainApp;
