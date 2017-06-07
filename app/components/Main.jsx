var React = require('react');
var ReactDOM = require('react-dom');
var AddRecipe = require('AddRecipe');
var Recipe = require('Recipe')
var {recipes, setRecipeList} = require('RecipeList');


class Main extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            updated: false,
            latestRecipes: recipes
        };
        this.monitorUpdates = this.monitorUpdates.bind(this);
        this.refreshAccordion = this.refreshAccordion.bind(this);
    }
    
    componentDidMount() {
        setRecipeList();
    }
    
    monitorUpdates() {
        this.setState({
            lastUpdate: Date(),
            updated: true,
            latestRecipes: recipes
        });
    }
    //updates list of recipes on screen
    refreshAccordion() {
        Foundation.reInit('accordion');
    }
    
    render() {
        return (
            <div>
                <ul className="accordion" value={recipes.length} data-accordion data-allow-all-closed="true" data-slide-speed="0">
                    {recipes.map((name,index) => <Recipe key={index} 
                                                     recipeIndex={index} 
                                                     recipeTitle={name.name} 
                                                     ingredientsList={name.ingredients.toString().replace(/,+\s*/g, ", ")} 
                                                     monitorUpdates={this.monitorUpdates}
                                                     refreshAccordion={this.refreshAccordion}/>)}
                </ul>                    
                <AddRecipe monitorUpdates={this.monitorUpdates} refreshAccordion={this.refreshAccordion}/>
            </div>
        )
    }
};

module.exports = Main;