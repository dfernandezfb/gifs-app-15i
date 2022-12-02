import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../config/axios";

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([])
  const doSearch = async()=>{
    try {
      const {data} = await axiosInstance.get(`/search?api_key=${import.meta.env.VITE_APP_GIPHY_API_KEY}&q=${search}`);
      setResults(data.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    doSearch()
  },[search])
  console.log(results)
  return ( 
    <form>
      <input type="text" value={search} className='form-control' onChange={(e)=>setSearch(e.target.value)}/>
    </form>
  );
}
 
export default SearchBar;