import * as React from "react";
import "./inputactivity.css";

const InputActivity = ({ interest, selectedInterests, toggleInterest }) => {
  const {_id, name} = interest;
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const foundInterestIndex = selectedInterests.findIndex(selectedInterest => selectedInterest._id === _id);

      if(foundInterestIndex !== -1) {
        //If it was found -> active = true
        setActive(true);
      } else {
        //If it wasnt found -> active = false
        setActive(false);
      }
  }, [_id, selectedInterests])

  return (
    <div onClick={() => toggleInterest(interest)} className={`activity-checkbox${active ? ' activity-checked' : ''}`}>
      <p className={`activity-checkbox-title${active ? ' activity-title-checked' : ''}`}>{name.split('(')[0]}</p>
    </div>
  );
};
export default InputActivity;
