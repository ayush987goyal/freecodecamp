var React = require('react/addons');
var Link = require('react-router').Link;
var joinClasses = require('react-bootstrap/lib/utils/joinClasses');
var classSet = React.addons.classSet;
var BootstrapMixin = require('react-bootstrap').BootstrapMixin;

var NavItem = React.createClass({
  mixins: [BootstrapMixin],

  propTypes: {
    aClassName: React.PropTypes.string,
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    eventKey: React.PropTypes.any,
    href: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    target: React.PropTypes.string,
    title: React.PropTypes.string,
    to: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      href: '#'
    };
  },

  _handleClick: function (e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(
          this.props.eventKey,
          this.props.href,
          this.props.target
        );
      }
    }
  },

  _renderLink: function() {
    var {
      href,
      title,
      to,
      target,
      children,
    } = this.props;

    if (!to) {
      return (
        <a
          href={ href }
          title={ title }
          target={ target }
          className={ this.props.aClassName }
          onClick={ this._handleClick }
          ref="anchor">
          { children }
        </a>
      );
    } else {
      return (
        <Link
          to={ to }
          className={ this.props.aClassName }>
          { children }
        </Link>
      );
    }
  },

  render: function () {
    var {
      disabled,
      active,
    } = this.props;
    var props = this.props;
    var classes = {
      'active': active,
      'disabled': disabled
    };

    return (
      <li
        {...props}
        className={ joinClasses(props.className, classSet(classes)) }>
        { this._renderLink() }
      </li>
    );
  }

});

module.exports = NavItem;
