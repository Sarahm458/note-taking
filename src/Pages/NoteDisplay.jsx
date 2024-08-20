import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../notesSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const NoteDisplay = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleShare = (noteId) => {
    const noteUrl = `${window.location.origin}/notes/${noteId}`;
    navigator.clipboard.writeText(noteUrl).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Link copied to clipboard!',
        showConfirmButton: false,
        timer: 1500
      });
    });
  };

  return (
    <div className="p-4 mx-[8rem]">
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note.id} className="border p-2 mb-2">
            <p>{note.content}</p>
            <button
              onClick={() => dispatch(deleteNote(note.id))}
              className="bg-purple-500 text-white p-1 mt-2"
            >
              Delete
            </button>
            <button
              onClick={() => navigate(`/edit/${note.id}`)}
              className="bg-blue-500 text-white p-1 mt-2 ml-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleShare(note.id)}
              className="bg-green-500 text-white p-1 mt-2 ml-2"
            >
              Share
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
