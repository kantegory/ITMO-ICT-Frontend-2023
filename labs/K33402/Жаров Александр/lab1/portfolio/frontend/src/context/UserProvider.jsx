import { createContext, useState } from "react";

const UserContext = createContext({
  user: {},
  setUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
