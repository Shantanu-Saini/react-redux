import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='h-screen w-screen bg-slate-600 text-white flex flex-col justify-center items-center'>
        <h1 className="text-4xl text-center font-bold mb-8">React-Redux/ Redux-toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
};

export default App;