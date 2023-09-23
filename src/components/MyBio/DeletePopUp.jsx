import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const DeletePopUp = ({ setResumeFile, setshoWPopUp }) => {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aliceblue",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <p style={{ margin: 20 }}>
          <DeleteIcon style={{ color: "red" }} />
        </p>
        <p>Are you sure you want to delete your resume?</p>
        <div>
          <button
            style={styles.cancelButton}
            onClick={() => {
              setshoWPopUp(false);
            }}
          >
            Cancel
          </button>
          <button
            style={styles.deleteButton}
            onClick={() => {
              setResumeFile(null);
              setshoWPopUp(false);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  buttonStyle: {},
  cancelButton: {
    height: "30px",
    width: "100px",
    borderRadius: "25px",
    cursor: "pointer",
    color: "black",
    backgroundColor: "white",
    marginRight: "5px",
  },
  deleteButton: {
    height: "30px",
    borderRadius: "25px",
    cursor: "pointer",
    width: "100px",
    border: "none",
    color: "white",
    backgroundColor: "red",
    marginLeft: "5px",
  },
};

export default DeletePopUp;
