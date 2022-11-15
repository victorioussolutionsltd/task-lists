import React from 'react';
import Container from './Container';
import TasksProvider from './context/TasksContext';

function App() {
  return (
    <TasksProvider>
      <Container />
    </TasksProvider>
  );
}
export default App;
