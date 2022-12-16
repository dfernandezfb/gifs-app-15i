import { useNavigate, useParams } from "react-router-dom";

const GamePage = () => {
  const params = useParams();
  console.log(params);

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/gifs')
  }

  return ( 
    <>
      <h1>{params.gameid}</h1>
      <button onClick={handleClick}> Ir a la página de gifs</button>
    </>
  );
}
export default GamePage;