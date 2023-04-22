import React, { useState, useRef } from 'react';
import SELottiePlayer from "../Common/SELottiePlayer";

const ProgressSection = () => {

    const playerRef = useRef();

    const handleClick = (e) => {
        playerRef.current.play(0.9);
    }

    const handleClickB = (e) => {
        playerRef.current.reset();
    }

    return(<>
        <button onClick={handleClick}>aaa</button>
        <button onClick={handleClickB}>bbb</button>
        <SELottiePlayer
            ref={playerRef}
            src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
            style={{ height: '300px', width: '300px' }}
        />
    </>)
};

export default ProgressSection;