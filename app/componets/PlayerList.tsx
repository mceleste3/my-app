"use client";

import { useEffect, useState } from "react";
import PlayerItem from "./PlayerItem";

export default function PlayerList(props:any){
    const[playerList, setPlayerList] = useState([...props.matches])
    //console.log(`LIsta ${props.matches}`)
    console.log(playerList)

    //useEffect(()=>{

    //}, [])
    return(
        <div className="text-white">
        Lista
        {playerList.map((match:any) =>(
          <PlayerItem key={match.id} match = {match}/>
        ))}
      </div>
    )

}