import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" end element={<Home />} />
      </Routes>
    </>
  )
}

export default App
