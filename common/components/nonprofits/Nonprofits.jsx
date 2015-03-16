var React = require('react'),
    {
      Grid,
      Row,
      Col,
    } = require('react-bootstrap');

var Welcome = React.createClass({
  render: function () {
    return (
      <Grid>
        <div className="jumbotron text-center">
          <h1 className="hug-top"> We Help Nonprofits</h1>
          <h2>Well code software solutions for your nonprofit, for free!</h2>
          <p>Step: {this.props.step}</p>
        </div>
      </Grid>
    );
  }
});

var Nonprofits = React.createClass({
  getInitialState: function () {
    return {
      step: 0
    }
  },

  render: function () {
    switch (this.state.step) {
      case 0:
        return <Welcome step={this.state.step} />;
        break;
      case 1:
        return <h1>Page 2</h1>
        break;
    }
  }
});

module.exports = Nonprofits;
