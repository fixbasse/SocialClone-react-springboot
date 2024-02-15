import { Route, Routes } from "react-router-dom"
import UnprotectedPage from "./pages/Unprotected/UnprotectedPage"
import HomePage from "./pages/Home/HomePage"
import Market from "./pages/Market"
import Group from "./pages/Group"
import Game from "./pages/Game"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <div>
      <Navbar />
      
      <div className="p-4 bg-primary-foreground h-screen">

      <Routes>
        <Route path="/prehome" element={<UnprotectedPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/market" element={<Market />} />
        <Route path="/group" element={<Group />} />
        <Route path="/game" element={<Game />} />
      </Routes>

      </div>
    </div>
  )
}

export default App
