import React from 'react';
// import Preloader from '../../common/Preloader/Preloader';
// import s from './ProfileInfo.module.css';
// import userPhoto from "../../../img/avatar.png";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    title: 'Yo'
  }

  activeteEditMode() {
    this.setState ({
      editMode: true
    });
  }

  deactiveteEditMode() {
    this.setState ({
      editMode: false
    });
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activeteEditMode.bind(this)}>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input autoFocus={true} onBlur={this.deactiveteEditMode.bind(this)} value={this.props.status} />
          </div>
        }
      </div>
    )
  }
}


export default ProfileStatus;