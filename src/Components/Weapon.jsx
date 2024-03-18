import React, { useEffect, useState } from "react";
import weaponNames from "../data/weapons.json";
import stats from "../data/stats.json";
import useHover from "../Hooks/useHover";

function Weapon(props) {
  const [weapons, setWeapons] = useState(weaponNames.en);
  useEffect(() => setWeapons(weapons), [weapons]);
  const [stat, setStat] = useState(stats);
  useEffect(() => setStat(stat), [stat]);
  const { data, index } = props;
  const baseStat =
    stats[data[index].equipList[5].flat.weaponStats[0].appendPropId];
  const specialStat =
    stats[data[index].equipList[5].flat.weaponStats[1].appendPropId];
  const stringVal = data[index].equipList[5].flat.nameTextMapHash.toString();
  const name = weapons[stringVal];
  const [hover, mouseOver, mouseNotOver] = useHover();

  return (
    <div
      onMouseEnter={mouseOver}
      onMouseLeave={mouseNotOver}
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: hover
          ? "rgba(0,248,255,0.5"
          : "rgba(240, 248, 255, 0.2)",
        width: "360px",
        height: "200px",
        borderRadius: "130px",
      }}
    >
      <img
        src={`https://enka.network/ui/${data[index].equipList[5].flat.icon}.png`}
        alt="weapon"
        width="150px"
        height="150px"
      />
      {name}
      <br></br>
      {baseStat} : {data[index].equipList[5].flat.weaponStats[0].statValue}
      <br></br>
      {specialStat} : {data[index].equipList[5].flat.weaponStats[1].statValue}
    </div>
  );
}

export default Weapon;
