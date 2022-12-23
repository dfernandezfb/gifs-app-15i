import { createContext, useState } from "react";


export const GifsContext = createContext();

const GifsProvider = ({children}) => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  return ( 
    <GifsContext.Provider 
    value={{
      results,
      search,
      isSearching,
      setResults,
      setSearch,
      setIsSearching
    }}>
      {children}
    </GifsContext.Provider>
  );
}
 
export default GifsProvider;