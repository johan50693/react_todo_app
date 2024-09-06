import React from 'react';
import { TodoProvider } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { AppUI } from './AppUI';

function App() {
  const [state, setState] = React.useState('estado compartido');
  

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
