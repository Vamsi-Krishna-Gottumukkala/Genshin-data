import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CharacterList from "./CharacterList";
import DisplayCard from "./DisplayCard";

function FetchingData() {
  const [uid, setUid] = useState("814201215");
  const onChangingId = (e) => {
    setUid(e.target.value);
  };
  const [index, setIndex] = useState(1);
  const [data, setData] = useState();

  const fetchDataFromAPI = () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = `https://enka.network/api/uid/${uid}`;
    fetch(proxyUrl + apiUrl)
    .then((data) => {
        if (!data.ok) throw new Error('Failed to fetch');
        return data.json();
    })
    .then((formattedData) => setData(formattedData))
    .catch((error) => console.error(error));
};
  useEffect(fetchDataFromAPI, []);
  
  if(!data) return(<><h1>Loading</h1></>)
  console.log(data);
  return (
    <>
      <Navbar uid={uid} onChangingId={onChangingId} data={data.playerInfo}/>
      <CharacterList data={data.avatarInfoList}/>
      <DisplayCard data={data.playerInfo} avatars = {data.avatarInfoList} index={index}/>
    </>
  );
}

export default FetchingData;
