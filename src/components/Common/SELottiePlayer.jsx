import { Player } from '@lottiefiles/react-lottie-player';
import React, { useRef, forwardRef, useState, useEffect, useImperativeHandle } from "react";

const SELottiePlayer = forwardRef((props, ref) => {

    const _props = {
        src: props.src || "",
        style: props.style || undefined,
    }

    const [animation, setAnimation] = useState(null);
    const [currentProgress, setCurrentProgress] = useState(0);
    const [targetProgress, setTargetProgress] = useState(0);
    const playerRef = useRef();

    useEffect(() => {
        console.log(currentProgress, targetProgress)
        if (currentProgress >= targetProgress) {
            playerRef.current.pause();
        }
    }, [currentProgress, targetProgress])

    /**
     * Play animation to a certain progress
     * @param toProgress a numeric value between 0 and 1
     */
    const play = (toProgress) => {
        toProgress = toProgress >= 1 ? 1 : toProgress < 0 ? 0 : toProgress
        setTargetProgress(toProgress)
        if (currentProgress <= toProgress) {
            playerRef.current.play();
        }
    }

    const reset = () => {
        playerRef.current.stop();
    }

    useImperativeHandle(ref, () => ({
        play(toProgress) {
            play(toProgress);
        },

        reset() {
            reset();
        }
    }));

    return (<Player
        src={_props.src}
        style={_props.style}
        ref={playerRef}
        keepLastFrame={true}
        lottieRef={instance => {
            setAnimation(instance); // the lottie instance is returned in the argument of this prop. set it to your local state
        }}
        onEvent={event => {
            if (event === 'frame') {
                setCurrentProgress(animation.currentFrame / animation.totalFrames);
            }
        }}
    >
    </Player>)
})

export default SELottiePlayer;