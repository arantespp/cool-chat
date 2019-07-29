import AWSAppSyncClient from 'aws-appsync';
import * as localForage from 'localforage';

const client = new AWSAppSyncClient({
  region: 'us-east-1',
  url:
    'https://4hu5xrozqbfxfnnm3loeehxvba.appsync-api.us-east-1.amazonaws.com/graphql',
  auth: {
    type: 'API_KEY',
    apiKey: 'da2-sligow65s5fjdkrsnuvvahtpla'
  },
  disableOffline: false,
  offlineConfig: {
    callback: (err, succ) => {
      if (err) {
        const { mutation, variables } = err;
        console.warn(`ERROR for ${mutation}`, err);
      } else {
        const { mutation, variables } = succ;
        console.info(`SUCCESS for ${mutation}`, succ);
      }
    },
    storage: localForage
  }
});

export { client };
