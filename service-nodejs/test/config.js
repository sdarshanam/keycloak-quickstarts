var baseUrl = 'http://ory-hydra.nia.snaplogic.com:8080/auth';

module.exports = {
  registration: {
    endpoint: baseUrl + '/realms/quickstart/clients-registrations',
    accessToken: '<Setup your access token>'
  },
  baseUrl: baseUrl,
  token: {
    username: 'alice',
    password: 'password',
    grant_type: 'password',
    client_id: 'test-cli',
    realmName: 'quickstart'
  },
  testClient: {
    clientId: 'test-cli',
    consentRequired: "false",
    publicClient: "true",
    standardFlowEnabled: "false",
    directAccessGrantsEnabled: "true",
    fullScopeAllowed: "true"
  }
};
