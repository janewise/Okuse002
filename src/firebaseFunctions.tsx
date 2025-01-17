
import { db } from "./firebase"; // Import the Realtime Database instance
import { ref, set, get } from "firebase/database"; // Import necessary functions from Firebase Realtime Database
import { auth } from "./firebase"; // Import the auth instance
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";



// Sign up function
export async function signUpUser(email: string, password: string, UsernameId: string) {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Send a verification email
    await sendEmailVerification(user);

    // Save user data to the Realtime Database
    await set(ref(db, 'users/' + user.uid), {
      emailOrPh: email,
      UsernameId: UsernameId,
      createdAt: new Date().toISOString()
    });

    // Return user object upon success
    return {
      user: user,
      message: "Sign-up successful! Verification email sent."
    };
  } catch (error: any) {
    // Handle specific Firebase error codes
    let errorMessage = "Sign-up failed. Please try again.";
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = "This email is already in use.";
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = "Invalid email address.";
    } else if (error.code === 'auth/weak-password') {
      errorMessage = "Password should be at least 6 characters.";
    }

    throw new Error(errorMessage);
  }
}

// Add this to avoid the isolatedModules error
export {};

