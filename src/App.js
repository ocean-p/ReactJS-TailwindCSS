import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    };
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  useEffect(() => {
    if(windowSize.width < 500){
      setIsMobile(true)
    }
    else{
      setIsMobile(false)
    }
    console.log(windowSize)
  }, [windowSize])

  return (
    <div className='h-screen px-4 py-8 font-sora text-white
      bg-gradient-to-b from-purple-900 to-purple-700
      overflow-y-auto overflow-x-hidden
    '>
      <NavBar isMobile={isMobile}/>
      <Slogan/>
      <Content/>
    </div>
  );
}

export default App;
