import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NoteView = () => {
  const { noteId } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const filteredNotes = notes.filter((n) => n.id === Number(noteId));
    setNote(filteredNotes.length > 0 ? filteredNotes[0] : null);
  }, [noteId]);

  return (
    <div className="p-4 mx-[8rem]">
      {note ? (
        <div className="border p-2 mb-2">
          <p>{note.content}</p>
        </div>
      ) : (
        <p>Note not found</p>
      )}
    </div>
  );
};

export default NoteView;
