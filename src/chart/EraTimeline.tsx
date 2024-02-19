
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
    genesis: Date;
};

export default function EraTimeline({ title, events = [], width, height, position = 0, showDecades, genesis }: Props) {

    const text_height = 30;
    const gap = 3;
    const bar_y = text_height + gap
    const bar_height = height - bar_y - gap;
    const bar_width = 10;
    const y = scaleTime([genesis, new Date()], [bar_y, bar_y + bar_height]);
    const max_width = width / 3;

    return (
        <g transform={`translate(${position * max_width},0)`}>
            {/* <rect width={max_width} height={height} stroke='#e9e9e9' strokeWidth={1} fill='transparent' /> */}
            {/* <rect width={max_width} height={text_height - gap} fill='#e9e9e9' /> */}
            {/* <text x={4} y={20}>{title}</text>
            <PatternLines
                id="lines2"
                height={5}
                width={5}
                stroke={'black'}
                strokeWidth={1}
                orientation={['diagonalRightToLeft']}

            />
            <rect
                x="3"
                y={bar_y}
                width={bar_width}
                height={bar_height}
                stroke="black"

                fillOpacity={.4}
                fill="url('#lines2')"
            /> */}


            {events.map((e, index) => {
                const Y_OFFSET = 6;
                const y_pos = Math.max(Math.floor(y(new Date(e.start))), bar_y + Y_OFFSET);
                const line_y = y_pos - Y_OFFSET;
                return (index && <g transform={`translate(${0},${y_pos + 6})`}>
                    <text
                        x={4}
                        text-anchor="start"
                        transform="rotate(90)"
                        style={{ fontSize: '10px', fill: '#666' }}>
                        {e.label}
                    </text>
                    <line x1={0} x2={max_width} y1={0} y2={0} stroke="black" strokeWidth={.5} />

                </g>)
            })}

        </g>
    )

}
