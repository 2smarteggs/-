import {forwardRef, useImperativeHandle, useState} from "react";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const progressBar = forwardRef((props, ref) => {

    const [progress, setProgress] = useState(0);

    /**
     * Play animation to a certain progress
     * @param toProgress a numeric value between 0 and 1
     */
    const _play = (toProgress) => {
        setProgress(toProgress);
    }

    const _reset = () => {
        setProgress(0);
    }

    useImperativeHandle(ref, () => ({
        play(toProgress) {
            _play(toProgress);
        },

        reset() {
            _reset();
        }
    }));

    return (<>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={progress} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    progress,
                )}%`}</Typography>
            </Box>
        </Box>
    </>)
})

export default progressBar;