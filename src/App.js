// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selecteTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton -> components, jsx, props, state.
    setSelectedTopic(selectedButton);
    console.log(selectedButton); // Will show previous selected value -> Becoz setSelectedTopic changes the value when it is re-executed.
  }

  let tabComponent = <p>Please select a topic.</p>;

  if (selecteTopic) {
    tabComponent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selecteTopic].title}</h3>
        <p>{EXAMPLES[selecteTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selecteTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      {/* Custom component used here is Header. */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Here, title, description, image are props. */}
            {CORE_CONCEPTS.map((item) => <CoreConcepts key={item.title} {...item} />)}
            {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selecteTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selecteTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selecteTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selecteTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabComponent}
        </section>
      </main>
    </div>
  );
}

export default App;
