import React, { useState } from 'react';

// ---IMPORT COMPONENTS---

// ---CREATE CONTEXT---
export const AppContext = React.createContext();

export const App = function () {
  // ---STATE VARIABLES---
  const [text, setText] = useState();

  // ---COMPONENT FUNCTIONS---
  const handleTextInput = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {

  };

  // ---USE EFFECT---

  // ---RENDER COMPONENT---
  return (
    <div>
      <AppContext.Provider value={{ }}>
        <div>
          <h1>GitHub Repository Open Pull Requests</h1>
          <form>
            <label>
              GitHub Repository URL:
              <input type="text" onChange={handleTextInput} />
              <button type="submit">Submit</button>
            </label>
          </form>
        </div>
      </AppContext.Provider>
    </div>
  );
};
