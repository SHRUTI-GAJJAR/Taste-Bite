import React from "react";
import Home from "../../page/Home";
import Recipe from "../../page/Recipe";
import Categories from "../../page/Categories";
import { Route, Routes } from "react-router";
import AddProduct from "../../page/AddProduct";
import DeleteProduct from "../../page/DeleteProduct";
import UpdateProduct from "../../page/UpdateProduct";
import BookmarkedRecipes from "../../page/BookmarkedRecipes";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Recipe" element={<Recipe />} />
      <Route path="/Categories" element={<Categories />} />
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/UpdateProduct" element={<UpdateProduct />} />
      <Route path="/DeleteProduct" element={<DeleteProduct />} />
      <Route path="/BookmarkedRecipes" element={<BookmarkedRecipes />} />
    </Routes>
  );
};

export default Routing;
