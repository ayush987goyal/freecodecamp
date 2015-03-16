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
              <h3 className='nowrap'>Get Connected</h3>
              <img className='img-responsive landing-icon img-center' src= 'https://s3.amazonaws.com/freecodecamp/landingIcons_connect.svg.gz' alt='Get great references and connections to help you get a job'/>
              <p className='landing-p'>Join a community of busy, motivated professionals.</p>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <h3 className='nowrap'>Learn JavaScript</h3>
              <img className='img-responsive landing-icon img-center' src= 'https://s3.amazonaws.com/freecodecamp/landingIcons_learn.svg.gz' alt='Get great references and connections to help you get a job'/>
              <p className='landing-p'>Work together on Full Stack JavaScript coding challenges.</p>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <h3 className='nowrap'>Build your Portfolio</h3>
              <img className='img-responsive landing-icon img-center' src= 'https://s3.amazonaws.com/freecodecamp/landingIcons_portfolio.svg.gz' alt='Get great references and connections to help you get a job'/>
              <p className='landing-p'>Build apps that solve real problems for real people.</p>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <h3 className='nowrap'>Help Nonprofits</h3>
              <img className='img-responsive landing-icon img-center' src= 'https://s3.amazonaws.com/freecodecamp/landingIcons_nonprofits.svg.gz' alt='Get great references and connections to help you get a job'/>
              <p className='landing-p'>Give nonprofits a boost by empowering them with code.</p>
            </Col>
          </Row>
          <div className="big-break"></div>
          <Row>
            <a href="/are-you-with-a-registered-nonprofit" className="btn btn-cta signup-btn">Apply to Get Coding Help. It takes 2 minutes.</a>
          </Row>
          <div className="big-break"></div>
          <h2>Campers you'll hang out with:</h2>
          <Row>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 4 }>
              <img src="https://s3.amazonaws.com/freecodecamp/testimonial-jen.jpg" alt="@jenthebest's testimonial image" className="img-responsive testimonial-image img-center"/>
              <div className="testimonial-copy">Getting back on track with Free Code Camp and committing to a new career in 2015!</div>
              <h3>- @jenbestyoga</h3>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 4 }>
              <img src="https://s3.amazonaws.com/freecodecamp/testimonial-tate.jpg" alt="@TateThurston's testimonial image" className="img-responsive testimonial-image img-center"/>
              <div className="testimonial-copy">Just built my company's website with skills I've learned from Free Code Camp!</div>
              <h3>- @TateThurston</h3>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 4 }>
              <img src="https://s3.amazonaws.com/freecodecamp/testimonial-cynthia.jpg" alt="@cynthialanel's testimonial image" className="img-responsive testimonial-image img-center"/>
              <div className="testimonial-copy"> I'm currently working through Free Code Camp to improve my JavaScript. The community is very welcoming!</div>
              <h3>- @cynthialanel</h3>
            </Col>
          </Row>
          <div className="big-break"></div>
          <h2>Things we can help you build:</h2>
          <div className="text-center negative-35">
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <div className="landing-skill-icon ion-android-globe"></div>
              <h2 className="black-text">Websites</h2>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <div className="landing-skill-icon ion-card"></div>
              <h2 className="black-text">Donation Systems</h2>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <div className="landing-skill-icon ion-android-calendar"></div>
              <h2 className="black-text">Volunteer Systems</h2>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <div className="landing-skill-icon ion-ios-box"></div>
              <h2 className="black-text">Inventory Systems</h2>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <div className="landing-skill-icon ion-university"></div>
              <h2 className="black-text">E-learning Platforms</h2>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <div className="landing-skill-icon ion-ios-people"></div>
              <h2 className="black-text">Community Tools</h2>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <div className="landing-skill-icon ion-ios-list"></div>
              <h2 className="black-text">Web Forms</h2>
            </Col>
            <Col
              xs={ 12 }
              sm={ 12 }
              md={ 3 }>
              <div className="landing-skill-icon ion-settings"></div>
              <h2 className="black-text">...and Other Tools</h2><br/><br/>
            </Col>
            <div className="big-break"></div>
            <h2>Why you should join our community right now:</h2>
            <h3 className="col-xs-offset-0 col-sm-offset-1">
              <ul className="text-left">
                <li className="ion-code">&nbsp; We're thousands of professionals, all learning to code together</li>
                <li className="ion-code">&nbsp; We're building projects for dozens of nonprofits</li>
                <li className="ion-code">&nbsp; Our community is 100% free and open source</li>
                <li className="ion-code">&nbsp; You'll learn Full Stack JavaScript and become a Software Engineer</li>
                <li className="ion-code">&nbsp; You'll work through our focused, interactive courses and tutorials</li>
                <li className="ion-code">&nbsp; You'll learn to code at your own pace, in your browser or on your phone</li>
                <li className="ion-code">&nbsp; You'll become qualified for thousands of jobs currently going unfilled</li>
                <li className="ion-code">&nbsp; You can get help in real time from our community chat rooms and forum</li>
                <li className="ion-code">&nbsp; We all share one common goal: to boost our careers with code</li>
              </ul>
            </h3>
            <div className="big-break"></div><a href="/are-you-with-a-registered-nonprofit" className="btn btn-cta signup-btn">Apply to Get Coding Help. It takes 2 minutes.</a>
            <script>challengeName = 'Home'</script>
          </div>
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
