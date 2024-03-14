import React from 'react'
import Weapon from './Weapon'
import ArtifactList from './ArtifactList'
import SplashArt from './SplashArt'
import CharacterStats from './CharacterStats'


function DisplayCard(props) {
  const {data,avatars,index} = props;
  return (
    <div className='displayCard'>
        <SplashArt data={data} index={index}/>
        <div>
        <Weapon data={avatars} index={index}/>
        <CharacterStats index={index}/>
        </div>
        <ArtifactList data={avatars} index={index} />
    </div>
  )
}

export default DisplayCard