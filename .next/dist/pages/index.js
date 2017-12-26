'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _jsxFileName = '/Users/carl/code/camelup/pages/index.js?entry';


var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.colors = ["red", "green", "blue", "white", "yellow"];
    _this.state = {
      unpickedColors: [],
      highlighted: ""
    };

    _this.createFill = function (color) {
      var _this$state = _this.state,
          pick = _this$state.pick,
          highlighted = _this$state.highlighted,
          unpickedColors = _this$state.unpickedColors;

      var r = void 0,
          g = void 0,
          b = void 0,
          a = void 0;
      switch (color) {
        case "red":
          {
            r = 255;
            g = 0;
            b = 0;
            break;
          }
        case "blue":
          {
            r = 0;
            g = 0;
            b = 255;
            break;
          }
        case "white":
          {
            r = 255;
            g = 255;
            b = 255;
            break;
          }
        case "yellow":
          {
            r = 255;
            g = 255;
            b = 0;
            break;
          }
        case "green":
          {
            r = 0;
            g = 153;
            b = 51;
            break;
          }
        default:
          {
            r = 0;
            g = 0;
            b = 0;
            break;
          }
      }
      if (color === pick) {
        a = 1;
      } else if (color === highlighted) {
        a = .7;
      } else if (unpickedColors.includes(color)) {
        a = .3;
      } else {
        a = 1;
      }

      return 'rgba(' + r + ',' + g + ', ' + b + ', ' + a + ')';
    };

    _this.handleState = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(state) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!(state.pick !== _this.state.pick && state.pick)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return _this.lightup();

              case 4:

                _this.setState((0, _extends3.default)({}, state, {
                  highlighted: undefined
                }));

                _context.next = 8;
                break;

              case 7:
                _this.setState((0, _extends3.default)({}, state));

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](0);

                console.error(_context.t0);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 10]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.createFlicker = function () {
      _this.flicks = new Array(20).fill(80);
      for (var i = 0; i < 8; i++) {
        _this.flicks.push(_this.fib(i) * 100);
      }
    };

    _this.memo = {};

    _this.fib = function (num) {
      var memo = _this.memo || {};

      if (memo[num]) return memo[num];
      if (num <= 1) return 1;

      return memo[num] = _this.fib(num - 1, memo) + _this.fib(num - 2, memo);
    };

    _this.lightup = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var times;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              times = _this.flicks.slice();

            case 2:
              if (!(times.length > 1)) {
                _context2.next = 7;
                break;
              }

              _context2.next = 5;
              return _this.blink(times.shift());

            case 5:
              _context2.next = 2;
              break;

            case 7:
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](0);

              console.error(_context2.t0);

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 9]]);
    }));

    _this.blink = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(duration) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', new _promise2.default(function (resolve, reject) {
                  _this.timeout = setTimeout(function () {
                    var _this$state2 = _this.state,
                        unpickedColors = _this$state2.unpickedColors,
                        highlighted = _this$state2.highlighted;

                    var unpicked = unpickedColors.filter(function (color) {
                      return color !== highlighted;
                    });

                    var newHighlight = unpicked[_this.getRandom(0, _this.getRandom(0, unpicked.length - 1))];

                    _this.setState(function () {
                      return {
                        highlighted: newHighlight
                      };
                    }, resolve());
                  }, duration);
                }));

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.getRandom = function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    _this.createFlicker();
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var colors = this.colors,
          state = this.state,
          createFill = this.createFill,
          _state = this.state,
          unpickedColors = _state.unpickedColors,
          highlighted = _state.highlighted;

      return _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, colors.map(function (color) {
        return _react2.default.createElement(Pair, {
          key: color,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, _react2.default.createElement(_Camel2.default, {
          fill: createFill(color),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }), _react2.default.createElement(Numb, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, state[color]));
      }));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.socket = (0, _socket2.default)();
      this.socket.on('state', this.handleState);
    }

    // close socket connection

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.socket.off('state', this.handleState);
      this.socket.close();
    }
  }]);

  return App;
}(_react.Component);

var Container = _styledComponents2.default.div.withConfig({
  displayName: 'pages__Container',
  componentId: 's16a2hyg-0'
})(['display:flex;flex-direction:row;width:100%;min-height:100vh;background-color:black;justify-content:space-around;align-items:center;flex-wrap:wrap;']);

var Pair = _styledComponents2.default.div.withConfig({
  displayName: 'pages__Pair',
  componentId: 's16a2hyg-1'
})(['width:33%;height:40vh;position:relative;']);

