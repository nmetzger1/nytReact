var React = require("react");

var Form = React.createClass({

    getInitialState: function () {
        return {
            topic: "",
            startYear: "",
            endYear: ""
        };
    },

    handleChange: function (event) {

        var target = event.target;
        var name = target.name;
        var value = target.value;

        console.log("event:", event);

        var partialState = {};
        partialState[name] = value;

        this.setState(partialState);

        console.log("STATE", partialState);
    },

    submitForm: function (event) {

        //prevent default
        event.preventDefault();

        //Send search terms to parent
        this.props.setForm({
            topic: this.state.topic,
            startYear: this.state.startYear,
            endYear: this.state.endYear
        });

        //Reset form fields
        this.setState({
            topic: "",
            startYear: "",
            endYear: ""
        });

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
                            <label>Topic</label>
                            <input
                                value={this.state.topic}
                                type="text"
                                className="form-control"
                                name="topic"
                                onChange={this.handleChange}
                                placeholder="Enter an article topic"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Start Year</label>
                            <input
                                value={this.state.startYear}
                                type="number"
                                className="form-control"
                                name="startYear"
                                onChange={this.handleChange}
                                placeholder="Enter Start Year"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>End Year</label>
                            <input
                                value={this.state.endYear}
                                type="number"
                                className="form-control"
                                name="endYear"
                                onChange={this.handleChange}
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