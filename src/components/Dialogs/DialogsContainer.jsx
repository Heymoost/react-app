import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMassageCreator } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMassageCreator(newMessageBody));
    }
  }
}


export default compose(
  connect (mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);