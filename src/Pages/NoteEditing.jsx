import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../notesSlice';
import { useParams, useNavigate } from 'react-router-dom';

const NoteEditing = () => {
  const { noteId } = useParams();
  const notes = useSelector((state) => state.notes);
  const note = notes.find((n) => n.id === Number(noteId));
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (note) {
      setContent(note.content);
    }
  }, [note]);

  const saveNotesToLocalStorage = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  const handleUpdate = () => {
    const updatedNote = {
      id: Number(noteId),
      content,
    };
    dispatch(updateNote(updatedNote));
    const updatedNotes = notes.map((n) => (n.id === Number(noteId) ? updatedNote : n));
    saveNotesToLocalStorage(updatedNotes);
    navigate('/notes');
  };

  return (
    <div className="p-4 mx-[8rem]">
      {note ? (
        <>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 w-full"
          />
          <button onClick={handleUpdate} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 mt-2">
            Update Note
          </button>
        </>
      ) : (
        <p>Note not found</p>
      )}
    </div>
  );
};

export default NoteEditing;
