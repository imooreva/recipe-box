var React = require('react');
var ReactDOM = require('react-dom');
var {recipes, RecipeList} = require('RecipeList');


class Recipe extends React.Component {

    constructor(props) {
        super(props);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    deleteRecipe(e) {
        let index = e.currentTarget.value;
        if (confirm(`Delete recipe for ${recipes[index].name}?`)) {
            recipes.splice(index, 1);
            RecipeList();
            this.props.updateWatcher();
        }        
    }
    //shouldComponentUpdate() {
    //    RecipeList();
    //    return true;
    //}
    render() {
        let i = this.props.recipeIndex
        console.log(i);
        return (
            <li key={i} className="accordion-item" data-accordion-item>
                <a href="#" className="accordion-title">{this.props.recipeTitle}</a>
                <div className="accordion-content" data-tab-content>
                    <p>{this.props.ingredientsList}</p>
                    <button className="button success">Edit</button>
                    <button className="button alert" value={i} onClick={this.deleteRecipe}>Delete</button>
                </div>
            </li>
        )
    }
};

module.exports = Recipe;
