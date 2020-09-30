import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {Dashboard, Error, Login} from './Pages'; 
import {} from './Components'



function App() {
  return (
    <>
    
    <Router>
      <Switch>


        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path="*" component={Error} />

        
      </Switch>
    </Router>
    </>
  );
}

export default App;
