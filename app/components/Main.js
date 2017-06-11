//React Dependency
var React = require("react");

//Sub Components
var SavedArticles = require("./children/SavedArticles");
var Form = require("./children/Form");
var Results = require("./children/Results");

//For Ajax Requests
var helpers = require("./utils/helpers");

//Content
var Main = React.createClass({

    //set initial state
    getInitialState: function() {
        return { searchTerm: "", results: "", history: [] };
    },

    componentDidMount: function () {
        //Get List of Saved Articles
    },

    componentDidUpdate: function () {
        //Perform Article Search
    },

    setTerm: function (term) {
        this.setState({ searchTerm: term });
    },

    //Render Page
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron nyHeader">
                        <h2 className="text-center">New York Times Article Search</h2>
                        <p className="text-center">Search for and save articles of interest</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 searchForm">
                        <Form setTerm={this.setTerm}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 results">
                        <Results data={this.state.results}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 savedArticles">
                        <SavedArticles articles={this.state.savedArticles}/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Main;