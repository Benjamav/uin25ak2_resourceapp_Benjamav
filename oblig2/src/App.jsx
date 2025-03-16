import React, { useState } from "react";
import "./style.css";
import resources from "./ressurser";

// Kategorier og beskrivelser
const categories = [
  { key: "html", label: "HTML", description: "HTML står for HyperText Markup Language og brukes til å lage websider." },
  { key: "css", label: "CSS", description: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer." },
  { key: "javascript", label: "JavaScript", description: "JavaScript er et programmeringsspråk som gjør nettsider interaktive." },
  { key: "react", label: "React", description: "React er et JavaScript-bibliotek for å bygge brukergrensesnitt." },
  { key: "headless-cms", label: "Sanity", description: "Sanity er en headless CMS-løsning for innholdsstyring." }
];

// Nav komponentet tar inn activeTab og setActiveTab som props
const Nav = ({ activeTab, setActiveTab }) => {
  return (
    <nav>
      {categories.map(({ key, label }) => (
        <span
          key={key}
          className={activeTab === key ? "active" : ""}
          onClick={() => setActiveTab(key)}
        >
          {label}
        </span>
      ))}
    </nav>
  );
};

// ResourceList komponentet tar inn activeTab som props
const ResourceList = ({ activeTab }) => {
  const category = categories.find((c) => c.key === activeTab);
  const filteredResources = resources.filter((resource) => resource.category === activeTab);

  return (
    <section>
      <h2>{category.label}</h2>
      <p>{category.description}</p>
      <h3>Kilder:</h3>
      <ul>
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <li key={resource.url}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))
        ) : (
          <p>Ingen ressurser tilgjengelige for denne kategorien.</p>
        )}
      </ul>
    </section>
  );
};

// App komponentet tar inn activeTab og setActiveTab som props
const App = () => {
  const [activeTab, setActiveTab] = useState("html");

  return (
    <div>
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      <ResourceList activeTab={activeTab} />
    </div>
  );
};

export default App;
