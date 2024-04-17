import {BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import MenuBar from "./components/MenuBar"
import Scheduling from './components/scheduling';

const App = () => {
  return (
    <>
    <Router>
    <div className="flex gap-4 sm:gap-0  h-screen">
    <MenuBar/>
    <div className="flex-grow">
    <Routes>
    <Route path="/scheduling" element={<Scheduling />} /> 
    </Routes>
    </div>
    </div>
    </Router>
    </>
  )
}

export default App
