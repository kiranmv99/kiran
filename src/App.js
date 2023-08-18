import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
  <BrowserRouter>
    <body>
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/myvoot' element={<Home/>}></Route>
      <Route path='/tvshows' element={<Home/>}></Route>
      <Route path='/kids' element={<Home/>}></Route>
      <Route path='/movies' element={<Home/>}></Route>
      <Route path='/shots' element={<Home/>}></Route>
     </Routes>
    </div>
    <Footer/>
    </body>
    </BrowserRouter>
  );
}

export default App;
