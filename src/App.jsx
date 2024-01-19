import { useState } from 'react'
import './App.css'
import Play from './Components/Play'
import { joueurs } from './assets/joueurs'
function App() {
  const [isPlay, setIsPlay] = useState(true)
  const [isCreationEquipe, setIsCreationEquipe] = useState(true)
  
  function commencer(){
    setIsPlay(false)
    setIsCreationEquipe(true)
    
  }

  function CreationEquipe(){
    const [nombre, setNombre] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); // Use useState here
    const [selectedOptions, setSelectedOptions] = useState({}); // Ajout d'un état pour suivre les options sélectionnées
    const [debut, setDebut] = useState(false)
    const [selectedPlayers, setSelectedPlayers] = useState(new Set());

    const probabilites = [0, 1, 1, 2, 2, 2, 3, 3, 4];
  
    function randomValue() {
      const index = Math.floor(Math.random() * probabilites.length);
      return probabilites[index];
    }

    function handleSelectChange(event, uniqueId) {
      const player = event.target.value;
      setSelectedOptions(prevOptions => ({
        ...prevOptions,
        [uniqueId]: player
      }));
    
      // Ajouter le joueur à la liste des joueurs sélectionnés
      if (player !== 'Joueur') {
        setSelectedPlayers(prevSelectedPlayers => new Set(prevSelectedPlayers).add(player));
      }
    
      console.log("player:", uniqueId);
    }
    
  
    let index = 0
    console.log('nombre', nombre)
  
    function handChange(){
      setSelectedPlayers(new Set())
      setDebut(true)
      const nouveauNombre = Array(18).fill(0).map(() => randomValue());
      setNombre(nouveauNombre);
      console.log('nombre', nouveauNombre);
      setSelectedOptions({});

    }
    return (
      <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 0, margin: 0, width: window.innerWidth}}>
        {joueurs.map((joueur, ij) =>{
          console.log(joueur.subcategories)
          if(debut){

          return(
          <div  key={ij} className='row' style={{ width: window.innerWidth }}>
          {joueur.subcategories.map((play, pi) =>{
            const uniqueId = `${ij}-${pi}`; 
            console.log('joeur:',selectedOptions[uniqueId] )
            index += 1
            console.log('index:', index)
            return(
                      <div key={pi} style={{margin: 10, border:'black solid 3px', width: 55 ,borderRadius: 25, height: 100 , padding: 10, display: 'flex', justifyContent: 'center' , flexDirection: 'column', backgroundColor: joueur.color}}>
                        <div style={{display: 'flex', marginBottom: 10, color: 'black', flexDirection: 'row', justifyContent: 'space-around', textAlign: 'center', alignItems: 'center'}}>
                        <p style={{fontWeight: 'bold'}}>{play.subRole}</p>
                      <div style={{border: 'black 5px solid', height: 15, width: 15, background: 'black', borderRadius: 30, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                        <p style={{margin: 0, padding: 0, textAlign: 'center', fontWeight: 'bold', color: 'white'}}>{nombre[index - 1]}</p>
                        </div>
                      </div>
                      <p style={{ margin: 0, padding: 0, textAlign: 'center', fontWeight: 'bold', fontSize: 15, color: 'black',overflowWrap: 'break-word'  }}>{selectedOptions[uniqueId] ? selectedOptions[uniqueId] : 'joueur'}</p> {/* Afficher la valeur sélectionnée */}
                      
                      {!selectedOptions[uniqueId] && <select name="" id={uniqueId} onChange={(e) => handleSelectChange(e, uniqueId)}>
                        <option>Joueur</option>
                        {play.players[nombre[index - 1]]
                          .filter(player => !selectedPlayers.has(player)) // Filtrer les joueurs déjà sélectionnés
                          .map((player, i) => (
                            <option key={i}>{player}</option>
                          ))}
                      </select>}

                      </div>
                )
              })}
              </div>
        )
      }else{
        return(
          <div  key={ij} className='row' style={{ width: window.innerWidth }}>

              </div>
        )
      }

      })}
      
        <button type="button" onClick={handChange} style={{margin: 50}}>Jouez</button>
      </div>
    )
}

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: window.innerWidth }}>
      {/* {isPlay && <Play commencer={commencer} />} */}
      {isCreationEquipe && <CreationEquipe />}

    </div>

  )
}

export default App
