import Layout from "./components/Layout/Layout"
import GifsPage from "./pages/GifsPage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import StickersPage from "./pages/StickersPage"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/gifs' element={<GifsPage/>}/>
        <Route path='/stickers' element={<StickersPage/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
}

export default App

// Ynwg8SNkFbWkzBg1io7Lh8t7viv7Mg8K --> API KEY