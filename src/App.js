import './App.css';
import Home from './Components/Home';
import Menu from './Components/Menu'
import Aspirations from './Components/Aspirations'
import Proyects from './Components/Proyects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
     <Menu></Menu>
     <Home></Home>
     <Aspirations></Aspirations>
     <Proyects></Proyects> 
     <Contact></Contact>
    </div>
  );
}

export default App;
