import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* Here, title, description, image are props. */}
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
        {/* <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}
          /> */}
      </ul>
    </section>
  );
}