var Numb = _styledComponents2.default.div.withConfig({
  displayName: 'pages__Numb',
  componentId: 's16a2hyg-2'
})(['font-size:5em;font-family:sans-serif;position:absolute;color:white;background-color:rgba(0,0,0,.7);height:1.5em;width:.8em;top:0;left:27%;text-align:center;padding-top:.2em;']);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiaW8iLCJDYW1lbCIsIkFwcCIsInByb3BzIiwiY29sb3JzIiwic3RhdGUiLCJ1bnBpY2tlZENvbG9ycyIsImhpZ2hsaWdodGVkIiwiY3JlYXRlRmlsbCIsImNvbG9yIiwicGljayIsInIiLCJnIiwiYiIsImEiLCJpbmNsdWRlcyIsImhhbmRsZVN0YXRlIiwibGlnaHR1cCIsInNldFN0YXRlIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlRmxpY2tlciIsImZsaWNrcyIsIkFycmF5IiwiZmlsbCIsImkiLCJwdXNoIiwiZmliIiwibWVtbyIsIm51bSIsInRpbWVzIiwic2xpY2UiLCJsZW5ndGgiLCJibGluayIsInNoaWZ0IiwiZHVyYXRpb24iLCJyZXNvbHZlIiwicmVqZWN0IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJ1bnBpY2tlZCIsImZpbHRlciIsIm5ld0hpZ2hsaWdodCIsImdldFJhbmRvbSIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJtYXAiLCJzb2NrZXQiLCJvbiIsIm9mZiIsImNsb3NlIiwiQ29udGFpbmVyIiwiZGl2IiwiUGFpciIsIk51bWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBVzs7Ozs7Ozs7O0lBR1osQTsrQkFlSjs7ZUFBQSxBQUFZLE9BQU07aUJBQUE7O3dDQUFBOztnSUFBQSxBQUNWOztVQWRSLEFBYWtCLFNBYlQsQ0FBQSxBQUNQLE9BRE8sQUFFUCxTQUZPLEFBR1AsUUFITyxBQUlQLFNBSk8sQUFLUCxBQVFnQjtVQUxsQixBQUtrQjtzQkFMVixBQUNVLEFBQ2hCO21CQUZNLEFBRU8sQUFHRztBQUxWLEFBQ047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QUFBO2lDQUFBO0FBQUE7QUFBQTs7VUFBQSxBQXNNbEIsWUFBWSxVQUFBLEFBQUMsS0FBRCxBQUFNLEtBQVEsQUFDeEI7WUFBTSxLQUFBLEFBQUssS0FBWCxBQUFNLEFBQVUsQUFDaEI7WUFBTSxLQUFBLEFBQUssTUFBWCxBQUFNLEFBQVcsQUFDakI7YUFBTyxLQUFBLEFBQUssTUFBTSxLQUFBLEFBQUssWUFBWSxNQUFBLEFBQU0sTUFBbEMsQUFBVyxBQUE2QixNQUEvQyxBQUFxRCxBQUN0RDtBQTFNaUIsQUFFaEI7O1VBRmdCLEFBRWhCLEFBQUs7V0FDTjs7Ozs7NkJBRVE7VUFBQSxBQUdMLFNBSEssQUFVSCxLQVZHLEFBR0w7VUFISyxBQUlMLFFBSkssQUFVSCxLQVZHLEFBSUw7VUFKSyxBQUtMLGFBTEssQUFVSCxLQVZHLEFBS0w7bUJBTEssQUFVSCxLQVZHLEFBTUw7VUFOSyxBQU9ILHdCQVBHLEFBT0g7VUFQRyxBQVFILHFCQVJHLEFBUUgsQUFLSjs7NkJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDSztBQURMO0FBQUEsT0FBQSxTQUNLLEFBQU8sSUFBSyxpQkFBQTsrQkFDVixjQUFEO2VBQUEsQUFDTzs7c0JBRFA7d0JBQUEsQUFHRTtBQUhGO0FBQ0UsU0FERixrQkFHRSxBQUFDO2dCQUNPLFdBRFIsQUFDUSxBQUFXOztzQkFEbkI7d0JBSEYsQUFHRSxBQUdBO0FBSEE7QUFDRSw0QkFFRCxjQUFEOztzQkFBQTt3QkFBQSxBQUNHO0FBREg7QUFBQSxpQkFQUyxBQUNYLEFBTUUsQUFDRyxBQUFNO0FBVm5CLEFBQ0UsQUFDSyxBQWVSOzs7O3dDQUVvQixBQUNuQjtXQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Q7V0FBQSxBQUFLLE9BQUwsQUFBWSxHQUFaLEFBQWUsU0FBUyxLQUF4QixBQUE2QixBQUM5QjtBQUVEOzs7Ozs7MkNBQ3dCLEFBQ3RCO1dBQUEsQUFBSyxPQUFMLEFBQVksSUFBWixBQUFnQixTQUFTLEtBQXpCLEFBQThCLEFBQzlCO1dBQUEsQUFBSyxPQUFMLEFBQVksQUFDYjs7Ozs7QUE3RGUsQTs7QUFpT2xCLElBQU0sdUNBQUEsQUFBbUI7ZUFBbkI7ZUFBQTtBQUFBLENBQVksR0FBbEI7O0FBV0EsSUFBTSxrQ0FBQSxBQUFjO2VBQWQ7ZUFBQTtBQUFBLENBQU8sR0FBYjs7QUFNQSxJQUFNLGtDQUFBLEFBQWM7ZUFBZDtlQUFBO0FBQUEsQ0FBTyxHQUFiLEFBY0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NhcmwvY29kZS9jYW1lbHVwIn0=