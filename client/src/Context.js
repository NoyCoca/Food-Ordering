import { createContext, useContext } from "react";

export const Context = createContext();
export const Provider = Context.Provider;
export const UseMyContext = () => useContext(Context);