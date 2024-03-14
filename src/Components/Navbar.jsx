import React, { useEffect, useState } from "react";
import profilePicture from '../data/splashArtAlternative.json'

function Navbar(props) {
  const data = props.data;
  const [profilePic, setProfilePic] = useState();
  useEffect(()=>setProfilePic(profilePicture), [])
  if(!profilePic) return <h1>Loading</h1>
  const pictureIndex = data.profilePicture.id.toString();
  console.log(profilePic);

  return (
    <div className="nav">
      <div className="imageBox">
        <div><img src={`https://enka.network/ui/${profilePic[pictureIndex].iconPath}.png`} alt='pp' width='100px' height='100px'></img></div>
        <div>
          {data.nickname}<br></br>
          AR {data.level}<br></br>
          WL {data.worldLevel}<br></br>
          {data.signature}
          
        </div>
      </div>
      <div>
        <h3>Total Achievements : 123</h3>
        <h3>Spiral Abyss : 12-3</h3>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        <input type="text" value={props.uid} onChange={props.onChangingId}/>
      </div>
    </div>
  );
}

export default Navbar;
