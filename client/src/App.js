import './App.css';
import 'antd/dist/reset.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import Contacts from './components/lists/Contacts';
import Title from './components/layout/Title';
import AddContact from './components/forms/AddContact';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Title />
        <AddContact />
        <Contacts />
      </div>
    </ApolloProvider>
  );
}

export default App;
