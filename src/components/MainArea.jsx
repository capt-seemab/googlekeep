import React, { useState } from "react";

import { IoIosAdd } from "react-icons/io";

function MainArea({ onAdd }) {
  const [isExpandedView, setExpandedView] = useState(false);

  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNotes((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  function handleExpanded() {
    setExpandedView(true);
  }

  function submitButton(event) {
    onAdd(notes);
    setNotes({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        {isExpandedView && (
          <input
            value={notes.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={notes.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            rows={isExpandedView ? 3 : 1}
          ></textarea>
        </p>
        <button onClick={submitButton}>
          <IoIosAdd size={30} />
        </button>
      </form>
    </div>
  );
}

export default MainArea;
