import SignUp from "../../sign-up/sign-up-form.component";
import SignIn from "../../sign-in/sign-in-form.component";

import '../authentication/authentication.styles.scss';

const Authentication = () => {
 return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
