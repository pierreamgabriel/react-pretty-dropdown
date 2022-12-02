"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
<<<<<<< HEAD
exports.Dropdown = Dropdown;
=======
exports["default"] = Dropdown;
>>>>>>> parent of 06de896 (build ts)

var _react = _interopRequireDefault(require("react"));

require("bootstrap/dist/css/bootstrap.min.css");

require("@popperjs/core");

require("bootstrap");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

require("./Dropdown.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Dropdown(props) {
  var _React$useState = _react["default"].useState({
    status: false,
    id: ""
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  _react["default"].useEffect(function () {
    var changeProps = document.querySelector(".react-pretty-dropdown");

    if (active.status) {
      document.getElementById(active.id).classList.add("react-pretty-dropdown-active");
    }

    if (props.hoverBackground) {
      changeProps.style.setProperty("--hover-bg", props.hoverBackground);
    }

    if (props.hoverFontColor) {
      changeProps.style.setProperty("--hover-font-color", props.hoverFontColor);
    }

    if (props.buttonBorderOnHover) {
      changeProps.style.setProperty("--button-hover-border", props.buttonBorderOnHover);
    }

    if (props.buttonBorderOnFocus) {
      changeProps.style.setProperty("--button-focus-border", props.buttonBorderOnFocus);
    }

    if (props.activeBackground) {
      changeProps.style.setProperty("--active-bg", props.activeBackground);
    }

    if (props.activeFontColor) {
      changeProps.style.setProperty("--active-font-color", props.activeFontColor);
    }

    if (props.width) {
      changeProps.style.setProperty("--dropdown-width", props.width);
    }

    if (props.menuPosition) {
      changeProps.style.setProperty("--menu-position", props.menuPosition);
    }
  }, [active.status, active.id, props.hoverBackground, props.hoverFontColor, props.activeBackground, props.activeFontColor, props.width, props.buttonBorderOnHover, props.menuPosition]);

  var activeMenu = function activeMenu(index) {
    var id = "react-pretty-dropdown".concat(index);

    if (active.status) {
      document.getElementById(active.id).classList.remove("react-pretty-dropdown-active");
    }

    setActive({
      status: true,
      id: id
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown react-pretty-dropdown"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-secondary react-pretty-dropdown-button ".concat(!props.buttonFloat ? "" : props.buttonFloat),
    type: "button",
    id: "dropdownMenuButton1",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false",
    style: {
      backgroundColor: !props.background ? "#2c2f3a" : props.background,
      borderRadius: 0,
      border: "none",
      boxShadow: 'none',
      width: !props.buttonWidth ? "30px" : props.buttonWidth
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: props.icon == "ellipsis-vertical" && _freeSolidSvgIcons.faEllipsisVertical || props.icon == "ellipsis" && _freeSolidSvgIcons.faEllipsis || props.icon == "bars" && _freeSolidSvgIcons.faBars || props.icon == "caret-down" && _freeSolidSvgIcons.faCaretDown,
    color: !props.textColor ? "#ffffff" : props.textColor,
    style: {
      fontSize: !props.iconSize ? "1.5rem" : props.iconSize
    }
  })), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "dropdown-menu react-pretty-dropdown-list",
    "aria-labelledby": "dropdownMenuButton1",
    style: {
      backgroundColor: !props.background ? "#2c2f3a" : props.background,
      border: "none",
      borderRadius: 0,
      padding: 0,
      width: "100%",
      fontSize: !props.fontSize ? "1.3rem" : props.fontSize,
      color: !props.textColor ? "#ffffff" : props.textColor
    }
  }, _react["default"].Children.map(props.children, function (child, index) {
    var element = /*#__PURE__*/_react["default"].cloneElement(child, {
      className: 'dropdown-item react-pretty-dropdown-item'
    });

    return /*#__PURE__*/_react["default"].createElement("li", {
      id: "react-pretty-dropdown".concat(index),
      onClick: function onClick() {
        return activeMenu(index);
      }
    }, element);
  })));
}