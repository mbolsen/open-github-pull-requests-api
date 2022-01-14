// ---IMPORT COMPONENTS---

// ---CREATE CONTEXT---
export const AppContext = React.createContext();

export const App = function () {
  // ---STATE VARIABLES---
  const [example, setExample] = useState();

  // ---COMPONENT FUNCTIONS---

  // ---USE EFFECT---

  // ---RENDER COMPONENT---
  return (
    <div>
      <AppContext.Provider value={{ example }}>
        <div>
          <h1>GitHub Repository Open Pull Requests</h1>
          <form>
            <label>GitHub Repository URL:
              <input type="text"></input>
              <button type="submit">Submit</button>
            </label>
          </form>
        </div>
      </AppContext.Provider>
    </div>
  );
};