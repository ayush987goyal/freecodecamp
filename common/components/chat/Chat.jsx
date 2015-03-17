var React = require('react'),
  {
    Grid,
    Row,
    Col,
    } = require('react-bootstrap');

var Chat = React.createClass({
  render: function () {
    return(
      <Grid>
        <h3>
          <ol className="col-md-offset-2">
            <li>Create a GitHub Account&nbsp;
              <a href="http://github.com/join" target="_blank">here</a>
              .</li>
            <li>Download the chat room app on &nbsp;
              <a href="https://update.gitter.im/win/latest">Windows</a>
              ,&nbsp;
              <a href="https://update.gitter.im/osx/latest">Mac</a>
              ,&nbsp;
              <a href="http://appstore.com/gitter">iPhone</a>
              ,&nbsp; or &nbsp;
              <a href="https://play.google.com/store/apps/details?id=im.gitter.gitter&amp;hl=en_GB">Android</a>
            &nbsp;, or go &nbsp;
              <a href="http://chat.freecodecamp.com">here</a>
              .</li>
            <li>Keep the chat room open while you code so that you can meet friends and ask for help.</li>
          </ol>
        </h3>
        <Col
          xs={ 12 }>
          <div className="embed-responsive embed-responsive-16by9 gitter-imbed">
            <iframe src="https://www.gitter.im/freecodecamp/freecodecamp" frameborder="0" scrolling="no"></iframe>
          </div>
        </Col>
      </Grid>
    );
  }
});

module.exports = Resources;
