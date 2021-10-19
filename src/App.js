import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Login from './components/Login/Login/Login';
import Footer from './components/Shared/Footer/Footer';
import Departments from './components/Departments/Departments';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route path="/home"> <Home /> </Route>
            <Route path="/departments"> <Departments /> </Route>
            <PrivateRoute path="/aboutus"> <AboutUs /> </PrivateRoute>
            <Route path="/login"> <Login /> </Route>
            <PrivateRoute path="/details/:departmentId"> <Details /> </PrivateRoute>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
