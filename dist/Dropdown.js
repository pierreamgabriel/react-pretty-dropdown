"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const react_1 = __importDefault(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
require("@popperjs/core");
require("bootstrap");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
require("./Dropdown.css");
function Dropdown(props) {
    const [active, setActive] = react_1.default.useState({ status: false, id: "" });
    react_1.default.useEffect(() => {
        const changeProps = document.querySelector(".react-pretty-dropdown");
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
    }, [
        active.status,
        active.id,
        props.hoverBackground,
        props.hoverFontColor,
        props.activeBackground,
        props.activeFontColor,
        props.width,
        props.buttonBorderOnHover,
        props.menuPosition
    ]);
    const activeMenu = (index) => {
        const id = `react-pretty-dropdown${index}`;
        if (active.status) {
            document.getElementById(active.id).classList.remove("react-pretty-dropdown-active");
        }
        setActive({ status: true, id: id });
    };
    return (<div className="dropdown react-pretty-dropdown">
            <button className={`btn btn-secondary react-pretty-dropdown-button ${!props.buttonFloat ? "" : props.buttonFloat}`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{
            backgroundColor: !props.background ? "#2c2f3a" : props.background,
            borderRadius: 0,
            border: "none",
            boxShadow: 'none',
            width: !props.buttonWidth ? "30px" : props.buttonWidth
        }}>
                <react_fontawesome_1.FontAwesomeIcon icon={(props.icon == "ellipsis-vertical") && free_solid_svg_icons_1.faEllipsisVertical ||
            (props.icon == "ellipsis") && free_solid_svg_icons_1.faEllipsis ||
            (props.icon == "bars") && free_solid_svg_icons_1.faBars ||
            (props.icon == "caret-down") && free_solid_svg_icons_1.faCaretDown} color={!props.textColor ? "#ffffff" : props.textColor} style={{ fontSize: !props.iconSize ? "1.5rem" : props.iconSize }}/>
            </button>
            <ul className="dropdown-menu react-pretty-dropdown-list" aria-labelledby="dropdownMenuButton1" style={{
            backgroundColor: !props.background ? "#2c2f3a" : props.background,
            border: "none",
            borderRadius: 0,
            padding: 0,
            width: "100%",
            fontSize: !props.fontSize ? "1.3rem" : props.fontSize,
            color: !props.textColor ? "#ffffff" : props.textColor
        }}>
                {react_1.default.Children.map(props.children, (child, index) => {
            const element = react_1.default.cloneElement(child, {
                className: 'dropdown-item react-pretty-dropdown-item'
            });
            return (<li id={`react-pretty-dropdown${index}`} onClick={() => activeMenu(index)}>{element}</li>);
        })}
            </ul>
        </div>);
}
exports.Dropdown = Dropdown;
