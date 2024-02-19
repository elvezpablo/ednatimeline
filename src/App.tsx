import { FC } from 'react';

import './style.css';
import Timeline, { Event } from './Timeline';
import personal from './personal.json';
import location from './locations.json';
import beliefs from './beliefs.json';
import generations from './generations.json';
import world from './world.json';
import Lifelines from './chart/Lifelines';
import WorldTimeline from './chart/WorldTimeline';
import EraTimeline from './chart/EraTimeline';

const GENESIS = new Date("1929-01-01");

export const App: FC<{ name: string }> = ({ name }) => {


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
      <Lifelines timelines={(width, height) => {
        return (
          <>
            <WorldTimeline genesis={GENESIS} title="World" showDecades events={world} width={width} height={height} />
            <EraTimeline genesis={GENESIS} position={1} title="Generation" events={generations} width={width} height={height} />
            {/* <WorldTimeline genesis={GENESIS} position={2} title="Life" events={personal} width={width} height={height} /> */}
            {/* <WorldTimeline position={2} title="Houses" events={location} width={width} height={height} /> */}
          </>)
      }} />
    </div>
  );
};
