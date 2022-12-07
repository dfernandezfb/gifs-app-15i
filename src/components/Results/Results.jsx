import { Spinner } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import useGet from "../../hooks/useGet";
import GifCard from "../GifCard/GifCard";

const Results = ({results}) => {
  const [trending, loading] = useGet('/gifs/trending?api_key=' + import.meta.env.VITE_APP_GIPHY_API_KEY)
  return (
    <>
    {loading? 
    <div className="centered-object">
      <Spinner animation="border"/>
    </div>
    :
    results.length!==0?
    <div className="d-flex flex-wrap">
      {
        results.map((result,index)=> <GifCard key={index} image={result.images.original.url} title={result.title}/>)
      }
    </div> 
    : 
    <div className="d-flex flex-wrap">
      {
        trending.map((result,index)=> <GifCard key={index} image={result.images.original.url} title={result.title}/>)
      }
    </div> 
    }
    </> 
  );
}
 
export default Results;