import { TodoProvider } from '../TodoContext';
import './App.css';
import { AppUI } from './AppUI';




const App = () => {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
