import React, { useEffect, useState } from 'react'
import weaponNames from '../data/weapons.json'
import stats from '../data/stats.json'

function Weapon(props) {
  const [weapons, setWeapons] = useState(weaponNames.en)
  useEffect(()=>setWeapons(weapons), [weapons]);
  const [stat, setStat] = useState(stats)
  useEffect(()=>setStat(stat), [stat]);
  const {data, index} = props;
  console.log(data[index].equipList[5].flat.weaponStats[0]);
  const baseStat = stats[data[index].equipList[5].flat.weaponStats[0].appendPropId]
  const specialStat = stats[data[index].equipList[5].flat.weaponStats[1].appendPropId]
  const stringVal = data[index].equipList[5].flat.nameTextMapHash.toString();
  const name = weapons[stringVal];

  return (
    <div style={{display:"flex"}}><img src={`https://enka.network/ui/${data[index].equipList[5].flat.icon}.png`} alt='weapon' width='75px' height='75px'/>
    {name}<br></br>
    {baseStat} : {data[index].equipList[5].flat.weaponStats[0].statValue}<br></br>
    {specialStat} : {data[index].equipList[5].flat.weaponStats[1].statValue}
    </div>
  )
}

export default Weapon