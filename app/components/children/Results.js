var React = require("react");

var Results = React.createClass({

    render: function () {

        if(this.props.data === ""){
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="text-center panel-title">Search Results - No Data</h4>
                    </div>
                    <div className="panel-body text-center">
                        <p>Please use above search to locate articles.</p>
                    </div>
                </div>
            )
        }

        var newArray = this.props.data.slice(0,5);

        const articles = newArray.map((article) =>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="text-center panel-title">{article.headline.main}</h4>
                </div>
                <div className="panel-body text-center">
                    <p>{article.snippet}</p>
                    <p><a href={article.web_url}>{article.web_url}</a></p>
                    <button id={article._id}>Save Article</button>
                </div>
            </div>
        );

            return (
                <div className="articleList">
                    {articles}
                </div>
            )
        }

});

module.exports = Results;