import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';

import './App.css';

function App() {
  return (
    <div className="App">
      <TodoSearch />
      <TodoCounter />

      <TodoList >
        <TodoItem />
      </TodoList>

    </div>
  );
}

export default App;
