import Container from "@mui/material/Container";
import {Avatar, Grid, Icon, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {deepOrange} from "@mui/material/colors";

const AddNewFood = () => {
    return(<>
        <Box sx={{ width: '90%', marginTop: '5%', marginLeft: 'auto', marginRight: 'auto' }}>

            <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                    <div style={{width: '90%'}}>
                        <TextField id="outlined-basic" label="食物名称" variant="outlined" fullWidth />
                    </div>
                    <div>
                        <Avatar sx={{ bgcolor: deepOrange[500], width: 55, height: 55 }} variant="rounded">类别</Avatar>
                    </div>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField id="outlined-basic" label="碳水化合物 克/百克" variant="outlined" fullWidth />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField id="outlined-basic" label="蛋白质 克/百克" variant="outlined" fullWidth />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField id="outlined-basic" label="脂肪 克/百克" variant="outlined" fullWidth />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField id="outlined-basic" label="膳食纤维 克/百克" variant="outlined" fullWidth />
                </Stack>
            </Stack>
        </Box>
    </>)
}

export default AddNewFood;