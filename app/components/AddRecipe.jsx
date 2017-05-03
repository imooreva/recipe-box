var React = require('react');
var ReactDOM = require('react-dom');

//$(document).foundation();
class AddRecipe extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="reveal" id="addRecipe" data-reveal>
                    <h3>Add Your Recipe</h3>
                    <form>
                        <input type="text" label="Recipe" placeholder="Recipe name" id="reveal-recipe-name" />
                        <input type="text" label="Ingredients" placeholder="Enter ingredients separated by commas" id="reveal-ingredients"/>
                    </form>
                    <button className="close-button" data-close aria-label="Close modal" type="button">
                        <span aria-hidden="true">&times;</span>
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