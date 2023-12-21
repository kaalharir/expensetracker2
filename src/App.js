// App.js
import React from 'react';
import { Header } from './components/Header';
import './App.css';
import Balance from './components/balance'; // Corrected import statement

const App = () => {
  return (
    <div>
      hello world!
      <Header />
      <div className='container'>
        <h1>hello world!</h1> 
        <Balance />  {/* Use the capitalized component name */}
      </div>
    </div>
  );
}

export default App;
