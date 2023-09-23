import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "./Mybio.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import resumeIcon from "../../assets/resume.svg";
import PhotoIcon from "@mui/icons-material/Photo";
import PdfCard from "./PdfViewer/PdfCard";
import DeletePopUp from "./DeletePopUp";
import Skills from "./Skills";
import EditSkills from "../EditSkills";

const MyBioEdit = ({
  setResumeFile,
  setBio,
  setBloodGroup,
  resumefile,
  bio,
  bloodGroup,
  setEdit,
  setshoWPopUp,
}) => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const handleResumeupload = () => {
    document.getElementById("file-input").click();
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setResumeFile(selectedFile);
    // / Generate a data URL for the first page of the PDF as a background image
    setIsChanged(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      setBackgroundImage(`url(${e.target.result})`);
    };
    reader.readAsDataURL(selectedFile);
  };
  // const generatePreview = () => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const base64EncodedFileContents = btoa(reader.result);
  //     setPreview(
  //       `url(data:application/pdf;base64,${base64EncodedFileContents})`
  //     );
  //   };
  //   reader.readAsBinaryString(resumefile);
  // };

  return (
    <div className="my-bio-editable-container">
      <div>
        <div className="bio-input">
          <span className="heading">Write something about ypurself</span>
          <textarea
            type="text"
            maxLength="500"
            placeholder="Write something here..."
            value={bio}
            onChange={(e) => {
              setIsChanged(true);
              setBio(e.target.value);
            }}
          />
          <span style={{ alignSelf: "flex-end" }}>{bio.length}/500</span>
        </div>
        <div className="resume-container-edit">
          <div
            className="resume-edit-container"
            onClick={() => handleResumeupload()}
          >
            <PhotoIcon fontSize="large" />
            <span>Upload Resume</span>
            <input
              type="file"
              accept=".pdf"
              id="file-input"
              onChange={(e) => handleFileChange(e)}
              className="hidden"
            />
          </div>
          <span>
            {resumefile && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{resumefile.name}.pdf</span>
                <span>
                  <DeleteIcon
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      setshoWPopUp(true);
                    }}
                  />
                </span>
              </div>
            )}
          </span>
        </div>
        <div className="blood-group-dropdown">
          <select
            name="bloodgroup"
            value={bloodGroup}
            onChange={(e) => {
              setIsChanged(true);
              setBloodGroup(e.target.value);
            }}
          >
            <option value="A+ (positive)">A+ (positive)</option>
            <option value="A- (negative)">A- (negative)</option>
            <option value="B+ (positive)">B+ (positive)</option>
            <option value="B- (negative)">B- (negative)</option>
            <option value="AB+ (positive)">AB+ (positive)</option>
            <option value="AB- (negative)">AB- (negative)</option>
            <option value="O+ (positive)">O+ (positive)</option>
            <option value="O- (negative)">O- (negative)</option>
          </select>
        </div>
      </div>
      <button
        className={`save-button ${!isChanged && "disbaled"}`}
        onClick={() => {
          if (isChanged) setEdit(false);
        }}
      >
        Save
      </button>
    </div>
  );
};

const Mybio = () => {
  const [Edit, setEdit] = useState(false);
  const [resumefile, setResumeFile] = useState(null);
  const [bio, setBio] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [showFullResume, setShowFullResume] = useState(false);
  const [shoWPopUp, setshoWPopUp] = useState(false);
  const [editSkills, setEditSkills] = useState(false);
  const [skills, setSkills1] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [subjects, setSubjects] = useState([]);
  return (
    <div className="mybio-container">
      {editSkills ? (
        <EditSkills
          setEditSkills={setEditSkills}
          setSkills1={setSkills1}
          setHobbies={setHobbies}
          setSubjects={setSubjects}
        />
      ) : (
        <div>
          {shoWPopUp ? (
            <DeletePopUp
              setResumeFile={setResumeFile}
              setshoWPopUp={setshoWPopUp}
            />
          ) : (
            <div>
              {showFullResume ? (
                <PdfCard
                  resumefile={resumefile}
                  setShowFullResume={setShowFullResume}
                />
              ) : (
                <>
                  <div className="naviagtion-container">
                    <div>
                      <KeyboardArrowLeftIcon />
                      <span style={{ fontSize: 18, fontWeight: "bold" }}>
                        My Bio
                      </span>
                    </div>
                  </div>
                  {Edit ? (
                    <MyBioEdit
                      setResumeFile={setResumeFile}
                      resumefile={resumefile}
                      bio={bio}
                      setBio={setBio}
                      bloodGroup={bloodGroup}
                      setBloodGroup={setBloodGroup}
                      setEdit={setEdit}
                      setshoWPopUp={setshoWPopUp}
                    />
                  ) : (
                    <div className="all-section-container">
                      <div className="about-me-section">
                        <div className="heading-container">
                          <div>
                            <span style={{ fontSize: 18, fontWeight: "bold" }}>
                              About me
                            </span>{" "}
                            <EditIcon
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                setEdit(true);
                              }}
                            />
                          </div>
                        </div>
                        <div className="about-me-details-container">
                          {bio ? (
                            <span>{bio}</span>
                          ) : (
                            <span>No about me added yet</span>
                          )}

                          <hr
                            style={{
                              width: "95%",
                              border: "2px solid lightgrey",
                              marginTop: 20,
                            }}
                          />
                        </div>
                      </div>
                      <div className="blood-group-container">
                        <div>Blood Group</div>
                        <div>{bloodGroup}</div>
                      </div>
                      <div
                        className="resume-container"
                        onClick={() => setShowFullResume(true)}
                      >
                        <div>
                          <img src={resumeIcon} alt="resume" />
                          <div>Resume</div>
                        </div>
                        <KeyboardArrowRightIcon />
                      </div>
                      <hr
                        style={{
                          width: "95%",
                          border: "2px solid lightgrey",
                          marginTop: 20,
                        }}
                      />
                      <Skills
                        setEditSkills={setEditSkills}
                        skills={skills}
                        hobbies={hobbies}
                        subjects={subjects}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Mybio;
