import * as React from 'react';
import './matchresultlist.css';
import MatchResult from '../../../components/matching/MatchResult';

const MatchResultList = ({
  selectedInterests,
  matchee,
  matches,
  matchesVisibility,
  toggleMatchesVisibility,
}) => {
  // [...matches] to copy it before sorting it (sort changes original function) -> sorting it based off of match percentage
  const sortedMatches = [...matches].sort(
    (a, b) => b.percentage - a.percentage
  );

  return (
    <div
      className={`results-list${
        !matchesVisibility ? ' results-list--hidden' : ''
      } fit-height flex-content`}
    >
      <p
        onClick={toggleMatchesVisibility}
        className={`results-title${
          selectedInterests.length !== 0 ? ' results-title--underline' : ''
        }`}
      >
        {selectedInterests.length === 0
          ? 'Selecteer tags om resultaten te krijgen'
          : matches.length === 1
          ? '1 resultaat'
          : `${matches.length} resultaten`}
      </p>
      {matchesVisibility ? (
        <img
          onClick={toggleMatchesVisibility}
          className="close-results"
          alt="kruisje"
          src="/assets/img/cross-white.svg"
        ></img>
      ) : null}
      <ul className="results-scrolllist">
        {sortedMatches.map((match, index) => (
          <MatchResult key={index} matchee={matchee} match={match} />
        ))}
      </ul>
    </div>
  );
};
export default MatchResultList;
