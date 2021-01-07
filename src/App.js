
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateEmployeeComponents from './components/CreateEmployeeComponents';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent/>
            <div className="container">
              <Switch> 
                <Route path = "/" exact component = {ListEmployeeComponent}/>
                <Route path = "/employees" component = {ListEmployeeComponent}/>
                <Route path = "/add-employee" component = {CreateEmployeeComponents}/>
                <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}/>
                <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}/>
              </Switch>
            </div>
          <FooterComponent/>
        
      </Router>
    </div>
    
  );
}

export default App;
