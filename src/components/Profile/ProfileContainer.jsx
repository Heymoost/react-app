import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    if(!userId) {
      userId = this.props.authorisedUserId;
      if(!userId) {
        this.props.navigate.navigate('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorisedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

// export const withNavigate = (Component) => {
//   let RedirectTo =(props) => {
//       return < Component {...props} navigate={useNavigate() } />
//  }
//       return RedirectTo;
//  }

export default compose(
  connect(mapStateToProps,{getUserProfile, getStatus, updateStatus}),
  function withRouter(Component) {

    function ComponentWithRouterProp(props) {
       let params = useParams();
       let navigate = useNavigate();
       return (
          <Component
            {...props}
            router={{ params }}
            navigate={{navigate} }
          />
       );
    }

    return ComponentWithRouterProp;
  }
)(ProfileContainer);