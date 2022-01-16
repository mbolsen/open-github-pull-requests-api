import React, { useState } from 'react';
import axios from 'axios';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send request to the API.
    // Since we are using the localhost there is no need to put the full URL,
    // If this client app was not served by the same server we would need to add the full URL of the API
    axios.get('/openpulls', { text })
      .then((res) => {
        // temporary console.log for testing purposes
        console.log(res);
      });
  };

  // ---USE EFFECT---

  // ---RENDER COMPONENT---
  return (
    <div>
      <AppContext.Provider value={{ }}>
        <div>
          <h1>GitHub Repository Open Pull Requests</h1>
          <form
            onSubmit={(event) => {
              // event.preventDefault();
              handleSubmit(event);
            }}
          >
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
