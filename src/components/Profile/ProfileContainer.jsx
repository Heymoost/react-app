import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    if(!userId) {
      userId = 27584;
    }

    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps,{getUserProfile}),
  function withRouter(Component) {

    function ComponentWithRouterProp(props) {
       let params = useParams();
       return (
          <Component
            {...props}
            router={{ params }}
          />
       );
    }

    return ComponentWithRouterProp;
  }
)(ProfileContainer);