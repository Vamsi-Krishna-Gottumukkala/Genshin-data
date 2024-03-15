import profilePicture from "../data/splashArtAlternative.json";

function useProfilePictures(props) {
  const data = props.data;
  const requireSquare = props.requireSquare;
  const requiredImage = props.requiredImage;
  let pictureIndex = data.profilePicture.id.toString();
  if(requiredImage) pictureIndex = requiredImage;
  let imagePath = profilePicture[pictureIndex].iconPath;
  if (requireSquare === true)
    imagePath = imagePath.substring(0, imagePath.length - 7);
  const imgUrl = `https://enka.network/ui/${imagePath}.png`;
  return [imgUrl];
}

export default useProfilePictures;
