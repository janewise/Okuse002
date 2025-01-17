// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Nav } from './component/Nav/Nav';
//page
import { Home } from './component/Home/home';
import { Shop } from './component/Shop/shop';
import { TopUp } from './component/TopUp/topup';
import { WhishList } from './component/Wishlist/wishlist';
//user profile
import { AuthProvider } from "./auth";
import Userprofile from "./component/logInandRegeister/userprofile";
import { SignIn } from "./component/logInandRegeister/Signin";
 import { SignUp } from "./component/logInandRegeister/Signup";

import './App.css';

function App() {
  const location = useLocation(); // Use the `useLocation` hook

  // Check if the current page is an authentication page
  const isAuthPage = ["/signin", "/signup", "/resetpass"].includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Nav />} {/* Show Nav only if not on SignIn or SignUp pages */}
      <Routes>
        <Route path="/profile" element={<Userprofile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/topup" element={<TopUp />} />
        <Route path="/wishlist" element={<WhishList />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
    <AuthProvider><App /></AuthProvider>
  </Router>
  );
}
