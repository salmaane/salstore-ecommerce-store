import { createContext, useContext} from "react";

const FetchLinkContext = createContext({});

export function useFetchLinkContext() {
    return useContext(FetchLinkContext);
}

export function FetchLinkProvider({children}) {
  return (
    <FetchLinkContext.Provider value={{
        productsLink: "http://localhost:3000/products",
        bannersLink: "http://localhost:3000/banners",
    }}>
        {children}
    </FetchLinkContext.Provider>
  )
}

