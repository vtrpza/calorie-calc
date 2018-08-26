import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Layout } from './components/Layout/Layout';
import CalorieCalculator from './containers/CalorieCalculator';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
          <Layout>
              <CalorieCalculator/>
          </Layout>
]    </React.Fragment>
    );
  }
}

export default App;
