import React from "react";

function Schedule() {
  const sessions = [
    { time: "10:00 AM", activity: "Opening Keynote" },
    { time: "11:30 AM", activity: "React Workshop" },
    { time: "02:00 PM", activity: "Panel Discussion" },
    { time: "04:00 PM", activity: "Closing Remarks" }
  ];

  return (
    <section className="schedule">
      <h2>Schedule</h2>
      <ul>
        {sessions.map((session, index) => (
          <li key={index}>
            <strong>{session.time}:</strong> {session.activity}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Schedule;
