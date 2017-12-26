webpackHotUpdate(6,{

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Camel = __webpack_require__(440);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/carl/code/camelup/pages/button.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/carl/code/camelup/pages/button.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/button")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43MzljZTQwNmU2YThlNGUyYmFiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYnV0dG9uLmpzPzAyNmQ3NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuaW1wb3J0IENhbWVsIGZyb20gJy4uL2ljb25zL0NhbWVsJ1xuXG5cbmNsYXNzIFJvbGxCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbG9ycyA9IFtcbiAgICBcInJlZFwiLFxuICAgIFwiZ3JlZW5cIixcbiAgICBcImJsdWVcIixcbiAgICBcIndoaXRlXCIsXG4gICAgXCJ5ZWxsb3dcIlxuICBdXG5cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCB7XG4gICAgICBjb2xvcnMsXG4gICAgICBzdGF0ZSxcbiAgICAgIHJvbGwsXG4gICAgfSA9IHRoaXNcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17dGhpcy5yb2xsfVxuICAgICAgICAvPlxuXG5cblxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuc29ja2V0ID0gaW8oKVxuICB9XG5cbiAgLy8gY2xvc2Ugc29ja2V0IGNvbm5lY3Rpb25cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIHRoaXMuc29ja2V0Lm9mZignc3RhdGUnLCB0aGlzLmhhbmRsZVN0YXRlKVxuICB9XG5cblxuXG4gIHJvbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5zb2NrZXQuZW1pdCgncm9sbCcsIHRoaXMuc3RhdGUpXG4gIH1cblxuXG5cblxufVxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogNTB2aDtcbiAgaGVpZ2h0OiA1MHZoO1xuICBib3JkZXItcmFkaXVzOiA1MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbmBcblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDoxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBSb2xsQnV0dG9uXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9idXR0b24uanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBNENBOzs7Ozs7QUFuQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUFBO0FBR0E7QUFIQTtBQUFBO0FBSUE7O0FBREE7QUFRQTtBQVJBO0FBQ0E7Ozs7QUFVQTtBQUFBO0FBR0E7QUFDQTs7Ozs7QUFDQTtBQUFBOzs7Ozs7O0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9