import ApolloClient, { createNetworkInterface } from 'apollo-client';
// import { SubscriptionClient } from 'subscriptions-transport-ws';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
  connectToDevTools: true,
});

export default client;
