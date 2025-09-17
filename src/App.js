// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      {/* Custom component used here is Header. */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
