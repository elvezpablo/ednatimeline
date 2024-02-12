
import { scaleTime } from 'd3';
import { PatternLines } from '@visx/pattern';
import { TimelineEvent } from '../types';
import InputLabel from './InputLabel';

type Props = {
  title;
  events: TimelineEvent[];
  width?: number;
  height?: number;
  position?: number;
  showDecades?: boolean;
};

const GENESIS = new Date("1929-01-01");

export default function WorldTimeline({ title, events = [], width, height, position = 0, showDecades }: Props) {

  const text_height = 30;
  const gap = 3;
  const bar_y = text_height + gap
  const bar_height = height - bar_y - gap;
  const y = scaleTime([GENESIS, new Date()], [bar_y, bar_y + bar_height]);
  const max_width = width / 3;

  const decades = y.ticks(10);

  return (
    <g transform={`translate(${position * max_width},0)`}>
      {/* <rect width={max_width} height={height} stroke='#e9e9e9' strokeWidth={1} fill='transparent' /> */}
      {/* <rect width={max_width} height={text_height - gap} fill='#e9e9e9' /> */}
      <text x={4} y={20}>{title}</text>
      <PatternLines
        id="lines"
        height={5}
        width={5}
        stroke={'black'}
        strokeWidth={1}
        orientation={['diagonal']}
      />
      <rect
        x="3"
        y={bar_y}
        width="10"
        height={bar_height}
        stroke="black"
        rx="5"
        fill="url('#lines')"
      />
      {/* shows a line and the current decade  */}
      {showDecades && decades.map((d, index) => {
        const y_pos = Math.floor(y(new Date(d)));
        return (index && <g>
          <text x={max_width - 14} y={y_pos + gap} style={{ fontSize: '10px', fill: '#666' }}>
            {index * 10}
          </text>
          <line x1={3} x2={max_width} y1={y_pos - 6} y2={y_pos - 6} stroke="rgb(0,0,0,.3)" strokeWidth={.5} /></g>)
      })}
      {events.map((e) => {
        const y_pos = Math.floor(y(new Date(e.start)));

        return (
          <g transform={`translate(0,${y_pos})`}>
            <InputLabel value={e.label} date={e.start} />
          </g>
        );
      })}

    </g>
  )

}
