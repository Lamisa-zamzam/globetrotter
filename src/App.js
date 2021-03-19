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
        newUser: true,
        isLoggedIn: false,
        error: "",
    });

    console.log(user);
    return (
        <UserContext.Provider value={[user, setUser]}>
        <Router>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <PrivateRoute path="/ride/:name">
                    <Header />
                    <RideDetail/>
                </PrivateRoute>
                <Route path="/login">
                    <Header />
                    <Login/>
                </Route>
                <privateRoute path="/destination">
                    <Header />
                    <RideDetail/>
                </privateRoute>
                <Route path="/blog">
                    <Header />
                </Route>
                <Route path="/contact">
                    <Header />
                </Route>
                <Route path="*">
                    <Header />
                </Route>
            </Switch>
        </Router>
        </UserContext.Provider>
    );
}

export default App;
