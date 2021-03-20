import React from "react";
import fakeData from "../FakeData/RidesFakeData.json";
import Ride from "../Ride/Ride";
import { Container, Row } from "react-bootstrap";
import "./Home.css";

const Home = () => {
    const appStyle = {
        backgroundImage: `url("https://i.gifer.com/1Vfn.gif")`,
    };

    return (
        <div className="home" style={appStyle}>
            <Container className="container">
                <Row>
                    {fakeData.map((ride) => (
                        <Ride key={ride.id} ride={ride} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;
