import React from 'react';
import { Header } from './components/Header';
import './App.css';
import Balance from './components/balance'; // Corrected import statement
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
// import { GlobalProvider } from './path/to/GlobalContext'; // Update the path accordingly
import { GlobalProvider } from './context/GlobalState'; // Corrected import statement 

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
