import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@popperjs/core";
import "bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faEllipsis, faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Dropdown.css';

export function Dropdown(props) {

    const [active, setActive] = React.useState({ status: false, id: "" });

    React.useEffect(() => {
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
    }

    return (
        <div className="dropdown react-pretty-dropdown">
            <button className={`btn btn-secondary react-pretty-dropdown-button ${!props.buttonFloat ? "" : props.buttonFloat}`}
                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                style={{
                    backgroundColor: !props.background ? "#2c2f3a" : props.background,
                    borderRadius: 0,
                    border: "none",
                    boxShadow: 'none',
                    width: !props.buttonWidth ? "30px" : props.buttonWidth
                }}>
                <FontAwesomeIcon icon={
                    (props.icon == "ellipsis-vertical") && faEllipsisVertical ||
                    (props.icon == "ellipsis") && faEllipsis ||
                    (props.icon == "bars") && faBars ||
                    (props.icon == "caret-down") && faCaretDown}
                    color={!props.textColor ? "#ffffff" : props.textColor}
                    style={{ fontSize: !props.iconSize ? "1.5rem" : props.iconSize }} />
            </button>
            <ul className="dropdown-menu react-pretty-dropdown-list" aria-labelledby="dropdownMenuButton1" style={{
                backgroundColor: !props.background ? "#2c2f3a" : props.background,
                border: "none",
                borderRadius: 0,
                padding: 0,
                width: "100%",
                fontSize: !props.fontSize ? "1.3rem" : props.fontSize,
                color: !props.textColor ? "#ffffff" : props.textColor
            }}
            >
                {React.Children.map(props.children, (child, index) => {
                    const element = React.cloneElement(child, {
                        className: 'dropdown-item react-pretty-dropdown-item'
                    });
                    return (
                        <li id={`react-pretty-dropdown${index}`} onClick={() => activeMenu(index)}>{element}</li>
                    );
                })}
            </ul>
        </div>
    );

}