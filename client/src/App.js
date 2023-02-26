import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

import { Header } from './components/Header';
import { Clients } from './components/Clients';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
})

const apolloClient = new ApolloClient({
  uri: 'http://localhost:5050/graphql',
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Header />

        <div className="container">
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
