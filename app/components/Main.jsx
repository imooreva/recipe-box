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
                <ul className="accordion" data-accordion data-allow-all-closed="true">
                    {recipes.map((name,index) => <Recipe key={index} 
                                                     recipeIndex={index} 
                                                     recipeTitle={name.title} 
                                                     ingredientsList={name.ingredients.toString().replace(/,/g, ", ")}/>)}
                </ul>                    
                <AddRecipe/>
            </div>
        )
    }
};

module.exports = Main;