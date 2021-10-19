import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Login from './components/Login/Login/Login';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/home"> <Home /> </Route>
            <PrivateRoute path="/aboutus"> <AboutUs /> </PrivateRoute>
            <Route path="/login"> <Login /> </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
