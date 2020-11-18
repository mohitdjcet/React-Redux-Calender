import { connect } from 'react-redux'
import { profile } from '../actions/index'
import Confirm from '../component/Confirm'
 
const mapStateToProps = state => ({
  status: state
})
 
const mapDispatchToProps = dispatch => ({
    profile: () => dispatch(profile())
})
 
const ConfirmContainer= connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirm)

export default ConfirmContainer;