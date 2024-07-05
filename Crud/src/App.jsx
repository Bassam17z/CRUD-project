import "./styles.css";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import { NotesProvider } from "./components/NotesContext";
import { useEffect } from "react";

function App() {
  return (
    <NotesProvider>
      <div className="app">
        <NoteForm />
        <h1 className="header">Notes list</h1>
        <Notes />
      </div>
    </NotesProvider>
  );
}

export default App;
