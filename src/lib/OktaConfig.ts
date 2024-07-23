export const OktaConfig = {
    clientId: "0oaiiqfijs9kofaie5d7",
    issuer: "https://dev-14073666.okta.com/oauth2/default",
    redirectUri: "http://localhost:3000/login/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: true
}