import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activeteEditMode = () => {
    this.setState ({
      editMode: true
    });
  }

  deactiveteEditMode = () => {
    this.setState ({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({status: this.props.status})
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span className={s.statusTittle} onDoubleClick={this.activeteEditMode}>{this.props.status || 'Status'}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input className={s.statusInput} onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveteEditMode} value={this.state.status} />
          </div>
        }
      </div>
    )
  }
}


export default ProfileStatus;