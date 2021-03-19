import React, { useContext, useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Firebase.Config.js";
import { UserContext } from "../../App";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useContext(UserContext);
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [submitErrorMessage, setSubmitErrorMessage] = useState("");

    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(facebookProvider)
            .then((result) => {
                const credential = result.credential;
                const accessToken = credential.accessToken;
                const { displayName, email, photoURL } = result.user;
                const newUser = { ...user };
                newUser.name = displayName;
                newUser.email = email;
                newUser.photoURL = photoURL;
                setUser(newUser);
                history.replace(from);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                const newUser = { ...user };
                newUser.error = errorMessage;
                setUser(newUser);
            });
    };

    const handleSignUp = (name, userEmail, userPassword) => {
        const doesPasswordsMatch = checkPasswords();
        if(doesPasswordsMatch){
        firebase
            .auth()
            .createUserWithEmailAndPassword(userEmail, userPassword)
            .then((userCredential) => {
                console.log(userCredential.user);
                const { email } = userCredential.user;
                const newUser = { ...user };
                newUser.email = email;
                newUser.name = name;
                newUser.isLoggedIn = true;
                setUser(newUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                const newUser = { ...user };
                newUser.error = errorMessage;
                setUser(newUser);
            });
        }else{
            const newUser = { ...user };
            newUser.error = "Your Passwords don't match";
            setUser(newUser);
        }
    };


    const handleLogIn = (userEmail, userPassword) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(userEmail, userPassword)
            .then((userCredential) => {
                console.log(userCredential.user);
                const { email } = userCredential.user;
                const newUser = { ...user };
                newUser.email = email;
                newUser.isLoggedIn = true;
                setUser(newUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                const newUser = { ...user };
                newUser.error = errorMessage;
                setUser(newUser);
            });
    };

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        data.name
            ? handleSignUp(data.name, data.email, data.password)
            : handleLogIn(data.email, data.password);
    };

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const toggleForm = (e) => {
        e.preventDefault();
        const newUser = { ...user };
        newUser.isNewUser = !newUser.isNewUser;
        console.log(user.isNewUser);
        setUser(newUser);
        console.log(user.isNewUser);
    };

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();


    const handleBlur = (e) => {
        if(e.target.name === "password"){
            setPassword(e.target.value);
        }
        if(e.target.name === "confirmPassword"){
            setConfirmPassword(e.target.value);
        }
    }
    
    const checkPasswords = () => {
        return password === confirmPassword;
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-card">
                <h3>{user.isNewUser ? "Create an account" : "Log In"}</h3>
                {user.isNewUser && (
                    <input
                        type="text"
                        name="name"
                        id="name"
                        ref={register({ required: true })}
                        className="form-field"
                        placeholder="Your Name"
                    />
                )}
                <input
                    type="email"
                    name="email"
                    id="email"
                    ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
                    className="form-field"
                    placeholder="Your Email"
                />
                {errors.email && <span className="error">required</span>}
                {/* {console.log(errors.email)} */}
                <br />
                <input
                    type="password"
                    name="password"
                    ref={register({
                        required: true,
                        minLength: 8,
                        pattern: /\d{1}/,
                    })}
                    placeholder="Your Password"
                    className="form-field"
                    id="password"
                    onBlur={handleBlur}
                />
                <br />
                {errors.password && <span className="error">required</span>}
                {/* {console.log(errors.password)} */}
                {user.isNewUser && (
                    <input
                        type="password"
                        name="confirmPassword"
                        ref={register({
                            required: true,
                            minLength: 8,
                            pattern: /\d{1}/,
                        })}
                        placeholder="Confirm Your Password"
                        className="form-field"
                        id="confirmPassword"
                        onBlur={handleBlur}
                    />
                )}
                {errors.confirmPassword && (
                    <span className="error">required</span>
                )}
                {/* {console.log(errors.confirmPassword)} */}

                <br />
                {<span className="error">{confirmPasswordError}</span>}
                <br />
                {!user.isNewUser && (
                    <div className="savingPassword">
                        <input
                            type="checkbox"
                            name="save-password"
                            id="save-password"
                        />
                        <label
                            htmlFor="save-password"
                            style={{ marginRight: "120px" }}
                        >
                            &nbsp;Remember Me
                        </label>
                        <Link to="/login">Forgot Password</Link>
                    </div>
                )}
                <br />
                <p className="error">{user.error}</p>
                {user.isNewUser ? (
                    <input
                        type="submit"
                        value="Create Account"
                        className="submit-button"
                    />
                ) : (
                    <input
                        type="submit"
                        value="Log In"
                        className="submit-button"
                    />
                )}

                <p>
                    {user.isNewUser ? "Already" : "Don't"} have an account?{" "}
                    <a href="/" onClick={(e) => toggleForm(e)}>
                        {user.isNewUser ? "Login" : "Create An Account"}
                    </a>
                </p>
            </form>
            <div className="social-login">
                <h4>OR</h4>
                <button
                    className="social-media-btn"
                    onClick={handleFacebookSignIn}
                >
                    Continue With Facebook
                </button>
                <br />
                <br />
                <button className="social-media-btn">
                    Continue With Twitter
                </button>
            </div>
        </div>
    );
};

export default Login;