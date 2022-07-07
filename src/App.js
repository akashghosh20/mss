import './App.css';
import Navbar from './Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import LogIn from './Login/LogIn';
import Teachers from './Teachers/Teachers';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import About from './About/About';
import Result from './Results/Result';
import SignUp from './Login/SignUp';
import Result7 from './Results/Results7/Result7';

function App() {
  return (
    <div className="App max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/results" element={<Result/>}/>
        <Route path="/results7" element={<Result7/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
