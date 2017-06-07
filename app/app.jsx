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
                <h1 id="app-heading">Recipe Box</h1>
                <Main/>
                <hr id="hr-1"/>
                <div>
                    <p id="gitlink">Source code on <a href="https://github.com/imooreva/recipe-box" target="_blank">Github</a>.</p>
                </div>
            </div>
        );
    }    
};

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);