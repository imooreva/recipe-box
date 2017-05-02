var React = require('react');
var ReactDOM = require('react-dom');

class Recipe extends React.Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div className="row">
                <p key={this.props.recipeIndex}>{this.props.recipeTitle} : {this.props.ingredientsList}</p>
            </div>
        )
    }
};

module.exports = Recipe;