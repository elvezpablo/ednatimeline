import { useState } from "react";

type Props = {
    id?: string;
    value: string;
    date: string;
}

export default function InputLabel({ id, value, date }: Props) {
    const [editing, setEditing] = useState(false);



    return (editing ?
        <foreignObject x="20" y="0" width="200" height="46">
            <input type="text" value={value} />
            <input
                type="date"
                value={date.substring(0, 10)}
                max={new Date().toISOString().substring(0, 10)}
            />
        </foreignObject>
        :
        <g onClick={() => {
            console.log('onclick')
            setEditing(true)
        }}>
            <rect x="2" y="0" width="12" height="5" fill="black" />
            <text x="20" y="7" style={{ fontSize: '12px' }}>
                {value}
            </text>
            <text x="20" y="17" style={{ fontSize: '10px', fill: '#666' }}>
                {new Date(date).getFullYear()}

            </text>
        </g>
    )
}
