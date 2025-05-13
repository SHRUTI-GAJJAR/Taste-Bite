const getCartInitialData = (items = [], recipeSliderData = []) => {
  return recipeSliderData.filter((recipe) => items.includes(recipe._id));
};

export default getCartInitialData;
