import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import map from "../../images/Map.png";

const RideDetail = () => {
    return (
            <Container style={{marginTop: "30px"}}>
            <Row>
            <Col md={4}>
            <form>
                <label htmlFor="from">Starting From</label>
                <br />
                <input type="text" name="from" id="" />
                <br/>
                <label htmlFor="from">Dropping To</label>
                <br />
                <input type="text" name="from" id="" />
                <br/>
                <br/>
                <Button variant="success">Search</Button>
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
