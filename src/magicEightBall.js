import React, { useState } from "react";
import messages from "./messages"

const magicEightBall = (props) => {
    const randomNum = Math.floor(Math.random() * messages.length) + 1
    const [answer, setAnswer] = useState("Think of a question")
    const [ballColor, setBallColor] = useState()

    const chooseAnswer = () => {
        setAnswer(messages[randomNum]['msg']) 
        setBallColor(messages[randomNum]['color'])
    }

    return (
        <div style={{
            color: {ballColor},
            width: '300px',
            height: '300px',
            borderRadius: '100%'
            }}>
            <h3 className={ballColor} onClick={chooseAnswer()}>{answer}</h3>
        </div>
    )
}
