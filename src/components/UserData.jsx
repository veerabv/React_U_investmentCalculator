import React from "react";

function UserData({ onChange,scheme }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              onChange={(e) => onChange("initial", e.target.value)}
              required
              value={scheme.initial}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              onChange={(e) => onChange("final", e.target.value)}
              required
              value={scheme.final}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              onChange={(e) => onChange("return", e.target.value)}
              required
              value={scheme.return}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              onChange={(e) => onChange("duration", e.target.value)}
              required
              value={scheme.duration}
            />
          </p>
        </div>
      </section>
    </>
  );
}

export default UserData;
