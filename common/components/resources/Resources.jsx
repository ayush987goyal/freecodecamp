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
        <div class="embed-responsive embed-responsive-16by9 gitter-imbed">
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
          <ol class="col-md-offset-2">
            <li>Create a GitHub Account&nbsp;<a href="http://github.com/join" target="_blank">here</a>.</li>
            <li>Download the chat room app on &nbsp;<a href="https://update.gitter.im/win/latest">Windows</a>,&nbsp;<a href="https://update.gitter.im/osx/latest">Mac</a>,&nbsp;<a href="http://appstore.com/gitter">iPhone</a>,&nbsp; or &nbsp;<a href="https://play.google.com/store/apps/details?id=im.gitter.gitter&amp;hl=en_GB">Android</a>&nbsp;, or go &nbsp;<a href="http://chat.freecodecamp.com">here</a>.</li>
            <li>Keep the chat room open while you code so that you can meet friends and ask for help.</li>
          </ol>
        </h3>
        <Col
          xs={ 12 }>
          <div class="embed-responsive embed-responsive-16by9 gitter-imbed"></div>
        </Col>
      </Grid>
    );
  }
});

var ControlShortcuts = React.createClass({
  render: function () {
    return(
      <Grid>
        <div class="jumbotron text-center">
          <h1 class="hug-top">Global Control Shortcuts for Mac</h1>
          <h2>These Global Control Shortcuts for Mac will save you hours by speeding up your typing</h2><br/>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe src="//player.vimeo.com/video/107073108" class="embed-responsive-item"></iframe>
          </div>
          <div class="text-left">
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
          </div><a href="/login" class="btn btn-cta signup-btn btn-primary">Start learning to code (it's free)</a><br/>
        </div>
      </Grid>
    );
  }
});

var DeployAWebsite = React.createClass({
  render: function () {
    return(
      <Grid>
        <div class="jumbotron text-center">
          <h1 class="hug-top">Deploy a Dynamic Website in 7 Minutes</h1>
          <h2>Here's a fast and easy way to deploy a dynamic website to the internet</h2><br/>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe src="//player.vimeo.com/video/115194017" class="embed-responsive-item"></iframe>
          </div>
          <div class="text-left">
            <h3>Use these links:
              <ul>
                <li><a href="http://www.atom.io" target="_blank">http://www.atom.io</a>&nbsp; - free text editor</li>
                <li><a href="http://www.startbootstrap.com" target="_blank">http://www.startbootstrap.com</a>&nbsp; - free responsive (Bootstrap) templates</li>
                <li><a href="http://www.powr.io" target="_blank">http://www.powr.io</a>&nbsp; - great plugins</li>
                <li><a href="http://www.bitballoon.com" target="_blank">http://www.bitballoon.com</a>&nbsp; - drag-and-drop deployment</li>
              </ul>
            </h3>
          </div>
          <a href="/login" class="btn btn-cta signup-btn btn-primary">Start learning to code (it's free)</a><br/>
        </div>
      </Grid>
    );
  }
});

var GmailShortcuts = React.createClass({
  render: function () {
    return(
      <Grid>
        <div class="jumbotron text-center">
          <h1 class="hug-top">Gmail Shortcuts</h1>
          <h2>These Gmail Shortcuts will save you hours and help you get to Zero Inbox</h2><br/>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe src="//player.vimeo.com/video/115194016" class="embed-responsive-item"></iframe>
          </div>
          <div class="text-left">
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
            <a href="/login" class="btn btn-cta signup-btn btn-primary">Start learning to code (it's free)</a><br/>
        </div>
      </Grid>
    );
  }
});

var InstallScreenhero = React.createClass({
  render: function () {
    return(
      <Grid>
        <div class="jumbotron text-center">
          <h1 class="hug-top">Install ScreenHero</h1>
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
        <div class="jumbotron text-center">
          <h1 class="hug-top">Win a Chromebook</h1>
          <h2>Sign up for Inbox.js - JavaScript challenges in your inbox - and enter to win a Chromebook!</h2><img src="https://s3.amazonaws.com/freecodecamp/chromebook.jpg" alt="HP Chromebook 11" class="image-responsive"/>
          <script src="//widget-prime.rafflecopter.com/launch.js"></script><a id="rcwidget_a7khonhd" href="http://www.rafflecopter.com/rafl/display/d70901b10/" rel="nofollow" data-raflid="d70901b10" data-theme="classic" data-template="" class="rcptr">a Rafflecopter giveaway</a>
          <div class="animated zoomInDown delay-10">
          <p>Finished signing up for the giveaway?</p><a href="/login" class="btn btn-cta signup-btn btn-primary">Start learning to code (it's free)</a>
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
            1: "<div class='btn btn-default target'>.target</div>",
            2: "<div class='btn btn-default target'>.target</div>",
            3: "<div class='btn btn-default target'>target0</div><div class='btn btn-default target'>target1</div><div class='btn btn-default target'>target2</div><div class='btn btn-default target'>target3</div><div class='btn btn-default target'>target4</div>",
            4: "<div class='btn btn-default target'>target1</div><div class='btn btn-default target'>target2</div><div class='btn btn-default target'>target3</div><div class='btn btn-default target'>target4</div><div class='btn btn-default target'>target5</div>",
            5: "<div class='btn btn-default target'>target1</div><div class='btn btn-default target'>target2</div><div class='btn btn-default target'>target3</div><div class='btn btn-default target'>target4</div><div class='btn btn-default target'>target5</div>",
            6: "<div class='btn btn-default target'>target1</div><div class='btn btn-default target'>target2</div><div class='btn btn-default target'>target3</div><div class='btn btn-default target'>target4</div><div class='btn btn-default target'>target5</div>",
            7: "<input type='checkbox'>checkbox1</input><br><input type='checkbox'>checkbox2</input>",
            8: "<input type='text' value='target'>",
            9: "<select><option value='target0'>target0</option><option value='target1'>target1</option><option value='target2'>target2</option><option value='target3'>target3</option></select>",
            10: "<div class='btn btn-default target'>.target</div>",
            11: "<div class='btn btn-default target' data-lookAtMe='This is some super secret data hidden in the DOM!'>.target</div>",
            12: "<div class='btn btn-default target'>target1</div><div class='btn btn-default target'>target2</div><div class='btn btn-default target'>target3</div><div class='btn btn-default target'>target4</div><div class='btn btn-default target'>target5</div>",
            13: "<div class='btn btn-default target' id='finished-button'>Finish!</div>"
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
        <div class="container">
          <Row>
            <Col
              xs={ 12 }
              sm={ 8 }>
              <div class="jumbotron">
                <Row>
                  <Col
                    xs={ 12 }>
                    <div class="text-center">
                      <img src="https://s3.amazonaws.com/freecodecamp/logo4.0LG.png" alt="learn to code free at freecodecamp.com" class="img-responsive"/>
                      <h1>jQuery Exercises</h1>
                    </div>
                  </Col>
                  <br/>
                  <div id="directions" class="text-primary"></div><br/>
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
              <div id="location1" class="well jquery-exercises-well"></div>
            </Col>
            <Col
            xs={ 6 }>
              <div id="location2" class="well jquery-exercises-well"></div>
            </Col>
          </Row>
          <div id="next-exercise" class="btn btn-primary btn-lg btn-block">#next-exercise</div><br/>
          <button id="solution-button" class="btn btn-block btn-lg btn-info">#solution-button</button><br/>
          <div class="text-center">Created for<a href="http://www.FreeCodeCamp.com">Free Code Camp</a><br/>by<a href="https://twitter.com/ossia">Quincy Larson</a>,<a href="https://www.twitter.com/terakilobyte">Nathan Leniz</a>,<a href="https://twitter.com/iheartkode"> Mark Howard</a>and<a href="https://twitter.com/ryanmalm">Ryan Malm</a>. Please<a href="http://codepen.io/ossia/pen/raVEgN">fork this.</a></div>
          <Col
          xs={ 12 }
          sm={ 4 }>
            <div class="panel panel-primary">
              <div class="panel panel-heading">List of Exercises</div>
              <div class="panel-body">
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
          <div id="hint-modal" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" data-dismiss="modal" class="close"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                  <h4 id="myModalLabel" class="modal-title">Your hint</h4>
                </div>
                <div class="modal-body">
                <div id="hint"></div>
              </div>
            </div>
          </div>
          <div id="finished-modal" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" data-dismiss="modal" class="close"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                  <h4 id="myModalLabel" class="modal-title">Congratulations! You&apos;ve finished our jQuery exercises!<a href="http://www.freecodecamp.com/">Go back to Free Code Camp</a>and mark this challenge complete.</h4>
                </div>
              <div class="modal-body">
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
        <img src="https://s3.amazonaws.com/freecodecamp/wide-social-banner.png" class="img-responsive img-center"/><br/>
        <div class="text-center">
          <a href="/signin" class="btn btn-cta signup-btn next-challenge-button">
            Start learning to code (it's free)
          </a>
        </div>
        <br/>
        <Row>
          <Col
          xs={ 12 }
          sm={ 12 }
          md={ 4 }>
          <div class="panel panel-info">
            <div class="panel-heading landing-panel-heading text-center">Get Connected</div>
              <div class="panel-body text-center">
                <img src="https://s3.amazonaws.com/freecodecamp/about-chatroom.jpg" alt="A screen shot from Free Code Camp's main chat room" class="img-responsive img-center"/>
                <h3> campers are doing challenges.</h3>
                <h3> campers are coding for nonprofits.</h3>
              </div>
            </div>
          </Col>
          <Col
          xs={ 12 }
          sm={ 12 }
          md={ 4 }>
            <div class="panel panel-info">
              <div class="panel-heading landing-panel-heading text-center">Learn JavaScript</div>
              <div class="panel-body text-center">
                <img src="https://s3.amazonaws.com/freecodecamp/about-github.jpg" alt="A screen shot of a GitHub commit graph showing a streak of 33 consecutive days of contributions" class="img-responsive img-center"/>
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
            <div class="panel panel-info">
              <div class="panel-heading landing-panel-heading text-center">Help Nonprofits</div>
              <div class="panel-body text-center">
                <img src="https://s3.amazonaws.com/freecodecamp/about-trello.jpg" alt="a screen shot of Free Code Camp's nonprofit project Trello board showing several active projects" class="img-responsive img-center"/>
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
            <div class="panel panel-info">
              <div class="panel-heading landing-panel-heading text-center">Announcements</div>
              <div class="panel-body">
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
                <div class="landing-panel-body text-center"><a data-dnt="true" href="https://twitter.com/FreeCodeCamp" data-widget-id="560847186548621312" class="twitter-timeline">Tweets by @FreeCodeCamp</a>
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
                    <div class="github-and-twitter-button-text">
                      <a class="twitter-follow-button"
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
                    <div class="github-and-twitter-button-text">Star us on GitHub here:</div>
                  </Col>
                  <Col
                    xs={ 12 }>
                    <div class="github-and-twitter-button-text">
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

var Chat = React.createClass({
  render: function () {
    return(
      <Grid>

      </Grid>
    );
  }
});

var Chat = React.createClass({
  render: function () {
    return(
      <Grid>

      </Grid>
    );
  }
});

var Chat = React.createClass({
  render: function () {
    return(
      <Grid>

      </Grid>
    );
  }
});

var Chat = React.createClass({
  render: function () {
    return(
      <Grid>

      </Grid>
    );
  }
});

var Chat = React.createClass({
  render: function () {
    return(
      <Grid>

      </Grid>
    );
  }
});

var Chat = React.createClass({
  render: function () {
    return(
      <Grid>

      </Grid>
    );
  }
});

var Chat = React.createClass({
  render: function () {
    return(
      <Grid>

      </Grid>
    );
  }
});

var Chat = React.createClass({
  render: function () {
    return(
      <Grid>

      </Grid>
    );
  }
});

var Chat = React.createClass({
  render: function () {
    return(
      <Grid>

      </Grid>
    );
  }
});











module.exports = Resources;
