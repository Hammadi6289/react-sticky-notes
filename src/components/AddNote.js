const AddNote = () => {
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a new note.."
      ></textarea>
      <div className="note-footer">
        <small> 500 remaining</small>
        <button className="save"> SAVE</button>
      </div>
    </div>
  );
};

export default AddNote;
