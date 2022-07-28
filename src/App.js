import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Footer from './Components/Headers/Footer/Footer';
import Nav from './Components/Headers/Nav';
import Home from './Pages/Home/Home';

function App() {
  return (
   <>
   <BrowserRouter>
  <Nav/>
    <Routes>
      <Route exect path='/' element={<Home/>}></Route>
    </Routes>
   <Footer /> 
   </BrowserRouter>
   </>
  );
}

export default App;
