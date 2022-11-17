export const environment = {
  production: false,
  Auth: {
    hostedUiUrl: 'https://aalexnewtest.auth.eu-central-1.amazoncognito.com/',
    clientId: '21vlvogdtf0dvkfq9tjlakcl9d',
    response_type: 'code',
    scope: 'email+openid+profile',
    redirect_uri: 'https://tonight.by/loggedin',
    redirect_logout_uri: 'https://tonight.by/loggedout',
    identityProvider: 'COGNITO',

    srpFlow: {
      cognitoIdpUrl: 'https://cognito-idp.eu-central-1.amazonaws.com/',
      region: 'eu-central-1',
      userPoolId: 'eu-central-1_pwGd3ME20'
    }
  }
};
