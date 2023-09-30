import { createContext, useEffect } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  TwitterAuthProvider,
  FacebookAuthProvider,
  signInWithPhoneNumber,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

// all provider
const googleProvider = new GoogleAuthProvider(); 
const twitterProvider = new TwitterAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// otp verifyer
const appVerifier = window.recaptchaVerifier;

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googlesignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const twittersignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  const facebooksignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const phoneNumberSignIn = (phoneNumber) => {
    setLoading(true);
    return signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    googlesignIn,
    logOut,
    twittersignIn,
    facebooksignIn,
    phoneNumberSignIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
