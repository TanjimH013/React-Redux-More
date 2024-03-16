import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/usersReducer";

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
