import Navbar from './Navbar';
import About from './pages/About';
import Books from './pages/Books';
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
