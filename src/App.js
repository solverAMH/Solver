import './App.css';
import Nav from './navBar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import MyTable from './table';

import TE001 from './Text800/TE001';
import TE002 from './Text800/TE002';
import TE003 from './Text800/TE003';
import TE004 from './Text800/TE004';
import TE005 from './Text800/TE005';
import TE006 from './Text800/TE006';
import TE007 from './Text800/TE007';
import TE008 from './Text800/TE008';
import TE009 from './Text800/TE009';
import TE010 from './Text800/TE010';
import TE011 from './Text800/TE011';
import TE012 from './Text800/TE012';
import TE013 from './Text800/TE013';
import TE014 from './Text800/TE014';
import TE015 from './Text800/TE015';
import TE016 from './Text800/TE016';
import TE017 from './Text800/TE017';
import TE018 from './Text800/TE018';
import TE019 from './Text800/TE019';
import TE020 from './Text800/TE020';
import TE021 from './Text800/TE021';
import TE022 from './Text800/TE022';
import TE023 from './Text800/TE023';
import TE024 from './Text800/TE024';
import TE025 from './Text800/TE025';
import TE026 from './Text800/TE026';
import TE027 from './Text800/TE027';
import TE028 from './Text800/TE028';
import TE029 from './Text800/TE029';
import TE030 from './Text800/TE030';
import TE031 from './Text800/TE031';
import TE032 from './Text800/TE032';
import TE033 from './Text800/TE033';
import TE034 from './Text800/TE034';


import E001 from './Text900/E001';
import E002 from './Text900/E002';
import E003 from './Text900/E003';
import E004 from './Text900/E004';
import E005 from './Text900/E005';
import E006 from './Text900/E006';
import E007 from './Text900/E007';
import E008 from './Text900/E008';
import E009 from './Text900/E009';
import E010 from './Text900/E010';
import E011 from './Text900/E011';
import E012 from './Text900/E012';
import E013 from './Text900/E013';
import E014 from './Text900/E014';
import E015 from './Text900/E015';
import E016 from './Text900/E016';
import E017 from './Text900/E017';
import E018 from './Text900/E018';
import E019 from './Text900/E019';
import E020 from './Text900/E020';
import E021 from './Text900/E021';



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
