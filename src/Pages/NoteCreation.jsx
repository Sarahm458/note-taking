import React, { useState } from 'react';

const NoteCreation = () => {
  const [content, setContent] = useState('');


  const handleSubmit = () => {
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full"
        placeholder="Enter note content"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 mt-2">
        Add Note
      </button>
    </div>
  );
};

export default NoteCreation;
