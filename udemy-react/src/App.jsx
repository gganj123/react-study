import { useState } from "react";
import "./styles.css";
import Tabs from "./components/Tabs";
import Header from "./components/Header/Header";

export default function App() {
<<<<<<< HEAD

  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  function handleSelect(selectedButton) {
    tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  console.log('APP COMPONENT EXECUTING');


  return (
    <div>
      <Header/>
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              <CoreConcept
                title = {CORE_CONCEPTS[0].title}
                description= {CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
                />
                <CoreConcept {...CORE_CONCEPTS[1]}/>
                <CoreConcept {...CORE_CONCEPTS[2]}/>
                <CoreConcept {...CORE_CONCEPTS[3]}/>
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TapButton onSelect={()=>handleSelect('components')}>Components</TapButton>
              <TapButton onSelect={()=>handleSelect('jsx')}>JSX</TapButton>
              <TapButton onSelect={()=>handleSelect('props')}>Props</TapButton>
              <TapButton onSelect={()=>handleSelect('state')}>State</TapButton>
            </menu>
            {selectedTopic}
          </section>
        </main>
     </div>
=======
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <Header />
      <Tabs />
    </div>
>>>>>>> 321ff56b66bdbabb57792825c1694a8530c17349
  );
}
export default App;
