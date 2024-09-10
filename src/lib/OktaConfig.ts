export const oktaConfig = {
  clientId: "0oaij1xuwoEBiGjAp5d7",
  issuer: "https://dev-99675739.okta.com/oauth2/default",
  redirectUri: "https://my-react-library-app.netlify.app/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
