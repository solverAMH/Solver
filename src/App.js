import './App.css';
import Nav from './navBar';
import ProblameCard from './card1';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import MyTable from './table';
import waterMelon from './Problem Text/waterMelon';

function App() {
  return (
    <div>
    <Nav/>
  
    <Router>
    <Routes>
   
      <Route path='/'Component={MyTable}></Route>
      <Route path='/WaterMelon'Component={waterMelon}></Route>
      

    </Routes>
    </Router>
     
    </div>
  );
}

export default App;
