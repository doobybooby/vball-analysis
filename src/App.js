import './App.css';
import { Navbar } from './components/navigation/Navbar';
import { NavRoutes } from './components/navigation/NavRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavRoutes />
    </div>
  );
}

export default App;
