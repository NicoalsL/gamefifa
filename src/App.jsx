import { useState } from 'react'
import './App.css'
import Play from './Components/Play'
import { joueurs } from './assets/joueurs'
function App() {
  const [isPlay, setIsPlay] = useState(true)
  const [isCreationEquipe, setIsCreationEquipe] = useState(false)
  
  function commencer(){
    setIsPlay(false)
    setIsCreationEquipe(true)
    
  }

  function CreationEquipe(){
    const [nombre, setNombre] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); // Use useState here
    const probabilites = [0, 1, 1, 2, 2, 2, 3, 3, 4];
  
    function randomValue() {
      const index = Math.floor(Math.random() * probabilites.length);
      return probabilites[index];
    }
  
    let index = 0
    console.log('nombre', nombre)
  
    function handChange(){
      const nouveauNombre = Array(18).fill(0).map(() => randomValue());
      setNombre(nouveauNombre);
      console.log('nombre', nouveauNombre);
    }
    return (
      <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        {joueurs.map((joueur, ij) =>{
          console.log(joueur.subcategories)
          return(
          <div key={ij}>
          <div  className='row' style={{maxWidth: window.innerWidth, width: window.innerWidth}}>
          {joueur.subcategories.map((play, pi) =>{
            index += 1
            console.log('index:', index)
            return(
                      <div key={pi} style={{margin: 10, border: 'black solid 5px', borderRadius: 25, height: 100, padding: 10, display: 'flex', flexDirection: 'column', backgroundColor: joueur.color}}>
                        <div style={{display: 'flex', color: 'black', flexDirection: 'row', justifyContent: 'space-around'}}>
                        <p style={{fontWeight: 'bold'}}>{play.subRole}</p>
                      <div style={{border: 'black 5px solid', height: 15, width: 15, background: 'black', borderRadius: 30, textAlign: 'center'}}>
                      <p style={{margin: 0, padding: 0, textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
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
        <button type="button" onClick={handChange} style={{margin: 50}}>Jouez</button>
      </div>
    )
}

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',width: window.innerWidth }}>
      {isPlay && <Play commencer={commencer} />}
      {isCreationEquipe && <CreationEquipe />}

    </div>

  )
}

export default App
