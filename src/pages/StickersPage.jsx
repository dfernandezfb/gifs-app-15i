import { Spinner } from "react-bootstrap";
import GifCard from "../components/GifCard/GifCard";
import useGet from "../hooks/useGet";

const StickersPage = () => {
  const [stickers, loading] = useGet('/stickers/trending?api_key='+ import.meta.env.VITE_APP_GIPHY_API_KEY);
  return ( 
    <>
    {
      loading?
      <Spinner/>
      :
      stickers.map((sticker,index) => <GifCard key={index} image={sticker.images.original.url} title={sticker.title}/>)
    }
    </>
  );
}
 
export default StickersPage;