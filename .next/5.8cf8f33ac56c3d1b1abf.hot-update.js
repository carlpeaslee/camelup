webpackHotUpdate(5,{

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(88);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(86);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(89);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(33);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(35);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(387);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _socket = __webpack_require__(418);

var _socket2 = _interopRequireDefault(_socket);

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

    _this.handleState = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(state) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!(state.pick !== _this.state.pick)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return _this.lightup();

              case 4:

                _this.setState((0, _extends3.default)({}, state));

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

    _this.roll = function () {
      _this.socket.emit('roll', _this.state);
    };

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
                    var _this$state = _this.state,
                        unpickedColors = _this$state.unpickedColors,
                        highlighted = _this$state.highlighted;

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
          _state = this.state,
          unpickedColors = _state.unpickedColors,
          highlighted = _state.highlighted,
          roll = this.roll;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('button', {
        onClick: this.roll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Roll'), _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, colors.map(function (color) {
        return _react2.default.createElement(Camel, {
          key: color,
          color: color,
          highlighted: highlighted,
          unpickedColors: unpickedColors,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, state[color]);
      })));
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
  componentId: 'm90zgt-0'
})(['display:flex;flex-direction:row;width:100%;min-height:100vh;background-color:black;justify-content:space-around;align-items:center;']);

