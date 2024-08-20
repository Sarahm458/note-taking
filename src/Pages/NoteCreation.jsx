import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../notesSlice';

const NoteCreation = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const saveNotesToLocalStorage = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  const handleSubmit = () => {
    const newNote = {
      id: Date.now(),
      content,
    };
    dispatch(addNote(newNote));
    const updatedNotes = [...notes, newNote];
    saveNotesToLocalStorage(updatedNotes);
    setContent('');
  };

  return (
    <div className="m-11">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full h-52 resize-none"
        placeholder="Enter note content"
      />
      <button
        onClick={handleSubmit}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 mt-2"
      >
        Add Note
      </button>
    </div>
  );
};

export default NoteCreation;

