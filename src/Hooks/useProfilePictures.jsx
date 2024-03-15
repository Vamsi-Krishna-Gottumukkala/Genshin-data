import profilePicture from "../data/splashArtAlternative.json";
import { useState, useEffect } from "react";

function useProfilePictures(props) {
  const data = props.data;
  const requireSquare = props.requireSquare;
  const [profilePic, setProfilePic] = useState(profilePicture);
  useEffect(() => {
    setProfilePic(profilePicture);
  }, []);
  const pictureIndex = data.profilePicture.id.toString();
  let imagePath = profilePic[pictureIndex].iconPath;
  if (requireSquare === true)
    imagePath = imagePath.substring(0, imagePath.length - 7);
  console.log(imagePath);
  const imgUrl = `https://enka.network/ui/${imagePath}.png`;
  return [imgUrl];
}

export default useProfilePictures;
