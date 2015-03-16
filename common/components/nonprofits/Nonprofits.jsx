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
        <div className='jumbotron text-center'>
          <Row>
            <h1 className='hug-top'> We Help Nonprofits</h1>
            <h2>Well code software solutions for your nonprofit, for free!</h2>
          </Row>
          <Row>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <h3 class='nowrap'>Get Connected</h3>
              <img class='img-responsive landing-icon img-center' src= 'https://s3.amazonaws.com/freecodecamp/landingIcons_connect.svg.gz' alt='Get great references and connections to help you get a job'/>
              <p class='landing-p'>Join a community of busy, motivated professionals.</p>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <h3 class='nowrap'>Learn JavaScript</h3>
              <img class='img-responsive landing-icon img-center' src= 'https://s3.amazonaws.com/freecodecamp/landingIcons_learn.svg.gz' alt='Get great references and connections to help you get a job'/>
              <p class='landing-p'>Work together on Full Stack JavaScript coding challenges.</p>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <h3 class='nowrap'>Build your Portfolio</h3>
              <img class='img-responsive landing-icon img-center' src= 'https://s3.amazonaws.com/freecodecamp/landingIcons_portfolio.svg.gz' alt='Get great references and connections to help you get a job'/>
              <p class='landing-p'>Build apps that solve real problems for real people.</p>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <h3 class='nowrap'>Help Nonprofits</h3>
              <img class='img-responsive landing-icon img-center' src= 'https://s3.amazonaws.com/freecodecamp/landingIcons_nonprofits.svg.gz' alt='Get great references and connections to help you get a job'/>
              <p class='landing-p'>Give nonprofits a boost by empowering them with code.</p>
            </Col>
          </Row>
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
