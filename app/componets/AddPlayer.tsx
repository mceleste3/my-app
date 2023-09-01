/*"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ChangeEventHandler, useState } from "react";

export default function AddPlayer(props: any){
    const supabase = createClientComponentClient();
    const [name, setName] = useState('');

    //const selectFile: ChangeEventHandler<HTMLInputElement> = (e) => {} pARA SELECCIONAR UN ELEMENTO

    const add = async(nickname:String) => {
        let {data, error} = await supabase.from('matches').insert({name:nickname}).single();
        if(error){
            console.log(error);
        }
        props.;

    };


    return(
        <>
        <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => {
                setName(e.target.value);
            }}
        />
        <button className="py-1 px3 rounded" onClick={() => add(name)}>Añadir</button>
        </>
    )
}*/