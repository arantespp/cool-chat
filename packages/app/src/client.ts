import AWSAppSyncClient from 'aws-appsync';

const client = new AWSAppSyncClient({
  region: 'us-east-1',
  url:
    'https://4hu5xrozqbfxfnnm3loeehxvba.appsync-api.us-east-1.amazonaws.com/graphql',
  auth: {
    type: 'API_KEY',
    apiKey: 'da2-sligow65s5fjdkrsnuvvahtpla'
  }
});

export { client };
