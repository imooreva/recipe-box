var React = require('react');
var ReactDOM = require('react-dom');
var AddRecipe = require('AddRecipe');
var Recipe = require('Recipe')
var {recipes, RecipeList} = require('RecipeList');


class Main extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            updated: false
        };
        this.monitorUpdates = this.monitorUpdates.bind(this);
    }
    
    componentDidMount() {
        console.log('component mounted...');
        setTimeout( ()=> { RecipeList() }, 50)
    }
    
    monitorUpdates() {
        console.log('updating...');
        this.setState({
            updated: true
        });
    }
    
    render() {
        return (
            <div>
                <ul className="accordion" data-accordion data-allow-all-closed="true">
                    {recipes.map((name,index) => <Recipe key={index} 
                                                     recipeIndex={index} 
                                                     recipeTitle={name.name} 
                                                     ingredientsList={name.ingredients.toString().replace(/,/g, ", ")}/>)}
                </ul>                    
                <AddRecipe updateWatcher={this.monitorUpdates}/>
            </div>
        )
    }
};

module.exports = Main;