//React Dependency
var React = require("react");

//Sub Components
var SavedArticles = require("./children/SavedArticles");
var Form = require("./children/Form");
var Results = require("./children/Results");

//For Ajax Requests
var helpers = require("./utils/helpers");

var i = 0;

//Content
var Main = React.createClass({

    //set initial state
    getInitialState: function() {
        return { topic: "", startYear: "", endYear: "", results: "", savedArticles: [] };
    },

    componentDidMount: function () {
        // //Get List of Saved Articles
        helpers.getSavedArticles().then(function (response) {
            if(response !== this.state.savedArticles){
                console.log("SA BING!");
                this.setState({ savedArticles: response.data})
            }
        }.bind(this));
    },

    componentDidUpdate: function () {
        //Perform Article Search
        console.log("SEARCH!");
        helpers.searchArticles(this.state.topic, this.state.startYear, this.state.endYear)
            .then(function (data) {

                if(this.state.results[0] !== data[0]){
                    console.log("updating state");
                    this.setState({ results: data });
                }
            }.bind(this));
    },

    setForm: function (form) {
        this.setState({topic: form.topic});
        this.setState({startYear: form.startYear});
        this.setState({endYear: form.endYear});
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
                        <Form setForm={this.setForm}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 results">
                        <Results data={this.state.results}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 savedArticles">
                        <SavedArticles savedArticles={this.state.savedArticles}/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Main;