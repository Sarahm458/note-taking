import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch notes
export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await fetch('/api/notes'); // Replace with your API endpoint
  const data = await response.json();
  return data;
});

const saveNotesToLocalStorage = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
      saveNotesToLocalStorage(state);
    },
    updateNote: (state, action) => {
      const index = state.findIndex(note => note.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        saveNotesToLocalStorage(state);
      }
    },
    deleteNote: (state, action) => {
      const updatedState = state.filter(note => note.id !== action.payload);
      saveNotesToLocalStorage(updatedState);
      return updatedState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      saveNotesToLocalStorage(action.payload);
      return action.payload;
    });
  },
});

export default notesSlice.reducer;
export const { addNote, updateNote, deleteNote } = notesSlice.actions;
