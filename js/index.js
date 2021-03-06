"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      height: 50
    };
    return _this;
  }

  Profile.prototype.render = function render() {
    var _props = this.props;
    var name = _props.name;
    var age = _props.age;
    var pic = _props.pic;
    var height = this.state.height;

    return React.createElement(
      "div",
      { className: "profile-box" },
      React.createElement(
        "h2",
        null,
        name
      ),
      React.createElement(
        "h4",
        null,
        age
      ),
      React.createElement("img", { src: pic, height: height }),
      React.createElement("br", null),
      React.createElement(
        "button",
        { onClick: this.zoomOut.bind(this) },
        "-"
      ),
      React.createElement(
        "button",
        { onClick: this.zoomIn.bind(this) },
        "+"
      )
    );
  };

  Profile.prototype.zoomIn = function zoomIn() {
    console.log(this);
    this.setState({ height: this.state.height + 20 });
  };

  Profile.prototype.zoomOut = function zoomOut() {
    console.log(this);
    this.setState({ height: this.state.height - 20 });
  };

  return Profile;
}(React.Component);

React.render(React.createElement(Profile, { name: "Isnur", age: "25", pic: "https://facebook.github.io/react/img/logo.svg" }), document.getElementById('app'));