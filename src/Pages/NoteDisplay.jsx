import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../notesSlice';

const NoteDisplay = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  return (
    <div className="p-4 mx-[8rem]">
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note.id} className="border p-2 mb-2">
            <p>{note.content}</p>
            <button onClick={() => dispatch(deleteNote(note.id))} className="bg-red-500 text-white p-1 mt-2">
              Delete
            </button>
          </div>
        ))
      ) : (
        <h2 className="text-center">No notes yet</h2>
      )}
    </div>
  );
  
};

export default NoteDisplay;

