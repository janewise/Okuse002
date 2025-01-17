// import React from "react";
// import logo from "./okuse_Logo.png";
// import { Navlink } from "./navlinks/navlinks";
// import "./Nav.css"


// export function Nav() {
//   return (
//     <nav className="navbar fixed-top">
//     <div className="container">
//       <a className="navbar-brand" href="#">
//       <img src={logo} alt="logo" width={70} height={40}/>
//       </a>


// <ul className="homenav-bar">
// <li className="homenav-item">  <a className="homenav-link" href="#">Home</a></li>
// <li className="homenav-item">  <a className="homenav-link" href="#">Shop</a></li>
// <li className="homenav-item">  <a className="homenav-link" href="#">Top Up</a></li>
// <li className="homenav-item">  <a className="homenav-link" href="#">Wishlist</a></li>
// <li className="homenav-item"> </li>
// </ul>


//       <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="offcanvas offcanvas-end " tab-Index="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
//         <div className="offcanvas-header">
//         <img src={logo} alt="logo" width={60} height={30}/>
//           <button type="button" className="btn-close btn-close-red" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         {/*offcanvas navlinks */}
//         <Navlink />
//       </div>
//     </div>
//   </nav>
//   );
// }
import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active state
import logo from "./okuse_Logo.png";
import { Navlink } from "./navlinks/navlinks";
import "./Nav.css";

export function Nav() {
  return (
    <header className="navbar">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="logo" width={70} height={40} />
        </NavLink>

        <ul className="homenav-bar">
          <li className="homenav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "linkactive homenav-link" : "homenav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="homenav-item">
            <NavLink to="/shop"   className={({ isActive }) =>
                isActive ? "linkactive homenav-link" : "homenav-link"
              }>
              Shop
            </NavLink>
          </li>
          <li className="homenav-item">
            <NavLink to="/topup"   className={({ isActive }) =>
                isActive ? "linkactive homenav-link" : "homenav-link"
              }>
              Top Up
            </NavLink>
          </li>
          <li className="homenav-item">
            <NavLink to="/wishlist"   className={({ isActive }) =>
                isActive ? "linkactive homenav-link" : "homenav-link"
              }>
              Wishlist
            </NavLink>
          </li>
        </ul>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tab-Index="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <img src={logo} alt="logo" width={60} height={30} />
            <button
              type="button"
              className="btn-close btn-close-red"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          {/* Offcanvas navlinks */}
          <Navlink />
        </div>
      </div>
    </header>
  );
}
