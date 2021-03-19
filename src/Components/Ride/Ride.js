import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Ride.css';

const Ride = (props) => {
    const { name, image } = props.ride;
    return (
        <Col xs={12} md={6} lg={3}>
            <Link to={`/ride/${name}`}>
            <Card>
                <Card.Img variant="top" src={image} alt="" className="ride-image"/>
                <Card.Body className="ride-name">
                    <h4>{name}</h4>
                </Card.Body>
            </Card>
            </Link>
        </Col>
    );
};

export default Ride;
