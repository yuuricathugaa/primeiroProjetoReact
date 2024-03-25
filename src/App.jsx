import {Route} from 'react-router-dom';
import {BrowserRouter as Router, Routes} from 'react-router-dom'; 
import Home from './components/home/Home'; 
import Decricao from './components/descricao/Descricao'; 
import Sobre from './components/Sobre/Sobre'; 

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Descricao" element={<Decricao />} />
    </Routes>
  </Router>
  );
}
export default App;