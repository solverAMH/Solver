import './App.css';
import Nav from './navBar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import MyTable from './table';
import TE001 from './Problem Text/TE001';
import TE002 from './Problem Text/TE002';
import TE003 from './Problem Text/TE003';
import TE004 from './Problem Text/TE004';
import TE005 from './Problem Text/TE005';
import TE006 from './Problem Text/TE006';
import Footer from './Footer';


function App() {
  return (
    <div>
    <Nav/>
    <Router>
    <Routes>
   
      <Route path='/'Component={MyTable}></Route>
      <Route path='/TE001'Component={TE001}></Route>
      <Route path='/TE002'Component={TE002}></Route>
      <Route path='/TE003'Component={TE003}></Route>
      <Route path='/TE004'Component={TE004}></Route>
      <Route path='/TE005'Component={TE005}></Route>
      <Route path='/TE006'Component={TE006}></Route>
    </Routes>
    </Router>
    
    </div>
  );
}

export default App;
