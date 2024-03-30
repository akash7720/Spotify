
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SpotifySearch from './components/SpotifyFile';

function App() {
  return (
    <div className="App">
       <Routes>
           <Route path='/'  element={<SpotifySearch/>}/>
       </Routes>
    </div>
  );
}

export default App;
