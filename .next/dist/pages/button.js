'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _Camel = require('../icons/Camel');

var _Camel2 = _interopRequireDefault(_Camel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/carl/code/camelup/pages/button.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  body {\n    margin: 0;\n  }\n'], ['\n  body {\n    margin: 0;\n  }\n']);

var RollButton = function (_Component) {
  (0, _inherits3.default)(RollButton, _Component);

  function RollButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RollButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RollButton.__proto__ || (0, _getPrototypeOf2.default)(RollButton)).call.apply(_ref, [this].concat(args))), _this), _this.colors = ["red", "green", "blue", "white", "yellow"], _this.state = {
      disabled: false
    }, _this.roll = function () {
      _this.setState({ disabled: true });
      _this.socket.emit('roll', _this.state);
      setTimeout(function () {
        _this.setState({ disabled: false });
      }, 3000);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RollButton, [{
    key: 'render',
    value: function render() {
      var colors = this.colors,
          disabled = this.state.disabled,
          roll = this.roll;

      return _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(Button, {
        onClick: this.roll,
        disabled: disabled,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, disabled ? "..." : "ROLL"));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.socket = (0, _socket2.default)();
    }

    // close socket connection

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.socket.off('state', this.handleState);
    }
  }]);

  return RollButton;
}(_react.Component);

var Button = _styledComponents2.default.button.withConfig({
  displayName: 'button__Button',
  componentId: 's1ep4nhm-0'
})(['width:50vh;height:50vh;border-radius:50vh;background-color:teal;color:white;font-size:50px;font-family:sans-serif;&:disabled{opacity:.5;}']);

var Container = _styledComponents2.default.div.withConfig({
  displayName: 'button__Container',
  componentId: 's1ep4nhm-1'
})(['display:flex;flex-direction:row;width:100%;min-height:115vh;background-color:black;justify-content:space-around;align-items:center;']);

(0, _styledComponents.injectGlobal)(_templateObject);

exports.default = RollButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2J1dHRvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInN0eWxlZCIsImluamVjdEdsb2JhbCIsImlvIiwiQ2FtZWwiLCJSb2xsQnV0dG9uIiwiY29sb3JzIiwic3RhdGUiLCJkaXNhYmxlZCIsInJvbGwiLCJzZXRTdGF0ZSIsInNvY2tldCIsImVtaXQiLCJzZXRUaW1lb3V0Iiwib2ZmIiwiaGFuZGxlU3RhdGUiLCJCdXR0b24iLCJidXR0b24iLCJDb250YWluZXIiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVzs7Ozs7Ozs7OztJQUdaLEE7Ozs7Ozs7Ozs7Ozs7O29OQUVKLEEsU0FBUyxDQUFBLEFBQ1AsT0FETyxBQUVQLFNBRk8sQUFHUCxRQUhPLEFBSVAsU0FKTyxBLEFBS1AsaUJBR0YsQTtnQixBQUFRLEFBQ0k7QUFESixBQUNOLGFBMENGLEEsT0FBTyxZQUFNLEFBQ1g7WUFBQSxBQUFLLFNBQVMsRUFBQyxVQUFmLEFBQWMsQUFBVyxBQUN6QjtZQUFBLEFBQUssT0FBTCxBQUFZLEtBQVosQUFBaUIsUUFBUSxNQUF6QixBQUE4QixBQUM5QjtpQkFDRSxZQUFLLEFBQ0g7Y0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFmLEFBQWMsQUFBVyxBQUMxQjtBQUhILFNBQUEsQUFJRSxBQUVIO0E7Ozs7OzZCQWhEUTtVQUFBLEFBR0wsU0FISyxBQVFILEtBUkcsQUFHTDtVQUhLLEFBS0gsV0FMRyxBQVFILEtBUkcsQUFJTCxNQUpLLEFBS0g7VUFMRyxBQU9MLE9BUEssQUFRSCxLQVJHLEFBT0wsQUFJRjs7NkJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFHRTtBQUhGO0FBQUEsT0FBQSxrQkFHRyxjQUFEO2lCQUNXLEtBRFgsQUFDZ0IsQUFDZDtrQkFGRixBQUVZOztvQkFGWjtzQkFBQSxBQUlJO0FBSko7QUFDRSxTQUdDLFdBQUEsQUFBYSxRQVJwQixBQUNFLEFBR0UsQUFJd0IsQUFPN0I7Ozs7d0NBRW9CLEFBQ25CO1dBQUEsQUFBSyxTQUFMLEFBQWMsQUFDZjtBQUVEOzs7Ozs7MkNBQ3dCLEFBQ3RCO1dBQUEsQUFBSyxPQUFMLEFBQVksSUFBWixBQUFnQixTQUFTLEtBQXpCLEFBQThCLEFBQy9COzs7OztBQWpEc0IsQTs7QUFxRXpCLElBQU0sb0NBQUEsQUFBZ0I7ZUFBaEI7ZUFBQTtBQUFBLENBQVMsR0FBZjs7QUFjQSxJQUFNLHVDQUFBLEFBQW1CO2VBQW5CO2VBQUE7QUFBQSxDQUFZLEdBQWxCOztBQVVBLG9DQU1BOztrQkFBQSxBQUFlIiwiZmlsZSI6ImJ1dHRvbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2FybC9jb2RlL2NhbWVsdXAifQ==