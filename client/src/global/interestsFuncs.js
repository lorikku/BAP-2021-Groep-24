import { fetchContactsByResidentId } from '../services/ResidentsService/ContactsService';
import { categories } from './categoriesAndDependencies';
import {apiUrl} from './states';

const getCategoriesFromInterests = (interests, extractDependency) => {
  //Create empty newCategories object
  const newCategories = {};

  /* Every interest has a category object to know which category it belongs to.
  So we will check if the category exists in the newCategories{} object and make
  one if it doesn't, with the interests in it. */

  interests.forEach((interest, index) => {
    if(interests[index].noExtraction === true) return;
    let newCategory = newCategories[interest.category._id];

    //If category does not exist in newCategories{} object yet => create one and add it
    if (!newCategory) {
      newCategory = {
        ...categories[interest.category._id],
        interests: [],
      };
      newCategories[interest.category._id] = newCategory;
    }

    /* Dependency is basically an interest that is included if another certain child interest is selected.
    Het Laatste Nieuws (child interest) => Krant (parent interest AKA dependency) */

    if (extractDependency && interests[0].noExtraction !== true) {
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
  const newInterests = [{noExtraction: true}];

  interests.forEach((interest) => {
    if (interest.name.toLowerCase().includes(name)) {
      newInterests.push(interest);
    }

    // Extraction of dependencies was wrong here. Extraction already happens in 'getCategoriesFromInterests'
    const { dependency } = interest;

    if (dependency) {
      //Dependency interests can be present in multiple other child presents (duplicate possible) => so check if dependency is not in newCategory yet before pushing
      if (
        newInterests.findIndex(
          (newInterest) => newInterest._id === dependency._id
        ) === -1
      ) {
        if (dependency.name.toLowerCase().includes(name)) {
          const newDependency = Object.assign({}, dependency);
          newDependency.category = interest.category;
          newDependency.dependency = interest.dependency;
          newInterests.push(newDependency);
        }
      }
    }
  });

  return newInterests;
};

const calculateResidentMatches = async (
  matchee,
  selectedInterests,
  isActivity
) => {
  const newMatches = [];

  //Fetch ALL residents
  const response = await fetch(
    apiUrl + 'app/residents?interests=true'
  );
  const result = await response.json();
  const residents = result.residents;

  //Fetch resident's current contacts
  let matcheeContacts;
  //This matching system could also be used for activity page -> skip fetching contact's if that's the case
  if (!isActivity)
    matcheeContacts = await fetchContactsByResidentId(matchee._id);

  //Loop through all residents
  residents.forEach((resident) => {
    //This matching system could also be used for activity page -> skip checking for matchee if that's the case
    if (!isActivity) {
      //If comparing resident is the matchee, skip (can't match yourself)
      if (matchee._id === resident._id) return;
      //If comparing resident is in matchee's contact list, skip (can't match for people already in contact list)
      if (
        matcheeContacts.findIndex((contact) => contact._id === resident._id) !==
        -1
      )
        return;
    }

    //Create a new (potential) match between matchee and current resident (match)
    const newMatch = {
      resident: {
        _id: resident._id,
        name: resident.name,
        roomNr: resident.roomNr,
        photoUri: resident.photoUri,
      },
      matchedInterests: [],
      percentage: 0,
    };

    //Loop through matchee interests
    selectedInterests.forEach((selectedInterest) => {
      //If common interest is found, add interest to interests[] array in newMatch obj
      if (
        resident.interests.findIndex((residentInterest) => {
          let selectedDependency;

          //If dependency was detected
          if (selectedInterest.dependency) {
            selectedDependency = selectedInterest.dependency;
          } else if (selectedInterest.dependency === undefined) {
            //If dependency was undefined -> dependency already extracted
            selectedDependency = selectedInterest;
          }

          if (selectedDependency && residentInterest.dependency) {
            const residentDependency = residentInterest.dependency;

            if (selectedDependency._id === residentDependency._id) {
              if (
                newMatch.matchedInterests.findIndex(
                  (interest) => interest._id === selectedDependency._id //BUG: turned '=' into '==='
                ) === -1
              ) {
                residentDependency.category = residentInterest.category;
                newMatch.matchedInterests.push(residentDependency);
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
        (matchedInterest) => matchedInterest.dependency !== undefined
      );
      newMatch.percentage = parseInt(
        (noDependencyInterests.length / selectedInterests.length) * 100
      );
      if (isActivity) {
        newMatches.push(newMatch.resident);
      } else {
        newMatches.push(newMatch);
      }
    }
  });

  return newMatches;
};

export {
  getCategoriesFromInterests,
  searchInterests,
  calculateResidentMatches,
};
