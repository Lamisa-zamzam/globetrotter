import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faGripLinesVertical,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import fakeData from "../FakeData/RidesFakeData.json";
import Map from "../Map/Map";
import "./RideDetail.css";

const RideDetail = () => {
    const { id } = useParams();
    const chosenRide = fakeData.find((ride) => ride.id === id) || {
        name: "Motor Bike",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Clipart_Motorcycle.svg/737px-Clipart_Motorcycle.svg.png",
    };
    const { image, name } = chosenRide;

    const [error, setError] = useState("");
    const { handleSubmit, register } = useForm();

    const onSubmit = (data, e) => {
        // An Array to show search results
        const dataFound = [1, 2, 3];
        const { from, to } = data;
        // result shown after button click
        let searchResult = (
            <>
                <div className="search-results-container">
                    {" "}
                    <div className="destination-container">
                        {" "}
                        <FontAwesomeIcon
                            icon={faGripLinesVertical}
                            size="6x"
                            className="destination-icon"
                        />
                        <div>
                            <div className="from">
                                <FontAwesomeIcon
                                    icon={faAngleDoubleLeft}
                                    className="destination-icon"
                                    size="2x"
                                />
                                <h5>{`${from}`}</h5>
                            </div>
                            <div className="to">
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                    className="destination-icon"
                                    size="2x"
                                />
                                <h5> {`${to}`}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="available-rides-container">
                        {dataFound.map((data) => (
                            <div key={data}>
                                <div className="rides-available">
                                    <img
                                        src={image}
                                        alt="Ride"
                                        style={{ width: "100%" }}
                                    />
                                    <h5>{`${name}`}</h5>
                                    <div className="riders-number">
                                        {" "}
                                        <FontAwesomeIcon
                                            icon={faUsers}
                                            style={{ marginTop: "5px" }}
                                        />
                                        <h5>4</h5>
                                    </div>
                                </div>
                                <h5>Price: $67</h5>
                            </div>
                        ))}
                    </div>
                </div>
                <Link to="/home" style={{ textDecoration: "underline" }}>
                    Choose a different vehicle
                </Link>
            </>
        );
        e.preventDefault();
        // validation : if password and confirm password match
        if (from !== to) {
            setError("");
            setRideDetail(searchResult);
        } else {
            setError(
                "Please choose a different place to go, your destination is the same as your starting point."
            );
        }
    };

    const [rideDetail, setRideDetail] = useState(
        <form onSubmit={handleSubmit(onSubmit)} className="search-form">
            <label htmlFor="from">Starting From</label>
            <br />
            <input
                type="text"
                name="from"
                id=""
                className="search-form-field"
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
                className="search-form-field"
                required
                ref={register({ required: true })}
            />
            <br />
            <label htmlFor="calender">Ride Date</label>
            <br />
            <input
                type="date"
                name="calender"
                id=""
                required
                style={{ width: "80%" }}
            />
            <br />
            <br />
            <input type="submit" value="Search" className="search-button" />
        </form>
    );

    return (
        <Container style={{ marginTop: "-100px" }}>
            <Row>
                <Col md={4}>
                    {rideDetail}
                    <br />
                    <p style={{ color: "red" }}>{error}</p>
                </Col>
                <Col md={8}>
                    <Map />
                </Col>
            </Row>
        </Container>
    );
};

export default RideDetail;
