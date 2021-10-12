import { auth } from "fbase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
} from "@firebase/auth";
import React, { useState } from "react";
import AuthForm from "components/AuthForm";

const Auth = () => {
  const [error, setError] = useState("");
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        const {
          customData: { email },
        } = error;
        const methods = await fetchSignInMethodsForEmail(auth, email);
        setError(`${email} is already ${methods[0]} account`);
      }
    }
  };

  return (
    <div>
      <AuthForm />
      <div>
        {error}
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;
