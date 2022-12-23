import { useContext, useEffect } from "react";
import { Form } from "react-bootstrap";
import {axiosInstance} from "../../config/axios";
import { GifsContext } from "../../context/GifsContext";

const SearchBar = () => {
  const {setResults, search, setSearch, isSearching, setIsSearching} = useContext(GifsContext);

  const doSearch = async()=>{
    try {
      const {data} = await axiosInstance.get(`/gifs/search?api_key=${import.meta.env.VITE_APP_GIPHY_API_KEY}&q=${search}&limit=10`);
      setResults(data.data);
      setIsSearching(false);
    } catch (error) {
      console.log(error.message)
    }
  }
  const handleChange = (e)=>{
    setSearch(e.target.value);
    setIsSearching(true);
  }
  useEffect(()=>{
    if(isSearching){
      doSearch()
    }
},[search])
  return ( 
    <form>
      <input key='randomKey' type="text" value={search} className='form-control' onChange={handleChange}/>
    </form>
  );
}
 
export default SearchBar;