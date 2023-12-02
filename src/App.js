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


import M001 from './Text1000/M001';
import M002 from './Text1000/M002';
import M003 from './Text1000/M003';
import M004 from './Text1000/M004';
import M005 from './Text1000/M005';
import M006 from './Text1000/M006';
import M007 from './Text1000/M007';
import M008 from './Text1000/M008';
import M009 from './Text1000/M009';
import M010 from './Text1000/M010';
import M011 from './Text1000/M011';
import M013 from './Text1000/M013';
import M014 from './Text1000/M014';
import M015 from './Text1000/M015';


import H001 from './Text3100/H001';
import H002 from './Text3100/H002';
import H003 from './Text3100/H003';
import H004 from './Text3100/H004';
import H005 from './Text3100/H005';


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
      <Route path='/TE007'Component={TE007}></Route>
      <Route path='/TE008'Component={TE008}></Route>
      <Route path='/TE009'Component={TE009}></Route>
      <Route path='/TE010'Component={TE010}></Route>
      <Route path='/TE011'Component={TE011}></Route>
      <Route path='/TE012'Component={TE012}></Route>
      <Route path='/TE013'Component={TE013}></Route>
      <Route path='/TE014'Component={TE014}></Route>
      <Route path='/TE015'Component={TE015}></Route>
      <Route path='/TE016'Component={TE016}></Route>
      <Route path='/TE017'Component={TE017}></Route>
      <Route path='/TE018'Component={TE018}></Route>
      <Route path='/TE019'Component={TE019}></Route>
      <Route path='/TE020'Component={TE020}></Route>
      <Route path='/TE021'Component={TE021}></Route>
      <Route path='/TE022'Component={TE022}></Route>
      <Route path='/TE023'Component={TE023}></Route>
      <Route path='/TE024'Component={TE024}></Route>
      <Route path='/TE025'Component={TE025}></Route>
      <Route path='/TE026'Component={TE026}></Route>
      <Route path='/TE027'Component={TE027}></Route>
      <Route path='/TE028'Component={TE028}></Route>
      <Route path='/TE029'Component={TE029}></Route>
      <Route path='/TE030'Component={TE030}></Route>
      <Route path='/TE031'Component={TE031}></Route>
      <Route path='/TE032'Component={TE032}></Route>
      <Route path='/TE033'Component={TE033}></Route>
      <Route path='/TE034'Component={TE034}></Route>


      <Route path='/E001'Component={E001}></Route>


      <Route path='/M001'Component={M001}></Route>

      <Route path='/H001'Component={H001}></Route>

    </Routes>
    </Router>
    
    </div>
  );
}

export default App;
