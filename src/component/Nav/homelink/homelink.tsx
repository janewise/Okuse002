import React from "react";
import { NavLink } from "react-router-dom";

export function Homelink(){
    return(
        <>
         <ul className="homenav-bar">
      <li className="homenav-item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "linkactive homenav-link" : "homenav-link"
          }
        >
          <i className="bi bi-house-fill"></i>
        </NavLink>
        <p>House</p>
      </li>
      <li className="homenav-item">
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "linkactive homenav-link" : "homenav-link"
          }
        >
          <i className="bi bi-cart3"></i>
        </NavLink>
        <p>Shop</p>
      </li>
      <li className="homenav-item">
        <NavLink
          to="/topup"
          className={({ isActive }) =>
            isActive ? "linkactive homenav-link" : "homenav-link"
          }
        >
          <i className="bi bi-cash"></i>
        </NavLink>
        <p>Top Up</p>
      </li>
      <li className="homenav-item">
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive ? "linkactive homenav-link" : "homenav-link"
          }
        >
          <i className="bi bi-card-checklist"></i>
        </NavLink>
        <p>Wishlist</p>
      </li>
      <li className="homenav-item">
        <NavLink
          to="/more"
          className="homenav-link">
        <i className="bi bi-ui-checks-grid"></i>
        </NavLink>
        <p>More</p>
      </li>
    </ul>
    </>
    )
}