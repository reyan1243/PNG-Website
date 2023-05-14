import { Route,Routes} from 'react-router-dom';
import Index from './pages/Index';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Index/>} />
      </Routes>
    </>
  );
}

export default App;
