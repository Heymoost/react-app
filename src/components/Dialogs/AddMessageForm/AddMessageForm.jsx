import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

let maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newMessageBody" placeholder="Enter your message" validate={[required, maxLength50]} type="text" />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);