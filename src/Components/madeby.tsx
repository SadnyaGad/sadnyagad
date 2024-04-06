
const MadeByWallace = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#f0f0f0",
        padding: "1px",
        width: "100%",
        textAlign: "center",
        zIndex: 9999,
      }}
    >
      Interested in obtaining a similar professional resume? Reach out to{" "}
      <a href="https://wallacescott.netlify.com" style={linkStyle}>
        Wallace Scott 
      </a>
       
    </div>
  );
};



const linkStyle = {
  color: "#ef233c",
  textDecoration: "underlined",
};

export default MadeByWallace;
