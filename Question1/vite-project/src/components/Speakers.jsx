import React from "react";

function Speakers() {
  const speakers = [
    { name: "Alice Johnson", bio: "React Expert and UI Developer." },
    { name: "Bob Smith", bio: "Fullstack Developer and Tech Speaker." }
  ];

  return (
    <section className="speakers">
      <h2>Speakers</h2>
      <div className="speaker-cards">
        {speakers.map((speaker, index) => (
          <div className="card" key={index}>
            <h3>{speaker.name}</h3>
            <p>{speaker.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;
