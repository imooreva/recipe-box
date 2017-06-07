var recipes = (typeof localStorage["_imooreva_recipes"] != "undefined") ? JSON.parse(localStorage["_imooreva_recipes"]) : [
    {name: "Stir Fry", ingredients: ["Beef", "Assorted Vegetables", "Soy Sauce", "Chili Paste", "Herbs and Spice"]}, 
    {name: "Spinach Artichoke Dip", ingredients: ["Spinach", "Artichoke Hearts", 'Cream Cheese', 'Parmesan Cheese', "Sour Cream", "Mayonnaise", "Minced Garlic", 'Red Pepper Flakes']},
    {name: "Lemon Pound Cake", ingredients: ['Flour', 'Butter', 'Eggs', 'Sugar', 'Lemon Juice', 'Lemon Zest', 'Baking Powder', 'Vanilla Extract', 'Salt']}
]

var checkRecipes = n => {
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].name.toUpperCase() == n.toUpperCase()) {
            return i;
        }
    }
    return -1;
}

var setRecipeList = () => {
    localStorage.setItem("_imooreva_recipes", JSON.stringify(recipes));
}

var updateRecipe = (n, ingredients) => {
    if (checkRecipes(n) >= 0) {
        let arrIndex = checkRecipes(n.replace(/\s{2,}/g,'').trim());
        recipes[arrIndex].ingredients = ingredients.replace(/\s{2,}/g,'').replace(/\,{2,}/g,',').trim().split(',');
        //recipes.splice(arrIndex,1);
    }
    setRecipeList();
}

export {recipes, checkRecipes, setRecipeList, updateRecipe};