import { useRef } from "react";

export default function ProfileForm(props){
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  function submitHandler(e){
    e.preventDefault();
    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    //Add validation;

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword
    })
  }


  return <form onSubmit={submitHandler}>
    <div>
      <label htmlFor='new-password'>New Password</label>
      <input type='password' id='new-password' ref={newPasswordRef} />
    </div>
    <div>
      <label htmlFor='old-password'>Old Password</label>
      <input type='password' id='old-password' ref={oldPasswordRef} />
    </div>
    <button type='submit'>Change Password</button>
  </form>
}