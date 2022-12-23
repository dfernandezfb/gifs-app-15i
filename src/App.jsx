import Layout from "./components/Layout/Layout"
import GifsPage from "./pages/GifsPage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import StickersPage from "./pages/StickersPage"
import ErrorPage from "./pages/ErrorPage"
import GamesPage from "./pages/GamesPage"
import PrivateRoute from "./routes/PrivateRoute"
import AdminPage from "./pages/AdminPage"
import MainNavbar from "./components/MainNavbar/MainNavbar"
import GamePage from "./pages/GamePage"
import AdminRoute from "./routes/AdminRoute"
import GifsProvider from "./context/GifsContext"

function App() {
  return(
    <Router>
      <MainNavbar/>
      <GifsProvider>
        <Routes>
          <Route path='/gifs' element={<GifsPage/>}/>
          <Route path='/stickers' element={<PrivateRoute><StickersPage/></PrivateRoute>}/>
          <Route path='/games' element={<GamesPage/>}/>
          <Route path='/games/:gameid' element={<GamePage/>}/>
          <Route path='/admin' element={<AdminRoute><AdminPage/></AdminRoute>}/>
          <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
      </GifsProvider>
    </Router>
  )
}

export default App

// Ynwg8SNkFbWkzBg1io7Lh8t7viv7Mg8K --> API KEY