import { Redirect } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { SpinnerLoading } from "../layouts/utils/SpinnerLoading";
import OktaSignIn from "@okta/okta-signin-widget";

const LoginWidget = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const onSuccess = (tokens) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (error) => {
    console.log("Signin error: ", err);
  };

  if (!authState) {
    return <SpinnerLoading />;
  }

  return authState.isAuthenticated ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
  );
};

export default LoginWidget;
