import './App.css';
import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';

function App() {
  return (
    <div className='h-screen px-4 py-8 font-sora text-white
      bg-gradient-to-b from-purple-900 to-purple-700
      overflow-y-auto overflow-x-hidden
    '>
      <NavBar/>
      <Slogan/>
    </div>
  );
}

export default App;
