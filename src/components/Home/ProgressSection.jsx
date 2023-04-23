import React, {  useRef } from 'react';
import SELottiePlayer from "../Common/SELottiePlayer";
import SEMuiFloatingActionButton from "../Common/SEMuiFloatingActionButton";

const ProgressSection = () => {

    const playerRef = useRef();

    const fabRef = useRef();

    const handleClick = (e) => {
        playerRef.current.play(0.9);
    }

    const handleClickB = (e) => {
        playerRef.current.reset();
    }

    const handleClickC = (e) => {
        fabRef.current.tic();
    }

    return(<>
        <button onClick={handleClick}>aaa</button>
        <button onClick={handleClickB}>bbb</button>
        <button onClick={handleClickC}>ccc</button>
        <SELottiePlayer
            ref={playerRef}
            src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
            style={{ height: '300px', width: '300px' }}
        />
        <SEMuiFloatingActionButton
            ref={fabRef}
        />
    </>)
};

export default ProgressSection;