import logo from "../../logo.svg";

import "./index.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>Harmonia React App</h1>
      <img src={logo} className="Header__logo" alt="logo" />
    </div>
  );
};

export default Header;
