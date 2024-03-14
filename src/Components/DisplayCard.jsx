import React from 'react'
import Weapon from './Weapon'
import ArtifactList from './ArtifactList'
import SplashArt from './SplashArt'
import CharacterStats from './CharacterStats'


function DisplayCard() {
  return (
    <div className='displayCard'>
        <SplashArt/>
        <div>
        <Weapon/>
        <CharacterStats/>
        </div>
        <ArtifactList/>
    </div>
  )
}

export default DisplayCard