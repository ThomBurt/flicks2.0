import React from 'react';

export function Streaming(props) {
    const s = props.name;
    if (!s) {
        return <div />;
      }

    return(
        <div>
            <p>{s.name}</p>
        </div>
    )
}