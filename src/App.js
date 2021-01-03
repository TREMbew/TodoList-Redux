import './App.css';
import ListTask from './component/ListTask';
import AddTask from './component/AddTask';

function App() {
  return (
    <div>
      <h1 className='title'>YOUR PLANS FOR TODAY?</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