var Camel = _styledComponents2.default.div.withConfig({
  displayName: 'pages__Camel',
  componentId: 'm90zgt-1'
})(['width:200px;height:200px;background-color:', ';opacity:', ';outline:1px solid black;display:flex;justify-content:center;align-items:center;font-size:3em;'], function (_ref4) {
  var color = _ref4.color;
  return color;
}, function (_ref5) {
  var highlighted = _ref5.highlighted,
      color = _ref5.color,
      lastPick = _ref5.lastPick,
      unpickedColors = _ref5.unpickedColors;

  if (lastPick === color) {
    return 1;
  } else if (highlighted === color) {
    return .6;
  } else if (!unpickedColors.includes(color)) {
    return .8;
  } else {
    return .2;
  }
});

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiaW8iLCJBcHAiLCJwcm9wcyIsImNvbG9ycyIsInN0YXRlIiwidW5waWNrZWRDb2xvcnMiLCJoaWdobGlnaHRlZCIsImhhbmRsZVN0YXRlIiwicGljayIsImxpZ2h0dXAiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJlcnJvciIsInJvbGwiLCJzb2NrZXQiLCJlbWl0IiwiY3JlYXRlRmxpY2tlciIsImZsaWNrcyIsIkFycmF5IiwiZmlsbCIsImkiLCJwdXNoIiwiZmliIiwibWVtbyIsIm51bSIsInRpbWVzIiwic2xpY2UiLCJsZW5ndGgiLCJibGluayIsInNoaWZ0IiwiZHVyYXRpb24iLCJyZXNvbHZlIiwicmVqZWN0IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJ1bnBpY2tlZCIsImZpbHRlciIsImNvbG9yIiwibmV3SGlnaGxpZ2h0IiwiZ2V0UmFuZG9tIiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSIsIm1hcCIsIm9uIiwib2ZmIiwiY2xvc2UiLCJDb250YWluZXIiLCJkaXYiLCJDYW1lbCIsImxhc3RQaWNrIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0lBSUQsQTsrQkFlSjs7ZUFBQSxBQUFZLE9BQU07aUJBQUE7O3dDQUFBOztnSUFBQSxBQUNWOztVQWRSLEFBYWtCLFNBYlQsQ0FBQSxBQUNQLE9BRE8sQUFFUCxTQUZPLEFBR1AsUUFITyxBQUlQLFNBSk8sQUFLUCxBQVFnQjtVQUxsQixBQUtrQjtzQkFMVixBQUNVLEFBQ2hCO21CQUZNLEFBRU8sQUFHRztBQUxWLEFBQ047O1VBSWdCLEFBNERsQiwwQkE1RGtCOzBGQTRESixpQkFBQSxBQUFPLE9BQVA7c0VB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ekIsQUFBOEIsQUFDOUI7V0FBQSxBQUFLLE9BQUwsQUFBWSxBQUNiOzs7OztBQXpFZSxBOztBQXlLbEIsSUFBTSx1Q0FBQSxBQUFtQjtlQUFuQjtlQUFBO0FBQUEsQ0FBWSxHQUFsQjs7QUFVQSxJQUFNLG1DQUFBLEFBQWU7ZUFBZjtlQUFBO0FBQUEsQ0FBUSxpS0FHUSxpQkFBQTtNQUFBLEFBQUUsY0FBRixBQUFFO1NBQUYsQUFBYTtBQUg3QixHQUlPLGlCQUFvRDtNQUFsRCxBQUFrRCxvQkFBbEQsQUFBa0Q7TUFBckMsQUFBcUMsY0FBckMsQUFBcUM7TUFBOUIsQUFBOEIsaUJBQTlCLEFBQThCO01BQXBCLEFBQW9CLHVCQUFwQixBQUFvQixBQUM3RDs7TUFDRSxhQURGLEFBQ2UsT0FDYixBQUNBO1dBQUEsQUFBTyxBQUNSO0FBSkQsYUFLRSxnQkFESyxBQUNXLE9BQ2hCLEFBQ0E7V0FBQSxBQUFPLEFBQ1I7QUFKTSxHQUFBLFVBS0wsQ0FBQyxlQUFBLEFBQWUsU0FEWCxBQUNKLEFBQXdCLFFBQ3pCLEFBQ0E7V0FBQSxBQUFPLEFBQ1I7QUFKTSxHQUFBLE1BSUEsQUFDTDtXQUFBLEFBQU8sQUFDUjtBQUNGO0FBcEJILEFBQU0sQUE0Qk47O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NhcmwvY29kZS9jYW1lbHVwIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/carl/code/camelup/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/carl/code/camelup/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44Y2Y4ZjMzYWM1NmMzZDFiMWFiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/OTQwNDhmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbG9ycyA9IFtcbiAgICBcInJlZFwiLFxuICAgIFwiZ3JlZW5cIixcbiAgICBcImJsdWVcIixcbiAgICBcIndoaXRlXCIsXG4gICAgXCJ5ZWxsb3dcIlxuICBdXG5cbiAgc3RhdGUgPSB7XG4gICAgdW5waWNrZWRDb2xvcnM6IFtdLFxuICAgIGhpZ2hsaWdodGVkOiBcIlwiXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5jcmVhdGVGbGlja2VyKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHN0YXRlLFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgdW5waWNrZWRDb2xvcnMsXG4gICAgICAgIGhpZ2hsaWdodGVkXG4gICAgICB9LFxuICAgICAgcm9sbCxcbiAgICB9ID0gdGhpc1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cblxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJvbGx9XG4gICAgICAgID5cbiAgICAgICAgICBSb2xsXG4gICAgICAgIDwvYnV0dG9uPlxuXG5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICB7Y29sb3JzLm1hcCggY29sb3IgPT4gKFxuICAgICAgICAgICAgPENhbWVsXG4gICAgICAgICAgICAgIGtleT17Y29sb3J9XG4gICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2hpZ2hsaWdodGVkfVxuICAgICAgICAgICAgICB1bnBpY2tlZENvbG9ycz17dW5waWNrZWRDb2xvcnN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzdGF0ZVtjb2xvcl19XG4gICAgICAgICAgICA8L0NhbWVsPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuXG5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuc29ja2V0ID0gaW8oKVxuICAgIHRoaXMuc29ja2V0Lm9uKCdzdGF0ZScsIHRoaXMuaGFuZGxlU3RhdGUpXG4gIH1cblxuICAvLyBjbG9zZSBzb2NrZXQgY29ubmVjdGlvblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgdGhpcy5zb2NrZXQub2ZmKCdzdGF0ZScsIHRoaXMuaGFuZGxlU3RhdGUpXG4gICAgdGhpcy5zb2NrZXQuY2xvc2UoKVxuICB9XG5cbiAgaGFuZGxlU3RhdGUgPSBhc3luYyAoc3RhdGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHN0YXRlLnBpY2sgIT09IHRoaXMuc3RhdGUucGljaykge1xuXG4gICAgICAgIGF3YWl0IHRoaXMubGlnaHR1cCgpXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4uc3RhdGV9KVxuXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnN0YXRlfSlcbiAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGV4KVxuICAgIH1cbiAgfVxuXG4gIHJvbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5zb2NrZXQuZW1pdCgncm9sbCcsIHRoaXMuc3RhdGUpXG4gIH1cblxuXG4gIGNyZWF0ZUZsaWNrZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5mbGlja3MgPSBuZXcgQXJyYXkoMjApLmZpbGwoODApXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgIHRoaXMuZmxpY2tzLnB1c2godGhpcy5maWIoaSkgKiAxMDApXG4gICAgfVxuXG4gIH1cblxuICBtZW1vID0ge31cblxuICBmaWIgPSAobnVtKSA9PiB7XG4gICAgbGV0IG1lbW8gPSB0aGlzLm1lbW8gfHwge31cblxuICAgIGlmIChtZW1vW251bV0pIHJldHVybiBtZW1vW251bV1cbiAgICBpZiAobnVtIDw9IDEpIHJldHVybiAxXG5cbiAgICByZXR1cm4gbWVtb1tudW1dID0gdGhpcy5maWIobnVtIC0gMSwgbWVtbykgKyB0aGlzLmZpYihudW0gLSAyLCBtZW1vKVxuICB9XG5cbiAgbGlnaHR1cCA9IGFzeW5jKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdGltZXMgPSB0aGlzLmZsaWNrcy5zbGljZSgpXG5cbiAgICAgIHdoaWxlICh0aW1lcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYmxpbmsodGltZXMuc2hpZnQoKSlcbiAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGV4KVxuICAgIH1cbiAgfVxuXG5cbiAgYmxpbmsgPSBhc3luYyAoZHVyYXRpb24pID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHtcblxuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHVucGlja2VkQ29sb3JzLFxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWRcbiAgICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgICAgbGV0IHVucGlja2VkID0gdW5waWNrZWRDb2xvcnMuZmlsdGVyKGNvbG9yID0+IGNvbG9yICE9PSBoaWdobGlnaHRlZClcblxuXG4gICAgICAgICAgbGV0IG5ld0hpZ2hsaWdodCA9IHVucGlja2VkW3RoaXMuZ2V0UmFuZG9tKDAsdGhpcy5nZXRSYW5kb20oMCx1bnBpY2tlZC5sZW5ndGggLSAxKSldXG5cblxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkOiBuZXdIaWdobGlnaHRcbiAgICAgICAgICB9KSwgcmVzb2x2ZSgpKVxuXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uXG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGdldFJhbmRvbSA9IChtaW4sIG1heCkgPT4ge1xuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pXG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbiAgfVxuXG5cblxuXG59XG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6MTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuY29uc3QgQ2FtZWwgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHtjb2xvcn0pID0+IGNvbG9yfTtcbiAgb3BhY2l0eTogJHsoe2hpZ2hsaWdodGVkLCBjb2xvciwgbGFzdFBpY2ssIHVucGlja2VkQ29sb3JzfSkgPT4ge1xuICAgIGlmIChcbiAgICAgIGxhc3RQaWNrID09PSBjb2xvclxuICAgICkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgaGlnaGxpZ2h0ZWQgPT09IGNvbG9yXG4gICAgKSB7XG4gICAgICByZXR1cm4gLjZcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIXVucGlja2VkQ29sb3JzLmluY2x1ZGVzKGNvbG9yKVxuICAgICkge1xuICAgICAgcmV0dXJuIC44XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAuMlxuICAgIH1cbiAgfX07XG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM2VtO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFrQkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUhBO0FBR0E7QUFKQTtBQUNBO0FBK0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFQQTtBQUFBO0FBQ0E7QUFTQTtBQUFBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFjQTtBQUNBO0FBREE7QUFDQTtBQWZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBNURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBNkVBO0FBQ0E7QUEvRUE7QUFDQTtBQWtGQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBekZBO0FBQ0E7QUEwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkdBO0FBQ0E7QUFxR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUNBO0FBREE7QUFJQTtBQUpBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFTQTtBQUNBO0FBREE7QUFDQTtBQVZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBdEdBO0FBQ0E7QUFtSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7O0FBQ0E7QUFBQTtBQURBO0FBZEE7QUFEQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFwSEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE2SUE7QUFDQTtBQUNBO0FBQ0E7QUEvSUE7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBRUE7QUFHQTtBQUNBO0FBTUE7QUFKQTtBQUNBO0FBRUE7QUFDQTtBQUlBOztBQUFBO0FBR0E7QUFIQTtBQUFBO0FBSUE7O0FBREE7QUFBQTtBQUFBO0FBQ0E7O0FBTUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBZUE7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTs7Ozs7OztBQWlHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBSEE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBUUE7QUFKQTtBQVFBO0FBSkE7QUFNQTtBQUNBO0FBUUE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=