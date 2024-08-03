import './App.css'
import MainPage from "./pages/mainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
