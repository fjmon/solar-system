import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

export default class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((missão) => (
          <MissionCard
            key={ missão.name }
            name={ missão.name }
            year={ missão.year }
            country={ missão.country }
            destination={ missão.destination }
          />
        ))}
      </div>
    );
  }
}
