import { Route, Routes } from "react-router-dom"
import UnprotectedPage from "./pages/Unprotected/UnprotectedPage"

function App() {

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<UnprotectedPage />} />
      </Routes>

    </div>
  )
}

export default App
