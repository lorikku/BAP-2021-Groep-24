const getCategoriesFromInterests = (interests, extractDependency) => {
  //Create empty newCategories object
  const newCategories = {};

  /* Every interest has a category object to know which category it belongs to.
  So we will check if the category exists in the newCategories{} object and make
  one if it doesn't, with the interests in it. */

  interests.forEach((interest, index) => {
    if (interests[index].noExtraction) return;

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

    if (extractDependency && !interests[0].noExtraction) {
      const { dependency } = interest;
      if (dependency) {
        //Dependency interests can be present in multiple other child presents (duplicate possible) => so check if dependency is not in newCategory yet before pushing
        if (
          newCategory.interests.findIndex(
            (categoryInterest) => categoryInterest._id === dependency._id
          ) === -1
        ) {
          newCategory.interests.push(dependency);
        }
      }
    }

    newCategory.interests.push(interest);
  });

  return newCategories;
};

const searchInterests = (name, interests) => {
  const newInterests = [{ noExtraction: true }];

  interests.forEach((interest) => {
    if (interest.name.toLowerCase().includes(name)) {
      newInterests.push(interest);
    }

    const { dependency } = interest;

    if (dependency) {
      //Dependency interests can be present in multiple other child presents (duplicate possible) => so check if dependency is not in newCategory yet before pushing
      if (
        newInterests.findIndex(
          (newInterest) => newInterest._id === dependency._id
        ) === -1
      ) {
        if (dependency.name.toLowerCase().includes(name)) {
          const newInterest = Object.assign({}, dependency);
          newInterest.category = interest.category;
          newInterest.dependency = interest.dependency;
          newInterests.push(newInterest);
        }
      }
    }
  });

  return newInterests;
};

const calculateResidentMatches = async (matchee, selectedInterests) => {
  const newMatches = [];

  const response = await fetch(
    process.env.REACT_APP_API_URL + '/app/residents?interests=true'
  );
  const result = await response.json();
  const residents = result.residents;

  //Loop through all residents
  residents.forEach((resident) => {
    //Create a new (potential) match between matchee and current resident (match)
    const newMatch = {
      resident: resident,
      matchedInterests: [],
      percentage: 0,
    };

    //Loop through matchee interests
    selectedInterests.forEach((selectedInterest) => {
      if (selectedInterests[0].noExtraction) return;
      //If comparing resident is the matchee, skip (can't match yourself)
      if (resident._id === matchee._id) {
        return;
      }

      //If common interest is found, add interest to interests[] array in newMatch obj
      if (
        resident.interests.findIndex((residentInterest) => {
          /* 
          First, we will check if an interest contains a dependency interest (subcategory) and add it to the
          newMatch interests array if it's not yet in there. We need to check this because multiple different interests
          can have the same dependency interest
          */

          if (selectedInterest.dependency && residentInterest.dependency) {
            if (
              selectedInterest.dependency._id ===
              residentInterest.dependency._id
            ) {
              if (
                newMatch.matchedInterests.findIndex(
                  (interest) => (interest._id = selectedInterest.dependency._id)
                ) === -1
              ) {
                newMatch.matchedInterests.push(selectedInterest.dependency);
              }
            }
          }

          //If interest was found mutual -> push interest to newMatch
          return selectedInterest._id === residentInterest._id;
        }) !== -1
      ) {
        newMatch.matchedInterests.push(selectedInterest);
      }
    });

    //If interests[] array in newMatch{} obj is NOT empty, add the new match (newMatch) to matches[] state to update UI
    if (newMatch.matchedInterests.length !== 0) {
      const noDependencyInterests = newMatch.matchedInterests.filter(
        (matchedInterest) => matchedInterest.dependency === undefined
      );
      newMatch.percentage = parseInt(
        (noDependencyInterests.length / selectedInterests.length) * 100
      );
      newMatches.push(newMatch);
    }
  });

  return newMatches;
};

export {
  getCategoriesFromInterests,
  searchInterests,
  calculateResidentMatches,
};
