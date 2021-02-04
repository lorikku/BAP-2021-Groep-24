const paths = {
  PATH_RESIDENTS: {
    // Root
    ROOT: '/residents',
    OVERVIEW: '/overview',
    MY_RESIDENTS: '/my-residents',
    // New resident
    NEW_RESIDENT: '/new',
    // Resident detail
    DETAIL: '/:residentId',
    DETAIL_GENERAL: '/general',
    DETAIL_PLANNING: '/planning',
    DETAIL_ADD_CONTACT: '/add-contact',
  },
  PATH_ACTIVITIES: {
    // Root
    ROOT: '/activities',
    OVERVIEW: '/overview',
    WEEK: '/:week',
    // Adding new activity
    NEW_ACTIVITY: '/new',
    // Activity detail
    DETAIL: '/:activityId',
  },
  PATH_MATCHING: {
    ROOT: '/matching',
  },
  PATH_WLP: {
    //Woon-en-leefplan
    ROOT: '/wlp',
  },
  PATH_LOGOUT: {
    ROOT: '/logout',
  },
};

export default paths;
