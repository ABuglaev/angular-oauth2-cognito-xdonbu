export const environment = {
  production: false,
  Auth: {
    hostedUiUrl: 'CHANGE_ME',
    clientId: '2sjcih050g06uddd4u1tdl9u4q',
    response_type: 'code',
    scope: 'email+openid+profile',
    redirect_uri: 'https://tonight.by/loggedin',
    redirect_logout_uri: 'https://tonight.by/loggedout',
    identityProvider: 'COGNITO',

    srpFlow: {
      cognitoIdpUrl: 'https://cognito-idp.eu-central-1.amazonaws.com/',
      region: 'eu-central-1',
      userPoolId: 'eu-central-1_bXoD7wYvO'
    }
  }
};
