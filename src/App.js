import './App.css';
import Home from './Home/Home';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className="App max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
