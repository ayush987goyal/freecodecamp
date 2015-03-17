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

var Chromebook = React.createClass({
  render: function () {
    return(
      <Grid>
        <h3>
          <ol className="col-md-offset-2">
            <li>Create a GitHub Account&nbsp;<a href="http://github.com/join" target="_blank">here</a>.</li>
            <li>Download the chat room app on &nbsp;<a href="https://update.gitter.im/win/latest">Windows</a>,&nbsp;<a href="https://update.gitter.im/osx/latest">Mac</a>,&nbsp;<a href="http://appstore.com/gitter">iPhone</a>,&nbsp; or &nbsp;<a href="https://play.google.com/store/apps/details?id=im.gitter.gitter&amp;hl=en_GB">Android</a>&nbsp;, or go &nbsp;<a href="http://chat.freecodecamp.com">here</a>.</li>
            <li>Keep the chat room open while you code so that you can meet friends and ask for help.</li>
          </ol>
        </h3>
        <Col
          xs={ 12 }>
          <div className="embed-responsive embed-responsive-16by9 gitter-imbed"></div>
        </Col>
      </Grid>
    );
  }
});

var ControlShortcuts = React.createClass({
  render: function () {
    return(
      <Grid>
        <div className="jumbotron text-center">
          <h1 className="hug-top">Global Control Shortcuts for Mac</h1>
          <h2>These Global Control Shortcuts for Mac will save you hours by speeding up your typing</h2><br/>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe src="//player.vimeo.com/video/107073108" className="embed-responsive-item"></iframe>
          </div>
          <div className="text-left">
            <h3>These global shortcuts work everywhere on a Mac:
              <ul>
                <li>Control + F = Forward</li>
                <li>Control + B = Backward</li>
                <li>Control + N = Next Line</li>
                <li>Control + P = Previous Line</li>
                <li>Control + H = Backspace</li>
                <li>Control + D = Delete</li>
                <li>Control + A = Beginning of Line</li>
                <li>Control + E = End of Line</li>
                <li>Control + K = Kill line</li>
              </ul>
            </h3>
          </div><a href="/login" className="btn btn-cta signup-btn btn-primary">Start learning to code (it's free)</a><br/>
        </div>
      </Grid>
    );
  }
});

var DeployAWebsite = React.createClass({
  render: function () {
    return(
      <Grid>
        <div className="jumbotron text-center">
          <h1 className="hug-top">Deploy a Dynamic Website in 7 Minutes</h1>
          <h2>Here's a fast and easy way to deploy a dynamic website to the internet</h2><br/>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe src="//player.vimeo.com/video/115194017" className="embed-responsive-item"></iframe>
          </div>
          <div className="text-left">
            <h3>Use these links:
              <ul>
                <li><a href="http://www.atom.io" target="_blank">http://www.atom.io</a>&nbsp; - free text editor</li>
                <li><a href="http://www.startbootstrap.com" target="_blank">http://www.startbootstrap.com</a>&nbsp; - free responsive (Bootstrap) templates</li>
                <li><a href="http://www.powr.io" target="_blank">http://www.powr.io</a>&nbsp; - great plugins</li>
                <li><a href="http://www.bitballoon.com" target="_blank">http://www.bitballoon.com</a>&nbsp; - drag-and-drop deployment</li>
              </ul>
            </h3>
          </div>
          <a href="/login" className="btn btn-cta signup-btn btn-primary">Start learning to code (it's free)</a><br/>
        </div>
      </Grid>
    );
  }
});

var GmailShortcuts = React.createClass({
  render: function () {
    return(
      <Grid>
        <div className="jumbotron text-center">
          <h1 className="hug-top">Gmail Shortcuts</h1>
          <h2>These Gmail Shortcuts will save you hours and help you get to Zero Inbox</h2><br/>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe src="//player.vimeo.com/video/115194016" className="embed-responsive-item"></iframe>
          </div>
          <div className="text-left">
            <h3>The shortcuts:
              <ul>
                <li>j - move down</li>
                <li>k - move up</li>
                <li>o - open</li>
                <li>r - reply</li>
                <li>a - reply all</li>
                <li>f - forward</li>
                <li>c - compose</li>
                <li>x - select</li>
                <li>e - archive</li>
                <li>! - mark spam</li>
                <li>z - undo</li>
              </ul>
            </h3>
          </div>
            <a href="/login" className="btn btn-cta signup-btn btn-primary">Start learning to code (it's free)</a><br/>
        </div>
      </Grid>
    );
  }
});

var InstallScreenhero = React.createClass({
  render: function () {
    return(
      <Grid>
        <div className="jumbotron text-center">
          <h1 className="hug-top">Install ScreenHero</h1>
          <h2><a href="http://links.screenhero.com/e/c/eyJlbWFpbF9pZCI6Ik1qQTNNem9XQkNJQ1pBQUNjd0FYQVZrVEdnRkxNamtfX0JWZEdGVEpSZkVCWlRwbFpXRTBNamM0WVMxaE56SmlMVEV4WlRRdE9HUXpZUzFpWXpVNE1HRTJNalkxTldNNk1UUTJNVEEyQUE9PSIsInBvc2l0aW9uIjowLCJocmVmIjoiaHR0cDovL2RsLnNjcmVlbmhlcm8uY29tL3NtYXJ0ZG93bmxvYWQvZklYQU1UUUJBTEtQQkhQTC9TY3JlZW5oZXJvLnppcD9zb3VyY2U9d2ViIn0=">Download for Mac</a></h2>
          <h2><a href="http://links.screenhero.com/e/c/eyJlbWFpbF9pZCI6Ik1qQTNNem9XQkNJQ1pBQUNjd0FYQVZrVEdnRkxNamtfX0JWZEdGVEpSZkVCWlRwbFpXRTBNamM0WVMxaE56SmlMVEV4WlRRdE9HUXpZUzFpWXpVNE1HRTJNalkxTldNNk1UUTJNVEEyQUE9PSIsInBvc2l0aW9uIjoxLCJocmVmIjoiaHR0cDovL2RsLnNjcmVlbmhlcm8uY29tL3NtYXJ0ZG93bmxvYWQvZklYQU1UUUJBTEtQQkhQTC9TY3JlZW5oZXJvLXNldHVwLmV4ZSJ9"> Download for Windows</a></h2>
          <p>You can learn more about using Screen Hero by taking &nbsp;<a href="http://www.freecodecamp.com/challenges/34">Challenge 34.</a></p>
          <p>Screen Hero was recently acquired by a collaboration tool called Slack. It's still available and free, but will go away in the indefinite future. Discuss alternatives on our &nbsp;<a href="http://forum.freecodecamp.com/t/replacing-screen-hero/992">Screen Hero replacement thread</a>.</p>
        </div>
      </Grid>
    );
  }
});

var JavaScriptInYourInbox = React.createClass({
  render: function () {
    return(
      <Grid>
        <div className="jumbotron text-center">
          <h1 className="hug-top">Win a Chromebook</h1>
          <h2>Sign up for Inbox.js - JavaScript challenges in your inbox - and enter to win a Chromebook!</h2><img src="https://s3.amazonaws.com/freecodecamp/chromebook.jpg" alt="HP Chromebook 11" className="image-responsive"/>
          <script src="//widget-prime.rafflecopter.com/launch.js"></script><a id="rcwidget_a7khonhd" href="http://www.rafflecopter.com/rafl/display/d70901b10/" rel="nofollow" data-raflid="d70901b10" data-theme="classic" data-template="" className="rcptr">a Rafflecopter giveaway</a>
          <div className="animated zoomInDown delay-10">
          <p>Finished signing up for the giveaway?</p><a href="/login" className="btn btn-cta signup-btn btn-primary">Start learning to code (it's free)</a>
         </div><br/>
        </div>
      </Grid>
    );
  }
});

var JqueryExercises = React.createClass({
  render: function () {
    return(
      <Grid>
        <script>
          $(document).ready(function() {
            var directions = {
            0: "To get started, open your Chrome DevTools. The #next-exercise button is disabled below. Try using jQuery's .attr() method to turn the disabled attribute to false.",
            1: "Move the .target element from #location1 to #location2.",
            2: "Change the background color of .target to red.",
            3: "Change the background color of the even-numbered targets to red.",
            4: "Change the background color of target4 to red.",
            5: "Clone target2 in #location1 so that it also exists in #location2.",
            6: "Remove the target3 element from #location1.",
            7: "Check the following checkboxes using jQuery.",
            8: "Make the text input field read-only.",
            9: "Select target2 option in the select box.",
            10: "Add the following css classes to .target: 'animated' and 'hinge'.",
            11: "Use jQuery to read the data of .target.",
            12: "Use 'length' to count the number of child elements in #location1, then display that value in #location2.",
            13: "There's an element hidden in #location1. Show it using jQuery, and then click on it."
          };
          var hint = {
            0: "$('#next-exercise').attr('disabled', false);",
            1: "$('.target').appendTo('#location2');",
            2: "$('.target').css('background', 'red');",
            3: "$('.target:even').css({'background': 'red'});",
            4: "$('.target:nth-child(4)').css({'background': 'red'});",
            5: "$('.target:nth-child(2)').clone().appendTo($('#location2'));",
            6: "$('.target:nth-child(3)').remove();",
            7: "$('#location1 input').attr('checked', 'true')",
            8: "$('#location1 input').attr('readonly', 'true')",
            9: "$('#location1 select').val('target2');",
            10: "$('.target').addClass('animated hinge');",
            11: "$('.target').data();",
            12: "$('#location2').text($('#location1').children().length)",
            13: "$('#finished-button').show().click();"
          };
          var elements = {
            0: "",
            1: "<div className='btn btn-default target'>.target</div>",
            2: "<div className='btn btn-default target'>.target</div>",
            3: "<div className='btn btn-default target'>target0</div><div className='btn btn-default target'>target1</div><div className='btn btn-default target'>target2</div><div className='btn btn-default target'>target3</div><div className='btn btn-default target'>target4</div>",
            4: "<div className='btn btn-default target'>target1</div><div className='btn btn-default target'>target2</div><div className='btn btn-default target'>target3</div><div className='btn btn-default target'>target4</div><div className='btn btn-default target'>target5</div>",
            5: "<div className='btn btn-default target'>target1</div><div className='btn btn-default target'>target2</div><div className='btn btn-default target'>target3</div><div className='btn btn-default target'>target4</div><div className='btn btn-default target'>target5</div>",
            6: "<div className='btn btn-default target'>target1</div><div className='btn btn-default target'>target2</div><div className='btn btn-default target'>target3</div><div className='btn btn-default target'>target4</div><div className='btn btn-default target'>target5</div>",
            7: "<input type='checkbox'>checkbox1</input><br><input type='checkbox'>checkbox2</input>",
            8: "<input type='text' value='target'>",
            9: "<select><option value='target0'>target0</option><option value='target1'>target1</option><option value='target2'>target2</option><option value='target3'>target3</option></select>",
            10: "<div className='btn btn-default target'>.target</div>",
            11: "<div className='btn btn-default target' data-lookAtMe='This is some super secret data hidden in the DOM!'>.target</div>",
            12: "<div className='btn btn-default target'>target1</div><div className='btn btn-default target'>target2</div><div className='btn btn-default target'>target3</div><div className='btn btn-default target'>target4</div><div className='btn btn-default target'>target5</div>",
            13: "<div className='btn btn-default target' id='finished-button'>Finish!</div>"
          };
          function refreshEverything() {
            $('#directions').text("Exercise " + currentExercise + ": " + directions[currentExercise]);
            $('#location1').html(elements[currentExercise]);
            $('#hint').text(hint[currentExercise]);
            handleExerciseTransition();
            }
            $('#exercise-directory').on('click', 'li', function (event) {
            currentExercise = $(this).index();
            event.preventDefault();
            refreshEverything(event);
            });
            $('#next-exercise').on('click', function (event) {
            ++currentExercise;
            event.preventDefault();
            refreshEverything(event);
            });
            $('#solution-button').on('click', function () {
            $('#hint-modal').modal({backdrop: "static"});
            });
            $('#location1').on('click', '#finished-button', function () {
            $('#finished-modal').modal({backdrop: "static"});
            });
            function handleExerciseTransition() {
            if (currentExercise === 0) {
            $('#next-exercise').attr('disabled', true);
            } else {
            $('#next-exercise').attr('disabled', false);
            }
            if (currentExercise === 2 || currentExercise === 6) {
            $('#location2 .target').remove();
            }
            if (currentExercise === 13) {
            $('#location2').text('');
            $('#finished-button').hide();
            $('#next-exercise').attr('disabled', true);
            }
          }
          var currentExercise = 0;
          refreshEverything(currentExercise);
          });
        </script>
        <div className="container">
          <Row>
            <Col
              xs={ 12 }
              sm={ 8 }>
              <div className="jumbotron">
                <Row>
                  <Col
                    xs={ 12 }>
                    <div className="text-center">
                      <img src="https://s3.amazonaws.com/freecodecamp/logo4.0LG.png" alt="learn to code free at freecodecamp.com" className="img-responsive"/>
                      <h1>jQuery Exercises</h1>
                    </div>
                  </Col>
                  <br/>
                  <div id="directions" className="text-primary"></div><br/>
                </Row>
                <Row>
                  <Col
                  xs={ 6 }>
                    <div id='#location1'></div>
                  </Col>
                  <Col
                  xs={ 6 }>
                    <div id='#location2'></div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
            xs={ 6 }>
              <div id="location1" className="well jquery-exercises-well"></div>
            </Col>
            <Col
            xs={ 6 }>
              <div id="location2" className="well jquery-exercises-well"></div>
            </Col>
          </Row>
          <div id="next-exercise" className="btn btn-primary btn-lg btn-block">#next-exercise</div><br/>
          <button id="solution-button" className="btn btn-block btn-lg btn-info">#solution-button</button><br/>
          <div className="text-center">Created for<a href="http://www.FreeCodeCamp.com">Free Code Camp</a><br/>by<a href="https://twitter.com/ossia">Quincy Larson</a>,<a href="https://www.twitter.com/terakilobyte">Nathan Leniz</a>,<a href="https://twitter.com/iheartkode"> Mark Howard</a>and<a href="https://twitter.com/ryanmalm">Ryan Malm</a>. Please<a href="http://codepen.io/ossia/pen/raVEgN">fork this.</a></div>
          <Col
          xs={ 12 }
          sm={ 4 }>
            <div className="panel panel-primary">
              <div className="panel panel-heading">List of Exercises</div>
              <div className="panel-body">
                <ol start="0">
                  <li><a href="#">Re-enable an element</a></li>
                  <li><a href="#">Change an element&apos;s parent</a></li>
                  <li><a href="#">Change an element&apos;s CSS</a></li>
                  <li><a href="#">Use jQuery filters to modify even elements</a></li>
                  <li><a href="#">Change nth child</a></li>
                  <li><a href="#">Clone an element</a></li>
                  <li><a href="#">Remove an element</a></li>
                  <li><a href="#">Check checkboxes</a></li>
                  <li><a href="#">Make text read-only</a></li>
                  <li><a href="#">Select an option in a select box</a></li>
                  <li><a href="#">Add a CSS class to an element</a></li>
                  <li><a href="#">Lookup an element&apos;s data attribute</a></li>
                  <li><a href="#">Count child elements</a></li>
                  <li><a href="#">Show an element and click on it</a></li>
                </ol>
              </div>
            </div>
          </Col>
          <div id="hint-modal" tabindex="-1" role="dialog" aria-hidden="true" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" data-dismiss="modal" className="close"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                  <h4 id="myModalLabel" className="modal-title">Your hint</h4>
                </div>
                <div className="modal-body">
                <div id="hint"></div>
              </div>
            </div>
          </div>
          <div id="finished-modal" tabindex="-1" role="dialog" aria-hidden="true" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" data-dismiss="modal" className="close"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                  <h4 id="myModalLabel" className="modal-title">Congratulations! You&apos;ve finished our jQuery exercises!<a href="http://www.freecodecamp.com/">Go back to Free Code Camp</a>and mark this challenge complete.</h4>
                </div>
              <div className="modal-body">
                <div id="hint"></div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    );
  }
});

var LearnToCode = React.createClass({
  render: function () {
    return(
      <Grid>
        <img src="https://s3.amazonaws.com/freecodecamp/wide-social-banner.png" className="img-responsive img-center"/><br/>
        <div className="text-center">
          <a href="/signin" className="btn btn-cta signup-btn next-challenge-button">
            Start learning to code (it's free)
          </a>
        </div>
        <br/>
        <Row>
          <Col
          xs={ 12 }
          sm={ 12 }
          md={ 4 }>
          <div className="panel panel-info">
            <div className="panel-heading landing-panel-heading text-center">Get Connected</div>
              <div className="panel-body text-center">
                <img src="https://s3.amazonaws.com/freecodecamp/about-chatroom.jpg" alt="A screen shot from Free Code Camp's main chat room" className="img-responsive img-center"/>
                <h3> campers are doing challenges.</h3>
                <h3> campers are coding for nonprofits.</h3>
              </div>
            </div>
          </Col>
          <Col
          xs={ 12 }
          sm={ 12 }
          md={ 4 }>
            <div className="panel panel-info">
              <div className="panel-heading landing-panel-heading text-center">Learn JavaScript</div>
              <div className="panel-body text-center">
                <img src="https://s3.amazonaws.com/freecodecamp/about-github.jpg" alt="A screen shot of a GitHub commit graph showing a streak of 33 consecutive days of contributions" className="img-responsive img-center"/>
                <div id='#github'>
                  <script>
                    (function() {
                    $.ajax({
                      url: '/resources/github',
                      type: 'GET'
                    }).done(
                      function(data) {
                        var github = document.createElement('div');
                        $(github).html('<h3>' + data.issues + ' GitHub issues are open. <a href="https://github.com/freecodecamp/freecodecamp/issues">(create one)</a></h3><h3>' + data.pulls + ' pull requests are open. <a href="https://github.com/freecodecamp/freecodecamp/pulls">(create one)</a></div></div>').prependTo($('#github'))
                      }
                    )
                    })();
                  </script>
                </div>
              </div>
            </div>
          </Col>
          <Col
          xs={ 12 }
          sm={ 12 }
          md={ 4 }>
            <div className="panel panel-info">
              <div className="panel-heading landing-panel-heading text-center">Help Nonprofits</div>
              <div className="panel-body text-center">
                <img src="https://s3.amazonaws.com/freecodecamp/about-trello.jpg" alt="a screen shot of Free Code Camp's nonprofit project Trello board showing several active projects" className="img-responsive img-center"/>
                <h3>We launched  days ago.</h3>
                  <div id='#trello'>
                    <script>
                      (function() {
                        $.ajax({
                          url: '/resources/trello',
                          type: 'GET'
                        }).done(
                          function(data) {
                            var trello = document.createElement('div');
                            $(trello).html('<h3> We help ' + data.trello + ' nonprofits. <a href="https://trello.com/b/BA3xVpz9/nonprofit-projects">(view them)</a></h3>').prependTo($('#trello'))
                          }
                        )
                      })();
                    </script>
                  </div>
                </h3>
              </div>
            </div>
          </Col>
          <br/>
          <script>var challengeName = 'Learn to code'</script>
        </Row>
        <Row>
          <Col
          xs={ 12 }
          sm={ 12 }
          md={ 6 }>
            <div className="panel panel-info">
              <div className="panel-heading landing-panel-heading text-center">Announcements</div>
              <div className="panel-body">
                <div id='blog'>
                  <script>
                    (function() {
                    $.ajax({
                      url: '/resources/blogger',
                      type: 'GET'
                    }).done(
                      function(data) {
                        var props = Object.keys(data);
                        for (var i = 0; i < props.length; i+=2) {
                          var blogger = document.createElement('div');
                          $(blogger).html('<h2><a href=' + data[props[i+1]] + '>' + data[props[i]] + '</a></h2></div>').appendTo($('#blog'))
                        }
                      }
                    )
                    })();
                  </script>
                </div>
                <div className="landing-panel-body text-center"><a data-dnt="true" href="https://twitter.com/FreeCodeCamp" data-widget-id="560847186548621312" className="twitter-timeline">Tweets by @FreeCodeCamp</a>
                  <script>
                    !function (d, s, id) {
                      var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
                      if (!d.getElementById(id)) {
                        js = d.createElement(s);
                        js.id = id;
                        js.src = p + "://platform.twitter.com/widgets.js";
                        fjs.parentNode.insertBefore(js, fjs);
                      }
                    }(document, "script", "twitter-wjs");
                  </script>
                </div>
                <h3>
                  <Col
                    xs={ 12 }>
                    Follow us on Twitter here:
                  </Col>
                  <Col
                    xs={ 12 }>
                    <div className="github-and-twitter-button-text">
                      <a className="twitter-follow-button"
                        href="https://twitter.com/freecodecamp"
                        data-show-count="true"
                        data-lang="en">
                          Follow @FreeCodeCamp
                      </a>
                      <script>window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));</script>
                    </div>
                  </Col>
                  <Col
                  xs={ 12 }>
                    <div className="github-and-twitter-button-text">Star us on GitHub here:</div>
                  </Col>
                  <Col
                    xs={ 12 }>
                    <div className="github-and-twitter-button-text">
                      <iframe src="http://ghbtns.com/github-btn.html?user=freecodecamp&repo=freecodecamp&type=watch&count=true&size=large" height="30" width="170" frameborder="0" scrolling="0" style="width:170px; height: 30px;" allowTransparency="true">
                      </iframe>
                    </div>
                  </Col>
                </h3>
              </div>
            </div>
          </div>
        </Row>
      </Grid>
    );
  }
});

var LivePairProgramming = React.createClass({
  render: function () {
    return(
      <Grid>
        <div className="text-center">
          <h1>Live Pair Programming</h1>
          <h2 id="next-session"></h2>
          <h2>Watch the live stream below or on our &nbsp;<a href="http://twitch.tv/freecodecamp" target="_blank">Twitch.tv channel</a>.</h2>
          <Row>
            <Col
            xs={ 12 }
            md={ 8 }>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe src="http://www.twitch.tv/freecodecamp/embed" frameborder="0" scrolling="no"></iframe>
              </div>
            </Col>
            <Col
            xs={ 12 }
            md={ 8 }>
              <div className="visible-sm visible-xs">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe src="http://www.twitch.tv/freecodecamp/chat?popout=" frameborder="0" scrolling="no"></iframe>
                </div>
              </div>
            <div className="visible-md visible-lg">
              <Col
                md={ 4 }>
                <div className="embed-responsive embed-responsive-twitch-chat">
                  <iframe src="http://www.twitch.tv/freecodecamp/chat?popout=" frameborder="0" scrolling="no"></iframe>
                </div>
              </Col>
            </div>
          </Row>
        </div>
        <h1>Previous Live Pair Programming Sessions</h1>
        <Col
          xs={ 12 }>
          <div className="embed-responsive embed-responsive-16by9 big-break">
            <iframe src="//www.youtube.com/embed/_BErpDdmBOw" className="embed-responsive-item"></iframe>
          </div>
          <h3 className="wrappable">link: &nbsp;<a href="http://www.youtube.com/watch/_BErpDdmBOw">http://www.youtube.com/watch/_BErpDdmBOw</a></h3>
          <div className="embed-responsive embed-responsive-16by9 big-break">
            <iframe src="//www.youtube.com/embed/Fn9HMn79KH0" className="embed-responsive-item"></iframe>
          </div>
          <h3 className="wrappable">link: &nbsp;<a href="http://www.youtube.com/watch/Fn9HMn79KH0">http://www.youtube.com/watch/Fn9HMn79KH0</a></h3>
          <div className="embed-responsive embed-responsive-16by9 big-break">
            <iframe src="//www.youtube.com/embed/S7iRBZJwOAs" className="embed-responsive-item"></iframe>
          </div>
          <h3 className="wrappable">link: &nbsp;<a href="http://www.youtube.com/watch/S7iRBZJwOAs">http://www.youtube.com/watch/S7iRBZJwOAs</a></h3>
          <div className="embed-responsive embed-responsive-16by9 big-break">
            <iframe src="//www.youtube.com/embed/BHNRg39ZblE" className="embed-responsive-item"></iframe>
          </div>
          <h3 className="wrappable">link: &nbsp;<a href="http://www.youtube.com/watch/BHNRg39ZblE">http://www.youtube.com/watch/BHNRg39ZblE</a></h3>
          <div className="embed-responsive embed-responsive-16by9 big-break">
            <iframe src="//www.youtube.com/embed/YDfkHlDmehA" className="embed-responsive-item"></iframe>
          </div>
          <h3 className="wrappable">link: &nbsp;<a href="http://www.youtube.com/watch/YDfkHlDmehA">http://www.youtube.com/watch/YDfkHlDmehA</a></h3>
          <h3>Got 3 minutes? Learn to code with us!</h3><a href="/login" className="btn btn-cta signup-btn btn-primary">Start learning to code (it's free)</a><br/><br/><br/><br/><br/>
        </Col>
        <script src="/js/lib/moment/moment.js"></script>
        <script src="/js/lib/moment/nextTuesday.js"></script>
        <script>$('#next-session').text(nextSession());</script>
        </div>
      </Grid>
    );
  }
});

var NonprofitProjectInstructions = React.createClass({
  render: function () {
    return(
      <Grid>
        <div className="jumbotron">
          <div className="col-sm-offset-1">
            <h1>Nonprofit projects</h1>
            <h3>It's time to apply what you've learned here at Free Code Camp.</h3>
            <h3>By the end of this process, you'll have a portfolio of live apps being used by real people.</h3>
            <h3>Please do the following immediately:</h3>
            <h4>
              <ol>
                <li>Complete this form: &nbsp;<a href="http://goo.gl/forms/f61dLt67t8" target="_blank">http://goo.gl/forms/f61dLt67t8</a>.</li>
                <li>Read this document, which will answer many questions you may have about our nonprofit projects: &nbsp;<a href="http://forum.freecodecamp.com/t/an-introduction-to-our-nonprofit-projects/856" target="_blank">http://forum.freecodecamp.com/t/an-introduction-to-our-nonprofit-projects/856</a>.</li>
                <li>We'll send you an invite to our Nonprofit Projects Trello board. Once we do, go there and add yourself to at least 3 nonprofit projects that interest you.</li>
                <li>Finish any unfinished Bonfire challenges. These challenges serve as the Free Code Camp "exit test". You must complete these before you can start working on nonprofit projects. If you completed CoderByte or CodeWars challenges instead of Bonfire, email us and we'll take a look:&nbsp;<a href="mailto:team@freecodecamp.com">team@freecodecamp.com</a>.</li>
              </ol>
            </h4>
            <h4>Please email us if you have further questions: &nbsp;<a href="mailto:team@freecodecamp.com">team@freecodecamp.com</a>.</h4>
          </div>
        </div>
      </Grid>
    );
  }
});

var Privacy = React.createClass({
  render: function () {
    return(
      <Grid>
        <div className="jumbotron">
          <h2 className="big-text">Privacy</h2>
          <p>Free Code Camp is committed to respecting the privacy of visitors to our web sites and web applications. The guidelines below explain how we protect the privacy of visitors to FreeCodeCamp.com and its features.</p>
          <h3>Personally Identifiable Information</h3>
          <p>Free Code Camp protects the identity of visitors to FreeCodeCamp.com by limiting the collection of personally identifiable information.</p>
          <p>Free Code Camp does not knowingly collect or solicit personally identifiable information from or about children under 13, except as permitted by law. If we discover we have received any information from a child under 13 in violation of this policy, we will delete that information immediately. If you believe Free Code Camp has any information from or about anyone under 13, please e-mail us at <a href="mailto:team@freecodecamp.com" target="_blank">team@freecodecamp.com</a>.</p>
          <p>All personally identifiable information you provide to us is used by Free Code Camp and its team to process and manage your account, analyze the demographic of our users, or to deliver services through the site. </p>
          <p>If you choose to provide personally identifiable information to us, you may receive occasional e-mails from us that are relevant to Free Code Camp, getting a job, or learning to code in general.</p>
          <p>Free Code Camp may also use other third-party providers to facilitate the delivery of the services described above, and these third-party providers may be supplied with or have access to personally identifiable information for the sole purpose of providing these services, to you on behalf of Free Code Camp.</p>
          <p>Free Code Camp may also disclose personally identifiable information in special legal circumstances. For instance, such information may be used where it is necessary to protect our copyright or intellectual property rights, or if the law requires us to do so.</p>
          <h3>Anonymous Information</h3>
          <p>Anonymous aggregated data may be provided to other organizations we associate with for statistical purposes. For example, we may report to an organization that a certain percentage of our site's visitors are adults between the ages of 25 and 35.</p>
          <h3>Cookies and Beacons—Use by Free Code Camp; Opting Out</h3>
          <p>We use cookies and software logs to monitor the use of FreeCodeCamp.com and to gather non-personal information about visitors to the site. Cookies are small files that Free Code Camp transfers to the hard drives of visitors for record-keeping purposes. These monitoring systems allow us to track general information about our visitors, such as the type of browsers (for example, Firefox or Internet Explorer), the operating systems (for instance, Windows or Macintosh), or the Internet providers (for instance, Comcast) they use. This information is used for statistical and market research purposes to tailor content to usage patterns and to provide services requested by our customers. To delete these cookies, please see your browser's privacy settings.</p>
          <p>A beacon is an electronic file object (typically a transparent image) placed in the code of a Web page. We use third party beacons to monitor the traffic patterns of visitors from one Free Code Camp.com page to another and to improve site performance.</p>
          <p>None of the information we gather in this way can be used to identify any individual who visits our site.</p>
          <h3>Security</h3>
          <p>Any personally identifiable information collected through this site is stored on limited-access servers. We will maintain safeguards to protect these servers and the information they store.</p>
          <h3>Surveys</h3>
          <p>We may occasionally conduct on-line surveys. All surveys are voluntary and you may decline to participate.</p>
          <h3>Copyright</h3>
          <p>All of the content on FreeCodeCamp.com is copyrighted by Free Code Camp. If you'd like to redistribute it beyond simply sharing it through social media, please contact us at <a href="mailto:team@freecodecamp.com" target="_blank">team@freecodecamp.com</a>.</p>
          <h3>Contacting Us</h3>
          <p>If you have questions about Free Code Camp, or to correct, update, or remove personally identifiable information, please email us at <a href="mailto:team@freecodecamp.com" target="_blank">team@freecodecamp.com</a>.</p>
          <h3>Links to Other Web sites</h3>
          <p>The Free Code Camp sites each contain links to other Web sites. Free Code Camp is not responsible for the privacy practices or content of these third-party Web sites. We urge all FreeCodeCamp.com visitors to follow safe Internet practices: Do not supply Personally Identifiable Information to these Web sites unless you have verified their security and privacy policies.</p>
          <h3>Data Retention</h3>
          <p>We retain your information for as long as necessary to permit us to use it for the purposes that we have communicated to you and comply with applicable law or regulations.</p>
          <h3>Business Transfers</h3>
          <p>As we continue to develop our business, we might sell or buy subsidiaries, or business units. In such transactions, customer information generally is one of the transferred business assets but remains subject to the promises made in any pre-existing Privacy Policy (unless, of course, the customer consents otherwise). Also, in the unlikely event that Free Code Camp, or substantially all of its assets are acquired, customer information will be one of the transferred assets, and will remain subject to our Privacy Policy.</p>
          <h3>Your California Privacy Rights</h3>
          <p>If you are a California resident, you are entitled to prevent sharing of your personal information with third parties for their own marketing purposes through a cost-free means. If you send a request to the address above, Free Code Camp will provide you with a California Customer Choice Notice that you may use to opt-out of such information sharing. To receive this notice, submit a written request to <a href="mailto:team@freecodecamp.com" target="_blank">team@freecodecamp.com</a>, specifying that you seek your &quot;California Customer Choice Notice.&quot; Please allow at least thirty (30) days for a response.</p>
          <h3>Acceptance of Privacy Policy Terms and Conditions</h3>
          <p>By using this site, you signify your agreement to the terms and conditions of this FreeCodeCamp.com Privacy Policy. If you do not agree to these terms, please do not use this site. We reserve the right, at our sole discretion, to change, modify, add, or remove portions of this policy at any time. All amended terms automatically take effect 30 days after they are initially posted on the site. Please check this page periodically for any modifications. Your continued use of FreeCodeCamp.com following the posting of any changes to these terms shall mean that you have accepted those changes.</p>
          <p>If you have any questions or concerns, please send an e-mail to <a href="mailto:team@freecodecamp.com" target="_blank">team@freecodecamp.com</a>.</p>
        </div>
        <script>var challengeName = 'Privacy';</script>
      </Grid>
    );
  }
});

module.exports = Resources;
