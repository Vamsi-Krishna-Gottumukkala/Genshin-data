import React from 'react'
import Artifact from './Artifact'

function ArtifactList(props) {
  return (
    <div style={{height:'400px'}}>
        <Artifact imgPath = {props.data[props.index].equipList[0].flat.icon}/>
        <Artifact imgPath = {props.data[props.index].equipList[1].flat.icon}/>
        <Artifact imgPath = {props.data[props.index].equipList[2].flat.icon}/>
        <Artifact imgPath = {props.data[props.index].equipList[3].flat.icon}/>
        <Artifact imgPath = {props.data[props.index].equipList[4].flat.icon}/>
    </div>
  )
}

export default ArtifactList