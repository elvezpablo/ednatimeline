import { FC } from 'react';

import './style.css';
import Timeline, { Event } from './Timeline';
import personal from './personal.json';
import location from './locations.json';
import beliefs from './beliefs.json';
import world from './world.json';

const events: Event[] = personal;

export const App: FC<{ name: string }> = ({ name }) => {
  console.log(JSON.stringify(events));

  return (
    <div
      style={{
        display: 'flex',
        gap: '18px',
        justifyContent: 'center',
        margin: 'auto',
        width: '90%',
      }}
    >
      <Timeline title="World" events={world} />
      <Timeline title="Personal" events={personal} />
      <Timeline title="Houses" events={location} />
      <Timeline title="Travel & Studies" events={beliefs} />
    </div>
  );
};
