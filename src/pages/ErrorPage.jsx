import { Link, useLocation } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();
  console.log(location)
  return ( <h1>Error 404 Not Found. <Link to="/gifs">Volver a la página principal</Link></h1> );
}
 
export default ErrorPage;