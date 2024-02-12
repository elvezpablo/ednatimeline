import { useState } from "react";

type Props = {
    id?: string;
    value: string;
    date: string;
}

export default function InputLabel({ id, value, date }: Props) {
    const [editing, setEditing] = useState(false);



    return (editing ?
        <foreignObject x="20" y="0" width="70" height="20">
            <input type="text" value={value} />
        </foreignObject>
        :
        <>
            <rect x="2" y="0" width="12" height="5" fill="black" />
            <text x="20" y="7" style={{ fontSize: '12px' }}>
                {value}
            </text>
            <text x="20" y="17" style={{ fontSize: '10px', fill: '#666' }}>
                {new Date(date).getFullYear()}
            </text>
        </>
    )
}
