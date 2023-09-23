import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
const Skills = ({ setEditSkills, skills, hobbies, subjects }) => {
  return (
    <div>
      <div className="skills-nav">
        <span style={{ fontSize: 18, fontWeight: "bold" }}>Skills</span>
        <EditIcon
          style={{ cursor: "pointer" }}
          onClick={() => setEditSkills(true)}
        />
      </div>
      <p style={{ textAlign: "left" }}>
        I am incredible at these skills/ professionally great at
      </p>
      <div className="skills-container">
        {skills.map((each, index) => (
          <span
            style={{
              width: "auto",
              background: "blue",
              padding: "5px 10px",
              borderRadius: "20px",
              color: "white",
              marginRight: "5px",
            }}
          >
            {each?.value}
          </span>
        ))}
      </div>

      <p style={{ textAlign: "left" }}>Hobbies i am passionate about</p>
      <div className="skills-container">
        {hobbies.map((each, index) => (
          <span
            style={{
              width: "auto",
              background: "blue",
              padding: "5px 10px",
              borderRadius: "20px",
              color: "white",
              marginRight: "5px",
            }}
          >
            {each?.value}
          </span>
        ))}
      </div>

      <p style={{ textAlign: "left" }}>My favourite Subjects are</p>
      <div className="skills-container">
        {subjects.map((each, index) => (
          <span
            style={{
              width: "auto",
              background: "blue",
              padding: "5px 10px",
              borderRadius: "20px",
              color: "white",
              marginRight: "5px",
            }}
          >
            {each?.value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
