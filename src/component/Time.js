import React from 'react';
import moment from 'moment'
import { Redirect } from 'react-router'
import { Container, Col, Row, Dropdown, Button } from 'react-bootstrap';
import { BrowserRouter as Router, withRouter, Route, Link } from "react-router-dom";
const date = new Date();
class Calender extends React.Component {
    constructor() {
        super()
        this.state = {
            timeSlots: [],
            selectSlot: undefined
        }
    }
    componentDidMount() {
        var timeStops = this.getTimeStops('00:00', '23:30');
        this.setState({ timeSlots: timeStops })
    }
    selectTime(slot) {
        this.setState({ selectSlot: slot })
    }
    timeSlots() {
        const days = [];
        for (let i = 0; i <= this.state.timeSlots.length; i++) {
            days.push(
                <Col key={i}
                    onClick={() => { this.selectTime(this.state.timeSlots[i]) }}
                    className={this.state.timeSlots[i] == this.state.selectSlot ? "active-slot day" : 'day'}
                    sm={3}>{this.state.timeSlots[i]}</Col>
            );
        }
        return days;
    }
    getTimeStops(start, end) {
        var startTime = moment(start, 'HH:mm');
        var endTime = moment(end, 'HH:mm');

        if (endTime.isBefore(startTime)) {
            endTime.add(30, 'day');
        }

        var timeStops = [];

        while (startTime <= endTime) {
            timeStops.push(new moment(startTime).format('HH:mm'));
            startTime.add(30, 'minutes');
        }
        return timeStops;
    }
    booking() {
        let data = this.props.data;
        data.time = this.state.selectSlot;
        this.props.bookingData(data)
        this.props.history.push('/Appointments')
    }
    render() {
        return (

            <div className="App">
                <Container className="time-slow-size">
                    <Row>{this.timeSlots()}</Row>
                    
                            <Button
                                onClick={() => { this.booking() }}>
                                Book </Button>
                </Container>
            </div>
        );
    }
}

export default withRouter(Calender);
