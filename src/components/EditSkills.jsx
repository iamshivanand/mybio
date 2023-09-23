import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";

const EditSkills = ({ setEditSkills, setSubjects, setHobbies, setSkills1 }) => {
  const [totalskills, setTotalSkills] = useState([]);
  const [skills, setSkills] = useState([]);
  const [hobbies1, setHobbies1] = useState([]);
  const [subjects1, setSubjects1] = useState([]);
  const [hobbies2, setHobbies2] = useState([]);
  const [subjects2, setSubjects2] = useState([]);
  const [clicked, setClicked] = useState(false);
  const handleIncreaseSkills = () => {};
  const getHobbies = async () => {
    const { data } = await axios.get(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json"
    );
    setHobbies1(data.result[0].hobbies);
  };
  const getSubjects = async () => {
    const { data } = await axios.get(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json"
    );
    setSubjects1(data.result[0].subjects);
  };

  const getSkills = async () => {
    const { data } = await axios.get(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json"
    );

    setTotalSkills(data.result[0].skills);
  };
  console.log("data another", skills);
  useEffect(() => {
    setSkills1(skills);
    setSubjects(subjects2);
    setHobbies(hobbies2);
  }, [clicked]);

  useEffect(() => {
    getSkills();
    getHobbies();
    getSubjects();
  }, []);

  return (
    <div>
      <div className="skills-nav">
        <span style={{ fontSize: 18, fontWeight: "bold" }}>Skills</span>
      </div>
      <p style={{ textAlign: "left" }}>
        I am incredible at these skills/ professionally great at
      </p>
      <div className="skills-container-edit">
        <div className="skills-input">
          {skills.map((each, index) => (
            <div
              style={{
                maxWidth: "100px",
                height: "auto",
                margin: "5px",
                background: "blue",
                padding: "5px 10px",
                borderRadius: "20px",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <sapn>{each?.value}</sapn>

              <ClearIcon
                fontSize="small"
                style={{
                  height: "16px",
                  width: "16px",
                  backgroundColor: "white",
                  color: "blue",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
                onClick={() => {
                  setClicked(!clicked);
                  let filtered = skills.filter(
                    (skill) => skill?._id !== each?._id
                  );
                  console.log("data folteresd", filtered, each);
                  setSkills(filtered);
                }}
              />
            </div>
          ))}
        </div>
        <div className="custom-dropdown">
          {totalskills.map((each, index) => (
            <div
              style={{
                maxWidth: "90px",
                height: "auto",
                margin: "5px",
                background: "blue",
                padding: "5px 10px",
                borderRadius: "20px",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setClicked(!clicked);

                let temp = skills;
                temp.push(each);
                console.log("data onClick increase", temp);
                setSkills(temp);
              }}
              id={each._id}
            >
              <span>{each?.value}</span>
            </div>
          ))}
        </div>
      </div>
      <p style={{ textAlign: "left" }}>Hobbies i am pasionate about</p>
      <div className="skills-container-edit">
        <div className="skills-input">
          {hobbies2.map((each, index) => (
            <div
              style={{
                maxWidth: "100px",
                height: "auto",
                margin: "5px",
                background: "blue",
                padding: "5px 10px",
                borderRadius: "20px",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <sapn>{each?.value}</sapn>

              <ClearIcon
                fontSize="small"
                style={{
                  height: "16px",
                  width: "16px",
                  backgroundColor: "white",
                  color: "blue",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
                onClick={() => {
                  setClicked(!clicked);
                  let filtered = hobbies2.filter(
                    (skill) => skill?._id !== each?._id
                  );
                  console.log("data folteresd", filtered, each);
                  setHobbies2(filtered);
                }}
              />
            </div>
          ))}
        </div>
        <div className="custom-dropdown">
          {hobbies1.map((each, index) => (
            <div
              style={{
                maxWidth: "90px",
                height: "auto",
                margin: "5px",
                background: "blue",
                padding: "5px 10px",
                borderRadius: "20px",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setClicked(!clicked);

                let temp = hobbies2;
                temp.push(each);
                console.log("data onClick increase", temp);
                setHobbies2(temp);
              }}
              id={each._id}
            >
              <span>{each?.value}</span>
            </div>
          ))}
        </div>
      </div>
      <p style={{ textAlign: "left" }}>My favorite Subjects are</p>
      <div className="skills-container-edit">
        <div className="skills-input">
          {subjects2.map((each, index) => (
            <div
              style={{
                maxWidth: "100px",
                height: "auto",
                margin: "5px",
                background: "blue",
                padding: "5px 10px",
                borderRadius: "20px",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <sapn>{each?.value}</sapn>

              <ClearIcon
                fontSize="small"
                style={{
                  height: "16px",
                  width: "16px",
                  backgroundColor: "white",
                  color: "blue",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
                onClick={() => {
                  setClicked(!clicked);
                  let filtered = subjects2.filter(
                    (skill) => skill?._id !== each?._id
                  );
                  console.log("data folteresd", filtered, each);
                  setSubjects2(filtered);
                }}
              />
            </div>
          ))}
        </div>
        <div className="custom-dropdown">
          {subjects1.map((each, index) => (
            <div
              style={{
                maxWidth: "90px",
                height: "auto",
                margin: "5px",
                background: "blue",
                padding: "5px 10px",
                borderRadius: "20px",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setClicked(!clicked);

                let temp = subjects2;
                temp.push(each);
                console.log("data onClick increase", temp);
                setSubjects2(temp);
              }}
              id={each._id}
            >
              <span>{each?.value}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        className="save-button"
        style={{ width: "250px" }}
        onClick={() => setEditSkills(false)}
      >
        Save
      </button>
    </div>
  );
};

export default EditSkills;
