import {format} from 'date-fns';
import * as React from 'react';
import {locale} from '../../../../global/timeStampFuncs';
import {deleteInterestedResidentFromActivity, postParticipatedResident} from '../../../../services/ActivitiesService';
import './activityinteresting.css';

const ActivityInteresting = ({
  resident,
  activity,
  setInterestingActivities,
  setParticipatingActivities,
}) => {
  const {_id, title, location, startTimestamp, endTimestamp} = activity;

  let activityDeleting = false;
  const deleteCurrentResidentFromActivity = async () => {
    //If resident is deleting (request already made) -> ignore
    if (activityDeleting) return;

    activityDeleting = true;

    const succes = await deleteInterestedResidentFromActivity(
      _id,
      resident._id
    );

    if (succes) {
      setInterestingActivities((prevState) => {
        const newInterestingActivities = [...prevState];

        const index = newInterestingActivities.findIndex(
          (activity) => activity._id === _id
        );

        newInterestingActivities.splice(index, 1);
        return newInterestingActivities;
      });
    }

    activityDeleting = false;
  };

  let residentAdding;
  const addResidentToGoing = async () => {
    //If resident is being added (request already made) -> ignore
    if (residentAdding) return;

    residentAdding = true;

    const succes = await postParticipatedResident(_id, {
      _id: resident._id,
      name: resident.name,
      photoUri: resident.photoUri
    });

    if (succes) {
      await deleteCurrentResidentFromActivity();
      setParticipatingActivities((prevState) => {
        const newParticipatingActivities = [...prevState];

        newParticipatingActivities.unshift(activity);
        return newParticipatingActivities;
      });
    }

    residentAdding = false;
  };
  return (
    <li className="activity-interesting-container">
      <div className="activity-interesting-container-wrapper">
        <div onClick={addResidentToGoing}  className="activity-interesting-add-btn">
          <img
            className="activity-interesting-add-vector"
            alt="een plusknop om activiteit toe te voegen"
            src="/assets/img/plus-circle-btn.svg"
          ></img>
        </div>
        <div className="activity-interesting-main-info">
          <p className="activity-interesting-title">{title}</p>
          <div className="activity-interesting-time-location-wrapper">
            <div className="activity-interesting-time-icon-wrapper">
              <img
                className="activity-interesting-time-icon"
                alt="een klok icoontje"
                src="/assets/img/clock-icon.svg"
              ></img>
              <p className="activity-interesting-time">{format(startTimestamp, 'HH:mm', locale)} - {format(endTimestamp, 'HH:mm', locale)}</p>
            </div>
            <div className="activity-interesting-location-icon-wrapper">
              <img
                className="activity-interesting-location-icon"
                alt="een locatie icoontje"
                src="/assets/img/location-icon.svg"
              ></img>
              <p className="activity-interesting-location">{location}</p>
            </div>
          </div>
      </div>
      </div>

      <div className="activity-interesting-date-calendar">
        <p className="activity-interesting-day">{format(startTimestamp, 'EEEE', locale)}</p>
        <p className="activity-interesting-date-number">{format(startTimestamp, 'dd', locale)}</p>
        <p className="activity-interesting-month">{format(startTimestamp, 'MMMM', locale)}</p>
      </div>
    </li>
  );
};

export default ActivityInteresting;
