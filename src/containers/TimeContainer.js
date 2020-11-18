import { connect } from 'react-redux'
import { bookingData } from '../actions/index'
import Time from '../component/Time'
 
const mapStateToProps = state => ({
 
})
 
const mapDispatchToProps = dispatch => ({
    bookingData: (data) => dispatch(bookingData(data))
})
 
const TimeContainer= connect(
  mapStateToProps,
  mapDispatchToProps
)(Time)

export default TimeContainer;