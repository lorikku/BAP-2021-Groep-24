const paths = {
  PATH_RESIDENTS: {
    // Root
    ROOT: '/residents',
    OVERVIEW: '/overview',
    MY_RESIDENTS: '/my-residents',
    // Resident detail
    DETAIL: '/:residentId',
    DETAIL_GENERAL: '/general',
    DETAIL_PLANNING: '/planning',
    // New resident
    NEW_RESIDENT: '/new',
  },
  PATH_ACTIVITIES: {
    // Root
    ROOT: '/activities',
    OVERVIEW: '/overview',
    WEEK: '/:week',
    // Activity detail
    DETAIL: '/:activityId',
    // Adding new activity
    NEW_ACTIVITY: '/new',
  },
  PATH_MATCHING: {
    ROOT: '/matching',
  },
  PATH_LOGOUT: {
    ROOT: '/logout',
  },
};

export default paths;
