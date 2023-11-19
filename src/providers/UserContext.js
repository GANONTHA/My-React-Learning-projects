import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);
const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "Bruno",
    email: "bganontha@gmail.com",
    address: "niamey-niger",
  });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export default UserProvider;
