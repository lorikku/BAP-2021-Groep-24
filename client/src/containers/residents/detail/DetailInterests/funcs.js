const getCategoriesFromInterests = (interests) => {
  //Create empty newCategories object
  const newCategories = {};

  /* Every interest has a category object to know which category it belongs to.
  So we will check if the category exists in the newCategories{} object and make
  one if it doesn't, with the interests in it. */

  interests.forEach((interest) => {
    let newCategory = newCategories[interest.category._id];

    //If category does not exist in newCategories{} object yet => create one and add it
    if (!newCategory) {
      newCategory = {
        name: interest.category.name,
        interests: [],
      };
      newCategories[interest.category._id] = newCategory;
    }

    /* Dependency is basically an interest that is included if another certain child interest is selected.
    Het Laatste Nieuws (child interest) => Krant (parent interest AKA dependency) */

    /* UNNECESSARY TO EXTRACT DEPENDENCIES HERE */

    // const { dependency } = interest;
    // if (dependency) {
    //   //Dependency interests can be present in multiple other child presents (duplicate possible) => so check if dependency is not in newCategory yet before pushing
    //   if (
    //     newCategory.interests.findIndex(
    //       (categoryInterest) => categoryInterest._id === dependency._id
    //     ) === -1
    //   ) {
    //     newCategory.interests.push(dependency);
    //   }
    // }

    newCategory.interests.push(interest);
  });

  return newCategories;
};

export { getCategoriesFromInterests };
