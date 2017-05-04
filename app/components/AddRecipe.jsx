var React = require('react');
var ReactDOM = require('react-dom');
var {recipes, checkRecipes, updateRecipe, RecipeList} = require('RecipeList');


class AddRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            updated: false
        };
        this.add = this.add.bind(this);
        this.checkExisting = this.checkExisting.bind(this);
        this.close = this.close.bind(this);
    }
    
    add() {
        let recipe = $('#reveal-recipe-name').val();
        let ingredients = $('#reveal-ingredients').val();
        if (recipe == '' || ingredients == '') {
            return;
        }
        if (checkRecipes(recipe) >= 0) {
            updateRecipe(recipe,ingredients);
        } else {
            recipes.push({name: recipe, ingredients: ingredients.split(',')});
            RecipeList();
        }
        this.setState({
            updated: true
        });
        this.props.updateWatcher;
        this.close;
    }
    
    close() {
        $('#addRecipe').foundation('close');
    }
    
    checkExisting() {
        console.log(checkRecipes($('#reveal-recipe-name').val()))
        if (checkRecipes($('#reveal-recipe-name').val()) >= 0) {
            $('#recipe-exists-span').css('visibility', 'visible');
        } else {
            $('#recipe-exists-span').css('visibility', 'hidden');
        }
    }
    
    render() {
        return (
            <div>
                <div className="reveal" id="addRecipe" data-reveal>
                    <h3>Add Your Recipe</h3>
                    <form>
                        <input type="text" label="Recipe" placeholder="Recipe name" id="reveal-recipe-name" onChange={this.checkExisting}/>
                        <input type="text" label="Ingredients" placeholder="Enter ingredients separated by commas" id="reveal-ingredients"/>
                    </form>
                    <span id="recipe-exists-span"><p>Recipe already exists; submitting will overwrite original record's ingredients.</p></span>
                    <button type="submit" className="button hollow" onClick={this.add}>Add it!</button>
                    <button className="close-button" data-close aria-label="Close modal" type="button" onClick={this.close}>
                        <span aria-hidden="true">[x]</span>
                    </button>
                </div>
                <div>
                    <button className="button primary" data-open="addRecipe">Add Recipe</button>
                </div>
            </div>
        )
    }
}

module.exports = AddRecipe;