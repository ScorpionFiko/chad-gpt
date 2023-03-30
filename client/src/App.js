import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import NoMatch from './pages/NoMatch';
import { Provider } from 'react-redux';
import store from './utils/store';
import MainLanding from './pages/MainLanding';
//import Dashboard from './pages/Dashboard';
import BuildWorkout from './pages/BuildWorkout';
import Footer from './components/Footer';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Provider store={store}>
      
    <ApolloProvider  client={client}>
   
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={MainLanding} /> 
              <Route exact path='/buildWorkout' component={BuildWorkout} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />

          </div>
        </Router>

    </ApolloProvider>
    </Provider>
  );
}

export default App;
