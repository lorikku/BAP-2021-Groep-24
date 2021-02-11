import * as React from 'react';
import ResidentInterested from '../../../components/activities/ResidentInterested';
import { calculateResidentMatches } from '../../../global/interestsFuncs';
import { useGlobalState } from '../../../global/states';
import { updateInterestedMatches } from '../../../services/ActivitiesService';
import './detailactivityinterested.css';

const DetailActivityInterested = ({
  activity,
  setActivity,
  interestedResidents,
  setInterestedResidents,
  setParticipatedResidents,
}) => {
  const { _id, interests, hasCalculated } = activity;

  const [, setAddNewResident] = useGlobalState('addNewResident');

  //Calculating interested residents chain
  React.useEffect(() => {
    //If already calculated (from db) -> skip
    if (hasCalculated) return;
    let componentMounted = true;

    //Matches fetcher (from external function)
    const fetchMatches = async () => {
      const fetchedMatches = await calculateResidentMatches(
        null,
        interests,
        true
      );

      //Update database with fetched matches
      await updateInterestedMatches(_id, fetchedMatches);

      //Updating local states if everything went well (changing current residents and such)
      if (componentMounted) setInterestedResidents(fetchedMatches);
      if (componentMounted)
        setActivity((prevState) => {
          const newState = Object.assign({}, prevState);
          newState.hasCalculated = true;
          return newState;
        });
    };

    fetchMatches();
    return () => (componentMounted = false);
  }, [
    _id,
    hasCalculated,
    interests,
    setActivity,
    activity,
    setInterestedResidents,
  ]);

  return (
    <div className="dtl-act-int-container fit-height">
      <p className="dtl-act-int-title">
        Wellicht geïnteresseerd ({interestedResidents.length})
      </p>
      <div className="dtl-act-int-list-btn-wrapper fit-height flex-content">
        <div
          onClick={() =>
            setAddNewResident({
              matchingId: 'test',
              closeWindow: () => setAddNewResident(null),
            })
          }
          className="dtl-act-int-btn"
        >
          <p className="dtl-act-int-btn-text">Bewoner uitnodigen</p>
        </div>
        <ul className="dtl-act-int-list">
          {interestedResidents.map((resident, index) => (
            <ResidentInterested
              key={index}
              activityId={_id}
              resident={resident}
              setInterestedResidents={setInterestedResidents}
              setParticipatedResidents={setParticipatedResidents}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailActivityInterested;
