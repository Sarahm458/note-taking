import './App.css';
import NavBar from './Components/NavBar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchNotes } from './notesSlice'; 
import NoteCreation from './Pages/NoteCreation';
import NoteEditing from './Pages/NoteEditing';
import NoteDisplay from './Pages/NoteDisplay';
import NoteView from './Pages/NoteView';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      dispatch({ type: 'notes/fetchNotes/fulfilled', payload: savedNotes });
    } else {
      dispatch(fetchNotes());
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route path='/' element={<NoteCreation />} />
        <Route path="/edit/:noteId" element={<NoteEditing />} />
        <Route path='/notes' element={<NoteDisplay />} />
        <Route path='/notes/:noteId' element={<NoteView />} /> 
      </Route>
    </Routes>
  );
}

export default App;
