import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={logo} alt="Logo" width="100px" className="me-3 logo-img" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-modify" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-modify">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/destination" className="nav-link text-modify">Destination</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ai" className="nav-link text-modify">AI</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link text-modify">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link text-modify">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
