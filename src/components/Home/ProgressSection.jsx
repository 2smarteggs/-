import React, {  useRef } from 'react';
import SELottiePlayer from "../Common/SELottiePlayer";
import SEMuiFloatingActionButton from "../Common/SEMuiFloatingActionButton";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import progressBar from "../../animations/progressBar.json";

const ProgressSection = () => {

    const playerRefCarbon = useRef();
    const playerRefProtein = useRef();

    const fabRef = useRef();

    const handleClick = (e) => {
        playerRefCarbon.current.play(0.75);
        playerRefProtein.current.play(0.85);
    }

    const handleClickB = (e) => {
        playerRefCarbon.current.reset();
        playerRefProtein.current.reset();
    }

    const handleClickC = (e) => {
        fabRef.current.tic();
    }

    return(<>
        <button onClick={handleClick}>aaa</button>
        <button onClick={handleClickB}>bbb</button>
        <button onClick={handleClickC}>ccc</button>

        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    碳水化合物
                </Grid>
                <Grid item xs={8}>
                    <SELottiePlayer
                        ref={playerRefCarbon}
                        src={progressBar}
                        style={{ height: '100%', width: '100%' }}
                    />
                </Grid>
                <Grid item xs={4}>
                    蛋白质
                </Grid>
                <Grid item xs={8}>
                    <SELottiePlayer
                        ref={playerRefProtein}
                        src={progressBar}
                        style={{ height: '100%', width: '100%' }}
                    />
                </Grid>
            </Grid>
        </Container>
        <SEMuiFloatingActionButton
            ref={fabRef}
        />
    </>)
};

export default ProgressSection;