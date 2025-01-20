

// import React,{useState}from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import { Nav } from './component/Nav/Nav';
// //page
// import { Home } from './component/Home/home';
// import { Shop } from './component/Shop/shop';
// import { TopUp } from './component/TopUp/topup';
// import { WhishList } from './component/Wishlist/wishlist';
// //user profile
// import { AuthProvider } from "./firebase/auth";
// import Userprofile from "./component/logInandRegister/user/userprofile";
// import { LogIn } from "./component/logInandRegister/Login";
//  import { SignUp } from "./component/logInandRegister/Signup";
//  import { Resetpass } from './component/logInandRegister/resetpassword';
// import './App.css';


// function App() {
//   const location = useLocation(); // Use the `useLocation` hook

//   // Check if the current page is an authentication page
//   const isAuthPage = ["/signin", "/signup", "/resetpass"].includes(location.pathname);
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <>
//       {!isAuthPage && <Nav theme={theme} toggleTheme={toggleTheme} /> } {/* Show Nav only if not on SignIn or SignUp pages */}
//       <Routes>
//         <Route path="/profile" element={<Userprofile />} />
//         <Route path="/signin" element={<LogIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/resetpass" element={<Resetpass />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/topup" element={<TopUp />} />
//         <Route path="/wishlist" element={<WhishList />} />
//       </Routes>
//     </>
//   );
// }

// export default function AppWrapper() {
//   return (
//     <Router>
//     <AuthProvider><App /></AuthProvider>
//   </Router>
//   );
// }


import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./component/Nav/Nav";
// Pages
import { Home } from "./component/Home/home";
import { Shop } from "./component/Shop/shop";
import { TopUp } from "./component/TopUp/topup";
import { WhishList } from "./component/Wishlist/wishlist";
import { AuthProvider } from "./firebase/auth";
import Userprofile from "./component/logInandRegister/user/userprofile";
import { LogIn } from "./component/logInandRegister/Login";
import { SignUp } from "./component/logInandRegister/Signup";
import { Resetpass } from "./component/logInandRegister/resetpassword";
import "./App.css";

function App() {
  const location = useLocation();
  const isAuthPage = ["/signin", "/signup", "/resetpass"].includes(location.pathname);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      {!isAuthPage && <Nav />}
      <Routes>
        <Route path="/profile" element={<Userprofile />} />
        <Route path="/signin" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpass" element={<Resetpass />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/topup" element={<TopUp />} />
        <Route path="/wishlist" element={<WhishList />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
}
