import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
//import { redirect } from 'next/navigation'
//import { useEffect, useState} from 'react'
//import AddUser from './componets/AddPlayer'
//import AddPlayer from './componets/AddPlayer';
import PlayerItem from './componets/PlayerItem';
import PlayerList from './componets/PlayerList';



export default async function Home() {
  const supabase = createServerComponentClient({ cookies }) //función q me da acceso a la cookies
  // const {data, error } = await supabase.auth.getUser();
  //if(!data.user){
  //  redirect("/login");
  //}

 // const [name, setName] = useState('');
  //const [matches, setMatchesList] = useState([]);

  const { data: matches, error } = await supabase.from("matches").select();

  if (!matches) {
    return <div>{error?.toString()}</div>;
  }

  if (matches.length===0) {
    return <div>No files</div>;
  }
 /* useEffect(() => {
    const channel = supabase.channel('channel').on('postgres_changes', { event: "*", schema: "public", table: "matches," }, (payload) => { console.log(payload); }).subscribe();

  }, [])
*/

/*const addUser = async (userName:any) => {
  let { data: match} = await supabase
    .from('matches')
    .insert({ name: userName })
    .single();
  setMatchesList([...matches, match]);
}; onClick={() => addUser(newUser)}

        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        -----------------------------------
              <ul>
        <h1>LISTA DE PARTIDAS</h1>
          {matches?.map((match) => (
            <li className="text-white" key={match.id}>
              {match.name}
            </li>
          ))}
      </ul>
      <div className="text-white">
        Lista
        {matches.map((match) =>(
          <PlayerItem key={match.id} match = {match}/>
        ))}
      </div>

*/

  return (
    <>
      <PlayerList matches = {matches}/>
    </>
  )
}
