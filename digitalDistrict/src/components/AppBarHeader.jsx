import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputSearch from "../components/InputSearch"

const AppBarHeader = ({
  handleOpenModalShoppingCars,
  handleShowSearch,
  showSearch,
  handleChange,
}) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            variant="dense"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box sx={{ display: "flex" }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
              Digital District
              </Typography>
            </Box>
            {showSearch && <InputSearch handleChange={handleChange} />}
            <Box>
              <Button onClick={handleShowSearch} variant="text" sx={{ color: "white" }}>
                <SearchIcon />
              </Button>
              <Button
                onClick={handleOpenModalShoppingCars}
                variant="text"
                sx={{ color: "white" }}
              >
                <ShoppingCartIcon />
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default AppBarHeader;
