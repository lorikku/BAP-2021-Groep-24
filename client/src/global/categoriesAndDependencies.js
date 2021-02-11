const ROOTPATH = "/assets/img/illustrations/categories/";

const subCategories = {
  krant: {
    _id: "krant",
    name: "krant",
    icon: `${ROOTPATH}wlp-news.svg`,
  },
  tijdschrift: {
    _id: "tijdschrift",
    name: "tijdschrift",
    icon: `${ROOTPATH}wlp-mag.svg`,
  },
  boek: {
    _id: "boek",
    name: "boek",
    icon: `${ROOTPATH}wlp-book.svg`,
  },
};

const dependencies = {
  lezen: {
    _id: "lezen",
    name: "lezen",
    icon: 0,
  },
  tv: {
    _id: "tv",
    name: "televisie kijken",
    icon: `${ROOTPATH}wlp-tv.svg`,
  },
  pc: {
    _id: "pc",
    name: "computer & tablet",
    icon: `${ROOTPATH}wlp-computer.svg`,
  },
  denksport: {
    _id: "denksport",
    name: "denksport oefeningen",
    icon: `${ROOTPATH}wlp-creative.svg`,
  },
  spel: {
    _id: "spel",
    name: "spel activiteiten",
    icon: `${ROOTPATH}wlp-games.svg`,
  },
  kaart: {
    _id: "kaart",
    name: "kaartspellen",
    icon: `${ROOTPATH}wlp-cards.svg`,
  }
};

export { dependencies, subCategories };

const categories = {
  algemeen: {
    _id: "algemeen",
    name: "algemene informatie",
    icon: `${ROOTPATH}bewegings-activiteiten.svg`,
    color: "#C0F794",
  },
  beweging: {
    _id: "beweging",
    name: "bewegings activiteiten",
    icon: `${ROOTPATH}bewegings-activiteiten.svg`,
    color: "#C0F794",
  },
  creatief: {
    _id: "creatief",
    name: "creatieve activiteiten",
    icon: `${ROOTPATH}creatieve-activiteiten.svg`,
    color: "#FAE264",
  },
  divers: {
    _id: "divers",
    name: "diverse activiteiten",
    icon: `${ROOTPATH}diverse-activiteiten.svg`,
    color: "#E994F7",
  },
  extern: {
    _id: "extern",
    name: "externe activiteiten",
    icon: `${ROOTPATH}externe-activiteiten.svg`,
    color: "#9C94F7",
  },
  huishoud: {
    _id: "huishoud",
    name: "huishoudelijke activiteiten",
    icon: `${ROOTPATH}huishoudelijke-activiteiten.svg`,
    color: "#94CEF7",
  },
  mentaal: {
    _id: "mentaal",
    name: "mentaal stimulerend",
    icon: `${ROOTPATH}mentaal-stimulerend.svg`,
    color: "#F79494",
  },
  muzikaal: {
    _id: "muzikaal",
    name: "muzikale activiteiten",
    icon: `${ROOTPATH}muzikale-activiteiten.svg`,
    color: "#F7CA94",
  },
  religieus: {
    _id: "religieus",
    name: "religieuze activiteiten",
    icon: `${ROOTPATH}religieuze-activiteiten.svg`,
    color: "#94F7E0",
  },
};

export { categories };
