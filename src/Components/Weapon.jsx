import React, { useEffect, useState } from "react";
import weaponNames from "../data/weapons.json";
import stats from "../data/stats.json";
import useHover from "../Hooks/useHover";
import character from "../data/characters.json";
import Talents from "./Talents";

function Weapon(props) {
  const [weapons, setWeapons] = useState(weaponNames.en);
  useEffect(() => setWeapons(weapons), [weapons]);
  const [stat, setStat] = useState(stats);
  useEffect(() => setStat(stat), [stat]);
  const { data, index, avatars } = props;
  const baseStat =
    stats[data[index].equipList[5].flat.weaponStats[0].appendPropId];
  const specialStat =
    stats[data[index].equipList[5].flat.weaponStats[1].appendPropId];
  const stringVal = data[index].equipList[5].flat.nameTextMapHash.toString();
  const name = weapons[stringVal];
  const [hover, mouseOver, mouseNotOver] = useHover();
  const [hover2, mouseOver2, mouseNotOver2] = useHover();

  const skills = character[
    avatars.showAvatarInfoList[index].avatarId
  ].SkillOrder.map((val) => {
    const talentImageSource =
      character[avatars.showAvatarInfoList[index].avatarId].Skills[
        val.toString()
      ];
    const level = data[index].skillLevelMap[val.toString()];
    return (
      <Talents talentImageSource={talentImageSource} val={val} level={level} />
    );
  });

  return (
    <>
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
        <div
          onMouseEnter={mouseOver2}
          onMouseLeave={mouseNotOver2}
          style={{
            width: "150px",
            height: "150px",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={`https://enka.network/ui/${data[index].equipList[5].flat.icon}.png`}
            alt="weapon"
            width="150px"
            height="150px"
          />
          {hover && (
            <div
              style={{
                display: "flex",
                position: "absolute",
                flexWrap: "wrap",
                color: "white",
                backgroundColor: "black",
                borderRadius: "30px",
                top: "250px",
              }}
            >
              {data[index].equipList[5].weapon.level}
            </div>
          )}
        </div>
        {name}
        <br></br>
        {baseStat} : {data[index].equipList[5].flat.weaponStats[0].statValue}
        <br></br>
        {specialStat} : {data[index].equipList[5].flat.weaponStats[1].statValue}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "inherit",
        }}
      >
        {skills}
      </div>
    </>
  );
}

export default Weapon;
