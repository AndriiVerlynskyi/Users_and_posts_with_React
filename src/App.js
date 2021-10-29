import './App.css';
import UserProfilePage from './Pages/UserProfilePage';
import UsersPage from './Pages/UsersPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserCard from './Components/UserCard';

function App() {
  
  return (
    <Router>
      <div className="main-container">
        <Switch>
          <Route exact path="/">
            <UsersPage/>
          </Route>
          <Route exact path="/user/:userId" component={UserProfilePage}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
