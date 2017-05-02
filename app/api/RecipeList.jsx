var recipes = (typeof localStorage["_imooreva_recipes"] != "undefined") ? JSON.parse(localStorage["_imooreva_recipes"]) : [
    {title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]}, 
    {title: "Stir Fry", ingredients: ["Beef", "Assorted Vegetables", "Soy Sauce", "Chili Paste", "Herbs and Spice"]}, 
    {title: "Pancakes", ingredients: ["Flour", "Sugar", "Baking Powder", "Eggs", "Buttermilk"]}
]

var RecipeList = () => {
    localStorage.setItem("_imooreva_recipes", JSON.stringify(recipes));
}

export {recipes, RecipeList};