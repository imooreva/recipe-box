var React = require('react');
var ReactDOM = require('react-dom');
var {recipes, RecipeList} = require('RecipeList');


class Recipe extends React.Component {

    constructor(props) {
        super(props);
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.editRecipe = this.editRecipe.bind(this);
    }

    deleteRecipe(e) {
        let index = e.currentTarget.value;
        if (confirm(`Delete recipe for ${recipes[index].name}?`)) {
            recipes.splice(index, 1);
            RecipeList();
            this.props.updateWatcher();
        }        
    }
    
    editRecipe(e) {
        $('#modal-mode-span').html('Edit Existing Recipe');
        let index = e.currentTarget.value;
        $('#reveal-recipe-name').val(recipes[index].name);
        $('#reveal-ingredients').val(recipes[index].ingredients.toString().replace(/,\W*/g,', '));
    }
    
    render() {
        let i = this.props.recipeIndex;
        return (
            <li key={i} className="accordion-item" data-accordion-item>
                <a href="#" className="accordion-title">{this.props.recipeTitle}</a>
                <div className="accordion-content" data-tab-content>
                    <p>{this.props.ingredientsList}</p>
                    <button className="button hollow" value={i} data-open="addRecipe" onClick={this.editRecipe}>Edit</button>
                    <button className="button alert" value={i} onClick={this.deleteRecipe}>Delete</button>
                </div>
            </li>
        )
    }
};

module.exports = Recipe;
