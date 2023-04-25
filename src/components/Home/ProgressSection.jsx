import React, {  useRef } from 'react';
import SELottiePlayer from "../Common/SELottiePlayer";
import SEMuiFloatingActionButton from "../Common/SEMuiFloatingActionButton";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import progressBar from "../../animations/progressBar.json";
import ProgressBar from "./ProgressBar";
import {useUser} from "../../contexts/UserContext";
import {Timer} from "@mui/icons-material";

const ProgressSection = () => {
    const { user, updateUser } = useUser();

    const progressRefCarbon = useRef();
    const progressRefProtein = useRef();
    const fabRef = useRef();

    const handleClick = (e) => {
        progressRefCarbon.current.play(50);
        progressRefProtein.current.play(85);
    }

    const handleClickB = (e) => {
        progressRefCarbon.current.reset();
        progressRefProtein.current.reset();
    }

    const handleClickC = (e) => {
        fabRef.current.tic();
        updateUser({
            name: "aaa",
        });
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
                    <ProgressBar ref={progressRefCarbon} />
                </Grid>
                <Grid item xs={4}>
                    蛋白质
                </Grid>
                <Grid item xs={8}>
                    <ProgressBar ref={progressRefProtein} />
                </Grid>
            </Grid>
        </Container>
        <SEMuiFloatingActionButton
            ref={fabRef}
        />
    </>)
};

export default ProgressSection;