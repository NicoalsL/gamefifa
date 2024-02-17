import { useState } from "react";
import "./App.css";
import { joueurs } from "./assets/joueurs";
function App() {
  // const [isPlay, setIsPlay] = useState(true)
  const [isCreationEquipe, setIsCreationEquipe] = useState(true);

  // function commencer(){
  //   setIsPlay(false)
  //   setIsCreationEquipe(true)

  // }

  function CreationEquipe() {
    const [nombre, setNombre] = useState([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]); // Use useState here
    const [selectedOptions, setSelectedOptions] = useState({}); // Ajout d'un état pour suivre les options sélectionnées
    const [debut, setDebut] = useState(false);
    const [jouez, setJouez] = useState("Lancer");
    const [selectedPlayers, setSelectedPlayers] = useState(new Set());
    const [pileface, setpileface] = useState("Lancer");

    const probabilites = [0, 1, 1, 2, 2, 2, 3, 3, 4];

    function randomValue() {
      const index = Math.floor(Math.random() * probabilites.length);
      return probabilites[index];
    }

    function lancerPileOuFace() {
      const result = Math.random() < 0.5 ? "Domicile" : "Exterieur";
      setpileface(result);
    }

    // Utilisation de la fonction

    function handleSelectChange(event, uniqueId) {
      const player = event.target.value;
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        [uniqueId]: player,
      }));

      // Ajouter le joueur à la liste des joueurs sélectionnés
      if (player !== "Joueur") {
        setSelectedPlayers((prevSelectedPlayers) =>
          new Set(prevSelectedPlayers).add(player)
        );
      }

      console.log("player:", uniqueId);
    }

    let index = 0;
    console.log("nombre", nombre);

    function handChange() {
      setJouez("Relancer");
      setpileface("Lancer");
      setSelectedPlayers(new Set());
      setDebut(true);
      const nouveauNombre = Array(18)
        .fill(0)
        .map(() => randomValue());
      setNombre(nouveauNombre);
      console.log("nombre", nouveauNombre);
      setSelectedOptions({});
    }
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 0,
          margin: 0,
          width: window.innerWidth,
        }}
      >
        {joueurs.map((joueur, ij) => {
          console.log(joueur.subcategories);
          if (debut) {
            return (
              <div
                key={ij}
                className="row"
                style={{ width: window.innerWidth }}
              >
                {joueur.subcategories.map((play, pi) => {
                  const uniqueId = `${ij}-${pi}`;
                  console.log("joeur:", selectedOptions[uniqueId]);
                  index += 1;
                  const or = nombre[index - 1] === 0;
                  const red = nombre[index - 1] === 4;
                  console.log("index:", index);
                  return (
                    <div
                      key={pi}
                      style={{
                        margin: 10,
                        position: "relative",
                        border: or
                          ? "#DAA520 5px solid"
                          : red
                          ? "#D8315B 5px solid"
                          : "black 5px solid",
                        width: 55,
                        borderRadius: 25,
                        height: 100,
                        padding: 10,
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "column",
                        backgroundColor: joueur.color,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          marginBottom: 10,
                          color: "black",
                          flexDirection: "row",
                          textAlign: "center",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 15,
                            padding: 2,
                            top: 15,
                            left: 15,
                            position: "absolute",
                          }}
                        >
                          {play.subRole}
                        </p>
                        <div
                          style={{
                            border: or
                              ? "#DAA520 5px solid"
                              : red
                              ? "#D8315B 5px solid"
                              : "black 5px solid",
                            position: "absolute",
                            top: -10,
                            right: -10,
                            height: 20,
                            width: 20,
                            background: or
                              ? "#DAA520"
                              : red
                              ? "#D8315B"
                              : "black",
                            borderRadius: 50,
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <p
                            style={{
                              margin: 0,
                              padding: 0,
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "white",
                            }}
                          >
                            {nombre[index - 1]}
                          </p>
                        </div>
                      </div>
                      {/* <p style={{ margin: 0, padding: 0, textAlign: 'center', fontWeight: 'bold', fontSize: 15, color: 'black',overflowWrap: 'break-word'  }}>{selectedOptions[uniqueId] ? selectedOptions[uniqueId] : 'joueur'}</p> Afficher la valeur sélectionnée */}

                      {!selectedOptions[uniqueId] ? (
                        <select
                          name={`${uniqueId}_select`}
                          id={uniqueId}
                          onChange={(e) => handleSelectChange(e, uniqueId)}
                        >
                          <option>Joueur</option>
                          {play.players[nombre[index - 1]]
                            .filter((player) => !selectedPlayers.has(player)) // Filtrer les joueurs déjà sélectionnés
                            .map((player, i) => (
                              <option key={i}>{player}</option>
                            ))}
                        </select>
                      ) : (
                        <p
                          style={{
                            margin: 0,
                            padding: 0,
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 10,
                            color: "black",
                            overflowWrap: "break-word",
                            marginBottom: 20,
                          }}
                        >
                          {selectedOptions[uniqueId]
                            ? selectedOptions[uniqueId]
                            : "joueur"}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          } else {
            return (
              <div
                key={ij}
                className="row"
                style={{ width: window.innerWidth }}
              ></div>
            );
          }
        })}

        <button
          type="button"
          onClick={handChange}
          style={{
            margin: 50,
            color: "black",
            position: "fixed",
            top: -10,
            left: -10,
            background: "#7CFFC4",
            padding: 10,
            borderRadius: 20,
            fontWeight: "bold",
            border: "3px black solid",
          }}
        >
          {jouez}
        </button>
        <button
          type="button"
          onClick={lancerPileOuFace}
          style={{
            margin: 50,
            color: "black",
            position: "fixed",
            top: -10,
            right: -10,
            background: "#FFC914",
            padding: 10,
            borderRadius: 20,
            fontWeight: "bold",
            border: "3px black solid",
          }}
        >
          {pileface}
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: window.innerWidth,
      }}
    >
      {/* {isPlay && <Play commencer={commencer} />} */}
      {isCreationEquipe && <CreationEquipe />}
    </div>
  );
}

export default App;
