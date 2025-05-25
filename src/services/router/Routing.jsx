import React from "react";
import Home from "../../page/Home";
import Recipe from "../../page/Recipe";
import Categories from "../../page/Categories";
import { Route, Routes } from "react-router";
import AddProduct from "../../page/AddProduct";
import DeleteProduct from "../../page/DeleteProduct";
import UpdateProduct from "../../page/UpdateProduct";
import BookmarkedRecipes from "../../page/BookmarkedRecipes";
import CategoriesWiseRecipes from "../../components/All-Recipes/CategoriesWiseRecipes";
import FullRecipe from "../../page/FullRecipe";
import Users from "../../page/Users";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Recipe" element={<Recipe />}>
        <Route
          path="/Recipe/:CategoriesName"
          element={<CategoriesWiseRecipes />}
        />
      </Route>
      <Route
        path="/Recipe/:CategoriesName/:RecipeId"
        element={<FullRecipe />}
      />
      <Route path="/Categories" element={<Categories />} />
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/UpdateProduct" element={<UpdateProduct />} />
      <Route path="/DeleteProduct" element={<DeleteProduct />} />
      <Route path="/BookmarkedRecipes" element={<BookmarkedRecipes />} />
      <Route path="/Users" element={<Users />} />
    </Routes>
  );
};

export default Routing;
