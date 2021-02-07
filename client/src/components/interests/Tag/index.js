import * as React from 'react';
import './tag.css';

const Tag = ({
  interest,
  isEdit,

  //Matching props
  isMatchingPage,
  toggleInterest,
  selectedInterests,
  changedInput,
}) => {
  const [selected, setSelected] = React.useState(false);

  React.useEffect(() => {
    let componentMounted = true;

    if (isMatchingPage) {
      // Search if interest is in selectedInterest id
      const isSelected =
        selectedInterests.findIndex(
          (selectedInterest) => selectedInterest._id === interest._id
        ) !== -1;

      if (isSelected) {
        // If it is not selected, select it
        if (componentMounted) setSelected(true);
      } else {
        // If it is selected, deselect it
        if (componentMounted) setSelected(false);
      }
    }

    return () => (componentMounted = false);
  }, [selectedInterests, setSelected, changedInput, interest._id, isMatchingPage]);

  //Toggling interest (this is only availible in matching page)
  const localToggleInterest = () => {
    //If tag was previously selected -> deselect and send 'delete' callback to matching page
    if (selected) {
      toggleInterest({
        type: 'delete',
        interest,
      });
    } else {
      //If tag was previously not selected -> select and send 'add' callback to matching page
      toggleInterest({
        type: 'add',
        interest,
      });
    }
  };

  return (
    <li
      onClick={isMatchingPage ? localToggleInterest : null}
      className={`tag-container${selected ? ' tag-container--selected' : ''}${
        isMatchingPage ? ' tag-container--matching' : ''
      }`}
    >
      <div
        className={`tag-color${selected ? ' tag-color--selected' : ''}`}
      ></div>
      <p className={`tag-name${selected ? ' tag-name--selected' : ''}`}>
        {interest.name}
      </p>
      {isEdit ? (
        <img
          className="tag-delete-cross"
          alt="kruisje"
          src="/assets/img/cross-red.svg"
        ></img>
      ) : (
        ''
      )}
    </li>
  );
};

export default Tag;
