import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <main class="mdl-layout__content">
          <div class="page-content" />
        </main>
      </Layout>
    );
  }
}

export default App;
