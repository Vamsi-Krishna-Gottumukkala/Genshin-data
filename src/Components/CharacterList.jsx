import React from 'react'
import Button from './Button'

function CharacterList(props) {

  return (
    <div style={{display:"flex",justifyContent:"center",gap:'10px'
    }}>
        <Button characterId = {props.data[0].avatarId}/>
        <Button characterId = {props.data[1].avatarId}/>
        <Button characterId = {props.data[2].avatarId}/>
        <Button characterId = {props.data[3].avatarId}/>
        <Button characterId = {props.data[4].avatarId}/>
        <Button characterId = {props.data[5].avatarId}/>
        <Button characterId = {props.data[6].avatarId}/>
        <Button characterId = {props.data[7].avatarId}/>
    </div>
  )
}

export default CharacterList