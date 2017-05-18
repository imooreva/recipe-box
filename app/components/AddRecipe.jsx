var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('Main');
var {recipes, checkRecipes, updateRecipe, RecipeList} = require('RecipeList');

class AddRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.checkExisting = this.checkExisting.bind(this);
        this.close = this.close.bind(this);
        this.resetModal = this.resetModal.bind(this);
    }
    
    add(e) {        
        let recipe = $('#reveal-recipe-name').val();
        let ingredients = $('#reveal-ingredients').val();
        if (recipe == '' || ingredients == '') {
            return this.close;
        }
        if (checkRecipes(recipe) >= 0) {
            updateRecipe(recipe,ingredients);
            this.props.updateWatcher();
            return this.close;
        } else if (checkRecipes(recipe) == -1) {
            //recipes.push({name: recipe, ingredients: ingredients.replace(/\s+/g,',').trim().split(',')});
            recipes.push({name: recipe, ingredients: ingredients.replace(/\s{2,}/g,'').trim().split(',')});
            RecipeList();
            this.props.updateWatcher();
            return this.close;
        }
    }
    
    close(e) {
        $('.reveal').foundation('toggle');
    }
    
    checkExisting() {
        if (checkRecipes($('#reveal-recipe-name').val()) >= 0) {
            $('#recipe-exists-span').css('visibility', 'visible');
        } else {
            $('#recipe-exists-span').css('visibility', 'hidden');
        }
    }
    
    resetModal() {
        $('#modal-mode-span').html('Add Your Recipe');
        $('#reveal-recipe-name').val('');
        $('#reveal-ingredients').val('');
        $('#recipe-exists-span').css('visibility', 'hidden');
    }
    
    render() {
        
        return (
            <div>
                <div className="reveal" id="addRecipe" data-reveal>
                    <h3><span id="modal-mode-span">Add New Recipe</span></h3>
                    <form>
                        <input type="text" label="Recipe" placeholder="Recipe name" id="reveal-recipe-name" onChange={this.checkExisting}/>
                        <input type="text" label="Ingredients" placeholder="Enter ingredients separated by commas" id="reveal-ingredients"/>
                    </form>
                    <span id="recipe-exists-span"><p>Recipe already exists; submitting will overwrite original record's ingredients.</p></span>
                    <button className="button hollow close-reveal" onClick={this.add}>Submit</button>
                    <button className="close-reveal-modal close-button" data-close aria-label="Close modal" type="button" onClick={this.close}>
                        <span aria-hidden="true">[x]</span>
                    </button>
                </div>
                <div>
                    <button className="button primary" data-open="addRecipe" onClick={this.resetModal}>Add Recipe</button>
                </div>
            </div>
        )
    }
}

module.exports = AddRecipe;