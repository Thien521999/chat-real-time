// libs
import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
// others
import { auth } from "../lib/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const history = useHistory();

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // kiem tra dang nhap hay chua
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      console.log({ user });
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        setIsLoading(false);
        history.push("/");
      }
      history.push("/");
    });

    return () => {
      unsubscribed();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  const authContextData = { user };

  return (
    <AuthContext.Provider value={authContextData}>
      {!isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
