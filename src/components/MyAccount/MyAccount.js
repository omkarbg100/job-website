import Profile from "./profile";
import Register from "./register"; // import Register

let setLoginSuccessful = false; // Use camelCase as a convention

function MyAccount(props) {
  if (props.value === true || setLoginSuccessful === true) {
    setLoginSuccessful = true;
    return <Profile data={props.data} />;
  } else {
    return <Register />;
  }
}

export default MyAccount;
