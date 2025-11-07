import  { useState,useEffect} from 'react';
import { IntroSection } from './componets/intro';
import { MemoriesSection } from './componets/memoriese';
import { Route,Routes } from 'react-router';
import { FirstMemoriese } from './pages/firstMemories';
import { SecondMemoriese } from './pages/secondMemories';
import { ThirdMemoriese } from './pages/thirdMemorise';
import {Supriese} from './pages/supriese';
import { useLocation } from 'react-router-dom';

 function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [currentSection, setCurrentSection] = useState('intro');
 
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
      <ScrollToTop/>
      <Routes>
        
      {currentSection === 'intro' && (
        <Route path='/' element={<IntroSection onScrollDown={() => setCurrentSection('memories')} />}/>
      )}
      {currentSection === 'memories' && (
        <Route path='/memory' element={<MemoriesSection />}/>
      )}
      <Route path='/firstMemoriese'element={<FirstMemoriese/>}/>
      <Route path='/secondtMemoriese'element={<SecondMemoriese/>}/>
      <Route path='/thirdMemoriese'element={<ThirdMemoriese/>}/>
      <Route path='/supriese'element={<Supriese/>}/>
      </Routes>
    </div>
  );
}







export default App;