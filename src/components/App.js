import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { auth } from "fbase";
import { onAuthStateChanged } from "@firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setInit(true);
      if (user) {
        // signed in
        setIsLoggedIn(true);
      } else {
        // signed out
        setIsLoggedIn(false);
      }
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer>&copy;{new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
