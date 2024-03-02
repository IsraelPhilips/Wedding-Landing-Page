import logo from './logo.svg';
import './App.css';
import Navbar from './Homepage/navbar';
import Intro from './Homepage/intro';
import Story from './Homepage/story';
import Gallery from './Homepage/gallery';
import Give from './Homepage/give';
import Location from './Homepage/location';


function App() {
  return (
    <div className="App">
      <div className='page'>
        <Navbar />
        <Intro />
        <Story />
        <Gallery />
        <Location />
        <Give />
      </div>
    </div>
  );
}

export default App;
