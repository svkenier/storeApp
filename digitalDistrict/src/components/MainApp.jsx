import useProducts from "../hook/useProducts";
import DetailsProductModal from "./DetailsProductModal";
import ListProducts from "./ListProducts";
import AppBarHeader from "./AppBarHeader";
import ShopingCars from "./ShopingCars";

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
      <ListProducts
        searchProducts={searchProducts}
        getProductsDetails={getProductsDetails}
        addShoppingCars={addShoppingCars}
      />
      <DetailsProductModal
        specificProduct={specificProduct}
        handleCloseModalView={handleCloseModalView}
        openModalView={openModalView}
      />
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
