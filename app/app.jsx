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
            <Main/>
        );
    }    
};

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);