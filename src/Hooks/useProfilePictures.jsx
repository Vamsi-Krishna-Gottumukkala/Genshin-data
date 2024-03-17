import profilePic from "../data/splashArtAlternative.json";
import alternate from "../data/splashArtRelation.json";

function useProfilePictures(props) {
  const data = props.data;
  const requireSquare = props.requireSquare;
  const requiredImage = props.requiredImage;
  let pictureIndex = data.profilePicture.id;
  if (data.profilePicture.id !== undefined)
    pictureIndex = data.profilePicture.id;
  else pictureIndex = alternate[data.profilePicture.avatarId.toString()];
  if (requiredImage) pictureIndex = requiredImage;
  let imagePath = profilePic[pictureIndex].iconPath;
  if (requireSquare === true)
    imagePath = imagePath.substring(0, imagePath.length - 7);
  const imgUrl = `https://enka.network/ui/${imagePath}.png`;
  return [imgUrl];
}

export default useProfilePictures;
