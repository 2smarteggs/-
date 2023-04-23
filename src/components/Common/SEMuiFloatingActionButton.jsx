import { forwardRef, useImperativeHandle, useState } from "react";
import { useTheme } from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import { green } from '@mui/material/colors';

const SEMuiFloatingActionButton = forwardRef((props, ref) => {

    const theme = useTheme();

    const [value, setValue] = useState(0);

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabStyle = {
        position: 'absolute',
        bottom: 16,
        right: 16,
    };

    const fabGreenStyle = {
        color: 'common.white',
        bgcolor: green[500],
        '&:hover': {
            bgcolor: green[600],
        },
    };

    const fabs = [
        {
            color: 'primary',
            sx: fabStyle,
            icon: <PersonIcon />,
            label: 'Add',
        },
        {
            color: 'inherit',
            sx: { ...fabStyle, ...fabGreenStyle },
            icon: <CheckIcon />,
            label: 'Edit',
        },
    ];

    const _transit = (to) => {
        setValue(to)
    }

    const _tic = () => {
        if (value !== 1) {
            const previousValue = value;
            setValue(1)
            setTimeout(() => {
                setValue(previousValue)
            }, 1000);
        }
    }

    useImperativeHandle(ref, () => ({
        transit(to) {
            _transit(to);
        },
        tic() {
            _tic();
        }
    }));

    return (<>
        {fabs.map((fab, index) => (
            <Zoom
                key={fab.color}
                in={value === index}
                timeout={transitionDuration}
                style={{
                    transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                }}
                unmountOnExit
            >
                <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
                    {fab.icon}
                </Fab>
            </Zoom>
        ))}
    </>);

});

export default SEMuiFloatingActionButton;