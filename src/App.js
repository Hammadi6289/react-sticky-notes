import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid"; //for temporary use of random generated Ids
import NotesList from "./components/NotesList";
import SearchBox from "./components/SearchBox";
import ToggleButton from "./components/ToggleButton";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(), //for temporary use of random generated Ids
      text: "This is a dummy note",
      date: "15/2/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("Fetching notes from localStorage...");
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    console.log("Saving notes to localStorage...");
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <ToggleButton handleToggleDarkMode={setDarkMode} />
        <SearchBox handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
