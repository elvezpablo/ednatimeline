import { ReactNode } from "react"


type Props = {    
    width?: number;
    height?: number;
    timelines?: (width: number, height: number) => ReactNode
}

export default function Lifelines({width = 600, height = 750, timelines}:Props) {

    return (
        <svg width={width} height={height} >
            {timelines && timelines(width, height)}
        </svg>
    )
}