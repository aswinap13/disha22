import './App.css';
import Marry from './Marry';
import Navbare from './components/Navbare';
import HashLoader from "react-spinners/HashLoader";
import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Score from './Score';
import LiveResult from './LiveResult'
import Schedule from './Schedule';
import Team from './Team'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{setLoading(true);
    setTimeout(()=>{setLoading(false)},4000)
  },[])

  return (
    <div className="App">

HI
      {/* <Router>
        <Routes>
          <Route path="/" element={
              loading ?
              <div className='appl'>
                <HashLoader 
                color={'#FFFFFF'} 
                loading={loading} 
                size={100} />
              </div>
              :
              <>
                <Marry />
                <Navbare/>
              </>}
          />
          <Route path="/score" element={<Score />} />
          <Route path="/results" element={<LiveResult />} />
          <Route path="/team" element={<Team />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Router>
       */}
    </div>
  )

}

export default App;
