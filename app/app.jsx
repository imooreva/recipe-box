var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');

// Load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

class App extends React.Component {
    
    constructor(props) {
        super(props);
    }    
    render() {
        return (
            <div className="column small-centered medium-8 large-8">
                <h2 id="app-heading">Recipe Box</h2>
                <Main/>
            </div>
        );
    }    
};

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);