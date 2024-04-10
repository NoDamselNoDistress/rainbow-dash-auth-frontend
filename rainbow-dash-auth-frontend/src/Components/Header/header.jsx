import { LuMoon, LuUserX } from "react-icons/lu";
import "./header.css"

export default function Header() {

    function openDropDown(event, id) {
        const overlay = document.getElementById("overlay-trigger");
        const dropdown = document.getElementById(id);
        dropdown.setAttribute("data-show", "true");
        overlay.setAttribute("data-show", "true");
        overlay.setAttribute("data-id", id);
    }

    function closeDropdown(event) {
        const dropdown = document.getElementById(
            event.target.getAttribute("data-id"), 3
        );
        dropdown.setAttribute("data-show", "false");
        event.target.setAttribute("data-show", "false");
    }

    return (
        <header className="header-root">
            <a href="/">
                <img
                    id="logo"
                    alt="BBSMT Logo"
                    src="/bbsmt_Logo.png"
                    width="128"
                    height="51"
                />
            </a>
            <div>
                <div>
                    <button
                        id="header-dark-mode"
                        onClick={(e) => openDropDown(e, "header-dark-mode-dropdown")}
                    >
                        <LuMoon size={24} />
                    </button>
                    <div
                        className="dropdown-content"
                        id="header-dark-mode-dropdown"
                        data-show="false"
                    >
                        <button>Light</button>
                        <button>Dark</button>
                    </div>
                </div>
                <div>
                    <button
                        id="header-user"
                        onClick={(e) => openDropDown(e, "header-user-dropdown")}
                    >
                        <LuUserX size={24} />
                    </button>
                    <div
                        className="dropdown-content"
                        id="header-user-dropdown"
                        data-show="false"
                    >
                        <button><a href="/users">Users</a></button>
                        <button id="log-out"><b>Log out</b></button>
                    </div>
                </div>
            </div>
            <div
                id="overlay-trigger"
                data-show="false"
                onClick={closeDropdown}
            ></div>
        </header>
    )
}