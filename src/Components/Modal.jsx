export const Modal = ({
  handleCloseModal,
  showModal,
  children,
  player,
  selectedPlayers,
  nombre,
  index,
  subRole,
  setIsModal,
  isModal,
}) => {
  const modalClass = {
    modal: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor:
        "rgba(0, 0, 0, 0.5)" /* couleur de fond semi-transparente */,
    },
    modalMain: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
    },
    displayBlock: {
      display: "block",
    },
    displayNone: {
      display: "none",
    },
  };

  console.log("player");
  return (
    <div>
      <section
        style={{
          position: "fixed",
          zIndex: 1000,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          border: "red 2px solid",
          flexDirection: "column",
        }}
      >
        <h1>Modal</h1>
        <h2>{subRole}</h2> {/* Afficher le subRole */}
        {/* {player.players[nombre[index - 1]]
          .filter((player) => !selectedPlayers.has(player))
          .map((player, i) => (
            <h1 key={i} className={{ color: "red" }}>
              {player}
            </h1>
          ))} */}
        <button
          onClick={() => {
            setIsModal(false);
            console.log(isModal);
          }}
        >
          Fermer
        </button>
      </section>
    </div>
  );
};
