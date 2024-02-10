import { scaleTime } from 'd3';
import { PatternLines } from '@visx/pattern';

export type Event = {
  start: string;
  end?: Date;
  label: string;
};

type Props = {
  title;
  events?: Event[];
  width?: number;
  height?: number;
};

export default function Timeline({
  title,
  events = [],
  width = 180,
  height = 900,
}: Props) {
  const x = scaleTime([new Date(1929, 0, 1), new Date()], [0, height]);

  return (
    <div>
      <h2 style={{ margin: '.2rem 0', whiteSpace: 'nowrap' }}>{title}</h2>
      <svg width={width} height={height} fill="ccc">
        <PatternLines
          id="lines"
          height={5}
          width={5}
          stroke={'black'}
          strokeWidth={1}
          orientation={['diagonalRightToLeft']}
        />
        <rect
          x="2"
          y="9"
          width="10"
          height={height - 10}
          stroke="black"
          rx="5"
          fill="url('#lines')"
        />
        {events.map((e) => {
          return (
            <g transform={`translate(0,${x(new Date(e.start))})`}>
              {/* <circle r="7" cx="7" cy="9" fill="black" /> */}
              <rect x="1" y="8" width="12" height="4" fill="black" />
              <text y="13" x="20" style={{ fontSize: '12px' }}>
                {e.label}
              </text>
              <text y="23" x="20" style={{ fontSize: '10px', fill: '#666' }}>
                {new Date(e.start).getFullYear()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
