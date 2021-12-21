import React from 'react'
import { FaHandScissors,FaHandRock,FaHandPaper } from 'react-icons/fa';

function ImageCard() {
    return (
        <div>
            <button><FaHandRock/></button>
            <button><FaHandScissors/></button>
            <button><FaHandPaper/></button>
        </div>
    )
}

export default ImageCard
