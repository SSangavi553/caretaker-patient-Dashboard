import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoleSelection from './components/RoleSelection';
import PatientDashboard from './components/PatientDashboard';
import CaretakerDashboard from './components/CaretakerDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RoleSelection} /> 
        <Route path="/patient" component={PatientDashboard} />
        <Route path="/caretaker" component={CaretakerDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
