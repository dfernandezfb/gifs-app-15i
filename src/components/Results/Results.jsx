import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from "../../config/axios";
import GifCard from "../GifCard/GifCard";

const Results = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const getGifs = async()=>{
    try {
      const {data} = await axiosInstance.get('/trending?api_key='+import.meta.env.VITE_APP_GIPHY_API_KEY);
      setResults(data.data);
      setLoading(false);
    } catch (error) {
      toast.error("Error en la conexión")
    }
  }
  useEffect(()=>{
    getGifs();
  },[])
  return (
    <>
    {loading? 
    <div className="centered-object">
      <Spinner animation="border"/>
    </div>
    :
    <div className="d-flex flex-wrap">
      {
        results.map((result,index)=> <GifCard key={index} image={result.images.original.url} title={result.title}/>)
      }
    </div> 
    }
    <ToastContainer/>
    </> 
  );
}
 
export default Results;