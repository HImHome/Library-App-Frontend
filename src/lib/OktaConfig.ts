export const oktaConfig = {
    clientId: "0oaij1xuwoEBiGjAp5d7",
    issuer: "https://dev-99675739.okta.com/oauth2/default",
    redirectUri: "http://localhost:3000/login/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: true,
}