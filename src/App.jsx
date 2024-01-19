import { joueurs } from './assets/joueurs'
import { useState } from 'react';
import './App.css'

function App() {
  const [nombre, setNombre] = useState([0,0,0,0,0,0,0,0,0,0,0]); // Use useState here
  const probabilites = [0, 1, 1, 2, 2, 2, 3, 3, 4];

  function randomValue() {
    const index = Math.floor(Math.random() * probabilites.length);
    return probabilites[index];
  }

  let index = 0
  console.log('nombre', nombre)

  function handChange(){
    const nouveauNombre = Array(11).fill(0).map(() => randomValue());
    setNombre(nouveauNombre);
    console.log('nombre', nouveauNombre);
  }
  return (
    <>
      {joueurs.map((joueur, ij) =>{
        console.log(joueur.subcategories)
        return(
        <div key={ij}>
        <div  className='row'>
        {joueur.subcategories.map((play, pi) =>{
          index += 1
          console.log('index:', index)
          return(
                    <div key={pi} style={{margin: 10, border: 'black solid 5px', borderRadius: 25, height: 100, padding: 10, display: 'flex', flexDirection: 'column', backgroundColor: 'white'}}>
                      <div style={{display: 'flex', color: 'black', flexDirection: 'row', justifyContent: 'space-around'}}>
                      <p>{play.subRole}</p>
                    <div style={{border: 'red 5px solid', height: 15, width: 15, background: 'red', borderRadius: 30, textAlign: 'center'}}>
                    <p style={{margin: 0, padding: 0, textAlign: 'center'}}>
                      {nombre[index - 1]}
                    </p>
                      </div>
                    </div>
                      <select name="" id="">
                        {play.players[nombre[index -1]].map((plays,i) =>(
                          <option key={i}>{plays}</option>
                        ))}
                      </select>
                    </div>
              )
            })}
            </div>
        </div>
      )})}
      <button type="button" onClick={handChange}>Jouez</button>
    </>
  )
}

export default App
