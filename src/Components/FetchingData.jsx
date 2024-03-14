import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CharacterList from "./CharacterList";
import DisplayCard from "./DisplayCard";

function FetchingData() {
  const [uid, setUid] = useState("814201215");
  const onChangingId = (e) => {
    setUid(e.target.value);
  };
  const [data, setData] = useState();

  const fetchDataFromAPI = () => {
    fetch(`https://enka.network/api/uid/${uid}`)
      .then((response) => {
        if (!response) throw new Error("Fetching failed");
        response.json();
      })
      .then((jsonifiedData) => setData(jsonifiedData));
     
  };
  useEffect(fetchDataFromAPI, []);
  console.log(data);

  return (
    <>
      <Navbar uid={uid} onChangingId={onChangingId} />
      <CharacterList />
      <DisplayCard />
    </>
  );
}

export default FetchingData;
