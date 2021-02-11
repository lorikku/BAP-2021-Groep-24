/* GETTING PAGES FOR RESIDENTS */
const getPagesObj = (paths) => {
  return {
    OVERVIEW: {
      text: 'alle bewoners',
      path: () => paths.ROOT + paths.OVERVIEW,
    },
    MY_RESIDENTS: {
      text: 'mijn bewoners',
      path: () => paths.ROOT + paths.MY_RESIDENTS,
    },
    DETAIL_GENERAL: {
      text: 'algemene informatie',
      path: (detail = paths.DETAIL) =>
        paths.ROOT + detail + paths.DETAIL_GENERAL,
    },
    DETAIL_PLANNING: {
      text: 'persoonlijke planning',
      path: (detail = paths.DETAIL) =>
        paths.ROOT + detail + paths.DETAIL_PLANNING,
    },
    DETAIL_ADD_CONTACT: {
      text: 'contact toevoegen',
      path: () => paths.ROOT + paths.DETAIL + paths.DETAIL_ADD_CONTACT,
    },
    DETAIL_EDIT_INTERESTS: {
      text: 'bewoner interesses aanpassen',
      path: () => paths.ROOT + paths.DETAIL + paths.DETAIL_EDIT_INTERESTS,
    },
    NEW_RESIDENT: {
      path: () => paths.ROOT + paths.NEW_RESIDENT,
    },
  };
};

export { getPagesObj };
