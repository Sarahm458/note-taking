import './App.css';
import { Routes , Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import NoteCreation from './Pages/NoteCreation';
import NoteEditing from './Pages/NoteEditing';
import NoteDisplay from './Pages/NoteDisplay';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route path='/' element={<NoteCreation/>}/>
        <Route path="/edit/:noteId" element={<NoteEditing/>}/>
        <Route path='/notes' element={<NoteDisplay/>}/>
      </Route>
    </Routes>
  );
}

export default App;
