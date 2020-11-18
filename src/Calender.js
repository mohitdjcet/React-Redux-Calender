import React from 'react';
import './App.css';
import TimeContainer from './containers/TimeContainer';
import { Container, Col, Row, Dropdown } from 'react-bootstrap';
const date = new Date();

class Calender extends React.Component {
  constructor() {
    super()
    this.state = {
      month: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'],
      selectedMonth: 4,
      selectedMonthNumber: 2019,
      CalenderDays: undefined,
      currentYear: '2019',
      selectYear: '2019',
      totalDayMonth: 31,
      selectedDay: undefined,
      selectedDetails: undefined,
    }
  }
  days(totalDayMonth) {
    const days = [];
    for (let i = 1; i <= totalDayMonth; i++) {
      days.push(
        <Col key={i}
          onClick={() => { this.selectDay(i) }}
          className={this.state.selectedDay == i ? "activeDays day" : 'day'}
          sm={1}>{i}</Col>
      );
    }
    return days;
  }
  selectDay(item) {
    let data = {
      day: item,
      month: this.state.selectedMonth,
      year: this.state.selectYear
    }
    this.setState({ selectedDay: item, selectedDetails: data })
  }
  componentDidMount() {
    this.setState(
      {
        selectedMonth: this.state.month[date.getMonth()],
        selectedMonthNumber: date.getMonth()
      })
  }
  async changeMonth(flag) {

    if (flag == 'plus' && this.state.selectedMonthNumber <= 12) {
      await this.setState({
        selectedMonthNumber: this.state.selectedMonthNumber + 1,
      })
    }
    else {
      if (this.state.selectedMonthNumber > 0) {
        await this.setState({
          selectedMonthNumber: this.state.selectedMonthNumber - 1,
        })
      }
    }
    this.setState({
      selectedMonth: this.state.month[this.state.selectedMonthNumber]
    })
    await this.daysInMonth(this.state.selectedMonthNumber)
  }
  async daysInMonth(monthNumber) {
    let data = await new Date(this.state.selectYear, monthNumber + 1, 0).getDate();
    await this.setState({ totalDayMonth: data })
  }
  years() {
    const yrs = [];
    for (let i = this.state.currentYear; i <= 2022; i++) {
      yrs.push(
        <Dropdown.Item
          key={i}
          onClick={() => { this.selectYear(i) }} className="day" sm={1}>
          {i}
        </Dropdown.Item>
      );
    }

    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {this.state.selectYear}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {yrs}
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  selectYear(yr) {
    this.setState({ selectYear: yr })
  }
  render() {
    return (
      <div className="App">
        <Container className="size">
          <Row>
            {this.years()}
          </Row>
          <Row>
            <button className="select-month" onClick={() => { this.changeMonth('minus') }}>
              {"<<"}</button>
            <span className="current-month">{this.state.selectedMonth}</span>
            <button className="month-rigth select-month" onClick={() => { this.changeMonth('plus') }} >{">>"}</button>
          </Row>
          <Row>
            {this.days(this.state.totalDayMonth)}
          </Row>
        </Container>

        {this.state.selectedDay ? <TimeContainer data={this.state.selectedDetails} /> : null}
      </div>
    );
  }
}

export default Calender;
