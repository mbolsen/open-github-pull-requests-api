/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import axios from 'axios';

export const App = function () {
  // ---STATE VARIABLES---
  const [text, setText] = useState();
  const [response, setResponse] = useState();

  // ---COMPONENT FUNCTIONS---
  const handleTextInput = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    // prevent the page fom re-rendering after submit button press
    event.preventDefault();
    // Send request to the API.
    // Since we are using the localhost there is no need to put the full URL,
    // If this client app was not served by the same server we would need to add the full URL of the API
    axios.get('/openpulls', { text })
      .then((res) => {
        // set the response state equal to the response from the get request
        setResponse(res);
      });
  };

  // ---RENDER COMPONENT---
  return (
    <div>
      <h1>GitHub Repository Open Pull Requests</h1>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label>
          GitHub Repository URL:
          <input type="text" onChange={handleTextInput} />
          <button type="submit">Submit</button>
        </label>
      </form>

      {/* the response is displayed in the div below. */}
      {/* the JSON.stringify response null 2 is needed for making the text 'pretty' */ }
      {/* more information on: https://stackoverflow.com/questions/30765163/pretty-printing-json-with-react */}
      <div className="response-box">
        Response:
        <pre>
          {JSON.stringify(response, null, 2)}
        </pre>
      </div>
    </div>
  );
};
