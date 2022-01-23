import React, { useEffect, useRef } from 'react'

export default function ScrollHere() {
    const dummy = useRef()
    useEffect(() => {
        dummy.current.scrollIntoView({ behavior: "smooth" });
        console.log("I scrolled 😎");
    } , [])

    return (
        <>
            <div ref={dummy} className="h-28"></div>
        </>
    )
}
