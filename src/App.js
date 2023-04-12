import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import MainArea from "./components/MainArea";
import Note from "./components/Note";


function App(props) {
  const [notesData, setNotesData] = useState([]);

  function addNote(newNote) {
    setNotesData((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotesData((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  return (
    <div className="App">
      <Navbar />
     
      <MainArea onAdd={addNote} />
      {notesData.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
    </div>
  );
}

export default App;
