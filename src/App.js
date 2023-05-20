
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Container } from './components/Container';
import { Comments } from './components/Comments';


function App() {
  return (
    <div className="jam">
      <Routes>
        <Route  path='/' element={<Container/>}/>
        <Route  path='/comments/:id' element={<Comments/>}/>
      </Routes>
    </div>
  );
}

export default App;
