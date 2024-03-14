import profilePicture from '../data/splashArtAlternative.json'
import { useState, useEffect } from 'react'

function useProfilePictures(props) {
    const data = props.data
    const [profilePic, setProfilePic] = useState(profilePicture);
    useEffect(() => {
        setProfilePic(profilePicture);
    }, []);
    console.log(data);
    const pictureIndex = data.profilePicture.id.toString();
    const imgPath = `https://enka.network/ui/${profilePic[pictureIndex].iconPath}.png`;
    return [imgPath];
}

export default useProfilePictures
