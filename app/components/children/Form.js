var React = require("react");

var Form = React.createClass({

    getInitialState: function () {
        return {
            topic: "",
            startYear: "",
            endYear: ""
        };
    },

    topicChange: function (event) {
        this.setState({topic: event.target.value});
        console.log("TOPIC:", this.state.topic);
    },

    startChange: function (event) {
        this.setState({startYear: event.target.value});
    },

    endChange: function (event) {
        this.setState({endYear: event.target.value});
    },

    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Search for an article</h3>
                </div>
                <div className="panel-body text-center">
                    <form onSubmit={this.submitForm}>
                        <div className="form-group">
                            <label for="topic">Topic</label>
                            <input
                                value={this.state.topic}
                                type="text"
                                className="form-control"
                                id="topic"
                                onChange={this.topicChange}
                                placeholder="Enter an article topic"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label for="startYear">Start Year</label>
                            <input
                                value={this.state.startYear}
                                type="text"
                                className="form-control"
                                id="topic"
                                onChange={this.startChange}
                                placeholder="Enter Start Year"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label for="endYear">Start Year</label>
                            <input
                                value={this.state.endYear}
                                type="text"
                                className="form-control"
                                id="topic"
                                onChange={this.endChange}
                                placeholder="Enter End Year"
                                required
                            />
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = Form;