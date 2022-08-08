import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListner , createUserDocumentFromAuth } from "../components/routes/utils/firebase.utils";

// actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUSer: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUSer] = useState(null);
  const value = { currentUser, setCurrentUSer };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
        if(user){
          createUserDocumentFromAuth(user);
        }
      setCurrentUSer(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
