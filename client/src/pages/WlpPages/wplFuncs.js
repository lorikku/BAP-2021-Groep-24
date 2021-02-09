import {
  categories,
  dependencies,
} from '../../global/categoriesAndDependencies';

class Interest {
  constructor(_id, name, category, dependency = null, subCat = null) {
    this._id = _id;
    this.name = name;
    this.category = {
      _id: category._id,
      name: category.name,
    };

    if (dependency) {
      this.dependency = {
        _id: dependency._id,
        name: dependency.name
      };
    }

    if (subCat) {
        this.subCat = subCat;
    }
  }
}

// new Interest('', '', categories, dependencies, '') <- use as template

const defaultInterests = [
  new Interest('testId', 'testName', categories.algemeen, dependencies.test, 'testSubCategory'),
];

export { defaultInterests };
