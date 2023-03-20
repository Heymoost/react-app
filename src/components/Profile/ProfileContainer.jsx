import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import { useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorisedUserId;
      if (!userId) {
        this.props.navigate.navigate('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile {...this.props} isOwner={!this.props.router.params.userId} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorisedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  function withRouter(Component) {

    function ComponentWithRouterProp(props) {
      let params = useParams();
      let navigate = useNavigate();
      return (
        <Component
          {...props}
          router={{ params }}
          navigate={{ navigate }}
        />
      );
    }

    return ComponentWithRouterProp;
  }
)(ProfileContainer);