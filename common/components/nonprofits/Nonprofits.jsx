var React = require('react'),
    {
      Grid,
      Row,
      Col,
    } = require('react-bootstrap');

var Welcome = React.createClass({

  handleClick: function () {
    this.props.stepPlusOne();
  },

  render: function () {
    return (
      <Grid>
        <div className="jumbotron text-center">
          <h1 className="hug-top"> We Help Nonprofits</h1>
          <h2>Well code software solutions for your nonprofit, for free!</h2>
          <button onClick={this.handleClick}>Next Question</button>
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

  incrementStep: function() {
    this.setState({step: this.state.step++})
  },

  render: function () {
    switch (this.state.step) {
      case 0:
        return <Welcome stepPlusOne={this.incrementStep}/>;
        break
      case 1:
        return <h1>Page 2</h1>
        break;
    }
  }
});

module.exports = Nonprofits;
