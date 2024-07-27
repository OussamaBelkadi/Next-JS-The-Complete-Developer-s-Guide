
// for define the Client component, should you use this declaration 
'use client'

import { useState } from "react"

export default function Colorc() {
    const [colar, setColor] = useState('');
    return(
        <div>
            <input 
            type="text" 
            value={colar}
            onChange={e => setColor(e.target.value)} />
        </div>
    )
}