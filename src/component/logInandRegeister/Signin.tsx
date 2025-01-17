
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { ref, get } from "firebase/database";
import { getDatabase } from "firebase/database";
import "./Signin.css";
import Login_title from "./imguser/login.png"

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const db = getDatabase();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        setError("Please verify your email before signing in.");
        return;
      }

      const userRef = ref(db, "users/" + user.uid);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        navigate("/");
      } else {
        setError("User data not found.");
      }
    } catch (error) {
      setError("Wrong Password or Email");
    }
  };

  return (
    <div className="SignIn-main">
      <div className="signIn-container">
        <a href="/" className="cancel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </a>
        <div className="Login_title"><img src={Login_title} alt="logo" width={150} height={50} /></div>
        
        <form onSubmit={handleSubmit}>
          <div className="In-form-group">
            <input
              type="email"
              id="email"
              className="In-form-control"
              placeholder="Email or Ph no"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="In-form-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="In-form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="show-password">
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />{" "}
             Show Password 
            </label>
          </div>
          {error && <p className="error" style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="btn  signinbtn">
            Sign In
          </button>
        </form>
        <p className="Signupmalar">
          Don't have an account? <NavLink to="/signup" className={"Signupmar"}>Sign Up</NavLink>
        </p>
        <p className="Signupmalar">
          Forget Password? <NavLink to="/resetpass" className={"Signupmar"}>Reset Password</NavLink>
        </p>
      </div>
    </div>
  );
}

