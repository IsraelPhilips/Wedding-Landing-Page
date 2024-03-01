import logo from './logo.svg';
import './App.css';
import Navbar from './Homepage/navbar';
import Intro from './Homepage/intro';
import Story from './Homepage/story';


function App() {
  return (
    <div className="App">
      <div className='page'>
        <Navbar />
        <Intro />
        <Story />
      </div>
    </div>
  );
}

export default App;
