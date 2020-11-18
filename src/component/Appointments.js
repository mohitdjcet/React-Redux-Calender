import React from 'react';
import moment from 'moment'
import { Container, Col, Row, Dropdown, Button, Table, Jumbotron } from 'react-bootstrap';
import { BrowserRouter as Router, withRouter, Route, Link } from "react-router-dom";
const date = new Date();
class Appointments extends React.Component {
    constructor() {
        super()
        this.state = {
            bookingCollection: []
        }
    }
    componentDidMount() {
        this.setState({ bookingCollection: JSON.parse(localStorage.getItem("ApStorage")) })
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.bookingData != this.props.bookingData) {
            let oldData = JSON.parse(localStorage.getItem("ApStorage"));
            let ApStorage = oldData ? oldData : []
            ApStorage.push(this.props.bookingData);
            localStorage.setItem('ApStorage', JSON.stringify(ApStorage))
            this.setState({ bookingCollection: ApStorage })
            return true
        }
        else { return false }
    }
    render() {
        return (
            <div className="App">
                <Container className="apointment-size">
                    <h1> Appointments List </h1>
                    <Button onClick={() => this.props.history.push('/')} variant="outline-success">More Booking</Button>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th>Dr Name</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                    </Table>
                    {
                        this.state.bookingCollection ?
                            this.state.bookingCollection.map(function (item, i) {
                                return <Table striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td>{i}</td>
                                            <td>Bruce</td>
                                            <td>{item.time}</td>
                                            <td>{item.day},{item.year}</td>
                                            <td>Dr Strange</td>
                                            <th> <Button variant="outline-danger">Cancel</Button></th>
                                        </tr>
                                    </tbody>
                                </Table>
                            })
                            : <Jumbotron>
                                <h1>No Appointments Booked Yet</h1>
                                <Button onClick={() => this.props.history.push('/')} variant="primary">Make First Booking</Button>
                            </Jumbotron>
                    }
                </Container>
            </div>
        );
    }
}

export default withRouter(Appointments);
