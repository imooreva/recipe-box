var React = require('react');
var ReactDOM = require('react-dom');
var AddRecipe = require('AddRecipe');
var Recipe = require('Recipe')
var {recipes, RecipeList} = require('RecipeList');


class Main extends React.Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="columns medium-6 large-4 small-centered">
                    {recipes.map((name,index) => <Recipe key={index} recipeIndex={index} recipeTitle={name.title} ingredientsList={name.ingredients.toString()}/>)}
                    <AddRecipe/>
                </div>
            </div>
        )
    }
};

module.exports = Main;