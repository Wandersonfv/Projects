import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './layout/js/Header';
import Navbar from './layout/js/Navbar';
import Home from './pages/js/Home'


function App() {
  return (
    <>
    
    
    <Router>
        

        <div className="App">
        <Navbar/>
        <div className='Content'>
        <Header/>
        <Routes>

         <Route exact path='/' element={<Home/>}/>

        </Routes>


        </div>
        

        </div>

        

      </Router>
      

      
    
    </>
    
  );
}

export default App;
