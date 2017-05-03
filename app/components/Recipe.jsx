var React = require('react');
var ReactDOM = require('react-dom');

//$(document).foundation();
class Recipe extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li key={this.props.recipeIndex} className="accordion-item" data-accordion-item>
                <a href="#" className="accordion-title">{this.props.recipeTitle}</a>
                <div className="accordion-content" data-tab-content>
                    <p>{this.props.ingredientsList}</p>
                    <button className="button success">Edit</button>
                    <button className="button alert">Delete</button>
                </div>
            </li>
        )
    }
};


module.exports = Recipe;