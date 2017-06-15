var React = require("react");

var SavedArticles = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="text-center panel-title">Saved Articles</h4>
                </div>
                <div className="panel-body text-center">
                    {
                        this.props.savedArticles.map(function (article, i) {
                            return (
                                <p key={i}>
                                    <a href={article.url}>{article.title}</a>
                                </p>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
});

module.exports = SavedArticles;