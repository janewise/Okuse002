// import React from "react";
// import "./navlinks.css"

// export function Navlink() {

//     return(
//         <div className="offcanvas-body">
//           <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//             <li className="nav-item">
//               <a className="nav-link" aria-current="page" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">topup</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">shop</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">wishlist</a>
//             </li>

//           </ul>
//           {/*  */}
//         </div>
//     )

// }

import React,{useEffect, useState} from "react";
import { Link,NavLink,useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import "./navlinks.css";


export function Navlink() {

  const [user, setUser] = useState<User | null>(null); // Use the imported User type
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for changes to the user's sign-in state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);


//LogOut
const handleLogout = async () => {
  await signOut(auth);
  navigate("/");
};

  return (
    <div className="offcanvas-body">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li>
        {user ? (
              <NavLink to="/profile">
                <button className="profile-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
                </button>
              </NavLink>
            ) : (<></>)}
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/topup" className="nav-link">
            Top Up
          </a>
        </li>
        <li className="nav-item">
          <a href="/shop" className="nav-link">
            Shop
          </a>{" "}
        </li>
        <li className="nav-item">
          <a href="/wishlist" className="nav-link">
            Wishlist
          </a>
        </li>
        <li>
        {user ? (
               <button className="btn btn-logout" onClick={handleLogout}>
               Logout
             </button>
            ) : (
              <a href="/signin">
                <button className="Login">Login</button>
              </a>
            )}
        </li>
      </ul>
    </div>
  );
}
