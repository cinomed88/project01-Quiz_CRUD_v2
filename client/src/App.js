import "./App.css";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import AdminPage from './components/views/AdminPage/AdminPage';
import StudentPage from './components/views/StudentPage/StudentPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import LogoutPage from './components/views/LogoutPage/LogoutPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import NavBar from './components/views/NavBar/NavBar';
import Auth from './hoc/auth';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/admin" component = {Auth(AdminPage, true)}/>
        <Route exact path="/student" component = {Auth(StudentPage, true)}/>  
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/logout" component={Auth(LogoutPage, true)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
      </Switch>
    </Router>
  );
}

export default App;
