'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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


var RollButton = function (_Component) {
  (0, _inherits3.default)(RollButton, _Component);

  function RollButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RollButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RollButton.__proto__ || (0, _getPrototypeOf2.default)(RollButton)).call.apply(_ref, [this].concat(args))), _this), _this.colors = ["red", "green", "blue", "white", "yellow"], _this.roll = function () {
      _this.socket.emit('roll', _this.state);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RollButton, [{
    key: 'render',
    value: function render() {
      var colors = this.colors,
          state = this.state,
          roll = this.roll;

      return _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(Button, {
        onClick: this.roll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }));
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
  componentId: 's17s2x33-0'
})(['width:50vh;height:50vh;border-radius:50vh;background-color:green;']);

var Container = _styledComponents2.default.div.withConfig({
  displayName: 'button__Container',
  componentId: 's17s2x33-1'
})(['display:flex;flex-direction:row;width:100%;min-height:100vh;background-color:black;justify-content:space-around;align-items:center;']);

exports.default = RollButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2J1dHRvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInN0eWxlZCIsImlvIiwiQ2FtZWwiLCJSb2xsQnV0dG9uIiwiY29sb3JzIiwicm9sbCIsInNvY2tldCIsImVtaXQiLCJzdGF0ZSIsIm9mZiIsImhhbmRsZVN0YXRlIiwiQnV0dG9uIiwiYnV0dG9uIiwiQ29udGFpbmVyIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBVzs7Ozs7Ozs7O0lBR1osQTs7Ozs7Ozs7Ozs7Ozs7b05BRUosQSxTQUFTLENBQUEsQUFDUCxPQURPLEFBRVAsU0FGTyxBQUdQLFFBSE8sQUFJUCxTQUpPLEFBS1AsQSxpQkFzQ0YsQSxPQUFPLFlBQU0sQUFDWDtZQUFBLEFBQUssT0FBTCxBQUFZLEtBQVosQUFBaUIsUUFBUSxNQUF6QixBQUE4QixBQUMvQjtBOzs7Ozs2QkFwQ1E7VUFBQSxBQUdMLFNBSEssQUFNSCxLQU5HLEFBR0w7VUFISyxBQUlMLFFBSkssQUFNSCxLQU5HLEFBSUw7VUFKSyxBQUtMLE9BTEssQUFNSCxLQU5HLEFBS0wsQUFJRjs7NkJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFHRTtBQUhGO0FBQUEsT0FBQSxnQ0FHRSxBQUFDO2lCQUNVLEtBRFgsQUFDZ0I7O29CQURoQjtzQkFKSixBQUNFLEFBR0UsQUFRTDtBQVJLO0FBQ0U7Ozs7d0NBU2EsQUFDbkI7V0FBQSxBQUFLLFNBQUwsQUFBYyxBQUNmO0FBRUQ7Ozs7OzsyQ0FDd0IsQUFDdEI7V0FBQSxBQUFLLE9BQUwsQUFBWSxJQUFaLEFBQWdCLFNBQVMsS0FBekIsQUFBOEIsQUFDL0I7Ozs7O0FBekNzQixBOztBQXNEekIsSUFBTSxvQ0FBQSxBQUFnQjtlQUFoQjtlQUFBO0FBQUEsQ0FBUyxHQUFmOztBQVFBLElBQU0sdUNBQUEsQUFBbUI7ZUFBbkI7ZUFBQTtBQUFBLENBQVksR0FBbEIsQUFVQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJidXR0b24uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NhcmwvY29kZS9jYW1lbHVwIn0=