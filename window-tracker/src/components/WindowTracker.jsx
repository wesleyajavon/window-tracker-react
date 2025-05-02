import { useState, useEffect } from "react"


export default function WindowTracker() {

    /**
         * Challenge:
         * 1. Create state called `windowWidth`, default to 
         *    `window.innerWidth`
         * 2. When the window width changes, update the state
         * 3. Display the window width in the h1 so it updates
         *    every time it changes
         */

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        function watchWindowWidth() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWindowWidth)
        return function() {
            window.removeEventListener("resize", watchWindowWidth)
        }
    }, [])

    return (
        <h1>Window width: {window.innerWidth}</h1>
    )
}
