import { FC } from 'react';

import './style.css';
import Timeline, { Event } from './Timeline';
import personal from './personal.json';
import location from './locations.json';
import beliefs from './beliefs.json';
import world from './world.json';
import Lifelines from './chart/Lifelines';
import WorldTimeline from './chart/WorldTimeline';



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
          <WorldTimeline title="World" showDecades events={world} width={width} height={height}/>
          <WorldTimeline position={1} title="Life" events={personal} width={width} height={height}/>
          <WorldTimeline position={2} title="Houses" events={location} width={width} height={height}/>
          
        </>)
      }} />
      {/* <Timeline title="World" events={world} /> */}
      {/* <Timeline title="Personal" events={personal} />
      <Timeline title="Houses" events={location} />
      <Timeline title="Travel & Studies" events={beliefs} /> */}
    </div>
  );
};
