import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Auth } from './components/Auth';
import { Movie } from './components/Movie';
import { Nav } from './components/Nav';
import { Upload } from './components/Upload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Nav />} />
        <Route path='login' element={<Auth />} />
        <Route path='movie' element={<Movie />} />
        <Route path='upload' element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
