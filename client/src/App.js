import './App.css';
import Layout from './components/features/Layout/Layout';
import { BrowserRouter as Router } from "react-router-dom";
import Routing from './Routing';
import { Provider } from './Context'
import { useReducer, useState } from 'react';
import { reducer, initialState } from './reducer';
function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App" >
    <Provider value={{ state, dispatch }} >
      <Router>
        <Layout>
          <Routing />
        </Layout>
      </Router>
    </Provider>
    </div>

  );
}

export default App;
