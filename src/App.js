import React, { useState } from "react";
import { nanoid } from "nanoid"; //for temporary use of random generated Ids
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(), //for temporary use of random generated Ids
      text: "this is first dummy note",
      date: "15/2/2024",
    },
    {
      id: nanoid(),
      text: "this is second dummy note",
      date: "15/2/2023",
    },
    {
      id: nanoid(),
      text: "this is 3rd dummy note",
      date: "15/6/2022",
    },
    {
      id: nanoid(),
      text: "this is 4th dummy note",
      date: "22/2/2022",
    },
  ]);
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
