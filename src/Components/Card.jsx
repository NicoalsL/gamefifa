export default function Card(play, nombre, pi){
    console.log(play)
    console.log(nombre)
    console.log(pi)

    return(
        <div style={{border: 'black solid 5px', borderRadius: 25, height: 100, padding: 10, display: 'flex', flexDirection: 'column'}}>
        {play.subRole} {nombre[pi]}
          <select name="" id="">
            {play.players[nombre[pi]].map((plays,i) =>(
              <option key={i}>{plays}</option>
            ))}
          </select>
        </div>
    )
}