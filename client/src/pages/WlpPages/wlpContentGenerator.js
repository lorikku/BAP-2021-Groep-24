import { checkboxInterests } from './wlpInterests';

const contentGenerator = () => {
  let content = [];

  //Adding checkboxContent to the content[] array
  const checkboxContent = checkboxContentGenerator();
  content = [...checkboxContent];

  return content;
};

//Class for content page
class CheckboxContentPage {
  constructor(category, dependency = null, subCat = null) {
    this.interests = [];

    this.category = category;
    this.dependency = dependency;
    this.subCat = subCat;
  }

  //Getting content info (for rapid use in UI)
  get contentInfo() {
    let info = {
      interests: undefined,
      category: undefined,
      subtitle: undefined,
      icon: undefined,
    };

    info.interests = this.interests;
    info.category = this.category.name;

    //If subcat exists -> use subtitle and icon of subcat
    if (this.subCat) {
      info.subtitle = this.dependency.name;
      info.icon = this.subCat.icon;
      info.subCatName = this.subCat.name;
      return info;
    }

    if (this.dependency) {
      //If subcat doesn't exist -> use dependency subtitle and icon of subtitle
      info.subtitle = this.dependency.name;
      info.icon = this.dependency.icon;
      return info;
    }

    //Finally, if dependency doesn't exist -> use category subtitle and icon of subtitle
    info.subtitle = this.category.name;
    info.icon = this.category.icon;
    return info;
  }
}

//Returns an array with the right content to be rendered in the UI
const checkboxContentGenerator = () => {
  const content = [];

  checkboxInterests.forEach((interest) => {
    /* First, we check if a subcategory exists for this interest. If it does, we check if the page with this subcategory exists in content[]. If it doesn't, we create it. */
    if (interest.subCat) {
      const { subCat } = interest;
      const subCatPage = content.find((page) => page.subCat._id === subCat._id);

      if (subCatPage) {
        subCatPage.interests.push(interest);
        return;
      } else {
        //Extract category and dependency
        const { category, dependency } = interest;
        //Create new subcatpage
        const newSubCatPage = new CheckboxContentPage(
          category,
          dependency,
          subCat
        );
        //Push interest to it
        newSubCatPage.interests.push(interest);
        //Add it to content[] array
        content.push(newSubCatPage);
        return;
      }
    }

    /* If subcat does not exist -> we group interests by their dependencies. If a page for the dependency does not exist yet -> we create one */

    if (interest.dependency) {
      const { dependency } = interest;
      const dependencyPage = content.find(
        (page) => page.dependency._id === dependency._id
      );
      if (dependencyPage) {
        dependencyPage.interests.push(interest);
        return;
      } else {
        //Extract category
        const { category } = interest;
        //Create new dependency
        const newDependencyPage = new CheckboxContentPage(category, dependency);
        //Push interest to it
        newDependencyPage.interests.push(interest);
        //Add it to content[] array
        content.push(newDependencyPage);
        return;
      }
    }

    /* Finally, if dependency does not exist -> we group interests by their categories. If a page for the category does not exist yet -> we create one */

    {
      const { category } = interest;
      const categoryPage = content.find(
        (page) => page.category._id === category._id
      );
      if (categoryPage) {
        categoryPage.interests.push(interest);
        return;
      } else {
        //Create new subcatpage
        const newCategoryPage = new CheckboxContentPage(category);
        //Push interest to it
        newCategoryPage.interests.push(interest);
        //Add it to content[] array
        content.push(newCategoryPage);
        return;
      }
    }
  });

  return content;
};

export { contentGenerator };
