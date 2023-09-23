import React from "react";

const PdfCard = ({ resumefile, setShowFullResume }) => {
  return (
    <div style={{ height: "90vh" }}>
      <span
        style={{ float: "right", fontSize: 20, cursor: "pointer" }}
        onClick={() => setShowFullResume(false)}
      >
        x
      </span>
      <embed
        src={URL.createObjectURL(resumefile)}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default PdfCard;
