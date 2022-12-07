import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({children}) => {
  //children
  return ( 
    <>
    <Header/>
      {children}
    <Footer/>
    </>
  );
}
 
export default Layout;