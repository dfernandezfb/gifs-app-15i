import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../config/axios";

const SearchBar = ({search, setSearch}) => {
  

  return ( 
    <form>
      <input type="text" value={search} className='form-control' onChange={(e)=>setSearch(e.target.value)}/>
    </form>
  );
}
 
export default SearchBar;