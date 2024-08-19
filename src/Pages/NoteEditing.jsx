import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../notesSlice';
import { useParams, useNavigate } from 'react-router-dom';

const NoteEditing = () => {
  const { noteId } = useParams();
  const note = useSelector((state) => state.notes.find((n) => n.id === Number(noteId)));
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (note) {
      setContent(note.content);
    }
  }, [note]);

  const handleUpdate = () => {
    dispatch(updateNote({
      id: Number(noteId),
      content,
    }));
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
          <button onClick={handleUpdate} className="bg-green-500 text-white p-2 mt-2">
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
