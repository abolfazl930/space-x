import React, { useReducer } from "react";
import { modalReducer, initialState } from "../reducers/modal-reducer";

export const ModalContext = React.createContext();
export const ModalDispatcherContext = React.createContext();

function ModalProvider({ children }) {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  // console.log("state", state);
  return (
    <ModalContext.Provider value={state}>
      <ModalDispatcherContext.Provider value={dispatch}>
        {children}
      </ModalDispatcherContext.Provider>
    </ModalContext.Provider>
  );
}

export default ModalProvider;
