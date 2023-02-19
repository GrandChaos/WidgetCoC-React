"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// npx babel src --out-file widgetCoC-compiled.js

var e = React.createElement;
var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);
  var _super = _createSuper(App);
  function App(props) {
    var _this;
    _classCallCheck(this, App);
    _this = _super.call(this, props);
    _this.state = {
      clicked: false,
      isOpen: false
    };
    return _this;
  }
  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.state.clicked && !this.state.isOpen) {
        return /*#__PURE__*/React.createElement("p", null, "\u0410 \u0432\u0441\u0451, \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442, \u043F\u043E\u0441\u043E\u0441\u0438");
      }
      if (this.state.clicked && this.state.isOpen) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "\u041D\u0443 \u0442\u044B \u0438 \u043F\u0438\u0434\u043E\u0440\u0430\u0441 \u043A\u043E\u043D\u0435\u0447\u043D\u043E"), /*#__PURE__*/React.createElement("p", null, "\u0413\u043E\u0432\u043E\u0440\u0438\u043B\u0438 \u0436\u0435 \u0442\u0435\u0431\u0435, \u043D\u0435 \u043D\u0430\u0436\u0438\u043C\u0430\u0439"), /*#__PURE__*/React.createElement("img", {
          src: "https://www.meme-arsenal.com/memes/7f548aa4c28f61d10ec2d9d3504ae5a3.jpg",
          alt: "\u0418\u0434\u0438 \u043D\u0430\u0445\u0443\u0439"
        }), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            _this2.setState({
              isOpen: false
            });
          }
        }, "\u041F\u043E\u0439\u0442\u0438 \u043D\u0430\u0445\u0443\u0439"), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            _this2.setState({
              isOpen: false
            });
          }
        }, "\u041F\u043E\u0439\u0442\u0438 \u043D\u0430\u0445\u0443\u0439 \u0441 \u043F\u043E\u0437\u043E\u0440\u043E\u043C"));
      }
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          _this2.setState({
            clicked: true,
            isOpen: true
          });
        }
      }, "\u0423\u043B\u044C\u0442\u0440\u0430 \u043A\u043D\u043E\u043F\u043A\u0430, \u043D\u0435 \u043D\u0430\u0436\u0438\u043C\u0430\u0439, \u0443\u0431\u044C\u0451\u0442"));
    }
  }]);
  return App;
}(React.Component);
var domContainer = document.querySelector('#widgetCoC-container');
var root = ReactDOM.createRoot(domContainer);
root.render(e(App));
