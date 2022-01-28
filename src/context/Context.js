import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
import jwt_decode from "jwt-decode";

// INITIAL STATE
const INITIAL_STATE = {
  user: localStorage.getItem("userSBSToken")
    ? jwt_decode(localStorage.getItem("userSBSToken"))
    : null,
  isFetching: false,
  error: false,
  token: localStorage.getItem("userSBSToken") || "",
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  //   SETTING USER WHENEVER APP RELOADS OR STATE CHANGE BY GETTING DATA FROM LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("userSBSToken", state.token);
  }, [state.user, state.token]);
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        token: state.token,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
