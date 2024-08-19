import React, { useState } from 'react';

const NoteCreation = () => {
  const [content, setContent] = useState('');


  const handleSubmit = () => {
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
