import React from 'react';
import './App.css';
import Calender from './Calender'
import ConfirmContainer from './containers/ConfirmContainer'
import AppointmentsContainer from './containers/AppointmentsContainer'
import Home from './Home'
import { BrowserRouter as Router, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Router>
     <Route exact path="/" component={Home} />
     <Route exact path="/calender" component={Calender} />
     <Route exact path="/confirm" component={ConfirmContainer} />
     <Route exact path="/appointments" component={AppointmentsContainer} />
   </Router>
    </div>
  );
}

export default App;
