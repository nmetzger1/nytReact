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
        this.displaySavedArticles();
    },

    componentDidUpdate: function (prevProps, prevState) {


        //Perform Article Search
        //Note: For some reason comparing results for NYT causes an infinite loop.  the only way to stop it was to compare against the previous query...
        if(this.state.topic != "" && (this.state.topic !== prevState.topic && this.state.startYear !== prevState.startYear && this.state.endYear !== prevState.endYear)){
            console.log("SEARCH!");
            helpers.searchArticles(this.state.topic, this.state.startYear, this.state.endYear)
                .then(function (data) {

                    console.log(data);
                    console.log("!", this.state.results);

                    if(data != prevState.results){
                        console.log("updating state");
                        this.setState({ results: data });
                    }
                }.bind(this));
        }

        //Update list of saved articles
        this.displaySavedArticles();
    },

    setForm: function (form) {
        this.setState({
            topic: form.topic,
            startYear: form.startYear,
            endYear: form.endYear
        });
    },

    displaySavedArticles: function () {
        helpers.getSavedArticles().then(function (response) {
            if(response != this.state.savedArticles){
                this.setState({ savedArticles: response.data})
            }
        }.bind(this));
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