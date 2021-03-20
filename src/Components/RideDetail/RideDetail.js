import {
    faAngleDoubleRight,
    faGripLinesVertical,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import map from "../../images/Map.png";
import fakeData from "../FakeData/RidesFakeData.json";
import Map from "../Map/Map";

const RideDetail = (props) => {
    const { id } = useParams();
    console.log(id);

    console.log(fakeData);
    const chosenRide = fakeData.find((ride) => ride.id === id);
    console.log(chosenRide);
    const { image, name } = chosenRide;
    console.log(image);
    // const [placeFrom, setPlaceFrom] = useState("");
    // const [placeTo, setPlaceTo] = useState("");

    // const handleBlur = (e) => {
    //     if (e.target.name === "from") {
    //         const from = e.target.value;
    //         setPlaceFrom(from);
    //     }
    //     if (e.target.name === "to") {
    //         const to = e.target.value;
    //         setPlaceTo(to);
    //     }
    // };

    const [error, setError] = useState("");
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // if(placeFrom !== placeTo){
    // setRideDetail(searchResult);
    // console.log("hello");
    // }else{
    //     setError("Please choose a different place to go, your destination is same as your starting point.")
    // }
    // };
    const { handleSubmit, register } = useForm();

    const onSubmit = (data, e) => {
        const { from, to } = data;
        let searchResult = (
            <div>
                {" "}
                <FontAwesomeIcon icon={faGripLinesVertical} />
                <FontAwesomeIcon icon={faAngleDoubleRight} />
                <h5>{`${from}`}</h5>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
                <h5> {`${to}`}</h5>
                <div>
                    <img src={image} alt="Ride" style={{ width: "100px" }} />
                    <h5>{`${name}`}</h5>
                    <FontAwesomeIcon icon={faUsers} />
                    <h5>4</h5>
                    <h5>$67</h5>
                </div>
                <div>
                    <img src={image} alt="Ride" style={{ width: "100px" }} />
                    <h5>{`${name}`}</h5>
                    <FontAwesomeIcon icon={faUsers} />
                    <h5>4</h5>
                    <h5>$67</h5>
                </div>
                <div>
                    {" "}
                    <img src={image} alt="Ride" style={{ width: "100px" }} />
                    <h5>{`${name}`}</h5>
                    <FontAwesomeIcon icon={faUsers} />
                    <h5>4</h5>
                    <h5>$67</h5>
                </div>
            </div>
        );
        e.preventDefault();
        console.log(data);
        if (from !== to) {
            console.log("surprise");
            setRideDetail(searchResult);
        } else {
            console.log("error");
        }
    };

    const [rideDetail, setRideDetail] = useState(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="from">Starting From</label>
            <br />
            <input
                type="text"
                name="from"
                id=""
                ref={register({ required: true })}
                required
            />
            <br />
            <label htmlFor="from">Dropping To</label>
            <br />
            <input
                type="text"
                name="to"
                id=""
                required
                ref={register({ required: true })}
            />
            <br />
            <br />
            <input type="submit" />
        </form>
    ); 

    return (
        <Container style={{ marginTop: "-100px" }}>
            <Row>
                <Col md={4}>{rideDetail}</Col>
                <Col md={8}>
                    {/* <img src={map} alt="" /> */}
                    <Map/>
                </Col>
            </Row>
        </Container>
    );
};

export default RideDetail;
