import React from "react";

function Settings(props) {
  const { data } = props;
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          background:
            "url(https://i.pinimg.com/originals/c4/19/7d/c4197d1cf950efbd2f69b477aa5354d0.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: "1",
          filter: "blur(6px)",
        }}
      ></div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "center",
          position: "absolute",
          zIndex: "2",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            backgroundColor: "rgba(240,248,255,0.5)",
            borderRadius: "30px",
            height: "200px",
            width: "490px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            zIndex: "3",
            // boxShadow: "5px 5px 5px",
          }}
        >
          {data}
        </div>
      </div>
    </>
  );
}

export default Settings;
