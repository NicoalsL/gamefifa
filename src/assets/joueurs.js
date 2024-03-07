const gk = {
  0: ["Courtois", "Alison"],
  1: ["Ter Stegen", "Ederson", "Oblak", "Kobel"],
  2: ["Donnarumma", "Maignan", "Neuer", "Martinez"],
  3: ["Szczęsny", "Bounou", "Vlachodimos", "Ramsdale"],
  4: ["Unai Simon", "Remiro", "Pau Lopez", "Casteels"],
};
const dl = {
  0: ["Davies", "Walker"],
  1: ["Hernandez", "Grimaldo", "Hakimi", "Cancelo"],
  2: ["Frimpong", "Nuno Mendes", "Di Lorenzo", "Mendy"],
  3: ["Cuadrado", "Alexander-Arnold", "Spinazzola", "Robertson"],
  4: ["Udogie", "Balde", "Clauss", "James"],
};
const dc = {
  0: ["Van Dijk", "Militao"],
  1: ["Saliba", "Upamecano", "Tomori", "Araujo"],
  2: ["Rudiger", "Bremer", "Marquinhos", "Koundé"],
  3: ["Kim Min Jae", "Konaté", "Alaba", "Akanji"],
  4: ["Stones", "Aké", "Dias", "Varane"],
};
const mc = {
  0: ["Bellingham", "Valverde"],
  1: ["Goretzka", "De Jong", "Rodri", "Kimmich"],
  2: ["Barella", "Modric", "Bernardo Silva", "Llorente"],
  3: ["Rice", "Rabiot", "Camavinga", "Can"],
  4: ["Pedri", "Tchouaméni", "Casemiro", "Çalhanoğlu"],
};

const mol = {
  0: ["Vinicius", "Salah"],
  1: ["Sane", "Son", "Coman", "Dembele"],
  2: ["Rodrigo", "Kvaratskhelia", "Diaz", "Mane"],
  3: ["Leao", "Chiesa", "Saka", "Diaby"],
  4: ["Raphinha", "Martinelli ", "Doku", "Mahrez"],
};
const moc = {
  0: ["Neymar", "Messi"],
  1: ["De Bruyne", "Odegaard", "Musiala", "Depay"],
  2: ["Bruno Fernandes", "Foden", "Wirtz", "Dybala"],
  3: ["Szoboszlai", "Nkunku", "Fekir", "Xavi Simons"],
  4: ["Paquetá", "Madison", "Havertz", "Grealish"],
};
const bu = {
  0: ["Haaland", "Mbapper"],
  1: ["Osimhen", "Lewandowski", "Ronaldo", "Grizmann"],
  2: ["Martinez", "Rashford", "Immobile", "Benzema"],
  3: ["Darwin Nunez", "Gabriel Jesus", "Kane", "Jota"],
  4: ["Openda", "Felix", "Gakpo", "Kolo Muani"],
};

export const joueurs = [
  {
    ligne: 1,
    color: "#FC9E4F",
    subcategories: [
      {
        subRole: "Gk",
        players: gk,
      },
    ],
  },
  {
    ligne: 2,
    color: "#FFD449",
    subcategories: [
      {
        subRole: "DD",
        players: dl,
      },
      {
        subRole: "DC",
        players: dc,
      },
      {
        subRole: "DC",
        players: dc,
      },
      {
        subRole: "DG",
        players: dl,
      },
    ],
  },
  {
    ligne: 3,
    color: "#5FBB97",
    subcategories: [
      {
        subRole: "MC",
        players: mc,
      },
      {
        subRole: "MC",
        players: mc,
      },
    ],
  },
  {
    ligne: 4,
    color: "#5FBB97",
    subcategories: [
      {
        subRole: "MOD",
        players: mol,
      },
      {
        subRole: "MOC",
        players: moc,
      },
      {
        subRole: "MOG",
        players: mol,
      },
    ],
  },
  {
    ligne: 5,
    color: "#3083DC",
    subcategories: [
      {
        subRole: "BU",
        players: bu,
      },
    ],
  },
  {
    ligne: 6,
    color: "#B288C0",
    subcategories: [
      {
        subRole: "Gk",
        players: gk,
      },
      {
        subRole: "dL",
        players: dl,
      },
      {
        subRole: "DC",
        players: dc,
      },
      {
        subRole: "MC",
        players: mc,
      },
    ],
  },
  {
    ligne: 7,
    color: "#B288C0",
    subcategories: [
      {
        subRole: "MOL",
        players: mol,
      },
      {
        subRole: "MOC",
        players: moc,
      },
      {
        subRole: "BU",
        players: bu,
      },
    ],
  },
];
