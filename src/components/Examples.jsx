import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
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
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selecteTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selecteTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selecteTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selecteTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabComponent}
      </Tabs>
    </Section>
  );
}
