import './App.css';
import Footer from './config/componets/js/Footer';
import Headers from './config/componets/js/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './config/pages/js/Home';
import Contacts from './config/pages/js/Contacts';
import AboutMe from './config/pages/js/AboutMe';
import Location from './config/pages/js/Location';


function App() {
  return (
    <div className="App">
      

      
      <Router>
      <Headers/>  

      
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/contatos" element={<Contacts/>}/>
            <Route exact path="/sobremin" element={<AboutMe/>}/>
            <Route exact path="/local" element={<Location/>}/>
          </Routes>

      </Router>

      
       
        
      


      <Footer/>
      
    </div>
  );
}

export default App;
