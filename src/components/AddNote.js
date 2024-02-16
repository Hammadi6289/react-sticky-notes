import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const charLimit = 500; // max allowed 500 chars

  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      // handle note char size
      setNoteText(e.target.value);
    } else {
      alert("Limit has reached");
    }
  };
  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    } else {
      alert("Note must not be empty");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="11"
        cols="10"
        placeholder="Type to add a new note.."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small> {charLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSave}>
          {" "}
          SAVE
        </button>
      </div>
    </div>
  );
};

export default AddNote;
