import React from 'react';
import { Container, Col, Row, Dropdown, Button, Jumbotron } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            bookingCollection: []
        }
    }

    render() {
        return (
            <div className="App">
                <Container className="apointment-size">
                    <Jumbotron>
                        <h1>Book An Apointment</h1>
                        <p>
                            Netmeds.com is a trusted Indian online medical store.
                             Order prescription medicines online.
                              on Delivery available</p>
                        <p>
                            <Button onClick={() => this.props.history.push('/calender')} variant="primary">Book Now</Button>
                        </p>
                    </Jumbotron>
                </Container>
            </div>
        );
    }
}

export default withRouter(Home);
