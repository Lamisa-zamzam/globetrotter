import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import map from "../../images/Map.png";

const RideDetail = () => {
    const handleSubmit = () => {
        console.log("hello");
    }
    return (
            <Container style={{marginTop: "30px"}}>
            <Row>
            <Col md={4}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="from">Starting From</label>
                <br />
                <input type="text" name="from" id="" required/>
                <br/>
                <label htmlFor="from">Dropping To</label>
                <br />
                <input type="text" name="from" id="" required/>
                <br/>
                <br/>
                <input type="submit"/>
            </form>
            </Col>
            <Col md={8}>
               <img src={map} alt=""/>
            </Col>
            </Row>
            </Container>
    );
};

export default RideDetail;
