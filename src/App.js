import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import RideDetail from "./Components/RideDetail/RideDetail";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
    const [user, setUser] = useState({
        name: "",
        email:"",
        photoURL: "",
        isNewUser: true,
        isLoggedIn: false,
        error: "",
    });

    console.log(user.isNewUser);
    return (
        <UserContext.Provider value={[user, setUser]}>
        <Router>
        <Header />
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <PrivateRoute path="/ride/:id">
                    <RideDetail/>
                </PrivateRoute>
                <Route path="/login">
                    
                    <Login/>
                </Route>
                <privateRoute path="/destination">
                   
                    <RideDetail/>
                </privateRoute>
                <Route path="/blog">
    
                </Route>
                <PrivateRoute path="/contact">

                </PrivateRoute>
                <Route path="*">

                </Route>
            </Switch>
        </Router>
        </UserContext.Provider>
    );
}

export default App;
