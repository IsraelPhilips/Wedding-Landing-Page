import logo from './logo.svg';
import './App.css';
import Navbar from './Homepage/navbar';
import Intro from './Homepage/intro';


function App() {
  return (
    <div className="App">
      <div className='page'>
        <Navbar />
        <Intro />
      </div>
    </div>
  );
}

export default App;
