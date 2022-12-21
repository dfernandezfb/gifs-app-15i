import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";

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