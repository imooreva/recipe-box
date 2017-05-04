var recipes = (typeof localStorage["_imooreva_recipes"] != "undefined") ? JSON.parse(localStorage["_imooreva_recipes"]) : [
    {name: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]}, 
    {name: "Stir Fry", ingredients: ["Beef", "Assorted Vegetables", "Soy Sauce", "Chili Paste", "Herbs and Spice"]}, 
    {name: "Pancakes", ingredients: ["Flour", "Sugar", "Baking Powder", "Eggs", "Buttermilk"]}
]

var checkRecipes = (n) => {
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].name.toUpperCase() == n.toUpperCase()) {
            return i;
        }
    }
    return -1;
}

var RecipeList = () => {
    localStorage.setItem("_imooreva_recipes", JSON.stringify(recipes));
}

var updateRecipe = (n, ingredients) => {
    if (checkRecipes(n) >= 0) {
        let arrIndex = checkRecipes(n);
        recipes[arrIndex].ingredients = ingredients.replace(/\s+/g, '').split(',');
    }
    RecipeList();
}

export {recipes, checkRecipes, RecipeList, updateRecipe};