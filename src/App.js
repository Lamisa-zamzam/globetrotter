import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import RideDetail from "./Components/RideDetail/RideDetail";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
    const [user, setUser] = useState({
        name: "",
        email: "",
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
                        <RideDetail />
                    </PrivateRoute>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute path="/destination">
                        <RideDetail />
                    </PrivateRoute>
                    <Route path="/blog">
                        <h3>Here goes our blog...</h3>
                    </Route>
                    <PrivateRoute path="/contact">
                        <div style={{textAlign:"center", marginTop:"100px"}}> 
                            {" "}
                            <h2>Contact Us</h2>
                            <p>Email: lamisazamzam@gmail.com</p>
                        </div>
                    </PrivateRoute>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
