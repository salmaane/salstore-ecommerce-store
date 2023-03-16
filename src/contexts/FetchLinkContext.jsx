import { createContext, useContext} from "react";

const FetchLinkContext = createContext({});

export function useFetchLinkContext() {
    return useContext(FetchLinkContext);
}

export function FetchLinkProvider({children}) {
  return (
    <FetchLinkContext.Provider value={{
        productsLink: import.meta.env.VITE_PRODUCTS_FETCH_LINK,
        bannersLink: import.meta.env.VITE_BANNERS_FETCH_LINK,
    }}>
        {children}
    </FetchLinkContext.Provider>
  )
}

